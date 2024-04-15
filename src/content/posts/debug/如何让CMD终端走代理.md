---
title: 如何让CMD终端走代理
published: 2024-04-14
description: '关于CMD终端无法通过代理访问Firebase得出的经验'
image: ''
tags: [CMD, Windows, Firebase, 代理]
category: 'Debug'
draft: false
---

当我想为我的flutter应用添加firebase支持时，发现了一个问题：当我尝试使用`firebase login --no-localhost`命令登录firebase时，我输入我的authorization code后无法登录

搜寻资料后我发现可能原因出在我的CMD终端执行命令可能并没有走代理

**解决方法**：

打开CMD终端，输入

```bash
set http_proxy=http://127.0.0.1:7890 & set https_proxy=http://127.0.0.1:7890
```

设置http和https的代理端口即可
