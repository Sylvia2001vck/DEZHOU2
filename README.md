# Nebula Poker (Multiplayer)

一个基于 Web 的实时多人德州扑克游戏，支持在线对战、AI 玩家和语音聊天功能。

## 项目介绍

Nebula Poker 是一个完整的多人德州扑克游戏平台，玩家可以通过房间 ID 加入游戏，支持 3-10 人同时在线对战。游戏采用服务器端权威架构，确保游戏逻辑的公平性和一致性。支持 AI 玩家填充空位，提供完整的德州扑克规则实现，包括发牌、下注、加注、弃牌、全押等所有标准操作。

### 核心特性

- 🎮 **多人实时对战**：支持 3-10 人同时在线游戏
- 🤖 **AI 玩家支持**：可添加 AI 玩家填充空位
- 🎯 **服务器端权威逻辑**：所有游戏逻辑在服务器端执行，防止作弊
- 💬 **语音聊天**：基于 WebRTC 的点对点语音通信
- 📱 **响应式设计**：适配桌面和移动设备
- 🎨 **精美 UI**：支持深色/浅色主题切换
- 🎮 **3D 视觉效果**：使用 Three.js 实现的沉浸式 3D 牌桌场景
- 🔊 **程序化音效**：基于 Web Audio API 的动态音效生成
- ✨ **流畅动画**：GSAP 驱动的卡牌和筹码动画效果
- 🔄 **断线重连**：支持玩家断线后重新加入游戏
- 📊 **游戏统计**：完整的牌局历史和排行榜

## 技术栈

### 后端

- **Node.js** (ES6 Modules) - JavaScript 运行时环境
- **Express.js** - Web 应用框架，提供 HTTP 服务器和静态文件服务
- **Socket.io** - 实时双向通信库，实现 WebSocket 连接和事件驱动通信

### 前端

- **原生 HTML/CSS/JavaScript** - 单页应用（SPA），无需构建工具
- **Three.js** (v0.160.0) - 3D 图形渲染引擎，实现 3D 牌桌、卡牌、筹码等视觉效果
- **GSAP** (v3.12.2) - 高性能动画库，实现流畅的卡牌和筹码动画
- **Web Audio API** - 程序化生成音效（发牌、下注、弃牌等），无需外部音频文件
- **WebRTC** - 点对点语音通信
- **OrbitControls** - Three.js 相机控制器，支持鼠标/触摸交互

### 部署

- 支持 Railway、Render 等云平台一键部署
- 环境变量配置（PORT）
- 健康检查端点（/healthz, /readyz）

## 核心原理

### 1. 房间系统架构

游戏采用房间（Room）系统，每个房间包含：
- **房间 ID**：唯一标识符，玩家通过房间 ID 加入
- **座位系统**：最多 10 个座位，支持玩家和 AI 两种类型
- **主机系统**：第一个加入的玩家自动成为主机，负责开始游戏和配置设置
- **生命周期管理**：房间在 3 小时无活动后自动释放

```javascript
// 房间数据结构
{
  roomId: string,
  seats: Seat[],           // 10个座位
  players: Map<seatIdx, PlayerState>,
  started: boolean,
  handNum: number,
  round: "WAITING" | "PRE-FLOP" | "FLOP" | "TURN" | "RIVER" | "SHOWDOWN",
  // ... 更多游戏状态
}
```

### 2. 服务器端权威游戏逻辑

所有游戏逻辑在服务器端执行，客户端只负责：
- 接收和显示游戏状态
- 发送玩家操作（下注、加注、弃牌等）
- 渲染 UI 和动画

**优势**：
- 防止客户端作弊
- 保证游戏状态一致性
- 简化客户端逻辑

**关键流程**：
1. 客户端发送操作事件（`action`）到服务器
2. 服务器验证操作合法性
3. 服务器更新游戏状态
4. 服务器广播新状态给所有客户端（`game_state`）
5. 客户端接收并更新 UI

### 3. 实时同步机制

使用 Socket.io 实现实时双向通信：

**服务器到客户端事件**：
- `room_state` - 房间状态更新（座位、设置等）
- `game_state` - 游戏状态更新（手牌、公共牌、下注等）
- `private_hand` - 私有手牌（仅发送给对应玩家）
- `turn` - 轮到某个玩家行动
- `activity` - 游戏活动日志
- `hand_over` - 手牌结束
- `match_over` - 比赛结束

**客户端到服务器事件**：
- `join_room` - 加入房间
- `take_seat` - 选择座位
- `action` - 玩家操作（fold/check/call/raise/allin）
- `start_game` - 开始游戏（仅主机）
- `next_hand` - 下一手牌（仅主机）

### 4. 德州扑克游戏逻辑

#### 4.1 发牌系统

- **洗牌算法**：Fisher-Yates 洗牌算法，确保随机性
- **发牌顺序**：从庄家位置顺时针发牌，每人两张底牌
- **公共牌**：翻牌（3张）、转牌（1张）、河牌（1张）

#### 4.2 下注系统

- **盲注机制**：小盲注（SB）和大盲注（BB）
- **下注轮次**：Pre-Flop → Flop → Turn → River
- **下注类型**：
  - Fold（弃牌）
  - Check（过牌，当前下注为0时）
  - Call（跟注，匹配当前最大下注）
  - Raise（加注，必须至少加注最小加注额）
  - All-in（全押）

#### 4.3 手牌评估算法

使用组合数学方法评估最佳 5 张牌：

```javascript
// 从7张牌（2张底牌 + 5张公共牌）中选择最佳5张牌组合
function getBestHand(sevenCards) {
  const combos = combinations(sevenCards, 5);  // C(7,5) = 21种组合
  let best = null;
  for (const combo of combos) {
    const evalResult = evaluate5(combo);
    if (!best || compareHands(evalResult, best) > 0) {
      best = evalResult;
    }
  }
  return best;
}
```

**手牌等级**（从高到低）：
1. Royal Flush（皇家同花顺）
2. Straight Flush（同花顺）
3. Four of a Kind（四条）
4. Full House（满堂红）
5. Flush（同花）
6. Straight（顺子）
7. Three of a Kind（三条）
8. Two Pair（两对）
9. One Pair（一对）
10. High Card（高牌）

### 5. AI 玩家系统

AI 玩家使用简单的概率策略：
- **随机决策**：基于随机数和当前局面
- **行动逻辑**：
  - 15% 概率弃牌（当需要跟注时）
  - 30% 概率加注（当筹码充足时）
  - 其他情况跟注或过牌
- **自动行动**：700ms 延迟后自动执行操作

### 6. 断线重连机制

- **座位保留**：游戏进行中，玩家断线后座位保留
- **重连识别**：通过 `clientId` 或 `name` 识别重连玩家
- **状态同步**：重连后自动同步当前游戏状态和活动日志
- **私有手牌恢复**：重连后重新发送玩家的底牌

### 7. WebRTC 语音通信

- **信令服务器**：使用 Socket.io 作为 WebRTC 信令服务器
- **点对点连接**：音频流直接在客户端之间传输（P2P）
- **参与者管理**：服务器维护语音参与者列表，处理加入/离开事件
- **信令转发**：服务器转发 WebRTC 信令消息（offer/answer/ICE candidate）

### 8. 游戏状态管理

游戏状态分为多个层次：

1. **房间状态**（Room State）：
   - 座位占用情况
   - 游戏设置（总手数、初始筹码等）
   - 是否已开始

2. **游戏状态**（Game State）：
   - 当前手数
   - 庄家位置
   - 小盲/大盲位置
   - 当前行动玩家
   - 底池金额
   - 当前轮次
   - 公共牌
   - 玩家状态（筹码、当前下注、是否弃牌等）

3. **玩家私有状态**（Private State）：
   - 底牌（仅玩家自己可见）
   - 是否为房间主机

### 9. Three.js 3D 渲染系统

游戏使用 Three.js 构建了完整的 3D 牌桌场景，提供沉浸式的视觉体验。

#### 9.1 3D 场景构建

- **场景设置**：
  - WebGL 渲染器，支持抗锯齿和色调映射（ACES Filmic）
  - 透视相机（45度视角）
  - 环境雾效（指数雾）
  - 程序化环境贴图（用于材质反射）

- **光照系统**：
  - 环境光（基础照明）
  - 聚光灯（垂直照射牌桌中心，产生高级感反光）
  - 点光源（辅助中心高光）
  - 根据牌桌大小动态调整光照范围

- **3D 模型**：
  - **牌桌**：圆柱形桌面 + 环形凹槽 + 边缘 + 绿色毛毡
  - **卡牌**：使用 PlaneGeometry + Canvas 纹理动态生成
  - **筹码**：圆柱体几何 + 程序化生成的纹理（包含"50"标识）
  - **装饰品**：可乐杯、咖啡杯、酒杯、雪茄等精美 3D 模型
  - **粒子系统**：26,000+ 个星点营造夜空氛围

#### 9.2 卡牌渲染

```javascript
// 卡牌使用 Canvas 动态生成纹理
function createCardMesh(card, faceUp) {
  const canvas = document.createElement('canvas');
  // 绘制卡牌正面（花色+点数）或背面（图案）
  const texture = new THREE.CanvasTexture(canvas);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}
```

- **卡牌材质**：PBR 材质（MeshStandardMaterial），支持环境反射
- **卡牌动画**：使用 GSAP 实现发牌时的飞行动画和旋转效果
- **卡牌布局**：每张牌扇形排列，面向玩家座位

#### 9.3 筹码系统

- **筹码堆叠**：每个玩家位置显示筹码堆，高度反映筹码数量
- **筹码材质**：程序化生成的纹理，包含蓝色渐变、环形装饰和"50"标识
- **筹码动画**：
  - 下注时：筹码从玩家位置飞向底池中心
  - 获胜时：底池筹码飞向获胜者位置并淡出

### 10. Web Audio API 音效系统

游戏使用 Web Audio API 程序化生成所有音效，无需加载外部音频文件。

#### 10.1 音效类型

- **发牌音效**（`deal`）：
  - 使用白噪声 + 带通滤波器（1800Hz）
  - 快速起音和衰减，模拟卡牌滑过桌面的声音

- **筹码音效**（`chip`）：
  - 白噪声 + 高通滤波器 + 带通滤波器
  - 添加正弦波振荡器产生"叮"的共鸣音
  - 模拟筹码碰撞的清脆声音

- **弃牌音效**（`fold`）：
  - 白噪声 + 低通滤波器（从 5200Hz 扫频到 900Hz）
  - 模拟卡牌被丢弃时的"嗖"声

- **回合提示音**（`turn`）：
  - 正弦波振荡器（880Hz → 1175Hz）
  - 提醒玩家轮到行动

- **筹码碰撞音**（`rattle`）：
  - 多个筹码音效叠加（7 次）
  - 用于底池筹码分配给获胜者时

#### 10.2 音效实现原理

```javascript
// 使用 Web Audio API 生成音效
const ctx = new AudioContext();
const noise = ctx.createBufferSource();
noise.buffer = generateNoiseBuffer(); // 生成白噪声
const filter = ctx.createBiquadFilter();
filter.type = 'bandpass';
filter.frequency.value = 1800;
noise.connect(filter).connect(ctx.destination);
```

- **节流机制**：防止音效重复播放过于频繁
- **用户交互解锁**：首次用户交互后激活 AudioContext（浏览器策略要求）
- **可配置开关**：支持用户开启/关闭音效

### 11. GSAP 动画系统

使用 GSAP（GreenSock Animation Platform）实现流畅的动画效果。

#### 11.1 卡牌动画

- **发牌动画**：
  - 卡牌从中心位置（y=3）飞向玩家位置
  - 旋转动画：先 Yaw 到面向玩家，再 Pitch 掀起
  - 持续时间：0.6 秒，使用 `power2.out` 缓动

```javascript
gsap.to(mesh.position, {
  x: target.x,
  y: target.y,
  z: target.z,
  duration: 0.6,
  ease: "power2.out"
});
gsap.to(mesh.rotation, {
  y: yawToSeat,
  x: 0.55,  // 掀起角度
  duration: 0.6
});
```

- **弃牌动画**：卡牌旋转并淡出（透明度动画）

#### 11.2 筹码动画

- **下注动画**（`animateBetToPot`）：
  - 筹码从玩家位置飞向底池中心
  - 随机散布在底池区域
  - 飞行过程中半透明，落地后变为不透明
  - 持续时间：0.65-0.8 秒

- **获胜动画**（`animatePotToWinners`）：
  - 底池筹码飞向获胜者位置
  - 淡出效果（透明度从 1.0 → 0.0）
  - 支持多人平分底池的情况

#### 11.3 动画优化

- **性能优化**：使用 `depthWrite` 控制避免闪烁
- **批量处理**：多个筹码动画并行执行
- **清理机制**：动画完成后自动清理 3D 对象

### 12. 性能优化

- **房间自动清理**：空闲房间 3 小时后自动释放
- **活动日志限制**：最多保留 250 条活动日志
- **Socket 连接管理**：跟踪在线 Socket，处理断开连接
- **批量状态更新**：使用广播减少网络请求
- **3D 渲染优化**：
  - 像素比限制（最大 2x）
  - 对象复用和缓存（材质缓存）
  - 按需渲染（仅在游戏进行时渲染 3D 场景）

## 快速开始

### 本地运行

1. **安装 Node.js 18+**

2. **安装依赖**：
```bash
npm install
```

3. **启动服务器**：
```bash
npm start
```

4. **访问游戏**：
打开浏览器访问 `http://localhost:3000`

### 部署到云平台

#### Railway / Render

1. 将代码推送到 GitHub（必须包含 `index.html`、`server.js`、`package.json`）
2. 在 Railway/Render 创建新项目并从 GitHub 导入
3. 平台会自动运行 `npm install` 和 `npm start`
4. 分享部署后的 URL 给朋友

## 项目结构

```
nebula-poker/
├── server.js          # 服务器主文件（游戏逻辑、Socket.io 处理）
├── index.html         # 前端单页应用（HTML/CSS/JavaScript）
├── package.json       # 项目配置和依赖
└── README.md          # 项目文档
```

## 游戏规则

### 基本规则

- **玩家数量**：3-10 人（包括 AI）
- **初始筹码**：默认 1000（可配置）
- **盲注**：小盲 50，大盲 100（可配置）
- **总手数**：默认 5 手（可配置，1-50）

### 游戏流程

1. **准备阶段**：玩家加入房间，选择座位
2. **开始游戏**：主机配置参数并开始游戏
3. **发牌**：每人发 2 张底牌
4. **下注轮次**：
   - Pre-Flop（翻牌前）
   - Flop（翻牌，3 张公共牌）
   - Turn（转牌，1 张公共牌）
   - River（河牌，1 张公共牌）
5. **摊牌**：剩余玩家比较手牌，最佳手牌获胜
6. **下一手**：庄家位置顺时针移动，开始新手牌
7. **比赛结束**：达到设定手数后显示最终排名

## 开发说明

### 代码特点

- **ES6 模块**：使用 `import/export` 语法
- **类型注释**：使用 JSDoc 注释提供类型提示
- **函数式编程**：大量使用纯函数和不可变数据结构
- **事件驱动**：基于 Socket.io 事件驱动架构

### 扩展建议

- 添加更多 AI 策略（紧凶、松凶等）
- 实现锦标赛模式
- 添加观战功能
- 实现聊天系统
- 添加游戏回放功能
- 支持自定义主题

## 许可证

本项目为私有项目。

## 作者

Pu Tianyi  
Email: tpuac@connect.ust.hk
## 贡献

欢迎提交 Issue 和 Pull Request！
