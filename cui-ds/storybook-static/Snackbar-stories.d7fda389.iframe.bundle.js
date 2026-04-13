"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[870],{"./stories/Snackbar.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Snackbar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const slideUp=styled_components_browser_esm.i7`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Wrapper=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: ${({$open})=>$open?"flex":"none"};
  align-items: center;
  gap: ${({theme})=>theme.spacing[16]};
  padding: 12px 16px;
  background: ${({theme})=>theme.colors.gray[900]};
  color: #ffffff;
  border-radius: ${({theme})=>theme.radius.md};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  animation: ${slideUp} 0.2s ease;
  min-width: 300px;
`,Message=styled_components_browser_esm.Ay.span`
  flex: 1;
`,Action=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  color: ${({theme})=>theme.semantic.brand.secondary};
  font-family: ${({theme})=>theme.fontFamily};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  font-size: ${({theme})=>theme.fontSize.base};
  cursor: pointer;
  padding: 0;

  &:hover { text-decoration: underline; }
`,Close=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  line-height: 1;

  &:hover { color: #ffffff; }
`,Snackbar=({open,message,action,onClose})=>(0,jsx_runtime.jsxs)(Wrapper,{$open:open,children:[(0,jsx_runtime.jsx)(Message,{children:message}),action&&(0,jsx_runtime.jsx)(Action,{onClick:action.onClick,children:action.label}),onClose&&(0,jsx_runtime.jsx)(Close,{onClick:onClose,children:"×"})]});Snackbar.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!0,tsType:{name:"boolean"},description:""},message:{required:!0,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var Button=__webpack_require__("./src/components/Button/index.ts");const Snackbar_stories={title:"Components/Snackbar",component:Snackbar,parameters:{layout:"fullscreen"}},Default={render:()=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{style:{padding:40,minHeight:200},children:[(0,jsx_runtime.jsx)(Button.$,{onClick:()=>setOpen(!0),children:"Show Snackbar"}),(0,jsx_runtime.jsx)(Snackbar,{open,message:"Transaction completed successfully",action:{label:"Undo",onClick:()=>setOpen(!1)},onClose:()=>setOpen(!1)})]})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <div style={{\n      padding: 40,\n      minHeight: 200\n    }}>\n        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>\n        <Snackbar open={open} message=\"Transaction completed successfully\" action={{\n        label: 'Undo',\n        onClick: () => setOpen(false)\n      }} onClose={() => setOpen(false)} />\n      </div>;\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/Button/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme})=>theme.spacing[8]};
  font-family: ${({theme})=>theme.fontFamily};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  border-radius: ${({theme})=>theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
  min-width: 100px;

  ${({$size})=>{return size=$size,styled_components_browser_esm.AH`
  ${"Large"===size?styled_components_browser_esm.AH`
        padding: 14px 24px;
        font-size: 16px;
        min-height: 48px;
      `:styled_components_browser_esm.AH`
        padding: 10px 20px;
        font-size: 14px;
        min-height: 40px;
      `}
`;var size}}
  ${({$variant,$buttonStyle})=>{return variant=$variant,buttonStyle=$buttonStyle,styled_components_browser_esm.AH`
  ${({theme})=>{const brand=theme.semantic.brand.primary,isWhite="White"===buttonStyle;switch(variant){case"Primary":return styled_components_browser_esm.AH`
          background: ${isWhite?"#ffffff":brand};
          color: ${isWhite?brand:"#ffffff"};
          border: 2px solid ${isWhite?"#ffffff":brand};
          &:hover:not(:disabled) {
            opacity: 0.85;
          }
        `;case"Secondary":return styled_components_browser_esm.AH`
          background: ${isWhite?"rgba(255,255,255,0.15)":theme.semantic.brand.secondary};
          color: ${isWhite?"#ffffff":brand};
          border: 2px solid transparent;
          &:hover:not(:disabled) {
            opacity: 0.85;
          }
        `;case"Text":return styled_components_browser_esm.AH`
          background: transparent;
          color: ${isWhite?"#ffffff":brand};
          border: 2px solid transparent;
          &:hover:not(:disabled) {
            background: ${theme.semantic.brand.secondary};
          }
        `;case"Outline":return styled_components_browser_esm.AH`
          background: transparent;
          color: ${isWhite?"#ffffff":brand};
          border: 2px solid ${isWhite?"#ffffff":brand};
          &:hover:not(:disabled) {
            background: ${isWhite?"rgba(255,255,255,0.1)":theme.semantic.brand.secondary};
          }
        `;case"Icon":return styled_components_browser_esm.AH`
          background: transparent;
          color: ${isWhite?"#ffffff":brand};
          border: 2px solid transparent;
          padding: 8px;
          min-width: unset;
          &:hover:not(:disabled) {
            background: ${theme.semantic.brand.secondary};
          }
        `}}}
`;var variant,buttonStyle}}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.semantic.brand.primary};
    outline-offset: 2px;
  }
`,Button=({variant="Primary",size="Medium",buttonStyle="Brand",iconLeft,iconRight,children,...props})=>(0,jsx_runtime.jsxs)(StyledButton,{$variant:variant,$size:size,$buttonStyle:buttonStyle,...props,children:[iconLeft,children,iconRight]});Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'Primary' | 'Secondary' | 'Text' | 'Outline' | 'Icon'",elements:[{name:"literal",value:"'Primary'"},{name:"literal",value:"'Secondary'"},{name:"literal",value:"'Text'"},{name:"literal",value:"'Outline'"},{name:"literal",value:"'Icon'"}]},description:"",defaultValue:{value:"'Primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'Medium' | 'Large'",elements:[{name:"literal",value:"'Medium'"},{name:"literal",value:"'Large'"}]},description:"",defaultValue:{value:"'Medium'",computed:!1}},buttonStyle:{required:!1,tsType:{name:"union",raw:"'Brand' | 'White'",elements:[{name:"literal",value:"'Brand'"},{name:"literal",value:"'White'"}]},description:"",defaultValue:{value:"'Brand'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=Snackbar-stories.d7fda389.iframe.bundle.js.map