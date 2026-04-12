import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({device:e=`Desktop`,state:t=`Selected`,theme:n=`Prospect`,className:r=``,onClick:a})=>{let o=e===`Desktop`?`desk`:`mob`,s=t.toLowerCase(),c=n.toLowerCase();return(0,i.jsx)(`div`,{role:a?`button`:`presentation`,tabIndex:a?0:void 0,className:`level-bar level-bar--${o} level-bar--${s} level-bar--${c} ${r}`,onClick:a,onKeyDown:e=>{a&&(e.key===`Enter`||e.key===` `)&&a()},"aria-label":`Level bar ${t}`})},a.__docgenInfo={description:``,methods:[],displayName:`LevelBar`,props:{device:{required:!1,tsType:{name:`union`,raw:`'Desktop' | 'Mobile'`,elements:[{name:`literal`,value:`'Desktop'`},{name:`literal`,value:`'Mobile'`}]},description:``,defaultValue:{value:`'Desktop'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Unselected' | 'Selected' | 'Hovered'`,elements:[{name:`literal`,value:`'Unselected'`},{name:`literal`,value:`'Selected'`},{name:`literal`,value:`'Hovered'`}]},description:``,defaultValue:{value:`'Selected'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'Client' | 'Prospect'`,elements:[{name:`literal`,value:`'Client'`},{name:`literal`,value:`'Prospect'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),s,c,l,u,d;e((()=>{o(),s=n(),c={title:`Atoms/Level Bar`,component:a,tags:[`autodocs`],argTypes:{device:{control:`radio`,options:[`Desktop`,`Mobile`]},state:{control:`radio`,options:[`Unselected`,`Selected`,`Hovered`]},theme:{control:`radio`,options:[`Client`,`Prospect`]}}},l={args:{device:`Desktop`,state:`Selected`,theme:`Prospect`}},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`},children:[(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Desktop (Hauteur: 16px)`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(a,{device:`Desktop`,state:`Unselected`}),(0,s.jsx)(a,{device:`Desktop`,state:`Hovered`}),(0,s.jsx)(a,{device:`Desktop`,state:`Selected`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Mobile (Hauteur: 24px)`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(a,{device:`Mobile`,state:`Unselected`}),(0,s.jsx)(a,{device:`Mobile`,state:`Hovered`}),(0,s.jsx)(a,{device:`Mobile`,state:`Selected`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Exemple d'intégration (Étapes)`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,s.jsx)(a,{device:`Desktop`,state:`Selected`}),(0,s.jsx)(a,{device:`Desktop`,state:`Selected`}),(0,s.jsx)(a,{device:`Desktop`,state:`Selected`}),(0,s.jsx)(a,{device:`Desktop`,state:`Selected`}),(0,s.jsx)(a,{device:`Desktop`,state:`Unselected`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    device: 'Desktop',
    state: 'Selected',
    theme: 'Prospect'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Desktop (Hauteur: 16px)</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <LevelBar device="Desktop" state="Unselected" />
          <LevelBar device="Desktop" state="Hovered" />
          <LevelBar device="Desktop" state="Selected" />
        </div>
      </section>
      
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Mobile (Hauteur: 24px)</h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <LevelBar device="Mobile" state="Unselected" />
          <LevelBar device="Mobile" state="Hovered" />
          <LevelBar device="Mobile" state="Selected" />
        </div>
      </section>

      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Exemple d'intégration (Étapes)</h3>
        <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Selected" />
          <LevelBar device="Desktop" state="Unselected" />
        </div>
      </section>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`AllVariants`]}))();export{u as AllVariants,l as Playground,d as __namedExportsOrder,c as default};