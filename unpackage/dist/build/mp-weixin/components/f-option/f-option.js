(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/f-option/f-option"],{"0b00":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"f-option",props:{userNo:{type:String,default:""},credNo:{type:String,default:""},name:{type:String,default:""}},data:function(){return{optionBtn:function(e){switch(e){case 1:t.navigateTo({url:"/sub_pages/pages/appo_type/appo_type"});break;case 2:t.navigateTo({url:"/sub_pages/pages/identity_id_photo/identity_id_photo?userNo=".concat(this.userNo,"&userName=").concat(this.name,"&credNo=").concat(this.credNo)});break;case 3:t.showModal({title:"待开发",content:"请等待版本更新",showCancel:!0,success:function(t){t.confirm,t.cancel}});break;case 4:this.credNo?t.navigateTo({url:"/sub_pages/pages/identity_code/identity_code?userNo=".concat(this.userNo)}):t.showModal({title:"请先注册申请",content:"",showCancel:!0,success:function(t){t.confirm,t.cancel}});break;case 5:t.showModal({title:"优惠活动已结束",content:"",showCancel:!0,success:function(t){t.confirm,t.cancel}});break}}}},methods:{}};e.default=n}).call(this,n("543d")["default"])},"234a":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},c=[]},7207:function(t,e,n){"use strict";n.r(e);var o=n("0b00"),c=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=c.a},"83fc":function(t,e,n){},"99f8":function(t,e,n){"use strict";n.r(e);var o=n("234a"),c=n("7207");for(var a in c)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("b816");var i=n("f0c5"),s=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"359f6470",null,!1,o["a"],void 0);e["default"]=s.exports},b816:function(t,e,n){"use strict";var o=n("83fc"),c=n.n(o);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/f-option/f-option-create-component',
    {
        'components/f-option/f-option-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("99f8"))
        })
    },
    [['components/f-option/f-option-create-component']]
]);
