#!/usr/bin/env python3
"""
POSIX unistd.h #defines `access` (and sometimes collides with `error` / `value`).
That breaks websocketpp/logger/levels.hpp first:

  struct channel_type_hint {
    typedef uint32_t value;
    static value const access = 1;   // <- token `access` is macro-expanded
    static value const error = 2;
  };

Patch must run *before* that struct is parsed: insert an undef block right after
the include guard in levels.hpp, and keep secondary patches before namespace in
other headers for headers that pull unistd again later.

Requires: Python 3.6+.
"""
from __future__ import annotations

import pathlib
import sys

MARKER = "NEBULA_POSIX_MACRO_UNDO_V4"

# Unconditional #undef: #ifdef(access) is false when it's a function-like macro name
# but the macro still breaks ::access in source; we must always undef these tokens.
SNIPPET = """// {m}: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names

""".format(m=MARKER)

# Previous patch snippets to strip before re-applying
_STRIP_BLOCKS = (
    # V3
    """// NEBULA_POSIX_MACRO_UNDO_V3: POSIX headers may #define access/error; breaks channel_type_hint::access etc.
#ifdef access
#undef access
#endif
#ifdef error
#undef error
#endif
#ifdef basic
#undef basic
#endif

""",
    """// NEBULA_POSIX_MACRO_UNDO_V3: POSIX headers may #define access/error; breaks channel_type_hint::access etc.
#ifdef access
#undef access
#endif
#ifdef error
#undef error
#endif
#ifdef basic
#undef basic
#endif
""",
    # V2 / V1 (CMake-era)
    "\n// NEBULA_POSIX_MACRO_UNDO_V2: after includes; unistd may redefine access/error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n\n",
    "\n// NEBULA_POSIX_MACRO_UNDO_V2: after includes; unistd may redefine access/error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n",
    "\n// NEBULA_POSIX_MACRO_UNDO: POSIX unistd.h may #define access; breaks channel_type_hint::access / ::error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n\n",
    "\n// NEBULA_POSIX_MACRO_UNDO: POSIX unistd.h may #define access; breaks channel_type_hint::access / ::error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n",
)


def _strip_old(text: str) -> str:
    for b in _STRIP_BLOCKS:
        text = text.replace(b, "")
    return text


def _insert_before_line_starting_with(text: str, line_prefix: str) -> str:
    """Insert SNIPPET immediately before the first line whose stripped content starts with line_prefix."""
    lines = text.splitlines(keepends=True)
    insert_at = None
    for i, line in enumerate(lines):
        if line.lstrip().startswith(line_prefix):
            insert_at = i
            break
    if insert_at is None:
        raise RuntimeError(f"no line starting with {line_prefix!r}")
    out = lines[:insert_at]
    if out and not out[-1].endswith("\n"):
        out[-1] += "\n"
    out.append("\n")
    out.append(SNIPPET)
    out.extend(lines[insert_at:])
    return "".join(out)


def _insert_before_first_namespace_websocketpp(text: str) -> str:
    lines = text.splitlines(keepends=True)
    insert_at = None
    for i, line in enumerate(lines):
        if line.lstrip().startswith("namespace websocketpp"):
            insert_at = i
            break
    if insert_at is None:
        raise RuntimeError("no 'namespace websocketpp'")

    out = lines[:insert_at]
    if out and not out[-1].endswith("\n"):
        out[-1] += "\n"
    out.append("\n")
    out.append(SNIPPET)
    out.extend(lines[insert_at:])
    return "".join(out)


def _patch_file(path: pathlib.Path, mode: str) -> bool:
    raw = path.read_text(encoding="utf-8")
    if MARKER in raw:
        print(f"skip (already {MARKER}): {path}", file=sys.stderr)
        return False

    text = _strip_old(raw)

    if mode == "before_struct_channel_type_hint":
        # Must be after #includes in this file (they may pull unistd.h) and before the struct that
        # declares `static value const access` / `error` (POSIX macros break those lines).
        text = _insert_before_line_starting_with(text, "struct channel_type_hint")
    elif mode == "before_namespace":
        text = _insert_before_first_namespace_websocketpp(text)
    else:
        raise ValueError(mode)

    path.write_text(text, encoding="utf-8")
    print(f"patched: {path}", file=sys.stderr)
    return True


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: patch_websocketpp.py <WEBSOCKETPP_ROOT>", file=sys.stderr)
        return 2
    root = pathlib.Path(sys.argv[1])
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}", file=sys.stderr)
        return 1

    jobs = (
        ("websocketpp/logger/levels.hpp", "before_struct_channel_type_hint"),
        ("websocketpp/logger/basic.hpp", "before_namespace"),
        ("websocketpp/endpoint.hpp", "before_namespace"),
        ("websocketpp/roles/server_endpoint.hpp", "before_namespace"),
    )

    any_ok = False
    for rel, mode in jobs:
        p = root / rel
        if not p.is_file():
            print(f"ERROR: missing {p}", file=sys.stderr)
            return 1
        try:
            if _patch_file(p, mode):
                any_ok = True
        except RuntimeError as e:
            print(f"ERROR: {p}: {e}", file=sys.stderr)
            return 1

    if any_ok:
        print(f"WebSocket++: Python patch ({MARKER}) applied under {root}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
