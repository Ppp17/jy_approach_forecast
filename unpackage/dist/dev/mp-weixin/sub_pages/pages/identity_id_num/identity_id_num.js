(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_id_num/identity_id_num"],{74:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var i=o(t(75));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},75:function(e,n,t){"use strict";t.r(n);var o=t(76),i=t(78);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(80);var a,s=t(32),u=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"a1ad43f8",null,!1,o["components"],a);u.options.__file="sub_pages/pages/identity_id_num/identity_id_num.vue",n["default"]=u.exports},76:function(e,n,t){"use strict";t.r(n);var o=t(77);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},77:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uniSection:function(){return t.e("uni_modules/uni-section/components/uni-section/uni-section").then(t.bind(null,134))},uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,121))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,141))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,167))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},r=!1,a=[];i._withStripped=!0},78:function(e,n,t){"use strict";t.r(n);var o=t(79),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},79:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t(39)),r=o(t(41)),a=t(42),s={data:function(){return{userAgreement:[0],agreement:[{text:"我已同意并接受《用户服务协议》及《隐私政策》",value:0}],arrlength:1,openid:e.getStorageSync("openid")||"",idInfo:{idName:"",idNumber:"",phone:"",code:""},codeBtn:"获取验证码",isDisabled:!1,infoRules:{idName:{rules:[{required:!0,errorMessage:"请输入姓名"}]},phone:{rules:[{required:!0,errorMessage:"请输入手机号"},{minLength:11,maxLength:11,errorMessage:"手机号长度为{maxLength}个字符"},{pattern:"^0?(13|14|15|17|18|19)[0-9]{9}$",errorMessage:"手机号格式错误"}]},code:{rules:[{required:!0,errorMessage:"输入验证码"},{minLength:6,maxLength:6,errorMessage:"验证码长度为{maxLength}个字符"}]}}}},created:function(){""===this.openid&&this.getOpenid()},methods:{getOpenid:function(){var n=this;e.showLoading({title:"加载中",mask:!0}),e.login({provider:"weixin",success:function(){var t=(0,r.default)(i.default.mark((function t(o){var r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getUserOpenid)(o.code);case 2:r=t.sent,console.log(r),0==r.data.Code&&(n.openid=r.data.Data.openid,e.setStorage({key:"openid",data:r.data.Data.openid,success:function(e){console.log(e)},fail:function(e){}})),e.hideLoading();case 6:case"end":return t.stop()}}),t)})));function o(e){return t.apply(this,arguments)}return o}(),fail:function(n){console.log(n),e.hideLoading()}})},showPrivary:function(){e.showLoading({title:"加载中",mask:!0}),e.downloadFile({url:"https://pass.jysc.sh.cn/AppFiles/005newPrivacy.pdf",success:function(n){var t=n.tempFilePath;n.statusCode;e.openDocument({filePath:t,success:function(n){e.hideLoading()},fail:function(n){e.hideLoading()}})},fail:function(n){e.hideLoading(),e.showModal({title:"fail",content:n})}})},changeAgreement:function(e){console.log(e),console.log(e.detail.data.length),this.arrlength=e.detail.data.length},onSubmit:function(){var n=this;return(0,r.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=n.arrlength){t.next=3;break}return e.showModal({title:"请先勾选协议",content:""}),t.abrupt("return",!1);case 3:n.$refs.idInfoForm.validate().then(function(){var t=(0,r.default)(i.default.mark((function t(o){var r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("表单数据信息：",o),t.next=3,(0,a.eventRegister)(n.idInfo.phone,n.idInfo.idName,"",n.openid,n.idInfo.code);case 3:r=t.sent,console.log(r),200===r.statusCode?(e.showModal({title:r.data.message,content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}}),n.idInfo.phone="",n.idInfo.idName="",n.idInfo.idNumber="",n.idInfo.code=""):e.showModal({title:"网络异常"+r.statusCode,content:"",showCancel:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("表单错误信息：",e)}));case 4:case"end":return t.stop()}}),t)})))()},getCode:function(){var n=this;return(0,r.default)(i.default.mark((function t(){var o,r,s,u;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hideKeyboard(),/^0?(13|14|15|17|18|19)[0-9]{9}$/.test(n.idInfo.phone)){t.next=4;break}return e.showToast({title:"手机号格式错误",icon:"error",duration:2e3}),t.abrupt("return",!1);case 4:return o=60,n.isDisabled=!0,r=setInterval((function(){o>0?(o--,n.codeBtn="重新获取(".concat(o,")")):(n.codeBtn="获取验证码",n.isDisabled=!1,clearInterval(r)),console.log("正在计时")}),1e3),t.next=9,(0,a.codeMessage)(n.idInfo.phone);case 9:s=t.sent,u=s.data,e.showToast({title:u.message,icon:"none",duration:2e3});case 12:case"end":return t.stop()}}),t)})))()}}};n.default=s}).call(this,t(2)["default"])},80:function(e,n,t){"use strict";t.r(n);var o=t(81),i=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},81:function(e,n,t){}},[[74,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub_pages/pages/identity_id_num/identity_id_num.js.map