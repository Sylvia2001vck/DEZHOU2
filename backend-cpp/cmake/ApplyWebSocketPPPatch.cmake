# Apply a unified diff to FetchContent-populated WebSocket++ (git apply).
# CMake < 3.24 has no FetchContent(PATCH_COMMAND); keep cmake_minimum_required 3.22.

function(nebula_apply_websocketpp_patch root patch_file)
  if(NOT EXISTS "${patch_file}")
    message(FATAL_ERROR "WebSocket++ patch missing: ${patch_file}")
  endif()

  find_program(NEBULA_GIT_EXECUTABLE NAMES git REQUIRED)

  set(_levels "${root}/websocketpp/logger/levels.hpp")
  if(NOT EXISTS "${_levels}")
    message(FATAL_ERROR "WebSocket++ tree looks wrong: ${_levels}")
  endif()

  file(READ "${_levels}" _chk)
  if(_chk MATCHES "Nebula \\(POSIX\\)")
    message(STATUS "WebSocket++: POSIX patch already applied (skip): ${patch_file}")
    return()
  endif()

  execute_process(
    COMMAND "${NEBULA_GIT_EXECUTABLE}" -C "${root}" apply --whitespace=nowarn "${patch_file}"
    RESULT_VARIABLE _rc
    OUTPUT_VARIABLE _out
    ERROR_VARIABLE _err
  )
  if(NOT _rc EQUAL 0)
    message(FATAL_ERROR "git apply failed (rc=${_rc}): ${_err}\n${_out}")
  endif()
  message(STATUS "WebSocket++: applied patch ${patch_file}")
endfunction()
