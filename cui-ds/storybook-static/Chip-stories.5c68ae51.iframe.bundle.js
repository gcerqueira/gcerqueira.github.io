"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[617],{"./stories/Chip.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,ChipGroup:()=>ChipGroup,Inactive:()=>Inactive,WithDropdown:()=>WithDropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledChip=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[8]};
  padding: 6px 16px;
  border-radius: ${({theme})=>theme.radius.rounded};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({theme})=>theme.colors.gray[400]};

  ${({$active,theme})=>$active?styled_components_browser_esm.AH`
          background: ${theme.semantic.brand.primary};
          color: #ffffff;
          border-color: ${theme.semantic.brand.primary};
        `:styled_components_browser_esm.AH`
          background: transparent;
          color: ${theme.semantic.text.primary};
          &:hover {
            background: ${theme.colors.gray[200]};
          }
        `}
`,DropdownArrow=()=>(0,jsx_runtime.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",children:(0,jsx_runtime.jsx)("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Chip=({active=!1,icon,dropdown=!1,onClick,children})=>(0,jsx_runtime.jsxs)(StyledChip,{$active:active,onClick,type:"button",children:[icon,children,dropdown&&(0,jsx_runtime.jsx)(DropdownArrow,{})]});Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dropdown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Chip_stories={title:"Components/Chip",component:Chip},Inactive={args:{children:"Checking"}},Active={args:{children:"Checking",active:!0}},WithDropdown={args:{children:"Filter",dropdown:!0}},ChipGroup={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,jsx_runtime.jsx)(Chip,{active:!0,children:"All"}),(0,jsx_runtime.jsx)(Chip,{children:"Checking"}),(0,jsx_runtime.jsx)(Chip,{children:"Savings"}),(0,jsx_runtime.jsx)(Chip,{children:"Loans"})]})},__namedExportsOrder=["Inactive","Active","WithDropdown","ChipGroup"];Inactive.parameters={...Inactive.parameters,docs:{...Inactive.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Checking'\n  }\n}",...Inactive.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Checking',\n    active: true\n  }\n}",...Active.parameters?.docs?.source}}},WithDropdown.parameters={...WithDropdown.parameters,docs:{...WithDropdown.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Filter',\n    dropdown: true\n  }\n}",...WithDropdown.parameters?.docs?.source}}},ChipGroup.parameters={...ChipGroup.parameters,docs:{...ChipGroup.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'flex',\n    gap: 8\n  }}>\n      <Chip active>All</Chip>\n      <Chip>Checking</Chip>\n      <Chip>Savings</Chip>\n      <Chip>Loans</Chip>\n    </div>\n}",...ChipGroup.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Chip-stories.5c68ae51.iframe.bundle.js.map