!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).polythene={})}(this,function(t){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e=/(&#?\w+;)/,r={};function c(t,n){for(var e=0;e<t.length;e++)n(t[e],e)}function o(t){this.virtual=t,this.children=[]}["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].forEach(function(t){r[t.toLowerCase()]=t}),o.prototype={addVirtualString:function(t){var n=this,r=t.replace(/(["\r\n])/g,"\\$1"),c=r.split(e);c.length>1?c.forEach(function(t){t.match(e)?n.children.push({content:'m.trust("'.concat(t,'")')}):t&&n.children.push({content:'"'.concat(t,'"')})}):this.children.push({content:'"'.concat(r,'"')})},addVirtualAttrs:function(t){var n="div"===t.tag?"":t.tag;if(t.attrs.class){var e=t.attrs.class.replace(/\s+/g,".");n+=".".concat(e),t.attrs.class=void 0}if(c(Object.keys(t.attrs).sort(),function(e){if("style"!==e&&void 0!==t.attrs[e]){var r=t.attrs[e];r=(r=(r=r.replace(/[\n\r\t]/g," ")).replace(/\s+/g," ")).replace(/'/g,"\\'"),n+="[".concat(e,"='").concat(r,"']")}}),""===n&&(n="div"),n='"'.concat(n,'"'),t.attrs.style){var r=t.attrs.style.replace(/(^.*);\s*$/,"$1");r=(r=(r=(r=r.replace(/[\n\r]/g,"")).split(/\s*;\s*/)).map(function(t){return t.split(/\s*:\s*/).map(function(t){return'"'.concat(t,'"')}).join(": ")})).join(", "),n+=", {style: {".concat(r,"}}")}var a=0!==t.children.length?new o(t.children).complete():null;this.children.push({node:n,children:a})},complete:function(){return c(this.virtual,function(t){if("string"==typeof t){var n=t.trim(),e=n.charCodeAt(0);0===n.length||'"'===n||1===n.length&&10===e||!(10===e||e>=32)||this.addVirtualString(n)}else this.addVirtualAttrs(t)}.bind(this)),this.children}};var a={2:"  ",4:"    ",tab:"\t"};t.templateBuilder=function(t){var e,i=new o(function t(n){var e=[];return c(n,function(n){if(3===n.nodeType)e.push(n.nodeValue);else if(1===n.nodeType){var o={};c(n.attributes,function(t){o[t.name]=t.value});var a=n.nodeName.toLowerCase(),i=r[a]?r[a]:a;e.push({tag:i,attrs:o,children:t(n.childNodes)})}}),e}(function(t){if((t=t.replace(/&/g,"&amp;")).indexOf("<!doctype")>=0)return[(new DOMParser).parseFromString(t,"text/html").childNodes[1]];var e=document.createElement("div");return e.insertAdjacentHTML("beforeend",t),n(e.childNodes)}(t.source))).complete(),l=function t(n,e,r){return n?n.map(function(n){var c=function(t,n){if(t<0)return"";for(var e="",r=0;r<t;r++)e+=n;return e}(e,r);if(n.content)return function(t,n){return"\n".concat(n).concat(t)}(n.content,c);var o=n.node||"",a=e+(n.children&&n.children.length>1?2:1);return function(t,n,e,r){return n?n.length>1?function(t,n,e,r){return"\n".concat(e,"m(").concat(t,",\n").concat(e).concat(r,"[").concat(n,"\n").concat(e).concat(r,"]\n").concat(e,")")}(t,n,e,r):function(t,n,e){return"\n".concat(e,"m(").concat(t,", ").concat(n,"\n").concat(e,")")}(t,n,e):function(t,n){return"\n".concat(n,"m(").concat(t,")")}(t,e)}(o,t(n.children,a,r)||"",c,r)}):""}(i,i.length>1?1:0,a[t.indent||"4"]);return l.length>1?(e=l.join(", "),"[".concat(e,"\n]")):l.join("").trim()},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=mithril-template-builder.js.map
