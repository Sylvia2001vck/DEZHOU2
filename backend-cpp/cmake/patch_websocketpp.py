#!/usr/bin/env python3
"""
Insert #undef after all #includes in selected websocketpp headers, immediately before
the opening `namespace websocketpp`. CMake -Uaccess cannot help: unistd.h re-#defines
`access` after our undef, when those includes are processed inside this header.

Requires: Python 3.6+ (Ubuntu 22.04+ has python3).
"""
from __future__ import annotations

import pathlib
import sys

MARKER = "NEBULA_POSIX_MACRO_UNDO_V3"

SNIPPET = """// {marker}: POSIX headers may #define access/error; breaks channel_type_hint::access etc.
#ifdef access
#undef access
#endif
#ifdef error
#undef error
#endif
#ifdef basic
#undef basic
#endif

""".format(marker=MARKER)

# Old CMake-driven patches (exact substrings we may have written)
_LEGACY_BLOCKS = (
    # V2 comment variants
    "\n// NEBULA_POSIX_MACRO_UNDO_V2: after includes; unistd may redefine access/error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n\n",
    "\n// NEBULA_POSIX_MACRO_UNDO_V2: after includes; unistd may redefine access/error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n",
    # V1
    "\n// NEBULA_POSIX_MACRO_UNDO: POSIX unistd.h may #define access; breaks channel_type_hint::access / ::error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n\n",
    "\n// NEBULA_POSIX_MACRO_UNDO: POSIX unistd.h may #define access; breaks channel_type_hint::access / ::error\n"
    "#ifdef access\n#undef access\n#endif\n#ifdef error\n#undef error\n#endif\n",
)


def _strip_legacy(text: str) -> str:
    for block in _LEGACY_BLOCKS:
        text = text.replace(block, "")
    return text


def _patch_one(path: pathlib.Path) -> bool:
    raw = path.read_text(encoding="utf-8")
    if MARKER in raw:
        print(f"skip (already patched): {path}", file=sys.stderr)
        return False

    text = _strip_legacy(raw)

    lines = text.splitlines(keepends=True)
    insert_at = None
    for i, line in enumerate(lines):
        if line.lstrip().startswith("namespace websocketpp"):
            insert_at = i
            break
    if insert_at is None:
        print(f"ERROR: no 'namespace websocketpp' in {path}", file=sys.stderr)
        raise SystemExit(1)

    out = lines[:insert_at]
    if out and not out[-1].endswith("\n"):
        out[-1] += "\n"
    out.append("\n")
    out.append(SNIPPET)
    out.extend(lines[insert_at:])

    path.write_text("".join(out), encoding="utf-8")
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

    rels = (
        "websocketpp/logger/basic.hpp",
        "websocketpp/endpoint.hpp",
        "websocketpp/roles/server_endpoint.hpp",
    )
    any_ok = False
    for rel in rels:
        p = root / rel
        if not p.is_file():
            print(f"ERROR: missing {p}", file=sys.stderr)
            return 1
        if _patch_one(p):
            any_ok = True

    if any_ok:
        print(f"WebSocket++: Python patch applied under {root}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
