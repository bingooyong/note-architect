(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{600:function(s,a,n){s.exports=n.p+"assets/img/image-20210404173625175.40037b3e.png"},601:function(s,a,n){s.exports=n.p+"assets/img/image-20210404174417567.f6a09968.png"},602:function(s,a,n){s.exports=n.p+"assets/img/image-20210404174735830.d38a6a8c.png"},603:function(s,a,n){s.exports=n.p+"assets/img/image-20210404175041467.76d3a9f8.png"},604:function(s,a,n){s.exports=n.p+"assets/img/image-20210404175225664.eaefc1ef.png"},733:function(s,a,n){"use strict";n.r(a);var e=n(13),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-的进程模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的进程模型"}},[s._v("#")]),s._v(" Nginx 的进程模型")]),s._v(" "),e("p",[s._v("分为两种：")]),s._v(" "),e("ul",[e("li",[s._v("master 进程：主进程")]),s._v(" "),e("li",[s._v("worker 进程：工作进程")])]),s._v(" "),e("p",[s._v("可以看现在启动的 nginx 进程情况")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep nginx")]),s._v("\nroot     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10108")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":31 ?        00:00:00 nginx: master process ./nginx\nnobody   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10965")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10108")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":27 ?        00:00:00 nginx: worker process\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可以通过配置文件中的 worker_processes 来配置 worker 的进程数量")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("worker_processes 2;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("master 可以接受一些指令，然后安排给 work 进行执行，比如如下信号：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./nginx -s stop\n./nginx -s quit\n./nginx -s reload\n./nginx -t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:n(600),alt:"image-20210404173625175"}})]),s._v(" "),e("p",[s._v("master 是用来管理 worker 的，而 work 是用来处理 web 请求的，与浏览器之间保持连接，处理响应请求")]),s._v(" "),e("p",[s._v("还有一个需要注意：比如我们需要 stop ，如果 worker 1、worker 2 此时没有任何连接，则会直接关闭，worker 3 还有连接的话，不会立即关闭，会等待连接释放后才会关闭")]),s._v(" "),e("p",[s._v("这种多进程的模型与多线程的模型相比还是有一些优势的，比如：")]),s._v(" "),e("ul",[e("li",[s._v("进程之间的相互独立的")]),s._v(" "),e("li",[s._v("某个 work 异常了，可以直接干掉，而不会影响其他的 work")])]),s._v(" "),e("p",[s._v("Nginx 的并发性能很棒，可达到几万甚至几十万，那么我们看看看，一个连接过来之后，如何与 work 进行连接上的呢？")]),s._v(" "),e("h2",{attrs:{id:"worker-抢占机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worker-抢占机制"}},[s._v("#")]),s._v(" Worker 抢占机制")]),s._v(" "),e("p",[e("img",{attrs:{src:n(601),alt:"image-20210404174417567"}})]),s._v(" "),e("p",[s._v("如上图所示：master 监听了 80 端口，并且 fork 出 3 个 wokrer 进程，当 client 一个请求过来时，work 是需要去 "),e("strong",[s._v("抢占一个互斥锁")]),s._v("（上图中的 accept_mutex） ，抢占成功的 worker 进行处理")]),s._v(" "),e("h2",{attrs:{id:"传统服务器事件处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统服务器事件处理"}},[s._v("#")]),s._v(" 传统服务器事件处理")]),s._v(" "),e("p",[s._v("最大的问题就是 "),e("strong",[s._v("同步阻塞")]),s._v("，如下图所示")]),s._v(" "),e("p",[e("img",{attrs:{src:n(602),alt:"image-20210404174735830"}})]),s._v(" "),e("p",[s._v("一个 worker 同时只能处理一个 client 请求，当一个请求被阻塞时，就不能处理其他的请求了，只能 fork 出新的 worker 出来，接受新的请求")]),s._v(" "),e("h2",{attrs:{id:"nginx-事件处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-事件处理"}},[s._v("#")]),s._v(" Nginx 事件处理")]),s._v(" "),e("p",[s._v("解决问题的关键就是 "),e("strong",[s._v("异步非阻塞")]),s._v("，如下图所示")]),s._v(" "),e("p",[e("img",{attrs:{src:n(603),alt:"image-20210404175041467"}})]),s._v(" "),e("p",[s._v("当 3 个请求落在一个 work 上时，当一个 client 阻塞时，它会去处理另外一个请求，而不是像传统服务器那样就卡住了")]),s._v(" "),e("p",[e("img",{attrs:{src:n(604),alt:"image-20210404175225664"}})]),s._v(" "),e("p",[s._v("所以，nginx 只需要少量的 work 就可以处理大量的请求")]),s._v(" "),e("p",[s._v("对于默认的并发处理能力，也可以通过 "),e("code",[s._v("worker_connections")]),s._v(" 属性配置")]),s._v(" "),e("div",{staticClass:"language-lua line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("events")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 默认使用 epoll\n  use epoll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 每个 woker 允许客户端的最大链接数量\n  worker_connections "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);