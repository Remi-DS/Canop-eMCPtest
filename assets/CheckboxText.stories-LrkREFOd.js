import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";import{n as i,t as a}from"./Checkbox-BtlWxQLy.js";import{n as o,t as s}from"./ItemMessage-CaXHIz5T.js";var c=t((()=>{})),l,u,d=t((()=>{n(),i(),o(),c(),l=r(),u=({theme:e=`Prospect`,device:t=`--desk`,state:n=`--unselected`,text:r=`Label`,errorMessage:i=`Titre du message`,className:o=``,onClick:c})=>{let u=n===`--error`||n===`--hover_error`,d=n;return(0,l.jsxs)(`button`,{className:[`checkbox-text-container`,e.toLowerCase(),t.replace(`--`,``),n.replace(`--`,``),o].filter(Boolean).join(` `),type:`button`,onClick:c,"aria-pressed":n===`--selected`,children:[(0,l.jsx)(a,{theme:e,state:d}),(0,l.jsxs)(`div`,{className:`checkbox-text-content`,children:[(0,l.jsx)(`span`,{className:`checkbox-text-label`,children:r}),u&&(0,l.jsx)(s,{theme:e,device:t,status:`--error`,text:i})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`CheckboxText`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--desk' | '--mob'`,elements:[{name:`literal`,value:`'--desk'`},{name:`literal`,value:`'--mob'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--unselected' | '--hover' | '--selected' | '--error' | '--hover_error'`,elements:[{name:`literal`,value:`'--unselected'`},{name:`literal`,value:`'--hover'`},{name:`literal`,value:`'--selected'`},{name:`literal`,value:`'--error'`},{name:`literal`,value:`'--hover_error'`}]},description:``,defaultValue:{value:`'--unselected'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},errorMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Titre du message'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),f,p,m,h,g,_,v,y,b,x;t((()=>{f=e(n(),1),d(),p=r(),m={title:`Molecules/CheckboxText`,component:u,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`],description:`Thème du composant`},device:{control:`radio`,options:[`--desk`,`--mob`],description:`Contexte d'affichage (taille de typographie)`},state:{control:`select`,options:[`--unselected`,`--hover`,`--selected`,`--error`,`--hover_error`],description:`État du composant`},text:{control:`text`,description:`Texte du label`},errorMessage:{control:`text`,description:`Message d'erreur affiché sous le label (uniquement pour --error et --hover_error)`},onClick:{action:`clicked`}}},h=e=>{let[t,n]=(0,f.useState)(e.state);(0,f.useEffect)(()=>{n(e.state)},[e.state]);let r=()=>{n(e=>e===`--selected`?`--unselected`:e===`--unselected`||e===`--hover`?`--selected`:e)};return(0,p.jsx)(u,{...e,state:t,onClick:r})},g={args:{theme:`Prospect`,device:`--desk`,state:`--unselected`,text:`Cocher cette option pour continuer`,errorMessage:`Veuillez cocher cette case`},render:e=>(0,p.jsx)(h,{...e})},_={args:{theme:`Prospect`,device:`--desk`,state:`--selected`,text:`Option sélectionnée`}},v={args:{theme:`Prospect`,device:`--desk`,state:`--error`,text:`J'accepte les conditions générales`,errorMessage:`Ce champ est obligatoire pour continuer`}},y={args:{theme:`Client`,device:`--mob`,state:`--unselected`,text:`Client (Mobile)`}},b={args:{theme:`Client`,device:`--mob`,state:`--error`,text:`Confirmer mon choix`,errorMessage:`Champ obligatoire`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--unselected',
    text: 'Cocher cette option pour continuer',
    errorMessage: 'Veuillez cocher cette case'
  },
  render: args => <InteractiveCheckboxText {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--selected',
    text: 'Option sélectionnée'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--error',
    text: 'J\\'accepte les conditions générales',
    errorMessage: 'Ce champ est obligatoire pour continuer'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    device: '--mob',
    state: '--unselected',
    text: 'Client (Mobile)'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    device: '--mob',
    state: '--error',
    text: 'Confirmer mon choix',
    errorMessage: 'Champ obligatoire'
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`ProspectDesktopSelected`,`ProspectDesktopError`,`ClientMobileUnselected`,`ClientMobileError`]}))();export{b as ClientMobileError,y as ClientMobileUnselected,g as Playground,v as ProspectDesktopError,_ as ProspectDesktopSelected,x as __namedExportsOrder,m as default};