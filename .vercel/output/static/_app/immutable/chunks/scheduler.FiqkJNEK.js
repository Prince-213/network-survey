function j(){}const nt=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function it(){return Object.create(null)}function B(t){t.forEach(T)}function I(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ct(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const i of e)i(void 0);return j}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(L(e,n))}function lt(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?q(n.ctx.slice(),t[1](i(e))):n.ctx}function ut(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,l){if(r){const c=A(e,n,i,l);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ht(t){const e={};for(const n in t)e[n]=!0;return e}function mt(t){return t&&I(t.destroy)?t.destroy:j}let y=!1;function pt(){y=!0}function yt(){y=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function H(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:M(1,r,P=>e[n[P]].claim_order,u))-1;i[s]=n[a]+1;const E=a+1;n[E]=s,r=Math.max(E,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function R(t,e){t.appendChild(e)}function z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=C("style");return e.textContent="/* empty */",F(z(t),e),e.sheet}function F(t,e){return R(t.head||t,e),e.sheet}function U(t,e){if(y){for(H(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function vt(){return v(" ")}function kt(){return v("")}function Et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function J(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&G.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function At(t,e){for(const n in e)k(t,n,e[n])}function K(t,e){Object.keys(e).forEach(n=>{Q(t,n,e[n])})}function Q(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Ct(t){return/-/.test(t)?K:J}function Ot(t){return t.dataset.svelteH}function St(t){return t===""?null:+t}function Dt(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){V(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function S(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Pt(t,e,n){return S(t,e,n,C)}function qt(t,e,n){return S(t,e,n,W)}function X(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Tt(t){return X(t," ")}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e){t.value=e??""}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ht(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Rt(t){const e=t.querySelector(":checked");return e&&e.__value}function Y(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function zt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Ft(t){h().$$.on_mount.push(t)}function Ut(t){h().$$.after_update.push(t)}function Wt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=Y(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Gt(t,e){return h().$$.context.set(t,e),e}function Jt(t){return h().$$.context.get(t)}function Kt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],N=[];let _=[];const x=[],D=Promise.resolve();let w=!1;function Z(){w||(w=!0,D.then(tt))}function Qt(){return Z(),D}function $(t){_.push(t)}function Vt(t){x.push(t)}const g=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),et(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Xt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{St as $,U as A,$ as B,wt as C,ot as D,Et as E,j as F,W as G,qt as H,ht as I,dt as J,J as K,ct as L,Ct as M,Kt as N,mt as O,I as P,h as Q,Vt as R,Gt as S,Jt as T,B as U,At as V,nt as W,It as X,Ht as Y,Mt as Z,Rt as _,vt as a,Wt as a0,Nt as a1,jt as a2,z as a3,bt as a4,Y as a5,it as a6,tt as a7,st as a8,Xt as a9,p as aa,b as ab,T as ac,d as ad,Z as ae,pt as af,yt as ag,Ut as b,Tt as c,xt as d,kt as e,C as f,Pt as g,Dt as h,gt as i,k as j,Lt as k,v as l,X as m,Bt as n,Ft as o,N as p,zt as q,q as r,rt as s,Qt as t,_t as u,lt as v,at as w,ft as x,ut as y,Ot as z};
