---
title: Web 应用部署指南 - Render & Vercel
date: 2025-01-17
categories:
  - 网站部署
tags:
  - 网站部署
---

# Web 应用部署指南

本文将介绍如何使用 Render 和 Vercel 来部署完整的 Web 应用。我们将使用 Render 部署后端服务和数据库，使用 Vercel 部署前端应用。

## 1. 数据库部署 (Render)

### 1.1 创建 MySQL 数据库

1. 登录 [Render 控制台](https://dashboard.render.com/)
2. 点击 "New +" 按钮
3. 选择 "MySQL"
4. 配置数据库：
   - 填写数据库名称
   - 选择地区（建议选择离用户较近的地区）
   - 选择合适的计划（有免费选项）
   - 设置数据库用户名和密码

```bash
# Render 会提供类似这样的数据库连接信息：
Host: dpg-xxxxx.render.com
Port: 5432
Database: dbname
User: username
Password: xxxxxxxxx
```

### 1.2 数据库配置

创建完成后，Render 会提供数据库连接信息。请保存好这些信息，后续会在后端配置中使用：

```python
# 后端配置示例 (Python)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'your_host.render.com',
        'PORT': '3306',
    }
}
```

## 2. 后端部署 (Render)

### 2.1 准备工作

1. 确保你的项目有以下文件：
   - requirements.txt（Python 依赖）
   - 启动脚本（如 gunicorn 配置）
   - .env 文件（环境变量配置）

### 2.2 部署步骤

1. 在 Render 控制台点击 "New +"
2. 选择 "Web Service"
3. 连接你的 GitHub 仓库
4. 配置部署选项：
   - 选择分支
   - 设置构建命令
   - 设置启动命令
   - 配置环境变量

```bash
# 示例构建命令
pip install -r requirements.txt

# 示例启动命令
gunicorn myapp.wsgi:application
```

### 2.3 环境变量配置

在 Render 的环境变量设置中添加必要的配置：

```bash
DATABASE_URL=mysql://username:password@host:port/dbname
DJANGO_SECRET_KEY=your_secret_key
DEBUG=False
ALLOWED_HOSTS=.render.com
```

## 3. 前端部署 (Vercel)

### 3.1 准备工作

1. 确保你的前端项目有：
   - package.json
   - 构建脚本配置
   - .env.production（如果需要）

### 3.2 部署步骤

1. 登录 [Vercel](https://vercel.com/)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 配置构建选项：
   - 选择框架预设（如 React、Vue、Next.js 等）
   - 设置构建命令和输出目录
   - 配置环境变量

```json
// package.json 示例
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 3.3 环境变量配置

在 Vercel 项目设置中配置必要的环境变量：

```bash
VITE_API_URL=https://your-backend.render.com
VITE_APP_ENV=production
```

## 4. 域名配置

### 4.1 后端域名 (Render)

1. 在 Render 控制台中选择你的服务
2. 进入 "Settings" -> "Custom Domain"
3. 添加你的域名
4. 按照提示配置 DNS 记录

### 4.2 前端域名 (Vercel)

1. 在 Vercel 项目设置中选择 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

## 5. CORS 配置

### 5.1 后端 CORS 配置

```python
# Django 示例
CORS_ALLOWED_ORIGINS = [
    "https://your-frontend.vercel.app",
    "https://your-custom-domain.com"
]

CORS_ALLOW_CREDENTIALS = True
```

### 5.2 前端 API 请求配置

```javascript
// axios 配置示例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});
```

## 6. 部署检查清单

### 6.1 后端检查

- [ ] 数据库连接是否正确配置
- [ ] 环境变量是否设置完整
- [ ] CORS 配置是否正确
- [ ] 静态文件是否正确配置
- [ ] 日志是否正确配置

### 6.2 前端检查

- [ ] API 地址是否正确配置
- [ ] 环境变量是否设置完整
- [ ] 构建命令是否正确
- [ ] 路由配置是否正确

## 7. 常见问题解决

### 7.1 数据库连接问题

```python
# 检查数据库连接
import mysql.connector

try:
    conn = mysql.connector.connect(
        host="your_host.render.com",
        user="your_username",
        password="your_password",
        database="your_database"
    )
    print("数据库连接成功")
except Exception as e:
    print(f"数据库连接失败: {e}")
```

### 7.2 CORS 错误

检查后端 CORS 配置是否包含所有必要的域名：

```python
CORS_ALLOWED_ORIGINS = [
    "https://your-frontend.vercel.app",
    "https://your-custom-domain.com",
    "http://localhost:3000"  # 开发环境
]
```

### 7.3 环境变量问题

确保所有必要的环境变量都已正确设置：

```bash
# 后端 (.env)
DATABASE_URL=mysql://username:password@host:port/dbname
DJANGO_SECRET_KEY=your_secret_key
DEBUG=False

# 前端 (.env.production)
VITE_API_URL=https://your-backend.render.com
```

## 总结

本文介绍了如何使用 Render 和 Vercel 部署完整的 Web 应用。通过合理配置数据库、后端服务和前端应用，可以快速搭建一个生产环境的 Web 应用。记住要经常检查日志，确保所有服务正常运行，并定期进行备份和维护。
