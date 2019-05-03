(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(149),i=n(150),l=n(179),c=n.n(l),s=n(224),m=n(190),d=Object(r.default)(i.Heading.h1).attrs({px:3}).withConfig({displayName:"Name",componentId:"sc-1x6lzy0-0"})(["mix-blend-mode:screen;background-color:",";color:black;display:inline-block;clip-path:polygon(4% 0%,100% 0%,96% 100%,0% 100%);box-shadow:0 2px 4px rgba(0,0,0,0.125);"],i.theme.colors.white),u=(n(34),n(159),n(74)),p=n.n(u),h=n(172),f=Object(r.default)(h.a).withConfig({displayName:"Bio__Base",componentId:"sc-19n55kb-0"})(["display:flex;border-radius:",";max-width:36rem;img{flex-shrink:0;}"],i.theme.radii[2]),g=function(e){var t=e.img,n=e.name,a=e.teamRole,r=e.pronouns,l=e.text,c=p()(e,["img","name","teamRole","pronouns","text"]);return o.a.createElement(f,Object.assign({mb:0},c),o.a.createElement(i.Box,{mr:[2,3]},o.a.createElement(i.Avatar,{size:"64px",src:t,alt:n}),o.a.createElement(i.Text,{fontSize:1,color:"muted",align:"center",mt:-1,children:r})),o.a.createElement(i.Box,null,o.a.createElement(i.Flex,{align:"center",wrap:!0,style:{lineHeight:"1.125"}},o.a.createElement(i.Heading.h3,{fontSize:4,m:0,mr:2,color:"black",children:n}),o.a.createElement(i.Badge,{px:2,fontSize:1,bg:"primary",children:a})),o.a.createElement(i.Text,{fontSize:2,mt:1,mb:0,color:"slate",children:l})))},b=n(191),w=Object(r.default)(i.Section).withConfig({displayName:"team__Header",componentId:"sc-52d8p9-0"})(["background:linear-gradient(-64deg,",",",");background-repeat:repeat;"],i.theme.colors.orange[5],i.theme.colors.red[5]),y=Object(r.default)(i.Container).withConfig({displayName:"team__Base",componentId:"sc-52d8p9-1"})(["display:grid;grid-gap:1rem;","{grid-gap:2rem;grid-template-columns:repeat(2,1fr);}"],i.theme.mediaQueries.md),x="Ardorem Team",E="Meet the team that makes your business look and feel like a rockstar.";t.default=function(){return o.a.createElement(s.a,{bg:"snow"},o.a.createElement(c.a,{title:x,meta:[{name:"twitter:title",content:x},{name:"description",content:E},{name:"twitter:description",content:E},{property:"og:title",content:x},{property:"og:description",content:E},{property:"og:url",content:"https://ardorem.tech/team"}]}),o.a.createElement(m.a,{team:!0}),o.a.createElement(w,{color:"white"},o.a.createElement(i.Container,{maxWidth:36,align:"center",py:[3,4]},o.a.createElement(i.Heading.h1,{fontSize:[3,4],regular:!0,caps:!0,mt:6,mb:2},"Ardorem Team"),o.a.createElement(d,{fontSize:6},"We're the Innovators."),o.a.createElement(i.Text,{fontSize:3,my:3},"We believe in a world taken over by IoT and where every business should have a voice."))),o.a.createElement(y,{px:3,py:[4,5]},o.a.createElement(g,{name:"Victor Solis",teamRole:"CEO, Web/Design"}),o.a.createElement(g,{name:"Carlos Delgado",teamRole:"Marketing"})),o.a.createElement(b.a,null))}},153:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(167),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},167:function(e,t,n){var a;e.exports=(a=n(187))&&a.default||a},172:function(e,t,n){"use strict";var a=n(149),o=n(150),r=n(4),i=n.n(r),l=Object(a.default)(o.Card.withComponent(o.Container)).withConfig({displayName:"Sheet",componentId:"sc-14wb5ma-0"})(["position:relative;overflow:hidden;border-radius:",";",";"],o.theme.radii[2],function(e){return!e.flat&&Object(a.css)(["box-shadow:0 8px 32px rgba(0,0,0,0.0625);"])});l.defaultProps={bg:"rgba(255, 255, 255, 0.875)",p:[3,4],color:"black",width:1,mb:4},l.propTypes={flat:i.a.bool},t.a=l},173:function(e,t,n){"use strict";n(34);var a=n(7),o=n.n(a),r=(n(188),n(159),n(0)),i=n.n(r),l=n(150),c=n(149),s=n(172),m=Object(c.keyframes)(["0%{transform:translate(-50%,-50%) scale(0);}85%{transform:translate(-50%,-50%) scale(1.025);}100%{transform:translate(-50%,-50%) scale(1);}"]),d=Object(c.default)(s.a).attrs({bg:"white"}).withConfig({displayName:"Modal",componentId:"sc-1q1qa4f-0"})(["box-shadow:0 4px 8px rgba(0,0,0,0.0625),0 16px 32px rgba(0,0,0,0.125) !important;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1100;","{animation:"," ease-in 0.25s;}width:",";max-width:95vw;max-height:95vh;margin:0 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;> button:first-child{position:fixed;top:0;right:0;}"],l.theme.mediaQueries.md,m,function(e){return e.w||e.width||"36rem"}),u=Object(c.default)(l.Box).withConfig({displayName:"Modal__Overlay",componentId:"sc-1q1qa4f-1"})(["z-index:1024;background-color:rgba(255,255,255,0.75);backdrop-filter:blur(6px);position:fixed;top:0;left:0;width:100%;height:100%;"]),p=Object(c.default)(l.Box.withComponent("button")).attrs({role:"button",p:3}).withConfig({displayName:"Modal__ButtonReset",componentId:"sc-1q1qa4f-2"})(["appearance:none;background:transparent;border:0;border-radius:",";cursor:pointer;"],l.theme.pill),h=function(e){return i.a.createElement(p,Object.assign({"aria-label":"Close",color:"muted"},e),i.a.createElement(l.Icon,{glyph:"view-close-small",size:24}))},f=n(222),g=n.n(f),b=n(197),w=n.n(b),y=[{name:"InShape360",location:"Salt Lake City, UT",type:"Multi-Site",link:"https://inshape360.com"},{name:"Leather Menders",location:"Salt Lake City, UT",type:"Multi-Site",link:"https://leathermenders.com"},{name:"Light Weight Sites",location:"El Paso, TX",type:"Single Page",link:"https://lightweightsites.com"}],x=Object(c.default)(l.Container).attrs({}).withConfig({displayName:"GalleryModal__FlexContainer",componentId:"qmwk1x-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:20px;","{grid-template-columns:repeat(auto-fill,minmax(400px,1fr));}"],l.theme.mediaQueries.sm),E=Object(c.default)(l.BackgroundImage).withConfig({displayName:"GalleryModal__Photo",componentId:"qmwk1x-1"})(["min-height:15rem;background-size:contain;background-color:transparent;border-radius:",";","{min-height:25rem;max-height:50rem;&:hover{transform:scale(1.3);}}"],l.theme.radii[2],l.theme.mediaQueries.sm),v=Object(c.default)(l.Box.withComponent(l.Link)).attrs({mt:2,mb:2,p:2,px:[2,3,3]}).withConfig({displayName:"GalleryModal__BoxPicture",componentId:"qmwk1x-2"})(["border-radius:",";background-image:radial-gradient( ellipse farthest-corner at top left,rgb(200,211,50),rgb(400,0,20) );"],l.theme.radius),k=Object(c.default)(w.a.withComponent(l.Link)).withConfig({displayName:"GalleryModal__BadgeHover",componentId:"qmwk1x-3"})(["&:hover{transform:scale(1.1);}","{&:hover{transform:scale(1.3);}}"],l.theme.mediaQueries.sm),C=function(e){switch(g()(e.toLowerCase())){case"multi-site":return i.a.createElement(w.a,{bg:"accent"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white",children:e}));case"single-page":return i.a.createElement(w.a,{bg:"success"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white",children:e}));case"kitchen":return i.a.createElement(w.a,{bg:"primary"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white",children:e}));case"mobile-app":return i.a.createElement(w.a,{bg:"warning"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white",children:e}));case"iot":return i.a.createElement(w.a,{bg:"info"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white",children:e}))}},S=function(e){var t=e.img,n=e.name,a=e.location,o=e.type,r=e.link;return[i.a.createElement(v,null,i.a.createElement(l.Text,{fontSize:[3,3,5],bold:!0,color:"white",children:n}),i.a.createElement(l.Text,{fontSize:[3,3,5],bold:!0,color:"white",children:a}),i.a.createElement(E,{contain:!0,key:t,src:t},i.a.createElement(l.Box,{px:[3,4],mt:[3,4],pl:[null,null,128+l.theme.space[5]+l.theme.space[4]],key:n})),i.a.createElement(l.Box,{m:[2,3,3]},i.a.createElement(l.Flex,{justify:"space-between"},i.a.createElement(l.Box,null,C(o)),i.a.createElement(k,{bg:"error",href:r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(l.Text,{fontSize:[1,3,5],bold:!0,color:"white"},"Visit")))))]},O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={active:!1},t.toggle=function(){t.setState(function(e){return{active:!e.active}})},t}return o()(t,e),t.prototype.render=function(){return i.a.createElement(r.Fragment,null,this.state.active&&i.a.createElement(r.Fragment,null,i.a.createElement(d,{w:"100rem",align:"left",my:4,p:[3,4]},i.a.createElement(h,{onClick:this.toggle}),i.a.createElement(l.Heading.h2,null,"Check Out Our Work"),i.a.createElement(x,null,y.map(function(e){var t=g()(e.name.toLowerCase());return console.log(t),i.a.createElement(S,Object.assign({},e,{img:"/gallery/"+t+".jpg",key:t}))}))),i.a.createElement(u,{onClick:this.toggle})),i.a.createElement(l.Button,Object.assign({},this.props,{onClick:this.toggle}),"DEMO WEBSITES"))},t}(r.Component);t.a=O},187:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},189:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(150);t.a=function(e){var t=e.color;return o.a.createElement("style",{children:"body{background:"+Object(r.cx)(t)+";}"})}},190:function(e,t,n){"use strict";var a=n(74),o=n.n(a),r=n(7),i=n.n(r),l=(n(34),n(159),n(220),n(0)),c=n.n(l),s=n(4),m=n.n(s),d=n(149),u=n(150),p=n(153),h=Object(d.default)(p.a).withConfig({displayName:"Flag",componentId:"ae7n4r-0"})(["background:url(/Ardorem_Sun.svg) no-repeat;background-size:contain;background-position:center;flex-shrink:0;width:78px;margin:10px;height:48px;transform:scale(1);transition:"," transform;transform-origin:center;","{transform:scale(1);width:100px;height:140px;}",";"],u.theme.transition,u.theme.mediaQueries.md,function(e){return e.scrolled&&Object(d.css)(["transform:scale(.75);height:44px !important;","{height:78px !important;}"],u.theme.mediaQueries.md)});h.defaultProps={to:"/","aria-label":"Homepage"};var f=h,g=n(221),b=n.n(g),w=(n(173),function(e,t){return"rgba(\n    "+e.bgColor[0]+",\n    "+e.bgColor[1]+",\n    "+e.bgColor[2]+",\n    "+t+"\n  )"}),y=Object(d.default)(u.Box.withComponent("header")).withConfig({displayName:"Nav__Root",componentId:"sc-1vzc2c1-0"})(["position:absolute;top:0;width:100%;z-index:1000;"," @media print{display:none;}"],function(e){return(e.scrolled||e.toggled||e.fixed)&&Object(d.css)(["position:fixed;background-color:",";border-bottom:1px solid rgba(48,48,48,0.125);@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){background-color:",";",";}","{-webkit-backdrop-filter:auto !important;}"],w(e,.96875),e.transparent?"transparent":w(e,.75),e.dark?Object(d.css)(["-webkit-backdrop-filter:saturate(90%) blur(20px);"]):Object(d.css)(["-webkit-backdrop-filter:saturate(180%) blur(20px);"]),u.theme.mediaQueries.reduceTransparency)}),x=Object(d.default)(u.Container).withConfig({displayName:"Nav__Content",componentId:"sc-1vzc2c1-1"})(["display:flex;align-items:center;justify-content:space-between;position:relative;transition:all 1s ease-in-out;","{padding:0 0 0 ","px;}"],u.theme.mediaQueries.md,u.theme.space[4]),E=Object(d.default)(u.Box.withComponent("nav")).withConfig({displayName:"Nav__NavBar",componentId:"sc-1vzc2c1-2"})(["display:none;a{color:",";margin-left:","px;padding:","px;text-decoration:none;}",";"],function(e){return Object(u.cx)(e.color)},u.theme.space[2],u.theme.space[2],function(e){return e.isMobile?Object(d.css)(["display:",";flex-direction:column;text-align:left;padding:0;a{padding:0;margin:0 auto;height:64px;line-height:64px;font-weight:bold;width:100%;max-width:18rem;&:not(:last-child){border-bottom:1px solid rgba(48,48,48,0.125);}@media screen and (max-width:22em){max-width:16rem;}}"],e.toggled?"flex":"none"):Object(d.css)(["@media (min-width:56em){display:flex;position:absolute;left:50%;transform:translateX(-50%);}a{font-size:","px;text-transform:uppercase;&:hover{color:",";}}"],u.theme.fontSizes[1],u.theme.cx({white:"smoke",smoke:"muted",muted:"slate",slate:"black",black:"slate",primary:"error"}[e.color]||"black"))}),v=function(e){return c.a.createElement(E,Object.assign({role:"navigation"},e),c.a.createElement(p.a,{to:"/#services",children:"Services"}),c.a.createElement(p.a,{to:"/#testimonials",children:"Testimonials"}),c.a.createElement(p.a,{to:"/#contact",children:"Contact"}))},k=Object(d.default)(u.Text).attrs(function(e){return{toggle:e.toggled}}).withConfig({displayName:"Nav__MenuHeader",componentId:"sc-1vzc2c1-3"})(["font-family:'Arvo';display:","};","{margin-left:.02em;font-size:1.3em;}","{display:none;}"],function(e){return e.toggled?"none":"block"},u.theme.mediaQueries.md,u.theme.mediaQueries.lg),C=Object(d.default)(u.Flex).withConfig({displayName:"Nav__ToggleContainer",componentId:"sc-1vzc2c1-4"})(["align-items:center;justify-content:center;min-width:100px;min-height:44px;cursor:pointer;user-select:none;margin-left:auto;"]),S=Object(d.default)(u.Icon).attrs({}).withConfig({displayName:"Nav__Toggle",componentId:"sc-1vzc2c1-5"})(["display:block;transform:scale(1.5);","{transform:scale(3);}","{display:none;}"],u.theme.mediaQueries.md,u.theme.mediaQueries.lg),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={scrolled:!1,toggled:!1},t.componentWillUnmount=function(){t.bindScroll(!1)},t.bindScroll=function(e){"undefined"!=typeof window&&window[e?"addEventListener":"removeEventListener"]("scroll",t.onScroll)},t.onScroll=function(){var e=window.scrollY>=300;e!==t.state.scrolled&&t.setState({scrolled:e})},t.handleToggleMenu=function(){t.setState(function(e){return{toggled:!e.toggled}})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;(this.bindScroll(!0),"undefined"!=typeof window)&&window.matchMedia("(max-width: 48em)").addListener(function(){e.setState({toggled:!1})})},n.render=function(){var e=this.props,t=e.color,n=e.dark,a=e.fixed,r=e.bgColor,i=o()(e,["color","dark","fixed","bgColor"]),l=this.state,s=l.scrolled,m=l.toggled,d=n?t||"white":"white"===t&&s?"black":t,u=n?t||"snow":m||"white"===t&&s?"slate":t;return c.a.createElement(y,Object.assign({},i,{fixed:a,scrolled:s,toggled:m,dark:n,bgColor:r||(n?[32,34,36]:[255,255,255])}),c.a.createElement(x,null,c.a.createElement(f,{scrolled:s||a}),c.a.createElement(k,{fontSize:1,m:0,style:{letterSpacing:"0em"},bold:!0,ml:-3,onClick:this.handleToggleMenu,toggled:m}," menu "),c.a.createElement(v,{color:d,dark:n,toggled:m}),c.a.createElement(C,{color:u},c.a.createElement(S,{glyph:m?"view-close":null,toggled:m,onClick:m?this.handleToggleMenu:null}))),c.a.createElement(v,{isMobile:!0,toggled:m,color:d,dark:n,onClick:m?this.handleToggleMenu:null}),m&&c.a.createElement(b.a,null))},t}(l.Component);O.defaultProps={dark:!1,color:"white"},O.propTypes={color:m.a.string,bgColor:m.a.arrayOf(m.a.number),dark:m.a.bool,transparent:m.a.bool,fixed:m.a.bool};t.a=O},191:function(e,t,n){"use strict";n(34);var a=n(74),o=n.n(a),r=n(0),i=n.n(r),l=n(149),c=n(150),s=n(153),m=function(){var e=Object(r.useState)(0),t=e[0],n=e[1];return Object(r.useEffect)(function(){window.document.onkeypress=function(e){var a=e.key==="pi"[t];n(a?t+1:0)}}),t==="pi".length?i.a.createElement("iframe",{title:"pi",width:560,height:315,src:"https://www.youtube.com/embed/knIfoQW_mZg?autoplay=1",frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"none"}}):null},d=Object(l.default)(c.Box.withComponent("footer")).withConfig({displayName:"Footer__Base",componentId:"sc-1hf9gtt-0"})(["background:",";"," @media print{display:none;}"],function(e){return e.dark?c.theme.colors.darker+" radial-gradient("+Object(c.hexa)(c.theme.colors.black,.5)+" 1px, transparent 1px)":c.theme.colors.snow+" url('/pattern.svg') repeat"},function(e){return e.dark&&Object(l.css)(["background-size:","px ","px;h2{color:",";}","{border-color:",";}"],c.theme.space[4],c.theme.space[4],c.theme.colors.gray[4],h,c.theme.colors.black)}),u=Object(l.default)(c.Container).withConfig({displayName:"Footer__Columns",componentId:"sc-1hf9gtt-1"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:","px;","{grid-gap:50vw;grid-template-columns:repeat(4,1fr);}"],c.theme.space[2],c.theme.mediaQueries.md);Object(l.default)(c.Flex).withConfig({displayName:"Footer__Services",componentId:"sc-1hf9gtt-2"})(["a{line-height:0;}svg{fill:currentColor;width:32px;height:32px;}","{max-width:12rem;}"],c.theme.mediaQueries.md).defaultProps={align:"center",mb:3,wrap:!0};var p=Object(l.default)(c.Box).withConfig({displayName:"Footer__Pages",componentId:"sc-1hf9gtt-3"})(["a{display:block;color:inherit;margin-bottom:","px;}"],c.theme.space[2]),h=Object(l.default)(c.Box).withConfig({displayName:"Footer__BottomLine",componentId:"sc-1hf9gtt-4"})(["border-top:1px solid ",";"],c.theme.colors.smoke);t.a=function(e){var t=e.dark,n=void 0!==t&&t,a=e.children,r=o()(e,["dark","children"]);return i.a.createElement(d,Object.assign({color:n?"muted":"slate",py:[4,5,6],dark:n,align:"left"},r),a,i.a.createElement(m,null),i.a.createElement(u,{px:3},i.a.createElement(c.Box,null,i.a.createElement(c.Heading.h2,{fontSize:3,mb:3},"ArdoRem"),i.a.createElement(p,null,i.a.createElement(s.a,{to:"/",children:"Home"}),i.a.createElement(s.a,{to:"/#service/",children:"Service"}),i.a.createElement(s.a,{to:"/team/",children:"Team"}),i.a.createElement(s.a,{to:"/#testimonials/",children:"Testimonials"}))),i.a.createElement(c.Box,null,i.a.createElement(c.Heading.h2,{fontSize:3,mb:3},"Contact Us"),i.a.createElement(c.Text,{my:2},i.a.createElement("a",{href:"tel:1-915-204-0674"},"1-915-204-0674"),i.a.createElement("br",null),i.a.createElement(c.Text.span,{color:"muted",children:"(call toll-free)"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:vectrino314@gmail.com?Subject=Hello%20again"},"vectrino314@gmail.com")))),i.a.createElement(c.Container,{px:3,mt:[3,4]},i.a.createElement(c.Box,{fontSize:2}),i.a.createElement(h,{mt:3},i.a.createElement(c.Text,{fontSize:1,mt:2,color:"muted"},"© ",(new Date).getFullYear()," Website by Victor Solis"))))}},199:function(e){e.exports={c:"Liberty Park Capital",b:{percentage_of_us_high_schools:"2%",school_count:5,state_count:5,country_count:1,slack_count:3809,approximate_members:"3K+"},a:{"@context":"http://schema.org","@type":"Organization",name:"Ardorem Technologies",url:"https://ardorem.tech",logo:"https://ardorem.tech/Ardorem_Sun.svg",sameAs:[],contactPoint:[{"@type":"ContactPoint",email:"vectrino314@gmail.com",contactType:"customer support",url:"https://ardorem.tech"}]}}},224:function(e,t,n){"use strict";n(34);var a=n(0),o=n.n(a),r=n(179),i=n.n(r),l=n(199),c=n(150),s=n(189);"undefined"!=typeof window&&n(225)('a[href*="#"]'),t.a=function(e){var t=e.bg,n=e.children;return o.a.createElement(c.ThemeProvider,{webfonts:!0},o.a.createElement(i.a,{defaultTitle:l.c},o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{charSet:"UTF-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),o.a.createElement("meta",{name:"format-detection",content:"telephone=no"}),o.a.createElement("meta",{name:"theme-color",content:c.theme.colors.primary}),o.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Arvo|Josefin+Sans|Righteous');"),o.a.createElement("script",{type:"application/ld+json",children:JSON.stringify(l.a)})),t&&o.a.createElement(s.a,{color:t}),n)}},225:function(e,t,n){(function(n){var a,o;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),o=Math.max(0,16-(a-e)),r=window.setTimeout(function(){t(a+o)},o);return e=a+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",i=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,n,a,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:o}});document.dispatchEvent(r)}};return function(i,l){var c,s,m,d,u={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||r("scrollCancel",c)},animateScroll:function(a,i,l){u.cancelScroll();var s=n(c||t,l||{}),p="[object Number]"===Object.prototype.toString.call(a),h=p||!a.tagName?null:a;if(p||h){var f=e.pageYOffset;s.header&&!m&&(m=document.querySelector(s.header));var g,b,w,y,x,E,v,k,C=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(m),S=p?a:function(t,n,a,r){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-a,0),r&&(i=Math.min(i,o()-e.innerHeight)),i}(h,C,parseInt("function"==typeof s.offset?s.offset(a,i):s.offset,10),s.clip),O=S-f,j=o(),_=0,T=(g=O,w=(b=s).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&w>b.durationMax?b.durationMax:b.durationMin&&w<b.durationMin?b.durationMin:parseInt(w,10)),I=function(t){var n,o,l;y||(y=t),_+=t-y,E=f+O*(o=x=1<(x=0===T?0:_/T)?1:x,"easeInQuad"===(n=s).easing&&(l=o*o),"easeOutQuad"===n.easing&&(l=o*(2-o)),"easeInOutQuad"===n.easing&&(l=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===n.easing&&(l=o*o*o),"easeOutCubic"===n.easing&&(l=--o*o*o+1),"easeInOutCubic"===n.easing&&(l=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===n.easing&&(l=o*o*o*o),"easeOutQuart"===n.easing&&(l=1- --o*o*o*o),"easeInOutQuart"===n.easing&&(l=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===n.easing&&(l=o*o*o*o*o),"easeOutQuint"===n.easing&&(l=1+--o*o*o*o*o),"easeInOutQuint"===n.easing&&(l=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),n.customEasing&&(l=n.customEasing(o)),l||o),e.scrollTo(0,Math.floor(E)),function(t,n){var o,l,c,m=e.pageYOffset;if(t==n||m==n||(f<n&&e.innerHeight+m)>=j)return u.cancelScroll(!0),l=n,c=p,0===(o=a)&&document.body.focus(),c||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),e.scrollTo(0,l)),r("scrollStop",s,a,i),!(d=y=null)}(E,S)||(d=e.requestAnimationFrame(I),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),v=a,k=s,p||history.pushState&&k.updateURL&&history.pushState({smoothScroll:JSON.stringify(k),anchor:v.id},document.title,v===document.documentElement?"#top":"#"+v.id),r("scrollStart",s,a,i),u.cancelScroll(!0),e.requestAnimationFrame(I)}}},p=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(s=t.target.closest(i))&&"a"===s.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&s.hostname===e.location.hostname&&s.pathname===e.location.pathname&&/#/.test(s.href)){var n,o=a(s.hash);if("#"===o){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(o);(n=n||"#top"!==o?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(c),u.animateScroll(n,s))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||u.animateScroll(t,null,{updateURL:!1})}};return u.destroy=function(){c&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",h,!1),u.cancelScroll(),d=m=s=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";u.destroy(),c=n(t,l||{}),m=c.header?document.querySelector(c.header):null,document.addEventListener("click",p,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",h,!1)}(),u}}(o)}.apply(t,[]))||(e.exports=a)}).call(this,n(75))}}]);
//# sourceMappingURL=component---src-pages-team-js-e5d01d0a78cbd734e152.js.map