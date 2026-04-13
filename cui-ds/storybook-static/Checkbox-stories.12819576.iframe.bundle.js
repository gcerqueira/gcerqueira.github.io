"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[392],{"./stories/Checkbox.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Disabled:()=>Disabled,Interactive:()=>Interactive,Unchecked:()=>Unchecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[8]};
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  opacity: ${({$disabled})=>$disabled?.4:1};
`,HiddenInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Box=styled_components_browser_esm.Ay.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({theme,$checked})=>$checked?theme.semantic.brand.primary:theme.colors.gray[500]};
  border-radius: ${({theme})=>theme.radius.sm};
  background: ${({theme,$checked})=>$checked?theme.semantic.brand.primary:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &::after {
    content: '';
    display: ${({$checked})=>$checked?"block":"none"};
    width: 5px;
    height: 10px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
  }
`,LabelText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
`,Checkbox=({checked=!1,disabled=!1,label,onChange})=>(0,jsx_runtime.jsxs)(Wrapper,{$disabled:disabled,children:[(0,jsx_runtime.jsx)(HiddenInput,{type:"checkbox",checked,disabled,onChange:e=>onChange?.(e.target.checked)}),(0,jsx_runtime.jsx)(Box,{$checked:checked,$disabled:disabled}),label&&(0,jsx_runtime.jsx)(LabelText,{children:label})]});Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const Checkbox_stories={title:"Components/Checkbox",component:Checkbox},Unchecked={args:{label:"Accept terms",checked:!1}},Checked={args:{label:"Accept terms",checked:!0}},Disabled={args:{label:"Disabled option",checked:!1,disabled:!0}},Interactive={render:()=>{const[checked,setChecked]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(Checkbox,{label:"Toggle me",checked,onChange:setChecked})}},__namedExportsOrder=["Unchecked","Checked","Disabled","Interactive"];Unchecked.parameters={...Unchecked.parameters,docs:{...Unchecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accept terms',\n    checked: false\n  }\n}",...Unchecked.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accept terms',\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled option',\n    checked: false,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    return <Checkbox label="Toggle me" checked={checked} onChange={setChecked} />;\n  }\n}',...Interactive.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Checkbox-stories.12819576.iframe.bundle.js.map