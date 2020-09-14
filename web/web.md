---
sidebar: auto
title: web基础
sidebarDepth: 2
---
## 常见Http状态码
code|intro
:--:|--
200|客户端请求成功
302|临时跳转，跳转的地址通过Location指定
400|客户端请求有语法错误，不能被服务器识别
403|服务器收到请求，但拒绝提供服务
404|请求的资源不存在
500|服务器端发送不可预期的错误

## disabled和readonly区别
* disabled 不可获取焦点，不可被提交
* readonly 只读，可以获取焦点，在提交表单时可被提交

## SVG
* SVG 是使用 XML 来描述二维图形和绘图程序的语言。
* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用来定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
* SVG 是万维网联盟的标准
* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## event.clientY pageY
* event.clientY只与可视化有关，即屏幕
* pageY 在clientY基础上加上滚动高度