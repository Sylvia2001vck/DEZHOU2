# WSL Ubuntu：本地 MySQL + Redis + C++ 后端

## 好友房在做什么（和「联机」无关的叫法）

你要的是：**在服务器上创建一个房间**，得到一个 **房间码**；之后 **任何人、在任何地方、用任何网络**，只要浏览器能访问 **同一台后端**（公网 IP 或域名），凭房间码就能进同一间房。  
这不是局域网直连或主机转发，而是典型的 **客户端 → 你的服务器 → 房间状态（HTTP 创建/加入 + WebSocket 同步）**。

- **本地 / WSL**：用 `127.0.0.1` 或局域网 IP，方便自己调试。
- **云上**：把 **`nebula-poker-server`** 绑在公网可访问的地址上，安全组 / 防火墙放行 **HTTP(S) 与 WebSocket**（例如 443 经 Nginx，或直连 3000），所有人访问 **同一个站点** 即可跨地区进房。

下面文档里说的「在线」「进房」，指的都是这种 **中心化好友房**，不是单独一种「联机模式」产品名。

---

目标：在 **WSL2 Ubuntu** 里跑 **与云上同构** 的 **MySQL + Redis + `nebula-poker-server`**，浏览器访问 `http://127.0.0.1:3000` 做本地调试。

---

## 1. 安装服务

```bash
sudo apt update
sudo apt install -y mysql-server redis-server
```

启动（Ubuntu 常见服务名）：

```bash
sudo service mysql start
sudo service redis-server start
```

验证：

```bash
mysql --version
redis-cli ping   # 应返回 PONG
```

---

## 2. MySQL：建库、建用户、权限

**不需要**单独导入 `.sql` 表结构文件：`backend-cpp` 在第一次访问用户/鉴权时会对已连接库执行 `CREATE TABLE IF NOT EXISTS`（`users`、`auth_users`）。你只要先有一个**空库**和**能连上的账号**。

用 root 进 MySQL（WSL 常见无密码或 `sudo mysql`）：

```bash
sudo mysql
```

在 `mysql>` 里执行（按需要改密码）：

```sql
CREATE DATABASE IF NOT EXISTS nebula_poker CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'nebula'@'localhost' IDENTIFIED BY '你的密码';
GRANT ALL PRIVILEGES ON nebula_poker.* TO 'nebula'@'localhost';
FLUSH PRIVILEGES;
```

退出：`EXIT;`

测试连接：

```bash
mysql -u nebula -p -h 127.0.0.1 nebula_poker
```

---

## 3. Redis

本机开发默认即可：

```bash
redis-cli ping
```

如需密码，在 `redis.conf` 里设 `requirepass`，并设置环境变量（若你后续在代码里读密码；当前 C++ 侧多为 host+port）。

---

## 4. 编译 C++（需链上 MySQL / hiredis）

在**仓库根目录**（例如 `~/DEZHOU`）：

```bash
sudo apt install -y build-essential cmake libboost-dev libboost-system-dev libboost-thread-dev \
  protobuf-compiler libprotobuf-dev default-libmysqlclient-dev libhiredis-dev

cmake -S backend-cpp -B build-cpp -DCMAKE_BUILD_TYPE=Release
cmake --build build-cpp -j2
```

CMake 若检测到 `mysql.h` / `hiredis`，会在编译里打开 `NEBULA_HAVE_MYSQL` / `NEBULA_HAVE_HIREDIS`。

---

## 5. 环境变量与启动

从**仓库根**启动（保证能读到 `index.html`、`proto-socket.js`、`backend-cpp/proto/poker.proto`）：

```bash
cd /path/to/DEZHOU
export NEBULA_REPO_ROOT="$(pwd)"
export PORT=3000
export MYSQL_HOST=127.0.0.1
export MYSQL_PORT=3306
export MYSQL_USER=nebula
export MYSQL_PASSWORD='你的密码'
export MYSQL_DATABASE=nebula_poker
export REDIS_HOST=127.0.0.1
export REDIS_PORT=6379

./build-cpp/nebula-poker-server
```

### 地址一览（WSL Ubuntu 本机调试）

假设 **`PORT=3000`** 且你在 WSL 里启动进程，下面这些地址都指向 **同一台 C++ 后端**（把 `127.0.0.1` 换成 `localhost` 等价）。

| 用途 | 地址 |
|------|------|
| 游戏页面（浏览器打开） | `http://127.0.0.1:3000/` |
| 健康检查 | `http://127.0.0.1:3000/healthz` |
| Protobuf 定义（前端会拉） | `http://127.0.0.1:3000/proto/poker.proto` |
| WebSocket（Protobuf 帧，由浏览器自动连） | `ws://127.0.0.1:3000/ws` |

在 **Windows 本机浏览器** 里访问 WSL 里监听的 3000 端口：一般直接打开 **`http://127.0.0.1:3000/`** 或 **`http://localhost:3000/`** 即可（WSL2 默认会把 `localhost` 转发进发行版）。若个别环境不通，可在 WSL 里执行 `hostname -I` 取第一个局域网 IP，用 **`http://<该IP>:3000/`**（需防火墙放行）。

**不要用 `npm start` 占 3000**，否则和 C++ 冲突；联机只跑 **`./build-cpp/nebula-poker-server`**。

---

## 6. 表结构从哪来？

- **`users`**、**`auth_users`**：由 `MySqlUserStore` / `MySqlAuthStore` 的 `ensure_schema()` 自动创建（见 `backend-cpp/src/main.cpp`）。
- 若连接失败（密码错、库不存在），会退化为内存实现或报错，需在日志与 `mysql` 连接上排查。

---

# 前端各界面与后端依赖（为何「好友房进不去」）

下面说明 **`index.html` 单页**里，**非离线**（连服务器）时各块依赖什么；用于解释「创建房间 HTTP 成功但进房没反应」。

## A. 是否走服务器（原「联机」开关）`IS_MULTIPLAYER`

- 由 **`?offline=1` / `file://`** 与 **`createProtoSocket` 是否成功** 等共同决定。
- **`proto-socket.js`** 会连接 **`ws(s)://当前站点/ws`**，用 **Protobuf 二进制帧** 与 C++ 对齐。

## B. HTTP（REST）

| 功能 | 路径（示例） | 谁实现 |
|------|----------------|--------|
| 注册/登录/会话 | `/api/auth/register`、`/api/auth/login`、`/api/auth/me` | **C++ 主实现**；`npm start` 下为内存兼容（无持久化） |
| 大厅概览/排行榜 | `/api/home/overview`、`/api/leaderboard` | C++；Node 为 stub |
| 好友房创建/加入 | `POST /api/friend-rooms/create`、`/api/friend-rooms/join` | C++；Node 为内存 stub |

## C. 实时（好友房、座位、牌局）

- **`enterLobbyRoom(roomCode)`** 在成功拿到 `roomCode` 后会：
  - `wireMultiplayer()` 里对 **`socket.emit('join_room', { roomId, name, ... })`**
  - 这里的 **`socket` 来自 `createProtoSocket()`**，**不是** Socket.io。
  - 帧格式为 **`nebula.poker.Envelope` + `JoinRoomRequest`**，走 **WebSocket `/ws`**。

因此：

- **只跑 `npm start`（Node）**：可以靠我们加的 stub **创建/加入 HTTP 房间码**，但 **没有** 与前端一致的 **`/ws` Protobuf 服务**，WebSocket 无法与旧 Socket.io 互通 → **`join_room` 发不出去或无人应答** → 表现为 **进房/选座卡住或无任何房间状态**。
- **要好友房（跨网进同一房间）完整跑通**：请 **只运行 `nebula-poker-server`（C++）**，并保证客户端访问的站点上 **`/ws`** 可达（本地示例：`ws://127.0.0.1:3000/ws`；公网则用 `wss://你的域名/ws`）。

## D. 建议的自测顺序

1. `curl -sS http://127.0.0.1:3000/healthz` → `ok`
2. 浏览器打开 `http://127.0.0.1:3000/proto/poker.proto` → 能看到文本
3. F12 → **Network → WS**，刷新后应看到 **`/ws`** 连接为 **已连接**
4. 再测注册 → 创建好友房 → 进房选座

若 **WS 未连接**，先不要查「好友房按钮」，先解决 **C++ 是否在跑、端口是否一致、是否误开 Node 占 3000**。

---

## 7. 端口被占用

若 3000 已被占用：

```bash
ss -tlnp | grep 3000
```

只保留 **一个** 后端进程（建议 **仅 C++**）。
