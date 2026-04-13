"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[623],{"./stories/Switch.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Interactive:()=>Interactive,LabelPositions:()=>LabelPositions,Off:()=>Off,On:()=>On,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[8]};
  cursor: pointer;
`,Track=styled_components_browser_esm.Ay.div`
  width: 44px;
  height: 24px;
  border-radius: ${({theme})=>theme.radius.rounded};
  background: ${({theme,$checked})=>$checked?theme.semantic.brand.primary:theme.colors.gray[400]};
  position: relative;
  transition: background 0.2s ease;
`,Thumb=styled_components_browser_esm.Ay.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  top: 2px;
  left: ${({$checked})=>$checked?"22px":"2px"};
  transition: left 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,HiddenInput=styled_components_browser_esm.Ay.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,LabelText=styled_components_browser_esm.Ay.span`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
`,Switch=({checked=!1,label,labelPosition="Right",onChange})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(HiddenInput,{type:"checkbox",checked,onChange:e=>onChange?.(e.target.checked)}),label&&"Left"===labelPosition&&(0,jsx_runtime.jsx)(LabelText,{children:label}),(0,jsx_runtime.jsx)(Track,{$checked:checked,children:(0,jsx_runtime.jsx)(Thumb,{$checked:checked})}),label&&"Right"===labelPosition&&(0,jsx_runtime.jsx)(LabelText,{children:label})]});Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'Left' | 'Right' | 'None'",elements:[{name:"literal",value:"'Left'"},{name:"literal",value:"'Right'"},{name:"literal",value:"'None'"}]},description:"",defaultValue:{value:"'Right'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const Switch_stories={title:"Components/Switch",component:Switch},Off={args:{label:"Notifications",checked:!1}},On={args:{label:"Notifications",checked:!0}},Interactive={render:()=>{const[checked,setChecked]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(Switch,{label:"Dark Mode",checked,onChange:setChecked})}},LabelPositions={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[(0,jsx_runtime.jsx)(Switch,{label:"Label Right",labelPosition:"Right",checked:!0}),(0,jsx_runtime.jsx)(Switch,{label:"Label Left",labelPosition:"Left",checked:!0}),(0,jsx_runtime.jsx)(Switch,{labelPosition:"None",checked:!0})]})},__namedExportsOrder=["Off","On","Interactive","LabelPositions"];Off.parameters={...Off.parameters,docs:{...Off.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notifications',\n    checked: false\n  }\n}",...Off.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notifications',\n    checked: true\n  }\n}",...On.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    return <Switch label="Dark Mode" checked={checked} onChange={setChecked} />;\n  }\n}',...Interactive.parameters?.docs?.source}}},LabelPositions.parameters={...LabelPositions.parameters,docs:{...LabelPositions.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: 16\n  }}>\n      <Switch label="Label Right" labelPosition="Right" checked />\n      <Switch label="Label Left" labelPosition="Left" checked />\n      <Switch labelPosition="None" checked />\n    </div>\n}',...LabelPositions.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Switch-stories.c9203e8c.iframe.bundle.js.map