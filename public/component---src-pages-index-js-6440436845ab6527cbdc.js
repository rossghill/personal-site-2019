(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7EFO":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("XEEL")),s=r(a("v06X")),o=r(a("uDP2")),l=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),t.concat(a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(k,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&b&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,I=e.loading,N=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:L?1:0,transition:R?"opacity "+b+"ms":"none"},o),O="boolean"==typeof m?"lightgray":m,P={transitionDelay:b+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&P,o,f),V={title:t,alt:this.state.isVisible?"":a,style:C,className:p};if(g){var W=g,T=W[0];return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),O&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&P)}),T.base64&&c.default.createElement(A,{src:T.base64,spreadProps:V,imageVariants:W,generateSources:w}),T.tracedSVG&&c.default.createElement(A,{src:T.tracedSVG,spreadProps:V,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(W),c.default.createElement(k,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:I},T,{imageVariants:W}))}}))}if(h){var _=h,j=_[0],B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete B.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},O&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:O,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},R&&P)}),j.base64&&c.default.createElement(A,{src:j.base64,spreadProps:V,imageVariants:_,generateSources:w}),j.tracedSVG&&c.default.createElement(A,{src:j.tracedSVG,spreadProps:V,imageVariants:_,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(_),c.default.createElement(k,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:I},j,{imageVariants:_}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});L.propTypes={resolutions:R,sizes:x,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var O=L;t.default=O},"EU/P":function(e,t,a){var r=a("P8UN"),i=a("ap2Z"),n=a("96qb"),s=a("+VNo"),o="["+s+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(e,t,a){var i={},o=n((function(){return!!s[e]()||"​"!="​"[e]()})),l=i[e]=o?t(u):s[e];a&&(i[a]=l),r(r.P+r.F*o,"String",i)},u=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return o}));var r=a("q1tI"),i=a.n(r);a("YBKJ"),a("+ZDr"),a("lw3w"),a("emEt").default.enqueue,i.a.createContext({});a("YfHx"),a("9eSz");var n=a("Bl7J"),s=a("vrFN"),o=(a("7EFO"),t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Ross Hill portfolio"}),i.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"}),i.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:"..images/favicon.png"}),i.a.createElement("svg",{viewBox:"0 0 48 18"},i.a.createElement("text",{x:"0",y:"15",fill:"#232924"},"Ross Hill")),i.a.createElement("div",{class:"intro"},i.a.createElement("p",null,"Hi, I'm Ross. I'm a web developer based in Edinburgh, UK."),i.a.createElement("p",null,"I build and maintain sites using Drupal, Wordpress and Shopify using my skills in HTML, CSS/Sass, Javascript, Liquid and React."),i.a.createElement("p",null,"See my work below!")),i.a.createElement("div",{class:"projects"},i.a.createElement("p",{class:"projects__title"},"Projects"),i.a.createElement("div",{class:"projects__info"},i.a.createElement("img",{src:"https://i.ibb.co/ysN90hW/etch.png",alt:"Shows a logo for Etch, a web app"}),i.a.createElement("p",null,"Etch is a simple to use web app designed to simulate a life drawing class, using high-resolution photos from Unsplash"),i.a.createElement("p",null,i.a.createElement("a",{target:"_blank",href:"https://rossghill.github.io/Etch/",rel:"noreferrer"},"Try it out here"))),i.a.createElement("div",{class:"projects__info"},i.a.createElement("a",{target:"_blank",href:"https://raspylines.myshopify.com/",rel:"noreferrer"},i.a.createElement("img",{src:"https://i.ibb.co/y4gCPH8/shop.png",alt:"Represents Raspylines, an online store"})),i.a.createElement("p",null,"Personal online art store, built using Shopify/ SCSS and modified Liquid templates"),i.a.createElement("p",null,i.a.createElement("a",{target:"_blank",href:"https://raspylines.myshopify.com/",rel:"noreferrer"},"See it here")))),i.a.createElement("div",{class:"type1"},i.a.createElement("div",{class:"social-row"},i.a.createElement("a",{class:"coral-icon",target:"_blank",rel:"noreferrer",href:"https://github.com/rossghill"},i.a.createElement("i",{class:"icon-social-github icons"})),i.a.createElement("a",{class:"coral-icon",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/rossghill/"},i.a.createElement("i",{class:"icon-social-linkedin icons"}))),i.a.createElement("div",{class:"social-row"},i.a.createElement("a",{class:"coral-icon",target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/raspylines/"},i.a.createElement("i",{class:"icon-social-instagram icons"})),i.a.createElement("a",{class:"coral-icon",target:"_blank",rel:"noreferrer",href:"https://twitter.com/ross_edin"},i.a.createElement("i",{class:"icon-social-twitter icons"})))))},"542447038")},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),l=a("yde8"),c=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=c(5),p=c(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var c=e((function(e,r){o(e,c,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(c.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},YBKJ:function(e,t,a){"use strict";var r=a("emib"),i=a("qDzq"),n=a("CCE/"),s=a("TUPI"),o=a("kxs/"),l=a("96qb"),c=a("chL8").f,d=a("Drra").f,u=a("rjfK").f,f=a("EU/P").trim,p=r.Number,g=p,h=p.prototype,m="Number"==n(a("nsRs")(h)),b="trim"in String.prototype,E=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,r,i,n=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,d=l.length;c<d;c++)if((s=l.charCodeAt(c))<48||s>i)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(m?l((function(){h.valueOf.call(a)})):"Number"!=n(a))?s(new g(E(t)),a,p):E(t)};for(var y,v=a("QPJK")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;v.length>S;S++)i(g,y=v[S])&&!i(p,y)&&u(p,y,d(g,y));p.prototype=h,h.constructor=p,a("IYdN")(r,"Number",p)}},YfHx:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACyklEQVQ4y7VUbU8TQRC+H2xCNCQKGP3iB5QQfIHERBEQQUAaDBgUoQUVWgpCKDSKpaVQgbZwfb/jXvaujzt7d/UKxPhBL5nM7Ozcs/PszoykawY0TRdCtrcmfa5y/zm39Wa/E2804p1YTWiJMQuMMZC2XPHWpmFyYbAsz98sfp+hm0JLzGQwXSGbwDybggzDCfTHNcW7NmVHWhKbIhOzEUR2A1D/MyAxaAK0bBuWXee0bNiAELI9GiRXUjadq7Dr9WbKek2FVq6BtCqXoRYq0PkFi5PpnugH071TLyPOgBIhf02uCk0ZkpbUsxLiD0ex1TmIs50kEmPz2Hk+A/qquSKOot+F7YHUuU1SODzFp8fvsTayLPaZ5WQt0YmxzgGEW7pxzrNT+AGJwCLKmTzC94ax+XQGBj+dqNXkCvI/jqCUaigdF/C29RWiw19Q5Vnm9/Puo/Dg7a4hrLX3IRkI4eDDqrjHfCyJhWuPsD30Uayz22mkP8ex3j+PxftTAnD2zgSWn4UQebmMQHsAJ7tZF/ABB2zrxcFsGJnguqBQ+XmK0PU+xEeDYr3SHcDudBQ6L/S1F0GUT4qYaX+NzTerSEWTmGgdRzK6zx+FA8Y4YORGj6BLr3W4uIFiOotgyxPEBudEhuGeKczdHED2Wwa1Yg3FIxnTbaPYGI8gubonAFPrBFhVHMq3eiHTo4wvYKs3IO4t2jWGpY5+HH9NILuTRujuCOY6hpFaigvK726PYWMigr2VBCbbJnmGKadslKwMJVcQUsnkePlURLmoxSoKqWNoVVW8rFKoQk7z/ZICTdFQyZVE2YiMT0r8sVSnl+lnUdxcEz3Gy8PrBmfPbpSNv/Btd4/WJnMKXWK+1mOXWs8Q4nWHV9RNrXexly8PB+vvh4PP3+gUz+kfYQ1gN3Oi4h9zjmZNvf17fF0IuAzIfID/ex6yK+bhvwb8BRUk42yIkTbzAAAAAElFTkSuQmCC","aspectRatio":0.9920634920634921,"src":"/static/929868fc9f42b0aa5089dd765db3862e/fdbb0/etch.png","srcSet":"/static/929868fc9f42b0aa5089dd765db3862e/e22c9/etch.png 75w,\\n/static/929868fc9f42b0aa5089dd765db3862e/d3809/etch.png 150w,\\n/static/929868fc9f42b0aa5089dd765db3862e/fdbb0/etch.png 300w,\\n/static/929868fc9f42b0aa5089dd765db3862e/b5207/etch.png 450w,\\n/static/929868fc9f42b0aa5089dd765db3862e/3fa08/etch.png 500w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),l=a("k5Iv"),c=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),p=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,m=c.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(d(e)){var t=g(e);return!0===t?m(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",b,E,c,!0,!0);f&&p&&(l((r=c.getConstructor(b,"WeakMap")).prototype,E),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(d(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-6440436845ab6527cbdc.js.map