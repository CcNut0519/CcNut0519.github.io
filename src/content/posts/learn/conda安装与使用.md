---
title: conda安装与使用
published: 2024-07-29
description: ''
image: ''
tags: [python, conda]
category: '编程学习'
draft: false 
---

## 下载

打开[Anaconda官网](https://docs.anaconda.com/miniconda/)，下载最新版本的Anaconda安装包

## 安装

一路`next`即可

## 配置环境变量

将以下路径添加到环境变量中：`[path]表示conda安装路径`

``` bash
[path]
[path]\Scripts
[path]\Library\bin
```

## 常用命令

### 创建环境

打开命令行，输入

``` bash
conda create -n py39 python=3.9
```

这样就创建了一个名称为py39，python版本为3.9的虚拟环境

### 激活环境

``` bash
conda activate py39
```

这样就激活了py39环境，可以在里面安装三方库

``` bash
#退出环境
conda deactivate py39
```

### 查看已有环境

``` bash
# 查看已安装的python环境
conda info -e  #conda info --envs
conda env list
#当前环境会通过一个星号 (*) 标识
```

### 删除环境

``` bash
conda env remove -n test
conda remove -n py39 --all
```

### 重命名环境

``` bash
#克隆当前环境
conda create -n python2 --clone py2
#删除环境
conda remove -n py2 --all
```

### 安装软件包

``` bash
#安装指定版本
conda install bwa=0.7.17（其他版本将会覆盖）
#指定环境安装
conda install bwa -n test  #加-c还可指定频道
#查看已安装软件
conda list
#更新所有包
conda update --all
#升级包
conda update
#移除包
conda remove
#从指定环境中移除包
conda remove -n py39
