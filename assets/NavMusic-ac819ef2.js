import{g as p,i as _,k as y,m as M,_ as f,N as v,r as g,o as h,P as A,w as x,a as s,Q as P,S as B,d as E}from"./app-ac6acc15.js";import b from"./MyIcon-eeafbfab.js";import{_ as C}from"./plugin-vue_export-helper-c27b6911.js";const w={class:"MyMusic"},q=s("div",{id:"GlobalAPlayer"},null,-1),G=p({__name:"NavMusic",setup(N){let i,n=_(!1),c=[{name:"西涌客栈/思念一个荒废的名字",artist:"陈楚生",url:"http://music.163.com/song/media/outer/url?id=1296092107.mp3",cover:"https://y.qq.com/music/photo_new/T001R300x300M000002PZBgg1S9xPX_4.jpg?max_age=2592000",lrc:""},{name:"活该",artist:"0713再就业男团",url:"http://ws.stream.qqmusic.qq.com/C400003cGoEh2xGr6q.m4a?guid=499599221&vkey=BF79E0F9C41D82048A844BDCDD27C8037894183B79153C472AAA80C21A3F9D60A572A6BFB8EB3B2F9FEB7CB9EEDD19B223232AAB9272C7E0&uin=&fromtag=120032",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000QbFYl0EFOMD_3.jpg?max_age=2592000",lrc:""},{name:"其实我还好",artist:"俞灏明",url:"http://music.163.com/song/media/outer/url?id=25694250.mp3",cover:"https://y.qq.com/music/photo_new/T002R300x300M0000042UdTr2MZj43_1.jpg?max_age=2592000",lrc:""},{name:"不要说话",artist:"陈奕迅",url:"http://music.163.com/song/media/outer/url?id=25906124.mp3",cover:"http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=130y130",lrc:"./不要说话-陈奕迅.lrc"},{name:"僕が死のうと思ったのは",artist:"中島美嘉",url:"http://music.163.com/song/media/outer/url?id=29715487.mp3",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003PiCAN19yKff_2.jpg?max_age=2592000",lrc:""},{name:"晚婚 (翻自 江蕙)",artist:"丁芙妮",url:"http://music.163.com/song/media/outer/url?id=1356511808.mp3",cover:"https://p1.music.126.net/x0n3cpnrDi4J1Xl5yQwf7A==/109951165453139879.jpg?param=200y200",lrc:""}];const d=()=>{n.value=!n.value},r=()=>{n.value&&(n.value=!1)},u=()=>{const e=document.querySelector(".vp-navbar-end");if(!e)return;if(!document.querySelector("#MyMusic_Menu")){const o=document.createElement("div");o.id="MyMusic_Menu",o.classList.add("nav-item"),o.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',e.appendChild(o)}const t=document.querySelector("#MyMusic_Menu");t.onclick=o=>{d(),o.stopPropagation()};const a=document.querySelector(".MyMusic");a.onclick=o=>{o.stopPropagation()}},m=()=>{if(!i)return;const e=window,t=document.getElementById("GlobalAPlayer");!t||c.length<1||(l(),t.classList.contains("aplayer"))||(e.GlobalAPlayer=new i({container:document.getElementById("GlobalAPlayer"),audio:c,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:.05,storageName:"GlobalAPlayer"}),e.GlobalAPlayer.on("play",function(){l()}),e.GlobalAPlayer.on("pause",function(){l()}))};function l(){var t,a;const e=window;e.GlobalAPlayer&&e.GlobalAPlayer.mode&&(e.GlobalAPlayer.paused?(t=document.getElementById("MyMusic_icon"))==null||t.setAttribute("spin","false"):(a=document.getElementById("MyMusic_icon"))==null||a.setAttribute("spin","true"))}return y(()=>{const e=M();f(()=>import("./APlayer.min-7810ede0.js").then(t=>t.A),["assets/APlayer.min-7810ede0.js","assets/commonjsHelpers-de833af9.js"]).then(t=>{v(()=>{i=t.default,u(),m(),window.document.body.onclick=()=>{r()}}),e.beforeEach(()=>{setTimeout(()=>{u(),m()},50)})})}),(e,t)=>{const a=g("ClientOnly");return h(),A(a,null,{default:x(()=>[s("div",w,[s("div",{class:P(["MyMusic_Play",{hide:!B(n)}])},[s("div",{class:"close",onClick:r},[E(b,{name:"guanbi"})]),q],2)])]),_:1})}}});const T=C(G,[["__file","NavMusic.vue"]]);export{T as default};
