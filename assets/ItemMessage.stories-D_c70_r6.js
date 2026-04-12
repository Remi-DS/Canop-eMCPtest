import{n as e}from"./chunk-BneVvdWh.js";import{n as t,r as n,t as r}from"./ItemMessage-CaXHIz5T.js";var i,a,o,s,c,l,u;e((()=>{t(),n(),i={title:`Atomes/ItemMessage`,component:r,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`],description:`Le thème de visualisation du message`,table:{defaultValue:{summary:`Prospect`}}},device:{control:`inline-radio`,options:[`--desk`,`--mob`],description:`Gère la taille de la typographie et de l'icône selon le support`,table:{defaultValue:{summary:`--desk`}}},status:{control:`select`,options:[`--sucess`,`--warning`,`--error`],description:`Le statut d'alerte modifiant la couleur et l'icône`,table:{defaultValue:{summary:`--sucess`}}},text:{control:`text`,description:`Le contenu texte du message`},className:{table:{disable:!0}}}},a={args:{theme:`Prospect`,device:`--desk`,status:`--sucess`,text:`Votre configuration a bien été enregistrée.`}},o={args:{theme:`Prospect`,device:`--desk`,status:`--sucess`,text:`Validation du contrat effectuée.`}},s={args:{theme:`Prospect`,device:`--mob`,status:`--error`,text:`Oups, une erreur est survenue lors de la saisie.`}},c={args:{theme:`Client`,device:`--desk`,status:`--warning`,text:`La date d'expiration approche.`}},l={args:{theme:`Client`,device:`--mob`,status:`--sucess`,text:`Vos informations sont à jour.`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    status: '--sucess',
    text: 'Votre configuration a bien été enregistrée.'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    status: '--sucess',
    text: 'Validation du contrat effectuée.'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--mob',
    status: '--error',
    text: 'Oups, une erreur est survenue lors de la saisie.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    device: '--desk',
    status: '--warning',
    text: 'La date d\\'expiration approche.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Client',
    device: '--mob',
    status: '--sucess',
    text: 'Vos informations sont à jour.'
  }
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`ProspectDesktopSuccess`,`ProspectMobileError`,`ClientDesktopWarning`,`ClientMobileSuccess`]}))();export{c as ClientDesktopWarning,l as ClientMobileSuccess,a as Playground,o as ProspectDesktopSuccess,s as ProspectMobileError,u as __namedExportsOrder,i as default};