# WebSocket++: POSIX unistd.h #defines `access` after includes; breaks
# channel_type_hint::access. CMake regex patches were fragile; use Python to insert
# #undef immediately before `namespace websocketpp` (after all #includes in each file).

function(nebula_patch_websocketpp_headers root)
  find_program(NEBULA_PYTHON3 NAMES python3 python)
  if(NOT NEBULA_PYTHON3)
    message(FATAL_ERROR "python3 not found; required to patch websocketpp headers (sudo apt install python3)")
  endif()

  set(_script "${CMAKE_CURRENT_SOURCE_DIR}/cmake/patch_websocketpp.py")
  if(NOT EXISTS "${_script}")
    message(FATAL_ERROR "missing ${_script}")
  endif()

  message(STATUS "WebSocket++: running Python patch (V6) on ${root}")

  execute_process(
    COMMAND "${NEBULA_PYTHON3}" "${_script}" "${root}"
    RESULT_VARIABLE _nebula_wspp_rc
    OUTPUT_VARIABLE _nebula_wspp_out
    ERROR_VARIABLE _nebula_wspp_err
  )
  if(NOT _nebula_wspp_rc EQUAL 0)
    message(FATAL_ERROR "websocketpp patch failed (rc=${_nebula_wspp_rc}):\n${_nebula_wspp_err}\n${_nebula_wspp_out}")
  endif()
  if(_nebula_wspp_err)
    message(STATUS "${_nebula_wspp_err}")
  endif()
  message(STATUS "WebSocket++: Python patch (V6) finished successfully")
endfunction()
