import{s as te,e as C,j as L,t as H,S as _e,c as x,d as b,l as M,a as S,b as O,k as G,m as k,u as K,f as p,i as R,T as ve,U as Z,g as J,B as ge,n as ee,y as ce,r as ke,o as Q,V as fe,W as Ee}from"../chunks/scheduler.8PTVr4V4.js";import{S as ne,i as se,t as U,g as ue,e as he,b as q,c as pe,a as de,m as me,d as ye}from"../chunks/index.DOLzHRec.js";import{e as $}from"../chunks/each.D6YF6ztN.js";import{b as be}from"../chunks/paths.DpcQT6Aa.js";import{d as Ce}from"../chunks/descending.BO6OmMcj.js";class xe extends Map{constructor(t,s=we){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(oe(this,t))}has(t){return super.has(oe(this,t))}set(t,s){return super.set(ze(this,t),s)}delete(t){return super.delete(Te(this,t))}}function oe({_intern:e,_key:t},s){const n=t(s);return e.has(n)?e.get(n):s}function ze({_intern:e,_key:t},s){const n=t(s);return e.has(n)?e.get(n):(e.set(n,s),s)}function Te({_intern:e,_key:t},s){const n=t(s);return e.has(n)&&(s=e.get(n),e.delete(n)),s}function we(e){return e!==null&&typeof e=="object"?e.valueOf():e}function Se(e){return e}function Le(e,...t){return Me(e,Array.from,Se,t)}function Me(e,t,s,n){return function r(i,v){if(v>=n.length)return s(i);const y=new xe,f=n[v++];let o=-1;for(const m of i){const l=f(m,++o,i),a=y.get(l);a?a.push(m):y.set(l,[m])}for(const[m,l]of y)y.set(m,r(l,v));return t(y)}(e,0)}function W(e,t,s){this.k=e,this.x=t,this.y=s}W.prototype={constructor:W,scale:function(e){return e===1?this:new W(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new W(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};W.prototype;async function Ie(e){if("clipboard"in navigator)await navigator.clipboard.writeText(e);else{const t=document.createElement("input");t.type="text",t.disabled=!0,t.style.setProperty("position","fixed"),t.style.setProperty("z-index","-100"),t.style.setProperty("pointer-events","none"),t.style.setProperty("opacity","0"),t.value=e,document.body.appendChild(t),t.click(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}const Pe=(e,t)=>{async function s(){if(r)try{await Ie(r),e.dispatchEvent(new CustomEvent("svelte-copy",{detail:r}))}catch(i){e.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:i}))}}let n=typeof t=="string"?["click"]:[t.events].flat(1),r=typeof t=="string"?t:t.text;return n.forEach(i=>{e.addEventListener(i,s,!0)}),{update:i=>{const v=typeof i=="string"?["click"]:[i.events].flat(1),y=typeof i=="string"?i:i.text,f=v.filter(m=>!n.includes(m)),o=n.filter(m=>!v.includes(m));f.forEach(m=>{e.addEventListener(m,s,!0)}),o.forEach(m=>{e.removeEventListener(m,s,!0)}),n=v,r=y},destroy:()=>{n.forEach(i=>{e.removeEventListener(i,s,!0)})}}};function Ae(e){let t,s,n,r,i,v,y,f,o,m,l,a="CSS Snippet",d,g,N,I,B,T,w="Copy CSS to Clipboard",j,z,P,Y,V;return{c(){t=C("link"),s=L(),n=C("div"),r=C("h3"),i=H(e[0]),v=L(),y=C("p"),f=H(e[1]),o=L(),m=C("details"),l=C("summary"),l.textContent=a,d=L(),g=C("code"),N=H(e[2]),I=L(),B=C("p"),T=C("button"),T.textContent=w,z=C("span"),P=H(e[3]),this.h()},l(E){const c=_e("svelte-1uevrx3",document.head);t=x(c,"LINK",{rel:!0,href:!0}),c.forEach(b),s=M(E),n=x(E,"DIV",{style:!0,class:!0});var A=S(n);r=x(A,"H3",{class:!0});var u=S(r);i=O(u,e[0]),u.forEach(b),v=M(A),y=x(A,"P",{});var _=S(y);f=O(_,e[1]),_.forEach(b),o=M(A),m=x(A,"DETAILS",{class:!0});var h=S(m);l=x(h,"SUMMARY",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-1p4cxwi"&&(l.textContent=a),d=M(h),g=x(h,"CODE",{class:!0});var D=S(g);N=O(D,e[2]),D.forEach(b),h.forEach(b),I=M(A),B=x(A,"P",{});var F=S(B);T=x(F,"BUTTON",{class:!0,"data-svelte-h":!0}),G(T)!=="svelte-v2s51m"&&(T.textContent=w),z=x(F,"SPAN",{class:!0});var X=S(z);P=O(X,e[3]),X.forEach(b),F.forEach(b),A.forEach(b),this.h()},h(){k(t,"rel","external stylesheet"),k(t,"href",e[5]),k(r,"class","svelte-19ry7n"),K(y,"font-size",e[4]),k(l,"class","svelte-19ry7n"),k(g,"class","svelte-19ry7n"),k(m,"class","svelte-19ry7n"),k(T,"class","svelte-19ry7n"),k(z,"class","svelte-19ry7n"),K(n,"font-family","'"+e[0]+"'"),k(n,"class","svelte-19ry7n")},m(E,c){p(document.head,t),R(E,s,c),R(E,n,c),p(n,r),p(r,i),p(n,v),p(n,y),p(y,f),p(n,o),p(n,m),p(m,l),p(m,d),p(m,g),p(g,N),p(n,I),p(n,B),p(B,T),p(B,z),p(z,P),Y||(V=[ve(j=Pe.call(null,T,e[2])),Z(T,"svelte-copy",e[6])],Y=!0)},p(E,[c]){c&1&&J(i,E[0]),c&2&&J(f,E[1]),c&16&&K(y,"font-size",E[4]),c&4&&J(N,E[2]),j&&ge(j.update)&&c&4&&j.update.call(null,E[2]),c&8&&J(P,E[3]),c&1&&K(n,"font-family","'"+E[0]+"'")},i:ee,o:ee,d(E){E&&(b(s),b(n)),b(t),Y=!1,ce(V)}}}function De(e,t,s){let n,{id:r=""}=t,{family:i=""}=t,{size:v=16}=t,{text:y}=t,f="",o="";const m=`${be}/assets/demo/fonts/${r}.css`,l=()=>{s(3,o="Copied!"),setTimeout(()=>{s(3,o="")},1e3)};return ke(async()=>{const a=await fetch(m);s(2,f=await a.text())}),e.$$set=a=>{"id"in a&&s(7,r=a.id),"family"in a&&s(0,i=a.family),"size"in a&&s(8,v=a.size),"text"in a&&s(1,y=a.text)},e.$$.update=()=>{e.$$.dirty&256&&s(4,n=`${v}px`)},[i,y,f,o,n,m,l,r,v]}class Be extends ne{constructor(t){super(),se(this,t,De,Ae,te,{id:7,family:0,size:8,text:1})}}const je=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"inconsolata",family:"Inconsolata",type:"mono"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ie(e,t,s){const n=e.slice();return n[5]=t[s][0],n[6]=t[s][1],n}function le(e,t,s){const n=e.slice();return n[9]=t[s].family,n[10]=t[s].id,n}function re(e){let t,s;return t=new Be({props:{id:e[10],family:e[9],size:e[0],text:e[1]}}),{c(){pe(t.$$.fragment)},l(n){de(t.$$.fragment,n)},m(n,r){me(t,n,r),s=!0},p(n,r){const i={};r&1&&(i.size=n[0]),r&2&&(i.text=n[1]),t.$set(i)},i(n){s||(U(t.$$.fragment,n),s=!0)},o(n){q(t.$$.fragment,n),s=!1},d(n){ye(t,n)}}}function ae(e){let t,s=e[5]+"",n,r,i,v,y,f=$(e[6]),o=[];for(let l=0;l<f.length;l+=1)o[l]=re(le(e,f,l));const m=l=>q(o[l],1,1,()=>{o[l]=null});return{c(){t=C("h2"),n=H(s),r=L(),i=C("section");for(let l=0;l<o.length;l+=1)o[l].c();v=L(),this.h()},l(l){t=x(l,"H2",{});var a=S(t);n=O(a,s),a.forEach(b),r=M(l),i=x(l,"SECTION",{class:!0});var d=S(i);for(let g=0;g<o.length;g+=1)o[g].l(d);v=M(d),d.forEach(b),this.h()},h(){k(i,"class","svelte-1lzc8ku")},m(l,a){R(l,t,a),p(t,n),R(l,r,a),R(l,i,a);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null);p(i,v),y=!0},p(l,a){if(a&7){f=$(l[6]);let d;for(d=0;d<f.length;d+=1){const g=le(l,f,d);o[d]?(o[d].p(g,a),U(o[d],1)):(o[d]=re(g),o[d].c(),U(o[d],1),o[d].m(i,v))}for(ue(),d=f.length;d<o.length;d+=1)m(d);he()}},i(l){if(!y){for(let a=0;a<f.length;a+=1)U(o[a]);y=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)q(o[a]);y=!1},d(l){l&&(b(t),b(r),b(i)),fe(o,l)}}}function Ne(e){let t,s,n="Hosted Fonts on The Pudding",r,i,v="<em>Do not use fonts hosted by The Pudding without written permission.</em>",y,f,o,m,l,a,d,g,N,I,B="text sample",T,w,j,z,P,Y,V,E=$(e[2]),c=[];for(let u=0;u<E.length;u+=1)c[u]=ae(ie(e,E,u));const A=u=>q(c[u],1,1,()=>{c[u]=null});return{c(){t=C("div"),s=C("h1"),s.textContent=n,r=L(),i=C("p"),i.innerHTML=v,y=L(),f=C("form"),o=C("label"),m=H("font-size: "),l=H(e[0]),a=H("px"),d=L(),g=C("input"),N=L(),I=C("label"),I.textContent=B,T=L(),w=C("input"),j=L(),z=C("article");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=x(u,"DIV",{id:!0,class:!0});var _=S(t);s=x(_,"H1",{"data-svelte-h":!0}),G(s)!=="svelte-1m2hcwq"&&(s.textContent=n),r=M(_),i=x(_,"P",{"data-svelte-h":!0}),G(i)!=="svelte-895ja5"&&(i.innerHTML=v),y=M(_),f=x(_,"FORM",{});var h=S(f);o=x(h,"LABEL",{for:!0,class:!0});var D=S(o);m=O(D,"font-size: "),l=O(D,e[0]),a=O(D,"px"),D.forEach(b),d=M(h),g=x(h,"INPUT",{id:!0,type:!0,min:!0,max:!0}),N=M(h),I=x(h,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),G(I)!=="svelte-16zo6eo"&&(I.textContent=B),T=M(h),w=x(h,"INPUT",{id:!0,type:!0,maxlength:!0}),h.forEach(b),_.forEach(b),j=M(u),z=x(u,"ARTICLE",{class:!0});var F=S(z);for(let X=0;X<c.length;X+=1)c[X].l(F);F.forEach(b),this.h()},h(){k(o,"for","size"),k(o,"class","svelte-1lzc8ku"),k(g,"id","size"),k(g,"type","range"),k(g,"min","12"),k(g,"max","48"),k(I,"for","text"),k(I,"class","svelte-1lzc8ku"),k(w,"id","text"),k(w,"type","text"),k(w,"maxlength","100"),k(t,"id","info"),k(t,"class","svelte-1lzc8ku"),k(z,"class","svelte-1lzc8ku")},m(u,_){R(u,t,_),p(t,s),p(t,r),p(t,i),p(t,y),p(t,f),p(f,o),p(o,m),p(o,l),p(o,a),p(f,d),p(f,g),Q(g,e[0]),p(f,N),p(f,I),p(f,T),p(f,w),Q(w,e[1]),R(u,j,_),R(u,z,_);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(z,null);P=!0,Y||(V=[Z(g,"change",e[3]),Z(g,"input",e[3]),Z(w,"input",e[4])],Y=!0)},p(u,[_]){if((!P||_&1)&&J(l,u[0]),_&1&&Q(g,u[0]),_&2&&w.value!==u[1]&&Q(w,u[1]),_&7){E=$(u[2]);let h;for(h=0;h<E.length;h+=1){const D=ie(u,E,h);c[h]?(c[h].p(D,_),U(c[h],1)):(c[h]=ae(D),c[h].c(),U(c[h],1),c[h].m(z,null))}for(ue(),h=E.length;h<c.length;h+=1)A(h);he()}},i(u){if(!P){for(let _=0;_<E.length;_+=1)U(c[_]);P=!0}},o(u){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)q(c[_]);P=!1},d(u){u&&(b(t),b(j),b(z)),fe(c,u),Y=!1,ce(V)}}}function He(e,t,s){let n=18,r="The quick brown fox jumps over the lazy dog.";const i=Le(je,f=>f.type);i.sort((f,o)=>Ce(f[1].length,o[1].length));function v(){n=Ee(this.value),s(0,n)}function y(){r=this.value,s(1,r)}return[n,r,i,v,y]}class Oe extends ne{constructor(t){super(),se(this,t,He,Ne,te,{})}}function Re(e){let t,s;return t=new Oe({}),{c(){pe(t.$$.fragment)},l(n){de(t.$$.fragment,n)},m(n,r){me(t,n,r),s=!0},p:ee,i(n){s||(U(t.$$.fragment,n),s=!0)},o(n){q(t.$$.fragment,n),s=!1},d(n){ye(t,n)}}}class Ve extends ne{constructor(t){super(),se(this,t,null,Re,te,{})}}export{Ve as component};
