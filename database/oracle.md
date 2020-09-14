---
sidebar: auto
title: Oracle
sidebarDepth: 2
---
## 日期
* 日期可加减数字，数字默认为天
* 日期之间只可减不可加

## 字符
* 字符不能加减

## 通配符
* 要将通配符作为正常字符使用，可使用escape
``` sql
-- 匹配名字以骁_为前缀的学生信息
select * from tb_student where name like '骁/_%' escape '/'; 
```

## 排序
* 排序时，空值作为无穷大来处理
* 一般先排序再运算，故group by 子句中的字段可不出现在查询列中

## 空值
* 排序时，空值作为无穷大来处理
* AVG和SUM函数都会忽略列中的空值

## group by报错
* 问题描述：SQL报‘不是group by 表达式’
* 解决方案：两种检查思路
   * group by 子句中不能使用别名
   * SELECT 列表项中除了聚合函数外，其余的列都必须出现在group by 子句

## 仅复制表结构语法
``` sql
create table new_tb as select * from old_tb where 1=0; 
```

## TRUNCATE、DELETE
关键词|区别
:--:|:--:
TRUNCATE|会删除表的所有数据，无法回滚，会释放存储空间
DELETE|会删除表中所有行，可以回滚，不会释放存储空间

## 外键引发的级联删除
* 默认情况下主表数据删除时，若有外键关联的参照表数据存在，是不允许删除的。
* Oracle提供了两种方式：
   * ON DELETE CASCADE 会在主表的行被删除时，将子表中参照主表的行删除
   * ON DELETE SET NULL 会在主表的行被删除时，将子表中的参照值设置为NULL

## 条件判断语法
* case 表达式 when 条件1 then 返回值1 when 条件2 then 返回值2 ... else 返回值 end
* decode (表达式, 条件1, 返回值1, 条件2, 返回值2, ... 返回值)

## 将多条记录合为同一条记录
如：  
IDCARD|MOBILE
:--:|:--:
441233344455556666|15610000000
441233344455556666|13699009900
456788944464334666|15610000000
456788944464334666|13699009900
转为
IDCARD|MOBILE_LIST
:--:|:--:
441233344455556666|15610000000,13699009900
456788944464334666|15610000000,13699009900
``` sql
select IDCARD, listagg(MOBILE, ',') within group(order by IDCARD) MOBILE_LIST
from table_name group by IDCARD;
```

## 查询树状结果
``` sql
-- 查询指定PID下的机构树
select ID, PID, NAME from tb_unit_info start with PID=? connect by prior ID=PID;
```

## 时间转换
``` sql
-- 将绝对秒转为时间
select to_char(1590571625/(60*60*24) + to_date('1970-01-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), 
'YYYY-MM-DD HH24:MI:SS') from dual;

-- 将绝对秒转为YYYYMMDD
select to_number(to_char(1590571625/(60*60*24) + to_date('1970-01-01 08:00:00', 'YYYY-MM-DD 
HH24:MI:SS'), 'YYYYMMDD')) from dual;

-- 获取绝对秒中的小时数
select to_number(to_char(1590571625/(60*60*24) + to_date('1970-01-01 08:00:00', 'YYYY-MM-DD 
HH24:MI:SS'), 'HH24')) from dual;

-- 将时间转为绝对秒
select to_number(to_date('2020-05-27 17:27:05', 'YYYY-MM-DD HH24:MI:SS') - 
to_date('1970-01-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'))*60*60*24*1000/1000 from dual;
```