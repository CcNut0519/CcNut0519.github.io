---
title: JVM、JDK和JRE
published: 2024-04-11
description: 'JDK、JRE和JVM的概念是什么，它们之间又有什么关系'
image: 'https://image-host.pages.dev/learn/202404110102949.png'
tags: [Java, JDK, JRE, JVM]
category: '编程学习'
draft: false
---

## 一、JDK

JDK（Java Development Kit）是提供给我们开发者使用的Java程序的开发套件。它包含着JRE，编译Java源代码的编译器javac，还有一些其它工具，比如javadoc（文档注释工具），jdb（调试器），jconsole（基于 JMX 的可视化监控⼯具）、javap（反编译工具）等

## 二、JRE

JRE（Java Runtime Environment）是运行Java程序的运行环境，是包含于JDK中的。但是从JDK9开始，JDK和JRE之间就不必区分了，这时候JDK被重新组织成94个模块以及jlink工具（新发布的命令行工具，用于生成自定义 Java 运行时映像，该映像仅包含给定应用程序所需的模块），此时Oracle也不再提供单独的JRE下载

>可以用 jlink 根据自己的需求，创建一个更小的 runtime（运行时），而不是不管什么应用，都是同样的 JRE。定制的、模块化的 Java 运行时映像**有助于简化 Java 应用的部署和节省内存并增强安全性和可维护性**。这对于满足现代应用程序架构的需求，如虚拟化、容器化、微服务和云原生开发，是非常重要的。[^1]

## 三、JVM

JVM（Java Virtual Machine）是Java程序的虚拟机，它是运行Java字节码的虚拟机。为了实现Java“一次编译，随处可以运行”的特点，JVM 有针对不同系统的特定实现（Windows，Linux，macOS），这样，Java程序只需编译一次，就可以在多种平台上运行。

![JVM结构模型](https://image-host.pages.dev/learn/2024-04-11-202404111554767.png)

>**JVM 并不是只有一种！只要满足 JVM 规范，每个公司、组织或者个人都可以开发自己的专属 JVM。** 也就是说我们平时接触到的 HotSpot VM 仅仅是是 JVM 规范的一种实现而已。
>>HotSpot 采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是 JIT 所需要编译的部分。JVM 会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。[^2]

[^1]:Java基础常见面试题总结（上） [JVM vs JDK vs JRE](https://javaguide.cn/java/basis/java-basic-questions-01.html#jvm-vs-jdk-vs-jre)
[^2]:Java基础常见面试题总结（上） [什么是字节码?采用字节码的好处是什么?](https://javaguide.cn/java/basis/java-basic-questions-01.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%AD%97%E8%8A%82%E7%A0%81-%E9%87%87%E7%94%A8%E5%AD%97%E8%8A%82%E7%A0%81%E7%9A%84%E5%A5%BD%E5%A4%84%E6%98%AF%E4%BB%80%E4%B9%88)
