# Vite 配置说明

## 配置文件

项目包含两个 Vite 配置文件：

### 1. vite.config.local.ts (本地开发)
- **用途**: 本地开发调试
- **功能**: 包含代理服务器配置，转发钉钉请求到本地代理
- **使用方式**: `npm run dev`

### 2. vite.config.ts (生产环境)
- **用途**: 生产环境构建
- **功能**: 纯静态网站配置，用于部署到 GitHub Pages、Netlify、Vercel 等
- **使用方式**: `npm run build`

## 本地开发流程

```bash
# 终端1: 启动后端代理服务器
npm run start-proxy

# 终端2: 启动前端开发服务器
npm run dev
```

访问 http://localhost:5173 即可测试表单功能。

## 生产部署流程

```bash
# 1. 构建项目
npm run build

# 2. 部署到 Netlify (推荐)
netlify deploy --prod

# 3. 或部署到 GitHub Pages
npm run deploy
```

## 部署到 Netlify 后

1. 在 Netlify Dashboard 配置环境变量：`VITE_DINGTALK_WEBHOOK_URL`
2. 访问你的网站，表单可以正常发送钉钉消息
