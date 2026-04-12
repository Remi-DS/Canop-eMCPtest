import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";var i=t((()=>{})),a,o,s=t((()=>{n(),i(),a=r(),o=({theme:e=`Prospect`,style:t=`--default`,state:n=`--unselected`,className:r=``,onClick:i})=>{let o=n===`--selected`,s=t===`--disabled`;return(0,a.jsx)(`button`,{className:[`toggle`,`toggle--${e.toLowerCase()}`,`toggle--${t.replace(`--`,``)}`,o?`toggle--selected`:`toggle--unselected`,r].filter(Boolean).join(` `),type:`button`,disabled:s,onClick:s?void 0:i,role:`switch`,"aria-checked":o,children:(0,a.jsx)(`span`,{className:`toggle__handle`})})},o.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'--default' | '--disabled'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--disabled'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--unselected' | '--selected'`,elements:[{name:`literal`,value:`'--unselected'`},{name:`literal`,value:`'--selected'`}]},description:``,defaultValue:{value:`'--unselected'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),c,l,u,d,f,p,m,h,g,_,v;t((()=>{c=e(n(),1),s(),l=r(),u={title:`Atomes/Toggle`,component:o,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},style:{control:`radio`,options:[`--default`,`--disabled`]},state:{control:`radio`,options:[`--unselected`,`--selected`]},onClick:{action:`clicked`}}},d=e=>{let[t,n]=(0,c.useState)(e.state);(0,c.useEffect)(()=>{n(e.state)},[e.state]);let r=()=>{e.style!==`--disabled`&&n(e=>e===`--selected`?`--unselected`:`--selected`)};return(0,l.jsx)(o,{...e,state:t,onClick:r})},f={args:{theme:`Prospect`,style:`--default`,state:`--unselected`},render:e=>(0,l.jsx)(d,{...e})},p={args:{theme:`Prospect`,style:`--default`,state:`--selected`}},m={args:{theme:`Prospect`,style:`--disabled`,state:`--unselected`}},h={args:{theme:`Client`,style:`--default`,state:`--unselected`}},g={args:{theme:`Client`,style:`--default`,state:`--selected`}},_={args:{theme:`Client`,style:`--disabled`,state:`--selected`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    style: '--default',
    state: '--unselected'
  },
  render: args => <InteractiveToggle {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    style: '--default',
    state: '--selected'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    style: '--disabled',
    state: '--unselected'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    style: '--default',
    state: '--unselected'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    style: '--default',
    state: '--selected'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    style: '--disabled',
    state: '--selected'
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`ProspectSelected`,`ProspectDisabled`,`ClientUnselected`,`ClientSelected`,`ClientDisabledOn`]}))();export{_ as ClientDisabledOn,g as ClientSelected,h as ClientUnselected,f as Playground,m as ProspectDisabled,p as ProspectSelected,v as __namedExportsOrder,u as default};