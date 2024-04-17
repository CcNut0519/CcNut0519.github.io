---
title: StatefulWidget & StatelessWidget
published: 2024-04-17
description: 'StatefulWidget和StatelessWidget是什么，它们有什么区别'
image: ''
tags: [Android, flutter, UI]
category: '编程学习'
draft: false
---

`StatefulWidget`和`StatelessWidget`是Flutter框架中的两种不同的部件，它们之间的区别在于他们的构建过程和状态管理方式

## StatefulWidget

它是有状态的组件，它需要一个构建函数`build()`用来定义小部件的UI布局，它还包含一个名为`Widget build(BuildContext context)`的方法。这意味着每当其状态`state`发生变化时，都会重新调用这个构建函数来更新UI。此外，`StatefulWidget`还支持持有自己的状态`state`，这使得它能够响应用户交互或外部数据的变化而更新UI。例如，当用户点击按钮时，可以改变一个变量的值，并通过这个变化来更新UI

## StatelessWidget

它是无状态的组件，它不需要一个构建函数，因为它们的UI布局是静态的，不会随着应用程序运行时间的变化而变化。`StatelessWidget`通常用于表示静态内容，如文本、图标或图片等。由于它们不持有自己的状态，因此不能直接响应用户的交互或外部数据的变化

## 实际开发时该如何选择

- **交互性&动态变化**：如果开发时考虑到需要根据用户操作或外部数据变化来更新UI，则应该使用`StatefulWidget`。例如，当用户点击按钮时，可以改变一个变量的值，并通过这个变化来更新UI
- **静态内容**：对于一些不需要做变化的文本或者图标等静态内容，则应该使用`StatelessWidget`
- **状态管理**：当`Widget`需要自行维护状态，且这个状态不需要暴露给父`Widget`时，应使用`StatefulWidget`。这允许`Widget`通过构造函数将数据传递给其子控件，适用于一些简单的场景
- **性能开销**：`StatefulWidget`需要管理自身状态，这可能导致更多的重构建和更高的性能开销。而`StatelessWidget`由于不涉及状态管理，其构建过程更为轻量和高效
- **简化代码**：在不需要维护状态或状态变化不会影响到UI的情况下，使用`StatelessWidget`可以隐藏很多不必要的方法，简化代码从而更易于维护
