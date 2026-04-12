import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";import{n as i,r as a,t as o}from"./Checkbox-BtlWxQLy.js";var s,c,l,u,d,f,p,m,h,g,_;t((()=>{s=e(n(),1),i(),a(),c=r(),l={title:`Atomes/Checkbox`,component:o,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`],description:`Détermine l'arrondi (border-radius) et les spécificités de couleurs`},state:{control:`select`,options:[`--unselected`,`--hover`,`--selected`,`--error`,`--hover_error`],description:`L'état de la Checkbox (au repos, sélectionné, ou en erreur)`},onClick:{action:`clicked`,description:`Événement émis lors du clic`}}},u=e=>{let[t,n]=(0,s.useState)(e.state);(0,s.useEffect)(()=>{n(e.state)},[e.state]);let r=()=>{n(e=>e===`--selected`?`--unselected`:`--selected`)};return(0,c.jsx)(o,{...e,state:t,onClick:r})},d={args:{theme:`Prospect`,state:`--unselected`},render:e=>(0,c.jsx)(u,{...e})},f={args:{theme:`Prospect`,state:`--selected`}},p={args:{theme:`Prospect`,state:`--unselected`}},m={args:{theme:`Client`,state:`--unselected`}},h={args:{theme:`Client`,state:`--error`}},g={args:{theme:`Client`,state:`--hover_error`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--unselected'
  },
  render: args => <InteractiveCheckbox {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--selected'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    state: '--unselected'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    state: '--unselected'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    state: '--error'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    state: '--hover_error'
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`ProspectSelected`,`ProspectUnselected`,`ClientUnselected`,`ClientError`,`ClientHoverError`]}))();export{h as ClientError,g as ClientHoverError,m as ClientUnselected,d as Playground,f as ProspectSelected,p as ProspectUnselected,_ as __namedExportsOrder,l as default};