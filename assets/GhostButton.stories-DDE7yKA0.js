import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-fcfuQg7E.js";import{n,t as r}from"./GhostButton-DvsyR8OY.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Actions/Ghost Button`,component:r,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},state:{control:`radio`,options:[`--default`,`--hover`,`--active`]},label:{control:`text`},iconLeft:{control:`boolean`},iconRight:{control:`boolean`}}},o={args:{theme:`Prospect`,device:`--desk`,state:`--default`,label:`Voir plus`}},s={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,i.jsxs)(`section`,{children:[(0,i.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Prospect — Desktop`}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,i.jsx)(r,{theme:`Prospect`,device:`--desk`,state:`--default`,label:`Voir plus`}),(0,i.jsx)(r,{theme:`Prospect`,device:`--desk`,state:`--hover`,label:`Voir plus`}),(0,i.jsx)(r,{theme:`Prospect`,device:`--desk`,state:`--active`,label:`Voir plus`})]})]}),(0,i.jsxs)(`section`,{children:[(0,i.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Client — Desktop`}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,i.jsx)(r,{theme:`Client`,device:`--desk`,state:`--default`,label:`Voir plus`}),(0,i.jsx)(r,{theme:`Client`,device:`--desk`,state:`--hover`,label:`Voir plus`}),(0,i.jsx)(r,{theme:`Client`,device:`--desk`,state:`--active`,label:`Voir plus`})]})]}),(0,i.jsxs)(`section`,{children:[(0,i.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Mobile`}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[(0,i.jsx)(r,{theme:`Prospect`,device:`--mob`,state:`--default`,label:`Voir plus`}),(0,i.jsx)(r,{theme:`Client`,device:`--mob`,state:`--default`,label:`Voir plus`})]})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--default',
    label: 'Voir plus'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Prospect — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <GhostButton theme="Prospect" device="--desk" state="--default" label="Voir plus" />
          <GhostButton theme="Prospect" device="--desk" state="--hover" label="Voir plus" />
          <GhostButton theme="Prospect" device="--desk" state="--active" label="Voir plus" />
        </div>
      </section>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Client — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <GhostButton theme="Client" device="--desk" state="--default" label="Voir plus" />
          <GhostButton theme="Client" device="--desk" state="--hover" label="Voir plus" />
          <GhostButton theme="Client" device="--desk" state="--active" label="Voir plus" />
        </div>
      </section>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Mobile</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <GhostButton theme="Prospect" device="--mob" state="--default" label="Voir plus" />
          <GhostButton theme="Client" device="--mob" state="--default" label="Voir plus" />
        </div>
      </section>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Playground`,`AllVariants`]}))();export{s as AllVariants,o as Playground,c as __namedExportsOrder,a as default};