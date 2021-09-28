"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[660],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a={id:"overview",title:"Overview"},c=void 0,l={unversionedId:"Frontend Development/overview",id:"Frontend Development/overview",isDocsHomePage:!1,title:"Overview",description:"Tech Stack",source:"@site/docs/Frontend Development/overview.md",sourceDirName:"Frontend Development",slug:"/Frontend Development/overview",permalink:"/community-platform/Frontend Development/overview",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Frontend Development/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"mainSidebar",previous:{title:"Markdown Style Guide",permalink:"/community-platform/Docs Contribution/md-style-guide"},next:{title:"Firebase Emulators",permalink:"/community-platform/Backend Development/firebase-emulators"}},s=[{value:"Tech Stack",id:"tech-stack",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Inconsistencies",id:"inconsistencies",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,i.kt)("p",null,"The platform is built in ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"},"Typescript")," for typing and consistency, ",(0,i.kt)("a",{parentName:"p",href:"https://www.styled-components.com/"},"styled-components")," for reusability and component based styling."),(0,i.kt)("h2",{id:"code-style"},"Code Style"),(0,i.kt)("p",null,"We created a rough frontend guide to explain our choices and best practice in building the One Army interface. This guide is available in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/wiki/Frontend"},"the wiki"),"."),(0,i.kt)("h2",{id:"inconsistencies"},"Inconsistencies"),(0,i.kt)("p",null,"When development first started in 2018 many modern react features were either not available or less common (e.g. hooks, functional components, scss support, etc.), and had multiple iterations on architecture and styling approaches. As such you'll likely find rough patches and inconsistencies throughout the codebase, and remnants of old code snippets no longer relevant."),(0,i.kt)("p",null,"If you're interested in helping to upgrade older parts of the codebase and help to make the overall system more consistent and developer-friendly, we support a ",(0,i.kt)("a",{parentName:"p",href:"/community-platform/Contributing/maintainer"},"Maintainer Role")," position that could be perfect for you!"))}u.isMDXComponent=!0}}]);