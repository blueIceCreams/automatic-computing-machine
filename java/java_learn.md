---
sidebar: auto
title: Java学习笔记
sidebarDepth: 2
---
## Servlet的匹配顺序
1. 精确匹配
2. 最长路径匹配
3. 根据后缀进行匹配

## Servlet的加载
* 应用在Tomcat中由一个StandardContext表示，由StandardContext来解析web.xml，从而实例化Servlet。而负责加载Servlet的是WebappClassLoader。下面展示其寻找加载过程：

@flowstart
st=>start: WebappClassLoader accept req
para1=>parallel: 到它的缓存容器resourceEntries找
para2=>parallel: 调findLoadedClass方法找
para3=>parallel: 调SystemClassLoader在当前JVM的classpath下找
para4=>parallel: 调StandardClassLoader找
para5=>parallel: 由WebappClassLoader自己去应用的WEB-INF/classes下找

process=>operation: Process
e=>end: found & load
e1=>end: found & load
e2=>end: found & load
e3=>end: found & load
e4=>end: found & load
e5=>end: found & load
st->para1
para1(path1, bottom)->para2(path1, bottom)->para3(path1, bottom)->para4(path1, bottom)->para5(path1, bottom)->e
para1(path2, right)->e1
para2(path2)->e2
para3(path2)->e3
para4(path2)->e4
para5(path2)->e5
@flowend

## 自定义类加载器的应用场景
* 需加载classpath之外的某特定路径的.class文件
* 需加载由网络传输过来的.class文件（可能有加密）
* 需实现热部署（如利用不同的ClassLoader实例加载同一个.class文件，在内存中创建出不同的类实例对象）

## ClassLoader类加载器
* BootStrap: 主要加载JVM自身工作需要的类，负责将<JAVA_HOME>/lib下的核心类库或-Xbootclasspath参数指定路径下的jar包加载到内存中，此类使用C++实现，无父类和子类
* ExtClassLoader: 由Java实现，是Launcher的静态内部类，无父类
					负责加载<JAVA_HOME>/lib/bin目录下或-Djava.ext.dir指定路径下的类库
* AppClassLoader: 父类是ExtClassLoader,负责加载classpath路径下的类库，getSystemClassLoader方法获取的就是此类，且此类作为所有用户自定义类加载器的父类

## 基于分代的垃圾收集算法
基于分代的垃圾收集算法设计思路：把对象按寿命长短分组，分为年轻代和年老代。新创建的对象被分在年轻代。如果对象经过几次回收后仍然存活，那么再把这个对象划分到年老代。年老代的收集频率不像年轻代那么频繁，这样就减少了每次垃圾收集时所要扫描的对象数量，从而提高了垃圾回收效率

## JVM中的堆分区
* JVM将整个堆划分为Young区、Old区、Perm区
* Young区又分为Eden区和2给个Survivor区。其中所有新创建的对象都在Eden区。当Eden区满后会触发minor GC，将Eden区仍然存活的对象复制到其中一个Survivor区，另一个Survivor区中存活的对象也会复制到这个Survivor区，即保证始终有一个Survivor区是空的。
* Old区存放的是Young区的Survivor区满后触发minor GC后仍然存活的对象。如果在Survivor区的对象足够老，也可直接存放到Old区。如果Old区满了或者即将要进入Old区的对象大小大于Old区的剩余空间，那么将触发Full GC，Full GC 会检查Heap堆中的所有对象，清空所有垃圾对象。
* Perm区存放的是类的Class对象。若Perm区满了或空间不足，将由Full GC进行垃圾回收，清除已被卸载的ClassLoader中加载的类的信息。

* JVM在进行GC时由于是串行的，故在JVM的其他应用程序都会暂停.

## Java中的编码类
* 从字节到字符的解码实现类：streamDecoder
* 从字符到字节的编码实现类： streamEncoder

## 序列化 Serializable
* FileDescriptor： 一个关联真实存在的磁盘文件的文件描述符，可通过此对象直接控制磁盘文件
* Java序列化就是将一个对象转化为一串二进制表示的字节数组，通过保存或转移这些字节数据来达到持久化的目的。
* 当父类都实现了Serializable接口时，所有的子类都可被序列化
* 子类实现了Serializable接口而父类没有实现，那么只有子类中的属性能被正确序列化。而父类中的属性数据会丢失，不报错。
* 若序列化的属性是对象，那么该对象对应的类必须实现Serializable接口，否则会报错。

## 两种Buffer比较
------|HeapByteBuffer|DirectByteBuffer
 :--:|--|--
存储位置|Java Heap中|Native内存中
I/O|需要在用户地址空间和操作系统内核地址空间复制数据|无需复制
内存管理|由Java GC回收，创建、回收开销少|通过System.gc()释放所引用的内存；若Java对象长期持有引用或导致Native内存泄漏；创建、回收开销大
适用场景|并发连接数少于1000，I/O操作较少|数据量较大、生命周期较长的情况


## log4j使用步骤
1. 导入jar包： log4j-***.jar  slf4j-api-***.jar  slf4j-log4j12-***.jar
2. 在src下创建log4j.properties文件，文件内容如下
``` xml
log4j.rootCategory=DEBUG,CONSOLE
log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
log4j.appender.CONSOLE.Threshold=DEBUG
log4j.appender.CONSOLE.Target=System.out
log4j.appender.CONSOLE.Encoding=UTF-8
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
log4j.appender.CONSOLE.layout.ConversionPattern=[ProjectName]%-5p %d{yyyy-MM-dd HH\:mm\:ss} - %c[%t] - %m%n
```

## JVM加载class文件至内存的2种方式
1. 隐式加载：不通过代码中调用ClassLoader加载，而是由JVM自动加载所需的类。如在类中继承了某类，JVM解析此类时发现所继承的类不在内存中，就会自动将这些父类加载至内存中
2. 显式加载：直接在代码中调用ClassLoader加载类。 
   * 如调用this.getClass().getClassLoader().loadClass()
   * Class.forName()
   * 调用自定义ClassLoader类的findClass方法

## ClassLoader加载class文件至JVM的过程
@flowstart
proc1=>operation: findClass：加载class文件包含的字节码到内存中
proc2=>operation: 链接：此阶段包含验证、准备、解析
proc3=>operation: 初始化
proc1->proc2->proc3
@flowend

## JVM按需加载
* JVM对class文件采用的是按需加载方式。在加载时，JVM采用的是双亲委派模式。
* 该模式中的父子关系并非继承关系，而是采用组合关系来复用父类加载器的相关代码。
* 工作原理：当一个类加载器收到一个类加载请求，会先将此请求委托给父类加载器，若父类加载器还有上层父类，就继续往上i委托，直到顶层类加载器。一旦上层类加载器可完成或已完成加载，则成功返回；若不能，将由子类加载器去尝试加载。
* 此模式的好处是避免类的重复加载，以及防止核心API库被篡改，提供一定的安全。