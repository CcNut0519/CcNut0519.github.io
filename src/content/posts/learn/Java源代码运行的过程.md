---
title: learn/Java源代码运行的过程
published: 2024-04-11
description: '从编写好的一个代码开始，一个Java程序是如何运行的？'
image: ''
tags: [Java, .class, 字节码, JIT, JVM]
category: '编程学习'
draft: false 
---

## 一、编写一个Java程序

现在我们编写一个简单的`.java`源代码文件，以经典的Hello World程序为例。

    ```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

## 二、编译Java程序

我们已经有了一个`.java`程序，现在需要将其编译成字节码文件`.class`。

编译过程由Java编译器（javac）完成，它会将`.java`源代码编译成`.class`字节码文件，以便JVM可以执行。

编译命令如下：  

    ```bash
    javac <filename>.java
    ```

编译完成后，会在当前目录下生成一个`.class`文件。

字节码不针对某一种特定的机器，因此编译后的字节码文件可以运行在任何支持Java虚拟机（JVM）的平台上。

## 三、字节码->机器码

为什么说**Java是编译和解释共存的语言**呢，这里会给出答案。

从字节码转换为机器能明白的机器码的过程中，JVM类加载器首先加载字节码文件，再由解释器逐行解释为机器码并执行

但是这样有一个弊端，每次运行程序都需要重新解释字节码，很多常用的方法以及代码块被反复解释（热点代码），效率很低

为了提高效率，JVM引入了JIT（Just-In-Time）编译器，它会将热点代码编译成机器码并缓存起来，以便下次运行时直接使用缓存的机器码。

### AOT（Ahead-Of-Time）编译器

>AOT是JDK9引入的一种新的编译模式，它和JIT不同，它在程序执行前就将其全部编译为机器码，属于静态编译（C，C++，Rust，Go就是静态编译语言），它避免了JIT预热等各方面的开销，提高了Java的启动速度，而且其不容易被反编译和修改，也大大提升了程序的安全性，特别适合云原生场景。[^1]

[^1]:Java基础常见面试题总结（上） [AOT 有什么优点？为什么不全部使用 AOT 呢？](https://javaguide.cn/java/basis/java-basic-questions-01.html#aot-%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9-%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%85%A8%E9%83%A8%E4%BD%BF%E7%94%A8-aot-%E5%91%A2)
