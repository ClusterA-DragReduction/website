export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { webhookUrl, message } = req.body;

    if (!webhookUrl || !message) {
      return res.status(400).json({
        errcode: 400,
        errmsg: '缺少必要参数'
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json(errorData);
    }

    const result = await response.json();

    if (result.errcode !== 0) {
      return res.status(400).json(result);
    }

    res.json(result);

  } catch (error) {
    return res.status(500).json({
      errcode: 500,
      errmsg: '服务器内部错误'
    });
  }
}