"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[459],{"./stories/Select.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacing[4]};
  width: 100%;
`,Label=styled_components_browser_esm.Ay.label`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  color: ${({theme})=>theme.semantic.text.primary};
`,StyledSelect=styled_components_browser_esm.Ay.select`
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
  background: ${({theme})=>theme.semantic.surface.neutral};
  border: 1px solid ${({theme,$error})=>$error?theme.semantic.support.error:theme.colors.gray[400]};
  border-radius: ${({theme})=>theme.radius.sm};
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23424242' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    border-color: ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.surface.input.focus};
    box-shadow: 0 0 0 1px ${({theme,$error})=>$error?theme.semantic.support.error:theme.semantic.surface.input.focus};
  }

  &:disabled {
    background-color: ${({theme})=>theme.semantic.surface.status.disabled};
    cursor: not-allowed;
  }
`,ErrorText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  color: ${({theme})=>theme.semantic.support.error};
`,Select=({label,options,value,placeholder="Select an option",error=!1,errorMessage,disabled=!1,onChange})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsxs)(StyledSelect,{$error:error,disabled,value,onChange:e=>onChange?.(e.target.value),children:[(0,jsx_runtime.jsx)("option",{value:"",disabled:!0,children:placeholder}),options.map(opt=>(0,jsx_runtime.jsx)("option",{value:opt.value,children:opt.label},opt.value))]}),error&&errorMessage&&(0,jsx_runtime.jsx)(ErrorText,{children:errorMessage})]});Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const options=[{value:"checking",label:"Checking Account"},{value:"savings",label:"Savings Account"},{value:"money_market",label:"Money Market"},{value:"cd",label:"Certificate of Deposit"}],Select_stories={title:"Components/Select",component:Select},Default={args:{label:"Account Type",options},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},WithError={args:{label:"Account Type",options,error:!0,errorMessage:"Please select an account type"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},Disabled={args:{label:"Account Type",options,disabled:!0},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:320},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","WithError","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Account Type',\n    options\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Account Type',\n    options,\n    error: true,\n    errorMessage: 'Please select an account type'\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Account Type',\n    options,\n    disabled: true\n  },\n  decorators: [Story => <div style={{\n    width: 320\n  }}><Story /></div>]\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Select-stories.70873a91.iframe.bundle.js.map