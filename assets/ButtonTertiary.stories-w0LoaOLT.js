import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({theme:e=`Prospect`,device:t=`--desk`,state:n=`--default`,label:r=`Tertiary`,iconLeft:a=!1,iconRight:o=!1,onClick:s,className:c=``})=>{let l=n===`--disabled`,u=e.toLowerCase(),d=t===`--desk`?`desk`:`mob`,f=n.replace(`--`,``);return(0,i.jsxs)(`button`,{className:[`btn-tertiary`,`btn-tertiary--${u}`,`btn-tertiary--${d}`,`btn-tertiary--${f}`,c].filter(Boolean).join(` `),disabled:l,onClick:l?void 0:s,type:`button`,children:[a&&(0,i.jsx)(`span`,{className:`btn-tertiary__icon`,"aria-hidden":`true`,children:`←`}),(0,i.jsx)(`span`,{className:`btn-tertiary__label`,children:r}),l?(0,i.jsx)(`span`,{className:`btn-tertiary__spinner`,"aria-hidden":`true`}):o&&(0,i.jsx)(`span`,{className:`btn-tertiary__icon`,"aria-hidden":`true`,children:`→`})]})},a.__docgenInfo={description:``,methods:[],displayName:`ButtonTertiary`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--desk' | '--mob'`,elements:[{name:`literal`,value:`'--desk'`},{name:`literal`,value:`'--mob'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--default' | '--hover' | '--active' | '--disabled'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--hover'`},{name:`literal`,value:`'--active'`},{name:`literal`,value:`'--disabled'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Tertiary'`,computed:!1}},iconLeft:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},iconRight:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),s,c,l,u,d;e((()=>{o(),s=n(),c={title:`Actions/Button Tertiary`,component:a,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},state:{control:`radio`,options:[`--default`,`--hover`,`--active`,`--disabled`]},label:{control:`text`},iconLeft:{control:`boolean`},iconRight:{control:`boolean`}}},l={args:{theme:`Prospect`,device:`--desk`,state:`--default`,label:`Tertiary`}},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Prospect — Desktop`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,state:`--default`,label:`Default`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,state:`--hover`,label:`Hover`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,state:`--active`,label:`Active`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,state:`--disabled`,label:`Disabled`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Client — Desktop`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Client`,device:`--desk`,state:`--default`,label:`Default`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,state:`--hover`,label:`Hover`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,state:`--active`,label:`Active`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,state:`--disabled`,label:`Disabled`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Mobile`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Prospect`,device:`--mob`,state:`--default`,label:`Prospect mob`}),(0,s.jsx)(a,{theme:`Client`,device:`--mob`,state:`--default`,label:`Client mob`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    state: '--default',
    label: 'Tertiary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Prospect — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonTertiary theme="Prospect" device="--desk" state="--default" label="Default" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--hover" label="Hover" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--active" label="Active" />
          <ButtonTertiary theme="Prospect" device="--desk" state="--disabled" label="Disabled" />
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
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonTertiary theme="Client" device="--desk" state="--default" label="Default" />
          <ButtonTertiary theme="Client" device="--desk" state="--hover" label="Hover" />
          <ButtonTertiary theme="Client" device="--desk" state="--active" label="Active" />
          <ButtonTertiary theme="Client" device="--desk" state="--disabled" label="Disabled" />
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
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonTertiary theme="Prospect" device="--mob" state="--default" label="Prospect mob" />
          <ButtonTertiary theme="Client" device="--mob" state="--default" label="Client mob" />
        </div>
      </section>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`AllVariants`]}))();export{u as AllVariants,l as Playground,d as __namedExportsOrder,c as default};