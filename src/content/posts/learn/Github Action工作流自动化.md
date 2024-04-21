---
title: Github Action工作流自动化
published: 2024-04-21
description: '学习使用GitHUb Action工作流'
image: 'https://image-host.pages.dev/learn/202404211222579.png'
tags: [git, github]
category: '编程学习'
draft: false 
---

当你将项目文件push到github时，github会默认从`.github/workflows/`目录下查找`.yml`文件，来执行`.yml`文件中配置的工作流

## .yml工作流写法

首先要以`on:`开头，表示on什么情况下触发

例如

```yaml
on: push
```

表示在push的时候执行

但是这样还不够，只有了开始条件但是却没有工作项是指定不行的

让我们添加几个`jobs`，表示工作项

```yaml
on: push

jobs:
    job1:
    job2:
```

那么现在我们已经有了工作项，但是在工作项中还没有内容，我们需要给工作添加几个步骤

```yaml
on: push

jobs:
    job1:
        steps:
        - run: pwd
        - run: ls
    job2:
        steps:
        - run: node --version
```

欸？为啥我写了工作内容还是不成功呢？

因为我们还没有指定工作需要执行在什么环境中

添加`runs-on`

```yaml
on: push

jobs:
    job1:
        runs-on: ubuntu-latest
        steps:
        - run: pwd
        - run: ls
    job2:
        runs-on: windows-latest
        steps:
        - run: node --version
```

![工作流成功运行](https://image-host.pages.dev/learn/202404211206770.png)

## 使用现成的工作流

我们可以打开需要创建工作流的仓库来寻找现成的工作流

![工作流仓库位置](https://image-host.pages.dev/learn/202404211214045.png)

选择Simple workflow会帮我们创建一个工作流模板，我们可以更快地编辑需要的内容

![Simple workflow](https://image-host.pages.dev/learn/202404211219001.png)

当然也可以根据项目选择更加无脑的现成全自动部署工作流
