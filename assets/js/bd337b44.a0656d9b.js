(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1068:function(e,t,n){"use strict";n.r(t),t.default="import invariant from 'invariant';\n\n// There is no standarized error format. While creating a custom bridge, one can\n// come up with an own error format, returned from validator and later analyzed\n// in `getError*` methods.\ntype Error = any;\n\n// There is no standarized field format. Most bridges use it as a common object,\n// used in calculation of initial values, props, and types.\ntype Field = any;\n\n// There is no standarized field type format. However, `AutoField` component\n// will work correctly only with standard JavaScript constructors, like `String`\n// or `Number`.\ntype FieldType = any;\n\nexport abstract class Bridge {\n  // Each bridge can have a different set of parameters.\n  constructor(...args: any[]) {\n    invariant(\n      this.constructor !== Bridge,\n      'Bridge cannot be instantiated (args=%o).',\n      { args },\n    );\n  }\n\n  // Get an error for field `name` out of `error`. There is no standarized\n  // format, but fields treat truthy values as a sign of being invalid. Fields\n  // receive this as a `error` guaranteed prop.\n  getError(name: string, error: Error): Error {\n    return invariant(\n      false,\n      '%s have not implemented `getError` method (args=%o).',\n      this.constructor.name,\n      { name, error },\n    );\n  }\n\n  // Get an error message for field `name` out of `error`. If there is no error,\n  // return an empty string. Fields receive this as a `errorMessage` guaranteed\n  // prop.\n  getErrorMessage(name: string, error: Error): string {\n    return invariant(\n      false,\n      '%s have not implemented `getErrorMessage` method (args=%o).',\n      this.constructor.name,\n      { name, error },\n    );\n  }\n\n  // Get all error messages from `error`. Only `ErrorsField` make use of that\n  // (in builtin themes).\n  getErrorMessages(error: Error): string[] {\n    return invariant(\n      false,\n      '%s have not implemented `getErrorMessages` method (args=%o).',\n      this.constructor.name,\n      { error },\n    );\n  }\n\n  // Get internal field definition for field `name`. Fields receive this as a\n  // `field` guaranteed prop.\n  getField(name: string): Field {\n    return invariant(\n      false,\n      '%s have not implemented `getField` method (args=%o).',\n      this.constructor.name,\n      { name },\n    );\n  }\n\n  // Get initial value of field `name`. It is used as a default when no value is\n  // set (e.g. the form is rendered with an empty `model`). Additionally,\n  // `props` are this field instance props. If a field is rendered multiple\n  // times, this function will be called multiple times, possibly with different\n  // `props`.\n  getInitialValue(name: string, props: Record<string, any>): any {\n    return invariant(\n      false,\n      '%s have not implemented `getInitialValue` method (args=%o).',\n      this.constructor.name,\n      { name, props },\n    );\n  }\n\n  // Get props defined in schema for a field `name`. There are no required nor\n  // banned fields, however properties like `required` are often available.\n  // Additionally, `props` are this field instance props. If a field is rendered\n  // multiple times, this function will be called multiple times, possibly with\n  // different `props`.\n  getProps(name: string, props: Record<string, any>): Record<string, any> {\n    return invariant(\n      false,\n      '%s have not implemented `getProps` method (args=%o).',\n      this.constructor.name,\n      { name, props },\n    );\n  }\n\n  // Get a list of subfields of field `name` or top-level fields, if no `name`\n  // is passed.\n  getSubfields(name?: string): string[] {\n    return invariant(\n      false,\n      '%s have not implemented `getSubfields` method (args=%o).',\n      this.constructor.name,\n      { name },\n    );\n  }\n\n  // Get a type of field `name`. See `FieldTypeType` for details.\n  getType(name: string): FieldType {\n    return invariant(\n      false,\n      '%s have not implemented `getType` method (args=%o).',\n      this.constructor.name,\n      { name },\n    );\n  }\n\n  // Get a validator function. The `options` here are from the `validator` prop\n  // of the form. A validator function receives a model and returns an error or\n  // a promise that will resolve (not reject!) with an error. If there is no\n  // error, return (or resolve with) a `null` value instead.\n  // eslint-disable-next-line prettier/prettier\n  getValidator(options?: any): (model: Record<string, any>) => null | Error | Promise<null | Error> {\n    return invariant(\n      false,\n      '%s have not implemented `getValidator` method (args=%o).',\n      this.constructor.name,\n      { options },\n    );\n  }\n}\n"},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(211),a=n(0),o=n.n(a);function i(e){var t=e.language,n=e.replace,a=e.section,i=e.source;if("object"==typeof i&&"default"in i&&(i=i.default),a){var s=new RegExp("// <"+a+">\\s([\\s\\S]*?)\\s// </"+a+">\\s","g");i=i.split(s).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(i=i.replace(/\/\/ <.*?\n/g,""),n)for(var l=0,c=Object.entries(n);l<c.length;l++){var d=c[l],u=d[0],p=d[1];i=i.replace(new RegExp(u,"gs"),p)}return(i=i.trim()).includes("\n")||(i+="\n"),o.a.createElement(r.a.pre,null,o.a.createElement(r.a.code,{children:i,className:"language-"+t,mdxType:"code",originalType:"code",parentName:"pre"}))}},211:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(207),i=n(3),s=n(126),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(24).a,theme:l};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),d(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?u({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),d(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(s))}})),d(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?u({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),d(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,s=[],l=[s];i>-1;){for(;(o=r[i]++)<a[i];){var c=void 0,d=t[i],u=n[i][o];if("string"==typeof u?(d=i>0?d:["plain"],c=u):(d=h(d,u.type),u.alias&&(d=h(d,u.alias)),c=u.content),"string"==typeof c){var g=c.split(p),f=g.length;s.push({types:d,content:g[0]});for(var y=1;y<f;y++)m(s),l.push(s=[]),s.push({types:d,content:g[y]})}else i++,t.push(d),n.push(c),r.push(0),a.push(c.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return m(s),l}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var v=n(212),b=n.n(v),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(220),E=n(133),T=function(){var e=Object(E.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||k,r=e.darkTheme||n;return t?r:n},w=n(186),O=n(63),x=n.n(O),N=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},B=/(?:title=")(.*)(?:")/;function S(e){var t=e.children,n=e.className,o=e.metastring,l=Object(E.useThemeConfig)().prism,d=Object(r.useState)(!1),u=d[0],p=d[1],m=Object(r.useState)(!1),h=m[0],g=m[1];Object(r.useEffect)((function(){g(!0)}),[]);var f=Object(r.useRef)(null),v=[],k="",j=T(),O=Array.isArray(t)?t.join(""):t;if(o&&N.test(o)){var S=o.match(N)[1];v=b()(S).filter((function(e){return e>0}))}o&&B.test(o)&&(k=o.match(B)[1]);var P=n&&n.replace(/language-/,"");!P&&l.defaultLanguage&&(P=l.defaultLanguage);var F=O.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var I,L="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(P),D=O.replace(/\n$/,"").split("\n"),R=0;R<D.length;){var z=R+1,G=D[R].match(A);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=z+",";break;case"highlight-start":I=z;break;case"highlight-end":L+=I+"-"+(z-1)+","}D.splice(R,1)}else R+=1}v=b()(L),F=D.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(F),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.a.createElement(y,Object(i.a)({},c,{key:String(h),theme:j,code:F,language:P}),(function(e){var t,n=e.className,r=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.a.createElement("div",{className:x.a.codeBlockContainer},k&&a.a.createElement("div",{style:r,className:x.a.codeBlockTitle},k),a.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,P)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=k,t))},a.a.createElement("div",{className:x.a.codeBlockLines,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(i.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(i.a)({key:t},c({token:e,key:t})))})))})))),a.a.createElement("button",{ref:f,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:M},u?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var P=n(9),F=(n(64),n(65)),I=n.n(F),L=function(e){return function(t){var n,r=t.id,o=Object(P.a)(t,["id"]),i=Object(E.useThemeConfig)().navbar.hideOnScroll;return r?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(n={},n[I.a.enhancedAnchor]=!i,n)),id:r}),o.children,a.a.createElement("a",{className:"hash-link",href:"#"+r,title:Object(w.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.a.createElement(e,o)}},A={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?a.a.createElement(S,e):a.a.createElement("code",e):t},a:function(e){return a.a.createElement(o.a,e)},pre:function(e){var t=e.children;return a.a.createElement(S,Object(r.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")};t.a=A},212:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},220:function(e,t,n){"use strict";var r=n(0),a=n(378);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},378:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(void 0);t.a=a},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(9),o=(n(0),n(187)),i=n(208),s={id:"uth-bridge-concept",title:"Bridge concept"},l={unversionedId:"uth-bridge-concept",id:"uth-bridge-concept",isDocsHomePage:!1,title:"Bridge concept",description:'To make use of any schema, uniforms have to create a bridge of it - a unified schema mapper. The Bridge class is an abstract class, which should be extended to create custom bridges. It implements all of the required methods and throws an error with meaningful "method not implemented" error.',source:"@site/../docs/uth-bridge-concept.mdx",slug:"/uth-bridge-concept",permalink:"/docs/uth-bridge-concept",version:"current",sidebar:"docs",previous:{title:"AutoField algorithm",permalink:"/docs/uth-autofield-algorithm"}},c=[],d={toc:c};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To make use of any schema, uniforms have to create a ",Object(o.b)("em",{parentName:"p"},"bridge")," of it - a unified schema mapper. The ",Object(o.b)("inlineCode",{parentName:"p"},"Bridge"),' class is an abstract class, which should be extended to create custom bridges. It implements all of the required methods and throws an error with meaningful "method not implemented" error.'),Object(o.b)(i.a,{language:"ts",replace:{"(  .*?) {\n.*?  }":"$1;","(import |  // eslint).*?\n":""},source:n(1068),mdxType:"CodeSection"}))}u.isMDXComponent=!0}}]);