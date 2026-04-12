import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({size:e=`M`,state:t=`primary`,style:n=`with-bg`,theme:r=`Prospect`,className:a=``,iconSrc:o,children:s})=>(0,i.jsx)(`div`,{className:`ds-icon ds-icon--${e.toLowerCase()} ds-icon--${t.toLowerCase()} ds-icon--${n.toLowerCase()} ds-icon--${r.toLowerCase()} ${a}`,children:(0,i.jsx)(`div`,{className:`ds-icon__inner`,children:o?(0,i.jsx)(`img`,{src:o,alt:``,className:`ds-icon__svg`}):s})}),a.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{size:{required:!1,tsType:{name:`union`,raw:`'XS' | 'S' | 'M' | 'L'`,elements:[{name:`literal`,value:`'XS'`},{name:`literal`,value:`'S'`},{name:`literal`,value:`'M'`},{name:`literal`,value:`'L'`}]},description:``,defaultValue:{value:`'M'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'disabled' | 'error' | 'warning' | 'success'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'with-bg' | 'without-bg'`,elements:[{name:`literal`,value:`'with-bg'`},{name:`literal`,value:`'without-bg'`}]},description:``,defaultValue:{value:`'with-bg'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},iconSrc:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),s,c,l,u,d,f,p,m;e((()=>{o(),s=n(),c={title:`Atoms/Icon`,component:a,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`XS`,`S`,`M`,`L`]},state:{control:`select`,options:[`primary`,`secondary`,`disabled`,`error`,`warning`,`success`]},style:{control:`radio`,options:[`with-bg`,`without-bg`]},theme:{control:`radio`,options:[`Prospect`,`Client`]}}},l=`http://localhost:3845/assets/41f083c30d44a0e4cbdbdccd333bc8f3d67aa99a.svg`,u={args:{size:`M`,state:`primary`,style:`with-bg`,theme:`Prospect`,iconSrc:l}},d={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`},children:[(0,s.jsx)(a,{state:`primary`,iconSrc:l}),(0,s.jsx)(a,{state:`secondary`,iconSrc:l}),(0,s.jsx)(a,{state:`success`,iconSrc:l}),(0,s.jsx)(a,{state:`error`,iconSrc:l}),(0,s.jsx)(a,{state:`warning`,iconSrc:l}),(0,s.jsx)(a,{state:`disabled`,iconSrc:l})]})},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`48px`},children:[(0,s.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,s.jsx)(a,{theme:`Prospect`,state:`primary`,iconSrc:l}),(0,s.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Prospect (Rond)`})]}),(0,s.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,s.jsx)(a,{theme:`Client`,state:`primary`,iconSrc:l}),(0,s.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Client (Carré arrondi)`})]})]})},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,s.jsx)(a,{size:`XS`,iconSrc:l}),(0,s.jsx)(a,{size:`S`,iconSrc:l}),(0,s.jsx)(a,{size:`M`,iconSrc:l}),(0,s.jsx)(a,{size:`L`,iconSrc:l})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    state: 'primary',
    style: 'with-bg',
    theme: 'Prospect',
    iconSrc: EXAMPLE_ICON
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Icon state="primary" iconSrc={EXAMPLE_ICON} />
      <Icon state="secondary" iconSrc={EXAMPLE_ICON} />
      <Icon state="success" iconSrc={EXAMPLE_ICON} />
      <Icon state="error" iconSrc={EXAMPLE_ICON} />
      <Icon state="warning" iconSrc={EXAMPLE_ICON} />
      <Icon state="disabled" iconSrc={EXAMPLE_ICON} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '48px'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon theme="Prospect" state="primary" iconSrc={EXAMPLE_ICON} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Prospect (Rond)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon theme="Client" state="primary" iconSrc={EXAMPLE_ICON} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Client (Carré arrondi)</p>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Icon size="XS" iconSrc={EXAMPLE_ICON} />
      <Icon size="S" iconSrc={EXAMPLE_ICON} />
      <Icon size="M" iconSrc={EXAMPLE_ICON} />
      <Icon size="L" iconSrc={EXAMPLE_ICON} />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`StatesWithBg`,`Themes`,`Sizes`]}))();export{u as Playground,p as Sizes,d as StatesWithBg,f as Themes,m as __namedExportsOrder,c as default};