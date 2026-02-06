# Netlify 环境变量配置步骤

## 第1步：登录 Netlify
打开浏览器访问: https://app.netlify.com

## 第2步：选择你的站点
点击进入你刚部署的站点

## 第3步：配置环境变量

在左侧菜单中找到并点击：
**Site settings** → **Environment variables**

添加以下两个变量：

### 变量1: VITE_DINGTALK_WEBHOOK_URL
- **Name**: `VITE_DINGTALK_WEBHOOK_URL`
- **Value**: `https://oapi.dingtalk.com/robot/send?access_token=你的token`

### 变量2: VITE_DINGTALK_KEYWORDS
- **Name**: `VITE_DINGTALK_KEYWORDS`
- **Value**: `联系我们`

点击 **Add variable** 保存。

## 第4步：重新构建

配置完成后，点击：
**Deploys** → **Trigger deploy** → **Deploy site**

或者回到主页，点击 **Retry deploy**。

等待1-2分钟构建完成。

## 第5步：测试表单

访问你的网站，填写联系表单，提交测试。

## 常见问题

### 找不到 Environment variables 菜单？
- 确保已进入 Site settings 页面
- 左侧侧边栏滚动到底部

### 配置后还是报错？
- 点击 **Retrigger site build** 重新构建
- 等待构建完成后访问网站

### 表单提交失败？
- 检查环境变量是否正确
- 确认钉钉 Webhook URL 有效
- 查看浏览器控制台错误信息
