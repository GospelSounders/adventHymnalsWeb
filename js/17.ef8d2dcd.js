(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{eea6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"padding bg-grey-1"},[a("q-table",{attrs:{grid:"","card-container-class":e.cardContainerClass,data:e.list,columns:e.columns,filter:e.filter,"row-key":"name","hide-header":"","hide-bottom":"","rows-per-page-options":[0]},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-space"),a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0},{key:"item",fn:function(t){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},[a("q-card",{staticClass:"bg-white"},[a("q-card-section",{staticClass:"text-left text-h6"},[a("strong",[e._v(e._s(t.row.name))])]),a("q-card-section",{staticClass:"flex flex-center"},[a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary cursor-pointer q-hoverable",staticStyle:{width:"80vw"},on:{click:function(a){return e.selectApplication(t.row.link)}}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticStyle:{"font-size":"6em"},attrs:{name:t.row.icon,color:"white"}})],1),a("q-card-section",{staticClass:"flex flex-center text-white"},[a("div",[e._v(e._s(t.row.description))])])],1)],1)],1)],1)]}}])})],1)},s=[],n=(a("ddb0"),a("cf57"),a("310f"));const r=a("c2a1").default,c=a("1712").to,o=a("0924").default,l=a("20e6");var d={name:"home",components:{loginForm:n["a"]},data(){return{rightSidebarOpen:!0,checkedLoggedIn:!1,loggedIn:!1,list:[],filter:"",columns:[{name:"name",label:"Name",field:"name"},{name:"description",label:"Description",field:"description"},{name:"icon",label:"Icon",field:"icon"}]}},async created(){r.setSettings({TBURL:l["TB_URL"]}),r.setVue(this),r.showLoading();let[e,t]=await c(r.readUserData());r.hideLoading(),this.userData=t;let a=[];try{this.userData.organizations.map((e=>{a.includes(e.authority)||a.push(e.authority)}))}catch(i){}a.push(this.userData.authority),this.list=o.home,this.list=this.list.filter((e=>{let t=e.children;try{return t=t.filter((e=>{let t=e.authorities;return t.some((e=>a.includes(e)))})),t.length>0}catch(i){return!0}}))},methods:{selectApplication(e){window.location.assign(e)}},computed:{cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")},rightSideBarSize(){return this.$q.screen.lt.xs||this.$q.screen.lt.sm||this.$q.screen.lt.md?document.getElementsByTagName("body")[0].clientWidth:.75*document.getElementsByTagName("body")[0].clientWidth}}},p=d,u=a("2877"),h=a("9989"),m=a("eaac"),f=a("2c91"),g=a("27f9"),w=a("0016"),b=a("f09f"),y=a("a370"),q=a("714f"),x=a("eebe"),C=a.n(x),v=Object(u["a"])(p,i,s,!1,null,null,null);t["default"]=v.exports;C()(v,"components",{QPage:h["a"],QTable:m["a"],QSpace:f["a"],QInput:g["a"],QIcon:w["a"],QCard:b["a"],QCardSection:y["a"]}),C()(v,"directives",{Ripple:q["a"]})}}]);