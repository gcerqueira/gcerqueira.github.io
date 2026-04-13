"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[45],{"./stories/TextArea.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,WithHelper:()=>WithHelper,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacing[4]};
  width: 100%;
`,Label=styled_components_browser_esm.Ay.label`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  color: ${({theme})=>theme.semantic.text.primary};
`,StyledTextArea=styled_components_browser_esm.Ay.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
  background: ${({theme})=>theme.semantic.surface.neutral};
  border: 1px solid ${({theme,$error})=>$error?theme.semantic.support.error:theme.colors.gray[400]};
  border-radius: ${({theme})=>theme.radius.sm};
  outline: none;
  resize: vertical;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({theme})=>theme.semantic.text.tertiary};
  }

  &:focus {
    border-color: ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.surface.input.focus};
    box-shadow: 0 0 0 1px ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.surface.input.focus};
  }

  &:disabled {
    background: ${({theme})=>theme.semantic.surface.status.disabled};
    cursor: not-allowed;
  }
`,HelperText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  color: ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.text.tertiary};
`,TextArea=({label,helperText,error=!1,errorMessage,...props})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsx)(StyledTextArea,{$error:error,...props}),error&&errorMessage&&(0,jsx_runtime.jsx)(HelperText,{$error:!0,children:errorMessage}),!error&&helperText&&(0,jsx_runtime.jsx)(HelperText,{$error:!1,children:helperText})]});TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const TextArea_stories={title:"Components/TextArea",component:TextArea},Default={args:{label:"Message",placeholder:"Type your message..."},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:400},children:(0,jsx_runtime.jsx)(Story,{})})]},WithHelper={args:{label:"Notes",placeholder:"Add notes...",helperText:"Max 500 characters"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:400},children:(0,jsx_runtime.jsx)(Story,{})})]},Error={args:{label:"Description",error:!0,errorMessage:"Description is required"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:400},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","WithHelper","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Message',\n    placeholder: 'Type your message...'\n  },\n  decorators: [Story => <div style={{\n    width: 400\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},WithHelper.parameters={...WithHelper.parameters,docs:{...WithHelper.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notes',\n    placeholder: 'Add notes...',\n    helperText: 'Max 500 characters'\n  },\n  decorators: [Story => <div style={{\n    width: 400\n  }}><Story /></div>]\n}",...WithHelper.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Description',\n    error: true,\n    errorMessage: 'Description is required'\n  },\n  decorators: [Story => <div style={{\n    width: 400\n  }}><Story /></div>]\n}",...Error.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=TextArea-stories.6df37050.iframe.bundle.js.map