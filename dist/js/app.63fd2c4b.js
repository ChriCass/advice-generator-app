(function(){"use strict";var n={5858:function(n,t,e){var i=e(9242),r=e(3396);function c(n,t,e,i,c,o){const a=(0,r.up)("advice-component");return(0,r.wg)(),(0,r.j4)(a)}var o=e(7139),a=e.p+"img/pattern-divider-desktop.f43373de.svg",s=e.p+"img/icon-dice.b81fefcd.svg";const u={class:"cont mt-5 bg"},f={class:"row justify-content-center text-center"},l={class:"col-12"},d={class:"header"},v={class:"p-3"},p=(0,r._)("img",{class:"img-fluid mt-3 mb-5",src:a,alt:"img"},null,-1);function h(n,t,e,i,c,a){return(0,r.wg)(),(0,r.iD)("section",u,[(0,r._)("div",f,[(0,r._)("div",l,[(0,r._)("p",d,"ADVICE #"+(0,o.zw)(c.advice.id),1),(0,r._)("h1",v,'"'+(0,o.zw)(c.advice.advice)+'"',1),p]),(0,r._)("div",{onClick:t[0]||(t[0]=(...n)=>a.callingAdvice&&a.callingAdvice(...n)),class:"dice-container"},[(0,r._)("img",{src:s,alt:"icon-dice",class:(0,o.C_)(["dice-img",{shake:c.shaking}])},null,2)])])])}var g={data(){return{advice:"",shaking:!1}},methods:{async callingAdvice(){try{this.shaking=!0;const n=await fetch("https://api.adviceslip.com/advice");if(!n.ok)throw new Error("API response was not ok");const t=await n.json(),{slip:e}=t;this.advice=e,setTimeout((()=>{this.shaking=!1}),500)}catch(n){console.error("Error fetching advice:",n)}}},mounted(){this.callingAdvice()}},m=e(89);const w=(0,m.Z)(g,[["render",h]]);var b=w,k={name:"App",components:{AdviceComponent:b}};const _=(0,m.Z)(k,[["render",c]]);var y=_;(0,i.ri)(y).mount("#app")}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var c=t[i]={exports:{}};return n[i].call(c.exports,c,c.exports,e),c.exports}e.m=n,function(){var n=[];e.O=function(t,i,r,c){if(!i){var o=1/0;for(f=0;f<n.length;f++){i=n[f][0],r=n[f][1],c=n[f][2];for(var a=!0,s=0;s<i.length;s++)(!1&c||o>=c)&&Object.keys(e.O).every((function(n){return e.O[n](i[s])}))?i.splice(s--,1):(a=!1,c<o&&(o=c));if(a){n.splice(f--,1);var u=r();void 0!==u&&(t=u)}}return t}c=c||0;for(var f=n.length;f>0&&n[f-1][2]>c;f--)n[f]=n[f-1];n[f]=[i,r,c]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,i){var r,c,o=i[0],a=i[1],s=i[2],u=0;if(o.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(s)var f=s(e)}for(t&&t(i);u<o.length;u++)c=o[u],e.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return e.O(f)},i=self["webpackChunkadvice_generator_app"]=self["webpackChunkadvice_generator_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(5858)}));i=e.O(i)})();
//# sourceMappingURL=app.63fd2c4b.js.map