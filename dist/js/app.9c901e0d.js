(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1:function(t,e){},2:function(t,e){},"2b56":function(t,e,s){"use strict";var a=s("6f54"),r=s.n(a);r.a},"2c5f":function(t,e,s){},"342a":function(t,e,s){"use strict";var a=s("2c5f"),r=s.n(a);r.a},"403b":function(t,e,s){"use strict";var a=s("f3e8"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"grey lighten-4"},[s("v-content",{staticClass:"mx-4 mb-4"},[s("router-view")],1)],1)},n=[],o=s("2f62"),i={components:{},name:"App",data(){return{}},computed:{...Object(o["b"])(["loadDetails","loggingOutAuto"])},mounted(){const t=localStorage.getItem("adminToken");this.$store.state.adminToken=t;const e=localStorage.getItem("token"),s=localStorage.getItem("studentNum"),a=localStorage.getItem("expiryDate");if(!e||!a)return;if(new Date(a)<=new Date)return this.$store.state.token=null,this.$store.state.student=null,this.$store.state.studentNumber="BK",this.$store.state.students=null,this.$store.state.isAuth=!1,localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("studentNum"),void localStorage.clear();const r=localStorage.getItem("userId"),n=new Date(a).getTime()-(new Date).getTime();this.setAutoLogout(n),this.$store.state.isAuth=!0,this.$store.state.token=e,this.$store.state.userId=r,this.$store.state.studentNumber=s,this.loadDetails},methods:{setAutoLogout(t){setTimeout(()=>{this.$store.state.studentNumber="BK",this.$store.state.token=null,this.$store.state.adminToken=null,this.$store.state.isAuth=!1,this.$store.state.student=null,this.$store.state.students=null,localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),localStorage.removeItem("studentNum"),localStorage.clear()},t)}}},l=i,c=s("2877"),u=s("6544"),d=s.n(u),m=s("7496"),h=s("a75b"),p=Object(c["a"])(l,r,n,!1,null,null,null),v=p.exports;d()(p,{VApp:m["a"],VContent:h["a"]});var f=s("8c4f"),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[s("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),s("div",[s("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-forward")])]},proxy:!0}])})],1),s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{staticClass:"text-center",attrs:{color:"orangered",flat:"",justify:"center"}},[s("div",{attrs:{align:"center",justify:"center"}},[s("router-link",{staticClass:"router",attrs:{to:"/"}},[s("v-btn",{attrs:{color:"error"}},[t._v("LOGOUT NOW")])],1),s("h5",[t._v("PERSONAL ACCOUNT")])],1)])],1),s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[s("v-row",{attrs:{align:"center"}},[s("v-avatar",{attrs:{color:"indigo"}},[s("v-icon",{attrs:{dark:"",align:"left"}},[t._v("mdi-account-circle")])],1),s("h3",{staticClass:"float-right",attrs:{align:"center","ml-lg-4":"","ml-2":""}},[t._v(t._s(t.student.firstName))])],1)],1)],1),s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{staticClass:"text-center",attrs:{color:"white",flat:"",align:"center",justify:"center"}},[s("h3",{staticClass:"font-weight-black ",attrs:{align:"center",justify:"center"}},[t._v("Hello  "+t._s(t.student.firstName)+"  welcome to OUC_ZIM fund inquiry")]),s("br"),s("br"),s("br")])],1),s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{staticClass:"text-center",attrs:{color:"white",flat:"",align:"center",justify:"center"}},[s("h4",{staticClass:"font-weight-black red--text ",attrs:{align:"center",justify:"center"}},[t._v("Your total subscriptions balance is: "+t._s(t.student.payment)+" yuan only. ")]),s("br"),s("br"),s("br"),s("h3")])],1),t.isMember?s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{staticClass:"text-center",attrs:{color:"white",flat:"",align:"center",justify:"center"}},[s("h5",{staticClass:"font-weight-black ",attrs:{align:"center",justify:"center"}},[t._v(t._s(t.time)+" ")]),s("br"),s("br"),s("br"),s("h3")])],1):t._e()],1)],1)],1)],1)],1)},g=[],_={computed:{...Object(o["c"])(["student","isMember","time","payment"])},data(){return{items:[{text:"Dashboard",disabled:!0,href:"breadcrumbs_dashboard"},{text:"Students",disabled:!1,href:"breadcrumbs_link_1"},{text:"Financial Reports",disabled:!1,href:"breadcrumbs_link_2"}],students:[],payments:[],tabs:null,text:"Lorem ipsu"}}},x=_,y=(s("2b56"),s("8212")),k=s("2bc5"),C=s("8336"),w=s("b0af"),$=s("a523"),S=s("0e8f"),I=s("132d"),V=s("a722"),j=s("0fd9"),N=s("71d9"),O=Object(c["a"])(x,b,g,!1,null,null,null),T=O.exports;d()(O,{VAvatar:y["a"],VBreadcrumbs:k["a"],VBtn:C["a"],VCard:w["a"],VContainer:$["a"],VContent:h["a"],VFlex:S["a"],VIcon:I["a"],VLayout:V["a"],VRow:j["a"],VToolbar:N["a"]});var E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"financialreports"},[s("h1",{staticClass:"subheading grey--text"},[t._v("Projects")]),s("div",[s("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-forward")])]},proxy:!0}])})],1),s("div",{staticClass:"text-center"},[s("v-btn",{attrs:{rounded:"",color:"lighten-2 white--text primary mr-3 mx-0 mb-3",light:""},on:{click:t.loadPayments}},[t._v("Load Payments")])],1),s("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Student_ID")]),s("th",{staticClass:"text-left"},[t._v("Jan")]),s("th",{staticClass:"text-left"},[t._v("Feb")]),s("th",{staticClass:"text-left"},[t._v("Mar")]),s("th",{staticClass:"text-left"},[t._v("Apr")]),s("th",{staticClass:"text-left"},[t._v("May")]),s("th",{staticClass:"text-left"},[t._v("Jun")]),s("th",{staticClass:"text-left"},[t._v("Jul")]),s("th",{staticClass:"text-left"},[t._v("Aug")]),s("th",{staticClass:"text-left"},[t._v("Sept")]),s("th",{staticClass:"text-left"},[t._v("Oct")]),s("th",{staticClass:"text-left"},[t._v("Nov")]),s("th",{staticClass:"text-left"},[t._v("Dec")])])]),s("tbody",t._l(t.payments,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.studentID))]),s("td",[t._v(t._s(e.January))]),s("td",[t._v(t._s(e.February))]),s("td",[t._v(t._s(e.March))]),s("td",[t._v(t._s(e.April))]),s("td",[t._v(t._s(e.May))]),s("td",[t._v(t._s(e.June))]),s("td",[t._v(t._s(e.July))]),s("td",[t._v(t._s(e.August))]),s("td",[t._v(t._s(e.September))]),s("td",[t._v(t._s(e.October))]),s("td",[t._v(t._s(e.November))]),s("td",[t._v(t._s(e.December))])])})),0)]},proxy:!0}])})],1)},D=[],A={data(){return{items:[{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Students",disabled:!1,href:"breadcrumbs_link_1"},{text:"Financial Reports",disabled:!0,href:"breadcrumbs_link_2"}],isMember:!1,time:"",bk:"BK20170",post:"https://fundapi.herokuapp.com/v1/student/",student:0,students:[],payments:[],tabs:null,text:"Lorem ipsu",payment:{},firstName:"",lastName:"",major:"",pay:""}},methods:{searchStudent:async function(t){fetch(`https://fundapi.herokuapp.com/v1/student/${t}`).then(t=>t.json()).then(([t])=>{if(this.firstName=t.firstName,this.lastName=t.lastName,this.major=t.major,this.pay=t.payment,0===t.payment)this.time="According to records you are not part of the fund contact secretary for details";else{this.isMember=!0;const e=this.payment/30;this.time=1===e?"You have paid your subscriptions for only 1 month":`You have paid your subscriptions for ${t.payment/30} months`}})},loadPayments(){this.$http.get("https://fundapi.herokuapp.com/v1/payments/").then(t=>t.json()).then(t=>{const e=[];for(let s in t)e.push(t[s]);this.payments=e})},loadDetails(){this.$http.get("https://fundapi.herokuapp.com/v1/payments/").then(t=>t.json()).then(t=>{const e=[];for(let s in t)e.push(t[s]);this.students=e})},addPayment(t){this.$http.get(`https://fundapi.herokuapp.com/v1/student/${t}.json`)},getId(t){this.$http.post(`https://fundapi.herokuapp.com/v1/payments/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})}}},M=A,L=s("1f4f"),B=Object(c["a"])(M,E,D,!1,null,null,null),P=B.exports;d()(B,{VBreadcrumbs:k["a"],VBtn:C["a"],VIcon:I["a"],VSimpleTable:L["a"]});var F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[!t.status||0===t.status||200!==t.status&&401!==t.status?s("div",[s("v-parallax",{staticClass:"parallax",attrs:{height:"100%",dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[s("div",{staticClass:"text-center err"},[s("h1",[t._v(t._s(t.errorStatement))]),t.token?s("h3",{staticClass:"warning "},[t._v(t._s(t.head))]):t._e(),s("h5",{staticClass:"red--text"},[t._v("Check your network connection !!!")]),s("v-progress-linear",{attrs:{color:"red lighten-2","buffer-value":"0",stream:""}}),s("br"),s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"},on:{click:function(e){return t.refresh()}}},[t._v("Login")])],1)],1)])],1):t._e(),401===t.status?s("Error"):t._e(),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}})],1),t.students||200===t.status?s("div",{staticClass:"students"},[s("div"),t.students&&0!==t.status&&401!==t.status?s("div",{staticClass:"text-center"},[s("h1",{staticClass:"subheading primary--text"},[t._v("ADMIN PAGE")]),s("router-link",{attrs:{to:"/"}},[s("v-btn",{staticClass:"button",attrs:{rounded:"",color:"white--text primary"},on:{click:t.exiting}},[t._v("LOGOUT")])],1)],1):t._e(),t.students?s("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left red--text"},[t._v("First Name")]),s("th",{staticClass:"text-left red--text"},[t._v("Student_ID")]),s("th",{staticClass:"text-left red--text"},[t._v("Total amt paid")]),s("th",{staticClass:"text-left red--text"},[t._v("Topup")])])]),s("tbody",t._l(t.students,(function(e){return s("tr",{key:e.major},[s("td",[t._v(t._s(e.firstName))]),s("td",[t._v(t._s(e.studentID))]),s("td",[t._v(t._s(e.payment))]),s("td",[s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header"),s("v-expansion-panel-content",[s("h5",[t._v(t._s(e.studentID))]),s("v-row",{staticClass:"light--text"},[s("v-col",{attrs:{cols:"12",sm:"3"}},[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(s){return t.addThirty(e.id)}}},[t._v("\n            +30\n          ")])],1),s("v-col",{attrs:{cols:"12",sm:"3"}},[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(s){return t.addBig(e.id)}}},[t._v("\n            +120\n          ")])],1),e.payment>=30?s("v-col",{attrs:{cols:"12",sm:"3"}},[s("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(s){return t.subtractThirty(e.id)}}},[t._v("\n            -30\n          ")])],1):t._e(),e.payment>=120?s("v-col",{attrs:{cols:"12",sm:"3"}},[s("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(s){return t.subtractBig(e.id)}}},[t._v("\n            -120\n          ")])],1):t._e(),e.payment>=360?s("v-col",{attrs:{cols:"12",sm:"3"}},[s("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(s){return t.reset(e.id)}}},[t._v("\n            Reset\n          ")])],1):t._e()],1)],1)],1)],1)],1)])})),0)]},proxy:!0}],null,!1,374163999)}):t._e()],1):t._e()],1)},K=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",{staticClass:"light-blue darken-4",attrs:{fluid:""}},[s("v-card",{staticClass:"mx-auto profile",attrs:{"max-width":"600"}},[s("div",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[s("h1",{staticClass:"danger"},[t._v("ERROR!!!")]),s("h5",{staticClass:"font-italic danger"},[t._v("Name and password does not match, click the button below to login again!!")])]),s("div",{staticClass:"text-center signout pb-10"},[s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"},on:{click:function(e){return t.refresh()}}},[t._v("Refresh")])],1)],1)])],1),s("Footer")],1)},U=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{dark:"",padless:""}},[s("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[s("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v("\n        © "+t._s((new Date).getFullYear())+" | Developed by "),s("a",{attrs:{href:"https://codetrojans.com"}},[s("strong",[t._v("CodeTrojans")])]),t._v("\n        | Follow us on "),s("a",{attrs:{href:"https://facebook.com/codetrojans",target:"_blank"}},[s("strong",[t._v("Facebook")])]),t._v(" • \n        "),s("a",{attrs:{href:"https://codetrojans.com",target:"_blank"}},[s("strong",[t._v("Insatgram")])]),t._v(" • \n        "),s("a",{attrs:{href:"https://twitter.com/CodeTrojans",target:"_blank"}},[s("strong",[t._v("Twitter")])])])],1)],1)},G=[],Y=s("99d9"),W=s("553a"),q={},z=Object(c["a"])(q,J,G,!1,null,null,null),H=z.exports;d()(z,{VCard:w["a"],VCardText:Y["b"],VFooter:W["a"]});var Z={components:{Footer:H},methods:{refresh(){this.$store.state.status=null,localStorage.clear()}}},X=Z,Q=(s("62b2"),Object(c["a"])(X,R,U,!1,null,"6ecdbf12",null)),tt=Q.exports;d()(Q,{VApp:m["a"],VBtn:C["a"],VCard:w["a"],VContent:h["a"]});var et=s("8055"),st=s.n(et),at={components:{Error:tt},data(){return{items:[{text:"Dashboard",disabled:!1,href:"breadcrumbs_dashboard"},{text:"Students",disabled:!0,href:"breadcrumbs_link_1"},{text:"Financial Reports",disabled:!1,href:"breadcrumbs_link_2"}],isMember:!1,time:"",student:0,tabs:null,text:"Lorem ipsu",payment:{},firstName:"",lastName:"",major:"",pay:""}},mounted(){const t=JSON.parse(localStorage.getItem("students"));this.$store.state.students=t,t&&(this.$store.state.status=200),setTimeout(()=>{this.$store.state.errorStatement="",this.$store.state.head="OOPS! SOMETHING WENT WRONG."},5e3);const e=st()("https://fundapi.herokuapp.com");e.on("addition",t=>{"payment"===t.action&&this.load()})},computed:{...Object(o["c"])(["students","adminToken","secretId","status","students","errorStatement","head"]),...Object(o["b"])(["loadDetails"])},methods:{exiting(){localStorage.removeItem("studentNum"),this.$store.state.token=null,this.$store.state.isAuth=!1,this.$store.state.studentNumber="BK",localStorage.clear(),this.$store.state.student=null},refresh(){this.$store.state.status=null},load(){fetch("https://fundapi.herokuapp.com/v1/payments/",{headers:{Authorization:"Bearer "+this.$store.state.adminToken}}).then(t=>t.json()).then(t=>{const e=[];for(let a in t)e.push(t[a]);let s=[];s=e,this.$store.state.students=s})},reset(t){this.$http.post(`https://fundapi.herokuapp.com/v1/reset/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})},addThirty(t){this.$http.post(`https://fundapi.herokuapp.com/v1/payments/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})},addBig(t){this.$http.post(`https://fundapi.herokuapp.com/v1/payments100/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})},subtractThirty(t){this.$http.post(`https://fundapi.herokuapp.com/v1/subtract30/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})},subtractBig(t){this.$http.post(`https://fundapi.herokuapp.com/v1/subtract100/${t}`,{}).then(t=>{console.log(t)},t=>{console.log(t)})}}},rt=at,nt=(s("d6e4"),s("62ad")),ot=s("cd55"),it=s("49e2"),lt=s("c865"),ct=s("0393"),ut=s("8b9c"),dt=s("8e36"),mt=Object(c["a"])(rt,F,K,!1,null,"20d0142a",null),ht=mt.exports;d()(mt,{VBtn:C["a"],VCol:nt["a"],VExpansionPanel:ot["a"],VExpansionPanelContent:it["a"],VExpansionPanelHeader:lt["a"],VExpansionPanels:ct["a"],VParallax:ut["a"],VProgressLinear:dt["a"],VRow:j["a"],VSimpleTable:L["a"]});var pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("Navbar"),s("v-parallax",{staticClass:"parallax",attrs:{height:"100%",dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}}),s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("Profile")],1)],1)],1),s("Footer")],1)},vt=[],ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"70px",tile:""}},[s("v-toolbar",{attrs:{dense:""}},[s("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),s("v-toolbar-title",{staticClass:"text-uppercase grey--text ml-4"},[s("span",{staticClass:"ouc white--text primary lighten-2"},[t._v("OUC")]),s("span",{staticClass:"fund blue--text"},[t._v("Fund")])]),s("div",{staticClass:"flex-grow-1"}),s("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({staticClass:"lighten-2 white--text primary",attrs:{dark:""}},a),[t._v("\n          MENU\n          "),s("v-icon",{attrs:{right:""}},[t._v("fas fa-eye")])],1)]}}])},[s("v-list",{attrs:{dense:"",nav:""}},t._l(t.links,(function(e){return s("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1),s("v-navigation-drawer",{staticClass:"primary lighten-3",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title text-center"},[t._v("OUC_ZIM STUDENTS")]),s("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Supported by CodeTrojans")])],1)],1),s("v-divider"),s("v-layout",{attrs:{column:"","align-center":""}},[t._l(t.profile,(function(e){return s("v-list-item",{key:e.name,attrs:{router:"",to:e.route}},[s("h5",[t._v(t._s(e.name))])])})),s("v-flex",{staticClass:"mt-1"},[s("v-avatar",{attrs:{size:"100"}},[s("img",{staticClass:"text-lg-center",attrs:{src:"/avatar-1.png"}})])],1),s("v-list",{attrs:{dense:"",nav:""}},t._l(t.payments,(function(e){return s("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[s("v-list-item-icon",{staticClass:"ml-0 mr-0 mb-0"},[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.balance))])],1)],1)})),1),s("v-flex",{staticClass:"mt-2 mb-3"}),s("v-flex",{staticClass:"mt-2 mb-3"})],2),s("v-list",{attrs:{dense:"",nav:""}},t._l(t.links,(function(e){return s("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1),s("div",{staticClass:"text-center signout"},[s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"}},[t._v("EXIT")])],1)],1)],1)],1)},bt=[],gt={computed:{...Object(o["c"])(["student"])},data(){return{drawer:!1,links:[{icon:"contact_mail",text:"Support",route:"/support"},{icon:"dashboard",text:"Exit now",route:"/"}],payments:[{icon:"fas fa-yen-sign",balance:"Balance"}],profile:[{name:"Profile",route:""}]}}},_t=gt,xt=(s("342a"),s("5bc1")),yt=s("ce7e"),kt=s("8860"),Ct=s("da13"),wt=s("5d23"),$t=s("34c3"),St=s("e449"),It=s("f774"),Vt=s("2a7f"),jt=Object(c["a"])(_t,ft,bt,!1,null,"18052f1e",null),Nt=jt.exports;d()(jt,{VAppBarNavIcon:xt["a"],VAvatar:y["a"],VBtn:C["a"],VCard:w["a"],VDivider:yt["a"],VFlex:S["a"],VIcon:I["a"],VLayout:V["a"],VList:kt["a"],VListItem:Ct["a"],VListItemContent:wt["a"],VListItemIcon:$t["a"],VListItemSubtitle:wt["b"],VListItemTitle:wt["c"],VMenu:St["a"],VNavigationDrawer:It["a"],VToolbar:N["a"],VToolbarTitle:Vt["a"]});var Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.status&&0!==t.status&&401!==t.status&&200!==t.status?t._e():s("div",[t.status&&0!==t.status?t._e():s("div",[s("h1",[t._v(t._s(t.errorStatement))]),t.token?s("h3",{staticClass:"warning"},[t._v(t._s(t.head))]):t._e(),s("h5",{staticClass:"danger"},[t._v("check your network connection and click the button below!!!")]),s("v-progress-linear",{attrs:{color:"red lighten-2","buffer-value":"0",stream:""}}),s("br"),s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"},on:{click:function(e){return t.refresh()}}},[t._v("Login")])],1)],1),401===t.status?s("Error"):t._e(),200===t.status?s("v-card",{staticClass:"mx-auto profile",attrs:{"max-width":"600"}},[s("Subscriptions"),s("v-card-title"),s("v-card-subtitle",[s("router-link",{staticClass:"router",attrs:{to:"/"}},[s("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.exiting()}}},[t._v("LOGOUT NOW")])],1),s("h2",[t._v(" Hello, "+t._s(t.student.firstName))]),0===t.student.payment?s("a",{staticClass:"danger"},[t._v("Please pay your subscriptions due, to activate your account!!!")]):t._e(),0===t.student.payment?s("h5",[s("a",[t._v("Only active member can view more details about the fund, your name does not exist in OUC_ZIM fund system")])]):t._e(),t.student.payment>0?s("h4",{staticClass:"pt-2"},[t._v("Your total Subscriptions Balance is  ¥"+t._s(t.student.payment))]):t._e(),t.student.payment>0?s("h4",{staticClass:"pt-2"},[s("a",[t._v("Month(s) Subscribed: ")]),t._v(t._s(t.student.payment/30)),1===t.student.payment?s("a",[t._v(" month")]):s("a",[t._v(" months")]),t._v(" only")]):t._e(),s("h3",{staticClass:"pt-2"},[s("a",[t._v("Contact Secretary for more Details")])])],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[s("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),s("v-expand-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[s("v-divider"),s("v-card-text",[s("Subscriptions")],1)],1)])],1):t._e()],1),t.loading?s("div",[s("h1",[t._v("Loading....")])]):t._e()])},Tt=[],Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto text-center",attrs:{color:"primary lighten-2",dark:"","max-width":"600"}},[s("v-card-text",[s("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[s("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","line-width":"1","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n          $"+t._s(e.value)+"\n        ")]}}])})],1)],1)],1)},Dt=[],At={data:()=>({value:[423,446,675,510,590,610,760]})},Mt=At,Lt=s("8dd9"),Bt=s("7f2e"),Pt=Object(c["a"])(Mt,Et,Dt,!1,null,null,null),Ft=Pt.exports;d()(Pt,{VCard:w["a"],VCardText:Y["b"],VSheet:Lt["a"],VSparkline:Bt["a"]});var Kt={beforeCreate(){this.loading=!0},created(){this.loading=!0},beforeMount(){this.loading=!0;const t=JSON.parse(localStorage.getItem("student"));this.$store.state.student=t},mounted(){this.loading=!1;const t=localStorage.getItem("studentNum"),e=JSON.parse(localStorage.getItem("student"));this.$store.state.student=e,e&&(this.$store.state.status=200);const s=st()("https://fundapi.herokuapp.com");s.on("addition",e=>{"payment"===e.action&&this.search(t)}),setTimeout(()=>{this.$store.state.errorStatement="",this.$store.state.head="OOPS! SOMETHING WENT WRONG."},1e4)},components:{Subscriptions:Ft,Error:tt},computed:{...Object(o["c"])(["status","student","token","userId","wrongDetails","notExist","nameError","studentNumber","errorStatement","head"])},data:()=>({show:!1,loading:!1}),methods:{search(t){fetch(`https://fundapi.herokuapp.com/v1/student/${t}`,{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(t=>t.json()).then(([t])=>{if(localStorage.setItem("student",JSON.stringify(t)),console.log("Iam running every 3sec"),this.$store.state.student=t,this.$store.state.payment=t.payment,0===t.payment)this.$store.state.time="According to records you are not part of the fund contact secretary for details";else{this.$store.state.isMember=!0;const t=Math.floor(this.payment/30);this.$store.state.time=1===t?"You have paid your subscriptions for only 1 month":`You have paid your subscriptions for ${Math.floor(this.$store.state.payment/30)} months`}})},exiting(){localStorage.removeItem("studentNum"),this.$store.state.token=null,this.$store.state.isAuth=!1,this.$store.state.studentNumber="BK",localStorage.clear(),this.$store.state.student=null},refresh(){this.$store.state.status=null}}},Rt=Kt,Ut=(s("dacf"),s("0789")),Jt=s("2fa4"),Gt=Object(c["a"])(Rt,Ot,Tt,!1,null,"04157fd8",null),Yt=Gt.exports;d()(Gt,{VBtn:C["a"],VCard:w["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VDivider:yt["a"],VExpandTransition:Ut["a"],VIcon:I["a"],VProgressLinear:dt["a"],VSpacer:Jt["a"]});var Wt={components:{Navbar:Nt,Footer:H,Profile:Yt},computed:{...Object(o["c"])(["status"])}},qt=Wt,zt=(s("a447"),Object(c["a"])(qt,pt,vt,!1,null,"d1889234",null)),Ht=zt.exports;d()(zt,{VCol:nt["a"],VContainer:$["a"],VParallax:ut["a"],VRow:j["a"]});var Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",{staticClass:"light-blue darken-4",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"11",sm:"10",md:"6",xs:"10",lg:"4",xl:"3"}},[s("h1",{staticClass:"text-center home_header"},[s("span",{staticClass:"ouc white--text"},[t._v("OUC")]),s("span",{staticClass:"fund blue--text"},[t._v("Fund")])]),s("h2",{staticClass:"white--text text-center welcome_text"},[t._v("Welcome to OUC Zim Students Fund")]),s("v-card",{staticClass:"elevation-12 signinup"},[s("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("v-window-item",{attrs:{value:1}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-card-text",{staticClass:"mt-12"},[s("h2",{staticClass:"text-center white--text primary pa-4"},[t._v("\n                                            Sign in as User\n                                        ")]),s("v-form",[s("v-text-field",{attrs:{label:"Student Number",name:"studentId","prepend-icon":"person",type:"text",color:"primary",value:"studentNumber"},model:{value:t.studentNumber,callback:function(e){t.studentNumber=e},expression:"studentNumber"}}),s("v-text-field",{attrs:{label:"Password",id:"password","prepend-icon":"lock",type:"password",color:"primary",name:"password",value:"pwd"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),s("h4",{staticClass:"text-center mt-3",on:{click:function(e){t.step++}}},[t._v("Sign in as Admin")])],1),s("div",{staticClass:"text-center mt-3"},[s("router-link",{attrs:{to:"/home"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"},on:{click:function(e){return t.logIn()}}},[t._v("SIGN IN")])],1)],1)],1)],1)],1),s("v-window-item",{attrs:{value:2}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-card-text",{staticClass:"mt-12"},[s("h3",{staticClass:"text-center lighten-2 white--text primary pa-4"},[t._v("\n                                            Sign in as Admin\n                                        ")]),s("v-form",[s("v-text-field",{attrs:{label:"ADMIN ID",name:"adminId","prepend-icon":"person",type:"text",color:"primary",value:"adminId"},model:{value:t.adminId,callback:function(e){t.adminId=e},expression:"adminId"}}),s("v-text-field",{attrs:{label:"ADMIN KEY",id:"password","prepend-icon":"lock",type:"password",color:"primary",name:"adminKey",value:"adminKey"},model:{value:t.adminKey,callback:function(e){t.adminKey=e},expression:"adminKey"}})],1),s("h3",{staticClass:"text-center mt-3",on:{click:function(e){t.step--}}},[t._v("Sign in as User")])],1),s("div",{staticClass:"text-center mt-3"},[s("router-link",{attrs:{to:"/students"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"},on:{click:function(e){return t.adminLog()}}},[t._v("SIGN IN")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),s("Footer")],1)},Xt=[],Qt={components:{Footer:H},computed:{...Object(o["b"])(["loadDetails"]),...Object(o["c"])(["status","student","token","userId","wrongDetails","notExist","nameError","studentNumber"])},data(){return{step:1,props:{source:String},adminId:"BK",adminKey:"",pwd:"",studentNumber:"BK",isMember:!1,time:"",bk:"BK20170",students:[],payments:[],tabs:null,text:"Lorem ipsu",payment:{},firstName:"",lastName:"",major:"",pay:""}},methods:{setAutoLogout(t){setTimeout(()=>{this.$store.state.token=null,this.$store.state.isAuth=!1,localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),this.$store.state.out=!0},t)},logIn(){console.log(this.studentNumber),localStorage.setItem("studentNum",this.studentNumber),this.$http.post("https://fundapi.herokuapp.com/v1/login/",{studentId:this.studentNumber,password:this.pwd}).then(t=>{if(this.$store.state.status=201,422===t.status)throw this.$store.state.status=401,new Error("Validation failed!!!");if(200!==t.status&&201!==t.status)throw console.log("Error found"),this.$store.state.status=401,new Error("Could not authenticate you");return 200===t.status&&(this.$store.state.status=200),t.json()}).then(t=>{console.log(t),"passwordError"===t.status||0===t.status?this.$store.state.status=401:"passwordError"!==t.status&&(this.$store.state.status=200),"notExist"===t.status&&(this.$store.state.status=401),this.$store.state.token=t.token,this.$store.state.userId=t.userId,this.$store.state.isAuth=!0,localStorage.setItem("token",t.token),localStorage.setItem("userId",t.userId);const e=36e5,s=new Date((new Date).getTime()+e);return localStorage.setItem("expiryDate",s.toISOString()),this.setAutoLogout(e),t.token}).then(t=>{this.$store.state.wrongDetails=!1,this.searchStudent(this.studentNumber)}).catch(t=>{console.log(`err obj ${t}`),this.$store.state.status=0})},adminLog(){console.log(`${this.adminId} and    ${this.adminKey}`),this.$http.post("https://fundapi.herokuapp.com/v1/admin/",{adminId:this.adminId,adminKey:this.adminKey}).then(t=>{if(this.$store.state.status=201,422===t.status)throw this.$store.state.status=401,new Error("Validation failed!!!");if(200!==t.status&&201!==t.status)throw console.log("Error found"),this.$store.state.status=401,new Error("Could not authenticate you");return 200===t.status&&(this.$store.state.status=200),t.json()}).then(t=>{"passwordError"===t.status||0===t.status?this.$store.state.status=401:"passwordError"!==t.status&&(this.$store.state.status=200),"notExist"===t.status&&(this.$store.state.status=401),this.$store.state.adminToken=t.adminToken,this.$store.state.secretId=t.secretId,this.$store.state.isAuth=!0,localStorage.setItem("adminToken",t.adminToken),localStorage.setItem("secretId",t.secretId);const e=36e5,s=new Date((new Date).getTime()+e);return localStorage.setItem("expiryDate",s.toISOString()),this.setAutoLogout(e),t.adminToken}).then(t=>{this.loadDetails}).catch(t=>{console.log(t),this.$store.state.status=0})},searchStudent(t){fetch(`https://fundapi.herokuapp.com/v1/student/${t}`,{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(t=>t.json()).then(([t])=>{if(localStorage.setItem("student",JSON.stringify(t)),console.log("Iam running every 3sec"),this.$store.state.student=t,this.$store.state.payment=t.payment,0===t.payment)this.$store.state.time="According to records you are not part of the fund contact secretary for details";else{this.$store.state.isMember=!0;const t=Math.floor(this.payment/30);this.$store.state.time=1===t?"You have paid your subscriptions for only 1 month":`You have paid your subscriptions for ${Math.floor(this.$store.state.payment/30)} months`}})}}},te=Qt,ee=(s("403b"),s("4bd4")),se=s("8654"),ae=s("f665"),re=s("1e6c"),ne=Object(c["a"])(te,Zt,Xt,!1,null,"52871a8a",null),oe=ne.exports;d()(ne,{VApp:m["a"],VBtn:C["a"],VCard:w["a"],VCardText:Y["b"],VCol:nt["a"],VContent:h["a"],VForm:ee["a"],VRow:j["a"],VTextField:se["a"],VWindow:ae["a"],VWindowItem:re["a"]});var ie,le,ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-tabs",{staticClass:"elevation-2",attrs:{"background-color":"tea accent-4",dark:"",vertical:t.vertical},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tabs-slider"),t._l(t.tabs,(function(e){return s("v-tab",{key:e,attrs:{href:"#tab-"+e}},[t._v("\n      201 "+t._s(6+e)+"\n    ")])})),t._l(t.tabs,(function(e){return s("v-tab-item",{key:e,attrs:{value:"tab-"+e}},[s("v-card",{attrs:{flat:"",tile:""}},[s("v-card-text",[t._v(t._s(t.text))])],1)],1)}))],2)],1)},ue=[],de={data(){return{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",vertical:!0,tabs:2}}},me=de,he=s("71a3"),pe=s("c671"),ve=s("fe57"),fe=s("9a96"),be=Object(c["a"])(me,ce,ue,!1,null,null,null),ge=be.exports;d()(be,{VCard:w["a"],VCardText:Y["b"],VTab:he["a"],VTabItem:pe["a"],VTabs:ve["a"],VTabsSlider:fe["a"]});var _e={},xe=Object(c["a"])(_e,ie,le,!1,null,null,null),ye=xe.exports,ke=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",{staticClass:"light-blue darken-4",attrs:{fluid:""}},[s("v-card",{staticClass:"mx-auto profile",attrs:{"max-width":"600"}},[s("div",{staticClass:"pt-10",attrs:{align:"center",justify:"center"}},[s("h1",{staticClass:"danger"},[t._v("ERROR!!!")])]),s("div",{staticClass:"text-center signout pb-10"},[s("router-link",{attrs:{to:"/"}},[s("v-btn",{attrs:{rounded:"",color:"white--text primary"}},[t._v("Refresh")])],1)],1)])],1),s("Footer")],1)},Ce=[],we={components:{Footer:H}},$e=we,Se=(s("f381"),Object(c["a"])($e,ke,Ce,!1,null,"66d8a3f2",null)),Ie=Se.exports;d()(Se,{VApp:m["a"],VBtn:C["a"],VCard:w["a"],VContent:h["a"]}),a["a"].use(f["a"]);var Ve=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:oe},{path:"/error",name:"error",component:Ie},{path:"/home",name:"home",component:Ht},{path:"/dashboard",name:"dashboard",component:T},{path:"/financialreports",name:"financialreports",component:P},{path:"/students",name:"students",component:ht},{path:"/support",beforeEnter(){location.href="http://tawk.to/codetrojans"},name:"support",component:ye},{path:"/admin",name:"admin",component:ge}]}),je=s("28dd"),Ne=s("f309");s("5363"),s("d1e7"),s("15f5");a["a"].use(Ne["a"]);var Oe=new Ne["a"]({icons:{iconfont:"mdi",theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}}});a["a"].use(o["a"]);const Te=new o["a"].Store({state:{students:[],student:[],time:"",isMember:!1,payment:0,interval:1e3,pwd:"",studentNumber:"BK",token:"",status:"",userId:"",isAuth:!1,wrongDetails:!1,out:!1,stat:"",errorStatement:"Loading....",head:"",adminToken:"",secretId:""},actions:{loadDetails({commit:t}){fetch("https://fundapi.herokuapp.com/v1/payments/",{headers:{Authorization:"Bearer "+this.state.adminToken}}).then(t=>t.json()).then(e=>{const s=[];for(let t in e)s.push(e[t]);let a=[];a=s,localStorage.setItem("students",JSON.stringify(a)),console.log("Iam running from store"),t("SET_STUDENTS",a)})}},mutations:{SET_STUDENTS(t,e){t.students=e}}});a["a"].config.productionTip=!1,a["a"].use(je["a"]),new a["a"]({router:Ve,vuetify:Oe,store:Te,render:t=>t(v)}).$mount("#app")},"60c3":function(t,e,s){},"62b2":function(t,e,s){"use strict";var a=s("de75"),r=s.n(a);r.a},"6f54":function(t,e,s){},"748f":function(t,e,s){},"9a33":function(t,e,s){},a447:function(t,e,s){"use strict";var a=s("9a33"),r=s.n(a);r.a},a567:function(t,e,s){},d6e4:function(t,e,s){"use strict";var a=s("a567"),r=s.n(a);r.a},dacf:function(t,e,s){"use strict";var a=s("748f"),r=s.n(a);r.a},de75:function(t,e,s){},f381:function(t,e,s){"use strict";var a=s("60c3"),r=s.n(a);r.a},f3e8:function(t,e,s){}});
//# sourceMappingURL=app.9c901e0d.js.map