(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"061a":function(e,n,t){var a=t("2fd7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("6183dad0",a,!0,{sourceMap:!1,shadowMode:!1})},1113:function(e,n,t){"use strict";t.r(n);var a=t("5d19"),i=t("5bb3");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("6ab1");var c,s=t("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1915571c",null,!1,a["a"],c);n["default"]=r.exports},"2fd7":function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.home[data-v-1915571c]{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#f8f8f8}.home .cell[data-v-1915571c]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;margin-top:%?10?%;font-size:%?30?%;box-sizing:border-box;padding:0 %?30?%}',""]),e.exports=n},"5bb3":function(e,n,t){"use strict";t.r(n);var a=t("e965"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},"5d19":function(e,n,t){"use strict";var a,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"home"},e._l(e.list,(function(n,a){return t("v-uni-view",{key:n.name,staticClass:"cell",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.jumpNextPage(n.path)}}},[t("v-uni-text",[e._v(e._s(n.name))])],1)})),1)},o=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}))},"6ab1":function(e,n,t){"use strict";var a=t("061a"),i=t.n(a);i.a},e965:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"Home",data:function(){return{list:[{name:"Input组件",path:"/pages/input/input"},{name:"Cell组件",path:"/pages/cell/cell"},{name:"Radio组件",path:"/pages/radio/radio"},{name:"Checkbox组件",path:"/pages/checkbox/checkbox"},{name:"Popup组件",path:"/pages/popup/popup"},{name:"Address组件",path:"/pages/address/address"}]}},methods:{jumpNextPage:function(e){uni.navigateTo({url:e})}}};n.default=a}}]);