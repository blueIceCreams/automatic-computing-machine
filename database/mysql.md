---
sidebar: auto
title: mySQL
sidebarDepth: 2
---
## 杀掉进程
``` sql
-- 查看当前已连接的线程
show processlist;
```
ID|User|Host|db|Command|Time|State|Info
:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:
451058|root|198.156.0.12:61876|shopping|Query|0|starting|show processlist

``` sql
-- 杀掉进程
kill 进程ID;
```

## 给用户授权
``` sql
grant select on mysql.proc to 'ryan'@'%';
flush privileges;
```

## 查看mysql版本
``` sql
select version();
```

## 时间函数
``` sql
-- 时间戳转时间
select from_unixtime(1590571625);

-- 获取月份
select month(from_unixtime(1590571625));

-- 获取小时
select hour(from_unixtime(1590571625));

-- 获取分钟
select minute(from_unixtime(1590571625));

-- 获取秒
select second(from_unixtime(1590571625));

-- 时间转时间戳
select unix_timestamp('2020-05-27 17:27:05');

-- 获取该时间戳的整点时间 如2020-05-27 17:00:00
select concat(from_unixtime(1590571625, '%Y-%m-%d %H'), ':00:00');
```