---
title: Python Web Development
date: 2025-01-09
categories:
  - 开发
  - 网页
tags:
  - Python
  - 编程
---

# Software Development
## Python Web Development(Django + Vue)
### 后端部分
#### 1. 安装 Django 和 Mysql 驱动
- 创建一个文件夹：`Software`
- 创建一个虚拟环境：`python3 -m venv env`（虚拟环境名字）
- 激活虚拟环境：`source env/bin/activate`
- 安装相应的库：`pip install django mysqlclient`（`mysqlclient`和`pymysql`效果一样）
- 安装`pymsql`：`pip install pymsql`（这是联系数据库一定要装的）

将以下代码放入`project_name/setting.py`中
```python
import pymysql
pymysql.install_as_MySQLdb()
```
- 检查是否安装成功（可选）：`python -m django –version`

#### 2. 创建 Django 项目
项目结构：
```
Project_name /          # Django 项目文件夹
├── manage.py         # 管理脚本
├── project_name /      # 项目配置目录
│   ├── settings.py   # 项目配置文件
│   ├── urls.py       # 路由配置
│   ├── wsgi.py       # WSGI 入口
│   └── __init__.py
├── app_name/            # 应用文件夹
│   ├── models.py     # 数据库模型
│   ├── views.py      # 视图函数
│   ├── urls.py       # 应用路由
│   └── templates/    # 模板文件夹
```
- 创建 Django 项目：`django-admin startproject project_name`（项目名字）
- 创建应用（App）：`python manage.py startapp app_name`(app 名字，可创建多个 app)
- 注册应用：打开`project_name/settings.py`，将`app_name`添加到`INSTALLED_APPS`：
```python
INSTALLED_APPS = [
    # 其他内置应用
    'app_name',  # 注册应用
]
```

#### 3. 配置 MySQL 库
- 创建数据库
打开 MySQLWorkbench，运行 SQL 代码创建数据库：
```sql
CREATE DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
- 配置 Django 数据库连接
打开`project_name/settings.py`，修改`DATABASES`配置：
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'database_name',          # 数据库名
        'USER': 'root',                  # 数据库用户名
        'PASSWORD': 'your_password',     # 数据库密码
        'HOST': '127.0.0.1',             # 数据库地址
        'PORT': '3306',                  # 数据库端口
    }
}
```

#### 4. 定义数据库模型
对于`models.py`，还可以通过数据库建好表后导入到文件中：
```bash
python manage.py inspectdb order > app_name/models.py
```
打开`app_name/models.py`，定义数据库表模型。编写代码
```python
from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, unique=True)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
```

#### 5. 创建数据库表
- 生成迁移文件
运行以下命令生成迁移文件：
```bash
python manage.py makemigrations
```
- 应用迁移
执行迁移，将表结构写入数据库：
```bash
python manage.py migrate
```
- 验证表创建
在 MySQLWorkbench 中，查看`database_name`数据库下是否生成了相应的表

#### 6. 运行开发服务器
在 vscode 终端输入以下命令：
```bash
python manage.py runserver
```
打开浏览器，访问`http://127.0.0.1:8000`，查看 Django 项目是否正常运行

#### 7. 添加视图
- 打开`app_name/views.py`，添加以下代码：
```python
from django.shortcuts import render
from.models import Customer

def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'customer_list.html', {'customers': customers})
```
- 配置路由
在`app_name/urls.py`（没有文件需要创建一个文件）中添加以下路由：
```python
from django.urls import path
from. import views

urlpatterns = [
    path('customers/', views.customer_list, name='customer_list'),
]
```
在`project_name/urls.py`下包含应用路由：
```python
from django.urls import path, include

urlpatterns = [
path('admin/', admin.site.urls),
# 添加的路由
    path('sales/', include('sales.urls')),
]
```

### 前端部分
#### 1. 创建 Vue 项目
- `npm install -g @vue/cli`
- 创建 Vue 项目名：`vue create project_frontend`
- 进入项目文件：`cd project_frontend`
- 安装配置文件：`npm install axios vue-router`

项目结构：

#### 2. 编写相应的组件
在`src/componets`下创建相应的组件，编写代码，实现前端页面功能

#### 3. 配置路由
在`src/router/index.js`文件（没有文件，需要自己创建）下添加以下代码（按照设计情况更改代码，注意要写`LoginPage`，`Page`很重要）
```javascript
import { createRouter, createWebHistory } from 'vue-router';

// 引入组件
import LoginPage from '@/components/Login.vue';
import RegisterPage from '@/components/Register.vue';
import DashboardPage from '@/components/Dashboard.vue';

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/login', // 默认路径重定向到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

#### 4. 配置`src/App.vue`和`src/main.js`文件
根据实际情况进行配置

`App.vue`
```html
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 可添加全局样式 */
</style>
```
`main.js`
```javascript
import { createApp } from 'vue'; // Vue 3 使用 createApp
import App from './App.vue';
import router from './router';

createApp(App)
 .use(router)
 .mount('#app');
```

#### 5. 检查运行前端代码
在 vscode 的终端输入以下代码
```bash
npm run dev
```
打开`http://localhost:8080`网址，检查是否正常显示。

### 运行修改：
- 在前端文件下运行
```bash
python manage.py runserver
```
- 在后端文件下运行
```bash
npm run dev
```
打开网址`http://localhost:8080`检查，是否能成功运行

### 前后端联系
- 安装`django-cors-headers`库
```bash
pip install django-cors-headers
```
- 将以下代码插入`project_name/setting.py`中的`INSTALLED_APPS`中
```python
'corsheaders'
```
- 将以下代码添加到`project_name/setting.py`中的`INSTALLED_APPS`中
```python
'corsheaders.middleware.CorsMiddleware',    # 添加 1，注意中间件的添加顺序
'django.middleware.common.CommonMiddleware', # add
```
- 添加以下配置代码到`project_name/setting.py`中
```python
CORS_ORIGIN_ALLOW_ALL = True        # 添加 2
```
- 更改`project_name/setting.py`中的地区位置代码
```python
LANGUAGE_CODE = 'zh-hans'
TIME_ZONE = 'Asia/Shanghai'
```
- 前端运行：
```bash
python manage.py runserver
```
- 后端运行：
```bash
npm run dev
```

## Python App development(Django + React)
### React 框架
```
src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ChatRoom.jsx
│   ├── SessionList.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   └── ChatPage.jsx
├── services/
│   └── api.js
├── App.js
├── App.css
├── index.js
└──...
```
- 创建 React 项目框架
```bash
npx create-react-app project_name_frontend
```
- 进入项目目录并安装依赖
```bash
cd chatgpt-frontend 
npm install axios react-router-dom
```
- 安装其他相关
```bash
npm install web-vitals
```
- 启动运行
```bash
npm start != npm run dev
```