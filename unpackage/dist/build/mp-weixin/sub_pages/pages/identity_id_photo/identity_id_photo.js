(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_id_photo/identity_id_photo"],{"2e15":function(e,n,t){"use strict";var a=t("cfc2"),c=t.n(a);c.a},6338:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var a={uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"1697"))}},c=function(){var e=this,n=e.$createElement;e._self._c},o=[]},b5b9:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("a34a")),c=t("9757");function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,c,o,i){try{var s=e[o](i),u=s.value}catch(r){return void t(r)}s.done?n(u):Promise.resolve(u).then(a,c)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var o=e.apply(n,t);function s(e){i(o,a,c,s,u,"next",e)}function u(e){i(o,a,c,s,u,"throw",e)}s(void 0)}))}}var u={data:function(){return{tempFilePathFace:"",tempFilePathNational:"",idInfo:{userNo:"",idName:"",idNumber:"",backFlag:!1,faceFlag:!1}}},onLoad:function(e){this.idInfo.userNo=e.userNo,console.log(this.idInfo.userNo)},methods:{upLoadImg:function(n){var t=this;return s(a.default.mark((function o(){var i;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(2!=n||""!=t.idInfo.idNumber){a.next=4;break}e.showModal({title:"请先上传人像面",content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}}),a.next=9;break;case 4:return a.next=6,(0,c.upLoadPic)();case 6:i=a.sent,1==n?t.tempFilePathFace=i.tempFilePaths[0]:2==n&&(t.tempFilePathNational=i.tempFilePaths[0]),e.uploadFile({url:"https://pass.jysc.sh.cn/App/OCR",filePath:1==n?t.tempFilePathFace:t.tempFilePathNational,name:1==n?"back":"front"+t.idInfo.idNumber,success:function(a){var c=a.statusCode,o=a.data;try{if(200==c){var i=JSON.parse(o);if(console.log(i),0!=i.Code){switch(n){case 1:t.tempFilePathFace="";break;case 2:t.tempFilePathNational="";break}e.showModal({title:"Fail:"+i.Code,content:i.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}})}else 1==n?(t.idInfo.idName=i.Data.name,t.idInfo.idNumber=i.Data.credNo,t.idInfo.faceFlag=!0,console.log(t.idInfo)):2==n&&(t.idInfo.backFlag=!0)}else{switch(n){case 1:t.tempFilePathFace="";break;case 2:t.tempFilePathNational="";break}e.showModal({title:"Fail",content:"网络异常",showCancel:!0,success:function(e){e.confirm,e.cancel}})}}catch(s){console.log("出错了"),e.showModal({title:"出错了",content:s,showCancel:!0,success:function(e){e.confirm,e.cancel}})}},fail:function(e){console.log(e)}});case 9:case"end":return a.stop()}}),o)})))()},onSubmit:function(){var n=this;return s(a.default.mark((function t(){var o,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(n.idInfo),!n.idInfo.faceFlag||!n.idInfo.backFlag){t.next=10;break}return t.next=4,(0,c.saveRealName)(n.idInfo.userNo,n.idInfo.idNumber,n.idInfo.idName);case 4:o=t.sent,i=o.data,console.log(i),0==i.Code?e.showModal({title:"成功",content:i.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}}):e.showModal({title:"Fail",content:i.Message,showCancel:!0,success:function(e){e.confirm,e.cancel}}),t.next=11;break;case 10:e.showModal({title:"上传失败",content:"请上传所有图片",showCancel:!0,success:function(e){e.confirm,e.cancel}});case 11:case"end":return t.stop()}}),t)})))()}}};n.default=u}).call(this,t("543d")["default"])},c2c5:function(e,n,t){"use strict";t.r(n);var a=t("b5b9"),c=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=c.a},cd45:function(e,n,t){"use strict";t.r(n);var a=t("6338"),c=t("c2c5");for(var o in c)"default"!==o&&function(e){t.d(n,e,(function(){return c[e]}))}(o);t("2e15");var i,s=t("f0c5"),u=Object(s["a"])(c["default"],a["b"],a["c"],!1,null,"7be91f36",null,!1,a["a"],i);n["default"]=u.exports},cfc2:function(e,n,t){},ec7d:function(e,n,t){"use strict";(function(e){t("695e");a(t("66fd"));var n=a(t("cd45"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["ec7d","common/runtime","common/vendor"]]]);