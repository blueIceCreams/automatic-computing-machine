(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{303:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"对象的深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的深拷贝"}},[t._v("#")]),t._v(" 对象的深拷贝")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteArrayOutputStream")]),t._v(" baos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteArrayOutputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectOutputStream")]),t._v(" oos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectOutputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\toos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteArrayInputStream")]),t._v(" bais "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteArrayInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectInputStream")]),t._v(" ois "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bais"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("ois"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy entity failure."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"下载远程文件-获取文件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载远程文件-获取文件流"}},[t._v("#")]),t._v(" 下载远程文件(获取文件流)")]),t._v(" "),a("ul",[a("li",[t._v("问题描述：Java程序中下载远程文件，获取文件流。")]),t._v(" "),a("li",[t._v("解决方案：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpURLConnection")]),t._v(" conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://...."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpURLConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置连接超时时限")]),t._v("\n\tconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConnectionTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复制屏蔽程序抓取而返回403错误")]),t._v("\n\tconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User-Agent"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取文件流")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" fileStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy entity failure."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disconnect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"上传文件到ftp时内容为空"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传文件到ftp时内容为空"}},[t._v("#")]),t._v(" 上传文件到FTP时内容为空")]),t._v(" "),a("ul",[a("li",[t._v("问题描述：Java传文件到FTP服务器时出现创建文件成功但内容没有成功写入、文件大小为0字节的情况。")]),t._v(" "),a("li",[t._v("解决方案：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加上此代码，开启被动传输模式")]),t._v("\nftpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enterLocalPassiveMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"单元测试类加注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试类加注解"}},[t._v("#")]),t._v(" 单元测试类加注解")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RunWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringJUnit4ClassRunner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebAppConfiguration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ContextConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:config/spring/nuts-spring-context.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t\t\t\t   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:config/platform/desktop-datasource-jdbc.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t\t\t\t   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"classpath:config/xxx/xxx-datasource-jdbc.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"servlet通过ajax返回json字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet通过ajax返回json字符串"}},[t._v("#")]),t._v(" Servlet通过Ajax返回Json字符串")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCharacterEncoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json;charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintWriter")]),t._v(" writer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Json字符串"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"cookie中文异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie中文异常"}},[t._v("#")]),t._v(" Cookie中文异常")]),t._v(" "),a("ul",[a("li",[t._v("若Cookie的键值对存入的包含中文，需先使用URLEncoder编码，否则会抛出IllegalArgumentException.")])]),t._v(" "),a("h2",{attrs:{id:"simpledateformat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpledateformat"}},[t._v("#")]),t._v(" SimpleDateFormat")]),t._v(" "),a("ul",[a("li",[t._v("SimpleDateFormat最好是定义为静态（单线程下），因为其线程不安全")]),t._v(" "),a("li",[t._v("若存在多线程问题，可使用ThreadLocal或使用DateTimeFormatter")])]),t._v(" "),a("h2",{attrs:{id:"controller参数对象不存在空指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller参数对象不存在空指针"}},[t._v("#")]),t._v(" Controller参数对象不存在空指针")]),t._v(" "),a("ul",[a("li",[t._v("Controller层的方法参数若为JavaBean对象且前台不传参数，那么该对象默认调用一个构造函数来初始化，故该对象不为空")])]),t._v(" "),a("h2",{attrs:{id:"finally与return的执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finally与return的执行"}},[t._v("#")]),t._v(" finally与return的执行")]),t._v(" "),a("ul",[a("li",[t._v("finally语句块不一定会被执行")]),t._v(" "),a("li",[t._v("finally语句块在try/catch语句块中的return语句之前执行")]),t._v(" "),a("li",[t._v("finally语句块的return语句会覆盖try块中的return返回")])]),t._v(" "),a("h2",{attrs:{id:"引用的传递性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用的传递性"}},[t._v("#")]),t._v(" 引用的传递性")]),t._v(" "),a("ul",[a("li",[t._v("若List的泛型类型为对象，那么调用List的get方法返回的是对象引用。若将此对象引用赋给另一个变量，那么对变量的任意修改都会同步到List中")])]),t._v(" "),a("h2",{attrs:{id:"使用集合的add方法坑点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用集合的add方法坑点"}},[t._v("#")]),t._v(" 使用集合的add方法坑点")]),t._v(" "),a("ul",[a("li",[t._v("使用集合的add(int index, Object ele)方法时要注意原集合的size。如原size为1，调用add方法时index却是大于等于size，那么就会报错。")])]),t._v(" "),a("h2",{attrs:{id:"方法内部类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法内部类"}},[t._v("#")]),t._v(" 方法内部类")]),t._v(" "),a("ul",[a("li",[t._v("方法中定义的内部类只能访问方法中的final类型的局部变量")])]),t._v(" "),a("h2",{attrs:{id:"静态内部类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态内部类"}},[t._v("#")]),t._v(" 静态内部类")]),t._v(" "),a("ul",[a("li",[t._v("用static声明的内部类不能访问非static的外部类属性")])]),t._v(" "),a("h2",{attrs:{id:"关于指定javabean中属性json化的属性名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于指定javabean中属性json化的属性名"}},[t._v("#")]),t._v(" 关于指定JavaBean中属性Json化的属性名")]),t._v(" "),a("ul",[a("li",[t._v("使用@JSONField可规定JavaBean中成员变量在Json字符串中的别名")])]),t._v(" "),a("h2",{attrs:{id:"循环执行数据库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环执行数据库操作"}},[t._v("#")]),t._v(" 循环执行数据库操作")]),t._v(" "),a("ul",[a("li",[t._v("尽量避免在循环中执行数据库操作，可考虑使用批量操作方式，这样可降低对数据库性能的消耗")])]),t._v(" "),a("h2",{attrs:{id:"字符串值的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串值的比较"}},[t._v("#")]),t._v(" 字符串值的比较")]),t._v(" "),a("ul",[a("li",[t._v("字符串值的比较应用equals，而不能用==")]),t._v(" "),a("li",[t._v("String类的equals是有被重写的，可按字符串内容来比较")]),t._v(" "),a("li",[t._v("==比较的是对象的地址。类默认的equals方法是使用==来比较的，故自定义JavaBean在使用equals方法时需重写equals方法")])]),t._v(" "),a("h2",{attrs:{id:"遍历map的几种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历map的几种方法"}},[t._v("#")]),t._v(" 遍历map的几种方法")]),t._v(" "),a("ol",[a("li",[t._v("遍历key，通过key取出value")]),t._v(" "),a("li",[t._v("遍历value")]),t._v(" "),a("li",[t._v("使用Map.Entry（推荐），如Map.Entry<?,?> entry:map.entrySet()")]),t._v(" "),a("li",[t._v("使用Lambda，性能低于EntrySet, 如map.forEach((key, value)->{...});")])]),t._v(" "),a("h2",{attrs:{id:"使用foreach遍历map时操作map会报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用foreach遍历map时操作map会报错"}},[t._v("#")]),t._v(" 使用foreach遍历map时操作map会报错")]),t._v(" "),a("ul",[a("li",[t._v("使用foreach遍历map时操作map会报错 - java.util.ConcurrentModificationException")]),t._v(" "),a("li",[t._v("可使用Iterator来实现边遍历边修改map")])]),t._v(" "),a("h2",{attrs:{id:"重写tostring方法的建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重写tostring方法的建议"}},[t._v("#")]),t._v(" 重写toString方法的建议")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JavaBean重写toString的方法最好是使用JSON转换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSONString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"字符串拼接引起的性能消耗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串拼接引起的性能消耗"}},[t._v("#")]),t._v(" 字符串拼接引起的性能消耗")]),t._v(" "),a("ul",[a("li",[t._v("以连续加的方式来实现字符串的拼接会导致创建过多的字符串对象。")]),t._v(" "),a("li",[t._v("最好使用StringBuilder(线程安全情况下使用)或StringBuffer(线程不安全情况下使用)")])]),t._v(" "),a("h2",{attrs:{id:"xxl-job框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xxl-job框架"}},[t._v("#")]),t._v(" xxl-Job框架")]),t._v(" "),a("ul",[a("li",[t._v("有需要对定时任务执行情况有很好的掌握时可使用xxl-Job框架")])]),t._v(" "),a("h2",{attrs:{id:"关于线程池的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于线程池的创建"}},[t._v("#")]),t._v(" 关于线程池的创建")]),t._v(" "),a("ul",[a("li",[t._v("不要直接使用Executors去创建线程池，最好使用单例模式。即在getExecutors方法中先判断ExecutorService对象是否为空或已shutdown，是的话对ThreadFactory.class进行同步(synchronized)，再次判空或是否已shutdown，是的话使用new ThreadPoolExecutor来创建ExecutorService对象,最后返回即可。")])]),t._v(" "),a("h2",{attrs:{id:"单例模块坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模块坑"}},[t._v("#")]),t._v(" 单例模块坑")]),t._v(" "),a("ul",[a("li",[t._v("单例模式下对成员变量进行操作是线程不安全的")])]),t._v(" "),a("h2",{attrs:{id:"关于select-坑点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于select-坑点"}},[t._v("#")]),t._v(" 关于select * 坑点")]),t._v(" "),a("ul",[a("li",[t._v("sql语句中直接使用select * 会引发效率问题。")]),t._v(" "),a("li",[t._v("因其需先去查表有哪些列，然后才去查列内容。故改*为所要查询的列会比较好")])]),t._v(" "),a("h2",{attrs:{id:"字符串不足位时补空格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串不足位时补空格"}},[t._v("#")]),t._v(" 字符串不足位时补空格")]),t._v(" "),a("ul",[a("li",[t._v("若字符串不足10位，将在字符串 “后面” 补充空格；其他情况直接得到原字符串")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%1$-10s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("若字符串不足6位，将在字符串 “前面” 补充空格；其他情况直接得到原字符串")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%6s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);