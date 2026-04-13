"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[167],{"./stories/Alert.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithActions:()=>WithActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  background: ${({theme})=>theme.semantic.surface.neutral};
  border: 1px solid ${({theme})=>theme.colors.gray[300]};
  border-radius: ${({theme})=>theme.radius.md};
  padding: ${({theme})=>theme.spacing[24]};
  gap: ${({theme})=>theme.spacing[16]};
`,Content=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme})=>theme.spacing[16]};
`,TextContent=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacing[4]};
  flex: 1;
`,Title=styled_components_browser_esm.Ay.h3`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  color: ${({theme})=>theme.semantic.text.primary};
  margin: 0;
`,Description=styled_components_browser_esm.Ay.p`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  color: ${({theme})=>theme.semantic.text.secondary};
  margin: 0;
`,Actions=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: ${({theme})=>theme.spacing[12]};
  justify-content: flex-end;
`,ActionButton=styled_components_browser_esm.Ay.button`
  padding: 8px 16px;
  border-radius: ${({theme})=>theme.radius.sm};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${({$primary,theme})=>$primary?styled_components_browser_esm.AH`
          background: ${theme.semantic.brand.primary};
          color: #ffffff;
        `:styled_components_browser_esm.AH`
          background: transparent;
          color: ${theme.semantic.brand.primary};
        `}

  &:hover { opacity: 0.85; }
`,IconWrapper=styled_components_browser_esm.Ay.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,AlertImage=styled_components_browser_esm.Ay.img`
  width: 48px;
  height: 48px;
  border-radius: ${({theme})=>theme.radius.sm};
  object-fit: cover;
`,Alert=({type="Default",icon,image,title,description,primaryAction,secondaryAction})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Content,{children:["Icon"===type&&icon&&(0,jsx_runtime.jsx)(IconWrapper,{children:icon}),"Image"===type&&image&&(0,jsx_runtime.jsx)(AlertImage,{src:image,alt:""}),(0,jsx_runtime.jsxs)(TextContent,{children:[(0,jsx_runtime.jsx)(Title,{children:title}),description&&(0,jsx_runtime.jsx)(Description,{children:description})]})]}),(primaryAction||secondaryAction)&&(0,jsx_runtime.jsxs)(Actions,{children:[secondaryAction&&(0,jsx_runtime.jsx)(ActionButton,{onClick:secondaryAction.onClick,children:secondaryAction.label}),primaryAction&&(0,jsx_runtime.jsx)(ActionButton,{$primary:!0,onClick:primaryAction.onClick,children:primaryAction.label})]})]});Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'Default' | 'Icon' | 'Image'",elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Icon'"},{name:"literal",value:"'Image'"}]},description:"",defaultValue:{value:"'Default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},image:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},primaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},secondaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const Alert_stories={title:"Components/Alert",component:Alert},Default={args:{title:"Account Updated",description:"Your account information has been successfully updated."},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:480},children:(0,jsx_runtime.jsx)(Story,{})})]},WithActions={args:{title:"Confirm Transfer",description:"Are you sure you want to transfer $500 to Savings?",primaryAction:{label:"Confirm",onClick:()=>{}},secondaryAction:{label:"Cancel",onClick:()=>{}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:480},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","WithActions"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Account Updated',\n    description: 'Your account information has been successfully updated.'\n  },\n  decorators: [Story => <div style={{\n    width: 480\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},WithActions.parameters={...WithActions.parameters,docs:{...WithActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Confirm Transfer',\n    description: 'Are you sure you want to transfer $500 to Savings?',\n    primaryAction: {\n      label: 'Confirm',\n      onClick: () => {}\n    },\n    secondaryAction: {\n      label: 'Cancel',\n      onClick: () => {}\n    }\n  },\n  decorators: [Story => <div style={{\n    width: 480\n  }}><Story /></div>]\n}",...WithActions.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Alert-stories.6d2aa4fc.iframe.bundle.js.map