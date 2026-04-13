"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[523],{"./stories/Tabs.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TabList=styled_components_browser_esm.Ay.div`
  display: flex;
  border-bottom: 1px solid ${({theme})=>theme.colors.gray[300]};
  gap: ${({theme})=>theme.spacing[4]};
`,Tab=styled_components_browser_esm.Ay.button`
  padding: 12px 16px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({$active,theme})=>$active?theme.semantic.brand.primary:"transparent"};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({$active,theme})=>$active?theme.fontWeight.bold:theme.fontWeight.medium};
  color: ${({$active,theme})=>$active?theme.semantic.brand.primary:theme.semantic.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px;

  &:hover {
    color: ${({theme})=>theme.semantic.brand.primary};
  }
`,Tabs=({tabs,activeTab,onChange})=>(0,jsx_runtime.jsx)(TabList,{role:"tablist",children:tabs.map(tab=>(0,jsx_runtime.jsx)(Tab,{role:"tab",$active:activeTab===tab.value,"aria-selected":activeTab===tab.value,onClick:()=>onChange(tab.value),children:tab.label},tab.value))});Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeTab:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Tabs_stories={title:"Components/Tabs",component:Tabs},Default={render:()=>{const[active,setActive]=(0,react.useState)("overview");return(0,jsx_runtime.jsx)("div",{style:{width:400},children:(0,jsx_runtime.jsx)(Tabs,{tabs:[{label:"Overview",value:"overview"},{label:"Transactions",value:"transactions"},{label:"Settings",value:"settings"}],activeTab:active,onChange:setActive})})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [active, setActive] = useState('overview');\n    return <div style={{\n      width: 400\n    }}>\n        <Tabs tabs={[{\n        label: 'Overview',\n        value: 'overview'\n      }, {\n        label: 'Transactions',\n        value: 'transactions'\n      }, {\n        label: 'Settings',\n        value: 'settings'\n      }]} activeTab={active} onChange={setActive} />\n      </div>;\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Tabs-stories.a0329964.iframe.bundle.js.map