# 🦞 龙虾养成日记 - 快速启动指南

## 📁 项目位置

```
D:\easyclaw-workspace\lobster-diary\
```

---

## 🚀 本地开发（快速测试）

### 1️⃣ 启动开发服务器

```powershell
# 进入项目目录
cd C:\Users\Administrator\.easyclaw\workspace-browser-use\lobster-diary

# 安装依赖（如果还没安装）
npm install

# 启动开发服务器
npm run dev
```

### 2️⃣ 访问网站

打开浏览器访问：**http://localhost:3000**

你将看到：
- ✅ 首页（龙虾状态、今日动态、热门帖子）
- ✅ 养成日记页面（/diary）
- ✅ 完整的 UI 组件和模拟数据

---

## 🌐 部署到公网（3 步上线）

### 方案 A：Vercel 部署（推荐 - 免费 + 自动 CI/CD）

#### 步骤 1：准备 GitHub 仓库

```powershell
# 在项目目录初始化 Git
cd C:\Users\Administrator\.easyclaw\workspace-browser-use\lobster-diary

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Lobster Diary website"

# 创建 GitHub 仓库（手动操作）
# 访问 https://github.com/new
# 仓库名：lobster-diary
# 设为公开（Public）

# 关联远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/lobster-diary.git

# 推送代码
git push -u origin main
```

#### 步骤 2：部署到 Vercel

1. 访问 **https://vercel.com**
2. 用 GitHub 账号登录
3. 点击 **"Add New Project"**
4. 选择 **"lobster-diary"** 仓库
5. 点击 **"Deploy"**

等待 2-3 分钟，部署完成后你会得到一个公网 URL：
```
https://lobster-diary.vercel.app
```

#### 步骤 3：绑定自定义域名（可选）

1. 在 Vercel 项目设置 → **Domains**
2. 添加你的域名（如 `lobsterdiary.com`）
3. 按照提示配置 DNS 记录

---

### 方案 B：Railway 部署（备选 - 免费额度）

1. 访问 **https://railway.app**
2. 用 GitHub 账号登录
3. 选择 **"New Project"** → **"Deploy from GitHub repo"**
4. 选择 `lobster-diary` 仓库
5. 自动部署完成

---

## 🌍 域名注册指南

### 推荐域名

| 域名 | 预估价格 | 推荐平台 |
|------|---------|---------|
| lobsterdiary.com | ¥60/年 | 阿里云万网 |
| lobster-diary.com | ¥60/年 | Namesilo |
| alobster.cn | ¥30/年 | 腾讯云 DNSPod |

### 注册步骤（以阿里云为例）

1. 访问 **https://wanwang.aliyun.com/domain/**
2. 搜索你想要的域名
3. 加入购物车 → 结算
4. 实名认证（必须）
5. 支付完成

### DNS 配置（绑定到 Vercel）

1. 登录域名注册商后台
2. 找到 DNS 管理
3. 添加记录：
   - **类型**: A
   - **主机记录**: @
   - **记录值**: `76.76.21.21`（Vercel IP）
   - **TTL**: 自动

4. 添加 CNAME 记录：
   - **类型**: CNAME
   - **主机记录**: www
   - **记录值**: `cname.vercel-dns.com`

等待 DNS 生效（通常 10 分钟 -24 小时）

---

## 📊 网站功能清单

### ✅ 已完成

| 页面/功能 | 路由 | 状态 |
|----------|------|------|
| 首页 | `/` | ✅ 完成 |
| 养成日记 | `/diary` | ✅ 完成 |
| 社区论坛 | `/forum` | ⏳ 待开发 |
| 文章系统 | `/articles` | ⏳ 待开发 |
| 战绩展示 | `/stats` | ⏳ 待开发 |
| 个人中心 | `/profile` | ⏳ 待开发 |

### 🎨 核心组件

| 组件 | 文件 | 说明 |
|------|------|------|
| StatCard | `src/components/StatCard.tsx` | 统计卡片 |
| LobsterAvatar | `src/components/LobsterAvatar.tsx` | 龙虾头像 |
| DiaryTimeline | `src/components/DiaryTimeline.tsx` | 日记时间线 |
| PostCard | `src/components/PostCard.tsx` | 帖子卡片 |

### 📦 模拟数据

| 数据类型 | 文件 | 说明 |
|---------|------|------|
| 龙虾状态 | `src/data/mock-data.ts` | 等级、心情、技能 |
| 日记数据 | `src/data/mock-data.ts` | Day 1-32 |
| 论坛帖子 | `src/data/mock-data.ts` | 6 个示例帖子 |
| 用户数据 | `src/data/mock-data.ts` | 示例用户 |

---

## 🛠️ 技术栈

```
前端框架：Next.js 16.1.6 (App Router)
编程语言：TypeScript 5
UI 库：Shadcn/ui + TailwindCSS 4
数据库：Supabase (PostgreSQL)
ORM：Prisma 7.4.2
认证：NextAuth.js 4.24
部署：Vercel
```

---

## 📝 下一步开发计划

### Phase 3：社区论坛（优先级 P0）
- [ ] 论坛页面（`/forum`）
- [ ] 发帖功能
- [ ] 评论系统
- [ ] 点赞功能
- [ ] 分类筛选

### Phase 4：用户系统（优先级 P1）
- [ ] 注册/登录页面
- [ ] 个人中心（`/profile`）
- [ ] 收藏功能
- [ ] 通知系统

### Phase 5：内容系统（优先级 P1）
- [ ] 文章列表页（`/articles`）
- [ ] 战绩展示页（`/stats`）
- [ ] 内容搜索
- [ ] 标签系统

### Phase 6：数据库集成（优先级 P2）
- [ ] Supabase 数据库配置
- [ ] Prisma Schema 定义
- [ ] API Routes 开发
- [ ] 真实数据替换模拟数据

---

## ⚠️ 注意事项

1. **域名备案**：如使用国内域名注册商，需要 ICP 备案（15-20 工作日）
2. **HTTPS**：Vercel 自动提供 HTTPS 证书
3. **免费额度**：
   - Vercel：免费版足够个人使用
   - Supabase：500MB 免费数据库
4. **内容审核**：上线后需建立内容审核机制

---

## 🎉 快速验证（5 分钟）

```powershell
# 1. 进入项目目录
cd C:\Users\Administrator\.easyclaw\workspace-browser-use\lobster-diary

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器访问
# http://localhost:3000
```

如果看到龙虾首页，说明一切正常！🦞✅

---

## 📞 需要帮助？

遇到问题可以：
1. 检查控制台错误信息
2. 查看 `README.md` 文档
3. 联系"极客"Agent 技术支持

---

*最后更新：2026-03-11*
*版本：v0.1.0*
