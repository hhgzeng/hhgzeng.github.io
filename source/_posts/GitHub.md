---
title: GitHub 基本操作
date: 2025-01-17
categories:
  - GitHub
tags:
  - GitHub
---

# GitHub 基本操作
## 创建 GitHub 仓库
1. 登录 GitHub。
2. 点击右上角的 + 图标，选择 New repository。
3. 填写仓库名称、描述，并选择是否公开（public）或私有（private）。
4. 点击 Create repository，记下仓库的 HTTPS 或 SSH 链接。

## 初始化本地项目并与 GitHub 关联
在终端中执行以下步骤：
```bash
# 导航到项目目录
cd /path/to/your/project

# 初始化 Git 仓库
git init

# 添加项目文件
git add.

# 提交更改
git commit -m "Initial commit"

# 将远程仓库添加为 origin（使用 ssh）
git remote add origin git@github.com:your_username/your_repository.git
```

## 推送本地项目到 GitHub
推送项目的主分支（通常是 main 或 master）：
```bash
git branch -M main  # 如果是 master 分支，可以忽略此行
git push -u origin main
```

## 验证推送结果
在 GitHub 页面刷新仓库，应该可以看到项目文件已成功上传。

## 后续同步操作
在本地修改文件后，提交并推送到远程仓库：
```bash
git add.
git commit -m "Describe your changes"
git push origin main
```

这样就完成了将 macOS 本地项目上传到 GitHub 的操作流程。

# 常见问题及解决办法
## 更新文件
1. 检查状态：
```bash
git status
```
确认修改的文件已被标记为修改状态 (modified)。

2. 提交修改操作：
```bash
git add.
git commit -m "Delete/Add/Modify file/folder: [文件或文件夹名称]"
```
此操作会将修改的内容提交到本地的 Git 仓库。

3. 推送到远程仓库：
```bash
git push origin [分支名]
```

## 注意事项
- 同步最新代码：在执行这些操作前，确保你已拉取远程仓库的最新代码以避免冲突：
```bash
git pull origin [分支名]
```
- 精确添加：如果你不希望使用 `git add.` 添加所有更改，可以指定文件路径：
```bash
git add [文件路径]
```
- 检查提交历史：确认操作是否成功，可以通过以下命令查看提交历史：
```bash
git log –oneline
```

## Clone 仓库并建立连接
1. 克隆仓库
```bash
git clone git@github.com:username/repo.git
```
2. 验证远程连接
```bash
git remote -v
```
3. 拉取最新更新
```bash
git pull origin main
```

## 下载压缩包连接
1. 初始化仓库
```bash
git init
```
2. 添加远程连接
```bash
git remote add origin <仓库地址>
```
3. 验证远程连接是否成功
```bash
git remote -v
```

## 更改文件名/路径
```bash
git mv old_filename/old_directory new_filename/new_directory
git commit -m “update file position”
git push origin main
```

## 回退到历史版本
1. 查看提交历史
首先查看提交历史，找到需要回退的提交哈希值：
```bash
git log
```
示例输出：
```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t
Author: Jing Zeng <example@example.com>
Date:   Fri Jan 10 10:00:00 2025 +0800

    Commit message
```
记录要回退的提交哈希值（a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t）。

2. 回退到指定提交
   - 回退单个提交
执行以下命令撤销某次提交的更改，并生成一个新的回退提交：
```bash
git revert <commit-hash>
```
示例：
```bash
git revert a1b2c3d4
```
这会创建一个新的提交，内容是用来撤销 a1b2c3d4 的更改。
   - 回退多个提交
如果需要回退一段范围内的多个提交，可以指定提交范围（从旧到新）：
```bash
git revert <oldest-commit>..<newest-commit>
```
示例：
```bash
git revert a1b2c3d4..d5e6f7g8
```
注意：
提交范围不包括 oldest-commit，但包含 newest-commit。需要逐个处理每个提交，可能会出现冲突，需要手动解决。

3. 处理冲突
如果在回退过程中发生冲突，Git 会提示你解决冲突：
按照提示编辑冲突的文件，解决冲突。
标记冲突解决完成：
```bash
git add <conflicted-files>
```
继续完成回退：
```bash
git revert --continue
```
4. 推送到远程仓库
完成回退后，将更改推送到远程仓库：
```bash
git push origin <branch-name>
```

## 删除不必要的文件或文件夹（.DS_Store 和.vscode 文件）
1. 创建.gitignore 文件
```bash
touch.gitignore
```
2. 在.gitignore 文件中添加在忽略规则
```
# macOS 系统文件
.DS_Store

# VSCode 配置文件夹
.vscode/

# 虚拟环境变量
env/
```
3. 删除已被追踪的.DS_Store 和.vscode
如果这些文件已经被提交到仓库，需要先从版本控制中移除它们，然后再生效.gitignore。
删除追踪的文件：
```bash
git rm -r --cached.DS_Store.vscode
```
提交更改：
```bash
git add.gitignore
git commit -m "Ignore macOS and VSCode specific files"
```
4. 验证忽略规则
执行以下命令，确认.gitignore 文件生效：
```bash
git status
```
你应该看不到.DS_Store 和.vscode 文件。如果仍看到它们，可能是文件路径设置有问题，需检查.gitignore 的配置。

5. 提交更改
```bash
git push
```