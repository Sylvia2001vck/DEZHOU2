# Ubuntu 22.04 LTS ships CMake 3.22; avoid requiring 3.24+ unless necessary
cmake_minimum_required(VERSION 3.22)
project(nebula_poker_cpp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

include("${CMAKE_CURRENT_SOURCE_DIR}/cmake/NebulaPatchWebSocketPP.cmake")
include(FetchContent)

option(NEBULA_ENABLE_MYSQL "Enable MySQL-backed user persistence" ON)
option(NEBULA_ENABLE_REDIS "Enable Redis-backed leaderboards" ON)

FetchContent_Declare(
  asio
  GIT_REPOSITORY https://github.com/chriskohlhoff/asio.git
  GIT_TAG asio-1-30-2
)

FetchContent_MakeAvailable(asio)

# WebSocket++：Ubuntu jammy 的 libwebsocketpp-dev 多为 0.8.2，在 GCC 11+ 下与部分头/宏组合会解析失败。
# 默认从 GitHub 拉取 master（或设 extern/websocketpp 离线使用）。
set(_WSPP_LOCAL "${CMAKE_CURRENT_SOURCE_DIR}/extern/websocketpp")
if(EXISTS "${_WSPP_LOCAL}/websocketpp/server.hpp")
  set(WEBSOCKETPP_ROOT "${_WSPP_LOCAL}")
  message(STATUS "WebSocket++: using local ${_WSPP_LOCAL}")
else()
  FetchContent_Declare(
    websocketpp
    GIT_REPOSITORY https://github.com/zaphoyd/websocketpp.git
    GIT_TAG master
  )
  # 不要用 MakeAvailable：会执行 websocketpp 顶层 CMakeLists，多一层子工程且与头文件-only 用法无关。
  FetchContent_GetProperties(websocketpp)
  if(NOT websocketpp_POPULATED)
    FetchContent_Populate(websocketpp)
  endif()
  set(WEBSOCKETPP_ROOT "${websocketpp_SOURCE_DIR}")
  message(STATUS "WebSocket++: FetchContent Populate (headers only) -> ${WEBSOCKETPP_ROOT}")
endif()

# 必须在 unistd.h 再次 #define access 之后仍生效：对头文件打补丁（-Uaccess 单独不够）。
nebula_patch_websocketpp_headers("${WEBSOCKETPP_ROOT}")

find_package(Threads REQUIRED)

# 使用系统 Protobuf（apt: protobuf-compiler libprotobuf-dev）。
# 从源码 Fetch Protobuf 后再 find_package(Protobuf MODULE) 往往找不到，且依赖 CMake 3.24+ 的 OVERRIDE_FIND_PACKAGE。
find_package(Protobuf REQUIRED)
if(NOT Protobuf_PROTOC_EXECUTABLE)
  message(FATAL_ERROR "protoc not found. Install: sudo apt install protobuf-compiler libprotobuf-dev")
endif()

find_path(MYSQL_INCLUDE_DIR mysql.h PATH_SUFFIXES mysql mariadb)
find_library(MYSQL_LIBRARY NAMES mysqlclient libmysql mariadb libmariadb)
if(NEBULA_ENABLE_MYSQL AND MYSQL_INCLUDE_DIR AND MYSQL_LIBRARY)
  set(NEBULA_HAVE_MYSQL ON)
endif()

find_path(HIREDIS_INCLUDE_DIR hiredis/hiredis.h)
find_library(HIREDIS_LIBRARY NAMES hiredis)
if(NEBULA_ENABLE_REDIS AND HIREDIS_INCLUDE_DIR AND HIREDIS_LIBRARY)
  set(NEBULA_HAVE_HIREDIS ON)
endif()

add_executable(
  nebula-poker-server
  src/main.cpp
)

set(PROTO_FILE ${CMAKE_CURRENT_SOURCE_DIR}/proto/poker.proto)
protobuf_generate(
  TARGET nebula-poker-server
  LANGUAGE cpp
  PROTOS ${PROTO_FILE}
)

target_include_directories(
  nebula-poker-server
  PRIVATE
    ${CMAKE_CURRENT_BINARY_DIR}
    # protobuf_generate 输出与 .proto 相对路径一致：build/proto/poker.pb.h
    ${CMAKE_CURRENT_BINARY_DIR}/proto
    ${CMAKE_CURRENT_SOURCE_DIR}/src
    ${asio_SOURCE_DIR}/asio/include
    ${WEBSOCKETPP_ROOT}
)

target_compile_definitions(
  nebula-poker-server
  PRIVATE
    ASIO_STANDALONE
    _WEBSOCKETPP_CPP11_STL_
)

if(NEBULA_HAVE_MYSQL)
  target_include_directories(nebula-poker-server PRIVATE ${MYSQL_INCLUDE_DIR})
  target_link_libraries(nebula-poker-server PRIVATE ${MYSQL_LIBRARY})
  target_compile_definitions(nebula-poker-server PRIVATE NEBULA_HAVE_MYSQL=1)
endif()

if(NEBULA_HAVE_HIREDIS)
  target_include_directories(nebula-poker-server PRIVATE ${HIREDIS_INCLUDE_DIR})
  target_link_libraries(nebula-poker-server PRIVATE ${HIREDIS_LIBRARY})
  target_compile_definitions(nebula-poker-server PRIVATE NEBULA_HAVE_HIREDIS=1)
endif()

target_link_libraries(
  nebula-poker-server
  PRIVATE
    protobuf::libprotobuf
    Threads::Threads
)

if(MSVC)
  target_compile_options(nebula-poker-server PRIVATE /W4 /permissive-)
else()
  # BEFORE 必须紧跟在 target 名之后；若写成 PRIVATE BEFORE …，会把字面量 BEFORE 传给 c++。
  # -Uaccess / -Uerror：避免 unistd.h 等把 access / error 定义成宏，破坏 channel_type_hint::access|error。
  target_compile_options(
    nebula-poker-server
    BEFORE PRIVATE
    $<$<COMPILE_LANGUAGE:CXX>:-Uaccess>
    $<$<COMPILE_LANGUAGE:CXX>:-Uerror>
    -Wall
    -Wextra
    -Wpedantic
  )
endif()
