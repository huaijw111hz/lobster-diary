# Vercel 部署指南

本文档将指导您如何将「龙虾养成日记」部署到 Vercel。

## 📋 前提条件

1. 一个 GitHub 账号
2. 一个 Vercel 账号（可以使用 GitHub 账号登录）
3. 一个 Supabase 账号（免费数据库）

## 🚀 部署步骤

### 1. 准备项目

确保您的代码已经提交到 GitHub：

```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加到远程仓库
git remote add origin https://github.com/yourusername/lobster-diary.git
git push -u origin main
```

### 2. 创建 Supabase 数据库

1. 访问 [Supabase Dashboard](https://app.supabase.com)
2. 点击 "New Project"
3. 填写项目名称和密码
4. 等待项目创建完成
5. 在 Settings > Database 中找到 Connection string (direct)
6. 复制这个连接字符串，替换其中的 `[YOUR-PASSWORD]` 为实际的密码

### 3. 在 Vercel 导入项目

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New..." > "Project"
3. 导入您的 GitHub 仓库
4. 配置项目：
   - **Framework Preset**: Next.js
   - **Root Directory**: .（保持默认）
   - **Build Command**: next build（保持默认）
   - **Output Directory**: .next（保持默认）

### 4. 配置环境变量

在项目设置中，点击 "Settings" > "Environment Variables"，添加以下变量：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `DATABASE_URL` | 你的Supabase连接字符串 | 数据库连接 |
| `NEXTAUTH_URL` | https://你的项目名.vercel.app | NextAuth地址 |
| `NEXTAUTH_SECRET` | 随机生成的长字符串 | 安全密钥 |
| `NEXT_PUBLIC_SUPABASE_URL` | 你的Supabase项目URL | Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 你的Supabase匿名密钥 | Supabase匿名密钥 |

**生成 NEXTAUTH_SECRET**：
```bash
openssl rand -base64 32
```

或者使用在线随机字符串生成器。

### 5. 部署

点击 "Deploy" 按钮开始部署！

Vercel 会自动构建和部署您的项目。部署完成后，您会获得一个域名，如 `https://lobster-diary-xxxx.vercel.app`

### 6. 数据库迁移

部署完成后，需要运行数据库迁移：

1. 在本地安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 登录到 Vercel：
```bash
vercel login
```

3. 链接到项目：
```bash
vercel link
```

4. 运行迁移：
```bash
# 拉取环境变量
vercel env pull .env.local

# 运行迁移
npx prisma migrate deploy
```

或者使用 Vercel 的 Dashboard，在 "Deployments" 中选择最新的部署，然后点击 "Redeploy" 来应用更改。

## 🔧 常见问题

### 1. 构建失败

检查日志中的错误信息，常见问题：
- TypeScript 类型错误
- 缺少环境变量
- Prisma Client 未生成

解决方法：
```bash
# 重新生成 Prisma Client
npx prisma generate

# 检查类型错误
npx tsc --noEmit
```

### 2. 数据库连接错误

确保：
- DATABASE_URL 格式正确
- Supabase 项目处于活动状态
- IP 地址允许访问（在 Supabase 设置中）

### 3. NextAuth 错误

确保：
- NEXTAUTH_SECRET 已设置
- NEXTAUTH_URL 正确配置（包含 https://）

## 📝 更新部署

当您需要更新网站时：

1. 在本地修改代码
2. 提交并推送到 GitHub：
```bash
git add .
git commit -m "Update: xxx feature"
git push
```

3. Vercel 会自动检测到更改并重新部署（通常需要 1-2 分钟）

## 🌐 自定义域名

如果您有自己的域名，可以在 Vercel 中配置：

1. 进入项目 Settings > Domains
2. 输入您的域名（如 `lobsterdiary.com`）
3. 按照 Vercel 的提示配置 DNS
4. 等待 DNS 生效（通常需要几分钟到 24 小时）

详细步骤请参考 [DOMAIN.md](./DOMAIN.md)

---

如有其他问题，请查看 [Vercel 文档](https://vercel.com/docs) 或 [Next.js 部署文档](https://nextjs.org/docs/deployment)