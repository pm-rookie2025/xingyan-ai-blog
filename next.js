// 这个文件帮助 Vercel 识别 Next.js 项目
// 实际的 Next.js 代码在 NotionNext 目录中
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './NotionNext' });
const handle = app.getRequestHandler();

module.exports = app; 