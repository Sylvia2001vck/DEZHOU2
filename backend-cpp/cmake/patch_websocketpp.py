#!/usr/bin/env python3
"""
POSIX unistd.h #defines `access` (and sometimes collides with `error` / `value`).
That breaks websocketpp/logger/levels.hpp:

  struct channel_type_hint {
    typedef uint32_t value;
    static value const access = 1;
    static value const error = 2;
  };

core.hpp includes <websocketpp/logger/stub.hpp> before <.../basic.hpp>; stub.hpp
uses channel_type_hint::value in constructors, so we also patch:
  - config/core.hpp: undef right after the `// Loggers` line (before stub/basic includes)
  - logger/stub.hpp: undef before namespace (after its #includes)
  - logger/levels.hpp: undef immediately before `struct channel_type_hint`

Requires: Python 3.6+.
"""
from __future__ import annotations

import pathlib
import sys

MARKER = "NEBULA_POSIX_MACRO_UNDO_V5"

SNIPPET = """// {m}: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names

""".format(m=MARKER)

# Older patch snippets (strip before re-applying)
_STRIP_BLOCKS = (
    # V4
    """// NEBULA_POSIX_MACRO_UNDO_V4: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names

""",
    """// NEBULA_POSIX_MACRO_UNDO_V4: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names
""",
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


def _insert_after_line_containing(text: str, line_substr: str) -> str:
    """Insert SNIPPET after the first line that contains line_substr (e.g. '// Loggers')."""
    lines = text.splitlines(keepends=True)
    insert_at = None
    for i, line in enumerate(lines):
        if line_substr in line:
            insert_at = i + 1
            break
    if insert_at is None:
        raise RuntimeError(f"no line containing {line_substr!r}")
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

    if mode == "after_loggers_in_core":
        text = _insert_after_line_containing(text, "// Loggers")
    elif mode == "before_struct_channel_type_hint":
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

    # Order matters for human readability only; each file is independent.
    jobs = (
        ("websocketpp/config/core.hpp", "after_loggers_in_core"),
        ("websocketpp/logger/levels.hpp", "before_struct_channel_type_hint"),
        ("websocketpp/logger/stub.hpp", "before_namespace"),
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
