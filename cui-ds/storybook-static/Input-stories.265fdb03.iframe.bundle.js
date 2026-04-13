"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[661],{"./stories/Input.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorState:()=>ErrorState,WithHelper:()=>WithHelper,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacing[4]};
  width: 100%;
`,Label=styled_components_browser_esm.Ay.label`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  color: ${({theme})=>theme.semantic.text.primary};
`,StyledInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  padding: 10px 12px;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
  background: ${({theme})=>theme.semantic.surface.neutral};
  border: 1px solid ${({theme,$error})=>$error?theme.semantic.support.error:theme.colors.gray[400]};
  border-radius: ${({theme})=>theme.radius.sm};
  outline: none;
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
    color: ${({theme})=>theme.semantic.support.disabled};
    cursor: not-allowed;
  }
`,HelperText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  color: ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.text.tertiary};
`,Input=({label,helperText,error=!1,errorMessage,...props})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsx)(StyledInput,{$error:error,...props}),error&&errorMessage&&(0,jsx_runtime.jsx)(HelperText,{$error:!0,children:errorMessage}),!error&&helperText&&(0,jsx_runtime.jsx)(HelperText,{$error:!1,children:helperText})]});Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Input_stories={title:"Components/Input",component:Input},Default={args:{label:"Label",placeholder:"Enter text..."},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},WithHelper={args:{label:"Email",placeholder:"you@example.com",helperText:"We will never share your email"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},ErrorState={args:{label:"Password",error:!0,errorMessage:"Password is required",type:"password"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},Disabled={args:{label:"Disabled",placeholder:"Cannot type here",disabled:!0},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","WithHelper","ErrorState","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    placeholder: 'Enter text...'\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},WithHelper.parameters={...WithHelper.parameters,docs:{...WithHelper.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Email',\n    placeholder: 'you@example.com',\n    helperText: 'We will never share your email'\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...WithHelper.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Password',\n    error: true,\n    errorMessage: 'Password is required',\n    type: 'password'\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...ErrorState.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    placeholder: 'Cannot type here',\n    disabled: true\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Input-stories.265fdb03.iframe.bundle.js.map