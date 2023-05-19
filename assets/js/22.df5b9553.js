(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{306:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"virtualbox网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox网络配置"}},[s._v("#")]),s._v(" virtualBox网络配置")]),s._v(" "),t("ol",[t("li",[s._v("管理->全局设定->网络\n1.1 选择仅主机(Host-Only)网络\n1.2 添加仅主机(Host-Only)网络\n1.3 编辑刚创建的那个网络，这里可以编辑IP地址和子网掩码")]),s._v(" "),t("li",[s._v("选择某一虚拟机，设置->网络->网卡1\n2.1 启动网络连接， 连接方式为“仅主机(Host-Only)网络”\n2.2 界面名称选择刚创建的那个网络\n2.3 高级里面混杂模式设置为“全部允许”, 勾选“接入网线”\n2.4 这里需要记住MAC地址，待会要用")]),s._v(" "),t("li",[s._v("选择网卡2\n3.1 启动网络连接， 连接方式为“桥接网卡”\n3.2 界面名称选择自己能连到网络的适配器（此处查看自己电脑网络连接中的网络适配器即可）\n3.3 高级里面混杂模式设置为“全部允许”, 勾选“接入网线”")]),s._v(" "),t("li",[s._v("启动虚拟机, 切换至root用户")]),s._v(" "),t("li",[s._v("运行")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("// 会看到有eth5这样的, 而且没有ipv4地址\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth4      Link encap:Ethernet  HWaddr 08:00:27:20:0C:C8  \n          inet addr:192.168.0.126  Bcast:192.168.0.255  Mask:255.255.255.0\n          inet6 addr: fe80::a00:27ff:fe20:cc8/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:1255 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:40 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:93282 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("91.0")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:3516 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\neth5      Link encap:Ethernet  HWaddr 08:00:27:CD:42:1C  \n          inet6 addr: fe80::a00:27ff:fecd:421c/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:22 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:8 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:2761 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:1152 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          inet6 addr: ::1/128 Scope:Host\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:60 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:60 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0 \n          RX bytes:18264 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.8")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:18264 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.8")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n// 执行这个会看到所有的eth, 其实这一步不需要的哈，看看就好\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/udev/rules.d/70-persistent-net.rules")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:8e:81:fb"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth0"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:87:da:a7"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth1"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:6f:7d:60"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth2"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:41:2e:42"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth3"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:20:0c:c8"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth4"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PCI device 0x8086:0x100e (e1000)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBSYSTEM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRIVERS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"?*"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"08:00:27:cd:42:1c"')]),s._v(", ATTR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KERNEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eth5"')]),s._v("\n\n// 切换目录\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /etc/sysconfig/network-scripts/")]),s._v("\n\n// 复制ifcfg-eth0为ifcfg-eth*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp ifcfg-eth0 ifcfg-eth5")]),s._v("\n\n// 编辑设置 设置的IP与刚创建的那个网络在同一网段、网关即可\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim ifcfg-eth5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth5\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HWADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("08:00:27:CD:42:1C\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#UUID=06195422-01e9-40eb-a685-5ae8f153f567")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NM_CONTROLLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".210.8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".210.1\n\n// 重启网络服务\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service network restart")]),s._v("\n\n// 再查看ifconfig  IP地址正常了\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ryan ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth4      Link encap:Ethernet  HWaddr 08:00:27:20:0C:C8  \n          inet addr:192.168.0.126  Bcast:192.168.0.255  Mask:255.255.255.0\n          inet6 addr: fe80::a00:27ff:fe20:cc8/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:4515 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:47 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:689954 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("673.7")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:4014 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\neth5      Link encap:Ethernet  HWaddr 08:00:27:CD:42:1C  \n          inet addr:192.168.210.8  Bcast:192.168.210.255  Mask:255.255.255.0\n          inet6 addr: fe80::a00:27ff:fecd:421c/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:374 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:457 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:33965 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.1")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:34415 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.6")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          inet6 addr: ::1/128 Scope:Host\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:276 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:276 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0 \n          RX bytes:43392 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.3")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  TX bytes:43392 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.3")]),s._v(" KiB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("接下来就可以愉快的玩耍啦QwQ")])]),s._v(" "),t("h2",{attrs:{id:"安装win10-无法安装到磁盘【woeusb版】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装win10-无法安装到磁盘【woeusb版】"}},[s._v("#")]),s._v(" 安装win10-无法安装到磁盘【WoeUsb版】")]),s._v(" "),t("ul",[t("li",[s._v("在Linux系统上使用WoeUsb制作win10U盘启动器， 安装时报“windows无法安装到这个磁盘。选中的磁盘具有MBR分区表。在EFI系统上，Windows只能安装到GPT磁盘”。这是因为该磁盘是传统BIOS而非UEFI。")]),s._v(" "),t("li",[s._v("解决方法：\n"),t("ol",[t("li",[s._v("进入系统BIOS确认已切换为Legacy模式")]),s._v(" "),t("li",[s._v("启动器要选择USB不带UEFI的那个")]),s._v(" "),t("li",[s._v("以上步骤之后不行可采取以下方式\n编辑U盘中的grub.cfg文件，内容全部如下(高亮部分为原内容)："),t("div",{staticClass:"language-sh extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("color_normal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("light-cyan/dark-gray\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("menu_color_normal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("black/light-cyan\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("menu_color_highlight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("white/black\n\nmenuentry "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Start Windows Installation"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  insmod ntfs\n  insmod search_label\n  search --no-floppy "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--label")]),s._v(" FA00-5777 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hint")]),s._v(" hd0,msdos1\n  ntldr /bootmgr\n  boot\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmenuentry "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Boot from the first hard drive"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  insmod ntfs\n  insmod chain\n  insmod part_msdos\n  insmod part_gpt\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hd1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  chainloader +1\n  boot\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])])])]),s._v(" "),t("h2",{attrs:{id:"安装win10-无法安装到磁盘【windows10系统创建的u盘介质】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装win10-无法安装到磁盘【windows10系统创建的u盘介质】"}},[s._v("#")]),s._v(" 安装win10-无法安装到磁盘【windows10系统创建的U盘介质】")]),s._v(" "),t("ul",[t("li",[s._v("安装时报“windows无法安装到这个磁盘。选中的磁盘具有MBR分区表。在EFI系统上，Windows只能安装到GPT磁盘”。这是因为该磁盘是传统BIOS而非UEFI。")]),s._v(" "),t("li",[s._v("解决方法：将U盘根目录下的bootmgr.efi文件和efi文件夹删除，再重新插上电脑即可，这样会默认使用传统BIOS启动（此操作启动时会有小段时间的黑屏，等待即可，重启也稍慢，要耐心鸭）")])]),s._v(" "),t("h2",{attrs:{id:"关于linux的软连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于linux的软连接"}},[s._v("#")]),s._v(" 关于linux的软连接")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 创建一个目录\n# mkdir test_chk\n// 在目录下创建一个文本\n# touch test_chk/test.txt\n// 文本写入内容\n# echo hello > test_chk/test.txt\n// 创建目录的软连接\n# ln -s test_chk test_chk_ln\n// 删除软连接(不删除原数据)\n# rm -rf ./test_chk_ln\n// 错误的删除命令(会将原目录下的内容删除，而软连接仍然存在)\n# rm -rf ./test_chk_ln/\n")])])]),t("p",[s._v("Linux两台机器间的文件传输(使用scp)")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 将文件传到198.168.0.2上的/home/files/\nscp /home/tmpFiles/test.txt root@198.168.0.2:/home/files/\n\n// 将文件传到198.168.0.2上的/home/files/,通过端口2223\nscp -P 2223 /home/tmpFiles/test.txt root@198.168.0.2:/home/files/\n\n// 将文件(包括文件夹本身)传到198.168.0.2上的/home/files/\nscp -r /home/tmpFiles/ root@198.168.0.2:/home/files/\n\n// 将文件(不包括文件夹本身)传到198.168.0.2上的/home/files/\nscp /home/tmpFiles/* root@198.168.0.2:/home/files/\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);