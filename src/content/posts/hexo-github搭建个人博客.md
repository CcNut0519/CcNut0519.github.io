---
title: hexo+github搭建个人博客
published: 2024-03-21 13:23:39
tags: 
  - hexo
  - github
category: 
  - 编程学习
---

## 一、安装git并且与github绑定

参考 [廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

## 二、安装node.js

打开 [node.js官网](https://nodejs.org/en)，下载对应版本的node.js安装包，安装后，在命令行输入 `node -v` 和 `npm -v` 验证是否安装成功。

## 三、安装hexo

在命令行输入 `npm install hexo-cli -g` 安装hexo，输入`npm install` 安装hexo所需的依赖包。

## 四、创建博客仓库

在github上创建一个仓库，仓库名为 `username.github.io`，其中 `username` 为你的github用户名。

## 五、克隆博客仓库到本地

在本地任意目录下，打开`gitbash`，输入 `git clone 仓库地址` 克隆仓库到本地。

## 六、安装hexo-deployer-git插件

在本地博客仓库下，打开`gitbash`，输入 `npm install hexo-deployer-git --save` 安装hexo-deployer-git，该插件用于部署博客到github。

## 七、配置hexo

在本地博客仓库下，打开`gitbash`，输入 `hexo init` 初始化hexo，然后在 `_config.yml` 文件中配置相关信息。

## 八、创建文章

在本地博客仓库下，打开`gitbash`，输入 `hexo new "文章标题"` 创建文章。

## 九、本地渲染

在本地博客仓库下，打开`gitbash`，输入 `hexo g`渲染静态网页。

## 十、本地预览

在本地博客仓库下，输入 `hexo s` 启动本地服务器，然后在浏览器中输入 `http://localhost:4000` 预览网页。

## 十一、部署博客

在本地博客仓库下，输入 `hexo d` 部署博客到github。
