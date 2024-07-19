import{a as ee,e as z,l as L,t as H,R as ye,c as k,f as C,o as M,b as S,d as O,m as W,p as E,x as Y,h as d,g as R,S as _e,T as X,j as K,i as ve,n as $,r as ae,w as ge,q as Q,U as fe,V as Ee}from"../chunks/scheduler.Db0BpTjf.js";import{S as te,i as ne,a as U,g as ce,e as ue,t as J,c as pe,b as de,m as he,d as me}from"../chunks/index.BIRwCP6P.js";import{e as Z}from"../chunks/each._2nCRIyw.js";import{d as be}from"../chunks/transform.rtkV9AUP.js";import{b as Ce}from"../chunks/paths.B4kmmAeV.js";class ze extends Map{constructor(e,s=Te){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:s}}),e!=null)for(const[t,r]of e)this.set(t,r)}get(e){return super.get(se(this,e))}has(e){return super.has(se(this,e))}set(e,s){return super.set(ke(this,e),s)}delete(e){return super.delete(xe(this,e))}}function se({_intern:n,_key:e},s){const t=e(s);return n.has(t)?n.get(t):s}function ke({_intern:n,_key:e},s){const t=e(s);return n.has(t)?n.get(t):(n.set(t,s),s)}function xe({_intern:n,_key:e},s){const t=e(s);return n.has(t)&&(s=n.get(t),n.delete(t)),s}function Te(n){return n!==null&&typeof n=="object"?n.valueOf():n}function we(n){return n}function Se(n,...e){return Le(n,Array.from,we,e)}function Le(n,e,s,t){return function r(o,v){if(v>=t.length)return s(o);const y=new ze,c=t[v++];let l=-1;for(const m of o){const i=c(m,++l,o),a=y.get(i);a?a.push(m):y.set(i,[m])}for(const[m,i]of y)y.set(m,r(i,v));return e(y)}(n,0)}async function Me(n){if("clipboard"in navigator)await navigator.clipboard.writeText(n);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=n,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}const Ie=(n,e)=>{async function s(){if(r)try{await Me(r),n.dispatchEvent(new CustomEvent("svelte-copy",{detail:r}))}catch(o){n.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:o}))}}let t=typeof e=="string"?["click"]:[e.events].flat(1),r=typeof e=="string"?e:e.text;return t.forEach(o=>{n.addEventListener(o,s,!0)}),{update:o=>{const v=typeof o=="string"?["click"]:[o.events].flat(1),y=typeof o=="string"?o:o.text,c=v.filter(m=>!t.includes(m)),l=t.filter(m=>!v.includes(m));c.forEach(m=>{n.addEventListener(m,s,!0)}),l.forEach(m=>{n.removeEventListener(m,s,!0)}),t=v,r=y},destroy:()=>{t.forEach(o=>{n.removeEventListener(o,s,!0)})}}};function Pe(n){let e,s,t,r,o,v,y,c,l,m,i,a="CSS Snippet",h,g,N,I,j,T,w="Copy CSS to Clipboard",B,x,P,q,G;return{c(){e=z("link"),s=L(),t=z("div"),r=z("h3"),o=H(n[0]),v=L(),y=z("p"),c=H(n[1]),l=L(),m=z("details"),i=z("summary"),i.textContent=a,h=L(),g=z("code"),N=H(n[2]),I=L(),j=z("p"),T=z("button"),T.textContent=w,x=z("span"),P=H(n[3]),this.h()},l(b){const f=ye("svelte-1uevrx3",document.head);e=k(f,"LINK",{rel:!0,href:!0}),f.forEach(C),s=M(b),t=k(b,"DIV",{style:!0,class:!0});var A=S(t);r=k(A,"H3",{class:!0});var u=S(r);o=O(u,n[0]),u.forEach(C),v=M(A),y=k(A,"P",{});var _=S(y);c=O(_,n[1]),_.forEach(C),l=M(A),m=k(A,"DETAILS",{class:!0});var p=S(m);i=k(p,"SUMMARY",{class:!0,"data-svelte-h":!0}),W(i)!=="svelte-1p4cxwi"&&(i.textContent=a),h=M(p),g=k(p,"CODE",{class:!0});var D=S(g);N=O(D,n[2]),D.forEach(C),p.forEach(C),I=M(A),j=k(A,"P",{});var F=S(j);T=k(F,"BUTTON",{class:!0,"data-svelte-h":!0}),W(T)!=="svelte-v2s51m"&&(T.textContent=w),x=k(F,"SPAN",{class:!0});var V=S(x);P=O(V,n[3]),V.forEach(C),F.forEach(C),A.forEach(C),this.h()},h(){E(e,"rel","external stylesheet"),E(e,"href",n[5]),E(r,"class","svelte-1t45vpz"),Y(y,"font-size",n[4]),E(i,"class","svelte-1t45vpz"),E(g,"class","svelte-1t45vpz"),E(m,"class","svelte-1t45vpz"),E(T,"class","svelte-1t45vpz"),E(x,"class","svelte-1t45vpz"),Y(t,"font-family","'"+n[0]+"'"),E(t,"class","svelte-1t45vpz")},m(b,f){d(document.head,e),R(b,s,f),R(b,t,f),d(t,r),d(r,o),d(t,v),d(t,y),d(y,c),d(t,l),d(t,m),d(m,i),d(m,h),d(m,g),d(g,N),d(t,I),d(t,j),d(j,T),d(j,x),d(x,P),q||(G=[_e(B=Ie.call(null,T,n[2])),X(T,"svelte-copy",n[6])],q=!0)},p(b,[f]){f&1&&K(o,b[0]),f&2&&K(c,b[1]),f&16&&Y(y,"font-size",b[4]),f&4&&K(N,b[2]),B&&ve(B.update)&&f&4&&B.update.call(null,b[2]),f&8&&K(P,b[3]),f&1&&Y(t,"font-family","'"+b[0]+"'")},i:$,o:$,d(b){b&&(C(s),C(t)),C(e),q=!1,ae(G)}}}function Ae(n,e,s){let t,{id:r=""}=e,{family:o=""}=e,{size:v=16}=e,{text:y}=e,c="",l="";const m=`${Ce}/assets/demo/fonts/${r}.css`,i=()=>{s(3,l="Copied!"),setTimeout(()=>{s(3,l="")},1e3)};return ge(async()=>{const a=await fetch(m);s(2,c=await a.text())}),n.$$set=a=>{"id"in a&&s(7,r=a.id),"family"in a&&s(0,o=a.family),"size"in a&&s(8,v=a.size),"text"in a&&s(1,y=a.text)},n.$$.update=()=>{n.$$.dirty&256&&s(4,t=`${v}px`)},[o,y,c,l,t,m,i,r,v]}class De extends te{constructor(e){super(),ne(this,e,Ae,Pe,ee,{id:7,family:0,size:8,text:1})}}const je=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"inconsolata",family:"Inconsolata",type:"mono"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function le(n,e,s){const t=n.slice();return t[5]=e[s][0],t[6]=e[s][1],t}function oe(n,e,s){const t=n.slice();return t[9]=e[s].family,t[10]=e[s].id,t}function ie(n){let e,s;return e=new De({props:{id:n[10],family:n[9],size:n[0],text:n[1]}}),{c(){pe(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,r){he(e,t,r),s=!0},p(t,r){const o={};r&1&&(o.size=t[0]),r&2&&(o.text=t[1]),e.$set(o)},i(t){s||(U(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){me(e,t)}}}function re(n){let e,s=n[5]+"",t,r,o,v,y,c=Z(n[6]),l=[];for(let i=0;i<c.length;i+=1)l[i]=ie(oe(n,c,i));const m=i=>J(l[i],1,1,()=>{l[i]=null});return{c(){e=z("h2"),t=H(s),r=L(),o=z("section");for(let i=0;i<l.length;i+=1)l[i].c();v=L(),this.h()},l(i){e=k(i,"H2",{});var a=S(e);t=O(a,s),a.forEach(C),r=M(i),o=k(i,"SECTION",{class:!0});var h=S(o);for(let g=0;g<l.length;g+=1)l[g].l(h);v=M(h),h.forEach(C),this.h()},h(){E(o,"class","svelte-1u97m9m")},m(i,a){R(i,e,a),d(e,t),R(i,r,a),R(i,o,a);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(o,null);d(o,v),y=!0},p(i,a){if(a&7){c=Z(i[6]);let h;for(h=0;h<c.length;h+=1){const g=oe(i,c,h);l[h]?(l[h].p(g,a),U(l[h],1)):(l[h]=ie(g),l[h].c(),U(l[h],1),l[h].m(o,v))}for(ce(),h=c.length;h<l.length;h+=1)m(h);ue()}},i(i){if(!y){for(let a=0;a<c.length;a+=1)U(l[a]);y=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)J(l[a]);y=!1},d(i){i&&(C(e),C(r),C(o)),fe(l,i)}}}function Be(n){let e,s,t="Hosted Fonts on The Pudding",r,o,v="<em>Do not use fonts hosted by The Pudding without written permission.</em>",y,c,l,m,i,a,h,g,N,I,j="text sample",T,w,B,x,P,q,G,b=Z(n[2]),f=[];for(let u=0;u<b.length;u+=1)f[u]=re(le(n,b,u));const A=u=>J(f[u],1,1,()=>{f[u]=null});return{c(){e=z("div"),s=z("h1"),s.textContent=t,r=L(),o=z("p"),o.innerHTML=v,y=L(),c=z("form"),l=z("label"),m=H("font-size: "),i=H(n[0]),a=H("px"),h=L(),g=z("input"),N=L(),I=z("label"),I.textContent=j,T=L(),w=z("input"),B=L(),x=z("article");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){e=k(u,"DIV",{id:!0,class:!0});var _=S(e);s=k(_,"H1",{"data-svelte-h":!0}),W(s)!=="svelte-1m2hcwq"&&(s.textContent=t),r=M(_),o=k(_,"P",{"data-svelte-h":!0}),W(o)!=="svelte-895ja5"&&(o.innerHTML=v),y=M(_),c=k(_,"FORM",{});var p=S(c);l=k(p,"LABEL",{for:!0,class:!0});var D=S(l);m=O(D,"font-size: "),i=O(D,n[0]),a=O(D,"px"),D.forEach(C),h=M(p),g=k(p,"INPUT",{id:!0,type:!0,min:!0,max:!0}),N=M(p),I=k(p,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),W(I)!=="svelte-16zo6eo"&&(I.textContent=j),T=M(p),w=k(p,"INPUT",{id:!0,type:!0,maxlength:!0}),p.forEach(C),_.forEach(C),B=M(u),x=k(u,"ARTICLE",{class:!0});var F=S(x);for(let V=0;V<f.length;V+=1)f[V].l(F);F.forEach(C),this.h()},h(){E(l,"for","size"),E(l,"class","svelte-1u97m9m"),E(g,"id","size"),E(g,"type","range"),E(g,"min","12"),E(g,"max","48"),E(I,"for","text"),E(I,"class","svelte-1u97m9m"),E(w,"id","text"),E(w,"type","text"),E(w,"maxlength","100"),E(e,"id","info"),E(e,"class","svelte-1u97m9m"),E(x,"class","svelte-1u97m9m")},m(u,_){R(u,e,_),d(e,s),d(e,r),d(e,o),d(e,y),d(e,c),d(c,l),d(l,m),d(l,i),d(l,a),d(c,h),d(c,g),Q(g,n[0]),d(c,N),d(c,I),d(c,T),d(c,w),Q(w,n[1]),R(u,B,_),R(u,x,_);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(x,null);P=!0,q||(G=[X(g,"change",n[3]),X(g,"input",n[3]),X(w,"input",n[4])],q=!0)},p(u,[_]){if((!P||_&1)&&K(i,u[0]),_&1&&Q(g,u[0]),_&2&&w.value!==u[1]&&Q(w,u[1]),_&7){b=Z(u[2]);let p;for(p=0;p<b.length;p+=1){const D=le(u,b,p);f[p]?(f[p].p(D,_),U(f[p],1)):(f[p]=re(D),f[p].c(),U(f[p],1),f[p].m(x,null))}for(ce(),p=b.length;p<f.length;p+=1)A(p);ue()}},i(u){if(!P){for(let _=0;_<b.length;_+=1)U(f[_]);P=!0}},o(u){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)J(f[_]);P=!1},d(u){u&&(C(e),C(B),C(x)),fe(f,u),q=!1,ae(G)}}}function Ne(n,e,s){let t=18,r="The quick brown fox jumps over the lazy dog.";const o=Se(je,c=>c.type);o.sort((c,l)=>be(c[1].length,l[1].length));function v(){t=Ee(this.value),s(0,t)}function y(){r=this.value,s(1,r)}return[t,r,o,v,y]}class He extends te{constructor(e){super(),ne(this,e,Ne,Be,ee,{})}}function Oe(n){let e,s;return e=new He({}),{c(){pe(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,r){he(e,t,r),s=!0},p:$,i(t){s||(U(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){me(e,t)}}}class Je extends te{constructor(e){super(),ne(this,e,null,Oe,ee,{})}}export{Je as component};