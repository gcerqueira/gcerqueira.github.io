"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[712],{"./stories/Tooltip.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.div`
  position: relative;
  display: inline-flex;
`,Tip=styled_components_browser_esm.Ay.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: ${({theme})=>theme.colors.gray[900]};
  color: #ffffff;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  border-radius: ${({theme})=>theme.radius.sm};
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({$visible})=>$visible?1:0};
  transition: opacity 0.15s ease;
  z-index: 1000;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({theme})=>theme.colors.gray[900]};
  }
`,Tooltip=({content,children})=>{const[visible,setVisible]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Wrapper,{onMouseEnter:()=>setVisible(!0),onMouseLeave:()=>setVisible(!1),children:[(0,jsx_runtime.jsx)(Tip,{$visible:visible,children:content}),children]})};Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Button=__webpack_require__("./src/components/Button/index.ts");const Tooltip_stories={title:"Components/Tooltip",component:Tooltip},Default={args:{content:"This is a tooltip",children:(0,jsx_runtime.jsx)(Button.$,{variant:"Secondary",children:"Hover me"})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    content: 'This is a tooltip',\n    children: <Button variant=\"Secondary\">Hover me</Button>\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/Button/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
//# sourceMappingURL=Tooltip-stories.591c40c7.iframe.bundle.js.map