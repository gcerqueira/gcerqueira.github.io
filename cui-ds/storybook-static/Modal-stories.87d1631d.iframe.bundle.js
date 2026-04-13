"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[258],{"./stories/Modal.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Overlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: ${({theme})=>theme.semantic.surface.overlay};
  display: ${({$open})=>$open?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Panel=styled_components_browser_esm.Ay.div`
  background: ${({theme})=>theme.semantic.surface.neutral};
  border-radius: ${({theme})=>theme.radius.lg};
  padding: ${({theme})=>theme.spacing[24]};
  max-width: 560px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacing[16]};
`,Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Title=styled_components_browser_esm.Ay.h2`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xl};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  color: ${({theme})=>theme.semantic.text.primary};
  margin: 0;
`,CloseButton=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${({theme})=>theme.semantic.text.secondary};
  font-size: 20px;
  line-height: 1;

  &:hover { color: ${({theme})=>theme.semantic.text.primary}; }
`,Body=styled_components_browser_esm.Ay.div`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.secondary};
`,Actions=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${({theme})=>theme.spacing[12]};
  justify-content: flex-end;
`,Modal=({open,title,onClose,children,actions})=>(0,jsx_runtime.jsx)(Overlay,{$open:open,onClick:onClose,children:(0,jsx_runtime.jsxs)(Panel,{onClick:e=>e.stopPropagation(),children:[(title||onClose)&&(0,jsx_runtime.jsxs)(Header,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),onClose&&(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:"×"})]}),(0,jsx_runtime.jsx)(Body,{children}),actions&&(0,jsx_runtime.jsx)(Actions,{children:actions})]})});Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Button=__webpack_require__("./src/components/Button/index.ts");const Modal_stories={title:"Components/Modal",component:Modal},Default={render:()=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{onClick:()=>setOpen(!0),children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal,{open,title:"Confirm Action",onClose:()=>setOpen(!1),actions:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{variant:"Text",onClick:()=>setOpen(!1),children:"Cancel"}),(0,jsx_runtime.jsx)(Button.$,{onClick:()=>setOpen(!1),children:"Confirm"})]}),children:"Are you sure you want to proceed with this action? This cannot be undone."})]})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [open, setOpen] = useState(false);\n    return <>\n        <Button onClick={() => setOpen(true)}>Open Modal</Button>\n        <Modal open={open} title="Confirm Action" onClose={() => setOpen(false)} actions={<>\n              <Button variant="Text" onClick={() => setOpen(false)}>Cancel</Button>\n              <Button onClick={() => setOpen(false)}>Confirm</Button>\n            </>}>\n          Are you sure you want to proceed with this action? This cannot be undone.\n        </Modal>\n      </>;\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/Button/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
//# sourceMappingURL=Modal-stories.87d1631d.iframe.bundle.js.map