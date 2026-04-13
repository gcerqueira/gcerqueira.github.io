"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[303],{"./stories/Button.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllVariants:()=>AllVariants,Disabled:()=>Disabled,Large:()=>Large,Outline:()=>Outline,Primary:()=>Primary,Secondary:()=>Secondary,Text:()=>Text,WhiteStyle:()=>WhiteStyle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src_components_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_src_components_Button__WEBPACK_IMPORTED_MODULE_1__.$,argTypes:{variant:{control:"select",options:["Primary","Secondary","Text","Outline","Icon"]},size:{control:"select",options:["Medium","Large"]},buttonStyle:{control:"select",options:["Brand","White"]},disabled:{control:"boolean"}}},Primary={args:{children:"Button",variant:"Primary"}},Secondary={args:{children:"Button",variant:"Secondary"}},Text={args:{children:"Button",variant:"Text"}},Outline={args:{children:"Button",variant:"Outline"}},Large={args:{children:"Button",variant:"Primary",size:"Large"}},Disabled={args:{children:"Button",variant:"Primary",disabled:!0}},WhiteStyle={args:{children:"Button",variant:"Primary",buttonStyle:"White"},parameters:{backgrounds:{default:"dark"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{background:"#7146b5",padding:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]},AllVariants={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["Primary","Secondary","Text","Outline"].map(variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Button__WEBPACK_IMPORTED_MODULE_1__.$,{variant,children:"Default"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Button__WEBPACK_IMPORTED_MODULE_1__.$,{variant,disabled:!0,children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Button__WEBPACK_IMPORTED_MODULE_1__.$,{variant,size:"Large",children:"Large"})]},variant))})},__namedExportsOrder=["Primary","Secondary","Text","Outline","Large","Disabled","WhiteStyle","AllVariants"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Text'\n  }\n}",...Text.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Outline'\n  }\n}",...Outline.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Primary',\n    size: 'Large'\n  }\n}",...Large.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Primary',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WhiteStyle.parameters={...WhiteStyle.parameters,docs:{...WhiteStyle.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'Primary',\n    buttonStyle: 'White'\n  },\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  decorators: [Story => <div style={{\n    background: '#7146b5',\n    padding: 40\n  }}><Story /></div>]\n}",...WhiteStyle.parameters?.docs?.source}}},AllVariants.parameters={...AllVariants.parameters,docs:{...AllVariants.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 16\n  }}>\n      {(['Primary', 'Secondary', 'Text', 'Outline'] as const).map(variant => <div key={variant} style={{\n      display: 'flex',\n      gap: 12,\n      alignItems: 'center'\n    }}>\n          <Button variant={variant}>Default</Button>\n          <Button variant={variant} disabled>Disabled</Button>\n          <Button variant={variant} size=\"Large\">Large</Button>\n        </div>)}\n    </div>\n}",...AllVariants.parameters?.docs?.source}}}},"./src/components/Button/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledButton=styled_components_browser_esm.Ay.button`
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
//# sourceMappingURL=Button-stories.3d76e06b.iframe.bundle.js.map