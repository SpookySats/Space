(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{1937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft_",function(){return n(7307)}])},7307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),i=n(4051),a=n.n(i),s=n(8209),c=n(2947),l=n(9008),o=n(1664),u=n(7294),d=n(9426),h=n(3047),f=n(1223),x=n(3310),p=n.n(x);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,i,a,s){try{var c=e[a](s),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(r,i)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,c=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(l){c=!0,i=l}finally{try{s||null==n.return||n.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=new c.I("https://eth-rpc-api-testnet.thetatoken.org/rpc");function w(){var e,t=(0,u.useState)(""),n=t[0],i=t[1],c=(0,u.useState)(),x=c[0],j=c[1],w=(0,u.useState)(""),g=w[0],y=w[1],b=(0,u.useState)(!1),N=b[0],k=b[1];return(0,u.useEffect)((function(){i(window.location.href);var e=function(){k(!1),j(void 0),i(window.location.href)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),(0,u.useEffect)((function(){if(n){var e=n.indexOf("#");if(-1===e)return k(!0);var t,r,i=n.slice(e+1);if("example"===i)t="example";else{if(isNaN(parseInt(i,10)))return k(!0);t=i}(r=a().mark((function e(){var n,r,i,c,l,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n="nft.spookyspace.site/spot-37-11-9-8-5.json",r="0x0000000000000000000000000000000000000000","example"===t){e.next=14;break}return i=new s.CH(h.e,d.Z,_),e.t0=v,e.next=9,Promise.all([i.tokenURI(t),i.ownerOf(t)]);case 9:e.t1=e.sent,c=(0,e.t0)(e.t1,2),n=c[0],r=c[1];case 14:return e.next=16,fetch(n);case 16:return l=e.sent,e.next=19,l.json();case 19:o=e.sent,"example"===t&&(o.isExample=!0),j(o),y(r),e.next=28;break;case 25:return e.prev=25,e.t2=e.catch(0),e.abrupt("return",k(!0));case 28:case"end":return e.stop()}}),e,null,[[0,25]])})),function(){var e=this,t=arguments;return new Promise((function(n,i){var a=r.apply(e,t);function s(e){m(a,n,i,s,c,"next",e)}function c(e){m(a,n,i,s,c,"throw",e)}s(void 0)}))})()}}),[n]),N?(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)("h1",{children:"Unable to load NFT data"}),(0,r.jsx)("p",{children:"Either this NFT does not exist or there was an issue downloading the data."})]}):x?(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"Spooky Space"})}),(0,r.jsx)("p",{children:(0,r.jsx)(o.default,{href:"/",children:"Back to the space"})}),(0,r.jsx)("h1",{children:x.name}),(0,r.jsx)("p",{className:p().nomargin,children:x.isExample?(0,r.jsx)("small",{children:"This is an example NFT."}):(0,r.jsxs)("small",{children:["TokenId ",(0,r.jsx)("strong",{children:null===(e=x.attributes.find((function(e){return"edition"===e.trait_type})))||void 0===e?void 0:e.value})," of contract ",(0,r.jsx)("a",{href:"https://testnet-explorer.thetatoken.org/".concat(h.e),target:"_blank",children:h.e})]})}),(0,r.jsx)("p",{className:p().nomargin,children:(0,r.jsxs)("small",{children:["Owned by ",(0,r.jsx)("a",{href:"https://testnet-explorer.thetatoken.org/account/".concat(g),target:"_blank",children:g})]})}),(0,r.jsxs)("div",{className:p().preview,children:[(0,r.jsx)("div",{className:p().image,children:(0,r.jsx)("img",{src:x.image})}),(0,r.jsxs)("div",{className:p().text,children:[(0,r.jsx)("h2",{children:"Metadata"}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"name"}),(0,r.jsx)("td",{children:x.name})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"description"}),(0,r.jsx)("td",{children:x.description})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"image"}),(0,r.jsx)("td",{children:x.image})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"external_url"}),(0,r.jsx)("td",{children:x.external_url})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"attributes"}),(0,r.jsx)("td",{children:(0,r.jsx)("ul",{children:x.attributes.map((function(e){return(0,r.jsxs)("li",{children:[e.trait_type,": ",e.value]},e.trait_type)}))})})]})]})})]})]})]}):(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)("h1",{children:"Loading NFT data..."}),(0,r.jsx)(f.Z,{width:300,height:120})]})}function g(){return(0,r.jsx)(w,{})}},3310:function(e){e.exports={container:"Nft_container__OJcbm",nomargin:"Nft_nomargin__6AjUf",preview:"Nft_preview__CxySX",image:"Nft_image__iw6Pj",text:"Nft_text__DgMz6"}}},function(e){e.O(0,[774,888,179],(function(){return t=1937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);