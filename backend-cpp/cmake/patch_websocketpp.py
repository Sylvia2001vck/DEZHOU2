#!/usr/bin/env python3
"""
POSIX macros (access, error, basic, names, value) break websocketpp headers.

See NEBULA_POSIX_MACRO_UNDO_V6 in SNIPPET. basic.hpp needs TWO undef regions:
  1) before the first `namespace websocketpp` (after this file's #includes)
  2) immediately before `template ... class basic` — macros can be reintroduced
     by includes pulled in before core.hpp includes this file, and GCC still
     chokes on constructor/destructor names if `basic` is a macro.

Requires: Python 3.6+.
"""
from __future__ import annotations

import pathlib
import sys

MARKER = "NEBULA_POSIX_MACRO_UNDO_V6"
TEMPLATE_GUARD = "NEBULA_TEMPLATE_BASIC_GUARD"

SNIPPET = """// {m}: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names

""".format(m=MARKER)

SNIPPET_BEFORE_TEMPLATE_BASIC = """// {tg}: repeat undef right before template class basic (macro may return)
#undef access
#undef error
#undef value
#undef basic
#undef names

""".format(tg=TEMPLATE_GUARD)

# Older patch snippets (strip before re-applying)
_STRIP_BLOCKS = (
    # V5
    """// NEBULA_POSIX_MACRO_UNDO_V5: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names

""",
    """// NEBULA_POSIX_MACRO_UNDO_V5: POSIX macros break channel_type_hint::access/error/value and template name `basic`
#undef access
#undef error
#undef value
#undef basic
#undef names
""",
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
    # remove second guard block from older runs if we change wording
    text = text.replace(SNIPPET_BEFORE_TEMPLATE_BASIC, "")
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


def _insert_before_template_class_basic(text: str) -> str:
    """Insert SNIPPET_BEFORE_TEMPLATE_BASIC before `template ...` line that precedes `class basic`."""
    lines = text.splitlines(keepends=True)
    insert_at = None
    for i in range(len(lines) - 1):
        if lines[i].lstrip().startswith("template") and "class basic" in lines[i + 1]:
            insert_at = i
            break
    if insert_at is None:
        for i in range(1, len(lines)):
            if "class basic" in lines[i] and "template" in lines[i - 1]:
                insert_at = i - 1
                break
    if insert_at is None:
        for i, line in enumerate(lines):
            if "template" in line and "class basic" in line:
                insert_at = i
                break
    if insert_at is None:
        raise RuntimeError("template/class basic pair not found")

    out = lines[:insert_at]
    if out and not out[-1].endswith("\n"):
        out[-1] += "\n"
    out.append("\n")
    out.append(SNIPPET_BEFORE_TEMPLATE_BASIC)
    out.extend(lines[insert_at:])
    return "".join(out)


def _patch_file(path: pathlib.Path, mode: str) -> bool:
    raw = path.read_text(encoding="utf-8")

    if mode == "basic_hpp_twice":
        # Idempotent: need both main marker and template guard.
        if MARKER in raw and TEMPLATE_GUARD in raw:
            print(f"skip (already {MARKER}+{TEMPLATE_GUARD}): {path}", file=sys.stderr)
            return False

        text = _strip_old(raw)

        if MARKER not in text:
            text = _insert_before_first_namespace_websocketpp(text)
        if TEMPLATE_GUARD not in text:
            text = _insert_before_template_class_basic(text)

        path.write_text(text, encoding="utf-8")
        print(f"patched: {path}", file=sys.stderr)
        return True

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

    jobs = (
        ("websocketpp/config/core.hpp", "after_loggers_in_core"),
        ("websocketpp/logger/levels.hpp", "before_struct_channel_type_hint"),
        ("websocketpp/logger/stub.hpp", "before_namespace"),
        ("websocketpp/logger/basic.hpp", "basic_hpp_twice"),
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
