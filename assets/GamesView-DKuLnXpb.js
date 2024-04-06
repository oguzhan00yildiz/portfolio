import{c as x,d as h,r as v,a as b,g as y,b as a,e as o,w,f as e,t as s,u as d,h as c,F as r,i as m,j as u,n as _,k,l as z,o as l,U as C,C as I,P as L}from"./index-CC-aIlrG.js";/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=x("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=x("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),N={class:"flex flex-col gap-3 md:gap-4 max-w-screen-xl md:px-12 mx-auto px-4 pb-6 md:pb-8"},U=e("p",null,"Go Back",-1),j={key:0,class:"flex flex-col gap-3 md:gap-4"},F={class:"relative"},P=["alt","src"],R={class:"flex items-center gap-6 justify-start px-5 absolute bottom-0 w-full bg-black bg-opacity-70 h-[15%] text-white"},T={class:"text-xl md:text-3xl font-bold text-primary"},A={class:"flex flex-col md:flex-row gap-3 md:gap-4"},E={class:"bg-card p-4 flex-1 space-y-4 rounded-md"},G=e("h2",{class:"text-lg md:text-2xl font-semibold md:my-4"},"About",-1),S={class:"text-sm md:text-base"},D={class:"bg-card p-4 flex-1 space-y-4 rounded-md"},H=e("h2",{class:"text-lg md:text-2xl font-semibold md:my-4"},"Project Info",-1),M={class:"flex flex-col gap-2 md:gap-4"},W={class:"space-y-2"},q={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},J={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},K={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},O={class:"flex items-center gap-1 md:gap-3 text-sm md:text-base truncate"},Q=e("h2",{class:"text-white text-xl md:text-2xl font-bold py-4"},"Introduction",-1),X={class:"text-sm md:text-base"},Y={key:0,class:_("grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-fr gap-4")},Z=["src"],$=e("h2",{class:"text-white text-xl md:text-2xl font-bold py-4"},"What I learned",-1),ee={class:"text-sm md:text-base"},te={class:_("grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-fr gap-4")},se=["src"],de=h({__name:"GamesView",setup(ae){const p=k(),t=v(null),g=b(()=>p.params.id);return t.value=y.find(n=>n.id===g.value)||null,(n,le)=>{const f=z("router-link");return l(),a("div",N,[o(f,{class:"text-secondary my-2 md:my-0 md:text-xl hover:text-white flex items-center space-x-1",to:"/"},{default:w(()=>[o(d(V),{class:"md:size-10"}),U]),_:1}),t.value?(l(),a("div",j,[e("div",null,[e("div",F,[e("img",{alt:t.value.title,src:t.value.src,class:"w-full aspect-video"},null,8,P),e("div",R,[e("p",T,s(t.value.title),1)])])]),e("div",A,[e("div",E,[G,e("p",S,s(t.value.details.about),1)]),e("div",D,[H,e("div",M,[e("ul",W,[e("li",q,[o(d(B),{class:"size-5 md:size-6"}),c(" Role : "+s(t.value.role),1)]),e("li",J,[o(d(C),{class:"size-5 md:size-6"}),c(" Team Size : "+s(t.value.users),1)]),e("li",K,[o(d(I),{class:"size-5 md:size-6"}),c(" Time frame : "+s(t.value.createdAt),1)]),e("li",O,[o(d(L),{class:"size-5 md:size-6"}),c(" Engine : "+s(t.value.engine),1)])])])])]),e("div",null,[Q,e("p",X,s(t.value.details.introduction),1)]),t.value.details.gifs.length?(l(),a("div",Y,[(l(!0),a(r,null,m(t.value.details.gifs,i=>(l(),a("img",{src:i,alt:"game-gif",class:"rounded-md aspect-video md:size-full"},null,8,Z))),256))])):u("",!0),e("div",null,[$,e("p",ee,s(t.value.details.whatILearned),1)]),e("div",te,[(l(!0),a(r,null,m(t.value.details.gifsFooter,i=>(l(),a("img",{src:i,alt:"game-gif",class:"rounded-md aspect-video md:size-full"},null,8,se))),256))])])):u("",!0)])}}});export{de as default};