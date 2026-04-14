# Ubuntu 22.04 LTS ships CMake 3.22; avoid requiring 3.24+ unless necessary
cmake_minimum_required(VERSION 3.22)
project(nebula_poker_cpp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

include(FetchContent)

option(NEBULA_ENABLE_MYSQL "Enable MySQL-backed user persistence" ON)
option(NEBULA_ENABLE_REDIS "Enable Redis-backed leaderboards" ON)

FetchContent_Declare(
  asio
  GIT_REPOSITORY https://github.com/chriskohlhoff/asio.git
  GIT_TAG asio-1-30-2
)

FetchContent_MakeAvailable(asio)

# WebSocket++：使用系统头文件（apt: libwebsocketpp-dev）。FetchContent 拉取的版本在部分环境下易与 GCC/宏污染冲突。
find_path(
  WEBSOCKETPP_INCLUDE_DIR
  NAMES websocketpp/server.hpp
  DOC "Path to WebSocket++ headers (parent of the websocketpp/ directory)"
)
if(NOT WEBSOCKETPP_INCLUDE_DIR)
  message(FATAL_ERROR "WebSocket++ headers not found. Install: sudo apt install libwebsocketpp-dev")
endif()

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
    ${WEBSOCKETPP_INCLUDE_DIR}
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
  target_compile_options(nebula-poker-server PRIVATE -Wall -Wextra -Wpedantic)
endif()
