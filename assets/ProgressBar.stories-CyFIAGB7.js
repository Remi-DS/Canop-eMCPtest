import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({theme:e=`Prospect`,value:t=0,showPercentage:n=!1,className:r=``})=>{let a=Math.min(100,Math.max(0,t));return(0,i.jsxs)(`div`,{className:[`progress-bar`,`progress-bar--${e.toLowerCase()}`,r].filter(Boolean).join(` `),children:[(0,i.jsx)(`div`,{className:`progress-bar__track`,children:(0,i.jsx)(`div`,{className:`progress-bar__fill`,style:{width:`${a}%`}})}),n&&(0,i.jsxs)(`span`,{className:`progress-bar__label`,children:[a,` %`]})]})},a.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},value:{required:!1,tsType:{name:`number`},description:`Valeur de 0 à 100`,defaultValue:{value:`0`,computed:!1}},showPercentage:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),s,c,l,u,d,f,p;e((()=>{o(),s=n(),c={title:`Atomes/ProgressBar`,component:a,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},value:{control:{type:`range`,min:0,max:100,step:5},description:`Valeur de 0 à 100`},showPercentage:{control:`boolean`,description:`Affiche le % à droite`}}},l={args:{theme:`Prospect`,value:50,showPercentage:!0},decorators:[e=>(0,s.jsx)(`div`,{style:{width:`300px`,padding:`16px`},children:(0,s.jsx)(e,{})})]},u={args:{theme:`Prospect`,value:0,showPercentage:!1}},d={args:{theme:`Prospect`,value:100,showPercentage:!0}},f={args:{theme:`Client`,value:50,showPercentage:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    value: 50,
    showPercentage: true
  },
  decorators: [Story => <div style={{
    width: '300px',
    padding: '16px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    value: 0,
    showPercentage: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    value: 100,
    showPercentage: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    value: 50,
    showPercentage: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`ProspectEmpty`,`ProspectFull`,`ClientHalf`]}))();export{f as ClientHalf,l as Playground,u as ProspectEmpty,d as ProspectFull,p as __namedExportsOrder,c as default};