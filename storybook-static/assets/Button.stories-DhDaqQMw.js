import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{f as q}from"./index-C_FWhylE.js";import"./index-DJO9vBfz.js";const r=({onClick:t,children:e,fullWidth:V,size:k="md",variant:w="primary"})=>{var c;const W={sm:"px-3 py-2 text-sm",md:"px-6 py-3 text-md",lg:"px-8 py-4 text-lg"},i={primary:"bg-[#009129] hover:bg-[#085a20] text-white",secondary:"text-black bg-gray-50 hover:bg-gray-100 "},_=(c=Object.keys(i))==null?void 0:c.find($=>$===w);return n.jsx("button",{className:`transition-colors capitalize rounded-lg py-3 lg:flex-1 font-bold ${V?"w-full":"w-fit"} ${i[_]} ${W[k]}`,onClick:t,children:e})};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const N={args:{onClick:q()},component:r,tags:["autodocs"],argTypes:{fullWidth:{control:{type:"boolean"},table:{type:{summary:"false"},defaultValue:{summary:"false"},description:"Whether the button should take up the full width of its container"}},variant:{control:{type:"select"},options:["primary","secondary"],table:{type:{summary:"primary"},description:"The button's visual style",defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{type:{summary:"md"},description:"The button's size",defaultValue:{summary:"md"}}}}},a={args:{buttonText:"button",variant:"primary",fullWidth:!1},render:({buttonText:t,...e})=>n.jsx(r,{...e,children:t})},s={args:{buttonText:"button",variant:"secondary"},render:({buttonText:t,...e})=>n.jsx(r,{...e,children:t})},o={args:{size:"sm",buttonText:"button"},render:({buttonText:t,...e})=>n.jsx(r,{...e,children:t})},u={args:{size:"md",buttonText:"button"},render:({buttonText:t,...e})=>n.jsx(r,{...e,children:t})},d={args:{size:"lg",buttonText:"button"},render:({buttonText:t,...e})=>n.jsx(r,{...e,children:t})};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    buttonText: "button",
    variant: "primary",
    fullWidth: false
  },
  render: ({
    buttonText,
    ...args
  }) => <Button {...args}>{buttonText}</Button>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    buttonText: "button",
    variant: "secondary"
  },
  render: ({
    buttonText,
    ...args
  }) => <Button {...args}>{buttonText}</Button>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "sm",
    buttonText: "button"
  },
  render: ({
    buttonText,
    ...args
  }) => <Button {...args}>{buttonText}</Button>
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var h,v,B;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md",
    buttonText: "button"
  },
  render: ({
    buttonText,
    ...args
  }) => <Button {...args}>{buttonText}</Button>
}`,...(B=(v=u.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var z,j,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "lg",
    buttonText: "button"
  },
  render: ({
    buttonText,
    ...args
  }) => <Button {...args}>{buttonText}</Button>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const O=["Primary","Secondary","Small","Medium","Large"];export{d as Large,u as Medium,a as Primary,s as Secondary,o as Small,O as __namedExportsOrder,N as default};
