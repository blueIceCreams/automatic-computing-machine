---
sidebar: auto
title: 代码管理
sidebarDepth: 2
---
## npm安装错误
使用npm安装时出现以下错误：
```
npm ERR! code EAI_AGAIN
npm ERR! errno EAI_AGAIN
npm ERR! request to https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.4.tgz failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org
```
* 解决方法：npm config set registry https://registry.npm.taobao.org
* 验证设置成功：npm config get registry

```
npm ERR! code EAI_AGAIN
npm ERR! errno EAI_AGAIN
npm ERR! request to https://registry.npm.taobao.org/@babel/plugin-syntax-nullish-coalescing-operator/download/@babel/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz failed, reason: getaddrinfo EAI_AGAIN registry.npm.taobao.org
```
* 解决方法：npm config set proxy null