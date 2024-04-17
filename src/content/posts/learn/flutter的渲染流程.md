---
title: flutter的渲染流程
published: 2024-04-17
description: ''
image: ''
tags: [Android, flutter, Dart, 渲染, UI]
category: '编程学习'
draft: false
---

## 1. 首帧绘制

`main()`函数中通过调用`runApp()`方法，传入根组件，并开始首帧绘制

## 2.LaryerTree构建

GPU将**VSync**绘制信号同步到UI线程，UI线程用Dart将Flutter代码构建图层树**LayerTree**

## 3.渲染

遍历**LayerTree**，通过**SKCanvas**绘制所有的Layer节点，完成光栅化处理，最终将光栅化后的数据刷新到手机屏幕上完成渲染
