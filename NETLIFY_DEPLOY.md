# Netlify 部署指南

## 1. 前置准备

确保本地已安装Netlify CLI：
```bash
npm i -g netlify-cli
```

## 2. 部署步骤

### 步骤1: 构建
```bash
npm run build
```

### 步骤2: 部署
```bash
netlify deploy --prod
```

按提示输入：
- **Site name**: (可选，直接回车)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## 3. 配置环境变量（重要！）

部署成功后，必须在Netlify Dashboard配置环境变量：

### 登录 https://app.netlify.com

1. 点击你的站点
2. 进入 **Site settings** (设置)
3. 左侧菜单选择 **Environment variables** (环境变量)
4. 添加以下变量：

#### 变量1: VITE_DINGTALK_WEBHOOK_URL
- **Key**: `VITE_DINGTALK_WEBHOOK_URL`
- **Value**: `https://oapi.dingtalk.com/robot/send?access_token=你的token`

#### 变量2: VITE_DINGTALK_KEYWORDS
- **Key**: `VITE_DINGTALK_KEYWORDS`
- **Value**: `联系我们`

### 为什么不能直接在代码中配置？
1. **安全性**: Webhook URL和关键词包含敏感信息
2. **秘密扫描**: Netlify会自动检测并阻止提交敏感信息
3. **灵活性**: 可以在多个环境使用不同的配置

## 4. 测试表单

1. 访问你的Netlify网站
2. 填写联系表单
3. 提交后检查钉钉群是否收到消息

## 5. 常见问题

### 构建失败
- 检查是否正确配置了环境变量
- 确认没有在代码中硬编码敏感信息

### 表单提交失败
- 检查环境变量是否正确配置
- 确认钉钉Webhook URL有效
- 查看浏览器控制台错误信息

### 表单能访问但收不到消息
- 检查钉钉机器人是否启用
- 确认关键词设置正确
- 查看钉钉群管理后台的错误日志
