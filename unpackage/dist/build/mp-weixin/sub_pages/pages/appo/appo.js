(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_pages/pages/appo/appo"],{8152:function(e,t,a){"use strict";a.r(t);var n=a("a138"),o=a("d4d1");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("fc56");var i=a("f0c5"),r=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"02916993",null,!1,n["a"],void 0);t["default"]=r.exports},"9f1a":function(e,t,a){},a138:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var n={uniForms:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(a.bind(null,"3b51"))},uniSection:function(){return a.e("uni_modules/uni-section/components/uni-section/uni-section").then(a.bind(null,"5ee0"))},uniFormsItem:function(){return a.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(a.bind(null,"740f"))},uniDataCheckbox:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(a.bind(null,"91b8"))},uniPopup:function(){return a.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(a.bind(null,"1d33"))},uniEasyinput:function(){return a.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(a.bind(null,"1697"))}},o=function(){var e=this.$createElement;this._self._c},s=[]},d4d1:function(e,t,a){"use strict";a.r(t);var n=a("d795"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},d795:function(e,t,a){"use strict";(function(e){var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("2eee")),s=n(a("c973")),i=a("9757"),r={data:function(){return{openid:e.getStorageSync("openid")||"",dateValue:0,dateRange:[[],["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]],dateRangeChosen:[[],[],[]],dateTodayData:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],firstDateChoosenIndex:0,secondDateChoosenIndex:0,thirdDateChoosenIndex:0,selectDate:"",stockType:"",stockAppoType:"",stockRange:[{value:1,text:"篮球"},{value:2,text:"足球"},{value:3,text:"游泳"},{value:4,text:"游泳"},{value:5,text:"游泳"},{value:6,text:"游泳"}],carValue:0,carRange:[{text:"机动车",value:0},{text:"非机动车",value:1}],groupValue:0,groupRange:[{value:0,text:"篮球"},{value:1,text:"足球"},{value:2,text:"游泳"}],platePlace:["沪","鲁","浙","苏","豫","皖","粤","辽","甘","闽","赣","冀","晋","京","津","渝","蒙","吉","黑","湘","鄂","桂","琼","川","贵","云","藏","陕","青","宁","新","港","澳","台"],plateTitle:"无",plateNum:"",plateArray:[],appoForData:{plate:"",supplier:"",brandName:"",goodsNum:"",goodsWeight:"",moreSupplier:{},moreBrandName:{}},supplierArray:[],brandNameArray:[],appoPeople:"",stockName:"",placeFrom:"",stockPlace:"",lotNum:"",entourageName:"",entouragePhone:"",entourageIdCard:"",entourageData:[]}},watch:{firstDateChoosenIndex:function(e){0===e?(this.dateRangeChosen[1]=JSON.parse(JSON.stringify(this.dateTodayData)),this.dateRangeChosen[2]=JSON.parse(JSON.stringify(this.dateTodayData)),this.dateRangeChosen[2].splice(0,1),this.dateRangeChosen[2].push("00:00")):(this.dateRangeChosen[1]=JSON.parse(JSON.stringify(this.dateRange[1])),this.dateRangeChosen[2]=JSON.parse(JSON.stringify(this.dateRange[2]))),this.secondDateChoosenIndex=0,this.thirdDateChoosenIndex=0,this.selectDate=this.dateRangeChosen[0][this.firstDateChoosenIndex]+" "+this.dateRangeChosen[1][this.secondDateChoosenIndex]+"-"+this.dateRangeChosen[2][this.thirdDateChoosenIndex],console.log("侦听器1"+this.selectDate)},secondDateChoosenIndex:function(e){if(0===this.firstDateChoosenIndex){var t=this.get_date(new Date," "),a=(parseInt(t.time.split(":")[0]),JSON.parse(JSON.stringify(this.dateTodayData)));this.dateRangeChosen[2]=a.splice(parseInt(e)),this.dateRangeChosen[2].splice(0,1),this.dateRangeChosen[2].push("00:00")}else{var n=JSON.parse(JSON.stringify(this.dateRange));this.dateRangeChosen[2]=n[2].splice(parseInt(e))}this.thirdDateChoosenIndex=0,console.log(this.thirdDateChoosenIndex),this.selectDate=this.dateRangeChosen[0][this.firstDateChoosenIndex]+" "+this.dateRangeChosen[1][this.secondDateChoosenIndex]+"-"+this.dateRangeChosen[2][this.thirdDateChoosenIndex],console.log("侦听器2"+this.selectDate)}},onLoad:function(t){console.log(t.type),this.dateRangeChosen=JSON.parse(JSON.stringify(this.dateRange));var a=this.get_date(new Date," "),n=parseInt(a.time.split(":")[0]);this.dateRangeChosen[1]=this.dateTodayData.splice(n),this.dateRangeChosen[2]=JSON.parse(JSON.stringify(this.dateRangeChosen[1])),this.dateRangeChosen[2].splice(0,1).push("00:00"),this.dateTodayData=JSON.parse(JSON.stringify(this.dateRangeChosen[1])),console.log(this.dateRangeChosen);for(var o=0;o<3;o++){var s=this.get_date(Date.now()+24*o*60*60*1e3,"-");this.dateRangeChosen[0].push(s.date)}switch(parseInt(t.type)){case 1:this.stockType="蔬菜",this.stockAppoType="蔬菜";break;case 2:this.stockType="果品",this.stockAppoType="果品";break;case 3:this.stockType="肉类",this.stockAppoType="肉类";break;case 4:this.stockType="干货",this.stockAppoType="干货";break;case 5:this.stockType="粮油",this.stockAppoType="粮油";break;case 6:this.stockType="国产冻品",this.stockAppoType="国产货";break;case 7:this.stockType="进口冷链",this.stockAppoType="进口货";break}this.selectDate=this.dateRangeChosen[0][0]+" "+this.dateRangeChosen[1][0]+"-"+this.dateRangeChosen[2][0],e.setNavigationBarTitle({title:this.stockType})},methods:{onGetLastestAppoData:function(){var t=this;return(0,s.default)(o.default.mark((function a(){var n,s,r,p,l,h,u,c,d,g,f,m,D,y;return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,i.getLastestAppoData)(t.openid);case 2:if(n=a.sent,s=n.data,console.log(s.Data),r=s.Data[0],r.preType==t.stockAppoType){for("机动车"==r.viecleType?t.carValue=0:t.carValue=1,t.plateArray=[],r.plateNo[0]&&(t.plateArray=r.plateNo),t.supplierArray=[],r.supplier[0]&&(t.supplierArray=r.supplier),t.brandNameArray=[],p=0;p<r.variety.length;p++)l=r.variety[p].split(" "),l[0]&&(h={brandName:l[0]},l[1]&&(l[1].indexOf("件")>0&&(u=l[1].slice(0,l[1].length-1),h["goodsNum"]=u),l[1].indexOf("kg")>0&&(c=l[1].slice(0,l[1].length-2),h["goodsWeight"]=c)),l[2]&&(l[2].indexOf("件")>0&&(d=l[2].slice(0,l[2].length-1),h["goodsNum"]=d),l[2].indexOf("kg")>0&&(g=l[2].slice(0,l[2].length-2),h["goodsWeight"]=g)),t.brandNameArray.push(h));for(console.log(t.brandNameArray),t.entourageData=[],f=0;f<r.crews.length;f++)m=r.crews[f].split(" "),m[0]&&(D={name:m[0]},m[1]&&(11==m[1].length&&(D["phone"]=m[1]),18==m[1].length&&(D["idCard"]=m[1])),m[2]&&(11==m[2].length&&(D["phone"]=m[2]),18==m[2].length&&(D["idCard"]=m[2])),t.entourageData.push(D),console.log(t.entourageData));t.stockAppoType=r.preType,t.placeFrom=r.source,t.stockPlace=r.stall,t.stockName=r.owner,y=t.selectDate,t.selectDate=t.compareDate(y,r.preTime),console.log("最终选择"+t.selectDate),t.appoPeople=r.crewCount,t.lotNum=r.batchNo}else r.dept?e.showModal({title:"获取失败",content:"上一条预报类型是".concat(r.dept),showCancel:!0,success:function(e){e.confirm,e.cancel}}):e.showModal({title:"获取失败",content:"暂无预报信息",showCancel:!0,success:function(e){e.confirm,e.cancel}});case 7:case"end":return a.stop()}}),a)})))()},resetData:function(){this.plateArray=[],this.supplierArray=[],this.brandNameArray=[],this.carValue=0,this.entourageData=[],this.placeFrom="",this.stockPlace="",this.stockName="",this.selectDate=this.dateRangeChosen[0][0]+" "+this.dateRangeChosen[1][0]+"-"+this.dateRangeChosen[2][0],this.appoPeople="",this.lotNum="",console.log("重置信息")},onSubmit:function(){var t=this;return(0,s.default)(o.default.mark((function a(){var n,s,r,p,l,h,u,c,d,g,f;return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(a.prev=0,6!==(t.plateTitle+t.plateNum).length&&7!==(t.plateTitle+t.plateNum).length||(t.plateArray.push(t.plateTitle+t.plateNum),t.plateTitle="",t.plateNum=""),t.appoForData.supplier&&(t.supplierArray.push(t.appoForData.supplier),t.appoForData.supplier=""),t.appoForData.brandName&&(t.brandNameArray.push({brandName:t.appoForData.brandName,goodsNum:t.appoForData.goodsNum,goodsWeight:t.appoForData.goodsWeight}),t.appoForData.brandName="",t.appoForData.goodsNum="",t.appoForData.goodsWeight=""),t.addEntourage(),n=[],s=0,r=0,p=0;p<t.brandNameArray.length;p++)l=t.brandNameArray[p].brandName,t.brandNameArray[p].goodsNum&&(console.log(t.brandNameArray[p].goodsNum),l=l+" "+t.brandNameArray[p].goodsNum+"件",s+=parseFloat(t.brandNameArray[p].goodsNum)),t.brandNameArray[p].goodsWeight&&(l=l+" "+t.brandNameArray[p].goodsWeight+"kg",r+=parseFloat(t.brandNameArray[p].goodsWeight)),n.push(l);for(console.log(n),h=[],u=0;u<t.entourageData.length;u++)c=t.entourageData[u].name,t.entourageData[u].phone&&11==t.entourageData[u].phone.length&&(c=c+" "+t.entourageData[u].phone),t.entourageData[u].idCard&&18==t.entourageData[u].idCard.length&&(c=c+" "+t.entourageData[u].idCard),h.push(c);if(console.log(h.join(";")),0!=t.plateArray.length||0!=t.carValue){a.next=17;break}e.showModal({title:"预报失败",content:"至少填写一个车牌号",showCancel:!0}),a.next=29;break;case 17:if(0!=t.brandNameArray.length){a.next=21;break}e.showModal({title:"预报失败",content:"至少填写一个品种",showCancel:!0}),a.next=29;break;case 21:return d=0,t.appoPeople&&(d=parseInt(t.appoPeople)),a.next=25,(0,i.upLoadAppoData)(t.openid,t.stockType,t.stockAppoType,t.carRange[t.carValue].text,t.plateArray.join(";"),t.supplierArray.join(";"),n.join(";"),s,r,t.placeFrom,t.stockPlace,t.stockName,t.selectDate,d,h.join(";"),t.lotNum);case 25:g=a.sent,f=g.data,console.log(f),e.showModal({title:"预报结果",content:f.Message,showCancel:!0,success:function(t){t.confirm,t.cancel;e.reLaunch({url:"/sub_pages/pages/appo_type/appo_type"})}});case 29:a.next=35;break;case 31:a.prev=31,a.t0=a["catch"](0),console.log("提交出错"),console.log(a.t0);case 35:case"end":return a.stop()}}),a,null,[[0,31]])})))()},addPlate:function(){var t=this.plateTitle+this.plateNum;t&&this.plateNum.length>=6?("无"!=this.plateTitle&&this.plateArray.push(t),this.plateTitle="无",this.plateNum="",console.log(this.plateArray)):e.showModal({title:"请填写完整车牌",content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}})},delTag:function(e){var t=this.plateArray.indexOf(e);this.plateArray.splice(t,1)},addSupplier:function(){this.appoForData.supplier?(this.supplierArray.push(this.appoForData.supplier),this.appoForData.supplier=""):e.showModal({title:"请填写供应商",content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}})},delSupplier:function(e){var t=this.supplierArray.indexOf(e);this.supplierArray.splice(t,1)},addBrandName:function(){this.appoForData.brandName?(this.brandNameArray.push({brandName:this.appoForData.brandName,goodsNum:this.appoForData.goodsNum,goodsWeight:this.appoForData.goodsWeight}),this.appoForData.brandName="",this.appoForData.goodsNum="",this.appoForData.goodsWeight=""):e.showModal({title:"请填写完整品名",content:"",showCancel:!0,success:function(e){e.confirm,e.cancel}})},delBrandTag:function(e){var t=this.brandNameArray.indexOf(e);this.brandNameArray.splice(t,1)},changeLog:function(e){console.log("change事件:",e)},addEntourage:function(){if(this.entourageName){var e={name:this.entourageName,id:Date.now()};this.entouragePhone&&11===this.entouragePhone.length&&(e["phone"]=this.entouragePhone),this.entourageIdCard&&18===this.entourageIdCard.length&&(e["idCard"]=this.entourageIdCard),this.entourageData.push(e),this.entourageIdCard="",this.entourageName="",this.entouragePhone=""}},delEntourage:function(e){var t=this.entourageData.findIndex((function(t){return t.id===e}));this.entourageData.splice(t,1)},openPlateTitle:function(){this.$refs.popup.open()},choosePlate:function(e){this.plateTitle=e,this.$refs.popup.close()},dateChange:function(e){console.log(e),0==e.detail.column?this.firstDateChoosenIndex=e.detail.value:1==e.detail.column?this.secondDateChoosenIndex=e.detail.value:2==e.detail.column&&(this.thirdDateChoosenIndex=e.detail.value),this.selectDate=this.dateRangeChosen[0][this.firstDateChoosenIndex]+" "+this.dateRangeChosen[1][this.secondDateChoosenIndex]+"-"+this.dateRangeChosen[2][this.thirdDateChoosenIndex]},get_date:function(e,t){var a=new Date(e),n=a.getFullYear(),o=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,s=a.getDate()<10?"0"+a.getDate():a.getDate(),i=a.getHours()<10?"0"+a.getHours():a.getHours(),r=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),p=a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds(),l=n+t+o+t+s,h=i+":"+r+":"+p,u={date:l,time:h,datetime:l+" "+h};return u},compareDate:function(e,t){console.log("比较时间"+e),console.log("比较时间"+t);var a=e.split(" "),n=t.split(" "),o=a[0].replace(/\-/g,"/"),s=n[0].replace(/\-/g,"/"),i=Date.parse(o),r=Date.parse(s);return i<r?t:e}}};t.default=r}).call(this,a("543d")["default"])},dbd6:function(e,t,a){"use strict";(function(e,t){var n=a("4ea4");a("695e");n(a("66fd"));var o=n(a("8152"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(o.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},fc56:function(e,t,a){"use strict";var n=a("9f1a"),o=a.n(n);o.a}},[["dbd6","common/runtime","common/vendor"]]]);