webpackJsonp([0],{EjOF:function(t,e,i){t.exports=i.p+"static/img/3.e6060ac.jpg"},LoyD:function(t,e,i){t.exports=i.p+"static/img/2.77436ab.jpg"},"Mvv+":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={name:"slideshow",props:{pictures:[Object,Array],interval:{type:Number,default:3e3}},data:function(){return{currentIndex:0,invId:null,isShow:!0,slideDirection:"toLeft"}},computed:{prevIndex:function(){return 0===this.currentIndex?this.pictures.length-1:this.currentIndex-1},nextIndex:function(){return this.currentIndex===this.pictures.length-1?0:this.currentIndex+1},transName:function(){return"toLeft"===this.slideDirection?["from-right","to-left"]:"toRight"===this.slideDirection?["from-left","to-right"]:void 0},imgScale:function(){var t=document.querySelector(".slideshow-pics img");return this.getImageNaturalSize(t).height/this.getImageNaturalSize(t).width}},mounted:function(){var t=this;window.onload=function(){t.setSlideshowHeight()},window.onresize=function(){var e=null;e&&clearTimeout(e),e=setTimeout(t.setSlideshowHeight,100)},this.setSlideshowHeight(),this.runInv()},methods:{setSlideshowHeight:function(){var t=document.querySelector("#slideshow").clientWidth;document.querySelector(".slideshow-pics").style.height=this.imgScale*t+"px"},getImageNaturalSize:function(t){var e={};if(t.naturalHeight&&t.naturalWidth)e.height=t.naturalHeight,e.width=t.naturalWidth;else{var i=new Img;i.src=t.src,e.height=i.naturalHeight,e.width=i.naturalWidth}return e},gotoPicByNextButton:function(t){this.slideDirection="toLeft",this.gotoPic(t)},gotoPicByPreButton:function(t){this.slideDirection="toRight",this.gotoPic(t)},gotoPicByTab:function(t){if(t>this.currentIndex&&(this.slideDirection="toLeft"),t<this.currentIndex&&(this.slideDirection="toRight"),t===this.currentIndex)return!1;this.gotoPic(t)},gotoPic:function(t){var e=this;this.isShow=!1,setTimeout(function(){e.currentIndex=t,e.isShow=!0},10)},runInv:function(){var t=this;this.slideDirection="toLeft",this.invId=setInterval(function(){t.gotoPic(t.nextIndex)},this.interval)},clearInv:function(){clearInterval(this.invId)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"slideshow"},on:{mouseleave:t.runInv,mouseenter:t.clearInv}},[i("div",{staticClass:"slideshow-pics"},[i("a",{attrs:{href:t.pictures[t.currentIndex].link}},[i("transition",{attrs:{name:t.transName[0]}},[t.isShow?i("img",{staticClass:"slide-img",attrs:{src:t.pictures[t.currentIndex].img_url,alt:"点击查看"}}):t._e()]),t._v(" "),i("transition",{attrs:{name:t.transName[1]}},[t.isShow?t._e():i("img",{staticClass:"slide-img",attrs:{src:t.pictures[t.currentIndex].img_url,alt:"点击查看"}})])],1)]),t._v(" "),i("a",{staticClass:"pre-button",on:{click:function(e){t.gotoPicByPreButton(t.prevIndex)}}},[t._v("previous")]),t._v(" "),i("a",{staticClass:"next-button",on:{click:function(e){t.gotoPicByNextButton(t.nextIndex)}}},[t._v("next")]),t._v(" "),i("div",{staticClass:"choose-button"},[i("ul",t._l(t.pictures,function(e,n){return i("li",{on:{click:function(e){t.gotoPicByTab(n)}}},[i("span",{class:{"choose-button-selected":n===t.currentIndex}},[t._v("\n\t\t\t\t    "+t._s(e.title)+"\n\t\t\t\t")])])}))])])},staticRenderFns:[]};var o={name:"App",components:{slideshowFinal:i("VU/8")(r,s,!1,function(t){i("QfFA")},"data-v-6d202304",null).exports},data:function(){return{pictures:[{title:"战争策略3D手游《战地指挥官》给你一场竞技盛宴",img_url:i("nvot"),link:"http://ku.u.360.cn/raiders.php?wzId=229281&soft_id=3842368"},{title:"《苍狼诀》百变时装系统蓄势待发",img_url:i("LoyD"),link:"http://ng.d.cn/canglangjue/news/detail_543294_1.html"},{title:"TapTap CJ 抢先知",img_url:i("EjOF"),link:"http://www.sohu.com/a/157624597_535014"}],interval:3e3}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("slideshow-final",{attrs:{pictures:this.pictures,interval:this.interval}})],1)},staticRenderFns:[]};var a=i("VU/8")(o,c,!1,function(t){i("Mvv+")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:a},template:"<App/>"})},QfFA:function(t,e){},nvot:function(t,e,i){t.exports=i.p+"static/img/1.07daff0.jpg"}},["NHnr"]);
//# sourceMappingURL=app.fc889ac9be0e5f20f278.js.map