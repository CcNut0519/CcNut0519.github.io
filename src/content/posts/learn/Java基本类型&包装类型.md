---
title: Java基本类型&包装类型
published: 2024-04-12
description: ''
image: ''
tags: [Java, 基本类型, 包装类型]
category: '编程学习'
draft: false 
---

## 基本类型

### Java中有8种基本类型

- 数字类型：
  - 整数型：`byte`, `short`, `int`, `long`
  - 浮点型：`float`, `double`
- 字符类型：`char`
- 布尔类型：`boolean`

### 基本数据类型的存储位置

- 局部变量：存放于栈
- 成员变量：存放于堆

```java
public class Test {
    // 成员变量，存放在堆中
    int a = 10;
    // 被 static 修饰，也存放在堆中，但属于类，不属于对象
    // JDK1.7 静态变量从永久代移动了 Java 堆中
    static int b = 20;

    public void method() {
        // 局部变量，存放在栈中
        int c = 30;
        static int d = 40; // 编译错误，不能在方法中使用 static 修饰局部变量
    }
}
```

`==`号比较的是数据的值

## 包装类型

### 上面8中基本类型对应的包装类型（一般以大写开头）

- 数字类型：
  - 整数型：`Byte`, `Short`, `Integer`, `Long`
  - 浮点型：`Float`, `Double`
- 字符类型：`Character`
- 布尔类型：`Boolean`

### 包装类型的存储位置

几乎所有的对象实例都存储在堆中，包装类型属于对象类型，于是也存放在堆中

>！注意：因为HotSpot引入lJIT优化后，会对对象进行逃逸分析，如果发现某一个对象并没有逃逸到方法外部，那么就可能通过标量替换来实现栈上分配，而避免堆上分配内存

### 包装类型的缓存机制

Java基本类型对应的包装类型大部分都用到了**缓存机制**，这种缓存机制的优势在于可以减少内存的使用，避免频繁创建和销毁对象，提高程序的性能。但是需要注意的是，这种机制只适用于一些常用的范围内的值，对于超出缓存范围的值，仍然会创建新的对象。

>浮点数类型的包装类没有实现缓存机制

下面是一个示例：

```java
public class Main {
    public static void main(String[] args) {
        Integer a = 100; // 会从缓存中获取对象
        Integer b = 100; // 同样会从缓存中获取对象

        System.out.println(a == b); // 输出 true，说明是同一个对象

        Integer c = 200; // 超出缓存范围，会创建新的对象
        Integer d = 200; // 同样超出缓存范围，会创建新的对象

        System.out.println(c == d); // 输出 false，说明不是同一个对象
    }
}
```

上面示例中，当使用范围在 -128 到 127 之间的整数时，会直接使用缓存中的对象。而当使用超出缓存范围的整数时，会创建新的对象。

>!注意：包装类型的值的比较全部需要使用`equals()`方法，而不是`==`号，如果值在缓存机制的范围内，那么使用的是同一个对象，`==`号在包装类型中比较的是引用地址，那么此时会返回`true`，但是超出缓存范围的包装类型将会创建新对象，这时候使用`==`来判断就会返回`false`，所以需要使用`equals()`方法来比较。

### 自动拆箱装箱

**装箱：**将基本类型用它们对应的引用类型包装起来

**拆箱：**将包装类型转换为基本数据类型

```java
Integer i = 10;  //装箱
int n = i;   //拆箱
```
