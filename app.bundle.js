!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html, body {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  background-color: #343D46;\n}\n\n* {\n  box-sizing: border-box;\n}\n.items {\n  width: 1240px;\n  height: 460px;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  overflow: hidden;\n  justify-content: space-between;\n  align-items: center;\n  user-select: none;\n  transition: .5s;\n}\n\n.active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: 400px;\n  border-radius: 10px;\n  margin: 10px 30px 10px 30px;\n  padding: 15px;\n  box-sizing: border-box;\n  position: relative;\n  font-family: serif;\n  background-color: #F8CFCF;\n  transition: .3s;\n}\n\n.item:hover {\n  transform: scale(1.1);\n  border-radius: 10px;\n  background-color: #F7C3BC;\n}\n\n.item-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  font-family: sans-serif;\n}\n\n.item-center-left {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-icon {\n  width: 15px;\n  height: 15px;\n  margin: 5px 0;\n}\n\n.item-content {\n  margin: 8px 0 6px 20px;\n  font-size: 14px;\n  width: 150px;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-content:hover {\n  overflow: visible;\n}\n\n.item-title {\n  position: absolute;\n  left: 0;\n  top: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  color: #fff;\n  background-color: #D85AAC;\n  text-decoration: none;\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.item-title:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-top: 5px solid #FBF152;\n  border-bottom: 5px solid #FBF152;\n  transform: scaleX(0);\n  transition: .3s;\n}\n\n.item:hover .item-title:before {\n  transform: scale(1);\n}\n\n.item-title:hover {\n  text-decoration: underline;\n}\n\n.item-image {\n  width: 100%;\n  height: 150px;\n}\n\n.item-discription {\n  width: 220px;\n  height: 100px;\n  text-align: justify;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  font-style: italic;\n}\n\n@media only screen and (max-width: 1240px) {\n  .items {\n    width: 930px;\n  }\n}\n\n@media only screen and (max-width: 930px) {\n  .items {\n    width: 620px;\n  }\n}\n\n@media only screen and (max-width: 620px) {\n  .items {\n    width: 310px;\n  }\n}\n\n.nav-buttons {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.radioInput {\n  display: none;\n}\n\n\n.label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border: 2px solid #FBE0E4;\n  border-radius: 50%;\n  margin: 0 5px;\n  background-color: #fff;\n  font-weight: 700;\n\n}\n\n.radioButton .radioInput:checked ~ .label {\n  border: 2px solid #D85AAC;\n}\n\n.search-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 20px 10px 30px;\n}\n\n.search {\n  max-width: 400px;\n  width: 100%;\n  height: 30px;\n  border-radius: 5px;\n  padding-left: 50px;\n  border: none;\n}\n\n.search:enabled {\n  outline: none;\n}\n\n.search-container {\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n}\n\n.search-icon {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 15px;\n  top: 5px;\n}\n\n.label-current {\n  background-color: #D85AAC;\n  border: 2px solid #FBE0E4;\n}\n\n.label-next_tooltip {\n  display: inline-block;\n  position: relative;\n }\n .label-next_tooltip:after {\n  content: attr(data-title);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: -10px; right: 0; bottom: 40px;\n  border-radius: 10%;\n  z-index: 1;\n  background: #FDFDE6;\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n }\n\n .label-prev_tooltip {\n  display: inline-block;\n  position: relative;\n }\n .label-prev_tooltip:after {\n  content: attr(data-title);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: -10px; right: 0; bottom: 40px;\n  border-radius: 10%;\n  z-index: 1;\n  background: #FDFDE6;\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n }\n\n .label-prevPrev_tooltip {\n  display: inline-block;\n  position: relative;\n }\n .label-prevPrev_tooltip:after {\n  content: attr(data-title);\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: -10px; right: 0; bottom: 40px;\n  border-radius: 10%;\n  z-index: 1;\n  background: #FDFDE6;\n  color: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 5px 10px;\n  border: 1px solid #333;\n }\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),l=null,c=0,d=[],p=n(4);function u(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(b(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function x(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=c++;n=l||(l=x(e)),i=y.bind(null,n,a,!1),r=y.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=p(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=x(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var a=n[r];(s=o[a.id]).refs--,i.push(s)}t&&u(f(t,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);class i{constructor(t){this.state=t}static extractClipNames(t){return t.items.map(t=>t.snippet.title)}async getClipNames(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipNames(n)}static extractClipDescription(t){return t.items.map(t=>t.snippet.description)}async getClipDescription(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipDescription(n)}static extractClipChannelTitle(t){return t.items.map(t=>t.snippet.channelTitle)}async getClipChannelTitle(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipChannelTitle(n)}static extractClipUrlImage(t){return t.items.map(t=>t.snippet.thumbnails.medium.url)}async getClipUrlImage(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipUrlImage(n)}static extractClipPublishedAt(t){return t.items.map(t=>t.snippet.publishedAt)}async getClipPublishedAt(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipPublishedAt(n)}static extractId(t){return t.items.map(t=>t.id.videoId)}async getId(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractId(n)}static extractViewCount(t){return t.items.map(t=>t.statistics.viewCount)}async getViewCount(){const{url:t}=this.state,e=await fetch(t),n=await e.json(),r=`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${i.extractId(n).join(",")}&part=snippet,statistics`,o=await fetch(r),a=await o.json();return i.extractViewCount(a)}static extractClipNextPage(t){return t.nextPageToken}async getClipNextPage(){const{url:t}=this.state,e=await fetch(t),n=await e.json();return i.extractClipNextPage(n)}}n(0);var r=class{constructor(t,e,n,i,r,o,a,s){this.titles=t,this.discription=e,this.channelTitle=n,this.urlImage=i,this.publishedAt=r,this.viewCount=o,this.id=a,this.nextPage=s}render(){const t=document.querySelector("ul");this.titles.forEach((e,n)=>{const i=document.createElement("li");i.classList.add("item"),i.innerHTML=`\n      <img src="${this.urlImage[n]}" alt="YouTube" class="item-image">\n      <a href="https://www.youtube.com/watch?v=${this.id[n]}" class="item-title">${e}</a>\n      <div class="item-center">\n        <div class="item-center-left">\n          <img src="./image/author.svg" class="item-icon">\n          <img src="./image/calendar.svg" class="item-icon">\n          <img src="./image/eye.svg" class="item-icon">\n        </div>\n        <div class="item-center-right">\n          <div class="item-content">${this.channelTitle[n]}</div>\n          <div class="item-content">${this.publishedAt[n].slice(0,10)}</div>\n          <div class="item-content">${this.viewCount[n]}</div>\n        </div>\n      </div>\n      <p class="item-discription">${this.discription[n]}</p>\n      `,t.appendChild(i)})}};class o{constructor(t){this.state={url:`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=${t}`}}async start(){const t=new i(this.state),e=await t.getClipNames(),n=await t.getClipDescription(),o=await t.getClipChannelTitle(),a=await t.getClipUrlImage(),s=await t.getClipPublishedAt(),l=await t.getViewCount(),c=await t.getId(),d=await t.getClipNextPage();new r(e,n,o,a,s,l,c,d).render()}async startNextPage(){const t=new i(this.state),e=await t.getClipNextPage();if(-1===this.state.url.indexOf("pageToken")){this.state.url=`${this.state.url}&pageToken=${e}`;const t=new i(this.state),n=await t.getClipNames(),o=await t.getClipDescription(),a=await t.getClipChannelTitle(),s=await t.getClipUrlImage(),l=await t.getClipPublishedAt(),c=await t.getViewCount(),d=await t.getId();new r(n,o,a,s,l,c,d,e).render()}else{this.state.url=this.state.url.slice(0,-17),this.state.url=`${this.state.url}&pageToken=${e}`;const t=new i(this.state),n=await t.getClipNames(),o=await t.getClipDescription(),a=await t.getClipChannelTitle(),s=await t.getClipUrlImage(),l=await t.getClipPublishedAt(),c=await t.getViewCount(),d=await t.getId();new r(n,o,a,s,l,c,d,e).render()}}}const a=document.createElement("div");a.classList.add("search-wrap"),a.innerHTML='\n  <div class="search-container">\n    <img src="./image/loupe.svg" class="search-icon">\n    <input type="text" class="search" placeholder="Enter the request and press enter">\n  </div>\n',document.body.appendChild(a);const s=document.querySelector(".search");s.addEventListener("keyup",t=>{if(13===t.keyCode){document.querySelector("ul")&&document.querySelector(".nav-buttons")&&(document.querySelector("ul").parentNode.removeChild(document.querySelector("ul")),document.querySelector(".nav-buttons").parentNode.removeChild(document.querySelector(".nav-buttons")));const t=s.value,e=new o(t);e.start();const n=document.createElement("ul");n.classList.add("items"),document.body.appendChild(n);const i=document.createElement("div");i.classList.add("nav-buttons"),i.innerHTML='\n      <div class="radioButton">\n        <input type="radio" id="preprev" class="radioInput" name="nav">\n        <label for="preprev" class="label label-prevPrev" data-title=""></label>\n      </div>\n      <div class="radioButton">\n        <input type="radio" id="prev" class="radioInput" name="nav">\n        <label for="prev" class="label label-prev" data-title=""></label>\n      </div>\n      <div class="radioButton">\n        <input type="radio" id="current" class="radioInput" name="nav" checked>\n        <label for="current" class="label label-current"></label>\n      </div>\n      <div class="radioButton">\n        <input type="radio" id="next" class="radioInput" name="nav">\n        <label for="next" class="label label-next" data-title=""></label>\n      </div>\n    ',document.body.appendChild(i);const r=document.querySelector(".items"),a=document.querySelector(".label-current"),l=document.body.clientWidth,c=document.querySelector(".label-next"),d=document.querySelector(".label-prevPrev"),p=document.querySelector(".label-prev");let u,f,h,m,x=1,v=!1;x=1,a.textContent=x,window.addEventListener("resize",()=>{const t=document.body.clientWidth;l-t>0&&x>=1&&(t>1240?(m=x,a.textContent=x):t<=1240&&t>930?(m=Math.floor(4*x/3),a.textContent=m):t<=930&&t>620?(m=Math.floor(4*x/2),a.textContent=m):t<=620&&(m=Math.floor(4*x/1),a.textContent=m)),l-t<=0&&x>1&&(t>1240?a.textContent=x:t<=1240&&t>930?(m=Math.floor(x/3),a.textContent=m):t<=930&&t>620?(m=Math.floor(x/2),a.textContent=m):t<=620&&(x=m,a.textContent=x))}),r.addEventListener("pointerdown",t=>{v=!0,r.classList.add("active"),u=t.pageX-r.offsetLeft,f=r.scrollLeft}),r.addEventListener("pointerup",()=>{v=!1,r.classList.remove("active"),h>0?(r.scroll({left:f-r.clientWidth,behavior:"smooth"}),(x=parseInt(a.textContent,10))>1?(x-=1,a.textContent=x):a.textContent=1):h<0&&(r.scroll({left:f+r.clientWidth,behavior:"smooth"}),r.scrollWidth-r.scrollLeft<=2*r.clientWidth+50&&e.startNextPage(),x=parseInt(a.textContent,10),x+=1,a.textContent=x)}),r.addEventListener("pointermove",t=>{if(!v)return;t.preventDefault();const e=t.pageX-r.offsetLeft;h=e-u}),c.addEventListener("pointerdown",()=>{c.classList.add("label-next_tooltip"),x=parseInt(a.textContent,10),c.setAttribute("data-title",`${x+1}`),v=!0,u=r.pageX-r.offsetLeft,f=r.scrollLeft}),c.addEventListener("pointerup",()=>{v=!1,c.classList.remove("label-next_tooltip"),r.scrollWidth-r.scrollLeft<=2*r.clientWidth+50&&e.startNextPage(),x=parseInt(a.textContent,10),x+=1,a.textContent=x,r.scroll({left:r.clientWidth+f,behavior:"smooth"})}),p.addEventListener("pointerdown",()=>{p.classList.add("label-prev_tooltip"),(x=parseInt(a.textContent,10))>2?p.setAttribute("data-title",`${x-1}`):p.setAttribute("data-title","1"),v=!0,u=r.pageX-r.offsetLeft,f=r.scrollLeft}),p.addEventListener("pointerup",()=>{v=!1,p.classList.remove("label-prev_tooltip"),r.scroll({left:f-r.clientWidth,behavior:"smooth"}),(x=parseInt(a.textContent,10))>2?(x-=1,a.textContent=x):a.textContent=1}),d.addEventListener("pointerdown",()=>{d.classList.add("label-prevPrev_tooltip"),(x=parseInt(a.textContent,10))>=3?d.setAttribute("data-title",`${x-2}`):d.setAttribute("data-title","1"),v=!0,u=r.pageX-r.offsetLeft,f=r.scrollLeft}),d.addEventListener("pointerup",()=>{v=!1,d.classList.remove("label-prevPrev_tooltip"),r.scroll({left:f-2*r.clientWidth,behavior:"smooth"}),(x=parseInt(a.textContent,10))>=3?(x-=2,a.textContent=x):a.textContent=1})}})}]);
//# sourceMappingURL=app.bundle.js.map