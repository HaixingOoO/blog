module.exports = {
  theme: "reco",
  title: "Zzongke",
  keywords: "前端开发",
  description: "zzk的Blog",
  repo: "https://github.com/zzongke/blog.git",
  base: "/blog/",
  // base: '/', // 这是部署到github相关的配置
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        // href: '/favicon.ico'
        href: "/logo.jpg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "zzongke的Blog,zZongke的Blog,Zzongke的Blog",
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    type: "blog",
    author: "Zzongke",
    authorAvatar: "/logo.jpg",
    title: "Normal No More",
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    blogConfig: {
      category: {
        location: 1,
        text: "Category",
      },
      tag: {
        location: 2,
        text: "tag",
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/recoluan" },
        { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
      ],
    },
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        icon: "reco-github",
        text: "JavaScript",
        link: "/JavaScript/",
      },
      {
        text: "Web",
        items: [
          {
            text: "React",
            link: "https://zh-hans.reactjs.org/",
          },
          {
            text: "React",
            link: "https://zh-hans.reactjs.org/",
          },
        ],
      },
      {
        text: "Nginx",
        link: "https://www.nginx.cn/doc/",
      },
      {
        text: "Node",
        link: "https://nodejs.org/api/",
      },
    ],
    subSidebar: "auto",
    sidebar: {
      "/JavaScript/": [
        "/JavaScript/数据类型的判断",
        "/JavaScript/防抖和节流",
        "/JavaScript/上拉加载下拉刷新",
        "/JavaScript/浅拷贝和深拷贝",
        "/JavaScript/JavaScript数组的常用方法有哪些",
        "/JavaScript/this指向",
        "/JavaScript/eventloop、宏任务和微任务",
      ],
      "/Vue/": ["/Vue/Vue常见问题", "/Vue/nextTick", "30道Vue面试题"],
      "/Other/": [
        "/Other/Git常用指令",
        "/Other/Markdown",
        "/Other/模糊搜索关键词高亮显示",
        "/Other/CentOS8配置Nginx",
        "/Other/SPA首屏加载速度",
        "/Other/HTTP和HTTPS",
        "/Other/HTTP常见的状态码",
        "/Other/地址栏输入URL敲下回车",
        "/Other/TCP为什么需要三次握手和四次挥手",
        "/Other/Ajax原理和实现",
        "/Other/video鼠标移动预览",
        "/Other/SEO优化重要的元标签",
      ],
      "Hooks":["/Hooks/usePromiseReadyFn"]
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "recoluan@qq.com",
        link: "https://www.recoluan.com",
      },
    ],
    noFoundPageByTencent: false,
    // 备案
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    // 项目开始时间，只填写年份
    startYear: "2021",
    //代码主题
    codeTheme: "tomorrow",
  },
};
