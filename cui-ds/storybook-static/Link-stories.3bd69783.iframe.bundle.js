"use strict";(self.webpackChunkcui_ds=self.webpackChunkcui_ds||[]).push([[711],{"./stories/Link.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonOutline:()=>ButtonOutline,ButtonPrimary:()=>ButtonPrimary,ButtonSecondary:()=>ButtonSecondary,Disabled:()=>Disabled,TextLink:()=>TextLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledLink=styled_components_browser_esm.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing[4]};
  font-family: ${({theme})=>theme.fontFamily};
  font-weight: ${({theme})=>theme.fontWeight.bold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: ${({$size,theme})=>"Large"===$size?theme.fontSize.md:theme.fontSize.base};

  ${({$disabled})=>$disabled&&styled_components_browser_esm.AH`
      opacity: 0.4;
      pointer-events: none;
    `}

  ${({$appearance,theme})=>{switch($appearance){case"Text":return styled_components_browser_esm.AH`
          color: ${theme.semantic.brand.primary};
          &:hover { text-decoration: underline; }
        `;case"LinkButton Primary":return styled_components_browser_esm.AH`
          color: #ffffff;
          background: ${theme.semantic.brand.primary};
          padding: 10px 20px;
          border-radius: ${theme.radius.md};
          &:hover { opacity: 0.85; }
        `;case"LinkButton Secondary":return styled_components_browser_esm.AH`
          color: ${theme.semantic.brand.primary};
          background: ${theme.semantic.brand.secondary};
          padding: 10px 20px;
          border-radius: ${theme.radius.md};
          &:hover { opacity: 0.85; }
        `;case"LinkButton Outline":return styled_components_browser_esm.AH`
          color: ${theme.semantic.brand.primary};
          background: transparent;
          padding: 10px 20px;
          border: 2px solid ${theme.semantic.brand.primary};
          border-radius: ${theme.radius.md};
          &:hover { background: ${theme.semantic.brand.secondary}; }
        `}}}
`,Link=({appearance="Text",size="Medium",disabled=!1,children,...props})=>(0,jsx_runtime.jsx)(StyledLink,{$appearance:appearance,$size:size,$disabled:disabled,...props,children});Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{appearance:{required:!1,tsType:{name:"union",raw:"'Text' | 'LinkButton Primary' | 'LinkButton Secondary' | 'LinkButton Outline'",elements:[{name:"literal",value:"'Text'"},{name:"literal",value:"'LinkButton Primary'"},{name:"literal",value:"'LinkButton Secondary'"},{name:"literal",value:"'LinkButton Outline'"}]},description:"",defaultValue:{value:"'Text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'Medium' | 'Large'",elements:[{name:"literal",value:"'Medium'"},{name:"literal",value:"'Large'"}]},description:"",defaultValue:{value:"'Medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Link_stories={title:"Components/Link",component:Link,argTypes:{appearance:{control:"select",options:["Text","LinkButton Primary","LinkButton Secondary","LinkButton Outline"]},size:{control:"select",options:["Medium","Large"]}}},TextLink={args:{children:"Learn more",appearance:"Text",href:"#"}},ButtonPrimary={args:{children:"Get Started",appearance:"LinkButton Primary",href:"#"}},ButtonSecondary={args:{children:"Learn More",appearance:"LinkButton Secondary",href:"#"}},ButtonOutline={args:{children:"Sign Up",appearance:"LinkButton Outline",href:"#"}},Disabled={args:{children:"Disabled Link",disabled:!0,href:"#"}},__namedExportsOrder=["TextLink","ButtonPrimary","ButtonSecondary","ButtonOutline","Disabled"];TextLink.parameters={...TextLink.parameters,docs:{...TextLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Learn more',\n    appearance: 'Text',\n    href: '#'\n  }\n}",...TextLink.parameters?.docs?.source}}},ButtonPrimary.parameters={...ButtonPrimary.parameters,docs:{...ButtonPrimary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Get Started',\n    appearance: 'LinkButton Primary',\n    href: '#'\n  }\n}",...ButtonPrimary.parameters?.docs?.source}}},ButtonSecondary.parameters={...ButtonSecondary.parameters,docs:{...ButtonSecondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Learn More',\n    appearance: 'LinkButton Secondary',\n    href: '#'\n  }\n}",...ButtonSecondary.parameters?.docs?.source}}},ButtonOutline.parameters={...ButtonOutline.parameters,docs:{...ButtonOutline.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Sign Up',\n    appearance: 'LinkButton Outline',\n    href: '#'\n  }\n}",...ButtonOutline.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Disabled Link',\n    disabled: true,\n    href: '#'\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Link-stories.3bd69783.iframe.bundle.js.map