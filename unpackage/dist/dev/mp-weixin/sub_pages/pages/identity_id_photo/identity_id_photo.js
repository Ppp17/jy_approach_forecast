(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_id_photo/identity_id_photo"],{61:function(e,n,t){"use strict";(function(e){t(5);o(t(4));var n=o(t(62));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},62:function(e,n,t){"use strict";t.r(n);var o=t(63),a=t(65);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t(67);var c,r=t(11),s=Object(r["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,"4da68e5c",null,!1,o["components"],c);s.options.__file="sub_pages/pages/identity_id_photo/identity_id_photo.vue",n["default"]=s.exports},63:function(e,n,t){"use strict";t.r(n);var o=t(64);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},64:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,140))},uniDataCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null,123))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement;e._self._c},i=!1,c=[];a._withStripped=!0},65:function(e,n,t){"use strict";t.r(n);var o=t(66),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},66:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t(18)),a=t(21);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,n,t,o,a,i,c){try{var r=e[i](c),s=r.value}catch(u){return void t(u)}r.done?n(s):Promise.resolve(s).then(o,a)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var i=e.apply(n,t);function r(e){c(i,o,a,r,s,"next",e)}function s(e){c(i,o,a,r,s,"throw",e)}r(void 0)}))}}var s={data:function(){return{userAgreement:[0],agreement:[{text:"我已同意并接受《用户服务协议》及《隐私政策》",value:0}],arrlength:1,firstUpLoad:!0,tempFilePathFace:"",tempFilePathNational:"",idInfo:{userNo:"",idName:"",idNumber:"",addr:"",backFlag:!1,faceFlag:!1}}},onLoad:function(e){this.idInfo.userNo=e.userNo,e.userName&&(this.idInfo.idName=e.userName,this.idInfo.idNumber=e.credNo,this.firstUpLoad=!1),console.log(e)},methods:{changeAgreement:function(e){console.log(e),console.log(e.detail.data.length),this.arrlength=e.detail.data.length},showPrivary:function(){e.showLoading({title:"加载中",mask:!0}),e.downloadFile({url:"https://pass.jysc.sh.cn/AppFiles/005newPrivacy.pdf",success:function(n){var t=n.tempFilePath;n.statusCode;e.openDocument({filePath:t,success:function(n){e.hideLoading()},fail:function(n){e.hideLoading()}})},fail:function(n){e.hideLoading(),e.showModal({title:"fail",content:n})}})},upLoadImg:function(n){var t=this;return r(o.default.mark((function i(){var c;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(2!=n||""!=t.idInfo.idNumber){o.next=4;break}e.showModal({title:"请先上传人像面",content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}}),o.next=9;break;case 4:return o.next=6,(0,a.upLoadPic)();case 6:c=o.sent,1==n?t.tempFilePathFace=c.tempFilePaths[0]:2==n&&(t.tempFilePathNational=c.tempFilePaths[0]),e.uploadFile({url:"https://pass.jysc.sh.cn/App/OCR",filePath:1==n?t.tempFilePathFace:t.tempFilePathNational,name:1==n?"back":"front"+t.idInfo.idNumber,success:function(o){var a=o.statusCode,i=o.data;try{if(200==a){var c=JSON.parse(i);if(console.log(c),0!=c.Code){switch(n){case 1:t.tempFilePathFace="";break;case 2:t.tempFilePathNational="";break}e.showModal({title:"Fail:"+c.Code,content:c.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}})}else 1==n?(t.idInfo.idName=c.Data.name,t.idInfo.idNumber=c.Data.credNo,t.idInfo.addr=c.Data.addr,t.idInfo.faceFlag=!0,console.log(t.idInfo)):2==n&&(t.idInfo.backFlag=!0)}else{switch(n){case 1:t.tempFilePathFace="";break;case 2:t.tempFilePathNational="";break}e.showModal({title:"Fail",content:"网络异常",showCancel:!0,success:function(e){e.confirm,e.cancel}})}}catch(r){console.log("出错了"),e.showModal({title:"出错了",content:r,showCancel:!0,success:function(e){e.confirm,e.cancel}})}},fail:function(e){console.log(e)}});case 9:case"end":return o.stop()}}),i)})))()},onSubmit:function(){var n=this;return r(o.default.mark((function t(){var i,c;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(n.idInfo),1!=n.arrlength){t.next=14;break}if(!n.idInfo.faceFlag||!n.idInfo.backFlag){t.next=11;break}return t.next=5,(0,a.saveRealName)(n.idInfo.userNo,n.idInfo.idNumber,n.idInfo.idName,n.idInfo.addr);case 5:i=t.sent,c=i.data,console.log(c),0==c.Code?e.showModal({title:"成功",content:c.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}}):e.showModal({title:"Fail",content:c.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}}),t.next=12;break;case 11:e.showModal({title:"上传失败",content:"请上传所有图片",showCancel:!0,success:function(e){e.confirm,e.cancel}});case 12:t.next=15;break;case 14:e.showModal({title:"fail",content:"请先勾选用户协议"});case 15:case"end":return t.stop()}}),t)})))()}}};n.default=s}).call(this,t(1)["default"])},67:function(e,n,t){"use strict";t.r(n);var o=t(68),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},68:function(e,n,t){}},[[61,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/sub_pages/pages/identity_id_photo/identity_id_photo.js.map