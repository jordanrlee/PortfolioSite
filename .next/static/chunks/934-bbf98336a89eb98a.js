(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),i=r(1757),l=i._(r(7294)),o=n._(r(2636)),a=r(7757),s=r(3735),u=r(3341);r(4210);let d=n._(r(7746)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,n,i,l,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&l(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=l.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,l.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:o,className:a,imgStyle:s,blurStyle:u,isLazy:d,fetchPriority:c,fill:f,placeholder:p,loading:g,srcString:b,config:y,unoptimized:_,loader:v,onLoadRef:w,onLoadingCompleteRef:E,setBlurComplete:O,setShowAltText:j,onLoad:C,onError:x,...P}=e;return g=d?"lazy":g,l.default.createElement("img",{...P,...m(c),loading:g,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:a,style:{...s,...u},...r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&h(e,b,p,w,E,O,_))},[b,p,w,E,O,x,_,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,p,w,E,O,_)},onError:e=>{j(!0),"blur"===p&&O(!0),x&&x(e)}})}),b=(0,l.forwardRef)((e,t)=>{var r;let n,i,{src:h,sizes:b,unoptimized:y=!1,priority:_=!1,loading:v,className:w,quality:E,width:O,height:j,fill:C,style:x,onLoad:P,onLoadingComplete:S,placeholder:k="empty",blurDataURL:z,fetchPriority:M,layout:R,objectFit:N,objectPosition:A,lazyBoundary:I,lazyRoot:D,...T}=e,F=(0,l.useContext)(u.ImageConfigContext),V=(0,l.useMemo)(()=>{let e=c||F||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[F]),G=T.loader||d.default;delete T.loader;let L="__next_img_default"in G;if(L){if("custom"===V.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!b&&(b=t)}let W="",B=p(O),Y=p(j);if("object"==typeof(r=h)&&(f(r)||void 0!==r.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,z=z||e.blurDataURL,W=e.src,!C){if(B||Y){if(B&&!Y){let t=B/e.width;Y=Math.round(e.height*t)}else if(!B&&Y){let t=Y/e.height;B=Math.round(e.width*t)}}else B=e.width,Y=e.height}}let q=!_&&("lazy"===v||void 0===v);(!(h="string"==typeof h?h:W)||h.startsWith("data:")||h.startsWith("blob:"))&&(y=!0,q=!1),V.unoptimized&&(y=!0),L&&h.endsWith(".svg")&&!V.dangerouslyAllowSVG&&(y=!0),_&&(M="high");let[H,J]=(0,l.useState)(!1),[U,X]=(0,l.useState)(!1),$=p(E),K=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},U?{}:{color:"transparent"},x),Q="blur"===k&&z&&!H?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:B,heightInt:Y,blurWidth:n,blurHeight:i,blurDataURL:z,objectFit:K.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:l,sizes:o,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:l,kind:"x"}}(t,i,o),d=s.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:l,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:l,width:s[d]})}}({config:V,src:h,unoptimized:y,width:B,quality:$,sizes:b,loader:G}),ee=h,et=(0,l.useRef)(P);(0,l.useEffect)(()=>{et.current=P},[P]);let er=(0,l.useRef)(S);(0,l.useEffect)(()=>{er.current=S},[S]);let en={isLazy:q,imgAttributes:Z,heightInt:Y,widthInt:B,qualityInt:$,className:w,imgStyle:K,blurStyle:Q,loading:v,config:V,fetchPriority:M,fill:C,unoptimized:y,placeholder:k,loader:G,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:X,...T};return l.default.createElement(l.default.Fragment,null,l.default.createElement(g,{...en,ref:t}),_?l.default.createElement(o.default,null,l.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:T.crossOrigin,...m(M)})):null)}),y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return o},default:function(){return a}});let n=r(8754),i=(r(7294),n._(r(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let r=i.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let a=n.loader,s=()=>null!=a?a().then(l):Promise.resolve(l(()=>null));return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:s}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:l,objectFit:o}=e,a=n||t,s=i||r,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let n=r(8754),i=n._(r(7294)),l=i.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(8754),i=n._(r(7294)),l=r(2254),o=[],a=[],s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){let t=new d(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return o()})}function u(e,t){!function(){o();let e=i.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=i.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),i.default.useMemo(()=>{var t;return a.loading||a.error?i.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?i.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return u.preload=()=>o(),u.displayName="LoadableComponent",i.default.forwardRef(u)}(u,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(s=!0,t());f(a,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let p=c},5152:function(e,t,r){r(5677)},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function s(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,i=e.attr,l=e.size,s=e.title,u=a(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(i)}}}]);