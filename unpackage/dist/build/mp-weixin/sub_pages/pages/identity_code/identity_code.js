(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/identity_code/identity_code"],{"0244":function(t,e,n){"use strict";n.r(e);var c=n("f7d0"),o=n("d4f0");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("8cf2");var f=n("f0c5"),i=Object(f["a"])(o["default"],c["b"],c["c"],!1,null,"a574254a",null,!1,c["a"],void 0);e["default"]=i.exports},"208f":function(t,e,n){"use strict";(function(t,e){var c=n("4ea4");n("695e");c(n("66fd"));var o=c(n("0244"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"4e5f":function(t,e,n){"use strict";(function(t){var c=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("ccbb")),r={data:function(){return{codeUrl:"",QRwidth:.6*t.getSystemInfoSync().windowWidth,QRheight:.6*t.getSystemInfoSync().windowWidth}},onLoad:function(t){console.log(t),this.codeUrl="https://pass.jysc.sh.cn/Auth/".concat(t.userNo),this.qrFun()},methods:{qrFun:function(){o.default.make({canvasId:"qrcode",componentInstance:this,text:this.codeUrl,size:this.QRwidth,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",errorCorrectLevel:o.default.errorCorrectLevel.H,success:function(t){}})}}};e.default=r}).call(this,n("543d")["default"])},"8cf2":function(t,e,n){"use strict";var c=n("94f9"),o=n.n(c);o.a},"94f9":function(t,e,n){},d4f0:function(t,e,n){"use strict";n.r(e);var c=n("4e5f"),o=n.n(c);for(var r in c)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(r);e["default"]=o.a},f7d0:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var c=function(){var t=this.$createElement;this._self._c},o=[]}},[["208f","common/runtime","common/vendor"]]]);