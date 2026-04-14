# WebSocket++ uses names like channel_type_hint::access and ::error. POSIX headers
# (e.g. unistd.h) often #define access (and sometimes error). Compiler flags -Uaccess
# only clear macros before preprocessing; a later #include can redefine them before
# websocketpp/logger/basic.hpp is parsed. Patch the headers once after FetchContent.

function(nebula_patch_websocketpp_headers root)
  if(NOT EXISTS "${root}/websocketpp/logger/basic.hpp")
    message(WARNING "nebula_patch_websocketpp_headers: not a websocketpp tree: ${root}")
    return()
  endif()

  set(_snippet [[

// NEBULA_POSIX_MACRO_UNDO: POSIX unistd.h may #define access; breaks channel_type_hint::access / ::error
#ifdef access
#undef access
#endif
#ifdef error
#undef error
#endif
]])

  set(_files
    "websocketpp/logger/basic.hpp"
    "websocketpp/endpoint.hpp"
    "websocketpp/roles/server_endpoint.hpp"
  )

  set(_patched FALSE)
  foreach(_rel IN LISTS _files)
    set(_f "${root}/${_rel}")
    if(NOT EXISTS "${_f}")
      continue()
    endif()
    file(READ "${_f}" _c)
    string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO" _found)
    if(NOT _found EQUAL -1)
      continue()
    endif()
    string(REGEX MATCH "[^\r\n]*#define WEBSOCKETPP_[A-Z0-9_]+_HPP" _guardline "${_c}")
    if(_guardline STREQUAL "")
      message(WARNING "NEBULA: include guard not found in ${_f}")
      continue()
    endif()
    string(REPLACE "${_guardline}" "${_guardline}\n${_snippet}" _c "${_c}")
    file(WRITE "${_f}" "${_c}")
    set(_patched TRUE)
  endforeach()

  if(_patched)
    message(STATUS "WebSocket++: patched POSIX macro guards (access/error) under ${root}")
  endif()
endfunction()
