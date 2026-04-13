"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[897],{"./stories/Table.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Striped:()=>Striped,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledTable=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
`,THead=styled_components_browser_esm.Ay.thead`
  border-bottom: 2px solid ${({theme})=>theme.colors.gray[300]};
`,Th=styled_components_browser_esm.Ay.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: ${({theme})=>theme.fontWeight.bold};
  color: ${({theme})=>theme.semantic.text.primary};
  font-size: ${({theme})=>theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Tr=styled_components_browser_esm.Ay.tr`
  border-bottom: 1px solid ${({theme})=>theme.colors.gray[300]};
  background: ${({$striped,$index,theme})=>$striped&&void 0!==$index&&$index%2==1?theme.colors.gray[200]:"transparent"};

  &:hover {
    background: ${({theme})=>theme.colors.gray[200]};
  }
`,Td=styled_components_browser_esm.Ay.td`
  padding: 12px 16px;
  color: ${({theme})=>theme.semantic.text.primary};
`,Table=({columns,data,striped=!1})=>(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)(THead,{children:(0,jsx_runtime.jsx)("tr",{children:columns.map(col=>(0,jsx_runtime.jsx)(Th,{style:{width:col.width},children:col.header},col.key))})}),(0,jsx_runtime.jsx)("tbody",{children:data.map((row,i)=>(0,jsx_runtime.jsx)(Tr,{$striped:striped,$index:i,children:columns.map(col=>(0,jsx_runtime.jsx)(Td,{children:row[col.key]},col.key))},i))})]});Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<string, React.ReactNode>"}],raw:"Record<string, React.ReactNode>[]"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};var Badge=__webpack_require__("./src/components/Badge/index.ts");const Table_stories={title:"Components/Table",component:Table},columns=[{key:"date",header:"Date",width:"120px"},{key:"description",header:"Description"},{key:"amount",header:"Amount",width:"120px"},{key:"status",header:"Status",width:"100px"}],data=[{date:"Apr 12",description:"Direct Deposit - Payroll",amount:"+$3,200.00",status:(0,jsx_runtime.jsx)(Badge.E,{status:"Positive",children:"Complete"})},{date:"Apr 11",description:"Netflix Subscription",amount:"-$15.99",status:(0,jsx_runtime.jsx)(Badge.E,{status:"Positive",children:"Complete"})},{date:"Apr 10",description:"Transfer to Savings",amount:"-$500.00",status:(0,jsx_runtime.jsx)(Badge.E,{status:"Warning",children:"Pending"})},{date:"Apr 09",description:"Grocery Store",amount:"-$87.43",status:(0,jsx_runtime.jsx)(Badge.E,{status:"Positive",children:"Complete"})}],Default={args:{columns,data},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:600},children:(0,jsx_runtime.jsx)(Story,{})})]},Striped={args:{columns,data,striped:!0},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:600},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","Striped"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns,\n    data\n  },\n  decorators: [Story => <div style={{\n    width: 600\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},Striped.parameters={...Striped.parameters,docs:{...Striped.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns,\n    data,\n    striped: true\n  },\n  decorators: [Story => <div style={{\n    width: 600\n  }}><Story /></div>]\n}",...Striped.parameters?.docs?.source}}}},"./src/components/Badge/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledBadge=styled_components_browser_esm.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[4]};
  padding: 2px 8px;
  border-radius: ${({theme})=>theme.radius.rounded};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  white-space: nowrap;

  ${({$status,$hasBg})=>{return status=$status,hasBg=$hasBg,styled_components_browser_esm.AH`
  ${({theme})=>{const map={Positive:{color:theme.semantic.status.positive,bg:theme.semantic.surface.status.positive},Warning:{color:theme.semantic.status.alert,bg:theme.semantic.surface.status.alert},Negative:{color:theme.semantic.status.negative,bg:theme.semantic.surface.status.negative},Info:{color:theme.semantic.status.info,bg:theme.semantic.surface.status.info},Neutral:{color:theme.semantic.text.secondary,bg:theme.semantic.surface.status.disabled}},{color,bg}=map[status];return styled_components_browser_esm.AH`
      color: ${color};
      background: ${hasBg?bg:"transparent"};
    `}}
`;var status,hasBg}}
`,Dot=styled_components_browser_esm.Ay.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
`,Badge=({status="Neutral",background=!0,icon,children})=>(0,jsx_runtime.jsxs)(StyledBadge,{$status:status,$hasBg:background,children:[icon||(0,jsx_runtime.jsx)(Dot,{$status:status}),children]});Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{status:{required:!1,tsType:{name:"union",raw:"'Positive' | 'Warning' | 'Negative' | 'Info' | 'Neutral'",elements:[{name:"literal",value:"'Positive'"},{name:"literal",value:"'Warning'"},{name:"literal",value:"'Negative'"},{name:"literal",value:"'Info'"},{name:"literal",value:"'Neutral'"}]},description:"",defaultValue:{value:"'Neutral'",computed:!1}},background:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=Table-stories.cac14efe.iframe.bundle.js.map