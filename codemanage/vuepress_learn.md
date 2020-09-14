---
sidebar: auto
title: vuepress
sidebarDepth: 2
---
## window10安装yarn
``` sh
// 使用npm安装
npm install -g yarn
// 查看版本
yarn --version
// 创建文件夹
md yarn
// 初始化项目,回车后会生成package.json文件
yarn init
// 配置一下package.json文件，此处省略
// 再安装,这个时候就会将所有依赖下载到本地
yarn
// 在yarn下创建docs文件夹
md docs
// 接下来就像vuepress那样创建文件即可，记得配置.vuepress下的config.xml文件喔
```

## 配置flowcharts【package.json文件】时需要这几个依赖
``` sh{13,14,16,17}
{
  "name": "ryanBlog",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Ryan",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "dependencies": {
    "vuepress": "^1.4.0",
    "@vue/component-compiler-utils": "^3.1.2",
    "@vuepress/shared-utils": "^1.4.1",
    "vuepress-plugin-flowchart": "^1.4.3",
    "markdown-it-emoji": "^1.4.0",
    "toml": "^3.0.0"
  }
}
```
