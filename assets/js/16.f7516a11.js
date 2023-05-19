(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{301:function(a,e,t){"use strict";t.r(e);var s=t(6),o=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"hdfs特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs特点"}},[a._v("#")]),a._v(" HDFS特点")]),a._v(" "),e("ol",[e("li",[a._v("数据冗余、硬件容错")]),a._v(" "),e("li",[a._v("流式的数据访问")]),a._v(" "),e("li",[a._v("存储大文件")])]),a._v(" "),e("h2",{attrs:{id:"hdfs存储模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs存储模型"}},[a._v("#")]),a._v(" HDFS存储模型")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("文件线性按字节切割成Block，Block具有offset(偏移量)、id(块名称)\n文件上传时可指定Block的大小以及副本数，上传之后只能修改副本数\n不同文件的Block大小可以不同，但同一文件的Block除了最后一个，其他的大小都一样\n仅支持新增、删除整文件，不支持修改文件中间的内容，但可追加数据\nBlock的大小根据硬件IO特性进行调整\nBlock具有副本，没有主从概念，副本不能存在同一个主机上；副本是满足可靠性和性能的关键\nBlock被分散在集群中的各个节点上，会有location标识在哪个节点上\n")])])]),e("h2",{attrs:{id:"hdfs架构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs架构设计"}},[a._v("#")]),a._v(" HDFS架构设计")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("HDFS是一个主从架构\n有一个NameNode和多个 DataNode 组成\n从文件的角度来看，文件包含文件数据（data）和文件元数据（metadata）\nNameNode负责存储和管理文件元数据，并维护了一个层次型的文件目录树（虚拟的），类似于linux\nDataNode负责存储文件数据（block块），并提供block的读写\nNN和DN之间会维护心跳，DN会汇报自己持有的block信息\n客户端（client）会与NN交互文件元数据，会与DN交互文件block数据\n")])])]),e("h2",{attrs:{id:"hdfs角色功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs角色功能"}},[a._v("#")]),a._v(" HDFS角色功能")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("NameNode\n\t完全基于 内存 存储文件元数据、目录结构、文件Block的映射\n\t（因为使用内存，可能断电啥的会导致内存数据丢失）需要持久化方案保证数据可靠性\n\t提供副本放置策略\n\nDataNode\n\t基于本地磁盘存储Block（Block以文件的形式存在）\n\t保持Block的 校验和 保证Block的可靠性\n\t与NameNode保持心跳，汇报block列表状态\n")])])]),e("h2",{attrs:{id:"持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[a._v("#")]),a._v(" 持久化")]),a._v(" "),e("p",[a._v("任何对NameNode中文件元数据的修改操作都会记录到事务日志记录EditLog中。另外，会使用FsImage(快照)来存储内存所有的元数据信息。\nNameNode使用了EditLog+FsImage的整合方案：滚动将增量的EditLog更新到FsImage中，以保证最近的时点FsImage和更小体积的EditLog。而这个更新操作并非在NameNode执行，而是在SecondaryNameNode上执行。")]),a._v(" "),e("h2",{attrs:{id:"安全模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全模式"}},[a._v("#")]),a._v(" 安全模式")]),a._v(" "),e("p",[a._v("HDFS搭建时需要进行格式化，格式化时会产生一个空的FsImage\n在NameNode启动时，会从磁盘读取原有的EditLog和FsImage，将原有的FsImage读入内存中的FsImage\n将EditLog中的事务作用在内存中的FsImage，再将此新版本的FsImage从内存保持到本地磁盘中\n之后将旧的EditLog删除，因为此时EditLog中的事务已作用到FsImage上并保存了下来。")]),a._v(" "),e("p",[a._v("NameNode启动后会进入一个称为安全模式的特殊状态。当然，如果启动的是刚格式化的HDFS集群则不会进入安全模块，因为系统没Block.\n处于安全模式下的NameNode不会进行数据块的复制，也不会接受任何客户端的请求。只会等待接收所有DataNode的心跳信号和块状态报告（因为NameNode持久化时并不会记录块的位置信息，这是由于分布式系统的一致性问题，若持久化了块的位置信息，而启动时对应机器并未正常启动，那么后面客户端请求到的块信息将是错误的）。\n当NameNode检测确认某个数据块的副本数目达到这个最小值(最小副本级别)，那么该数据块就会被认为是副本安全(safely replicated)的.\n在一定(一般是99.9%)百分比(这个参数可配置)的数据块被NameNode检测确认为安全的之后(加上额外的30s等待时间),NameNode将退出安全模式状态。\n接下来它还会确定还有哪些数据块的副本没有达到副本安全的，将这些数据块复制到其他的DataNode上")]),a._v(" "),e("h2",{attrs:{id:"secondarynamenode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secondarynamenode"}},[a._v("#")]),a._v(" SecondaryNameNode")]),a._v(" "),e("p",[a._v("在非Ha(即仅有一个NameNode模式)模式下，SNN一般是独立的节点，周期完成对NameNode的EditLog向FsImage合并，减少EditLog大小，减小NameNode启动时间\n1.根据配置文件设置的时间间隔 fs.checkpoint.period 默认3600s\n2.根据配置文件设置EditLog大小 fs.checkpoint.size 规定editLog文件的最大值 默认64MB\n3.1分钟检查1次操作次数，当达到1百万次时将触发SNN")]),a._v(" "),e("h2",{attrs:{id:"block的副本放置策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block的副本放置策略"}},[a._v("#")]),a._v(" Block的副本放置策略")]),a._v(" "),e("p",[a._v("第一个副本：放在上传的那个DataNode上面，如果是集群外提交的，则随机挑选一台磁盘不太满、CPU不太忙的节点。\n第二副本：放置在与第一副本不同机架的节点上。\n第三副本：与第二节点相同机架的节点上。\n更多副本：随机节点。")]),a._v(" "),e("h2",{attrs:{id:"hdfs写流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs写流程"}},[a._v("#")]),a._v(" HDFS写流程")]),a._v(" "),e("p",[a._v("Client和NameNode连接创建文件元数据\nNameNode判定元数据是否有效\nNameNode触发副本放置策略，返回一个有序的DataNode列表\nClient会与DataNode建立PipeLine连接\nClient分block读取文件，再将块切分为package(一般是64KB)，切分过程中循环从文件中读取512B(字节)的数据(chunk)，并计算其校验和(chucksum)4B填充到package中，直到package达到64KB\n然后Client将package放入发送队列dataqueue中，并向第一个DataNode发送\n第一个DataNode接到package后，保存到本地并发送给第二个DataNode\n第二个DataNode接到package后，保存到本地并发送给第三个DataNode\n这个过程中，上游节点同时发送下一个package\n这PipeLine类似于流水线，其实，流式也是变种的并行计算\nHDFS使用这种传输方式，副本对于Client来说是透明的\n当block传输完成后，DataNode各自会向NameNode汇报（若副本数不足，NameNode会让DataNode自行复制），同时Client继续传输下一个block，故Client的传输和block的汇报也并行的。\n另外，若传输过程中所有DataNode都挂掉了，那肯定会报错")]),a._v(" "),e("h2",{attrs:{id:"hdfs读流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs读流程"}},[a._v("#")]),a._v(" HDFS读流程")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("为降低整体的带宽消耗和读取延时，HDFS会尽量让读取程序读取离程序所在机器最近的副本\n如果在读取程序的同一个机架上有一个副本，那么将读取该副本\n若一个HDFS集群跨越多个数据中心，那么客户端也将优先读取本地数据中心的副本\n语义：下载一个文件\n\tClient和NameNode交互文件元数据，获取File block locations\n\tNameNode会按距离策略排序返回\n\tClient尝试下载block并校验数据完整性\n语义：下载一个文件其实是获取文件的所有block元数据，那么按子集来获取部分block也是成立的\n\tHDFS支持Client给出文件的offset偏移量来自定义连接哪些block的DataNode，自定义获取数据。而这个是支持计算层的分治、并行计算的核心\n")])])]),e("h2",{attrs:{id:"扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[a._v("#")]),a._v(" 扩展")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("日志文件：实时记录，完整性比较好；但加载恢复数据时慢，而且还占空间\n快照/镜像：内存全量数据基于某个时间点做的一个向磁盘的溢写操作，而这个时间间隔需要根据IO速度、内存大小来定；恢复速度快，但因为是间隔的，非实时的，容易丢失数据 \n\n\n塔式服务器  机架服务器（企业常用）  刀片服务器\n")])])]),e("p",[a._v("2.6.5\nGNU/Linux\nJDK支持\nssh  命令： ssh 用户名@IP地址 -》回车 输入密码 -》访问，去执行Hadoop脚本，启动管理Hadoop实例")]),a._v(" "),e("p",[a._v("远程执行命令【执行脚本时会读取不到对方的环境变量】：ssh 用户名@IP地址 '要执行的命令'")])])}),[],!1,null,null,null);e.default=o.exports}}]);