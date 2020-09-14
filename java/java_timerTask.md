---
sidebar: auto
title: Java定时程序
sidebarDepth: 2
---
## 简介
* 通常会有定时接入数据到库中，或者对库表数据进行统计计算的需求，而这类需求可由Java程序来定时完成。当前整理了两种方案来将Java程序部署到linux上。

## java.util.Timer版
1. 创建类继承 java.util.TimerTask 类，重写 run 方法（要执行的任务逻辑由run方法来调）
2. 在main方法中声明 java.util.Timer 对象，调用其 schedule 或 scheduleAtFixedRate 方法即可实现定时
   * scheduleAtFixedRate(TimerTask, firstTime, period) 若设置的开始时间已过去，则启动后会补上已过时间内的任务运行(即错过几次就连续执行几次)
   * schedule(TimerTask, firstTime, period) 若设置的开始时间已过去，则启动后只补上一次执行，执行完后每过period 毫秒都会执行一次任务。
3. 这个方法部署到Linux很简单，只需要手动运行一次main方法即可

## Linux crontab版
1. 在main方法中调用要执行的任务逻辑，就是一个普通的Java程序，不需要设置定时器，定时器是通过linux的crontab来设置的
2. 创建两个文件夹，如 /opt/pro1 及 /opt/pro1/lib
	``` linux
	mkdir /opt/pro1
	mkdir /opt/pro1/lib
	```
3. 将程序打包成jar，与程序所用到的jar放置到 /opt/pro1/lib 下
4. 创建脚本文件/opt/pro1/start.sh, 编辑
	``` linux
	touch /opt/pro1/start.sh
	vim /opt/pro1/start.sh
	```
	写入以下内容：
	``` linux
	#! /bin/sh
	# 程序配置文件所在目录
	class_path="./conf/"
	# main方法所在类，这里假设在Core
	java_exe=com.ryan.Core
	# 载入程序运行所需jar包
	for each_lib in $(ls /opt/pro1/lib); do
		class_path=$class_path:/opt/pro1/lib/$each_lib
	done
	exec java -classpath $class_path $java_exe
	```
5. 设置定时任务
	``` linux
	crontab -e
		// 追加以下内容
		0 * * * *	/opt/pro1/start.sh > /dev/null 2>&1

	// 查看当前所有定时任务
	crontab -l
	```
6. 若到点后start.sh文件报无法运行的错误，需这样执行
	``` linux
	// 添加执行权限
	chmod +x start.sh
	
	// 修改文件编码格式
	vim start.sh
	按esc键后 输入:set ff=unix后回车即可
	// 若输入:set ff回车可查看当前文件编码格式喔
	```

---
*就这些啦~*