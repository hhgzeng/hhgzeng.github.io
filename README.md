# 个人博客

这是一个基于 Hexo 框架搭建的个人博客项目，使用 Butterfly 主题进行美化。

## 技术栈

- Hexo v6+ (静态博客框架)
- Butterfly 主题
- Node.js
- Git

## 目录结构

```
.
├── _config.yml          # 站点配置文件
├── package.json         # 项目依赖
├── scaffolds/          # 模板文件夹
├── source/             # 存放用户资源的地方
│   ├── _posts/        # 博客文章
│   ├── about/         # 关于页面
│   ├── categories/    # 分类页面
│   ├── tags/         # 标签页面
│   └── messageboard/  # 留言板
├── themes/            # 主题文件夹
│   └── butterfly/    # butterfly 主题
└── public/           # 生成的静态网站文件
```

## 特性

- 响应式设计，支持移动端访问
- 支持文章分类和标签
- 集成评论系统
- 支持文章目录
- 支持代码高亮
- 支持数学公式
- 支持中英文切换

## 本地运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
hexo server
```

3. 生成静态文件：
```bash
hexo generate
```

4. 部署到 GitHub Pages：
```bash
hexo deploy
```

## 写作

1. 创建新文章：
```bash
hexo new "文章标题"
```

2. 文章格式：
```markdown
---
title: 文章标题
date: YYYY-MM-DD HH:mm:ss
tags: [标签1, 标签2]
categories: 分类
---
```

## 部署

本博客使用 GitHub Pages 进行部署，部署配置在 `_config.yml` 中：

```yaml
deploy:
  type: git
  repo: git@github.com:hhgzeng/hhgzeng.github.io.git
  branch: main
```

## 许可证

MIT License

## 作者

jing 