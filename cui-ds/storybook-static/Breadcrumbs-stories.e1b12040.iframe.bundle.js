"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[395],{"./stories/Breadcrumbs.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsed:()=>Collapsed,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Nav=styled_components_browser_esm.Ay.nav`
  display: flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[8]};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
`,CrumbLink=styled_components_browser_esm.Ay.a`
  color: ${({theme})=>theme.semantic.brand.primary};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,CurrentCrumb=styled_components_browser_esm.Ay.span`
  color: ${({theme})=>theme.semantic.text.secondary};
`,Separator=styled_components_browser_esm.Ay.span`
  color: ${({theme})=>theme.semantic.text.tertiary};
`,CollapseButton=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  color: ${({theme})=>theme.semantic.text.tertiary};
  cursor: pointer;
  padding: 2px 4px;
  font-size: inherit;
  &:hover { color: ${({theme})=>theme.semantic.brand.primary}; }
`,Breadcrumbs=({items,collapsed=!1})=>{const displayItems=collapsed&&items.length>3?[items[0],{label:"..."},items[items.length-1]]:items;return(0,jsx_runtime.jsx)(Nav,{"aria-label":"Breadcrumb",children:displayItems.map((item,i)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[i>0&&(0,jsx_runtime.jsx)(Separator,{children:"/"}),"..."===item.label?(0,jsx_runtime.jsx)(CollapseButton,{children:"..."}):i===displayItems.length-1?(0,jsx_runtime.jsx)(CurrentCrumb,{children:item.label}):(0,jsx_runtime.jsx)(CrumbLink,{href:item.href||"#",children:item.label})]},i))})};Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Breadcrumbs_stories={title:"Components/Breadcrumbs",component:Breadcrumbs},Default={args:{items:[{label:"Home",href:"#"},{label:"Accounts",href:"#"},{label:"Checking"}]}},Collapsed={args:{collapsed:!0,items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Accounts",href:"#"},{label:"Checking",href:"#"},{label:"Details"}]}},__namedExportsOrder=["Default","Collapsed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      label: 'Home',\n      href: '#'\n    }, {\n      label: 'Accounts',\n      href: '#'\n    }, {\n      label: 'Checking'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},Collapsed.parameters={...Collapsed.parameters,docs:{...Collapsed.parameters?.docs,source:{originalSource:"{\n  args: {\n    collapsed: true,\n    items: [{\n      label: 'Home',\n      href: '#'\n    }, {\n      label: 'Products',\n      href: '#'\n    }, {\n      label: 'Accounts',\n      href: '#'\n    }, {\n      label: 'Checking',\n      href: '#'\n    }, {\n      label: 'Details'\n    }]\n  }\n}",...Collapsed.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Breadcrumbs-stories.e1b12040.iframe.bundle.js.map