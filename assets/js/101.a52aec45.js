(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{689:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hikaricp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hikaricp"}},[s._v("#")]),s._v(" HikariCP")]),s._v(" "),a("p",[s._v("要用数据库首先想到的配置就是数据源，这里使用 "),a("a",{attrs:{href:"https://github.com/brettwooldridge/HikariCP",target:"_blank",rel:"noopener noreferrer"}},[s._v("HiKariCP"),a("OutboundLink")],1),s._v("，它是一个 快速、简单、可靠的数据库连接池，Spring Boot 2.0 时默认的数据库连接池使用了 HiKariCP")]),s._v(" "),a("p",[s._v("可以在官方的 GitHub 上去详细阅读")]),s._v(" "),a("h2",{attrs:{id:"与-mybatis-整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-mybatis-整合"}},[s._v("#")]),s._v(" 与 MyBatis 整合")]),s._v(" "),a("p",[s._v("引入 mysql 驱动与 mybatis")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- mysql驱动 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mysql-connector-java"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- mybatis --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.mybatis.spring.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mybatis-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.1.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("在 yml 中增加数据源和 MyBatis 的配置")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内置 tomcat 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# web 访问端口号 约定 8088")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tomcat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uri-encoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" utf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-http-header-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 80KB\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置数据源信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.zaxxer.hikari.HikariDataSource                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据源类型：HikariCP")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.mysql.cj.jdbc.Driver             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据源的相关配置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/foodie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v("useUnicode=true"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("&characterEncoding=UTF-8&autoReconnect=true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hikari")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connection-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待连接池分配连接的最大时长（毫秒），超过这个时长还没可用的连接则发生SQ")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("minimum-idle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最小连接数")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maximum-pool-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auto-commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动提交")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("idle-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600000")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接超时的最大时长（毫秒），超时则被释放（retired），默认:10分钟")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pool-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DateSourceHikariCP   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接池名字")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max-lifetime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1800000")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接的生命时长（毫秒），超时而且没被使用则被释放（retired），默认:30分钟")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connection-test-query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SELECT 1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mybatis 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mybatis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type-aliases-package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cn.mrcode.foodiedev.pojo    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实体层")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mapper-locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mapper/"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("*.xml")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mapper 层")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[s._v("记得在对应的模块中创建包。")]),s._v(" "),a("p",[s._v("重启如果不报错，而且还可以访问的话，则说明没有什么问题。")]),s._v(" "),a("h2",{attrs:{id:"mysql-5-7-数据库准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7-数据库准备"}},[s._v("#")]),s._v(" Mysql 5.7 数据库准备")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://hub.docker.com/_/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker mysql 官方文档"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("此节并不是课程中的，由于笔者电脑上没有 mysql 数据库，只能重新装一个，这里简单记录下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker pull mysql:5.7.33\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql5.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.7.33\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plugin=mysql_native_password\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./mysql/mysql5.7/my.cnf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/mysql/my.cnf\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./mysql/mysql5.7/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"数据源连接数详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据源连接数详解"}},[s._v("#")]),s._v(" 数据源连接数详解")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v("      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("minimum-idle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最小连接数")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maximum-pool-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里的讲解，笔者并没有听到想要的，简单说是与硬件有关系，比如 4 核设置为 10，8 核设置为 20，但是不明白最大连接数  20 真的够用吗？")]),s._v(" "),a("p",[s._v("对于最大连接数和最小连接数的配置，HikariCP 的作者建议设置为一样的，原因猜测可能是因为：")]),s._v(" "),a("ul",[a("li",[s._v("HikariCP 是一个轻量高效率的连接池")]),s._v(" "),a("li",[s._v("对于一个网站，不太可能会有太多的时间链接被空着（当然要先回答笔者对于最大连接数的疑问后才能想明白）")])])])}),[],!1,null,null,null);t.default=e.exports}}]);