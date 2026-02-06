interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface DingTalkConfig {
  webhookUrl: string;
  keywords: string[];
}

const DINGTALK_CONFIG: DingTalkConfig = {
  webhookUrl: import.meta.env.VITE_DINGTALK_WEBHOOK_URL || '',
  keywords: import.meta.env.VITE_DINGTALK_KEYWORDS?.split(',') || ['联系表单', '联系我们']
};

interface DingTalkMessage {
  msgtype: 'markdown';
  markdown: {
    title: string;
    text: string;
  };
}

async function sendToDingTalk(formData: ContactFormData): Promise<boolean> {
  try {
    console.log('========== 钉钉发送开始 ==========');

    // 检查配置
    console.log('Webhook URL:', DINGTALK_CONFIG.webhookUrl);
    console.log('Keywords:', DINGTALK_CONFIG.keywords);

    if (!DINGTALK_CONFIG.webhookUrl) {
      throw new Error('Webhook URL 未配置，请在 .env 文件中配置 VITE_DINGTALK_WEBHOOK_URL');
    }

    if (DINGTALK_CONFIG.webhookUrl.includes('xxxxxxxxx')) {
      throw new Error('Webhook URL 使用的是示例值，请修改为实际的 Webhook URL');
    }

    const message: DingTalkMessage = {
      msgtype: 'markdown',
      markdown: {
        title: '📋 联系表单提交',
        text: `## 📋 联系表单提交

**👤 联系人**: \`${formData.name}\`
**📞 电话**: \`${formData.phone}\`
**📧 邮箱**: \`${formData.email}\`

---

### 💬 留言内容

${formData.message}

---

*提交时间: ${new Date().toLocaleString()}*

---

**关键词:联系我们**
`
      }
    };

    console.log('发送的消息:', JSON.stringify(message, null, 2));

    // 直接调用钉钉API
    const response = await fetch(DINGTALK_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(message)
    });

    console.log('钉钉API响应状态:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('钉钉API错误响应:', errorData);

      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

      if (errorData.errcode !== undefined) {
        errorMessage += ` - 错误码: ${errorData.errcode}`;
        errorMessage += ` - 错误信息: ${errorData.errmsg}`;

        if (errorData.errcode === 310000) {
          errorMessage += '（关键词验证失败）';
        } else if (errorData.errcode === 310001) {
          errorMessage += '（机器人被禁用）';
        }
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('API 响应结果:', result);

    if (result.errcode !== 0) {
      const errorMsg = result.errmsg || '未知错误';
      throw new Error(`API 返回错误码 ${result.errcode}: ${errorMsg}`);
    }

    console.log('========== 消息发送成功 ==========');
    return true;
  } catch (error) {
    console.error('========== 发送失败 ==========');
    console.error('错误类型:', error instanceof Error ? error.name : 'Unknown');
    console.error('错误信息:', error instanceof Error ? error.message : String(error));

    if (error instanceof Error) {
      throw new Error(`发送失败: ${error.message}`);
    }

    throw new Error(`发送失败: ${String(error)}`);
  }
}

export { sendToDingTalk, DINGTALK_CONFIG };
