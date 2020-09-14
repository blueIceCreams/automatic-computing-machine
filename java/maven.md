---
sidebar: auto
title: maven
sidebarDepth: 2
---
## 本地重新拉取jar包的步骤
1. 先删除本地maven仓库中该jar包所在文件夹
2. 到任意一个有pom.xml文件的文件夹下，打开cmd
3. 执行：  mvn dependency:get -Dartifact=groupId:artifactId:version