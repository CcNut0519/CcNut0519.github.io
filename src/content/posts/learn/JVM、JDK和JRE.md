---
title: JVM、JDK和JRE
published: 2024-04-11
description: 'JDK、JRE和JVM的概念是什么，它们之间又有什么关系'
image: 'https://image-host.pages.dev/learn/202404110102949.png'
tags: [Java, Android]
category: 编程学习
draft: false
---

## 一、JDK

JDK（Java Development Kit）是提供给我们开发者使用的Java程序的开发套件。它包含着JRE，编译Java源代码的编译器javac，还有一些其它工具，比如javadoc（文档注释工具），jdb（调试器），jconsole（基于 JMX 的可视化监控⼯具）、javap（反编译工具）等

## 二、JRE

 JRE（Java Runtime Environment）是运行Java程序的运行环境，是包含于JDK中的。但是从JDK9开始，JDK和JRE之间就不必区分了，这时候JDK被重新组织成94个模块以及jlink工具（新发布的命令行工具，用于生成自定义 Java 运行时映像，该映像仅包含给定应用程序所需的模块），此时Oracle也不再提供单独的JRE下载

## 三、JVM

 JVM（Java Virtual Machine）是Java程序的虚拟机，它是运行Java字节码的虚拟机。为了实现Java“一次编译，随处可以运行”的特点，JVM 有针对不同系统的特定实现（Windows，Linux，macOS），这样，Java程序只需编译一次，就可以在多种平台上运行。JVM 屏蔽了与具体平台相关的信息，使得Java程序只需生成字节码，就可以在任意系统上运行。
