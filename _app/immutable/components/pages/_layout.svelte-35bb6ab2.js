import{S as Q,i as T,s as U,k as w,a as p,q as I,l as b,m as y,c as E,r as O,h as d,B as be,n as f,b as C,C as _,A as k,D as pe,v as Z,w as x,x as $,f as J,t as P,y as ee,e as de,E as K,F as R,G as le,H as Ee,I as Ce,J as ze,K as De}from"../../chunks/index-2e73e135.js";const Ie="\uC870\uC9C0\uD5CC",Oe="https://github.com/jojiapp",ke="https://jojiapp.github.io",Ae="JLOG",re={name:Ie,github:Oe,blog:ke,title:Ae};function Ve(l){let e,t,r,n,a,s=re.title+"",i;return{c(){e=w("a"),t=w("img"),n=p(),a=w("span"),i=I(s),this.h()},l(o){e=b(o,"A",{href:!0,class:!0});var c=y(e);t=b(c,"IMG",{src:!0,alt:!0,class:!0}),n=E(c),a=b(c,"SPAN",{class:!0});var g=y(a);i=O(g,s),g.forEach(d),c.forEach(d),this.h()},h(){be(t.src,r="/authors/logo.png")||f(t,"src",r),f(t,"alt","logo"),f(t,"class","mr-4 h-14 w-14"),f(a,"class","text-2xl font-bold "),f(e,"href","/"),f(e,"class","flex items-center justify-center")},m(o,c){C(o,e,c),_(e,t),_(e,n),_(e,a),_(a,i)},p:k,i:k,o:k,d(o){o&&d(e)}}}class je extends Q{constructor(e){super(),T(this,e,null,Ve,U,{})}}function ve(l,e,t){const r=l.slice();return r[1]=e[t],r}function ye(l){let e,t=l[1]+"",r;return{c(){e=w("a"),r=I(t),this.h()},l(n){e=b(n,"A",{href:!0,class:!0});var a=y(e);r=O(a,t),a.forEach(d),this.h()},h(){f(e,"href","/"+l[1].toLowerCase()),f(e,"class","p-6")},m(n,a){C(n,e,a),_(e,r)},p:k,d(n){n&&d(e)}}}function Le(l){let e,t,r=l[0],n=[];for(let a=0;a<r.length;a+=1)n[a]=ye(ve(l,r,a));return{c(){e=w("nav"),t=w("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"NAV",{});var s=y(e);t=b(s,"UL",{class:!0});var i=y(t);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(d),s.forEach(d),this.h()},h(){f(t,"class","flex h-full items-center font-medium")},m(a,s){C(a,e,s),_(e,t);for(let i=0;i<n.length;i+=1)n[i].m(t,null)},p(a,[s]){if(s&1){r=a[0];let i;for(i=0;i<r.length;i+=1){const o=ve(a,r,i);n[i]?n[i].p(o,s):(n[i]=ye(o),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},i:k,o:k,d(a){a&&d(e),pe(n,a)}}}function Be(l){return[["Blog","Category","Projects","About"]]}class Fe extends Q{constructor(e){super(),T(this,e,Be,Le,U,{})}}function Ne(l){let e,t,r,n,a;return t=new je({}),n=new Fe({}),{c(){e=w("header"),Z(t.$$.fragment),r=p(),Z(n.$$.fragment),this.h()},l(s){e=b(s,"HEADER",{class:!0});var i=y(e);x(t.$$.fragment,i),r=E(i),x(n.$$.fragment,i),i.forEach(d),this.h()},h(){f(e,"class","mb-12 flex justify-between")},m(s,i){C(s,e,i),$(t,e,null),_(e,r),$(n,e,null),a=!0},p:k,i(s){a||(J(t.$$.fragment,s),J(n.$$.fragment,s),a=!0)},o(s){P(t.$$.fragment,s),P(n.$$.fragment,s),a=!1},d(s){s&&d(e),ee(t),ee(n)}}}class Ye extends Q{constructor(e){super(),T(this,e,null,Ne,U,{})}}const ae=parseFloat;function ie(l,e=";"){let t;if(Array.isArray(l))t=l.filter(r=>r);else{t=[];for(const r in l)l[r]&&t.push(`${r}:${l[r]}`)}return t.join(e)}function Se(l,e,t,r){let n,a;const s="1em";let i,o,c,g="-.125em";const h="visible";return r&&(c="center",a="1.25em"),t&&(n=t),e&&(e=="lg"?(o="1.33333em",i=".75em",g="-.225em"):e=="xs"?o=".75em":e=="sm"?o=".875em":o=e.replace("x","em")),ie([ie({float:n,width:a,height:s,"line-height":i,"font-size":o,"text-align":c,"vertical-align":g,"transform-origin":"center",overflow:h}),l])}function Xe(l,e,t,r,n,a=1,s="",i=""){let o=1,c=1;return n&&(n=="horizontal"?o=-1:n=="vertical"?c=-1:o=c=-1),ie([`translate(${ae(e)*a}${s},${ae(t)*a}${s})`,`scale(${o*ae(l)},${c*ae(l)})`,r&&`rotate(${r}${i})`]," ")}function we(l){let e,t,r,n,a,s,i,o;function c(u,v){return typeof u[10][4]=="string"?He:Ge}let g=c(l),h=g(l);return{c(){e=K("svg"),t=K("g"),r=K("g"),h.c(),this.h()},l(u){e=R(u,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var v=y(e);t=R(v,"g",{transform:!0,"transform-origin":!0});var A=y(t);r=R(A,"g",{transform:!0});var z=y(r);h.l(z),z.forEach(d),A.forEach(d),v.forEach(d),this.h()},h(){f(r,"transform",l[12]),f(t,"transform",n="translate("+l[10][0]/2+" "+l[10][1]/2+")"),f(t,"transform-origin",a=l[10][0]/4+" 0"),f(e,"id",s=l[1]||void 0),f(e,"class",i="svelte-fa "+l[0]+" svelte-1w3t65e"),f(e,"style",l[11]),f(e,"viewBox",o="0 0 "+l[10][0]+" "+l[10][1]),f(e,"aria-hidden","true"),f(e,"role","img"),f(e,"xmlns","http://www.w3.org/2000/svg"),le(e,"pulse",l[4]),le(e,"spin",l[3])},m(u,v){C(u,e,v),_(e,t),_(t,r),h.m(r,null)},p(u,v){g===(g=c(u))&&h?h.p(u,v):(h.d(1),h=g(u),h&&(h.c(),h.m(r,null))),v&4096&&f(r,"transform",u[12]),v&1024&&n!==(n="translate("+u[10][0]/2+" "+u[10][1]/2+")")&&f(t,"transform",n),v&1024&&a!==(a=u[10][0]/4+" 0")&&f(t,"transform-origin",a),v&2&&s!==(s=u[1]||void 0)&&f(e,"id",s),v&1&&i!==(i="svelte-fa "+u[0]+" svelte-1w3t65e")&&f(e,"class",i),v&2048&&f(e,"style",u[11]),v&1024&&o!==(o="0 0 "+u[10][0]+" "+u[10][1])&&f(e,"viewBox",o),v&17&&le(e,"pulse",u[4]),v&9&&le(e,"spin",u[3])},d(u){u&&d(e),h.d()}}}function Ge(l){let e,t,r,n,a,s,i,o,c,g;return{c(){e=K("path"),s=K("path"),this.h()},l(h){e=R(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(e).forEach(d),s=R(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(s).forEach(d),this.h()},h(){f(e,"d",t=l[10][4][0]),f(e,"fill",r=l[6]||l[2]||"currentColor"),f(e,"fill-opacity",n=l[9]!=!1?l[7]:l[8]),f(e,"transform",a="translate("+l[10][0]/-2+" "+l[10][1]/-2+")"),f(s,"d",i=l[10][4][1]),f(s,"fill",o=l[5]||l[2]||"currentColor"),f(s,"fill-opacity",c=l[9]!=!1?l[8]:l[7]),f(s,"transform",g="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(h,u){C(h,e,u),C(h,s,u)},p(h,u){u&1024&&t!==(t=h[10][4][0])&&f(e,"d",t),u&68&&r!==(r=h[6]||h[2]||"currentColor")&&f(e,"fill",r),u&896&&n!==(n=h[9]!=!1?h[7]:h[8])&&f(e,"fill-opacity",n),u&1024&&a!==(a="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&f(e,"transform",a),u&1024&&i!==(i=h[10][4][1])&&f(s,"d",i),u&36&&o!==(o=h[5]||h[2]||"currentColor")&&f(s,"fill",o),u&896&&c!==(c=h[9]!=!1?h[8]:h[7])&&f(s,"fill-opacity",c),u&1024&&g!==(g="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&f(s,"transform",g)},d(h){h&&d(e),h&&d(s)}}}function He(l){let e,t,r,n;return{c(){e=K("path"),this.h()},l(a){e=R(a,"path",{d:!0,fill:!0,transform:!0}),y(e).forEach(d),this.h()},h(){f(e,"d",t=l[10][4]),f(e,"fill",r=l[2]||l[5]||"currentColor"),f(e,"transform",n="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(a,s){C(a,e,s)},p(a,s){s&1024&&t!==(t=a[10][4])&&f(e,"d",t),s&36&&r!==(r=a[2]||a[5]||"currentColor")&&f(e,"fill",r),s&1024&&n!==(n="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&f(e,"transform",n)},d(a){a&&d(e)}}}function Me(l){let e,t=l[10][4]&&we(l);return{c(){t&&t.c(),e=de()},l(r){t&&t.l(r),e=de()},m(r,n){t&&t.m(r,n),C(r,e,n)},p(r,[n]){r[10][4]?t?t.p(r,n):(t=we(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(r){t&&t.d(r),r&&d(e)}}}function qe(l,e,t){let{class:r=""}=e,{id:n=""}=e,{style:a=""}=e,{icon:s}=e,{size:i=""}=e,{color:o=""}=e,{fw:c=!1}=e,{pull:g=""}=e,{scale:h=1}=e,{translateX:u=0}=e,{translateY:v=0}=e,{rotate:A=""}=e,{flip:z=!1}=e,{spin:F=!1}=e,{pulse:L=!1}=e,{primaryColor:N=""}=e,{secondaryColor:Y=""}=e,{primaryOpacity:V=1}=e,{secondaryOpacity:S=.4}=e,{swapOpacity:X=!1}=e,G,B,H;return l.$$set=m=>{"class"in m&&t(0,r=m.class),"id"in m&&t(1,n=m.id),"style"in m&&t(13,a=m.style),"icon"in m&&t(14,s=m.icon),"size"in m&&t(15,i=m.size),"color"in m&&t(2,o=m.color),"fw"in m&&t(16,c=m.fw),"pull"in m&&t(17,g=m.pull),"scale"in m&&t(18,h=m.scale),"translateX"in m&&t(19,u=m.translateX),"translateY"in m&&t(20,v=m.translateY),"rotate"in m&&t(21,A=m.rotate),"flip"in m&&t(22,z=m.flip),"spin"in m&&t(3,F=m.spin),"pulse"in m&&t(4,L=m.pulse),"primaryColor"in m&&t(5,N=m.primaryColor),"secondaryColor"in m&&t(6,Y=m.secondaryColor),"primaryOpacity"in m&&t(7,V=m.primaryOpacity),"secondaryOpacity"in m&&t(8,S=m.secondaryOpacity),"swapOpacity"in m&&t(9,X=m.swapOpacity)},l.$$.update=()=>{l.$$.dirty&16384&&t(10,G=s&&s.icon||[0,0,"",[],""]),l.$$.dirty&237568&&t(11,B=Se(a,i,g,c)),l.$$.dirty&8126464&&t(12,H=Xe(h,u,v,A,z,512))},[r,n,o,F,L,N,Y,V,S,X,G,B,H,a,s,i,c,g,h,u,v,A,z]}class Je extends Q{constructor(e){super(),T(this,e,qe,Me,U,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const Pe=Je;/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ke={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Re(l){let e,t,r,n,a,s,i,o,c,g,h,u,v,A=re.name+"",z,F,L,N,Y,V,S,X,G,B,H,m,W,fe=re.title+"",ne,te;return n=new Pe({props:{icon:Ke,size:"1.5rem"}}),{c(){e=w("div"),t=w("div"),r=w("a"),Z(n.$$.fragment),a=p(),s=w("div"),i=I("\u2022"),o=p(),c=w("div"),g=I("jojiapp@gmail.com"),h=p(),u=w("div"),v=w("div"),z=I(A),F=p(),L=w("div"),N=I("\u2022"),Y=p(),V=w("div"),S=I("@ "),X=I(l[0]),G=p(),B=w("div"),H=I("\u2022"),m=p(),W=w("div"),ne=I(fe),this.h()},l(j){e=b(j,"DIV",{class:!0});var M=y(e);t=b(M,"DIV",{class:!0});var q=y(t);r=b(q,"A",{href:!0,target:!0,class:!0});var oe=y(r);x(n.$$.fragment,oe),oe.forEach(d),a=E(q),s=b(q,"DIV",{});var ue=y(s);i=O(ue,"\u2022"),ue.forEach(d),o=E(q),c=b(q,"DIV",{});var ce=y(c);g=O(ce,"jojiapp@gmail.com"),ce.forEach(d),q.forEach(d),h=E(M),u=b(M,"DIV",{class:!0});var D=y(u);v=b(D,"DIV",{});var he=y(v);z=O(he,A),he.forEach(d),F=E(D),L=b(D,"DIV",{});var me=y(L);N=O(me,"\u2022"),me.forEach(d),Y=E(D),V=b(D,"DIV",{});var se=y(V);S=O(se,"@ "),X=O(se,l[0]),se.forEach(d),G=E(D),B=b(D,"DIV",{});var _e=y(B);H=O(_e,"\u2022"),_e.forEach(d),m=E(D),W=b(D,"DIV",{});var ge=y(W);ne=O(ge,fe),ge.forEach(d),D.forEach(d),M.forEach(d),this.h()},h(){f(r,"href",re.github),f(r,"target","_blank"),f(r,"class","text-white"),f(t,"class","mb-4 flex items-center justify-center gap-2 text-gray-400"),f(u,"class","flex items-center justify-center gap-2 text-sm text-gray-400"),f(e,"class","border-t-2 border-gray-800 pt-16")},m(j,M){C(j,e,M),_(e,t),_(t,r),$(n,r,null),_(t,a),_(t,s),_(s,i),_(t,o),_(t,c),_(c,g),_(e,h),_(e,u),_(u,v),_(v,z),_(u,F),_(u,L),_(L,N),_(u,Y),_(u,V),_(V,S),_(V,X),_(u,G),_(u,B),_(B,H),_(u,m),_(u,W),_(W,ne),te=!0},p:k,i(j){te||(J(n.$$.fragment,j),te=!0)},o(j){P(n.$$.fragment,j),te=!1},d(j){j&&d(e),ee(n)}}}function Qe(l){return[new Date().getFullYear()]}class Te extends Q{constructor(e){super(),T(this,e,Qe,Re,U,{})}}function Ue(l){let e,t,r,n,a,s;t=new Ye({});const i=l[1].default,o=Ee(i,l,l[0],null);return a=new Te({}),{c(){e=w("div"),Z(t.$$.fragment),r=p(),o&&o.c(),n=p(),Z(a.$$.fragment),this.h()},l(c){e=b(c,"DIV",{class:!0});var g=y(e);x(t.$$.fragment,g),r=E(g),o&&o.l(g),n=E(g),x(a.$$.fragment,g),g.forEach(d),this.h()},h(){f(e,"class","mx-auto max-w-5xl ")},m(c,g){C(c,e,g),$(t,e,null),_(e,r),o&&o.m(e,null),_(e,n),$(a,e,null),s=!0},p(c,[g]){o&&o.p&&(!s||g&1)&&Ce(o,i,c,c[0],s?De(i,c[0],g,null):ze(c[0]),null)},i(c){s||(J(t.$$.fragment,c),J(o,c),J(a.$$.fragment,c),s=!0)},o(c){P(t.$$.fragment,c),P(o,c),P(a.$$.fragment,c),s=!1},d(c){c&&d(e),ee(t),o&&o.d(c),ee(a)}}}function We(l,e,t){let{$$slots:r={},$$scope:n}=e;return l.$$set=a=>{"$$scope"in a&&t(0,n=a.$$scope)},[n,r]}class xe extends Q{constructor(e){super(),T(this,e,We,Ue,U,{})}}export{xe as default};
