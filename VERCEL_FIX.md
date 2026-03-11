# 🚨 Vercel 部署修复说明

**修复时间**：2026-03-11 14:40  
**问题**：Vercel 构建失败 - 组件路径解析错误

---

## ❌ 问题原因

```
Error: Module not found: Can't resolve '@/components/StatCard'
```

**原因**：StatCard 组件文件在迁移过程中丢失

---

## ✅ 已修复

1. **重新创建 StatCard.tsx** - 统计卡片组件
2. **修复 components.json** - 路径配置
3. **提交并推送** - 代码已同步到 GitHub

---

## 📋 Vercel 重新部署步骤

### 方案 A：自动部署（推荐）

代码推送到 GitHub 后，Vercel 会**自动触发重新部署**。

**查看部署状态**：
1. 访问：https://vercel.com/huaijw111hz/lobster-diary
2. 查看 "Deployments" 标签
3. 等待部署完成（约 2-3 分钟）

### 方案 B：手动触发

如果自动部署失败：
1. 访问 Vercel 项目页面
2. 点击 "Deployments"
3. 点击 "Redeploy" 按钮

---

## 🧪 本地测试

在等待 Vercel 部署时，可以本地测试：

```powershell
cd D:\easyclaw-workspace\lobster-diary
npm run dev
# 访问 http://localhost:3001
```

---

## ⚠️ 如果 Vercel 仍然报错

### 检查清单

- [ ] GitHub 仓库代码是最新的
- [ ] `src/components/StatCard.tsx` 存在
- [ ] `tsconfig.json` 路径配置正确
- [ ] `components.json` 配置正确

### 查看 Vercel 构建日志

1. 访问 Vercel 项目页面
2. 点击最新的 Deployment
3. 查看 "Build Logs"
4. 截图错误信息

---

## 🌐 域名绑定（部署成功后）

部署成功后，绑定域名 `lobsterdiary.cn`：

### Vercel 配置

1. Settings → Domains
2. Add domain: `lobsterdiary.cn`
3. Add domain: `www.lobsterdiary.cn`

### 阿里云 DNS 配置

登录阿里云 → 域名管理 → lobsterdiary.cn → 解析

**添加 A 记录**：
```
类型：A
主机记录：@
记录值：76.76.21.21
TTL：10 分钟
```

**添加 CNAME 记录**：
```
类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
TTL：10 分钟
```

---

## 📞 需要帮助？

如果遇到问题，提供：
1. Vercel 构建日志截图
2. 错误信息
3. 当前时间

---

*最后更新：2026-03-11 14:40*
