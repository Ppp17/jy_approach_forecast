(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_id_num/identity_id_num"],{53:function(n,e,t){"use strict";(function(n){t(5);r(t(4));var e=r(t(54));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},54:function(n,e,t){"use strict";t.r(e);var r=t(55),u=t(57);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t(59);var i,s=t(11),a=Object(s["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"a1ad43f8",null,!1,r["components"],i);a.options.__file="sub_pages/pages/identity_id_num/identity_id_num.vue",e["default"]=a.exports},55:function(n,e,t){"use strict";t.r(e);var r=t(56);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},56:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,100))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,116))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,140))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var n=this,e=n.$createElement;n._self._c},o=!1,i=[];u._withStripped=!0},57:function(n,e,t){"use strict";t.r(e);var r=t(58),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},58:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(18)),u=t(21);function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,r,u,o,i){try{var s=n[o](i),a=s.value}catch(c){return void t(c)}s.done?e(a):Promise.resolve(a).then(r,u)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function s(n){i(o,r,u,s,a,"next",n)}function a(n){i(o,r,u,s,a,"throw",n)}s(void 0)}))}}var a={data:function(){return{idInfo:{idName:"",idNumber:""},infoRules:{idNumber:{rules:[{required:!0,errorMessage:"请输入身份证号"},{minLength:18,maxLength:18,errorMessage:"身份证号长度位{maxLength}个字符"},{pattern:"^([1-6][1-9]|50)\\d{4}(18|19|20)\\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",errorMessage:"身份证格式错误"}]},idName:{rules:[{required:!0,errorMessage:"请输入姓名"}]}}}},methods:{onSubmit:function(){this.$refs.idInfoForm.validate().then(function(){var n=s(r.default.mark((function n(e){var t,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("表单数据信息：",e),n.next=3,(0,u.identityRealName)(e.idNumber,e.idName);case 3:t=n.sent,o=t.data,console.log(o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){console.log("表单错误信息：",n)}))}}};e.default=a},59:function(n,e,t){"use strict";t.r(e);var r=t(60),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},60:function(n,e,t){}},[[53,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub_pages/pages/identity_id_num/identity_id_num.js.map