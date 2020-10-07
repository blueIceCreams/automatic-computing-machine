---
sidebar: auto
title: linux基础
sidebarDepth: 2
---
## virtualBox网络配置
1. 管理->全局设定->网络
  1.1 选择仅主机(Host-Only)网络
  1.2 添加仅主机(Host-Only)网络
  1.3 编辑刚创建的那个网络，这里可以编辑IP地址和子网掩码
2. 选择某一虚拟机，设置->网络->网卡1
  2.1 启动网络连接， 连接方式为“仅主机(Host-Only)网络”
  2.2 界面名称选择刚创建的那个网络
  2.3 高级里面混杂模式设置为“全部允许”, 勾选“接入网线”
  2.4 这里需要记住MAC地址，待会要用
3. 选择网卡2
  3.1 启动网络连接， 连接方式为“桥接网卡”
  3.2 界面名称选择自己能连到网络的适配器（此处查看自己电脑网络连接中的网络适配器即可）
  3.3 高级里面混杂模式设置为“全部允许”, 勾选“接入网线”
4. 启动虚拟机, 切换至root用户
5. 运行
``` sh
// 会看到有eth5这样的, 而且没有ipv4地址
[root@ryan ~]# ifconfig
eth4      Link encap:Ethernet  HWaddr 08:00:27:20:0C:C8  
          inet addr:192.168.0.126  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe20:cc8/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1255 errors:0 dropped:0 overruns:0 frame:0
          TX packets:40 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:93282 (91.0 KiB)  TX bytes:3516 (3.4 KiB)

eth5      Link encap:Ethernet  HWaddr 08:00:27:CD:42:1C  
          inet6 addr: fe80::a00:27ff:fecd:421c/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:22 errors:0 dropped:0 overruns:0 frame:0
          TX packets:8 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:2761 (2.6 KiB)  TX bytes:1152 (1.1 KiB)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:60 errors:0 dropped:0 overruns:0 frame:0
          TX packets:60 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:18264 (17.8 KiB)  TX bytes:18264 (17.8 KiB)

// 执行这个会看到所有的eth, 其实这一步不需要的哈，看看就好
[root@ryan ~]# cat /etc/udev/rules.d/70-persistent-net.rules
# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:8e:81:fb", ATTR{type}=="1", KERNEL=="eth*", NAME="eth0"

# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:87:da:a7", ATTR{type}=="1", KERNEL=="eth*", NAME="eth1"

# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:6f:7d:60", ATTR{type}=="1", KERNEL=="eth*", NAME="eth2"

# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:41:2e:42", ATTR{type}=="1", KERNEL=="eth*", NAME="eth3"

# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:20:0c:c8", ATTR{type}=="1", KERNEL=="eth*", NAME="eth4"

# PCI device 0x8086:0x100e (e1000)
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="08:00:27:cd:42:1c", ATTR{type}=="1", KERNEL=="eth*", NAME="eth5"

// 切换目录
[root@ryan ~]# cd /etc/sysconfig/network-scripts/

// 复制ifcfg-eth0为ifcfg-eth*
[root@ryan ~]# cp ifcfg-eth0 ifcfg-eth5

// 编辑设置 设置的IP与刚创建的那个网络在同一网段、网关即可
[root@ryan ~]# vim ifcfg-eth5
DEVICE=eth5
HWADDR=08:00:27:CD:42:1C
TYPE=Ethernet
#UUID=06195422-01e9-40eb-a685-5ae8f153f567
ONBOOT=yes
NM_CONTROLLED=yes
BOOTPROTO=static
IPADDR=192.168.210.8
NETMASK=255.255.255.0
GATEWAY=192.168.210.1

// 重启网络服务
[root@ryan ~]# service network restart

// 再查看ifconfig  IP地址正常了
[root@ryan ~]# ifconfig
eth4      Link encap:Ethernet  HWaddr 08:00:27:20:0C:C8  
          inet addr:192.168.0.126  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe20:cc8/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:4515 errors:0 dropped:0 overruns:0 frame:0
          TX packets:47 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:689954 (673.7 KiB)  TX bytes:4014 (3.9 KiB)

eth5      Link encap:Ethernet  HWaddr 08:00:27:CD:42:1C  
          inet addr:192.168.210.8  Bcast:192.168.210.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fecd:421c/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:374 errors:0 dropped:0 overruns:0 frame:0
          TX packets:457 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:33965 (33.1 KiB)  TX bytes:34415 (33.6 KiB)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:276 errors:0 dropped:0 overruns:0 frame:0
          TX packets:276 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:43392 (42.3 KiB)  TX bytes:43392 (42.3 KiB)
```
6. 接下来就可以愉快的玩耍啦QwQ

## 安装win10-无法安装到磁盘【WoeUsb版】
* 在Linux系统上使用WoeUsb制作win10U盘启动器， 安装时报“windows无法安装到这个磁盘。选中的磁盘具有MBR分区表。在EFI系统上，Windows只能安装到GPT磁盘”。这是因为该磁盘是传统BIOS而非UEFI。
* 解决方法：
    1. 进入系统BIOS确认已切换为Legacy模式
    2. 启动器要选择USB不带UEFI的那个
    3. 以上步骤之后不行可采取以下方式
        编辑U盘中的grub.cfg文件，内容全部替换如下：
        ``` sh
        default=1
        timeout=15
        color_normal=light-cyan/dark-gray
        menu_color_normal=black/light-cyan
        menu_color_highlight=white/black
        
        menuentry "Start Windows Installation"{
          insmod ntfs
          insmod search_label
          search --no-floppy --set=root --label FA00-5777 --hint hd0,msdos1
          ntldr /bootmgr
          boot
        }
        
        menuentry "Boot from the first hard drive"{
          insmod ntfs
          insmod chain
          insmod part_msdos
          insmod part_gpt
          set root=(hd1)
          chainloader +1
          boot
        }
        ```

## 安装win10-无法安装到磁盘【windows10系统创建的U盘介质】
* 安装时报“windows无法安装到这个磁盘。选中的磁盘具有MBR分区表。在EFI系统上，Windows只能安装到GPT磁盘”。这是因为该磁盘是传统BIOS而非UEFI。
* 解决方法：将U盘根目录下的bootmgr.efi文件和efi文件夹删除，再重新插上电脑即可，这样会默认使用传统BIOS启动（此操作启动时会有小段时间的黑屏，等待即可，重启也稍慢，要耐心鸭）
