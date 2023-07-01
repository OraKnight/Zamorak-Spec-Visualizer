(function(){"use strict";var e={6862:function(e,t,n){var r=n(9242),o=n(3396),l=n(4870),u=n(7139),a=n(2147),i=n(1299),c=n(3013);const s={class:"grid h-full"},f=(0,o._)("div",{class:"col-12 flex justify-content-center"},[(0,o._)("h1",null,"Zamorak Spec Visualizer")],-1),d={class:"col-12 flex justify-content-center"},v={class:"card flex flex-wrap gap-3 justify-content-center"};var p={__name:"App",setup(e){const t={OneSix:0,Two:1,Three:2,Four:3,Five:4},n=getComputedStyle(document.body),r=n.getPropertyValue("--yellow-500"),p=n.getPropertyValue("--green-500"),h=n.getPropertyValue("--red-500"),b=n.getPropertyValue("--white-500"),g=(0,l.iH)(1),y=(0,o.Fl)((()=>{const e=g.value-1;return e<5?e:0})),m=(0,l.iH)(0),k=(0,o.Fl)((()=>{const e=[w.value.includes(t.OneSix)?r:b,w.value.includes(t.Two)?r:b,w.value.includes(t.Three)?r:b,w.value.includes(t.Four)?r:b,w.value.includes(t.Five)?r:b];return e[m.value]===r?e[m.value]=p:(e[m.value]=h,e[S(y.value)]=p),e})),w=(0,o.Fl)((()=>[S(y.value),y.value,x(y.value)]));function S(e){return e===t.OneSix?t.Five:e-1}function x(e){return e===t.Five?0:e+1}function O(){console.log(k.value);for(let e=0;e<5;e++)if(console.log(e,"spec:",k.value[e],p,k.value,m.value),k.value[e]===p){m.value=e+1;break}m.value>4&&(console.log("there"),m.value=0)}function j(){g.value++}const C=(0,l.iH)({plugins:{legend:{labels:{font:function(e){var t=e.chart.width,n=Math.round(t/32);return{weight:"bold",size:n}},generateLabels(e){const t=e.getDatasetMeta(0),r=t.controller.getStyle(0);return[{text:"Next Spec",fillStyle:n.getPropertyValue("--green-500"),strokeStyle:r.borderColor,lineWidth:r.borderWidth},{text:"Other Active Specs",fillStyle:n.getPropertyValue("--yellow-500"),strokeStyle:r.borderColor,lineWidth:r.borderWidth},{text:"Next Spec (Inactive)",fillStyle:n.getPropertyValue("--red-500"),strokeStyle:r.borderColor,lineWidth:r.borderWidth}]}}},tooltip:{enabled:!1},datalabels:{formatter:function(e,t){return t.chart.data.labels[t.dataIndex]},font:function(e){var t=e.chart.width,n=Math.round(t/38);return{weight:"bold",size:n}}}},animation:!1,responseive:!1}),P=(0,o.Fl)((()=>({labels:["Flames of Zamorak","Infernal Tomb","Adrenaline Cage","Chaos Blast","Rune of Destruction"],datasets:[{data:[20,20,20,20,20],backgroundColor:k.value}]})));return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[f,(0,o._)("div",d,[(0,o.Wm)((0,l.SU)(i.Z),{type:"pie",data:P.value,options:C.value,plugins:[(0,l.SU)(c.Z)],class:"md:w-full xl:w-5"},null,8,["data","options","plugins"])])]),(0,o._)("div",v,[(0,o.Wm)((0,l.SU)(a.Z),{onClick:t[0]||(t[0]=e=>{g.value=1,m.value=0}),label:"Reset"}),(0,o._)("h4",null,"Phase "+(0,u.zw)(g.value),1),(0,o.Wm)((0,l.SU)(a.Z),{onClick:O,label:"Next Spec"}),g.value<6?((0,o.wg)(),(0,o.j4)((0,l.SU)(a.Z),{key:0,onClick:j,label:"Next Phase"})):(0,o.kq)("",!0)])],64))}};const h=p;var b=h,g=n(3852);const y=(0,r.ri)(b);y.use(g.ZP),y.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,l){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],l=e[s][2];for(var a=!0,i=0;i<r.length;i++)(!1&l||u>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,l<u&&(u=l));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".e21b55f6.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="zamorak-spec-visualizer:";n.l=function(r,o,l,u){if(e[r])e[r].push(o);else{var a,i;if(void 0!==l)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+l){a=f;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+l),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Zamorak-Spec-Visualizer/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var l=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=l);var u=n.p+n.u(t),a=new Error,i=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+u+")",a.name="ChunkLoadError",a.type=l,a.request=u,o[1](a)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,u=r[0],a=r[1],i=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var s=i(n)}for(t&&t(r);c<u.length;c++)l=u[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},r=self["webpackChunkzamorak_spec_visualizer"]=self["webpackChunkzamorak_spec_visualizer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6862)}));r=n.O(r)})();
//# sourceMappingURL=app.70d055b5.js.map