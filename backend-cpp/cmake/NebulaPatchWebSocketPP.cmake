# WebSocket++ uses channel_type_hint::access and ::error. POSIX headers (e.g. unistd.h)
# #define access. Putting #undef only after the include guard runs *before* this file's
# #include lines, so unistd can redefine access again before "class basic". Patch must
# appear after those includes — immediately before the first template/class in each file.

function(nebula_strip_old_wspp_v1 _out _in)
  set(_c "${_in}")
  string(REGEX REPLACE
    "\r?\n// NEBULA_POSIX_MACRO_UNDO: POSIX unistd\.h[^\r\n]*\r?\n#ifdef access\r?\n#undef access\r?\n#endif\r?\n#ifdef error\r?\n#undef error\r?\n#endif"
    ""
    _c "${_c}")
  set(${_out} "${_c}" PARENT_SCOPE)
endfunction()

function(nebula_patch_websocketpp_headers root)
  if(NOT EXISTS "${root}/websocketpp/logger/basic.hpp")
    message(WARNING "nebula_patch_websocketpp_headers: not a websocketpp tree: ${root}")
    return()
  endif()

  set(_snippet [[

// NEBULA_POSIX_MACRO_UNDO_V2: after includes; unistd may redefine access/error
#ifdef access
#undef access
#endif
#ifdef error
#undef error
#endif
]])

  set(_patched FALSE)

  # --- logger/basic.hpp: insert after all #includes, before template class basic
  set(_f "${root}/websocketpp/logger/basic.hpp")
  if(EXISTS "${_f}")
    file(READ "${_f}" _c)
    string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _has)
    if(_has EQUAL -1)
      nebula_strip_old_wspp_v1(_c "${_c}")
      string(REGEX REPLACE
        "(namespace websocketpp \{\r?\nnamespace log \{\r?\n\r?\n)(/// Basic logger that outputs to an ostream)"
        "\\1${_snippet}\\2"
        _c "${_c}")
      string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _ok)
      if(_ok EQUAL -1)
        message(WARNING "NEBULA: regex did not patch ${_f} (upstream basic.hpp text changed?)")
      else()
        file(WRITE "${_f}" "${_c}")
        set(_patched TRUE)
      endif()
    endif()
  endif()

  # --- endpoint.hpp
  set(_f "${root}/websocketpp/endpoint.hpp")
  if(EXISTS "${_f}")
    file(READ "${_f}" _c)
    string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _has)
    if(_has EQUAL -1)
      nebula_strip_old_wspp_v1(_c "${_c}")
      string(REGEX REPLACE
        "(namespace websocketpp \{\r?\n\r?\n)(/// Creates and manages connections associated with a WebSocket endpoint)"
        "\\1${_snippet}\\2"
        _c "${_c}")
      string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _ok)
      if(_ok EQUAL -1)
        message(WARNING "NEBULA: regex did not patch ${_f} (upstream endpoint.hpp text changed?)")
      else()
        file(WRITE "${_f}" "${_c}")
        set(_patched TRUE)
      endif()
    endif()
  endif()

  # --- roles/server_endpoint.hpp
  set(_f "${root}/websocketpp/roles/server_endpoint.hpp")
  if(EXISTS "${_f}")
    file(READ "${_f}" _c)
    string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _has)
    if(_has EQUAL -1)
      nebula_strip_old_wspp_v1(_c "${_c}")
      string(REGEX REPLACE
        "(namespace websocketpp \{\r?\n\r?\n)(/// Server endpoint role based on the given config)"
        "\\1${_snippet}\\2"
        _c "${_c}")
      string(FIND "${_c}" "NEBULA_POSIX_MACRO_UNDO_V2" _ok)
      if(_ok EQUAL -1)
        message(WARNING "NEBULA: regex did not patch ${_f} (upstream server_endpoint.hpp text changed?)")
      else()
        file(WRITE "${_f}" "${_c}")
        set(_patched TRUE)
      endif()
    endif()
  endif()

  if(_patched)
    message(STATUS "WebSocket++: patched POSIX macro guards (NEBULA V2) under ${root}")
  endif()
endfunction()
