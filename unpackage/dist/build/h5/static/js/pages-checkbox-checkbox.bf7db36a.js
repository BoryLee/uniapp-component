(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-checkbox-checkbox"],{"0359":function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("jc-cell",[n("jc-cell-item",[n("jc-check-box",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("1111")])],1)],1),n("jc-cell",[n("jc-cell-item",[n("jc-check-box-group",{model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},[n("jc-check-box",{attrs:{name:"a"}},[t._v("test 1")]),n("jc-check-box",{attrs:{name:"b"}},[t._v("test 2")]),n("jc-check-box",{attrs:{name:"c"}},[t._v("test 3")]),n("jc-check-box",{attrs:{name:"d"}},[t._v("test 4")])],1)],1)],1)],1)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"2f40":function(t,e,n){var i=n("e975");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("e898a1bc",i,!0,{sourceMap:!1,shadowMode:!1})},"374d":function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"checkbox",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.changeCheckBox.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"checkbox-input",class:{"checkbox-disable":t.disabled},style:t.checkBoxStyle},[n("v-uni-text",{staticClass:"iconfont icon-check"})],1),n("v-uni-view",{staticClass:"checkbox-label"},[t._t("default")],2)],1)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"497f":function(t,e,n){"use strict";n.r(e);var i=n("374d"),c=n("a635");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("8367");var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"67c2107b",null,!1,i["a"],o);e["default"]=s.exports},"4db8":function(t,e,n){"use strict";n.r(e);var i=n("6761"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},"54e6":function(t,e,n){"use strict";n.r(e);var i=n("5d03"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},"5b39":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cell-item[data-v-18b8cabe]{width:100%;overflow:hidden;box-sizing:border-box;border-bottom:%?2?% solid #f1f1f1}.cell-item .cell-item-wrap[data-v-18b8cabe]{height:100%;position:relative}.cell-item .cell-item-wrap .cell-content[data-v-18b8cabe]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:0 %?30?%;font-size:%?30?%}.cell-item .cell-item-wrap .cell-btns[data-v-18b8cabe]{position:absolute;top:0;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cell-item .cell-item-wrap .cell-btns .cell-btn[data-v-18b8cabe]{height:100%;width:60px;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}',""]),t.exports=e},"5d03":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=i(n("497f")),a=i(n("7bbc")),o=i(n("8ff3")),r=i(n("5d67")),s={components:{jcCheckBox:c.default,jcCell:o.default,jcCellItem:r.default,jcCheckBoxGroup:a.default},data:function(){return{checked:!1,result:["a","b","c"]}},methods:{}};e.default=s},"5d67":function(t,e,n){"use strict";n.r(e);var i=n("6f93"),c=n("e780");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);var o=n("d11b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6616");var r=n("f0c5");c["default"].__module="swiper";var s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"18b8cabe",null,!1,i["a"],c["default"]);e["default"]=s.exports},6616:function(t,e,n){"use strict";var i=n("6e27"),c=n.n(i);c.a},6761:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"jclifeCell"};e.default=i},"6cf9":function(t,e,n){"use strict";n("99af"),n("c975"),n("fb6a"),n("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"jc-checkbox",props:{name:{type:String,default:""},value:{type:Boolean,default:!1},color:{type:String,default:"#fff"},bgColor:{type:String,default:"green"},disabled:{type:Boolean,default:!1}},computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}},checkBoxStyle:function(){return this.checked?this.disabled?"color: #c8c9cc":"color: ".concat(this.color,";backgroundColor: ").concat(this.bgColor):"color: #fff"}},data:function(){return{parent:null}},methods:{changeCheckBox:function(){this.disabled||(this.parent?this.setParentValue(!this.checked):this.checked=!this.value)},setParentValue:function(t){var e=this.parent.value.slice(),n=e.indexOf(this.name);n>-1?t||e.splice(n,1):e.push(this.name),this.parent.$emit("input",e)}},created:function(){var t=this.$parent;while(t){if("jcCheckBoxGroup"===t.$options.name){this.parent=t;break}t=t.$parent}}};e.default=i},"6e27":function(t,e,n){var i=n("5b39");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("319784fb",i,!0,{sourceMap:!1,shadowMode:!1})},"6f93":function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cell-item"},[n("v-uni-view",{staticClass:"cell-item-wrap",style:t.getStyle,on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.cellClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cell-content",attrs:{"data-index":t.touchIndex,"data-width":t.width,"data-btnwidth":t.btnWidth,"data-count":t.count},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.swiper.start(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.swiper.move(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.swiper.end(e,t.$getComponentDescriptor())}}},[t._t("default")],2),n("v-uni-view",{staticClass:"cell-btns"},t._l(t.btnOptions,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cell-btn",style:{backgroundColor:e.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(i)}}},[t._v(t._s(e.title))])})),1)],1)],1)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"772c":function(t,e,n){"use strict";n.r(e);var i=n("8f06"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},"7bbc":function(t,e,n){"use strict";n.r(e);var i=n("b39a9"),c=n("772c");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"ac2e7b52",null,!1,i["a"],o);e["default"]=s.exports},"7fb6":function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cell"},[t._t("default")],2)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},8367:function(t,e,n){"use strict";var i=n("c586"),c=n.n(i);c.a},"8f06":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"jcCheckBoxGroup",props:{value:{type:Array,default:function(){return[]}}}};e.default=i},"8ff3":function(t,e,n){"use strict";n.r(e);var i=n("7fb6"),c=n("4db8");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},a635:function(t,e,n){"use strict";n.r(e);var i=n("6cf9"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},b39a9:function(t,e,n){"use strict";var i,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"checkbox-group"},[t._t("default")],2)},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},c586:function(t,e,n){var i=n("ea02");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("ce6d2490",i,!0,{sourceMap:!1,shadowMode:!1})},cd4e:function(t,e,n){"use strict";var i=n("2f40"),c=n.n(i);c.a},d11b:function(t,e,n){"use strict";n.r(e);var i=n("e299"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},e02d:function(t,e,n){"use strict";n("4160"),n("fb6a"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{start:function(t){var e=t.currentTarget.dataset,n=e.index,i=e.width,c=e.btnwidth;if(c){[].slice.call(document.querySelectorAll(".cell-item-wrap")).forEach((function(t,e){n!==e&&(t.style.width=i+"px",t.style.transform="translateX(0)",t.style.transition="transform 0.6s ease")}));var a=t.changedTouches[0];this.startX=a.pageX,this.startY=a.pageY,this.startTime=(new Date).getTime()}},move:function(t){var e=t.changedTouches[0],n=e.pageX,i=e.pageY;n-this.startX<0?(this.direction="left",this.offetX=Math.abs(n-this.startX)):this.direction="right",Math.abs(i-this.startY)>Math.abs(n-this.startX)||Math.abs(n-this.startX)<10||this.offetX&&this.$ownerInstance.callMethod("renderjsResponseToJS",this.offetX)},end:function(t){var e=t.currentTarget.dataset,n=e.btnwidth,i=e.count;this.offetX&&("left"===this.direction&&this.offetX>=n?this.$ownerInstance.callMethod("renderjsResponseToJS",n*i):this.$ownerInstance.callMethod("renderjsResponseToJS",0))}}};e.default=i},e299:function(t,e,n){"use strict";n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"jclifeCellItem",props:{item:{type:Object},btnOptions:{type:Array,default:function(){return[]}},btnWidth:{type:Number},touchIndex:{type:Number},close:{type:Boolean,default:!1}},watch:{isMove:function(t){t||(this.moveWidth=0)},close:function(t){t&&(this.moveWidth=0)}},data:function(){return{moveWidth:0,width:0}},computed:{count:function(){return this.btnOptions.length},getStyle:function(){var t=uni.getSystemInfoSync(),e=t.windowWidth,n=e+this.btnOptions.length*this.btnWidth;return this.width=n,"width: ".concat(n,"px;transform: translateX(-").concat(this.moveWidth,"px);transition: transform 0.6s ease")}},methods:{renderjsResponseToJS:function(t){this.moveWidth=t},btnClick:function(t){this.$emit("btnclick",t),this.moveWidth=0},cellClick:function(){this.$emit("click",this.item)}}};e.default=i},e780:function(t,e,n){"use strict";n.r(e);var i=n("e02d"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},e975:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.checkbox[data-v-15192404]{display:-webkit-box;display:-webkit-flex;display:flex}',""]),t.exports=e},ea02:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.checkbox[data-v-67c2107b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% 0}.checkbox .checkbox-input[data-v-67c2107b]{width:%?40?%;height:%?40?%;border:%?2?% solid #c8c7cc;border-radius:50%;margin-right:%?20?%;box-sizing:border-box;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.checkbox .checkbox-input.checkbox-disable[data-v-67c2107b]{cursor:not-allowed;background-color:#ebedf0}.checkbox .checkbox-input .icon-check[data-v-67c2107b]{font-size:%?20?%;text-align:center}@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1945190_rh9zxx0lil8.eot?t=1596695532718);\n  /* IE9 */src:url(//at.alicdn.com/t/font_1945190_rh9zxx0lil8.eot?t=1596695532718#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAAsAAAAAB0wAAALaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCCIF6ATYCJAMQCwoABCAFhG0HRRtpBsiemjypEKUNI3AbERDcwBAPH/t9O1dWNUkSjX82rk8nkVRLoJKgBTopePK8Q3z/u6YpwgBVnh+QAqK7yaOf9FZOM1KEiuB5QNvnJztHIKewAzL26sXs/1xOb5QlMD9QLnOM50e9ozjeGtDe2KZECyRBb9BdxKSoi6cJTNtSwHDd2j2M7BqYFIg3OpWRvRLQOkhPCuMdK1t8MGYy32UKIe/59+MfKgs7aayAmbeetWio/qf352nNDm/doQjhdjYE6ygcQ5p40el4xCQTx0yms/5mJ5BJk5KtOuDrdBgcExfmw788SgpiHCidBSMnWfz0YoFWgq2TtvLUFt3ASQ0mMY4ryEuAtuFdKVT3Mu6NuDDJiQjq+vlxDiV7RxcnWbA7m6ntUPfDw8jTk/j4KNzfqyPi/kabdniE0HfWs4Vh+t5cjihw7ey6xv3FJVHEs4teJXlUlGVUN+0Zua/WwB77eRmbBzMjh/mHbo9VNMyYkjcnLWn5VaaktuXZAfGJrN8sKlBKPtFwohjnrLrJf8gfxv8MqfpYFT/gN053jRf3fdVPuhp8Hrj95r4h1aYp0VsUTha+buHEis7FwNidSrCgmNcOmEBiGpp5yRmWfW6hWbuTVJi0piFN2IQyaRtt6jGMmTGCcZPOYNqRtvUzVjAm0VM4tGRBWHQDad4nKIvu0KZ+wJh1PzBuMUww7XZk7DhjN3RnEwOZg4aVaayr0QhBZu4U5YNAx0MyM8WcLgBL6GFcWlRST7dBBNgWcxITtIxzggmLhnGrdR6EQlEcY9ExUHlRgPNYZXEx6XpRkRoNI6crDJBxQIMppmE6VVQEobU5Z+PzgwA1LkTGBggzTgFgEvTusVJFSiagbYrIJMKrXJIwgSrDcQRGMFFhWKtlAyGYiMJi3cPGABVXJLAgFlOp2CEjUxVFx6vCT7gOpoGndGRUdIwZexwANeiSGYtOFjKdBrhFDYHMEAIAAA==") format("woff2"),url(//at.alicdn.com/t/font_1945190_rh9zxx0lil8.woff?t=1596695532718) format("woff"),url(//at.alicdn.com/t/font_1945190_rh9zxx0lil8.ttf?t=1596695532718) format("truetype"),url(//at.alicdn.com/t/font_1945190_rh9zxx0lil8.svg?t=1596695532718#iconfont) format("svg")\n  /* iOS 4.1- */}.iconfont[data-v-67c2107b]{font-family:iconfont;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-check[data-v-67c2107b]:before{content:"\\e6a8"}',""]),t.exports=e},f534:function(t,e,n){"use strict";n.r(e);var i=n("0359"),c=n("54e6");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("cd4e");var o,r=n("f0c5"),s=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"15192404",null,!1,i["a"],o);e["default"]=s.exports}}]);