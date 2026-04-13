"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[844],{"./stories/Avatar.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Initials:()=>Initials,Large:()=>Large,Sizes:()=>Sizes,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledAvatar=styled_components_browser_esm.Ay.div`
  width: ${({$size})=>$size}px;
  height: ${({$size})=>$size}px;
  border-radius: ${({theme})=>theme.radius.rounded};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme})=>theme.semantic.brand.primary};
  color: #ffffff;
  font-family: ${({theme})=>theme.fontFamily};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  font-size: ${({$size})=>Math.round(.4*$size)}px;
  flex-shrink: 0;
`,AvatarImage=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Avatar=({type="Initial",src,alt="",initials="",size=40})=>(0,jsx_runtime.jsx)(StyledAvatar,{$size:size,children:"Image"===type&&src?(0,jsx_runtime.jsx)(AvatarImage,{src,alt}):initials.slice(0,2).toUpperCase()});Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"'Initial' | 'Image'",elements:[{name:"literal",value:"'Initial'"},{name:"literal",value:"'Image'"}]},description:"",defaultValue:{value:"'Initial'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}}}};const Avatar_stories={title:"Components/Avatar",component:Avatar},Initials={args:{initials:"GC",size:48}},Small={args:{initials:"AB",size:32}},Large={args:{initials:"XY",size:64}},Sizes={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,jsx_runtime.jsx)(Avatar,{initials:"SM",size:24}),(0,jsx_runtime.jsx)(Avatar,{initials:"MD",size:32}),(0,jsx_runtime.jsx)(Avatar,{initials:"LG",size:48}),(0,jsx_runtime.jsx)(Avatar,{initials:"XL",size:64})]})},__namedExportsOrder=["Initials","Small","Large","Sizes"];Initials.parameters={...Initials.parameters,docs:{...Initials.parameters?.docs,source:{originalSource:"{\n  args: {\n    initials: 'GC',\n    size: 48\n  }\n}",...Initials.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    initials: 'AB',\n    size: 32\n  }\n}",...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    initials: 'XY',\n    size: 64\n  }\n}",...Large.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    display: \'flex\',\n    gap: 12,\n    alignItems: \'center\'\n  }}>\n      <Avatar initials="SM" size={24} />\n      <Avatar initials="MD" size={32} />\n      <Avatar initials="LG" size={48} />\n      <Avatar initials="XL" size={64} />\n    </div>\n}',...Sizes.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Avatar-stories.e905d82f.iframe.bundle.js.map