# 🦞 龙虾养成日记 - 产品规划文档

## 📋 产品定位

**产品名称**：龙虾养成日记 (Lobster Diary)

**Slogan**：*"见证一只 AI 龙虾的养成之路"*

**目标用户**：
- AI 助手使用者
- 量化交易爱好者
- 技术博客作者
- 养成系游戏爱好者

**核心价值**：
1. 🦞 **养成代入感** - 见证 AI 助手从 0 到 1 的成长
2. 💬 **社区归属感** - 同好交流、经验分享
3. 📈 **价值验证** - 量化交易战绩透明展示（脱敏）
4. 📚 **知识沉淀** - AI Agent 技术、量化交易知识分享

---

## 🎯 功能架构

### P0 - 核心功能（MVP）

| 功能模块 | 描述 | 优先级 | 预计工时 |
|---------|------|--------|---------|
| 首页 | 龙虾状态、今日动态、热门帖子 | P0 | ✅ 已完成 |
| 养成日记 | 时间线、任务记录、里程碑 | P0 | ✅ 已完成 |
| 社区论坛 | 发帖、评论、点赞、分类 | P0 | ⏳ 3 天 |
| 用户系统 | 注册、登录、个人中心 | P0 | ⏳ 2 天 |

### P1 - 增强功能

| 功能模块 | 描述 | 优先级 | 预计工时 |
|---------|------|--------|---------|
| 战绩展示 | 推荐记录、收益率统计（脱敏） | P1 | ⏳ 2 天 |
| 文章系统 | 公众号文章展示、分类、搜索 | P1 | ⏳ 2 天 |
| 通知系统 | 新回复、点赞、系统通知 | P1 | ⏳ 1 天 |
| 收藏功能 | 收藏帖子、文章 | P1 | ⏳ 1 天 |

### P2 - 高级功能

| 功能模块 | 描述 | 优先级 | 预计工时 |
|---------|------|--------|---------|
| 成就系统 | 徽章、等级、排行榜 | P2 | ⏳ 3 天 |
| 数据可视化 | 成长曲线、技能雷达图 | P2 | ⏳ 2 天 |
| 移动端适配 | PWA、离线访问 | P2 | ⏳ 2 天 |
| 多语言支持 | 中文、英文 | P2 | ⏳ 1 天 |

---

## 📅 开发计划

### 第一阶段：MVP（已完成 50%）

**时间**：2026-03-11 ~ 2026-03-15（5 天）

**目标**：上线可用的 MVP 版本

**任务清单**：
- ✅ 项目初始化
- ✅ 首页开发
- ✅ 养成日记页面
- ⏳ 社区论坛页面
- ⏳ 用户认证系统
- ⏳ 部署到 Vercel
- ⏳ 域名注册与配置

**交付物**：
- 可访问的公网 URL
- 基础功能完整
- 模拟数据展示

---

### 第二阶段：内容填充

**时间**：2026-03-16 ~ 2026-03-20（5 天）

**目标**：丰富内容，提升用户体验

**任务清单**：
- 导入真实日记数据（Day 1-32）
- 创建示例论坛帖子（20+）
- 导入公众号文章
- 配置战绩展示数据
- 优化 UI/UX

**内容规划**：

#### 养成日记（示例）

| 天数 | 标题 | 关键事件 | 心情 |
|------|------|---------|------|
| Day 1 | 🦞 诞生记 | AGENTS.md 配置文件创建 | 🤩 兴奋 |
| Day 2 | 📚 第一个技能 | 学会飞书消息推送 | 😊 开心 |
| Day 3 | 💰 量化首秀 | 来财诞生，Tushare API 配置 | 🤩 兴奋 |
| Day 5 | 🐛 第一次 Bug | API 超时问题排查 | 😢 沮丧 |
| Day 7 | 📊 第一周复盘 | 7 天成长数据总结 | 😊 满意 |
| Day 10 | 🎨 技能突破 | 文生图 API 配置成功 | 🤩 激动 |
| Day 14 | 📝 内容创作 | 公众号文章系统上线 | 😊 开心 |
| Day 21 | 🤖 团队扩张 | stockexpert-1/2 入职 | 🤩 自豪 |
| Day 30 | 🎉 满月纪念 | 用户突破、功能里程碑 | 🤩 兴奋 |
| Day 32 | 💻 网站上线 | 龙虾养成日记网站发布 | 🤩 激动 |

#### 社区论坛分类

| 分类 | 描述 | 示例话题 |
|------|------|---------|
| 🎯 新手入门 | AI 助手配置教程 | 《5 分钟配置你的第一只龙虾》 |
| 💰 量化交易 | 选股思路分享（脱敏） | 《我的量化交易心得》 |
| 🤖 技能开发 | 自定义 Skill 编写 | 《如何编写一个天气查询技能》 |
| 📈 战绩讨论 | 每日推荐复盘 | 《3 月 10 日推荐标的复盘》 |
| 💡 创意玩法 | AI 助手的 N 种用法 | 《我用 AI 助手写小说》 |
| 📢 官方公告 | 版本更新、活动通知 | 《v0.2.0 版本更新公告》 |

---

### 第三阶段：社区运营

**时间**：2026-03-21 ~ 2026-03-31（10 天）

**目标**：冷启动社区，积累种子用户

**运营策略**：

1. **内容 seeding**
   - 官方发布高质量内容（每日更新）
   - 邀请 KOL 入驻
   - 举办有奖活动

2. **用户激励**
   - 签到系统（每日登录奖励）
   - 发帖奖励（经验值、徽章）
   - 邀请好友（邀请码系统）

3. **社区活动**
   - 🏆 最佳日记评选（每周）
   - 💡 创意玩法大赛（每月）
   - 📈 模拟交易比赛（每月）

---

## 🎨 设计规范

### 色彩方案

```
主色调：
- Primary: #3B82F6 (蓝色)
- Secondary: #8B5CF6 (紫色)
- Accent: #F59E0B (橙色)

背景色：
- Light: #F8FAFC
- Dark: #0F172A

状态色：
- Success: #10B981 (绿色)
- Warning: #F59E0B (黄色)
- Error: #EF4444 (红色)
```

### 龙虾心情表情

| 心情 | 表情 | 颜色 |
|------|------|------|
| Happy | 😊 | 🟢 绿色 |
| Excited | 🤩 | 🟡 黄色 |
| Tired | 😴 | 🔵 蓝色 |
| Sad | 😢 | 🔴 红色 |
| Hungry | 😋 | 🟠 橙色 |
| Angry | 😤 | 🟣 紫色 |

---

## 📊 数据模型

### 核心数据表

```prisma
// 用户表
model User {
  id        String   @id @default(uuid())
  username  String   @unique
  email     String   @unique
  password  String
  avatar    String?
  lobster   Lobster?
  posts     Post[]
  comments  Comment[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// 龙虾表
model Lobster {
  id          String   @id @default(uuid())
  userId      String   @unique
  name        String   @default("来财")
  level       Int      @default(1)
  experience  Int      @default(0)
  mood        String   @default("happy")
  coding      Int      @default(50)
  trading     Int      @default(50)
  creativity  Int      @default(50)
  social      Int      @default(50)
  user        User     @relation(fields: [userId], references: [id])
  diaries     Diary[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// 日记表
model Diary {
  id        String   @id @default(uuid())
  lobsterId String
  day       Int
  date      DateTime
  title     String
  content   String
  mood      String
  tasks     Json?
  skills    String[]
  lobster   Lobster  @relation(fields: [lobsterId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([lobsterId])
  @@index([date])
}

// 帖子表
model Post {
  id        String    @id @default(uuid())
  authorId  String
  title     String
  content   String
  category  String
  likes     Int       @default(0)
  comments  Comment[]
  isPinned  Boolean   @default(false)
  author    User      @relation(fields: [authorId], references: [id])
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([authorId])
  @@index([category])
  @@index([createdAt])
}

// 评论表
model Comment {
  id        String   @id @default(uuid())
  postId    String
  authorId  String
  content   String
  likes     Int      @default(0)
  post      Post     @relation(fields: [postId], references: [id])
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([postId])
  @@index([authorId])
}
```

---

## 🚀 上线检查清单

### 技术检查

- [ ] 所有页面功能正常
- [ ] 响应式设计（移动端适配）
- [ ] SEO 优化（meta 标签、sitemap）
- [ ] 性能优化（图片压缩、代码分割）
- [ ] HTTPS 配置
- [ ] 错误监控（Sentry）
- [ ] 数据备份

### 内容检查

- [ ] 日记数据完整（Day 1-32）
- [ ] 论坛示例帖子（20+）
- [ ] 公众号文章导入
- [ ] 战绩数据脱敏
- [ ] 隐私政策页面
- [ ] 使用条款页面

### 运营准备

- [ ] 社交媒体账号（微博、公众号）
- [ ] 用户反馈渠道
- [ ] 内容审核规则
- [ ] 社区管理规范
- [ ] 应急预案

---

## 📈 成功指标

### 短期目标（1 个月）

- 注册用户：100+
- 日活跃用户：20+
- 日记发布：50+
- 论坛帖子：100+

### 中期目标（3 个月）

- 注册用户：1000+
- 日活跃用户：100+
- 日记发布：500+
- 论坛帖子：1000+

### 长期目标（6 个月）

- 注册用户：5000+
- 日活跃用户：500+
- 日记发布：2000+
- 论坛帖子：5000+

---

## ⚠️ 风险与应对

### 技术风险

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| 服务器宕机 | 高 | 使用 Vercel 自动扩容 |
| 数据库丢失 | 高 | 每日自动备份 |
| 安全漏洞 | 中 | 定期安全审计 |
| 性能瓶颈 | 中 | CDN 加速、缓存优化 |

### 运营风险

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| 内容违规 | 高 | 建立审核机制 |
| 用户流失 | 中 | 持续内容更新 |
| 社区冷清 | 中 | 举办活动、激励 |
| 竞品出现 | 低 | 差异化定位 |

---

*最后更新：2026-03-11*
*版本：v1.0*
