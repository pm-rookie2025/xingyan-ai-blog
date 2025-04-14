#!/bin/bash
echo "切换到 NotionNext 目录"
cd NotionNext

echo "安装依赖"
npm install

echo "直接执行 next build 命令而不通过 npm run build"
npx next build

echo "构建完成" 