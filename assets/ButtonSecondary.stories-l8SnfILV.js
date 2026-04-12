import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({theme:e=`Prospect`,device:t=`--desk`,style:n=`--default`,state:r=`--default`,label:a=`Secondary`,iconLeft:o=!1,iconRight:s=!1,onClick:c,className:l=``})=>{let u=r===`--disabled`,d=e.toLowerCase(),f=t===`--desk`?`desk`:`mob`,p=n.replace(`--`,``),m=r.replace(`--`,``);return(0,i.jsxs)(`button`,{className:[`btn-secondary`,`btn-secondary--${d}`,`btn-secondary--${f}`,`btn-secondary--style-${p}`,`btn-secondary--${m}`,l].filter(Boolean).join(` `),disabled:u,onClick:u?void 0:c,type:`button`,children:[o&&(0,i.jsx)(`span`,{className:`btn-secondary__icon`,"aria-hidden":`true`,children:`←`}),(0,i.jsx)(`span`,{className:`btn-secondary__label`,children:a}),u?(0,i.jsx)(`span`,{className:`btn-secondary__spinner`,"aria-hidden":`true`}):s&&(0,i.jsx)(`span`,{className:`btn-secondary__icon`,"aria-hidden":`true`,children:`→`})]})},a.__docgenInfo={description:``,methods:[],displayName:`ButtonSecondary`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--desk' | '--mob'`,elements:[{name:`literal`,value:`'--desk'`},{name:`literal`,value:`'--mob'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'--default' | '--inverse'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--inverse'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--default' | '--hover' | '--active' | '--disabled'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--hover'`},{name:`literal`,value:`'--active'`},{name:`literal`,value:`'--disabled'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Secondary'`,computed:!1}},iconLeft:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},iconRight:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),s,c,l,u,d;e((()=>{o(),s=n(),c={title:`Actions/Button Secondary`,component:a,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},style:{control:`radio`,options:[`--default`,`--inverse`]},state:{control:`radio`,options:[`--default`,`--hover`,`--active`,`--disabled`]},label:{control:`text`},iconLeft:{control:`boolean`},iconRight:{control:`boolean`}}},l={args:{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--default`,label:`Secondary`}},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Prospect — Default — Desktop`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--default`,label:`Default`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--hover`,label:`Hover`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--active`,label:`Active`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--disabled`,label:`Disabled`})]})]}),(0,s.jsxs)(`section`,{style:{background:`#00008f`,padding:16,borderRadius:8},children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#fff`},children:`Prospect — Inverse — Desktop`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--default`,label:`Default`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--hover`,label:`Hover`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--active`,label:`Active`}),(0,s.jsx)(a,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--disabled`,label:`Disabled`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Client — Default — Desktop`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Client`,device:`--desk`,style:`--default`,state:`--default`,label:`Default`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,style:`--default`,state:`--hover`,label:`Hover`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,style:`--default`,state:`--active`,label:`Active`}),(0,s.jsx)(a,{theme:`Client`,device:`--desk`,style:`--default`,state:`--disabled`,label:`Disabled`})]})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Mobile — Prospect / Client`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{theme:`Prospect`,device:`--mob`,style:`--default`,state:`--default`,label:`Prospect mob`}),(0,s.jsx)(a,{theme:`Client`,device:`--mob`,style:`--default`,state:`--default`,label:`Client mob`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    state: '--default',
    label: 'Secondary'
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
      }}>Prospect — Default — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section style={{
      background: '#00008f',
      padding: 16,
      borderRadius: 8
    }}>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#fff'
      }}>Prospect — Inverse — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonSecondary theme="Prospect" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Client — Default — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonSecondary theme="Client" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Mobile — Prospect / Client</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonSecondary theme="Prospect" device="--mob" style="--default" state="--default" label="Prospect mob" />
          <ButtonSecondary theme="Client" device="--mob" style="--default" state="--default" label="Client mob" />
        </div>
      </section>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`AllVariants`]}))();export{u as AllVariants,l as Playground,d as __namedExportsOrder,c as default};