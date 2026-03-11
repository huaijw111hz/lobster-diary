# 🌐 lobsterdiary.cn 域名配置指南

## ✅ 域名状态
- **域名**：lobsterdiary.cn
- **注册商**：阿里云万网
- **状态**：已注册，待配置 DNS

---

## 📋 配置步骤

### 步骤 1：完成域名实名认证（必须）

如果还没完成实名认证：
1. 登录阿里云 → 控制台 → 域名管理
2. 找到 `lobsterdiary.cn`
3. 点击"实名认证"
4. 上传身份证照片
5. 等待审核（通常 1-2 小时）

⚠️ **注意**：未完成实名认证无法解析 DNS

---

### 步骤 2：部署到 Vercel

#### 2.1 创建 GitHub 仓库

```powershell
# 进入项目目录
cd C:\Users\Administrator\.easyclaw\workspace-browser-use\lobster-diary

# 初始化 Git（如果还没初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Lobster Diary website v0.1"

# 创建 GitHub 仓库
# 访问 https://github.com/new
# 仓库名：lobster-diary
# 描述：🦞 AI 助手养成系社区论坛
# 设为公开（Public）

# 关联远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/lobster-diary.git

# 推送代码
git branch -M main
git push -u origin main
```

#### 2.2 部署到 Vercel

1. 访问 **https://vercel.com**
2. 用 GitHub 账号登录
3. 点击 **"Add New Project"**
4. 选择 **"lobster-diary"** 仓库
5. Framework Preset 选择 **Next.js**
6. 点击 **"Deploy"**

等待 2-3 分钟，部署完成后你会得到：
```
https://lobster-diary-xxxx.vercel.app
```

---

### 步骤 3：绑定自定义域名

#### 3.1 Vercel 配置

1. 在 Vercel 项目页面 → **Settings** → **Domains**
2. 点击 **"Add"**
3. 输入域名：`lobsterdiary.cn`
4. 点击 **"Add"**

#### 3.2 阿里云 DNS 配置

1. 登录阿里云 → 控制台 → 域名管理
2. 找到 `lobsterdiary.cn` → 点击 **"解析"**
3. 添加以下 DNS 记录：

**记录 1：A 记录（主域名）**
```
记录类型：A
主机记录：@
记录值：76.76.21.21
TTL：自动
```

**记录 2：CNAME 记录（www 子域名）**
```
记录类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
TTL：自动
```

#### 3.3 等待 DNS 生效

- **国内**：通常 10 分钟 -2 小时
- **国外**：通常 5-30 分钟

可以通过以下命令检查：
```powershell
ping lobsterdiary.cn
# 应该看到解析到 76.76.21.21
```

---

### 步骤 4：HTTPS 证书（自动）

Vercel 会自动为域名配置 HTTPS 证书，无需手动操作。

等待 DNS 生效后，访问：
```
https://lobsterdiary.cn
https://www.lobsterdiary.cn
```

会自动重定向到 HTTPS。

---

## ⚠️ ICP 备案说明

### 需要备案吗？

- **使用 Vercel（海外服务器）**：理论上不需要 ICP 备案
- **如果后续使用国内 CDN**：需要 ICP 备案

### 建议

1. **先上线测试**：暂不备案，使用 Vercel 海外节点
2. **观察流量**：如果国内访问慢，再考虑备案 + 国内 CDN
3. **备案流程**：阿里云代备案，约 15-20 工作日

---

## 🔍 验证检查清单

### DNS 配置检查
- [ ] A 记录已添加（@ → 76.76.21.21）
- [ ] CNAME 记录已添加（www → cname.vercel-dns.com）
- [ ] DNS 已生效（ping 测试）

### Vercel 部署检查
- [ ] GitHub 仓库已创建
- [ ] Vercel 项目已部署
- [ ] 域名已绑定到 Vercel
- [ ] HTTPS 证书已生效

### 网站功能检查
- [ ] 首页可访问
- [ ] 日记页面可访问
- [ ] 响应式设计正常
- [ ] 移动端适配正常

---

## 🚀 快速部署脚本

```powershell
# 一键部署脚本（保存为 deploy.ps1）

# 1. 进入项目目录
cd C:\Users\Administrator\.easyclaw\workspace-browser-use\lobster-diary

# 2. Git 操作
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push

# 3. 提示
Write-Host "✅ 代码已推送到 GitHub" -ForegroundColor Green
Write-Host "⏳ Vercel 会自动部署，请访问 https://vercel.com 查看进度" -ForegroundColor Yellow
Write-Host "🌐 域名配置完成后，访问 https://lobsterdiary.cn" -ForegroundColor Cyan
```

---

## 📞 遇到问题？

### 常见问题

**Q1: DNS 不生效？**
- 检查实名认证是否完成
- 等待 10-30 分钟
- 清除本地 DNS 缓存：`ipconfig /flushdns`

**Q2: Vercel 部署失败？**
- 检查 `package.json` 是否正确
- 查看 Vercel 部署日志
- 尝试本地构建：`npm run build`

**Q3: HTTPS 证书错误？**
- 等待证书自动签发（通常 5-10 分钟）
- 清除浏览器缓存
- 尝试无痕模式访问

---

*最后更新：2026-03-11*
*版本：v1.0*
