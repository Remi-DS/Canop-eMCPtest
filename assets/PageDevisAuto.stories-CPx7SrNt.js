import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";var i=t((()=>{})),a,o,s,c,l,u,d=t((()=>{a=e(n(),1),i(),o=r(),s=`http://localhost:3845/assets/127244edcb14dd89ddb8464cca2b60fd9cc80591.svg`,c=`http://localhost:3845/assets/e3054f3a6518d2a3ec0dd9c6d5ec3ad7994c817c.svg`,l=[`Madame`,`Monsieur`,`Titre`,`Titre`],u=({currentStep:e=1,totalSteps:t=3,stepLabel:n=`Étape {current} sur {total}`,pageTitle:r=`Votre besoin`,infoMessage:i=`Obtenez votre tarif en 5 minutes !`,question:u=`Qui souhaitez-vous assurer ?`,options:d=l,ctaLabel:f=`Suivant`})=>{let[p,m]=(0,a.useState)(null),h=n.replace(`{current}`,String(e)).replace(`{total}`,String(t));return(0,o.jsxs)(`div`,{className:`page-devis`,children:[(0,o.jsx)(`header`,{className:`page-header`,children:(0,o.jsxs)(`div`,{className:`page-header__content`,children:[(0,o.jsx)(`img`,{src:s,alt:`AXA`,className:`page-header__logo`}),(0,o.jsx)(`p`,{className:`page-header__title`,children:`Devis assurance auto`})]})}),(0,o.jsxs)(`main`,{className:`page-devis__container`,children:[(0,o.jsxs)(`section`,{className:`stepper`,children:[(0,o.jsxs)(`div`,{className:`stepper__labels`,children:[(0,o.jsx)(`p`,{className:`stepper__subtitle`,children:h}),(0,o.jsx)(`h1`,{className:`stepper__title`,children:r})]}),(0,o.jsx)(`div`,{className:`progress-bar-group`,children:Array.from({length:t}).map((t,n)=>(0,o.jsx)(`div`,{className:`progress-bar-item`,children:n<e&&(0,o.jsx)(`div`,{className:`progress-bar-item__fill`})},n))}),(0,o.jsx)(`p`,{className:`stepper__mention`,children:`Sauf mention contraire, tous les champs sont obligatoires.`})]}),(0,o.jsxs)(`div`,{className:`info-message`,children:[(0,o.jsx)(`img`,{src:c,alt:``,className:`info-message__icon`}),(0,o.jsx)(`p`,{className:`info-message__text`,children:i})]}),(0,o.jsxs)(`section`,{className:`question-section`,children:[(0,o.jsx)(`h2`,{className:`question-section__title`,children:u}),(0,o.jsx)(`div`,{className:`card-radio-group`,role:`radiogroup`,"aria-label":u,children:d.map(e=>(0,o.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":p===e,className:`card-radio${p===e?` is-selected`:``}`,onClick:()=>m(e),children:[(0,o.jsx)(`span`,{className:`card-radio__radio`,children:(0,o.jsx)(`span`,{className:`card-radio__radio-dot`})}),(0,o.jsx)(`span`,{className:`card-radio__label`,children:e})]},e))})]}),(0,o.jsx)(`div`,{className:`button-group`,children:(0,o.jsx)(`button`,{type:`button`,className:`btn-primary`,children:f})})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`PageDevisAuto`,props:{currentStep:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},totalSteps:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},stepLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Étape {current} sur {total}'`,computed:!1}},pageTitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Votre besoin'`,computed:!1}},infoMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Obtenez votre tarif en 5 minutes !'`,computed:!1}},question:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Qui souhaitez-vous assurer ?'`,computed:!1}},options:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`['Madame', 'Monsieur', 'Titre', 'Titre']`,computed:!1}},ctaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Suivant'`,computed:!1}}}}})),f,p,m,h,g,_;t((()=>{d(),f={title:`Templates/PageDevisAuto`,component:u,tags:[`autodocs`],parameters:{layout:`fullscreen`},argTypes:{currentStep:{control:{type:`number`,min:1,max:5},description:`Étape actuelle du parcours`},totalSteps:{control:{type:`number`,min:1,max:5},description:`Nombre total d'étapes`},pageTitle:{control:`text`,description:`Titre principal de la page (H1)`},infoMessage:{control:`text`,description:`Message informatif affiché en haut du formulaire`},question:{control:`text`,description:`Intitulé de la question du formulaire`},options:{control:`object`,description:`Liste des options radio`},ctaLabel:{control:`text`,description:`Texte du bouton d'action principal`}}},p={parameters:{viewport:{defaultViewport:`desktop`}},args:{currentStep:1,totalSteps:3,stepLabel:`Étape {current} sur {total}`,pageTitle:`Votre besoin`,infoMessage:`Obtenez votre tarif en 5 minutes !`,question:`Qui souhaitez-vous assurer ?`,options:[`Madame`,`Monsieur`,`Titre`,`Titre`],ctaLabel:`Suivant`}},m={parameters:{viewport:{defaultViewport:`mobile1`}},args:{currentStep:1,totalSteps:3,stepLabel:`Étape {current} sur {total}`,pageTitle:`Votre besoin`,infoMessage:`Obtenez votre tarif en 5 minutes !`,question:`Qui souhaitez-vous assurer ?`,options:[`Madame`,`Monsieur`,`Titre`,`Titre`],ctaLabel:`Suivant`}},h={args:{currentStep:2,totalSteps:3,pageTitle:`Votre véhicule`,infoMessage:`Renseignez les informations de votre véhicule.`,question:`Quel est votre type de véhicule ?`,options:[`Berline`,`SUV`,`Citadine`,`Utilitaire`],ctaLabel:`Suivant`}},g={args:{currentStep:3,totalSteps:3,pageTitle:`Votre profil`,infoMessage:`Quelques informations sur votre historique de conduite.`,question:`Avez-vous eu un sinistre ces 3 dernières années ?`,options:[`Oui`,`Non`],ctaLabel:`Obtenir mon devis`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  args: {
    currentStep: 1,
    totalSteps: 3,
    stepLabel: 'Étape {current} sur {total}',
    pageTitle: 'Votre besoin',
    infoMessage: 'Obtenez votre tarif en 5 minutes !',
    question: 'Qui souhaitez-vous assurer ?',
    options: ['Madame', 'Monsieur', 'Titre', 'Titre'],
    ctaLabel: 'Suivant'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    currentStep: 1,
    totalSteps: 3,
    stepLabel: 'Étape {current} sur {total}',
    pageTitle: 'Votre besoin',
    infoMessage: 'Obtenez votre tarif en 5 minutes !',
    question: 'Qui souhaitez-vous assurer ?',
    options: ['Madame', 'Monsieur', 'Titre', 'Titre'],
    ctaLabel: 'Suivant'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentStep: 2,
    totalSteps: 3,
    pageTitle: 'Votre véhicule',
    infoMessage: 'Renseignez les informations de votre véhicule.',
    question: 'Quel est votre type de véhicule ?',
    options: ['Berline', 'SUV', 'Citadine', 'Utilitaire'],
    ctaLabel: 'Suivant'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    currentStep: 3,
    totalSteps: 3,
    pageTitle: 'Votre profil',
    infoMessage: 'Quelques informations sur votre historique de conduite.',
    question: 'Avez-vous eu un sinistre ces 3 dernières années ?',
    options: ['Oui', 'Non'],
    ctaLabel: 'Obtenir mon devis'
  }
}`,...g.parameters?.docs?.source}}},_=[`Desktop`,`Mobile`,`Etape2`,`Etape3`]}))();export{p as Desktop,h as Etape2,g as Etape3,m as Mobile,_ as __namedExportsOrder,f as default};