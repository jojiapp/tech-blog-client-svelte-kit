import{c as t,P as r,C as a}from"./category-api-dd3abf4f.js";import{e as s}from"./index-d6fabef0.js";const n=async({params:o})=>{const e=await t.getCategories();return o.id||s(404,"Not found"),{postMarkdown:r.from(o.id,"# \uC81C\uBAA9",e[0],new Date),postCategory:new a(e)}},g=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{g as _,n as l};
