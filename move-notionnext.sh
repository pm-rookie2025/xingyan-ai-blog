#!/bin/bash

# 移动 NotionNext 目录下的所有文件到根目录
cp -r NotionNext/* .

# 移动隐藏文件（以.开头的文件）
cp -r NotionNext/.env* .
cp -r NotionNext/.eslint* .
cp -r NotionNext/.git* .
cp -r NotionNext/.prettier* .
cp -r NotionNext/.* . 2>/dev/null || :

# 删除现有的 Next.js 示例项目文件
rm -rf pages/index.js
rm -f next.config.js

echo "NotionNext 内容已移动到根目录" 