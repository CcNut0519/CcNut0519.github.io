---
title: flutter优化realease包大小
published: 2024-04-15
description: '优化realease包体积'
image: 'https://image-host.pages.dev/learn/2024-04-15-202404151806744.png'
tags: [Android, Flutter, 打包, 优化]
category: 'Debug'
draft: false
---

>默认情况下，flutter打包APK会包含三种CPU架构信息以适配不同架构的设备(x86_64,arm64-v8a,armeabi-v7a)

得知以上信息后，我们可以分架构来进行打包，这样可以减少近2/3的APK体积

此外，使用混淆打包命令能进一步减小APK体积

**结论**：使用以下命令进行打包来优化APK体积：

```bash
flutter build apk --obfuscate --split-debug-info=debugInfo --target-platform android-arm,android-arm64,android-x64 --split-per-abi
```

> - arm64-v8a：64位ARM架构
> - v7a: armeabi-v7a：32位ARM架构
> - x86: x86_64：64位x86架构，用于桌面和服务器系统
