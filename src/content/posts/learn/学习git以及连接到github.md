---
title: 学习git以及连接到github
published: 2024-03-20
description: 
image: ''
tags: [git, github]
category: 编程学习
draft: false
---

## 一、git安装

### 1. 下载安装包

打开[git官网](https://git-scm.com/downloads)，选择适合自己操作系统的安装包进行下载。

### 2. 安装

打开下载好的git安装包，一路下一步即可

## 二、本地git使用

### 1.配置用户名和邮箱

``` bash
git config --global user.name "your name"
git config --global user.email "your email"
```

### 2.初始化git仓库

在想要建立git仓库的目录下，打开命令行，输入：

```bash
git init
```

### 3.添加文件到暂存区

```bash
git add 文件名
```

或者使用

```bash
git add .*
```

来提交当前目录下所有更改

### 4.提交文件

```bash
git commit -m "提交说明"
```

## 三、连接到github

### 1.新建ssh密钥

进入vscode，打开仓库目录,使用快捷键`ctrl+shift+\``打开gitbash终端，输入：

```bash
ssh-keygen -t rsa
```

生成ssh密钥，一路回车即可。

### 2.上传公钥到github

- 在`C:\Users\username\.ssh`目录下找到`id_rsa.pub`文件，打开，复制里面的内容。

- 打开github，点击右上角头像，选择`Settings`，选择`SSH and GPG keys`，点击`New SSH key`，将刚才生成的公钥内容粘贴到`Key`文本框，输入`Title`，点击`Add SSH key`即可。

### 3.连接到github仓库

在gitbash终端输入：

```bash
git remote add origin git@github.com:username/repository.git
```

将`username`替换为自己的github用户名，`repository`替换为自己的仓库名。

### 4.推送代码到github

因为vscode默认分支名称为`master`，而GitHub默认分支名称为`main`，所以需要先将本地分支名称修改为`main`。

```bash
git branch -M main
```

然后执行推送命令：

```bash
git push -u origin main
```

`-u`参数表示将本地仓库与远程仓库关联，`origin`表示远程仓库名，`main`表示分支名。

## 四、常用命令

- `git status`：查看当前仓库状态
- `git log`：查看提交历史
- `git diff`：查看文件差异
- `git reset --hard HEAD^`：撤销上次提交
- `git reset --hard HEAD~n`：撤销n次提交
- `git branch`：查看分支
- `git branch 分支名`：创建分支
- `git checkout 分支名`：切换分支
- `git merge 分支名`：合并分支
- `git branch -d 分支名`：删除分支
