var E=Object.defineProperty;var b=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>b(t,typeof e!="symbol"?e+"":e,n);import{y as $,n as c,z as x,a as C,d as I,A as B,B as v,C as L,D as p,E as O,F as j,G as w,H as z,I as A,J as D,K as F,L as G}from"./scheduler.8PTVr4V4.js";const o=new Set;let d;function U(){d={r:0,c:[],p:d}}function V(){d.r||$(d.c),d=d.p}function H(t,e){t&&t.i&&(o.delete(t),t.i(e))}function Q(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function T(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function J(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const f=t.$$.on_mount.map(z).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(p)}function K(t,e){const n=t.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){t.$$.dirty[0]===-1&&(A.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,s,i,f,h=null,S=[-1]){const u=j;w(t);const a=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};h&&h(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(r,g,...y)=>{const m=y.length?y[0]:g;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),l&&M(t,r)),g}):[],a.update(),l=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){F();const r=C(e.target);a.fragment&&a.fragment.l(r),r.forEach(I)}else a.fragment&&a.fragment.c();e.intro&&H(t.$$.fragment),J(t,e.target,e.anchor),G(),B()}w(u)}class Z{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){K(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!L(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const N="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(N);export{Z as S,X as a,Q as b,W as c,K as d,V as e,T as f,U as g,Y as i,J as m,H as t};