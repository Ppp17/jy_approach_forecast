(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_id_num/identity_id_num"],{"3e76":function(e,n,t){"use strict";t.r(n);var u=t("57bb"),r=t("c3e4");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("ab4c");var o=t("f0c5"),a=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"096f5ee2",null,!1,u["a"],void 0);n["default"]=a.exports},"455a":function(e,n,t){},"57bb":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"3b51"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"740f"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"1697"))}},r=function(){var e=this.$createElement;this._self._c},i=[]},9301:function(e,n,t){"use strict";var u=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("2eee")),i=u(t("c973")),o=t("9757"),a={data:function(){return{idInfo:{idName:"",idNumber:""},infoRules:{idNumber:{rules:[{required:!0,errorMessage:"请输入身份证号"},{minLength:18,maxLength:18,errorMessage:"身份证号长度位{maxLength}个字符"},{pattern:"^([1-6][1-9]|50)\\d{4}(18|19|20)\\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",errorMessage:"身份证格式错误"}]},idName:{rules:[{required:!0,errorMessage:"请输入姓名"}]}}}},methods:{onSubmit:function(){this.$refs.idInfoForm.validate().then(function(){var e=(0,i.default)(r.default.mark((function e(n){var t,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("表单数据信息：",n),e.next=3,(0,o.identityRealName)(n.idNumber,n.idName);case 3:t=e.sent,u=t.data,console.log(u);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log("表单错误信息：",e)}))}}};n.default=a},ab4c:function(e,n,t){"use strict";var u=t("455a"),r=t.n(u);r.a},c3e4:function(e,n,t){"use strict";t.r(n);var u=t("9301"),r=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},f5a4:function(e,n,t){"use strict";(function(e,n){var u=t("4ea4");t("695e");u(t("66fd"));var r=u(t("3e76"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["f5a4","common/runtime","common/vendor"]]]);