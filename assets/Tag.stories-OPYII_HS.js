import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o,s,c=e((()=>{t(),r(),i=n(),a={"--info":{text:`#00008f`,bg:`#f5f5fb`,border:`#00008f`},"--success":{text:`#188038`,bg:`#f6faf7`,border:`#188038`},"--warning":{text:`#bf4a13`,bg:`#fdf8f6`,border:`#bf4a13`},"--error":{text:`#e50000`,bg:`#fdf8f6`,border:`#e50000`},"--neutral":{text:`#5c5c5c`,bg:`#f5f5f5`,border:`#5c5c5c`}},o=`white`,s=({theme:e=`Prospect`,device:t=`--desk`,style:n=`--info`,text:r=`Texte`,className:s=``})=>{let c=a[n],l=e===`Client`?o:c.bg;return(0,i.jsx)(`span`,{className:[`tag`,`tag--${e.toLowerCase()}`,`tag--${t.replace(`--`,``)}`,`tag--${n.replace(`--`,``)}`,s].filter(Boolean).join(` `),style:{background:l,borderColor:c.border,color:c.text,borderRadius:`4px`},children:r})},s.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--desk' | '--mob'`,elements:[{name:`literal`,value:`'--desk'`},{name:`literal`,value:`'--mob'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'--info' | '--success' | '--warning' | '--error' | '--neutral'`,elements:[{name:`literal`,value:`'--info'`},{name:`literal`,value:`'--success'`},{name:`literal`,value:`'--warning'`},{name:`literal`,value:`'--error'`},{name:`literal`,value:`'--neutral'`}]},description:``,defaultValue:{value:`'--info'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Texte'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),l,u,d,f,p,m,h,g,_;e((()=>{c(),l={title:`Atomes/Tag`,component:s,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},style:{control:`select`,options:[`--info`,`--success`,`--warning`,`--error`,`--neutral`]},text:{control:`text`}}},u={args:{theme:`Prospect`,device:`--desk`,style:`--info`,text:`Texte`}},d={args:{style:`--info`,text:`Info`}},f={args:{style:`--success`,text:`Succès`}},p={args:{style:`--warning`,text:`Attention`}},m={args:{style:`--error`,text:`Erreur`}},h={args:{style:`--neutral`,text:`Neutre`}},g={args:{device:`--mob`,text:`Mobile`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--info',
    text: 'Texte'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    style: '--info',
    text: 'Info'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    style: '--success',
    text: 'Succès'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    style: '--warning',
    text: 'Attention'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    style: '--error',
    text: 'Erreur'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    style: '--neutral',
    text: 'Neutre'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    device: '--mob',
    text: 'Mobile'
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Info`,`Success`,`Warning`,`Error`,`Neutral`,`Mobile`]}))();export{m as Error,d as Info,g as Mobile,h as Neutral,u as Playground,f as Success,p as Warning,_ as __namedExportsOrder,l as default};