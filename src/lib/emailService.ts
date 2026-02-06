import { MailDataRequired } from '@sendgrid/mail';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailParams {
  to_email: string;
  to_name: string;
  from_email: string;
  from_name: string;
  subject: string;
  reply_to: string;
  phone: string;
  message: string;
  company_name?: string;
  company_address?: string;
  company_phone?: string;
  company_email?: string;
  company_website?: string;
}

interface BossCloudConfig {
  smtpHost: string;
  smtpPort: number;
  useSSL: boolean;
  requiresAuth: boolean;
}

const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY || '';
const SENDGRID_FROM_EMAIL = import.meta.env.VITE_SENDGRID_FROM_EMAIL || 'your-email@xinrou.cn';
const SENDGRID_FROM_NAME = import.meta.env.VITE_SENDGRID_FROM_NAME || '芯柔微纳科技';
const SENDGRID_TO_EMAIL = import.meta.env.VITE_SENDGRID_TO_EMAIL || 'your-email@xinrou.cn';

const BOSSCLOUD_CONFIG: BossCloudConfig = {
  smtpHost: 'smtp.bosscloud.cn',
  smtpPort: 587,
  useSSL: false,
  requiresAuth: true
};

async function sendEmailViaBossCloud(params: EmailParams): Promise<boolean> {
  try {
    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API Key is not configured');
      return false;
    }

    const mailData: MailDataRequired = {
      to: params.to_email,
      from: {
        email: SENDGRID_FROM_EMAIL,
        name: SENDGRID_FROM_NAME
      },
      reply_to: {
        email: params.reply_to,
        name: params.from_name
      },
      subject: params.subject,
      text: `
${params.company_name || '芯柔微纳科技'} - 联系表单提交

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
联系方式
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

联系人: ${params.from_name}
电话: ${params.phone}
邮箱: ${params.reply_to}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
留言内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${params.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
公司信息
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

公司名称: ${params.company_name || '芯柔微纳科技'}
联系地址: ${params.company_address || '西安市高新区科技路88号芯柔微纳科技大厦'}
联系电话: ${params.company_phone || '+86 123 4567 8900'}
公司邮箱: ${params.company_email || 'business@xinrou.cn'}
公司网站: ${params.company_website || 'www.xinrou.cn'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 20px -30px;
    }
    .section {
      border-bottom: 1px solid #e1e1e1;
      padding: 15px 0;
    }
    .section:last-child {
      border-bottom: none;
    }
    .section-title {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 10px;
    }
    .label {
      color: #666;
      font-size: 14px;
    }
    .value {
      font-weight: 500;
      color: #333;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      color: #999;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; font-size: 24px;">${params.company_name || '芯柔微纳科技'} - 联系表单提交</h2>
    </div>

    <div class="section">
      <div class="section-title">联系方式</div>
      <div>
        <span class="label">联系人:</span>
        <span class="value">${params.from_name}</span>
      </div>
      <div>
        <span class="label">电话:</span>
        <span class="value">${params.phone}</span>
      </div>
      <div>
        <span class="label">邮箱:</span>
        <span class="value">${params.reply_to}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">留言内容</div>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 10px;">
        <div style="white-space: pre-wrap;">${params.message}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">公司信息</div>
      <div>
        <div>
          <span class="label">公司名称:</span>
          <span class="value">${params.company_name || '芯柔微纳科技'}</span>
        </div>
        <div>
          <span class="label">联系地址:</span>
          <span class="value">${params.company_address || '西安市高新区科技路88号芯柔微纳科技大厦'}</span>
        </div>
        <div>
          <span class="label">联系电话:</span>
          <span class="value">${params.company_phone || '+86 123 4567 8900'}</span>
        </div>
        <div>
          <span class="label">公司邮箱:</span>
          <span class="value">${params.company_email || 'business@xinrou.cn'}</span>
        </div>
        <div>
          <span class="label">公司网站:</span>
          <span class="value">${params.company_website || 'www.xinrou.cn'}</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>${params.company_name || '芯柔微纳科技'} - 技术支持团队</p>
      <p>${new Date().toLocaleDateString()}</p>
    </div>
  </div>
</body>
</html>
      `
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify(mailData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('SendGrid API Error:', errorData);
      throw new Error(`SendGrid API failed: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    console.log('Email sent successfully via BossCloud SMTP');
    return true;
  } catch (error) {
    console.error('Failed to send email via BossCloud SMTP:', error);
    return false;
  }
}

export async function sendEmail(formData: ContactFormData): Promise<boolean> {
  return sendEmailViaBossCloud({
    to_email: SENDGRID_TO_EMAIL,
    to_name: '业务负责人',
    from_email: SENDGRID_FROM_EMAIL,
    from_name: formData.name,
    reply_to: formData.email,
    phone: formData.phone,
    message: formData.message,
    company_name: '芯柔微纳科技',
    company_address: '西安市高新区科技路88号芯柔微纳科技大厦',
    company_phone: '+86 123 4567 8900',
    company_email: 'business@xinrou.cn',
    company_website: 'www.xinrou.cn'
  });
}

export { BOSSCLOUD_CONFIG };
