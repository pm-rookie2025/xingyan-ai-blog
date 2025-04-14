#!/bin/bash
echo "切换到 NotionNext 目录"
cd NotionNext

echo "安装依赖"
npm install

echo "构建项目"
npm run build

echo "构建完成" 