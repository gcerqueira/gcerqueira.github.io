"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[476],{"./stories/Radio.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Disabled:()=>Disabled,RadioGroup:()=>RadioGroup,Unchecked:()=>Unchecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.label`
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
`,Circle=styled_components_browser_esm.Ay.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({theme,$checked})=>$checked?theme.semantic.brand.primary:theme.colors.gray[500]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({theme})=>theme.semantic.brand.primary};
    display: ${({$checked})=>$checked?"block":"none"};
  }
`,LabelText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
`,Radio=({checked=!1,disabled=!1,label,name,value="",onChange})=>(0,jsx_runtime.jsxs)(Wrapper,{$disabled:disabled,children:[(0,jsx_runtime.jsx)(HiddenInput,{type:"radio",checked,disabled,name,value,onChange:()=>onChange?.(value)}),(0,jsx_runtime.jsx)(Circle,{$checked:checked}),label&&(0,jsx_runtime.jsx)(LabelText,{children:label})]});Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Radio_stories={title:"Components/Radio",component:Radio},Unchecked={args:{label:"Option A",checked:!1}},Checked={args:{label:"Option A",checked:!0}},Disabled={args:{label:"Disabled",checked:!1,disabled:!0}},RadioGroup={render:()=>{const[value,setValue]=(0,react.useState)("a");return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[(0,jsx_runtime.jsx)(Radio,{label:"Option A",name:"group",value:"a",checked:"a"===value,onChange:setValue}),(0,jsx_runtime.jsx)(Radio,{label:"Option B",name:"group",value:"b",checked:"b"===value,onChange:setValue}),(0,jsx_runtime.jsx)(Radio,{label:"Option C",name:"group",value:"c",checked:"c"===value,onChange:setValue})]})}},__namedExportsOrder=["Unchecked","Checked","Disabled","RadioGroup"];Unchecked.parameters={...Unchecked.parameters,docs:{...Unchecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Option A',\n    checked: false\n  }\n}",...Unchecked.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Option A',\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    checked: false,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},RadioGroup.parameters={...RadioGroup.parameters,docs:{...RadioGroup.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [value, setValue] = useState(\'a\');\n    return <div style={{\n      display: \'flex\',\n      flexDirection: \'column\',\n      gap: 12\n    }}>\n        <Radio label="Option A" name="group" value="a" checked={value === \'a\'} onChange={setValue} />\n        <Radio label="Option B" name="group" value="b" checked={value === \'b\'} onChange={setValue} />\n        <Radio label="Option C" name="group" value="c" checked={value === \'c\'} onChange={setValue} />\n      </div>;\n  }\n}',...RadioGroup.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Radio-stories.d6341f1f.iframe.bundle.js.map