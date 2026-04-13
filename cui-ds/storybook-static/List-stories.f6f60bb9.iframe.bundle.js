"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[199],{"./stories/List.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoDividers:()=>NoDividers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const Wrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,Title=styled_components_browser_esm.Ay.div`
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.xs};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  color: ${({theme})=>theme.semantic.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 16px;
`,Item=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.md};
  color: ${({theme})=>theme.semantic.text.primary};
  border-bottom: ${({$divider,theme})=>$divider?`1px solid ${theme.colors.gray[300]}`:"none"};
`,RightText=styled_components_browser_esm.Ay.span`
  color: ${({theme})=>theme.semantic.text.secondary};
  font-size: ${({theme})=>theme.fontSize.base};
`,List=({title,items,dividers=!0})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),items.map((item,i)=>(0,jsx_runtime.jsxs)(Item,{$divider:dividers&&i<items.length-1,children:[(0,jsx_runtime.jsx)("span",{children:item.label}),item.rightText&&(0,jsx_runtime.jsx)(RightText,{children:item.rightText})]},i))]});List.__docgenInfo={description:"",methods:[],displayName:"List",props:{title:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"ListItemData"}],raw:"ListItemData[]"},description:""},dividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const List_stories={title:"Components/List",component:List},Default={args:{title:"Account Details",items:[{label:"Account Number",rightText:"****4521"},{label:"Routing Number",rightText:"021000021"},{label:"Account Type",rightText:"Checking"},{label:"Balance",rightText:"$12,450.00"}]},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:360},children:(0,jsx_runtime.jsx)(Story,{})})]},NoDividers={args:{items:[{label:"Item one"},{label:"Item two"},{label:"Item three"}],dividers:!1},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["Default","NoDividers"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Account Details',\n    items: [{\n      label: 'Account Number',\n      rightText: '****4521'\n    }, {\n      label: 'Routing Number',\n      rightText: '021000021'\n    }, {\n      label: 'Account Type',\n      rightText: 'Checking'\n    }, {\n      label: 'Balance',\n      rightText: '$12,450.00'\n    }]\n  },\n  decorators: [Story => <div style={{\n    width: 360\n  }}><Story /></div>]\n}",...Default.parameters?.docs?.source}}},NoDividers.parameters={...NoDividers.parameters,docs:{...NoDividers.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Item one'\n    }, {\n      label: 'Item two'\n    }, {\n      label: 'Item three'\n    }],\n    dividers: false\n  },\n  decorators: [Story => <div style={{\n    width: 300\n  }}><Story /></div>]\n}",...NoDividers.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=List-stories.f6f60bb9.iframe.bundle.js.map