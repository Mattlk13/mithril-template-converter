!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).mithrilTemplateBuilder=e.mithrilTemplateBuilder||{})}(this,(function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u={allowfullscreen:1,allowpaymentrequest:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,default:1,defer:1,disabled:1,formnovalidate:1,hidden:1,ismap:1,itemscope:1,loop:1,multiple:1,muted:1,nomodule:1,novalidate:1,open:1,readonly:1,required:1,reversed:1,selected:1,typemustmatch:1},s={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},f=/(&#?\w+;)/,h=/^[a-zA-Z][a-zA-Z0-9\-\:]*$/,d={2:{label:"2 spaces",value:"  "},4:{label:"4 spaces",value:"    "},tab:{label:"Tabs",value:"\t"}},p=d[2],g={attributes:{label:"Attributes",value:"attributes"},selectors:{label:"Selectors",value:"selectors"}},m=g.attributes,b={double:{label:"Double",value:'"'},single:{label:"Single",value:"'"}},y=b.double,v=function(e,t){return e.replace(new RegExp('"',"g"),t)},O=function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)},j=function e(t){var n=[];return O(t,(function(t){if(3===t.nodeType)n.push(t.nodeValue);else if(1===t.nodeType){var r={};O(t.attributes,(function(e){var t=e.name,n=e.value;!!t.match(h)&&(r[t]=u[t]?t:n)}));var a=t.nodeName.toLowerCase();if(!!a.match(h)){var o=s[a]||a;n.push({tag:o,attrs:r,children:e(t.childNodes)})}}})),n},C=function(e){var t=e.replace(/(^.*);\s*$/,"$1");return(t=t.replace(/[\n\r]/g,"")).split(/\s*;\s*/).map((function(e){return e.split(/\s*:\s*/)}))},S=function(e){return e.reduce((function(e,t){var n=o(t,2),r=n[0],a=n[1];return e[r]=a,e}),{})};function q(e,t){var n=t.attrs,r=t.quoteChar;this.virtual=e,this.attrs=n,this.quoteChar=r,this.embeddedQuoteChar='"'===r?"'":'"',this.children=[]}q.prototype={addVirtualString:function(e){var t=this,n=e.replace(/(["\r\n])/g,"\\$1"),r=n.split(f);r.length>1?r.forEach((function(e){e.match(f)?t.children.push({content:"m.trust(".concat(t.quoteChar).concat(e).concat(t.quoteChar,")")}):e&&t.children.push({content:"".concat(t.quoteChar).concat(e).concat(t.quoteChar)})})):this.children.push({content:"".concat(this.quoteChar).concat(n).concat(this.quoteChar)})},addVirtualAttrs:function(e){var t=this,n={tag:"",className:"",attrsAsSelectorString:"",attrsAsObjectString:"",style:""},o=e.attrs,i=o.class,c=void 0===i?"":i,l=o.style,s=void 0===l?"":l,f=a(o,["class","style"]),h=Object.keys(f).filter((function(e){return void 0!==f[e]})).reduce((function(e,t){return e[t]=f[t],e}),{});if(this.attrs===g.selectors.value){if(n.tag="div"===e.tag?0===Object.keys(h).length?"div":"":e.tag,n.className=c?".".concat(c.replace(/\s+/g,".")):"",n.attrsAsSelectorString=Object.keys(h).map((function(e){var n=h[e].replace(/[\n\r\t]/g," ").replace(/\s+/g," ").replace(new RegExp(t.embeddedQuoteChar,"g"),t.quoteChar);return u[e]&&e===n?"[".concat(e,"]"):"[".concat(e,"=").concat(t.embeddedQuoteChar).concat(n).concat(t.embeddedQuoteChar,"]")})).join(""),s){var d=C(s),p=S(d),m=v(JSON.stringify(p),this.quoteChar);n.style=", {".concat(this.quoteChar,"style").concat(this.quoteChar,":").concat(m,"}")}}else{var b=s?S(C(s)):{},y=r(r(r({},c.length>0?{class:v(c,this.quoteChar)}:{}),h),Object.keys(b).length>0?{style:b}:{});n.tag=e.tag||"div",Object.keys(y).length>0&&(n.attrsAsObjectString=", ".concat(v(JSON.stringify(y),this.quoteChar)))}var O=0!==e.children.length?new q(e.children,{attrs:this.attrs,quoteChar:this.quoteChar}).complete():null;this.children.push({node:function(e){var n=e.tag,r=e.className,a=e.attrsAsSelectorString,o=e.attrsAsObjectString,i=e.style;return"".concat(t.quoteChar).concat(n).concat(r).concat(a).concat(t.quoteChar).concat(o).concat(i)}(n),children:O})},complete:function(){return O(this.virtual,function(e){if("string"==typeof e){var t=e.trim(),n=e.charCodeAt(0);if(0!==t.length&&'"'!==t&&(1!==t.length||10!==n)&&(10===n||n>=32)){var r=e.replace(/[\n\r\t]/g," ").replace(/\s+/g," ");this.addVirtualString(r)}}else this.addVirtualAttrs(e)}.bind(this)),this.children}};var w=function e(t,n,r){if(t)return t.map((function(t){var a=function(e,t){if(e<0)return"";for(var n="",r=0;r<e;r++)n+=t;return n}(n,r);if(t.content)return function(e,t){return"\n".concat(t).concat(e)}(t.content,a);var o=t.node||"",i=n+(t.children&&t.children.length>1?2:1);return function(e,t,n,r){return t?t.length>1?function(e,t,n,r){return"\n".concat(n,"m(").concat(e,",\n").concat(n).concat(r,"[").concat(t,"\n").concat(n).concat(r,"]\n").concat(n,")")}(e,t,n,r):function(e,t,n){return"\n".concat(n,"m(").concat(e,", ").concat(t,"\n").concat(n,")")}(e,t,n):function(e,t){return"\n".concat(t,"m(").concat(e,")")}(e,n)}(o,e(t.children,i,r),a,r)}))};e.attrsOptions=g,e.indentOptions=d,e.quotesOptions=b,e.templateBuilder=function(e){var t,n=function(e){if((e=e.replace(/&/g,"&amp;")).indexOf("<!doctype")>=0)return[(new DOMParser).parseFromString(e,"text/html").childNodes[1]];var t=document.createElement("div");return t.insertAdjacentHTML("beforeend",e),i(t.childNodes)}(e.source),r=new q(j(n),{attrs:g[e.attrs]?g[e.attrs].value:m.value,quoteChar:b[e.quotes]?b[e.quotes].value:y.value}).complete(),a=r.length>1?1:0,o=d[e.indent]?d[e.indent].value:p.value,c=w(r,a,o);return c.length>1?(t=c.join(", "),"[".concat(t,"\n]")):c.join("").trim()},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=mithril-template-builder.js.map
