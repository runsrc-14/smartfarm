(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a394e81"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),r=a("58df"),s=a("7e2b"),n=a("3206");e["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5b36":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-col",[i("v-card",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tutorials,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[i("h6",[t._v("เจ้าหน้าที่")])]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{small:"",color:"teal",dark:""}},"v-btn",r,!1),a),[t._v(" เพิ่มข้อมูล ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("v-row",{attrs:{justify:"space-between"}},[i("v-btn",{attrs:{color:"warning"}},[t._v(t._s(t.formTitle))])],1)],1),i("v-card-text",[i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-row",[i("v-col",{ref:"form",attrs:{cols:"12",sm:"6",md:"4","lazy-validation":""}},[i("v-text-field",{attrs:{rules:t.rul.userRules,label:"ชื่อผู้ใช้งาน",required:""},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{rules:t.rul.emailRules,label:"อีเมลล์",required:""},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{rules:t.rul.firstname,label:"ชื่อ",required:""},model:{value:t.editedItem.firstname,callback:function(e){t.$set(t.editedItem,"firstname",e)},expression:"editedItem.firstname"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{rules:t.rul.lastname,label:"นามสกุล",required:""},model:{value:t.editedItem.lastname,callback:function(e){t.$set(t.editedItem,"lastname",e)},expression:"editedItem.lastname"}})],1),-1==t.editedIndex?i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{rules:t.rul.password,type:"password",label:"รหัสผ่าน",required:""},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}})],1):t._e(),i("v-row",[t.error?i("v-list-item",[i("v-icon",{attrs:{color:"error",text:"",left:""}},[t._v("info")]),i("v-list-item-title",{staticClass:"red--text"},[t._v(" "+t._s(t.error)+" ")])],1):t._e()],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" ยกเลิก ")]),i("v-btn",{attrs:{disabled:!t.valid||t.editedItem.username<1||t.editedItem.email<1,color:"blue darken-1",text:""},on:{click:function(e){return t.save(t.editedItem.id)}}},[t._v(" บันทึก ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"lime lighten-2"},on:{click:function(e){return t.editItem(a)}}},[t._v("mdi-pencil")]),i("v-icon",{attrs:{small:"",color:"orange darken-3"},on:{click:function(e){return t.deleteTutorial(a.id,a.username)}}},[t._v("mdi-delete")]),i("v-snackbar",{attrs:{timeout:t.timeout,color:t.color},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.on,r=e.attrs;return[i("v-icon",t._g(t._b({attrs:{small:"",color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},"v-icon",r,!1),a),[t._v(" mdi-close ")])]}}],null,!0),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])]}},{key:"item.username",fn:function(e){var r=e.item;return[i("v-avatar",{attrs:{size:"40"}},[i("img",{attrs:{src:a("bcef"),alt:"avatar"}})]),t._v(" "+t._s(r.username)+" ")]}},{key:"item.createdAt",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.moment(a.createdAt).format("MMMM Do YYYY, h:mm:ss a"))+" ")]}},{key:"footer",fn:function(){return[i("v-card-actions",[i("v-btn",{attrs:{small:"",color:"light-blue darken-4"}},[i("download-csv",{staticClass:"white--text",attrs:{data:t.tutorials,name:"ข้อมูลเจ้าหน้าที่.csv"}},[t._v(" ดาวน์โหลดไฟล์ csv "),i("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-file-download ")])],1)],1)],1),i("input",{ref:"file",attrs:{id:"input",type:"file",accept:".csv",hidden:""},on:{change:t.upFile}})]},proxy:!0},{key:"no-data",fn:function(){return[i("p",[t._v("ไม่พบข้อมูล")])]},proxy:!0}],null,!0)})],1)],1)},r=[],s=(a("a4d3"),a("e01a"),a("caad"),a("c975"),a("d3b7"),a("25f0"),a("2532"),a("f652")),n=a("c1df"),o=a.n(n),l=a("1940"),c=a.n(l),d=a("c427"),u={name:"tutorials-list",data:function(){return{valid:!0,rul:{emailRules:[function(t){return!!t||"กรุณากรอกอีเมลล์"},function(t){return/.+@.+\..+/.test(t)||"รูปแบบอีเมลล์ไม่ถูกต้อง"}],userRules:[function(t){return!!t||"กรุณากรอกชื่อผู้ใช้งาน"}],password:[function(t){return!!t||"กรุณากรอกรหัสผ่าน"}],firstname:[function(t){return!!t||"กรุณากรอกชื่อ"}],lastname:[function(t){return!!t||"กรุณากรอกนามสกุล"}]},file:"",dialog:!1,search:"",tutorials:[],title:"",headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Username",value:"username",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"ชื่อ",align:"start",sortable:!1,value:"firstname"},{text:"นามสกุล",align:"start",sortable:!1,value:"lastname"},{text:"created",value:"createdAt",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",firstname:"",lastname:"",username:"",email:"",password:"",createdAt:""},defaultItem:{id:"",username:"",email:"",password:"",createdAt:""},timer:"",editedIndex:-1,snackbar:!1,text:"ลบข้อมูลเรียบร้อย",timeout:2e3,color:"",error:!1,verify:[],errorMSG:[{message:""}]}},methods:{upFile:function(){var t=this;this.snackbar=!1,this.selectFile(),this.sendFile().then((function(){t.refreshList()}))},chooseFiles:function(){document.getElementById("input").click()},save:function(t){var e=this;this.editedIndex>-1?(console.log(t),s["a"].update(this.editedItem.id,this.editedItem).then((function(t){console.log(t.data),e.snackbar=!0,e.text="แก้ไขข้อมูลเรียบร้อย",e.color="success",e.dialog=!1,e.close(),e.refreshList()}),(function(t){e.error=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})).catch((function(t){console.log(t)}))):(this.snackbar=!1,this.$store.dispatch("auth/register",this.editedItem).then((function(){e.snackbar=!0,e.text="เพิ่มข้อมูลเจ้าหน้าที่เรียบร้อย",e.color="success",e.dialog=!1,e.refreshList()}),(function(t){e.error=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})))},editItem:function(t){this.editedIndex=this.tutorials.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},moment:function(t){return o()(t)},retrieveTutorials:function(){var t=this;d["a"].get("/usersAll/").then((function(e){t.tutorials=e.data})).catch((function(t){console.log(t)}))},refreshList:function(){this.$refs.form.resetValidation(),this.$refs.form.reset(),this.error=!1,this.retrieveTutorials()},removeAllTutorials:function(){var t=this;s["a"].deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},editTutorial:function(){c()({title:"Good job!",text:"You clicked the button!",icon:"success"})},deleteTutorial:function(t,e){var a=this;this.$confirm({title:"ยืนยันการลบผู้ใช้งาน",message:"ต้องการลบผู้ใช้งาน "+e+"  หรือไม่",button:{no:"ยกเลิก",yes:"ยืนยัน"},callback:function(e){e&&s["a"].delete(t).then((function(){a.refreshList(),a.snackbar=!0,a.text="ลบข้อมูลเรียบร้อย",a.color="black"})).catch((function(t){console.log(t)}))}})},getDisplayTutorial:function(t){return{id:t.id,title:t.title.length>10?t.title.substr(0,10)+"...":t.title,createdAt:t.createdAt,description:t.description.length>30?t.description.substr(0,30)+"...":t.description,status:t.published?"Published":"Pending"}},close:function(){var t=this;this.$refs.form.resetValidation(),this.dialog=!1,this.error=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))}},computed:{showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},currentUser:function(){return this.$store.state.auth.user},formTitle:function(){return-1===this.editedIndex?"เพิ่มผู้ใช้งาน":"แก้ไขผู้ใช้งาน"}},mounted:function(){this.showAdminBoard||(this.$store.dispatch("auth/logout"),this.$router.push("/login")),this.retrieveTutorials()}},f=u,m=(a("6cbe"),a("2877")),h=a("6544"),v=a.n(h),b=a("8212"),p=a("8336"),g=a("b0af"),x=a("99d9"),k=a("62ad"),_=a("a523"),I=a("8fea"),w=a("169a"),V=a("ce7e"),y=a("4bd4"),$=a("132d"),T=a("da13"),A=a("5d23"),B=a("0fd9"),C=a("2db4"),E=a("2fa4"),O=a("8654"),j=a("71d9"),L=a("2a7f"),S=Object(m["a"])(f,i,r,!1,null,null,null);e["default"]=S.exports;v()(S,{VAvatar:b["a"],VBtn:p["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:k["a"],VContainer:_["a"],VDataTable:I["a"],VDialog:w["a"],VDivider:V["a"],VForm:y["a"],VIcon:$["a"],VListItem:T["a"],VListItemTitle:A["b"],VRow:B["a"],VSnackbar:C["a"],VSpacer:E["a"],VTextField:O["a"],VToolbar:j["a"],VToolbarTitle:L["a"]})},"6cbe":function(t,e,a){"use strict";a("e0ca")},e0ca:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4a394e81.f3fed28b.js.map