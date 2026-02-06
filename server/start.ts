#!/usr/bin/env node

import { spawn } from 'child_process';
import { execSync } from 'child_process';

// 获取 npm 路径
let npmPath: string;

try {
  npmPath = execSync('npm', { encoding: 'utf8' }).trim();
  console.log('npm 路径:', npmPath);
} catch (error) {
  console.error('无法找到 npm，请确保已安装 Node.js');
  process.exit(1);
}

// 获取项目根目录
const PROJECT_ROOT = process.cwd();

console.log('项目根目录:', PROJECT_ROOT);
console.log('启动命令:', `${npmPath} run dev`);

async function startProxyServer() {
  console.log('\n🚀 启动钉钉代理服务器...');

  const server = spawn('node', ['server/dingtalk-proxy.ts'], {
    cwd: PROJECT_ROOT,
    stdio: 'inherit'
  });

  server.on('error', (error) => {
    console.error('代理服务器启动失败:', error);
    process.exit(1);
  });

  return server;
}

async function startFrontendDev() {
  console.log('\n💻 启动前端开发服务器...');

  const frontend = spawn(npmPath, ['run', 'dev'], {
    cwd: PROJECT_ROOT,
    stdio: 'inherit'
  });

  frontend.on('error', (error) => {
    console.error('前端服务器启动失败:', error);
    process.exit(1);
  });

  return frontend;
}

async function main() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║     钉钉集成 - 开发环境启动器            ║');
  console.log('╚════════════════════════════════════════════╝\n');

  try {
    console.log('启动所有服务...\n');

    const [proxyServer, frontend] = await Promise.all([
      startProxyServer(),
      startFrontendDev()
    ]);

    // 处理进程退出
    async function cleanup() {
      console.log('\n🛑 正在关闭服务器...');
      proxyServer.kill('SIGTERM');
      frontend.kill('SIGTERM');
      await new Promise(resolve => setTimeout(resolve, 1000));
      process.exit(0);
    }

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);

    // 等待服务器启动
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('\n✅ 所有服务已启动！');
    console.log('   📧 钉钉代理服务器: http://localhost:4000');
    console.log('   💻 前端开发服务器: http://localhost:5173');
    console.log('   🌐 联系页面: http://localhost:5173/contact\n');

  } catch (error) {
    console.error('启动失败:', error);
    process.exit(1);
  }
}

main();
