import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-fcfuQg7E.js";var i=t((()=>{})),a,o,s=t((()=>{n(),i(),a=r(),o=({theme:e=`Prospect`,device:t=`--desk`,style:n=`--default`,state:r=`--default`,label:i=`Primary`,iconLeft:o=!1,iconRight:s=!1,onClick:c,className:l=``})=>{let u=r===`--disabled`,d=e.toLowerCase(),f=t===`--desk`?`desk`:`mob`,p=n.replace(`--`,``),m=r.replace(`--`,``);return(0,a.jsxs)(`button`,{className:[`btn-primary`,`btn-primary--${d}`,`btn-primary--${f}`,`btn-primary--style-${p}`,`btn-primary--${m}`,l].filter(Boolean).join(` `),disabled:u,onClick:u?void 0:c,type:`button`,children:[o&&(0,a.jsx)(`span`,{className:`btn-primary__icon btn-primary__icon--left`,"aria-hidden":`true`,children:`←`}),(0,a.jsx)(`span`,{className:`btn-primary__label`,children:i}),u?(0,a.jsx)(`span`,{className:`btn-primary__spinner`,"aria-hidden":`true`}):s&&(0,a.jsx)(`span`,{className:`btn-primary__icon btn-primary__icon--right`,"aria-hidden":`true`,children:`→`})]})},o.__docgenInfo={description:``,methods:[],displayName:`ButtonPrimary`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},device:{required:!1,tsType:{name:`union`,raw:`'--desk' | '--mob'`,elements:[{name:`literal`,value:`'--desk'`},{name:`literal`,value:`'--mob'`}]},description:``,defaultValue:{value:`'--desk'`,computed:!1}},style:{required:!1,tsType:{name:`union`,raw:`'--default' | '--business' | '--inverse'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--business'`},{name:`literal`,value:`'--inverse'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'--default' | '--hover' | '--active' | '--disabled'`,elements:[{name:`literal`,value:`'--default'`},{name:`literal`,value:`'--hover'`},{name:`literal`,value:`'--active'`},{name:`literal`,value:`'--disabled'`}]},description:``,defaultValue:{value:`'--default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Primary'`,computed:!1}},iconLeft:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},iconRight:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),c,l,u,d,f,p;t((()=>{c=e(n(),1),s(),l=r(),u={title:`Actions/Button Primary`,component:o,tags:[`autodocs`],argTypes:{theme:{control:`radio`,options:[`Prospect`,`Client`]},device:{control:`radio`,options:[`--desk`,`--mob`]},style:{control:`radio`,options:[`--default`,`--business`,`--inverse`]},state:{control:`radio`,options:[`--default`,`--hover`,`--active`,`--disabled`]},label:{control:`text`},iconLeft:{control:`boolean`},iconRight:{control:`boolean`}}},d={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(o,{...e,label:t?`✓ Cliqué !`:e.label,onClick:()=>n(!t)})},args:{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--disabled`,label:`Primary`,iconLeft:!1,iconRight:!1}},f={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Prospect — Default — Desktop`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--default`,label:`Default`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--hover`,label:`Hover`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--active`,label:`Active`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--default`,state:`--disabled`,label:`Disabled`})]})]}),(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Prospect — Business — Desktop`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--business`,state:`--default`,label:`Default`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--business`,state:`--hover`,label:`Hover`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--business`,state:`--active`,label:`Active`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--business`,state:`--disabled`,label:`Disabled`})]})]}),(0,l.jsxs)(`section`,{style:{background:`#00008f`,padding:16,borderRadius:8},children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#fff`},children:`Prospect — Inverse — Desktop`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--default`,label:`Default`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--hover`,label:`Hover`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--active`,label:`Active`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--desk`,style:`--inverse`,state:`--disabled`,label:`Disabled`})]})]}),(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Client — Default — Desktop`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--default`,state:`--default`,label:`Default`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--default`,state:`--hover`,label:`Hover`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--default`,state:`--active`,label:`Active`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--default`,state:`--disabled`,label:`Disabled`})]})]}),(0,l.jsxs)(`section`,{style:{background:`#00008f`,padding:16,borderRadius:8},children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#fff`},children:`Client — Inverse — Desktop`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--inverse`,state:`--default`,label:`Default`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--inverse`,state:`--hover`,label:`Hover`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--inverse`,state:`--active`,label:`Active`}),(0,l.jsx)(o,{theme:`Client`,device:`--desk`,style:`--inverse`,state:`--disabled`,label:`Disabled`})]})]}),(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12,fontSize:14,color:`#333`},children:`Mobile`}),(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(o,{theme:`Prospect`,device:`--mob`,style:`--default`,state:`--default`,label:`Prospect`}),(0,l.jsx)(o,{theme:`Client`,device:`--mob`,style:`--default`,state:`--default`,label:`Client`}),(0,l.jsx)(o,{theme:`Prospect`,device:`--mob`,style:`--business`,state:`--default`,label:`Business`})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [clicked, setClicked] = useState(false);
    return <ButtonPrimary {...args} label={clicked ? '✓ Cliqué !' : args.label} onClick={() => setClicked(!clicked)} />;
  },
  args: {
    theme: 'Prospect',
    device: '--desk',
    style: '--default',
    state: "--disabled",
    label: 'Primary',
    iconLeft: false,
    iconRight: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {/* PROSPECT DEFAULT */}
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
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* PROSPECT BUSINESS */}
      <section>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#333'
      }}>Prospect — Business — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--business" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* PROSPECT INVERSE */}
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
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonPrimary theme="Prospect" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* CLIENT DEFAULT */}
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
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--default" label="Default" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--hover" label="Hover" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--active" label="Active" />
          <ButtonPrimary theme="Client" device="--desk" style="--default" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* CLIENT INVERSE */}
      <section style={{
      background: '#00008f',
      padding: 16,
      borderRadius: 8
    }}>
        <h3 style={{
        marginBottom: 12,
        fontSize: 14,
        color: '#fff'
      }}>Client — Inverse — Desktop</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--default" label="Default" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--hover" label="Hover" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--active" label="Active" />
          <ButtonPrimary theme="Client" device="--desk" style="--inverse" state="--disabled" label="Disabled" />
        </div>
      </section>
      {/* MOBILE */}
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
          <ButtonPrimary theme="Prospect" device="--mob" style="--default" state="--default" label="Prospect" />
          <ButtonPrimary theme="Client" device="--mob" style="--default" state="--default" label="Client" />
          <ButtonPrimary theme="Prospect" device="--mob" style="--business" state="--default" label="Business" />
        </div>
      </section>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AllVariants`]}))();export{f as AllVariants,d as Playground,p as __namedExportsOrder,u as default};