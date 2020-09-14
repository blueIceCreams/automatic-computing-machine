---
sidebar: auto
title: Java开发问题
sidebarDepth: 2
---
## 对象的深拷贝
``` java
public static <T> T copyEntity(T entity){
	if(null == entity){
		return null;
	}

	T t = null;
	try(ByteArrayOutputStream baos = new ByteArrayOutputStream();ObjectOutputStream oos = new ObjectOutputStream()){
		oos.writeObject(entity);
		try(ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
			ObjectInputStream ois = new ObjectInputStream(bais)){
			t = (T)ois.readObject();
		}
	} catch(Exception e){
		logger.error("copy entity failure.", e);
	}
	return t;
}
```

## 下载远程文件(获取文件流)
* 问题描述：Java程序中下载远程文件，获取文件流。
* 解决方案：
``` java
HttpURLConnection conn = null;
try{
	URL url = new URL("http://....");
	conn = (HttpURLConnection)url.openConnection();
	// 设置连接超时时限
	conn.setConnectionTimeout(4000);
	// 复制屏蔽程序抓取而返回403错误
	conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
	// 获取文件流
	InputStream fileStream = conn.getInputStream();
} catch(Exception e){
	logger.error("copy entity failure.", e);
} finally{
	if(null != conn){
		conn.disconnect();
	}
}
```

## 上传文件到FTP时内容为空
* 问题描述：Java传文件到FTP服务器时出现创建文件成功但内容没有成功写入、文件大小为0字节的情况。
* 解决方案：
``` java
// 加上此代码，开启被动传输模式
ftpClient.enterLocalPassiveMode();
```

## 单元测试类加注解
``` java
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = {"classpath:config/spring/nuts-spring-context.xml",
								   "classpath:config/platform/desktop-datasource-jdbc.xml",
								   "classpath:config/xxx/xxx-datasource-jdbc.xml"})
```

## Servlet通过Ajax返回Json字符串
``` java
response.setCharacterEncoding("UTF-8");
response.setContentType("application/json;charset=utf-8");
PrintWriter writer = response.getWriter();
writer.append("Json字符串");
writer.flush();
writer.close();
```

## Cookie中文异常
* 若Cookie的键值对存入的包含中文，需先使用URLEncoder编码，否则会抛出IllegalArgumentException.

## SimpleDateFormat
* SimpleDateFormat最好是定义为静态（单线程下），因为其线程不安全
* 若存在多线程问题，可使用ThreadLocal或使用DateTimeFormatter

## Controller参数对象不存在空指针
* Controller层的方法参数若为JavaBean对象且前台不传参数，那么该对象默认调用一个构造函数来初始化，故该对象不为空

## finally与return的执行
* finally语句块不一定会被执行
* finally语句块在try/catch语句块中的return语句之前执行
* finally语句块的return语句会覆盖try块中的return返回

## 引用的传递性
* 若List的泛型类型为对象，那么调用List的get方法返回的是对象引用。若将此对象引用赋给另一个变量，那么对变量的任意修改都会同步到List中

## 使用集合的add方法坑点
* 使用集合的add(int index, Object ele)方法时要注意原集合的size。如原size为1，调用add方法时index却是大于等于size，那么就会报错。

## 方法内部类
* 方法中定义的内部类只能访问方法中的final类型的局部变量


## 静态内部类
* 用static声明的内部类不能访问非static的外部类属性

## 关于指定JavaBean中属性Json化的属性名
* 使用@JSONField可规定JavaBean中成员变量在Json字符串中的别名

## 循环执行数据库操作
* 尽量避免在循环中执行数据库操作，可考虑使用批量操作方式，这样可降低对数据库性能的消耗

## 字符串值的比较
* 字符串值的比较应用equals，而不能用==
* String类的equals是有被重写的，可按字符串内容来比较
* ==比较的是对象的地址。类默认的equals方法是使用==来比较的，故自定义JavaBean在使用equals方法时需重写equals方法

## 遍历map的几种方法
1. 遍历key，通过key取出value
2. 遍历value
3. 使用Map.Entry（推荐），如Map.Entry<?,?> entry:map.entrySet()
4. 使用Lambda，性能低于EntrySet, 如map.forEach((key, value)->{...});

## 使用foreach遍历map时操作map会报错
* 使用foreach遍历map时操作map会报错 - java.util.ConcurrentModificationException
* 可使用Iterator来实现边遍历边修改map

## 重写toString方法的建议
``` java
// JavaBean重写toString的方法最好是使用JSON转换
@Override
public String toString(){
	return JSON.toJSONString(this);
}
```

## 字符串拼接引起的性能消耗
* 以连续加的方式来实现字符串的拼接会导致创建过多的字符串对象。
* 最好使用StringBuilder(线程安全情况下使用)或StringBuffer(线程不安全情况下使用)

## xxl-Job框架
* 有需要对定时任务执行情况有很好的掌握时可使用xxl-Job框架

## 关于线程池的创建
* 不要直接使用Executors去创建线程池，最好使用单例模式。即在getExecutors方法中先判断ExecutorService对象是否为空或已shutdown，是的话对ThreadFactory.class进行同步(synchronized)，再次判空或是否已shutdown，是的话使用new ThreadPoolExecutor来创建ExecutorService对象,最后返回即可。

## 单例模块坑
* 单例模式下对成员变量进行操作是线程不安全的

## 关于select * 坑点
* sql语句中直接使用select * 会引发效率问题。
* 因其需先去查表有哪些列，然后才去查列内容。故改*为所要查询的列会比较好

## 字符串不足位时补空格
* 若字符串不足10位，将在字符串 “后面” 补充空格；其他情况直接得到原字符串
``` java
String.format("%1$-10s", str)
```
* 若字符串不足6位，将在字符串 “前面” 补充空格；其他情况直接得到原字符串
``` java
String.format("%6s", str)
```









