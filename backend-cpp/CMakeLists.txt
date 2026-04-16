# Ubuntu 22.04 LTS ships CMake 3.22; avoid requiring 3.24+ unless necessary
cmake_minimum_required(VERSION 3.22)
project(nebula_poker_cpp LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(Boost 1.71 REQUIRED COMPONENTS system thread)
find_package(Threads REQUIRED)

include(FetchContent)
FetchContent_Declare(
  nlohmann_json
  GIT_REPOSITORY https://github.com/nlohmann/json.git
  GIT_TAG v3.11.3
  GIT_SHALLOW TRUE
)
set(JSON_BuildTests OFF CACHE BOOL "" FORCE)
set(JSON_Install OFF CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(nlohmann_json)

option(NEBULA_ENABLE_MYSQL "Enable MySQL-backed user persistence" ON)
option(NEBULA_ENABLE_REDIS "Enable Redis-backed leaderboards" ON)

# 使用系统 Protobuf（apt: protobuf-compiler libprotobuf-dev）。
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
    ${CMAKE_CURRENT_BINARY_DIR}/proto
    ${CMAKE_CURRENT_SOURCE_DIR}/src
)

target_link_libraries(
  nebula-poker-server
  PRIVATE
    Boost::system
    Boost::thread
    protobuf::libprotobuf
    Threads::Threads
    nlohmann_json::nlohmann_json
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

if(MSVC)
  target_compile_options(nebula-poker-server PRIVATE /W4 /permissive-)
else()
  target_compile_options(
    nebula-poker-server
    PRIVATE
    -Wall
    -Wextra
    -Wpedantic
  )
endif()
