# xingyan-ai-blog

基于NotionNext和Notion API搭建的个人博客站点

## 项目介绍

这是一个使用NotionNext框架搭建的个人博客项目，通过Notion API将Notion数据库中的文章同步到个人博客站点。

## 主要功能

- Notion数据库内容同步
- 支持文章、标签、分类展示
- 响应式设计，支持移动端访问
- 使用heo主题，界面美观现代

## 本地开发

1. 克隆项目
```bash
git clone https://github.com/你的用户名/xingyan-ai-blog.git
cd xingyan-ai-blog/NotionNext
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
创建或编辑 `.env.local` 文件：
```
NOTION_PAGE_ID=你的Notion数据库ID
NOTION_ACCESS_TOKEN=你的Notion API密钥
NEXT_PUBLIC_THEME=heo
NEXT_PUBLIC_LANG=zh-CN
```

4. 启动开发服务器
```bash
npm run dev
```

5. 访问站点
浏览器打开 http://localhost:3000

## 部署说明

详细部署方法请参考 [部署指南.md](./部署指南.md)

## 🌟 主要特点

- **✍️ Notion 作为 CMS**：使用 Notion 编写和管理所有内容，无需复杂设置
- **🎨 精美 Heo 主题**：现代设计风格，支持深色/浅色模式切换
- **📱 完美适配**：响应式设计，桌面端与移动端均有出色表现
- **🚀 免费部署**：一键部署到 Vercel，零服务器维护成本
- **🔍 SEO 友好**：针对搜索引擎优化的代码结构和元数据设置
- **🎵 多媒体支持**：内置音乐播放器、动态背景等特色功能

## 📚 文档导航

本项目包含以下详细文档，帮助您从零开始搭建博客：

1. [项目说明](./NotionBlog项目说明.md) - 项目概述、特点和使用方法
2. [Notion配置指南](./Notion配置指南.md) - 如何设置Notion工作区作为博客内容源
3. [NotionNext配置指南](./NotionNext配置指南.md) - 如何配置NotionNext框架和Heo主题
4. [部署指南](./部署指南.md) - 在Vercel上部署博客的详细步骤
5. [博客预览原型](./博客预览原型.html) - 博客效果可交互预览

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/tangly1024/NotionNext.git
cd NotionNext
```

### 2. 设置 Notion

按照 [Notion配置指南](./Notion配置指南.md) 创建并设置您的Notion数据库。

### 3. 配置项目

参照 [NotionNext配置指南](./NotionNext配置指南.md) 配置项目和主题。

### 4. 部署网站

遵循 [部署指南](./部署指南.md) 在Vercel上一键部署您的博客。

## 🖼️ 效果预览

想要在部署前查看效果？打开 [博客预览原型](./博客预览原型.html) 体验交互式预览。

## 📋 系统要求

- [Node.js](https://nodejs.org/) 14.x 或更高版本
- [Git](https://git-scm.com/) 
- [Notion](https://www.notion.so/) 账号
- [GitHub](https://github.com/) 账号
- [Vercel](https://vercel.com/) 账号

## 🙏 致谢

本项目基于 [NotionNext](https://github.com/tangly1024/NotionNext) 开发，特别感谢 [tangly1024](https://github.com/tangly1024) 及所有贡献者的工作。

## 📄 许可证

MIT License - 详见 [LICENSE](./NotionNext/LICENSE) 