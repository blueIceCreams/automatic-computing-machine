---
sidebar: auto
title: hadoop基础
sidebarDepth: 2
---
分而治之

计算向数据移动而非数据向计算移动


## Hadoop解决的问题
1. 海量数据的存储(HDFS)
2. 海量数据的分析(MapReduce)
3. 分布式资源调度(Yarn)

## hadoop三种模式
1. Local Mode【单个Java进程，一般debug使用，使用较少】
2. 伪分布式Mode【单节点，各角色为不同Java进程】
3. 完全分布式Mode【多节点，各角色分布在不同节点上】