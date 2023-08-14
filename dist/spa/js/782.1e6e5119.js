"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[782],{7782:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var i=a(9835),s=a(499),o=a(6970),n=a(6838);const r={class:"text-h6 text-grey-8 q-pa-md"},l=["id"],d=(0,i.aZ)({__name:"ChartCard",props:{title:String,id:String,option:Object},setup(e){const t=e,a=(new Date).getDate().toString();let d=null;function p(){d=n.S1(document.getElementById(t.id)),d.setOption(t.option)}return(0,i.bv)((()=>{const e=new ResizeObserver((()=>{d.resize({duration:300})}));e.observe(document.getElementById(a)),p(),window.addEventListener("resize",(()=>{d.resize({duration:300})}))})),(e,n)=>{const d=(0,i.up)("q-separator"),p=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(p,{class:"q-ma-sm",flat:"",bordered:"",id:(0,s.SU)(a)},{default:(0,i.w5)((()=>[(0,i._)("div",r,(0,o.zw)(t.title),1),(0,i.Wm)(d),(0,i._)("div",{id:t.id,class:"q-pa-md",style:{height:"300px",width:"100%"}},null,8,l)])),_:1},8,["id"])}}});var p=a(4458),c=a(926),u=a(9984),m=a.n(u);const g=d,h=g;m()(d,"components",{QCard:p.Z,QSeparator:c.Z});const y={title:"基础柱状图",id:"column",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},b={title:"环形图",id:"ring",option:{tooltip:{trigger:"item"},legend:{top:"0",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}},v={title:"堆叠折线面积图",id:"stacked_line_area",option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}},S=(0,i._)("div",{class:"text-h5 q-ma-md text-weight-light"},"图表",-1),w={class:"row q-pa-sm"},f=(0,i.aZ)({__name:"ChartPage",setup(e){const t=[y,b,v];return(e,a)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[S,(0,i._)("div",w,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(e=>(0,i._)("div",{class:"col-12 col-md-4",key:e.id},[(0,i.Wm)(h,{title:e.title,id:e.id,option:e.option},null,8,["title","id","option"])]))),64))])],64))}}),x=f,_=x}}]);