import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({state:e=`default`,label:t=`1`,theme:n=`Prospect`,className:r=``,onClick:a})=>{let o=n.toLowerCase(),s=e===`active`?`active`:e===`disabled`?`disabled`:`default`,c=()=>{e!==`disabled`&&a&&a()};return(0,i.jsx)(`div`,{role:`button`,tabIndex:e===`disabled`?-1:0,className:`ds-item-pagination ds-item-pagination--${o} ds-item-pagination--${s} ${r}`,onClick:c,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&c()},"aria-current":e===`active`?`page`:void 0,"aria-disabled":e===`disabled`,children:(0,i.jsx)(`span`,{className:`ds-item-pagination__text`,children:e===`disabled`?`...`:t})})},a.__docgenInfo={description:``,methods:[],displayName:`ItemPagination`,props:{state:{required:!1,tsType:{name:`union`,raw:`'active' | 'default' | 'disabled'`,elements:[{name:`literal`,value:`'active'`},{name:`literal`,value:`'default'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'1'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'Prospect' | 'Client'`,elements:[{name:`literal`,value:`'Prospect'`},{name:`literal`,value:`'Client'`}]},description:``,defaultValue:{value:`'Prospect'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),s,c,l,u,d,f;e((()=>{o(),s=n(),c={title:`Atoms/Item Pagination`,component:a,tags:[`autodocs`],argTypes:{state:{control:`radio`,options:[`default`,`active`,`disabled`]},theme:{control:`radio`,options:[`Prospect`,`Client`]},label:{control:`text`}}},l={args:{state:`default`,label:`1`,theme:`Prospect`}},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,s.jsx)(a,{state:`default`,label:`1`}),(0,s.jsx)(a,{state:`active`,label:`2`}),(0,s.jsx)(a,{state:`default`,label:`3`}),(0,s.jsx)(a,{state:`disabled`,label:`...`}),(0,s.jsx)(a,{state:`default`,label:`10`})]})},d={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(`span`,{style:{minWidth:100,fontSize:14},children:`Default`}),(0,s.jsx)(a,{state:`default`,label:`5`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(`span`,{style:{minWidth:100,fontSize:14},children:`Active`}),(0,s.jsx)(a,{state:`active`,label:`5`})]}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(`span`,{style:{minWidth:100,fontSize:14},children:`Disabled`}),(0,s.jsx)(a,{state:`disabled`,label:`5`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    label: '1',
    theme: 'Prospect'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <ItemPagination state="default" label="1" />
      <ItemPagination state="active" label="2" />
      <ItemPagination state="default" label="3" />
      <ItemPagination state="disabled" label="..." />
      <ItemPagination state="default" label="10" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        minWidth: 100,
        fontSize: 14
      }}>Default</span>
        <ItemPagination state="default" label="5" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        minWidth: 100,
        fontSize: 14
      }}>Active</span>
        <ItemPagination state="active" label="5" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        minWidth: 100,
        fontSize: 14
      }}>Disabled</span>
        <ItemPagination state="disabled" label="5" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`CompleteBar`,`States`]}))();export{u as CompleteBar,l as Playground,d as States,f as __namedExportsOrder,c as default};