"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[735],{"./stories/Pagination.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FewPages:()=>FewPages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.Ay.nav`
  display: flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[4]};
`,PageButton=styled_components_browser_esm.Ay.button`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({$active,theme})=>$active?theme.semantic.brand.primary:theme.colors.gray[300]};
  border-radius: ${({theme})=>theme.radius.sm};
  background: ${({$active,theme})=>$active?theme.semantic.brand.primary:"transparent"};
  color: ${({$active,theme})=>$active?"#ffffff":theme.semantic.text.primary};
  font-family: ${({theme})=>theme.fontFamily};
  font-size: ${({theme})=>theme.fontSize.base};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    border-color: ${({theme})=>theme.semantic.brand.primary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,Ellipsis=styled_components_browser_esm.Ay.span`
  padding: 0 4px;
  color: ${({theme})=>theme.semantic.text.tertiary};
`,Pagination=({currentPage,totalPages,onChange})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(PageButton,{disabled:1===currentPage,onClick:()=>onChange(currentPage-1),children:"‹"}),(()=>{const pages=[];if(totalPages<=7)for(let i=1;i<=totalPages;i++)pages.push(i);else{pages.push(1),currentPage>3&&pages.push("ellipsis");const start=Math.max(2,currentPage-1),end=Math.min(totalPages-1,currentPage+1);for(let i=start;i<=end;i++)pages.push(i);currentPage<totalPages-2&&pages.push("ellipsis"),pages.push(totalPages)}return pages})().map((page,i)=>"ellipsis"===page?(0,jsx_runtime.jsx)(Ellipsis,{children:"…"},`e-${i}`):(0,jsx_runtime.jsx)(PageButton,{$active:page===currentPage,onClick:()=>onChange(page),children:page},page)),(0,jsx_runtime.jsx)(PageButton,{disabled:currentPage===totalPages,onClick:()=>onChange(currentPage+1),children:"›"})]});Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const Pagination_stories={title:"Components/Pagination",component:Pagination},Default={render:()=>{const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(Pagination,{currentPage:page,totalPages:10,onChange:setPage})}},FewPages={render:()=>{const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(Pagination,{currentPage:page,totalPages:5,onChange:setPage})}},__namedExportsOrder=["Default","FewPages"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [page, setPage] = useState(1);\n    return <Pagination currentPage={page} totalPages={10} onChange={setPage} />;\n  }\n}",...Default.parameters?.docs?.source}}},FewPages.parameters={...FewPages.parameters,docs:{...FewPages.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [page, setPage] = useState(1);\n    return <Pagination currentPage={page} totalPages={5} onChange={setPage} />;\n  }\n}",...FewPages.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Pagination-stories.00f5e64a.iframe.bundle.js.map