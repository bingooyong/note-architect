(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{606:function(t,e,a){t.exports=a.p+"assets/img/image-20210404150340567.cb2befb9.png"},607:function(t,e,a){t.exports=a.p+"assets/img/image-20210404151645228.30684ef3.png"},608:function(t,e,a){t.exports=a.p+"assets/img/image-20210404152120464.e18341ce.png"},609:function(t,e,a){t.exports=a.p+"assets/img/image-20210404152554826.5b0a1bc3.png"},771:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web-服务器基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-服务器基础知识"}},[t._v("#")]),t._v(" Web 服务器基础知识")]),t._v(" "),s("h2",{attrs:{id:"什么是-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nginx"}},[t._v("#")]),t._v(" 什么是 Nginx")]),t._v(" "),s("p",[t._v("Nginx（engine x）是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供 IMAP/POP3/SMTP 服务。但是它的 "),s("strong",[t._v("主要功能是反向代理")]),t._v(" ，通过配置文件可以实现集群和负载均衡，可以实现热加载")]),t._v(" "),s("p",[t._v("还可以实现静态资源虚拟化，将图片、css 等静态资源进行虚拟化，就可以通过浏览器访问到资源了")]),t._v(" "),s("h2",{attrs:{id:"常见的服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的服务器"}},[t._v("#")]),t._v(" 常见的服务器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("MS IIS：asp.net")])]),t._v(" "),s("li",[s("p",[t._v("Weblogic、Jboss：传统行业 ERP/物流/电信/金融")])]),t._v(" "),s("li",[s("p",[t._v("Tomcat、Jetty：J2EE 等 JAVA 项目")])]),t._v(" "),s("li",[s("p",[t._v("Apache、Nginx：静态服务、反向代理")])]),t._v(" "),s("li",[s("p",[t._v("Netty：高性能服务器编码")]),t._v(" "),s("p",[t._v("比如可以开发一个聊天室")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://news.netcraft.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netcraft 网站"),s("OutboundLink")],1),t._v("，提供了一些对比图，可以看到各个服务器的时长占有率，如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:a(606),alt:"image-20210404150340567"}})]),t._v(" "),s("p",[t._v("上图信息可以在 "),s("a",{attrs:{href:"https://news.netcraft.com/archives/2021/03/29/march-2021-web-server-survey.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2021年3月Web服务器调查"),s("OutboundLink")],1),t._v(" 中找到，并且里面还包含了一些其他维度的对比信息")]),t._v(" "),s("h2",{attrs:{id:"什么是正向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是正向代理"}},[t._v("#")]),t._v(" 什么是正向代理？")]),t._v(" "),s("p",[t._v("客户端请求目标服务器之间的一个代理服务器，"),s("strong",[t._v("请求会先经过代理服务器，然后再转发请求到目标服务器")]),t._v("，获得内容后最后响应给客户端")]),t._v(" "),s("p",[t._v("比如：在家里访问慕课网，我们的请求实际上会先经过你的移动运营商才会到达慕课网服务器，中间经历了中转")]),t._v(" "),s("p",[t._v("再比如：公司的网络环境下，有些网管会屏蔽百度下载，你发起的请求会先经过代理服务器，它可以控制或则监控你的一些行为的")]),t._v(" "),s("p",[s("img",{attrs:{src:a(607),alt:"image-20210404151645228"}})]),t._v(" "),s("h2",{attrs:{id:"什么是反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是反向代理"}},[t._v("#")]),t._v(" 什么是反向代理？")]),t._v(" "),s("p",[t._v("用户请求目标服务器，"),s("strong",[t._v("由代理服务器决定访问哪个 IP")]),t._v(" 。")]),t._v(" "),s("p",[t._v("注意区别：")]),t._v(" "),s("ul",[s("li",[t._v("正向代理：代理服务器只是转发用户的请求到用户想要访问的资源")]),t._v(" "),s("li",[t._v("反向代理：代理服务器决定返回哪个服务器的资源给用户")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(608),alt:"image-20210404152120464"}})]),t._v(" "),s("p",[t._v("如上图所示，你报名之后，但是要去到哪个班级？不是你能决定的")]),t._v(" "),s("p",[t._v("通过反向代理我们可以实现很多功能，比如反向代理 "),s("strong",[t._v("路由")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(609),alt:"image-20210404152554826"}})]),t._v(" "),s("p",[t._v("上述中的域名，在 Nginx 中是用虚拟主机实现的")])])}),[],!1,null,null,null);e.default=r.exports}}]);