---
sidebar: auto
title: hadoop安装
sidebarDepth: 2
---
## 基础设施
1. 设置IP地址，参考 linux基础->virtualBox网络配置 
2. 设置主机名、本机的IP到本机名的映射关系
``` sh
// 设置主机名
[root@ryan ~]# vim /etc/sysconfig/network
NETWORKING=yes
HOSTNAME=node01

// 设置本机的IP到本机名的映射关系
[root@ryan ~]# vim /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
192.168.210.8   node01
// 这里如果有多个节点的话 继续追加即可 如192.168.210.9   node02

// 关闭防火墙
[root@ryan ~]# service iptables stop
iptables: Setting chains to policy ACCEPT: filter          [  OK  ]
iptables: Flushing firewall rules:                         [  OK  ]
iptables: Unloading modules:                               [  OK  ]

[root@ryan ~]# chkconfig iptables off

// 关闭selinux
[root@ryan ~]# vim /etc/selinux/config
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
# SELINUX=enforcing
SELINUX=disabled
# SELINUXTYPE= can take one of these two values:
#     targeted - Targeted processes are protected,
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted

// 时间同步
// 查看是否已安装ntp
[root@ryan ~]# rpm -qa | grep ntp
fontpackages-filesystem-1.41-1.1.el6.noarch
ntp-4.2.6p5-1.el6.centos.x86_64
ntpdate-4.2.6p5-1.el6.centos.x86_64

未安装则执行yum install ntp -y进行在线安装或离线安装吧
[root@ryan ~]# vim /etc/ntp.conf
  server ntp1.aliyun.com
[root@ryan ~]# service ntpd start
Starting ntpd:                                             [  OK  ]
// 设置开机启动
[root@ryan ~]# chkconfig ntpd on

// 查看运行状态
[root@ryan ~]# service ntpd status
ntpd (pid  3052) is running...

// 查看同步情况
[root@ryan ~]# ntpstat
unsynchronised
  time server re-starting
   polling server every 8 s
```
3. 检查JDK版本是否为1.8，不是的话，参考这里进行安装配置
``` sh
[root@node01 ~]# java -version
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```

4. ssh免密登录
``` sh
// 验证是否能免密登录 
// 能的话就说明这一步可以跳过啦 
// 不能的话 输入密码登录后 会生成/root/.ssh
[root@node01 ~]# ssh localhost
The authenticity of host 'localhost (::1)' can't be established.
RSA key fingerprint is da:8d:c8:53:8b:94:7f:c2:b4:9d:5e:bf:6d:24:48:65.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'localhost' (RSA) to the list of known hosts.
root@localhost's password:
Last login: Sun Sep  6 11:11:45 2020 from 192.168.210.6

[root@node01 ~]# ll -a /root/
drwx------   2 root root  4096 Sep  6 11:25 .ssh

[root@node01 ~]# cd .ssh/

[root@node01 .ssh]# ls
known_hosts

[root@node01 .ssh]# cat known_hosts 
localhost ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAlue7K7APr2Vf9U5fpWaQjzkaxfefwZkweNZoxW+z8mYg6T7F31rQimlOBcpvfuQ/PCuEQu/rgfnrMNYvL1pZt1/VDHsIjn/JqcMPGwCFzFpISJIjPzlXg+2dF6HROBXdLm2kEveSYHbk1sBfTO886dujTgf4uQ7SUFIZD4g+Vt6rTfVHEKOllyOl3NCE12c2qA+3wNQRYhhvi/u2GfABdIG5oOSpUyzfUWGqE5e3tCphISSN7rqZi3vT+Qo/B1Twq1MwwW2XFXt+D5O1fYRvS6sUgQ5WUJthzdIAxG034IfNYD/VPSiKRKCL5T+aUz91+RrbWgDSmyInEqVa8X1kvw==

// 生成公钥
[root@node01 ~]# ssh-keygen -t dsa -P '' -f /root/.ssh/id_dsa
Generating public/private dsa key pair.
Your identification has been saved in /root/.ssh/id_dsa.
Your public key has been saved in /root/.ssh/id_dsa.pub.
The key fingerprint is:
8c:60:49:5a:f4:4a:db:60:57:81:c2:9f:cb:72:4d:89 root@node01
The key's randomart image is:
+--[ DSA 1024]----+
|   o+  .o.       |
|   +oo..         |
|  . Booo .       |
|   + BEoo        |
|    o.o+S        |
|    . + .        |
|     o           |
|                 |
|                 |
+-----------------+

// 只要其他节点机器持有/root/.ssh/authorized_keys 就能ssh免密登录对应的机器
[root@node01 ~]# cat /root/.ssh/id_dsa.pub >> /root/.ssh/authorized_keys
[root@node01 ~]# ll -a ./.ssh/
total 24
drwx------  2 root root 4096 Sep  6 11:37 .
dr-xr-x---. 8 root root 4096 Sep  6 11:32 ..
-rw-r--r--  1 root root  601 Sep  6 11:37 authorized_keys
-rw-------  1 root root  672 Sep  6 11:35 id_dsa
-rw-r--r--  1 root root  601 Sep  6 11:35 id_dsa.pub
-rw-r--r--  1 root root  391 Sep  6 11:25 known_hosts
[root@node01 ~]# cat ./.ssh/authorized_keys 
ssh-dss AAAAB3NzaC1kc3MAAACBAPORkHSyhOBmSC8Ia5G177fn83AnhgEhTljVDRaMUkdhbzUbV1mmSdsbd2pBIeM295Do689tg8AHiitf7WKoAtkl3mmYAiIdqQx7h+nxZCA3np7Xoemyo/BMO4+R5HhnpdaBwt5OSVnezKDtHKa7MCkVPzM2xM464qEHDK96nV0RAAAAFQD9ymgmh6CeC1T2cEwIsY3R5OTS1QAAAIB6wvaPYp1QcL6/VgVuxtGjySj+WucUSlb2DOfPnH/EJcyTdFgnJEjWq8d9oEDwm4LYIpfABLuVxSAKanG8RlMkBi+gkeERicyodFkFUft+KbwR5BVEBf0DZsvTR5facKiy9ijMpqemjCo3HcdN1rmBELywkicCD4OZIXcC/nIbgwAAAIEAxb8Dk1NNkePL2dpqc1G6rd8T+BRyLE4inzcEDxBgUktCNEPr2pODzkcwIlUS+QMI9aZyyp8FjGThrtqgBJKyX3WjlZDvLKhT7s9g4eEvEoaxBzk0XkTOOxZpmgSGwvtB8TaAwHD4legXVAIsVMdy5eXcATqGl+Dz3ORy1wNv3P0= root@node01

// 验证是否能ssh免密登录： 先退出当前连接，再ssh登录，不用输入密码说明ok了
[root@node01 ~]# exit 
logout
Connection to localhost closed.
[root@node01 ~]# ssh localhost
Last login: Sun Sep  6 11:26:22 2020 from localhost
[root@node01 ~]# 
```