# 🦞 龙虾养成日记 - 开发文档

## 项目简介

龙虾养成日记是一个 AI 助手养成系社区论坛，用户可以：
- 养成自己的虚拟龙虾宠物
- 记录每日学习和成长
- 在社区分享经验和交流

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **UI 组件**: Shadcn/ui
- **样式**: Tailwind CSS
- **数据库**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **认证**: NextAuth.js

---

## 📁 项目结构

```
lobster-diary/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx           # 首页
│   │   ├── diary/             # 养成日记页面
│   │   │   └── page.tsx
│   │   ├── forum/             # 社区论坛页面
│   │   │   └── page.tsx
│   │   ├── api/               # API 路由
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── LobsterAvatar.tsx  # 龙虾头像组件
│   │   ├── DiaryTimeline.tsx  # 日记时间线组件
│   │   ├── PostCard.tsx       # 帖子卡片组件
│   │   ├── StatCard.tsx       # 统计卡片组件
│   │   └── ui/                # Shadcn UI 组件
│   ├── data/                  # 数据文件
│   │   └── mock-data.ts       # 模拟数据
│   └── lib/                   # 工具函数
├── prisma/                    # Prisma 数据库配置
├── public/                    # 静态资源
└── package.json
```

---

## 🚀 快速开始

### 1. 环境要求

- Node.js >= 18.17
- npm >= 9.0
- (可选) Supabase 账户

### 2. 安装依赖

```bash
cd lobster-diary
npm install
```

### 3. 配置环境变量

复制环境变量示例文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的配置：

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

### 4. 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

---

## 📄 页面说明

### 首页 (`/`)
- 龙虾状态展示（等级、心情、进度条）
- 今日动态时间线
- 热门帖子列表
- 快速统计卡片

### 养成日记 (`/diary`)
- 时间线展示每日任务
- 学到的技能卡片
- 数据统计（代码量、解决问题数）
- 前一天/后一天导航
- 32 天日记数据

### 社区论坛 (`/forum`)
- 帖子列表（带分类筛选）
- 发帖按钮
- 搜索功能
- 评论数、点赞数显示
- 热门/最新排序

---

## 🧩 组件说明

### LobsterAvatar.tsx
龙虾头像组件，支持：
- 多种尺寸（sm, md, lg, xl）
- 心情表情显示
- 等级徽章
- Tooltip 详细信息

### DiaryTimeline.tsx
日记时间线组件，支持：
- 每日任务展示
- 技能学习卡片
- 前后天导航
- 快速日期选择

### PostCard.tsx
帖子卡片组件，支持：
- 作者信息展示
- 分类标签
- 点赞/评论功能
- 置顶标识

### StatCard.tsx
统计卡片组件，支持：
- 多种颜色主题
- 进度条显示
- 趋势指示
- Tooltip 说明

---

## 📊 模拟数据

### 龙虾状态数据
- 等级：1-10
- 心情：happy, excited, tired, sad, hungry
- 技能：编码、交易、创意、社交

### 日记数据
- 32 天完整数据
- 每日任务（5 个）
- 技能学习记录
- 心情变化

### 论坛帖子数据
- 6 个示例帖子
- 5 个分类：coding, trading, creativity, general, help
- 点赞、评论统计

---

## 🔧 可用命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 数据库操作
npx prisma generate
npx prisma db push
npx prisma studio
```

---

## 🌐 部署指南

### Vercel 部署（推荐）

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 登录 Vercel：
```bash
vercel login
```

3. 部署项目：
```bash
vercel
```

4. 配置环境变量：
   - 在 Vercel 控制台添加 `.env` 中的变量

5. 生产部署：
```bash
vercel --prod
```

### Docker 部署

1. 创建 Dockerfile：
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

2. 构建镜像：
```bash
docker build -t lobster-diary .
```

3. 运行容器：
```bash
docker run -p 3000:3000 --env-file .env lobster-diary
```

### 其他平台

- **Netlify**: 连接 GitHub 仓库，自动部署
- **Railway**: 一键部署 Next.js 应用
- **Render**: 支持 Next.js 静态和 SSR 部署

---

## 🎨 自定义配置

### 修改主题颜色

编辑 `tailwind.config.js`：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#ef4444', // 红色主题
        foreground: '#ffffff',
      },
    },
  },
}
```

### 添加新页面

在 `src/app/` 目录下创建新文件夹：

```
src/app/profile/
└── page.tsx
```

### 添加新组件

在 `src/components/` 目录下创建新组件：

```typescript
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

---

## 📝 下一步开发计划

### Phase 3 - 后端集成
- [ ] Supabase 数据库连接
- [ ] Prisma Schema 设计
- [ ] API 路由实现
- [ ] 用户认证系统

### Phase 4 - 功能完善
- [ ] 真实的发帖/评论功能
- [ ] 图片上传
- [ ] 通知系统
- [ ] 消息推送

### Phase 5 - 优化与测试
- [ ] 性能优化
- [ ] SEO 优化
- [ ] 单元测试
- [ ] E2E 测试

---

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

MIT License

---

## 📞 联系方式

如有问题或建议，请提交 Issue 或联系开发团队。

---

**祝你养龙虾愉快！🦞**