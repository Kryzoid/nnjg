"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84738],{2603:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(1413),r=a(67294);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};var l=a(30076),o=function(e,t){return r.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:c}))};o.displayName="LockOutlined";const i=r.forwardRef(o)},98453:(e,t,a)=>{a.d(t,{C:()=>k});var n=a(87462),r=a(4942),c=a(71002),l=a(29439),o=a(67294),i=a(94184),s=a.n(i),m=a(48717),u=a(42550),f=a(65632),v=a(21687),p=a(24308),d=a(25378),g=o.createContext("default"),y=function(e){var t=e.children,a=e.size;return o.createElement(g.Consumer,null,(function(e){return o.createElement(g.Provider,{value:a||e},t)}))};const h=g;var E=function(e,t){var a,i,g=o.useContext(h),y=o.useState(1),E=(0,l.Z)(y,2),Z=E[0],x=E[1],C=o.useState(!1),N=(0,l.Z)(C,2),b=N[0],O=N[1],w=o.useState(!0),P=(0,l.Z)(w,2),S=P[0],z=P[1],k=o.useRef(),j=o.useRef(),M=(0,u.sQ)(t,k),q=o.useContext(f.E_).getPrefixCls,I=function(){if(j.current&&k.current){var t=j.current.offsetWidth,a=k.current.offsetWidth;if(0!==t&&0!==a){var n=e.gap,r=void 0===n?4:n;2*r<a&&x(a-2*r<t?(a-2*r)/t:1)}}};o.useEffect((function(){O(!0)}),[]),o.useEffect((function(){z(!0),x(1)}),[e.src]),o.useEffect((function(){I()}),[e.gap]);var H=e.prefixCls,L=e.shape,R=e.size,_=e.src,A=e.srcSet,T=e.icon,V=e.className,W=e.alt,B=e.draggable,D=e.children,K=e.crossOrigin,F=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),G="default"===R?g:R,J=(0,d.Z)(),Q=o.useMemo((function(){if("object"!==(0,c.Z)(G))return{};var e=p.c4.find((function(e){return J[e]})),t=G[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:T?t/2:18}:{}}),[J,G]);(0,v.Z)(!("string"==typeof T&&T.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(T,"` at https://ant.design/components/icon"));var X,U=q("avatar",H),Y=s()((a={},(0,r.Z)(a,"".concat(U,"-lg"),"large"===G),(0,r.Z)(a,"".concat(U,"-sm"),"small"===G),a)),$=o.isValidElement(_),ee=s()(U,Y,(i={},(0,r.Z)(i,"".concat(U,"-").concat(L),!!L),(0,r.Z)(i,"".concat(U,"-image"),$||_&&S),(0,r.Z)(i,"".concat(U,"-icon"),!!T),i),V),te="number"==typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:T?G/2:18}:{};if("string"==typeof _&&S)X=o.createElement("img",{src:_,draggable:B,srcSet:A,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:W,crossOrigin:K});else if($)X=_;else if(T)X=T;else if(b||1!==Z){var ae="scale(".concat(Z,") translateX(-50%)"),ne={msTransform:ae,WebkitTransform:ae,transform:ae},re="number"==typeof G?{lineHeight:"".concat(G,"px")}:{};X=o.createElement(m.Z,{onResize:I},o.createElement("span",{className:"".concat(U,"-string"),ref:function(e){j.current=e},style:(0,n.Z)((0,n.Z)({},re),ne)},D))}else X=o.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){j.current=e}},D);return delete F.onError,delete F.gap,o.createElement("span",(0,n.Z)({},F,{style:(0,n.Z)((0,n.Z)((0,n.Z)({},te),Q),F.style),className:ee,ref:M}),X)},Z=o.forwardRef(E);Z.displayName="Avatar",Z.defaultProps={shape:"circle",size:"default"};const x=Z;var C=a(50344),N=a(96159),b=a(69713),O=function(e){return e?"function"==typeof e?e():e:null},w=a(33603),P=o.forwardRef((function(e,t){var a=e.prefixCls,r=e.title,c=e.content,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["prefixCls","title","content"]),i=o.useContext(f.E_).getPrefixCls,s=i("popover",a),m=i();return o.createElement(b.Z,(0,n.Z)({},l,{prefixCls:s,ref:t,overlay:function(e){return o.createElement(o.Fragment,null,r&&o.createElement("div",{className:"".concat(e,"-title")},O(r)),o.createElement("div",{className:"".concat(e,"-inner-content")},O(c)))}(s),transitionName:(0,w.m)(m,"zoom-big",l.transitionName)}))}));P.displayName="Popover",P.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};const S=P;var z=x;z.Group=function(e){var t=o.useContext(f.E_),a=t.getPrefixCls,n=t.direction,c=e.prefixCls,l=e.className,i=void 0===l?"":l,m=e.maxCount,u=e.maxStyle,v=e.size,p=a("avatar-group",c),d=s()(p,(0,r.Z)({},"".concat(p,"-rtl"),"rtl"===n),i),g=e.children,h=e.maxPopoverPlacement,E=void 0===h?"top":h,Z=(0,C.Z)(g).map((function(e,t){return(0,N.Tm)(e,{key:"avatar-key-".concat(t)})})),b=Z.length;if(m&&m<b){var O=Z.slice(0,m),w=Z.slice(m,b);return O.push(o.createElement(S,{key:"avatar-popover-key",content:w,trigger:"hover",placement:E,overlayClassName:"".concat(p,"-popover")},o.createElement(x,{style:u},"+".concat(b-m)))),o.createElement(y,{size:v},o.createElement("div",{className:d,style:e.style},O))}return o.createElement(y,{size:v},o.createElement("div",{className:d,style:e.style},Z))};const k=z},31990:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),r=a(4942),c=a(67294),l=a(94184),o=a.n(l),i=a(65632);const s=function(e){var t=e.actions,a=e.author,l=e.avatar,s=e.children,m=e.className,u=e.content,f=e.prefixCls,v=e.datetime,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["actions","author","avatar","children","className","content","prefixCls","datetime"]),d=c.useContext(i.E_),g=d.getPrefixCls,y=d.direction,h=g("comment",f),E=l?c.createElement("div",{className:"".concat(h,"-avatar")},"string"==typeof l?c.createElement("img",{src:l,alt:"comment-avatar"}):l):null,Z=t&&t.length?c.createElement("ul",{className:"".concat(h,"-actions")},t.map((function(e,t){return c.createElement("li",{key:"action-".concat(t)},e)}))):null,x=(a||v)&&c.createElement("div",{className:"".concat(h,"-content-author")},a&&c.createElement("span",{className:"".concat(h,"-content-author-name")},a),v&&c.createElement("span",{className:"".concat(h,"-content-author-time")},v)),C=c.createElement("div",{className:"".concat(h,"-content")},x,c.createElement("div",{className:"".concat(h,"-content-detail")},u),Z),N=o()(h,(0,r.Z)({},"".concat(h,"-rtl"),"rtl"===y),m);return c.createElement("div",(0,n.Z)({},p,{className:N}),c.createElement("div",{className:"".concat(h,"-inner")},E,C),s?function(e,t){return c.createElement("div",{className:o()("".concat(e,"-nested"))},t)}(h,s):null)}},38272:(e,t,a)=>{a.d(t,{ZM:()=>C,ZP:()=>b});var n=a(93433),r=a(87462),c=a(4942),l=a(29439),o=a(71002),i=a(67294),s=a(94184),m=a.n(s),u=a(11382),f=a(25378),v=a(24308),p=a(65632),d=a(18150),g=a(92820),y=a(21584),h=a(96159),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},Z=function(e){var t,a=e.prefixCls,n=e.children,l=e.actions,o=e.extra,s=e.className,u=e.colStyle,f=E(e,["prefixCls","children","actions","extra","className","colStyle"]),v=i.useContext(C),d=v.grid,g=v.itemLayout,Z=(0,i.useContext(p.E_).getPrefixCls)("list",a),x=l&&l.length>0&&i.createElement("ul",{className:"".concat(Z,"-item-action"),key:"actions"},l.map((function(e,t){return i.createElement("li",{key:"".concat(Z,"-item-action-").concat(t)},e,t!==l.length-1&&i.createElement("em",{className:"".concat(Z,"-item-action-split")}))}))),N=d?"div":"li",b=i.createElement(N,(0,r.Z)({},f,{className:m()("".concat(Z,"-item"),(0,c.Z)({},"".concat(Z,"-item-no-flex"),!("vertical"===g?o:(i.Children.forEach(n,(function(e){"string"==typeof e&&(t=!0)})),!(t&&i.Children.count(n)>1)))),s)}),"vertical"===g&&o?[i.createElement("div",{className:"".concat(Z,"-item-main"),key:"content"},n,x),i.createElement("div",{className:"".concat(Z,"-item-extra"),key:"extra"},o)]:[n,x,(0,h.Tm)(o,{key:"extra"})]);return d?i.createElement(y.Z,{flex:1,style:u},b):b};Z.Meta=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,c=e.title,l=e.description,o=E(e,["prefixCls","className","avatar","title","description"]),s=(0,i.useContext(p.E_).getPrefixCls)("list",t),u=m()("".concat(s,"-item-meta"),a),f=i.createElement("div",{className:"".concat(s,"-item-meta-content")},c&&i.createElement("h4",{className:"".concat(s,"-item-meta-title")},c),l&&i.createElement("div",{className:"".concat(s,"-item-meta-description")},l));return i.createElement("div",(0,r.Z)({},o,{className:u}),n&&i.createElement("div",{className:"".concat(s,"-item-meta-avatar")},n),(c||l)&&f)};const x=Z;var C=i.createContext({});function N(e){var t,a=e.pagination,s=void 0!==a&&a,y=e.prefixCls,h=e.bordered,E=void 0!==h&&h,Z=e.split,x=void 0===Z||Z,N=e.className,b=e.children,O=e.itemLayout,w=e.loadMore,P=e.grid,S=e.dataSource,z=void 0===S?[]:S,k=e.size,j=e.header,M=e.footer,q=e.loading,I=void 0!==q&&q,H=e.rowKey,L=e.renderItem,R=e.locale,_=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),A=s&&"object"===(0,o.Z)(s)?s:{},T=i.useState(A.defaultCurrent||1),V=(0,l.Z)(T,2),W=V[0],B=V[1],D=i.useState(A.defaultPageSize||10),K=(0,l.Z)(D,2),F=K[0],G=K[1],J=i.useContext(p.E_),Q=J.getPrefixCls,X=J.renderEmpty,U=J.direction,Y={},$=function(e){return function(t,a){B(t),G(a),s&&s[e]&&s[e](t,a)}},ee=$("onChange"),te=$("onShowSizeChange"),ae=Q("list",y),ne=I;"boolean"==typeof ne&&(ne={spinning:ne});var re=ne&&ne.spinning,ce="";switch(k){case"large":ce="lg";break;case"small":ce="sm"}var le=m()(ae,(t={},(0,c.Z)(t,"".concat(ae,"-vertical"),"vertical"===O),(0,c.Z)(t,"".concat(ae,"-").concat(ce),ce),(0,c.Z)(t,"".concat(ae,"-split"),x),(0,c.Z)(t,"".concat(ae,"-bordered"),E),(0,c.Z)(t,"".concat(ae,"-loading"),re),(0,c.Z)(t,"".concat(ae,"-grid"),!!P),(0,c.Z)(t,"".concat(ae,"-something-after-last-item"),!!(w||s||M)),(0,c.Z)(t,"".concat(ae,"-rtl"),"rtl"===U),t),N),oe=(0,r.Z)((0,r.Z)((0,r.Z)({},{current:1,total:0}),{total:z.length,current:W,pageSize:F}),s||{}),ie=Math.ceil(oe.total/oe.pageSize);oe.current>ie&&(oe.current=ie);var se=s?i.createElement("div",{className:"".concat(ae,"-pagination")},i.createElement(d.Z,(0,r.Z)({},oe,{onChange:ee,onShowSizeChange:te}))):null,me=(0,n.Z)(z);s&&z.length>(oe.current-1)*oe.pageSize&&(me=(0,n.Z)(z).splice((oe.current-1)*oe.pageSize,oe.pageSize));var ue=(0,f.Z)(),fe=i.useMemo((function(){for(var e=0;e<v.c4.length;e+=1){var t=v.c4[e];if(ue[t])return t}}),[ue]),ve=i.useMemo((function(){if(P){var e=fe&&P[fe]?P[fe]:P.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==P?void 0:P.column,fe]),pe=re&&i.createElement("div",{style:{minHeight:53}});if(me.length>0){var de=me.map((function(e,t){return function(e,t){return L?((a="function"==typeof H?H(e):H?e[H]:e.key)||(a="list-item-".concat(t)),Y[t]=a,L(e,t)):null;var a}(e,t)})),ge=i.Children.map(de,(function(e,t){return i.createElement("div",{key:Y[t],style:ve},e)}));pe=P?i.createElement(g.Z,{gutter:P.gutter},ge):i.createElement("ul",{className:"".concat(ae,"-items")},de)}else b||re||(pe=function(e,t){return i.createElement("div",{className:"".concat(e,"-empty-text")},R&&R.emptyText||t("List"))}(ae,X));var ye=oe.position||"bottom",he=i.useMemo((function(){return{grid:P,itemLayout:O}}),[JSON.stringify(P),O]);return i.createElement(C.Provider,{value:he},i.createElement("div",(0,r.Z)({className:le},_),("top"===ye||"both"===ye)&&se,j&&i.createElement("div",{className:"".concat(ae,"-header")},j),i.createElement(u.Z,ne,pe,b),M&&i.createElement("div",{className:"".concat(ae,"-footer")},M),w||("bottom"===ye||"both"===ye)&&se))}C.Consumer,N.Item=x;const b=N},33860:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(4942),r=a(87462),c=a(71002),l=a(67294),o=a(94184),i=a.n(o);const s=function(e){var t=e.prefixCls,a=e.className,n=e.width,c=e.style;return l.createElement("h3",{className:i()(t,a),style:(0,r.Z)({width:n},c)})};var m=a(93433);const u=function(e){var t=function(t){var a=e.width,n=e.rows,r=void 0===n?2:n;return Array.isArray(a)?a[t]:r-1===t?a:void 0},a=e.prefixCls,n=e.className,r=e.style,c=e.rows,o=(0,m.Z)(Array(c)).map((function(e,a){return l.createElement("li",{key:a,style:{width:t(a)}})}));return l.createElement("ul",{className:i()(a,n),style:r},o)};var f=a(65632);const v=function(e){var t,a,c=e.prefixCls,o=e.className,s=e.style,m=e.size,u=e.shape,f=i()((t={},(0,n.Z)(t,"".concat(c,"-lg"),"large"===m),(0,n.Z)(t,"".concat(c,"-sm"),"small"===m),t)),v=i()((a={},(0,n.Z)(a,"".concat(c,"-circle"),"circle"===u),(0,n.Z)(a,"".concat(c,"-square"),"square"===u),(0,n.Z)(a,"".concat(c,"-round"),"round"===u),a)),p="number"==typeof m?{width:m,height:m,lineHeight:"".concat(m,"px")}:{};return l.createElement("span",{className:i()(c,f,v,o),style:(0,r.Z)((0,r.Z)({},p),s)})};var p=a(98423),d=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,o=e.className,s=e.active,m=a("skeleton",c),u=(0,p.Z)(e,["prefixCls","className"]),f=i()(m,"".concat(m,"-element"),(0,n.Z)({},"".concat(m,"-active"),s),o);return l.createElement("div",{className:f},l.createElement(v,(0,r.Z)({prefixCls:"".concat(m,"-avatar")},u)))};return l.createElement(f.C,null,t)};d.defaultProps={size:"default",shape:"circle"};const g=d;var y=function(e){var t=function(t){var a,c=t.getPrefixCls,o=e.prefixCls,s=e.className,m=e.active,u=e.block,f=void 0!==u&&u,d=c("skeleton",o),g=(0,p.Z)(e,["prefixCls"]),y=i()(d,"".concat(d,"-element"),(a={},(0,n.Z)(a,"".concat(d,"-active"),m),(0,n.Z)(a,"".concat(d,"-block"),f),a),s);return l.createElement("div",{className:y},l.createElement(v,(0,r.Z)({prefixCls:"".concat(d,"-button")},g)))};return l.createElement(f.C,null,t)};y.defaultProps={size:"default"};const h=y;var E=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,o=e.className,s=e.active,m=a("skeleton",c),u=(0,p.Z)(e,["prefixCls"]),f=i()(m,"".concat(m,"-element"),(0,n.Z)({},"".concat(m,"-active"),s),o);return l.createElement("div",{className:f},l.createElement(v,(0,r.Z)({prefixCls:"".concat(m,"-input")},u)))};return l.createElement(f.C,null,t)};E.defaultProps={size:"default"};const Z=E;function x(e){return e&&"object"===(0,c.Z)(e)?e:{}}var C=function(e){var t=function(t){var a=t.getPrefixCls,c=t.direction,o=e.prefixCls,m=e.loading,f=e.className,p=e.children,d=e.avatar,g=e.title,y=e.paragraph,h=e.active,E=e.round,Z=a("skeleton",o);if(m||!("loading"in e)){var C,N,b,O=!!d,w=!!g,P=!!y;if(O){var S=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(w,P)),x(d));N=l.createElement("div",{className:"".concat(Z,"-header")},l.createElement(v,S))}if(w||P){var z,k;if(w){var j=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(O,P)),x(g));z=l.createElement(s,j)}if(P){var M=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(O,w)),x(y));k=l.createElement(u,M)}b=l.createElement("div",{className:"".concat(Z,"-content")},z,k)}var q=i()(Z,(C={},(0,n.Z)(C,"".concat(Z,"-with-avatar"),O),(0,n.Z)(C,"".concat(Z,"-active"),h),(0,n.Z)(C,"".concat(Z,"-rtl"),"rtl"===c),(0,n.Z)(C,"".concat(Z,"-round"),E),C),f);return l.createElement("div",{className:q},N,b)}return p};return l.createElement(f.C,null,t)};C.defaultProps={avatar:!1,title:!0,paragraph:!0},C.Button=h,C.Avatar=g,C.Input=Z,C.Image=function(e){var t=function(t){var a=t.getPrefixCls,n=e.prefixCls,r=e.className,c=e.style,o=a("skeleton",n),s=i()(o,"".concat(o,"-element"),r);return l.createElement("div",{className:s},l.createElement("div",{className:i()("".concat(o,"-image"),r),style:c},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(o,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(o,"-image-path")}))))};return l.createElement(f.C,null,t)};const N=C}}]);