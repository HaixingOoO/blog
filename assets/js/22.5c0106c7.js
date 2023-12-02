(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{540:function(s,t,a){s.exports=a.p+"assets/img/SPA.bb5b901f.png"},570:function(s,t,a){"use strict";a.r(t);var e=a(9),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一、什么是首屏加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是首屏加载"}},[s._v("#")]),s._v(" 一、什么是首屏加载")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("首屏时间(First Contentful Paint),指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一样要全部渲染完成，但需要展示当前视窗需要的内容")]),s._v(" "),e("p",[s._v("首屏加载可以说是用户体验中重要的环节。")]),s._v(" "),e("h2",{attrs:{id:"二、加载慢的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、加载慢的原因"}},[s._v("#")]),s._v(" 二、加载慢的原因")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),s._v(" "),e("ul",[e("li",[s._v("网络延时问题")]),s._v(" "),e("li",[s._v("资源文件体积是否过大")]),s._v(" "),e("li",[s._v("资源是否重发发送请求去加载了")]),s._v(" "),e("li",[s._v("加载脚本的时候，渲染内容堵塞")])]),s._v(" "),e("h2",{attrs:{id:"三、解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[s._v("#")]),s._v(" 三、解决方案")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("常见的几种 SPA 首屏优化方式")]),s._v(" "),e("ul",[e("li",[s._v("减少入口文件体积")]),s._v(" "),e("li",[s._v("静态资源本地缓存")]),s._v(" "),e("li",[s._v("UI 框架按需加载")]),s._v(" "),e("li",[s._v("图片资源压缩")]),s._v(" "),e("li",[s._v("开启 Gzip 压缩")]),s._v(" "),e("li",[s._v("使用 SSR")])]),s._v(" "),e("h3",{attrs:{id:"减少入口文件体积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少入口文件体积"}},[s._v("#")]),s._v(" 减少入口文件体积")]),s._v(" "),e("ol",[e("li",[s._v("常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。")]),s._v(" "),e("li",[s._v("还有就是使用 cdn 加速，减少文件体积，但是要是看别人的 cdn 服务器稳不稳定，也可以自己下载 cdn 放到自己服务器，但是自己服务器没有 cdn 分发的话，速度就会在下载 cdn 文件时候影响加载速度。")])]),s._v(" "),e("h3",{attrs:{id:"静态资源本地缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[s._v("#")]),s._v(" 静态资源本地缓存")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("后端返回的资源问题:")]),s._v(" "),e("ul",[e("li",[s._v("采用"),e("code",[s._v("HTTP")]),s._v("缓存，设置"),e("code",[s._v("Cache-Control")]),s._v("，"),e("code",[s._v("Last-Modified")]),s._v("，"),e("code",[s._v("Etag")]),s._v("等响应头")]),s._v(" "),e("li",[s._v("采用"),e("code",[s._v("Service Worker")]),s._v("离线缓存\n前端合理使用 LocalStorage")])]),s._v(" "),e("h3",{attrs:{id:"ui-框架按需加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-框架按需加载"}},[s._v("#")]),s._v(" UI 框架按需加载")]),s._v(" "),e("h3",{attrs:{id:"图片资源的压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[s._v("#")]),s._v(" 图片资源的压缩")]),s._v(" "),e("p",[s._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素\n对于所有的图片资源，我们可以进行适当的压缩\n对于页面上使用到的 icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到一张图上，减少"),e("code",[s._v("HTTP")]),s._v("请求次数")]),s._v(" "),e("h3",{attrs:{id:"开启-gzip-压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-gzip-压缩"}},[s._v("#")]),s._v(" 开启 Gzip 压缩")]),s._v(" "),e("p",[s._v("拆完包之后，我们在使用"),e("code",[s._v("Gzip")]),s._v("做一下压缩，安装"),e("code",[s._v("compression-webpack-plugin")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" compression-webpack-plugin -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在"),e("code",[s._v("vue.config.js")]),s._v("中引入并修改"),e("code",[s._v("webpack")]),s._v("配置")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CompressionWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compression-webpack-plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//省略")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("configureWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CompressionWebpackPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(js|css)$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//匹配文件名")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("threshold")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对超过10k的数据进行压缩")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minRatio")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩比")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("deleteOriginalAssets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否删除原文件")]),s._v("\n         "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/node_modules/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("在服务器我们也要做相应的配置，比如"),e("code",[s._v("Nginx")])]),s._v(" "),e("div",{staticClass:"language-Nginx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_disable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msie6"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_vary")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_proxied")]),s._v(" any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_comp_level")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_buffers")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8k")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_http_version")]),s._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_min_length")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("gzip_types")]),s._v(" application/atom+xml application/geo+json application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/rdf+xml application/rss+xml application/xhtml+xml application/xml font/eot font/otf font/ttf image/svg+xml text/css text/javascript text/plain text/xml")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"使用-ssr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssr"}},[s._v("#")]),s._v(" 使用 SSR")]),s._v(" "),e("p",[s._v("SSR(Server side)，也就是服务器渲染，组件或页面通过服务器生成 html 字符串，再发送到浏览器\n从头搭建一个服务器渲染是很复杂的，"),e("code",[s._v("Vue")]),s._v("应用建议使用"),e("code",[s._v("Nuxt.js")]),s._v("实现服务器渲染")]),s._v(" "),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("p",[s._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分，资源加载优化和页面渲染优化")]),s._v(" "),e("p",[s._v("下图是更为全面的首屏优化的方案")]),s._v(" "),e("p",[e("img",{attrs:{src:a(540),alt:"首屏优化",title:"首屏优化"}})]),s._v(" "),e("p",[s._v("大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化")])])}),[],!1,null,null,null);t.default=n.exports}}]);