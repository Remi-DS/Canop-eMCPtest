import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o,s=e((()=>{t(),r(),i=n(),a={SOLID_BLUE:`http://localhost:3845/assets/920161dc35fa02bb87b1d6de0209f43a1c01cde7.svg`,OPEN_BLUE:`http://localhost:3845/assets/57d477173c087d11b7e0c5d94b6baa56a0589106.svg`,OPEN_WHITE:`http://localhost:3845/assets/c90a69b22d68d016208dbc76b703e840973daf05.svg`,SWITCH:`http://localhost:3845/assets/747769b8befff13c827cb3cd46483dabd0e16657.svg`,WEALTH_INNER:`http://localhost:3845/assets/54784bff79388bc99b1d994755f9795409e9bbac.svg`},o=({type:e=`Solid blue`,className:t=``,size:n=48})=>{let r={width:typeof n==`number`?`${n}px`:n,height:typeof n==`number`?`${n}px`:n};return(0,i.jsx)(`div`,{className:`ds-logo-axa ds-logo-axa--${e.replace(` `,`-`).toLowerCase()} ${t}`,style:r,children:(()=>{switch(e){case`Open blue`:return(0,i.jsxs)(`div`,{className:`ds-logo-axa__open-blue`,children:[(0,i.jsx)(`img`,{src:a.SWITCH,alt:``,className:`ds-logo-axa__switch`}),(0,i.jsx)(`img`,{src:a.OPEN_BLUE,alt:`AXA Logo`,className:`ds-logo-axa__base`})]});case`Open white`:return(0,i.jsx)(`img`,{src:a.OPEN_WHITE,alt:`AXA Logo`,className:`ds-logo-axa__base`});case`Wealth`:return(0,i.jsx)(`div`,{className:`ds-logo-axa__wealth`,children:(0,i.jsx)(`img`,{src:a.WEALTH_INNER,alt:`AXA Wealth`,className:`ds-logo-axa__base`})});default:return(0,i.jsx)(`img`,{src:a.SOLID_BLUE,alt:`AXA Logo`,className:`ds-logo-axa__base`})}})()})},o.__docgenInfo={description:``,methods:[],displayName:`LogoAxa`,props:{type:{required:!1,tsType:{name:`union`,raw:`'Solid blue' | 'Open blue' | 'Open white' | 'Wealth'`,elements:[{name:`literal`,value:`'Solid blue'`},{name:`literal`,value:`'Open blue'`},{name:`literal`,value:`'Open white'`},{name:`literal`,value:`'Wealth'`}]},description:``,defaultValue:{value:`'Solid blue'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`48`,computed:!1}}}}})),c,l,u,d,f,p;e((()=>{s(),c=n(),l={title:`Atoms/Logo AXA`,component:o,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`Solid blue`,`Open blue`,`Open white`,`Wealth`]},size:{control:{type:`number`,min:24,max:200,step:8}}}},u={args:{type:`Solid blue`,size:48}},d={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`32px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(o,{type:`Solid blue`,size:64}),(0,c.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Solid blue`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(o,{type:`Open blue`,size:64}),(0,c.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Open blue`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`center`,backgroundColor:`#00008f`,padding:`16px`,borderRadius:`8px`,color:`white`},children:[(0,c.jsx)(o,{type:`Open white`,size:64}),(0,c.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Open white`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,c.jsx)(o,{type:`Wealth`,size:64}),(0,c.jsx)(`p`,{style:{marginTop:8,fontSize:12},children:`Wealth`})]})]})},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`32px`,alignItems:`flex-end`},children:[(0,c.jsx)(o,{type:`Solid blue`,size:32}),(0,c.jsx)(o,{type:`Solid blue`,size:48}),(0,c.jsx)(o,{type:`Solid blue`,size:80}),(0,c.jsx)(o,{type:`Solid blue`,size:120})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Solid blue',
    size: 48
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <LogoAxa type="Solid blue" size={64} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Solid blue</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <LogoAxa type="Open blue" size={64} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Open blue</p>
      </div>
      <div style={{
      textAlign: 'center',
      backgroundColor: '#00008f',
      padding: '16px',
      borderRadius: '8px',
      color: 'white'
    }}>
        <LogoAxa type="Open white" size={64} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Open white</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <LogoAxa type="Wealth" size={64} />
        <p style={{
        marginTop: 8,
        fontSize: 12
      }}>Wealth</p>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-end'
  }}>
      <LogoAxa type="Solid blue" size={32} />
      <LogoAxa type="Solid blue" size={48} />
      <LogoAxa type="Solid blue" size={80} />
      <LogoAxa type="Solid blue" size={120} />
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AllStyles`,`Sizes`]}))();export{d as AllStyles,u as Playground,f as Sizes,p as __namedExportsOrder,l as default};