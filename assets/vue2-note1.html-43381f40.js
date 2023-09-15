const e=JSON.parse('{"key":"v-43bf67e8","path":"/technology/vue/vue2-note1.html","title":"Vue2学习笔记-基础知识","lang":"zh-CN","frontmatter":{"date":"2022-08-20T12:44:15.000Z","category":["Vue学习"],"tag":["Vue2","学习笔记"],"description":"Vue2学习笔记-基础知识","head":[["meta",{"property":"og:url","content":"https://ixiayu/technology/vue/vue2-note1.html"}],["meta",{"property":"og:site_name","content":"ixiayu"}],["meta",{"property":"og:title","content":"Vue2学习笔记-基础知识"}],["meta",{"property":"og:description","content":"Vue2学习笔记-基础知识"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ixiayu/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T08:44:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue2学习笔记-基础知识"}],["meta",{"property":"article:author","content":"ixiayu"}],["meta",{"property":"article:tag","content":"Vue2"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2022-08-20T12:44:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T08:44:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2学习笔记-基础知识\\",\\"image\\":[\\"https://ixiayu/\\"],\\"datePublished\\":\\"2022-08-20T12:44:15.000Z\\",\\"dateModified\\":\\"2023-09-11T08:44:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ixiayu\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"xia_yu253@163.com\\"}]}"]]},"headers":[{"level":2,"title":"初识Vue","slug":"初识vue","link":"#初识vue","children":[]},{"level":2,"title":"Vue模板语法有两大类","slug":"vue模板语法有两大类","link":"#vue模板语法有两大类","children":[{"level":3,"title":"1、插值语法","slug":"_1、插值语法","link":"#_1、插值语法","children":[]},{"level":3,"title":"2、指令语法","slug":"_2、指令语法","link":"#_2、指令语法","children":[]}]},{"level":2,"title":"数据绑定","slug":"数据绑定","link":"#数据绑定","children":[{"level":3,"title":"vue中有两种数据绑定的方式","slug":"vue中有两种数据绑定的方式","link":"#vue中有两种数据绑定的方式","children":[]}]},{"level":2,"title":"data与el的两种写法","slug":"data与el的两种写法","link":"#data与el的两种写法","children":[{"level":3,"title":"1.el的两种写法","slug":"_1-el的两种写法","link":"#_1-el的两种写法","children":[]},{"level":3,"title":"2.data的两种写法","slug":"_2-data的两种写法","link":"#_2-data的两种写法","children":[]},{"level":3,"title":"3.一个重要的原则","slug":"_3-一个重要的原则","link":"#_3-一个重要的原则","children":[]}]},{"level":2,"title":"数据代理","slug":"数据代理","link":"#数据代理","children":[{"level":3,"title":"1.Object.defineproperty","slug":"_1-object-defineproperty","link":"#_1-object-defineproperty","children":[]},{"level":3,"title":"2.何为数据代理？","slug":"_2-何为数据代理","link":"#_2-何为数据代理","children":[]},{"level":3,"title":"3.Vue中的数据代理","slug":"_3-vue中的数据代理","link":"#_3-vue中的数据代理","children":[]},{"level":3,"title":"4.Vue中数据代理的好处","slug":"_4-vue中数据代理的好处","link":"#_4-vue中数据代理的好处","children":[]},{"level":3,"title":"5.基本原理","slug":"_5-基本原理","link":"#_5-基本原理","children":[]}]},{"level":2,"title":"事件处理","slug":"事件处理","link":"#事件处理","children":[{"level":3,"title":"事件的使用：","slug":"事件的使用","link":"#事件的使用","children":[]},{"level":3,"title":"Vue中的事件修饰符","slug":"vue中的事件修饰符","link":"#vue中的事件修饰符","children":[]},{"level":3,"title":"Vue中的键盘事件","slug":"vue中的键盘事件","link":"#vue中的键盘事件","children":[]}]},{"level":2,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[]},{"level":2,"title":"监视属性","slug":"监视属性","link":"#监视属性","children":[{"level":3,"title":"监视属性watch","slug":"监视属性watch","link":"#监视属性watch","children":[]},{"level":3,"title":"深度监视","slug":"深度监视","link":"#深度监视","children":[]},{"level":3,"title":"computed 和 watch之间的区别","slug":"computed-和-watch之间的区别","link":"#computed-和-watch之间的区别","children":[]},{"level":3,"title":"两个重要的小原则","slug":"两个重要的小原则","link":"#两个重要的小原则","children":[]}]},{"level":2,"title":"绑定样式","slug":"绑定样式","link":"#绑定样式","children":[]},{"level":2,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":2,"title":"列表渲染","slug":"列表渲染","link":"#列表渲染","children":[{"level":3,"title":"列表过滤","slug":"列表过滤","link":"#列表过滤","children":[]},{"level":3,"title":"key的原理","slug":"key的原理","link":"#key的原理","children":[]},{"level":3,"title":"过滤小例子","slug":"过滤小例子","link":"#过滤小例子","children":[]},{"level":3,"title":"Vue数据监测","slug":"vue数据监测","link":"#vue数据监测","children":[]}]},{"level":2,"title":"收集表单数据","slug":"收集表单数据","link":"#收集表单数据","children":[]},{"level":2,"title":"过滤器","slug":"过滤器","link":"#过滤器","children":[]},{"level":2,"title":"内置指令","slug":"内置指令","link":"#内置指令","children":[{"level":3,"title":"学过的指令","slug":"学过的指令","link":"#学过的指令","children":[]},{"level":3,"title":"v-text指令","slug":"v-text指令","link":"#v-text指令","children":[]},{"level":3,"title":"v-html指令","slug":"v-html指令","link":"#v-html指令","children":[]},{"level":3,"title":"v-cloak指令（没有值）","slug":"v-cloak指令-没有值","link":"#v-cloak指令-没有值","children":[]},{"level":3,"title":"v-once指令","slug":"v-once指令","link":"#v-once指令","children":[]},{"level":3,"title":"v-pre指令","slug":"v-pre指令","link":"#v-pre指令","children":[]}]},{"level":2,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[{"level":3,"title":"定义语法","slug":"定义语法","link":"#定义语法","children":[]},{"level":3,"title":"配置对象中常用的3个回调","slug":"配置对象中常用的3个回调","link":"#配置对象中常用的3个回调","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"常用的生命周期钩子","slug":"常用的生命周期钩子","link":"#常用的生命周期钩子","children":[]},{"level":3,"title":"关于销毁Vue实例","slug":"关于销毁vue实例","link":"#关于销毁vue实例","children":[]}]},{"level":2,"title":"非单文件组件","slug":"非单文件组件","link":"#非单文件组件","children":[{"level":3,"title":"Vue中使用组件的三大步骤","slug":"vue中使用组件的三大步骤","link":"#vue中使用组件的三大步骤","children":[]},{"level":3,"title":"二、注册组件","slug":"二、注册组件","link":"#二、注册组件","children":[]},{"level":3,"title":"三、使用组件（编写组件标签）","slug":"三、使用组件-编写组件标签","link":"#三、使用组件-编写组件标签","children":[]},{"level":3,"title":"几个注意点","slug":"几个注意点","link":"#几个注意点","children":[]},{"level":3,"title":"关于VueComponent:","slug":"关于vuecomponent","link":"#关于vuecomponent","children":[]}]},{"level":2,"title":"单文件组件","slug":"单文件组件","link":"#单文件组件","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"为什么要使用 SFC","slug":"为什么要使用-sfc","link":"#为什么要使用-sfc","children":[]},{"level":3,"title":"SFC 是如何工作的","slug":"sfc-是如何工作的","link":"#sfc-是如何工作的","children":[]}]}],"git":{"createdTime":1694421894000,"updatedTime":1694421894000,"contributors":[{"name":"夏宇","email":"xia_yu253@163.com","commits":1}]},"readingTime":{"minutes":24.76,"words":7427},"filePathRelative":"technology/vue/vue2-note1.md","localizedDate":"2022年8月20日","excerpt":"<h1> Vue2学习笔记-基础知识</h1>\\n","autoDesc":true}');export{e as data};