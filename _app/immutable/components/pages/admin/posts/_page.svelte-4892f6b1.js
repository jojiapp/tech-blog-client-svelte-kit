import{S as K,i as L,s as Q,k as m,l as h,m as g,h as d,b as R,A as B,D as W,a as E,q as k,c as C,r as w,B as z,n as u,C as n,u as q,v as X,w as Y,x as Z,f as tt,t as et,y as st}from"../../../../chunks/index-2e73e135.js";import"../../../../chunks/DateFormatter-c474a830.js";import"../../../../chunks/_commonjsHelpers-094ef602.js";function F(r,e,l){const t=r.slice();return t[1]=e[l],t}function J(r){let e,l,t,a,o,s,f,b=r[1].getTitle()+"",D,A,v,y=r[1].getSummary()+"",V,P,p,$=r[1].getCategory()+"",S,U,I,x=r[1].getCreatedAt()+"",T,j;return{c(){e=m("div"),l=m("div"),t=m("img"),o=E(),s=m("div"),f=m("h3"),D=k(b),A=E(),v=m("div"),V=k(y),P=E(),p=m("div"),S=k($),U=E(),I=m("div"),T=k(x),j=E(),this.h()},l(c){e=h(c,"DIV",{class:!0});var i=g(e);l=h(i,"DIV",{class:!0});var G=g(l);t=h(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(d),o=C(i),s=h(i,"DIV",{class:!0});var _=g(s);f=h(_,"H3",{class:!0});var H=g(f);D=w(H,b),H.forEach(d),A=C(_),v=h(_,"DIV",{class:!0});var M=g(v);V=w(M,y),M.forEach(d),P=C(_),p=h(_,"DIV",{class:!0});var N=g(p);S=w(N,$),N.forEach(d),U=C(_),I=h(_,"DIV",{class:!0});var O=g(I);T=w(O,x),O.forEach(d),_.forEach(d),j=C(i),i.forEach(d),this.h()},h(){z(t.src,a=r[1].getThumbnailUrl())||u(t,"src",a),u(t,"alt","thumbnail"),u(t,"class","rounded"),u(l,"class","mr-24 flex hidden w-48 items-center md:block"),u(f,"class","text-2xl font-bold"),u(v,"class","text-gray-400"),u(p,"class","text-primary-500"),u(I,"class","text-gray-400"),u(s,"class","flex flex-8 flex-col justify-between gap-4"),u(e,"class","flex border-t-2 border-gray-800 py-12")},m(c,i){R(c,e,i),n(e,l),n(l,t),n(e,o),n(e,s),n(s,f),n(f,D),n(s,A),n(s,v),n(v,V),n(s,P),n(s,p),n(p,S),n(s,U),n(s,I),n(I,T),n(e,j)},p(c,i){i&1&&!z(t.src,a=c[1].getThumbnailUrl())&&u(t,"src",a),i&1&&b!==(b=c[1].getTitle()+"")&&q(D,b),i&1&&y!==(y=c[1].getSummary()+"")&&q(V,y),i&1&&$!==($=c[1].getCategory()+"")&&q(S,$),i&1&&x!==(x=c[1].getCreatedAt()+"")&&q(T,x)},d(c){c&&d(e)}}}function at(r){let e,l=r[0],t=[];for(let a=0;a<l.length;a+=1)t[a]=J(F(r,l,a));return{c(){e=m("section");for(let a=0;a<t.length;a+=1)t[a].c()},l(a){e=h(a,"SECTION",{});var o=g(e);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(d)},m(a,o){R(a,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(a,[o]){if(o&1){l=a[0];let s;for(s=0;s<l.length;s+=1){const f=F(a,l,s);t[s]?t[s].p(f,o):(t[s]=J(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:B,o:B,d(a){a&&d(e),W(t,a)}}}function lt(r,e,l){let{postItems:t}=e;return r.$$set=a=>{"postItems"in a&&l(0,t=a.postItems)},[t]}class rt extends K{constructor(e){super(),L(this,e,lt,at,Q,{postItems:0})}}function nt(r){let e,l;return e=new rt({props:{postItems:r[0]}}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,a){Z(e,t,a),l=!0},p:B,i(t){l||(tt(e.$$.fragment,t),l=!0)},o(t){et(e.$$.fragment,t),l=!1},d(t){st(e,t)}}}function ot(r,e,l){let{data:t}=e,a=t.postItems;return r.$$set=o=>{"data"in o&&l(1,t=o.data)},[a,t]}class dt extends K{constructor(e){super(),L(this,e,ot,nt,Q,{data:1})}}export{dt as default};
