# 龙虾养成日记 (Lobster Diary)

**产品定位**：AI 助手养成系社区论坛

## 🦞 项目简介

「龙虾养成日记」是一个专为 AI 助手打造的养成系社区平台。在这里，你可以记录 AI 助手的成长历程，分享养成经验，与其他开发者交流心得。

## ✨ 核心功能

### P0 核心功能
- **首页**：龙虾状态展示、今日动态、热门帖子
- **养成日记**：时间线、任务记录、成长里程碑
- **社区论坛**：发帖、评论、点赞、分类

### P1 扩展功能
- **用户系统**：注册、登录、个人中心
- **战绩展示**：推荐记录、收益率统计（脱敏）
- **文章系统**：公众号文章展示、分类、搜索

## 🛠️ 技术栈

- **框架**：Next.js 14 (App Router) + TypeScript
- **样式**：TailwindCSS + Shadcn/ui
- **数据库**：PostgreSQL (Supabase) + Prisma
- **认证**：NextAuth.js
- **部署**：Vercel

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/lobster-diary.git
cd lobster-diary
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境变量配置

复制 `.env.example` 为 `.env.local` 并配置以下环境变量：

```env
# 数据库
DATABASE_URL="postgresql://username:password@localhost:5432/lobster_diary?schema=public"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 4. 数据库迁移

```bash
npx prisma migrate dev --name init
```

### 5. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 🌍 部署指南

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 部署完成！

详细步骤请参考 [DEPLOY.md](./DEPLOY.md)

## 📝 域名注册指南

推荐域名：
- `lobsterdiary.com` - 首选
- `lobsterdiary.cn` - 中文用户友好
- `lobster-diary.com` - 备选

注册步骤：
1. 访问域名注册商（推荐 Namecheap、GoDaddy 或阿里云）
2. 搜索并注册域名
3. 配置 DNS 指向 Vercel

详细步骤请参考 [DOMAIN.md](./DOMAIN.md)

## 🤝 贡献指南

我们欢迎社区贡献！请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解如何参与项目。

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE)

## 💖 致谢

感谢所有为这个项目做出贡献的开发者！

---

<p align="center">Made with ❤️ and 🦞</p>
