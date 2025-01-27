import{c as f,d as w,r as k,a as z,g as C,b as a,e as o,w as I,f as e,t as s,h as d,u as c,F as _,i as p,j as g,n as h,k as L,l as V,o as l,U as B,C as N,P as U}from"./index-Bg_8S4TA.js";/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=f("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=f("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),P={class:"flex flex-col gap-3 md:gap-4 max-w-screen-xl md:px-12 mx-auto px-4 pb-6 md:pb-8"},R=e("p",null,"Go Back",-1),S={key:0,class:"flex flex-col gap-3 md:gap-4"},T={class:"relative"},A=["alt","src"],E={class:"flex items-center gap-6 justify-start px-5 absolute bottom-0 w-full bg-black bg-opacity-70 h-[15%] text-white"},G={class:"text-xl md:text-3xl font-bold text-primary"},D={class:"flex flex-col md:flex-row gap-3 md:gap-4"},H={class:"bg-card p-4 flex-1 space-y-4 rounded-md"},M=e("h2",{class:"text-lg md:text-2xl font-semibold md:my-4"},"About",-1),W={class:"text-sm md:text-base"},q={class:"link text-xs md:text-sm text-primary"},J=["href"],K=["src"],O={class:"bg-card p-4 flex-1 space-y-4 rounded-md"},Q=e("h2",{class:"text-lg md:text-2xl font-semibold md:my-4"},"Project Info",-1),X={class:"flex flex-col gap-2 md:gap-4"},Y={class:"space-y-2"},Z={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},$={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},ee={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},te={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},se=e("h2",{class:"text-white text-xl md:text-2xl font-bold py-4"},"Introduction",-1),ae={class:"text-sm md:text-base"},le={key:0,class:h("grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-fr gap-4")},oe=["src"],de=e("h2",{class:"text-white text-xl md:text-2xl font-bold py-4"},"What I learned",-1),ce={class:"text-sm md:text-base"},ie={class:h("grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-fr gap-4")},ne=["src"],xe=w({__name:"GamesView",setup(re){const v=L(),t=k(null),b=z(()=>v.params.id);return t.value=C.find(n=>n.id===b.value)||null,(n,me)=>{var r,m,u,x;const y=V("router-link");return l(),a("div",P,[o(y,{class:"text-secondary my-2 md:my-0 md:text-xl hover:text-white flex items-center space-x-1",to:"/"},{default:I(()=>[o(c(j),{class:"md:size-10"}),R]),_:1}),t.value?(l(),a("div",S,[e("div",null,[e("div",T,[e("img",{alt:t.value.title,src:t.value.src,class:"w-full aspect-video"},null,8,A),e("div",E,[e("p",G,s(t.value.title),1)])])]),e("div",D,[e("div",H,[M,e("p",W,s(t.value.details.about),1),e("div",q,[e("a",{href:(m=(r=t.value.details)==null?void 0:r.link)==null?void 0:m.url,target:"_blank",rel:"noopener noreferrer"},[d(s((x=(u=t.value.details)==null?void 0:u.link)==null?void 0:x.title)+" ",1),e("img",{src:t.value.details.imageSrc,alt:""},null,8,K)],8,J)])]),e("div",O,[Q,e("div",X,[e("ul",Y,[e("li",Z,[o(c(F),{class:"size-5 md:size-6"}),d(" Role : "+s(t.value.role),1)]),e("li",$,[o(c(B),{class:"size-5 md:size-6"}),d(" Team Size : "+s(t.value.users),1)]),e("li",ee,[o(c(N),{class:"size-5 md:size-6"}),d(" Time frame : "+s(t.value.createdAt),1)]),e("li",te,[o(c(U),{class:"size-5 md:size-6"}),d(" Engine : "+s(t.value.engine),1)])])])])]),e("div",null,[se,e("p",ae,s(t.value.details.introduction),1)]),t.value.details.gifs.length?(l(),a("div",le,[(l(!0),a(_,null,p(t.value.details.gifs,i=>(l(),a("img",{src:i,alt:"game-gif",class:"rounded-md aspect-video md:size-full"},null,8,oe))),256))])):g("",!0),e("div",null,[de,e("p",ce,s(t.value.details.whatILearned),1)]),e("div",ie,[(l(!0),a(_,null,p(t.value.details.gifsFooter,i=>(l(),a("img",{src:i,alt:"game-gif",class:"rounded-md aspect-video md:size-full"},null,8,ne))),256))])])):g("",!0)])}}});export{xe as default};
