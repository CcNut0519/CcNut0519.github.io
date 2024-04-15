---
title: 如何让CMD终端走代理
published: 2024-04-15
description: '打包flutter安卓应用release版本闪退问题解决方案'
image: ''
tags: [Android, Flutter, 打包, 闪退]
category: 'Debug'
draft: false
---

## 问题描述

我按照flutter的官方文档打包构建realease版本后安装到手机，结果打开闪退

## 解决方案

因为flutter 在打 release 包时会自动开启混淆，会造成一部分插件不能正常使用。

1. 关闭混淆：在`android/app/build.gradle`文件中，找到`buildTypes`节点，修改为：

```java
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false //删除无用代码
            shrinkResources false //删除无用资源            
 
        }
        debug {
            signingConfig signingConfigs.debug
            minifyEnabled false
        }
    }
```
