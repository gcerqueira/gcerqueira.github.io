"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[285],{"./stories/EmptyState.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Element:()=>Element,WithAction:()=>WithAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EmptyState_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({$type,theme})=>"Page"===$type?theme.spacing[32]:theme.spacing[24]};
  gap: ${({theme})=>theme.spacing[16]};
`,IconWrapper=styled_components_browser_esm.Ay.div`
  color: ${({theme})=>theme.semantic.text.tertiary};
  font-size: 48px;
`,Title=styled_components_browser_esm.Ay.h3`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.lg};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  color: ${({theme})=>theme.semantic.text.primary};
  margin: 0;
`,Description=styled_components_browser_esm.Ay.p`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  color: ${({theme})=>theme.semantic.text.tertiary};
  margin: 0;
  max-width: 360px;
`,EmptyState=({type="Element",icon,title,description,action})=>(0,jsx_runtime.jsxs)(Wrapper,{$type:type,children:[icon&&(0,jsx_runtime.jsx)(IconWrapper,{children:icon}),(0,jsx_runtime.jsx)(Title,{children:title}),description&&(0,jsx_runtime.jsx)(Description,{children:description}),action]});EmptyState.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{type:{required:!1,tsType:{name:"union",raw:"'Page' | 'Element'",elements:[{name:"literal",value:"'Page'"},{name:"literal",value:"'Element'"}]},description:"",defaultValue:{value:"'Element'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Button=__webpack_require__("./src/components/Button/index.ts");const EmptyState_stories={title:"Components/EmptyState",component:EmptyState},Element={args:{title:"No transactions found",description:"There are no transactions matching your current filters."}},WithAction={args:{type:"Page",title:"No accounts yet",description:"Get started by opening your first account.",action:(0,jsx_runtime.jsx)(Button.$,{children:"Open Account"})}},__namedExportsOrder=["Element","WithAction"];Element.parameters={...Element.parameters,docs:{...Element.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'No transactions found',\n    description: 'There are no transactions matching your current filters.'\n  }\n}",...Element.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'Page',\n    title: 'No accounts yet',\n    description: 'Get started by opening your first account.',\n    action: <Button>Open Account</Button>\n  }\n}",...WithAction.parameters?.docs?.source}}}},"./src/components/Button/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
//# sourceMappingURL=EmptyState-stories.0e5f69c3.iframe.bundle.js.map