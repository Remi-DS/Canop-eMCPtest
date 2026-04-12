import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";import{n as r,t as i}from"./GhostButton-DvsyR8OY.js";var a=e((()=>{})),o,s,c=e((()=>{t(),a(),r(),o=n(),s=({label:e=`Label`,description:t=`Description`,afficheDescription:n=!0,afficherLienInfo:r=!0,champObligatoire:a=!0,device:s=`--desk`,style:c=`--default`,theme:l=`Prospect`,className:u=``,onActionClick:d})=>(0,o.jsxs)(`div`,{className:`ds-item-label ds-item-label--${s===`--desk`?`desk`:`mob`} ds-item-label--${c===`--default`?`default`:`modify`} ds-item-label--${l.toLowerCase()} ${u}`,children:[(0,o.jsxs)(`div`,{className:`ds-item-label__content`,children:[(0,o.jsxs)(`div`,{className:`ds-item-label__header`,children:[(0,o.jsxs)(`span`,{className:`ds-item-label__title`,children:[e,a&&(0,o.jsx)(`span`,{className:`ds-item-label__mandatory`,children:` *`})]}),c===`--default`&&r&&(0,o.jsx)(i,{theme:l,device:s,label:`En savoir plus`,iconLeft:!0,onClick:d,className:`ds-item-label__info-btn`})]}),n&&t&&(0,o.jsx)(`p`,{className:`ds-item-label__description`,children:t})]}),c===`--modify`&&(0,o.jsx)(i,{theme:l,device:s,label:`Modifier`,onClick:d,className:`ds-item-label__modify-btn`})]}),s.__docgenInfo={description:``,methods:[],displayName:`ItemLabel`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Description'`,computed:!1}},afficheDescription:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},afficherLienInfo:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},champObligatoire:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--mob' | '--desk'`,elements:[{name:`literal`,value:`'--mob'`},{name:`literal`,value:`'--desk'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'--default' | '--modify'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--modify'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onActionClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),l,u,d,f,p;e((()=>{c(),l=n(),u={title:`Atoms/Item Label`,component:s,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},style:{control:`radio`,options:[`--default`,`--modify`]},label:{control:`text`},description:{control:`text`},champObligatoire:{control:`boolean`},afficheDescription:{control:`boolean`},afficherLienInfo:{control:`boolean`}}},d={args:{theme:`Prospect`,device:`--desk`,style:`--default`,label:`Votre âge`,description:`Indiquez l'âge du conducteur principal`,champObligatoire:!0}},f={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:48},children:[(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:16,fontSize:14,color:`#666`},children:`Style Default (Label + Description + Info)`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,l.jsx)(s,{label:`Label Desktop`,description:`Ceci est une description desktop`,device:`--desk`}),(0,l.jsx)(s,{label:`Label Mobile`,description:`Ceci est une description mobile`,device:`--mob`})]})]}),(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:16,fontSize:14,color:`#666`},children:`Style Modify (Label + Description + Bouton Modifier)`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,l.jsx)(s,{style:`--modify`,label:`Date de naissance`,description:`12/05/1985`,theme:`Prospect`}),(0,l.jsx)(s,{style:`--modify`,label:`Option Client`,description:`Premium XL`,theme:`Client`})]})]}),(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:16,fontSize:14,color:`#666`},children:`États secondaires`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,l.jsx)(s,{label:`Optionnel`,champObligatoire:!1,description:`Pas d'astérisque ici`}),(0,l.jsx)(s,{label:`Sans description`,afficheDescription:!1}),(0,l.jsx)(s,{label:`Sans lien info`,afficherLienInfo:!1})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    label: 'Votre âge',
    description: 'Indiquez l\\'âge du conducteur principal',
    champObligatoire: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <section>
        <h3 style={{
        marginBottom: 16,
        fontSize: 14,
        color: '#666'
      }}>Style Default (Label + Description + Info)</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <ItemLabel label="Label Desktop" description="Ceci est une description desktop" device="--desk" />
          <ItemLabel label="Label Mobile" description="Ceci est une description mobile" device="--mob" />
        </div>
      </section>

      <section>
        <h3 style={{
        marginBottom: 16,
        fontSize: 14,
        color: '#666'
      }}>Style Modify (Label + Description + Bouton Modifier)</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <ItemLabel style="--modify" label="Date de naissance" description="12/05/1985" theme="Prospect" />
          <ItemLabel style="--modify" label="Option Client" description="Premium XL" theme="Client" />
        </div>
      </section>

      <section>
        <h3 style={{
        marginBottom: 16,
        fontSize: 14,
        color: '#666'
      }}>États secondaires</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <ItemLabel label="Optionnel" champObligatoire={false} description="Pas d'astérisque ici" />
          <ItemLabel label="Sans description" afficheDescription={false} />
          <ItemLabel label="Sans lien info" afficherLienInfo={false} />
        </div>
      </section>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AllVariants`]}))();export{f as AllVariants,d as Playground,p as __namedExportsOrder,u as default};