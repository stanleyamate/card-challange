import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const o=({active:a})=>t.jsx("svg",{width:"30",height:"29",viewBox:"0 0 30 29",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 0L19.0998 9.85711L29.7414 10.7102L21.6336 17.6554L24.1107 28.0398L15 22.475L5.88933 28.0398L8.36638 17.6554L0.258624 10.7102L10.9002 9.85711L15 0Z",fill:a?"#F09F00":"#e3e3e3"})});o.__docgenInfo={description:"",methods:[],displayName:"StarIcon",props:{active:{required:!0,tsType:{name:"boolean"},description:""}}};const i=({stars:a})=>t.jsx("span",{className:"flex gap-1 max-w-fit",children:[1,2,3,4,5].map((l,p)=>t.jsx(o,{active:p<a},l))});i.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{stars:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:""}}};const d={component:i,argTypes:{stars:{control:{type:"select"},options:[1,2,3,4,5],table:{type:{summary:"number"},defaultValue:{summary:"5"}},default:5,description:"Whether the button should take up the full width of its container"}}},e={args:{stars:5}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    stars: 5
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Stars"];export{e as Stars,u as __namedExportsOrder,d as default};
