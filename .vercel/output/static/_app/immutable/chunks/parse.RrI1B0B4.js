const y=-1,b=-2,h=-3,w=-4,g=-5,p=-6;function A(c,I){return i(JSON.parse(c),I)}function i(c,I){if(typeof c=="number")return s(c,!0);if(!Array.isArray(c)||c.length===0)throw new Error("Invalid input");const u=c,e=Array(u.length);function s(r,E=!1){if(r===-1)return;if(r===-3)return NaN;if(r===-4)return 1/0;if(r===-5)return-1/0;if(r===-6)return-0;if(E)throw new Error("Invalid input");if(r in e)return e[r];const t=u[r];if(!t||typeof t!="object")e[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string"){const o=t[0],a=I?.[o];if(a)return e[r]=a(s(t[1]));switch(o){case"Date":e[r]=new Date(t[1]);break;case"Set":const f=new Set;e[r]=f;for(let n=1;n<t.length;n+=1)f.add(s(t[n]));break;case"Map":const l=new Map;e[r]=l;for(let n=1;n<t.length;n+=2)l.set(s(t[n]),s(t[n+1]));break;case"RegExp":e[r]=new RegExp(t[1],t[2]);break;case"Object":e[r]=Object(t[1]);break;case"BigInt":e[r]=BigInt(t[1]);break;case"null":const N=Object.create(null);e[r]=N;for(let n=1;n<t.length;n+=2)N[t[n]]=s(t[n+1]);break;default:throw new Error(`Unknown type ${o}`)}}else{const o=new Array(t.length);e[r]=o;for(let a=0;a<t.length;a+=1){const f=t[a];f!==-2&&(o[a]=s(f))}}else{const o={};e[r]=o;for(const a in t){const f=t[a];o[a]=s(f)}}return e[r]}return s(0)}export{b as H,h as N,w as P,y as U,g as a,p as b,A as p,i as u};