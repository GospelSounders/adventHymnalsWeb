(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{c52c:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("breadcrumbs",{attrs:{links:e.links}}),e.rightSideBarP?a("rightSideBar",{attrs:{main:e.main,objType:e.objType}}):e._e(),a("q-table",{attrs:{grid:"","card-container-class":e.cardContainerClass,data:e.list,columns:e.columns,title:"System Settings",filter:e.filter,"row-key":"name","hide-header":"","hide-bottom":"","rows-per-page-options":[0]},scopedSlots:e._u([{key:"top-right",fn:function(){return[a("q-space"),a("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}},[a("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0},{key:"item",fn:function(t){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},[a("q-card",{staticClass:"bg-white"},[a("q-card-section",{staticClass:"text-left text-h6"},[a("strong",[e._v(e._s(t.row.name))])]),a("q-card-section",{staticClass:"flex flex-center"},[a("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary cursor-pointer q-hoverable",staticStyle:{width:"80vw"},on:{click:function(a){return e.selectSetting("click",t.row)}}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticStyle:{"font-size":"6em"},attrs:{name:t.row.icon,color:"white"}})],1),a("q-card-section",{staticClass:"flex flex-center text-white"},[a("div",[e._v(e._s(t.row.description))])])],1)],1)],1)],1)]}}])})],1)},n=[],s=a("2cbd"),r=a("4d6d");a("c2a1").default;var c={name:"setLandingPage",components:{breadcrumbs:s["a"],rightSideBar:r["default"]},beforeDestroy(){},data(){return{rightSideBarP:!1,objType:"",main:this,filter:"",links:[{label:"System",icon:"settings_suggest",to:"/system"},{label:"Settings",icon:"settings",to:"/system/settings"}],list:[{name:"Language",icon:"language",link:"language",description:"Change Language"},{name:"Custom Landing Page",icon:"home",link:"landing",description:"Change Your Landing page"}],columns:[{name:"name",label:"Name",field:"name"},{name:"description",label:"Description",field:"description"},{name:"icon",label:"Icon",field:"icon"}],url:""}},created(){},methods:{selectSetting(e,t){this.objType=t.link,this.rightSideBarP=!1,this.$nextTick((()=>this.rightSideBarP=!0))}},computed:{cardContainerClass(){if(this.$q.screen.gt.xs)return"grid-masonry grid-masonry--"+(this.$q.screen.gt.sm?"6":"4")}}},o=c,l=a("2877"),d=a("9989"),p=a("eaac"),g=a("2c91"),m=a("27f9"),u=a("0016"),f=a("f09f"),h=a("a370"),b=a("714f"),w=a("eebe"),y=a.n(w),S=Object(l["a"])(o,i,n,!1,null,null,null);t["default"]=S.exports;y()(S,"components",{QPage:d["a"],QTable:p["a"],QSpace:g["a"],QInput:m["a"],QIcon:u["a"],QCard:f["a"],QCardSection:h["a"]}),y()(S,"directives",{Ripple:b["a"]})}}]);