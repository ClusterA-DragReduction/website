import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/dingtalk-proxy', async (req, res) => {
  try {
    const { webhookUrl, message } = req.body;

    if (!webhookUrl || !message) {
      return res.status(400).json({
        errcode: 400,
        errmsg: '缺少必要参数'
      });
    }

    console.log('收到钉钉发送请求:', {
      webhookUrl: webhookUrl.substring(0, 50) + '...',
      messageLength: JSON.stringify(message).length
    });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('钉钉 API 错误:', errorData);
      return res.status(response.status).json(errorData);
    }

    const result = await response.json();

    if (result.errcode !== 0) {
      console.error('钉钉 API 返回错误:', result);
      return res.status(400).json(result);
    }

    console.log('消息发送成功');
    res.json(result);

  } catch (error) {
    console.error('发送失败:', error);
    res.status(500).json({
      errcode: 500,
      errmsg: '服务器内部错误'
    });
  }
});

app.post('/api/send-to-dingtalk', async (req, res) => {
  try {
    const { webhookUrl, message } = req.body;

    if (!webhookUrl || !message) {
      return res.status(400).json({
        errcode: 400,
        errmsg: '缺少必要参数'
      });
    }

    console.log('收到钉钉发送请求:', {
      webhookUrl: webhookUrl.substring(0, 50) + '...',
      messageLength: JSON.stringify(message).length
    });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('钉钉 API 错误:', errorData);
      return res.status(response.status).json(errorData);
    }

    const result = await response.json();

    if (result.errcode !== 0) {
      console.error('钉钉 API 返回错误:', result);
      return res.status(400).json(result);
    }

    console.log('消息发送成功');
    res.json(result);

  } catch (error) {
    console.error('发送失败:', error);
    res.status(500).json({
      errcode: 500,
      errmsg: '服务器内部错误'
    });
  }
});

app.listen(PORT, () => {
  console.log(`钉钉代理服务器运行在 http://localhost:${PORT}`);
  console.log(`可用接口: POST http://localhost:${PORT}/api/send-to-dingtalk`);
});
