import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";var i=t((()=>{})),a,o,s=t((()=>{n(),i(),a=r(),o=({theme:e=`Prospect`,state:t=`--unselected`,className:n=``,onClick:r})=>{let i=t===`--selected`,o=!(t===`--error`||t===`--hover_error`),s=t.replace(`--`,`state-`),c=[`radio`,`radio--${e.toLowerCase()}`,s,n].filter(Boolean).join(` `);return(0,a.jsx)(o?`button`:`div`,{className:c,onClick:o?r:void 0,type:o?`button`:void 0,"aria-checked":i,role:`radio`,children:i&&(0,a.jsx)(`span`,{className:`radio__dot`})})},o.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--unselected' | '--hover' | '--selected' | '--error' | '--hover_error'`,elements:[{name:`literal`,value:`'--unselected'`},{name:`literal`,value:`'--hover'`},{name:`literal`,value:`'--selected'`},{name:`literal`,value:`'--error'`},{name:`literal`,value:`'--hover_error'`}]},description:``,defaultValue:{value:`'--unselected'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),c,l,u,d,f,p,m,h,g,_;t((()=>{c=e(n(),1),s(),l=r(),u={title:`Atomes/Radio`,component:o,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},state:{control:`select`,options:[`--unselected`,`--hover`,`--selected`,`--error`,`--hover_error`]},onClick:{action:`clicked`}}},d=e=>{let[t,n]=(0,c.useState)(e.state);(0,c.useEffect)(()=>{n(e.state)},[e.state]);let r=()=>n(e=>e===`--selected`?`--unselected`:`--selected`);return(0,l.jsx)(o,{...e,state:t,onClick:r})},f={args:{theme:`Prospect`,state:`--unselected`},render:e=>(0,l.jsx)(d,{...e})},p={args:{theme:`Prospect`,state:`--selected`}},m={args:{theme:`Prospect`,state:`--error`}},h={args:{theme:`Client`,state:`--unselected`}},g={args:{theme:`Client`,state:`--selected`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--unselected'
  },
  render: args => <InteractiveRadio {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--selected'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--error'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    state: '--unselected'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    state: '--selected'
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Selected`,`Error`,`ClientUnselected`,`ClientSelected`]}))();export{g as ClientSelected,h as ClientUnselected,m as Error,f as Playground,p as Selected,_ as __namedExportsOrder,u as default};