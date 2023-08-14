"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[50],{2050:(e,l,a)=>{a.r(l),a.d(l,{default:()=>$});var o=a(9835),t=a(499),s=a(6970);const m={class:"q-ma-sm"},u=(0,o.aZ)({__name:"TableList",setup(e){const l=(0,t.iH)([{id:1,username:"rubisco0211",nickname:"RUBisco",email:"1205456072@qq.com",phone:"18759125150",createTime:"2023-08-03 09:30:32",status:"blocked",operations:null},{id:2,username:"rubisco0211",nickname:"RUBisco",email:"1205456072@qq.com",phone:"18759125150",createTime:"2023-08-03 09:30:32",status:"normal",operations:null},{id:3,username:"rubisco0211",nickname:"RUBisco",email:"1205456072@qq.com",phone:"18759125150",createTime:"2023-08-03 09:30:32",status:"normal",operations:null},{id:4,username:"rubisco0211",nickname:"RUBisco",email:"1205456072@qq.com",phone:"18759125150",createTime:"2023-08-03 09:30:32",status:"normal",operations:null}]),a=Object.keys(l.value[0]),u=a.forEach((e=>({name:e,label:e,field:e}))),n=(0,t.iH)([]);function c(){return 0===n.value.length?"":`${n.value.length}行被选中`}function i(){const e=Object.assign({},l.value[0]);e.id=l.value.length+1,l.value.push(e)}return(e,a)=>{const r=(0,o.up)("q-checkbox"),d=(0,o.up)("q-btn"),p=(0,o.up)("q-btn-group"),b=(0,o.up)("q-badge"),v=(0,o.up)("q-td"),w=(0,o.up)("q-tr"),V=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(V,{flat:"",bordered:"",title:"用户管理",class:"text-dark",rows:l.value,columns:(0,t.SU)(u),"row-key":"id",selection:"multiple","selected-rows-label":c,selected:n.value,"onUpdate:selected":a[0]||(a[0]=e=>n.value=e),separator:"vertical"},{"header-selection":(0,o.w5)((e=>[(0,o.Wm)(r,{dense:"",modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l,"checked-icon":"bi-check-circle-fill","indeterminate-icon":"bi-dash-circle-fill","unchecked-icon":"bi-circle"},null,8,["modelValue","onUpdate:modelValue"])])),"body-selection":(0,o.w5)((e=>[(0,o.Wm)(r,{dense:"",modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l,"checked-icon":"bi-check-circle-fill","unchecked-icon":"bi-circle"},null,8,["modelValue","onUpdate:modelValue"])])),"top-right":(0,o.w5)((()=>[(0,o.Wm)(p,{flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{flat:"",stack:"",color:"negative",icon:"bi-trash3",label:"删除",disable:!n.value.length},null,8,["disable"]),(0,o.Wm)(d,{flat:"",stack:"",color:"primary",icon:"bi-plus-lg",label:"新增",onClick:i}),(0,o.Wm)(d,{flat:"",stack:"",color:"primary",icon:"bi-search",label:"搜索"}),(0,o.Wm)(d,{flat:"",stack:"",color:"primary",icon:"bi-download",label:"导出"})])),_:1})])),"body-cell-status":(0,o.w5)((e=>[(0,o.Wm)(w,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{key:"id",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{color:"normal"===e.row.status?"primary":"negative","text-color":"white"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.status),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","selected"])])}}});var n=a(1463),c=a(1221),i=a(7236),r=a(8879),d=a(3532),p=a(7220),b=a(990),v=a(9984),w=a.n(v);const V=u,f=V;w()(u,"components",{QTable:n.Z,QCheckbox:c.Z,QBtnGroup:i.Z,QBtn:r.Z,QTr:d.Z,QTd:p.Z,QBadge:b.Z});const q={class:"q-ma-sm"},h=(0,o._)("div",{class:"text-h6 q-mb-md text-grey-8"},"用户表单",-1),W={class:"row items-center justify-end"},k={class:"row items-center justify-end"},_={class:"row"},y={class:"row items-center justify-end"},U="至",x=(0,o.aZ)({__name:"UserForm",setup(e){const l=(0,t.iH)({username:"",nickname:"",email:"",phone:"",location:""}),a=(0,t.iH)("@gmail.com"),s=[{label:"北京",value:"北京"},{label:"上海",value:"上海"},{label:"深圳",value:"深圳"}],m=["@gmail.com","@qq.com","@outlook.com","@163.com"],u=((0,t.iH)(null),(0,t.iH)("2019-02-11 12:25")),n=(0,t.iH)({from:"2013-02-12",to:"2013-02-23"}),c=(0,t.iH)("");return(e,t)=>{const i=(0,o.up)("q-icon"),r=(0,o.up)("q-input"),d=(0,o.up)("q-select"),p=(0,o.up)("q-option-group"),b=(0,o.up)("q-uploader"),v=(0,o.up)("q-btn"),w=(0,o.up)("q-date"),V=(0,o.up)("q-popup-proxy"),f=(0,o.up)("q-time"),x=(0,o.up)("q-tooltip"),g=(0,o.up)("q-editor"),Z=(0,o.up)("q-form"),Q=(0,o.up)("q-card"),H=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",q,[(0,o.Wm)(Q,{flat:"",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{class:"q-pa-md"},{default:(0,o.w5)((()=>[h,(0,o.Wm)(r,{modelValue:l.value.username,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value.username=e),type:"text","label-slot":"",class:"q-my-xs",clearable:"","clear-icon":"bi-x"},{label:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"bi-person",size:"20px",class:"q-mr-xs"}),(0,o.Uk)("用户名 ")])),_:1},8,["modelValue"]),(0,o.Wm)(r,{modelValue:l.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value.nickname=e),type:"text","label-slot":"",class:"q-my-xs",clearable:"","clear-icon":"bi-x"},{label:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"bi-sunglasses",size:"20px",class:"q-mr-xs"}),(0,o.Uk)("昵称 ")])),_:1},8,["modelValue"]),(0,o.Wm)(r,{modelValue:l.value.email,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value.email=e),type:"email","label-slot":"",class:"q-my-xs",clearable:"","clear-icon":"bi-x"},{label:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"bi-at",size:"20px",class:"q-mr-xs"}),(0,o.Uk)("邮箱地址 ")])),append:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),options:m,"options-dense":"",label:"邮箱域名"},null,8,["modelValue"])])),_:1},8,["modelValue"]),(0,o.Wm)(r,{modelValue:l.value.phone,"onUpdate:modelValue":t[4]||(t[4]=e=>l.value.phone=e),type:"email","label-slot":"",class:"q-my-xs",clearable:"","clear-icon":"bi-x"},{label:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"bi-telephone",size:"20px",class:"q-mr-xs"}),(0,o.Uk)("电话号码 ")])),_:1},8,["modelValue"]),(0,o.Wm)(d,{modelValue:l.value.location,"onUpdate:modelValue":t[5]||(t[5]=e=>l.value.location=e),options:s.map((e=>e.value)),type:"text","options-dense":"","label-slot":"",class:"q-my-xs",clearable:"","clear-icon":"bi-x"},{label:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"bi-geo-alt",size:"20px",class:"q-mr-xs"}),(0,o.Uk)("地区 ")])),_:1},8,["modelValue","options"]),(0,o.Wm)(p,{options:s,type:"radio",modelValue:l.value.location,"onUpdate:modelValue":t[6]||(t[6]=e=>l.value.location=e),inline:""},null,8,["modelValue"]),(0,o.Wm)(b,{label:"上传文件",multiple:"",flat:"",bordered:"",class:"full-width"}),(0,o.Wm)(r,{modelValue:u.value,"onUpdate:modelValue":t[9]||(t[9]=e=>u.value=e),clearable:"","clear-icon":"clear",label:"时间",class:"q-my-xs","label-slot":""},{before:(0,o.w5)((()=>[(0,o.Wm)(v,{flat:"",round:"",icon:"bi-calendar-date",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=e=>u.value=e),mask:"YYYY-MM-DD HH:mm",flat:""},{default:(0,o.w5)((()=>[(0,o._)("div",W,[(0,o.wy)((0,o.Wm)(v,{label:"确定",color:"primary",flat:""},null,512),[[H]])])])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(v,{flat:"",round:"",icon:"bi-clock",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:u.value,"onUpdate:modelValue":t[8]||(t[8]=e=>u.value=e),mask:"YYYY-MM-DD HH:mm",flat:"",format24h:""},{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o.wy)((0,o.Wm)(v,{label:"确定",color:"primary",flat:""},null,512),[[H]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",_,[(0,o.Wm)(r,{modelValue:n.value.from,"onUpdate:modelValue":t[11]||(t[11]=e=>n.value.from=e),label:"开始日期",class:"col-5"},{before:(0,o.w5)((()=>[(0,o.Wm)(v,{flat:"",icon:"bi-calendar-range",color:"primary",round:""},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Uk)("选择日期范围")])),_:1}),(0,o.Wm)(V,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{range:"",modelValue:n.value,"onUpdate:modelValue":t[10]||(t[10]=e=>n.value=e),mask:"YYYY-MM-DD"},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o.wy)((0,o.Wm)(v,{label:"确定",color:"primary",flat:""},null,512),[[H]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(r,{class:"col-1",borderless:"",modelValue:U,"onUpdate:modelValue":t[12]||(t[12]=e=>U=e),readonly:""}),(0,o.Wm)(r,{class:"col-4",modelValue:n.value.to,"onUpdate:modelValue":t[13]||(t[13]=e=>n.value.to=e),label:"结束日期"},null,8,["modelValue"])]),(0,o.Wm)(g,{modelValue:c.value,"onUpdate:modelValue":t[14]||(t[14]=e=>c.value=e),"min-height":"15rem",class:"q-my-md"},null,8,["modelValue"])])),_:1})])),_:1})])}}});var g=a(4458),Z=a(8326),Q=a(6611),H=a(2857),Y=a(6384),T=a(5429),D=a(4343),B=a(2765),j=a(4351),M=a(6770),z=a(6858),C=a(9832),R=a(2146);const O=x,P=O;w()(x,"components",{QCard:g.Z,QForm:Z.Z,QInput:Q.Z,QIcon:H.Z,QSelect:Y.Z,QOptionGroup:T.Z,QUploader:D.Z,QBtn:r.Z,QPopupProxy:B.Z,QDate:j.Z,QTime:M.Z,QTooltip:z.Z,QEditor:C.Z}),w()(x,"directives",{ClosePopup:R.Z});const E=(0,o._)("div",{class:"text-h5 q-ma-md text-weight-light"},"用户管理",-1),F={class:"row q-pa-sm"},G={class:"col-12 col-md-4"},I={class:"col-12 col-md-8"},S=(0,o.aZ)({__name:"UserManagement",setup(e){return(e,l)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[E,(0,o._)("div",F,[(0,o._)("div",G,[(0,o.Wm)(P)]),(0,o._)("div",I,[(0,o.Wm)(f)])])],64))}}),L=S,$=L}}]);