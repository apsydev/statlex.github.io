webpackJsonp([1],{0:function(e,t,r){e.exports=r(2994)},2994:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(1),i=r(200),c=o(i),l=r(391),s=o(l),f=r(153),p=o(f),d=r(419),y=o(d),h=r(191),_=r(565),m=r(2995),b=o(m),v=r(580),g=r(633),O=r(2996),E=n(O),w=r(3001),P=o(w);r(3017);var j=(0,h.combineReducers)(u({},E,{routing:g.routerReducer})),T=((0,a.createDevTools)(p.default.createElement(s.default,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q"},p.default.createElement(c.default,{theme:"tomorrow",preserveScrollTop:!1}))),(0,h.createStore)(j,(0,h.applyMiddleware)(b.default))),M=(0,g.syncHistoryWithStore)(v.hashHistory,T);y.default.render(p.default.createElement(_.Provider,{store:T},p.default.createElement(P.default,{history:M})),document.querySelector(".js-app-wrapper"))},2995:function(e,t){"use strict";function r(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var n=r();n.withExtraArgument=r,t.default=n},2996:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.imageLoader=t.screen=t.countrySearch=void 0;var o=r(2997),u=n(o),a=r(2999),i=n(a),c=r(3e3),l=n(c);t.countrySearch=u.default,t.screen=i.default,t.imageLoader=l.default},2997:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];if(t.type===p){var r=function(){var r=t.filter.trim(),n=new RegExp(r,"i"),o=s.filter(function(e){return!!n.test(e["name-ru"])||e.currency.some(function(e){return n.test(e.abbreviation)||n.test(e["name-ru"])})});return{v:a({},e,{country:o,filter:r,re:n})}}();if("object"===("undefined"==typeof r?"undefined":u(r)))return r.v}return e}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=o;var i=r(2998),c=n(i),l=r(643),s=l.filter(function(e){return e.currency}).sort(function(e,t){return e["name-ru"]>t["name-ru"]?1:-1}),f={country:s,filter:"",re:new RegExp("","i")},p=c.default.TYPE.COUNTRY_FILTER},2998:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TYPE:{COUNTRY_FILTER:"COUNTRY_FILTER",RESIZE:"RESIZE",IMAGE_LOADED:"IMAGE_LOADED"}}},2999:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];return t.type===f?u({},e,{width:l.clientWidth,height:l.clientHeight}):e}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=o;var a=r(2998),i=n(a),c=document,l=c.documentElement,s={width:l.clientWidth,height:l.clientHeight,isTouch:"ontouchstart"in c},f=i.default.TYPE.RESIZE},3e3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return t.type===l?u({},e,{src:t.src}):e}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=o;var a=r(2998),i=n(a),c={src:""},l=i.default.TYPE.IMAGE_LOADED},3001:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(580),f=r(3002),p=r(3013),d=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement(s.Router,{history:this.props.history},l.default.createElement(s.Route,{path:"/",component:p.App},l.default.createElement(s.IndexRoute,{component:f.Home}),l.default.createElement(s.Route,{path:"/country/:alpha3",component:f.Country}),l.default.createElement(s.Route,{path:"/img/:abbreviation/:image",component:p.Image}),l.default.createElement(s.Route,{path:"/about",component:p.About}),"/* 404 */",l.default.createElement(s.Route,{path:"*",component:p.About})))}}]),t}(c.Component);t.default=d},3002:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=t.Country=void 0;var o=r(3003),u=n(o),a=r(3007),i=n(a);t.Country=u.default,t.Home=i.default},3003:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(580),f=r(3004),p=n(f),d=r(638),y=r(643);r(3006);var h=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.params.alpha3,t=d.find(y,{alpha3:e});return l.default.createElement("div",{className:"country clear-self"},l.default.createElement("h1",{className:"country__header"},t["name-ru"]),t.currency.map(function(e){return l.default.createElement("div",{key:e.abbreviation,className:"country__currency-info"},l.default.createElement("h2",{className:"country__header_2"},e.abbreviation," - ",e["name-ru"]),e["description-ru"]&&e["description-ru"].map(function(e,t){return l.default.createElement("p",{className:"country__description",key:"description_"+t},e)}),l.default.createElement("div",{className:"country__currency-image-list"},e.image.map(function(t,n){var o=e.abbreviation,u=r(901)("./"+o+"/"+t);return l.default.createElement(s.Link,{to:"/img/"+o+"/"+t,className:"country__currency-image-link"+(n%2?" country__currency-image-link--odd":""),key:t},l.default.createElement(p.default,{className:"country__currency-image",src:u}))})))}))}}]),t}(c.Component);t.default=h,h.propTypes={params:c.PropTypes.shape({alpha3:c.PropTypes.string.isRequired})}},3004:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(565),f=r(3005),p=n(f),d=r(641),y=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(e.imageLoader.src===this.props.src){var t=this.refs.hostNode;t.classList.remove("loading-image"),t.src=this.props.src}}},{key:"componentWillMount",value:function(){this.props.loadingImage(this.props.src)}},{key:"render",value:function(){return l.default.createElement("img",{ref:"hostNode",className:(this.props.className||"")+" loading-image",src:d})}}]),t}(c.Component);y.propTypes={src:c.PropTypes.string.isRequired,imageLoader:c.PropTypes.shape({src:c.PropTypes.string.isRequired})},t.default=(0,s.connect)(function(e){return{imageLoader:e.imageLoader}},{loadingImage:p.default})(y)},3005:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(t){var r=new Image;r.onload=r.onerror=function(){r.onload=r.onerror=null,t({type:a.default.TYPE.IMAGE_LOADED,src:e})},r.src=e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=r(2998),a=n(u)},3006:function(e,t){},3007:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(565),f=r(580),p=r(3008),d=n(p),y=r(3012),h=n(y),_=r(3004),m=(n(_),function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.countrySearch,t=e.country,n=e.re,o=e.filter;return l.default.createElement("div",{className:"home-cards"},l.default.createElement(d.default,null),t.length?l.default.createElement("div",{className:"home-cards__colums"},t.map(function(e){return l.default.createElement(f.Link,{key:e.alpha3,className:"country-card",to:"/country/"+e.alpha3},l.default.createElement("img",{className:"country-card__flag",src:r(644)("./"+e.alpha2.toLowerCase()+".png")}),l.default.createElement(h.default,{string:e["name-ru"],searchString:o,re:n}),l.default.createElement("p",{className:"country-card__currency"},e.currency.map(function(e,t){return l.default.createElement(h.default,{key:e.abbreviation+t,string:e.abbreviation,searchString:o,re:n})})))})):l.default.createElement("div",{className:"home-cards__did-not-found-country"},"Ничего не найдено, попробуйте ввести другой запрос."))}}]),t}(c.Component));m.propTypes={countrySearch:c.PropTypes.shape({country:c.PropTypes.array.isRequired,filter:c.PropTypes.string.isRequired,re:c.PropTypes.instanceOf(RegExp).isRequired})},t.default=(0,s.connect)(function(e){return{countrySearch:e.countrySearch}})(m)},3008:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(565),f=r(3009),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"onSearchChange",value:function(e){this.props.applyCountryFilter(e.currentTarget.value)}},{key:"render",value:function(){var e=this;return l.default.createElement("input",{className:"home-cards__search-input",type:"text",placeholder:"Поиск...",value:this.props.countrySearch.filter,onChange:function(t){return e.onSearchChange(t)}})}}]),t}(c.Component);p.propTypes={countrySearch:c.PropTypes.shape({filter:c.PropTypes.string.isRequired}),applyCountryFilter:c.PropTypes.func.isRequired},t.default=(0,s.connect)(function(e){return{countrySearch:e.countrySearch}},{applyCountryFilter:f.applyCountryFilter})(p)},3009:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadingImage=t.resizeScreen=t.applyCountryFilter=void 0;var o=r(3010),u=n(o),a=r(3011),i=n(a),c=r(3005),l=n(c);t.applyCountryFilter=u.default,t.resizeScreen=i.default,t.loadingImage=l.default},3010:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{type:a.default.TYPE.COUNTRY_FILTER,filter:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=r(2998),a=n(u)},3011:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return{type:a.default.TYPE.RESIZE}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=r(2998),a=n(u)},3012:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.string,r=e.re;if(!e.searchString)return l.default.createElement("span",{className:"country-card__text"},t);var n=t.search(r);if(n===-1)return l.default.createElement("span",{className:"country-card__text"},t);var o=n+t.match(r)[0].length;return l.default.createElement("span",{className:"country-card__text"},t.substring(0,n),l.default.createElement("span",{className:"country-card__founded-text"},t.substring(n,o)),t.substring(o))}}]),t}(c.Component);t.default=s,s.propTypes={string:c.PropTypes.string.isRequired,searchString:c.PropTypes.string.isRequired,re:c.PropTypes.instanceOf(RegExp).isRequired}},3013:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.About=t.Image=t.App=void 0;var o=r(3014),u=n(o),a=r(3015),i=n(a),c=r(3016),l=n(c);t.App=u.default,t.Image=i.default,t.About=l.default},3014:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(3009),f=r(565),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.props.resizeScreen,!1)}},{key:"render",value:function(){return l.default.createElement("div",null,this.props.children)}}]),t}(c.Component);p.propTypes={resizeScreen:c.PropTypes.func.isRequired},t.default=(0,f.connect)(null,{resizeScreen:s.resizeScreen})(p)},3015:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=r(565),f=r(639),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=50,t=this.props,n=new f({element:this.refs.wrapper,tileSources:{type:"image",url:r(901)("./"+t.params.abbreviation+"/"+t.params.image),buildPyramid:!0},showNavigationControl:!1,navigationControlAnchor:!1,showZoomControl:!1,showHomeControl:!1,maxZoomLevel:4,minZoomLevel:.4,viewportMargins:{top:e,left:e,right:e,bottom:e}});t.router.setRouteLeaveHook(t.route,function(){n.destroy(),n=null})}},{key:"render",value:function(){var e=this.props.screen;return l.default.createElement("div",{ref:"wrapper",style:{width:e.width+"px",height:e.height+"px"}})}}]),t}(c.Component);p.propTypes={screen:c.PropTypes.shape({width:c.PropTypes.number.isRequired,height:c.PropTypes.number.isRequired}),params:c.PropTypes.shape({image:c.PropTypes.string.isRequired})},t.default=(0,s.connect)(function(e){return{screen:e.screen}})(p)},3016:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(153),l=n(c),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h1",{className:"country__header"},"О программе"),l.default.createElement("div",{className:"country__currency-info"},l.default.createElement("h2",{className:"country__header_2"},"Валютный справочник"),l.default.createElement("p",{className:"country__description"},"Программа содержит более 150 разных валют."),l.default.createElement("p",{className:"country__description"},"Пользуйтесь поиском что бы быстрее найти интересующую вас валюту."),l.default.createElement("h2",{className:"country__header_2"},"Матералы"),l.default.createElement("p",{className:"country__description"},"Описание и изображения валют - FINANCE.UA (http://banknotes.finance.ua)"),l.default.createElement("p",{className:"country__description"},"Изображения флагов государст - https://github.com/lipis/flag-icon-css"),l.default.createElement("h2",{className:"country__header_2"},"Контакты"),l.default.createElement("p",{className:"country__description"},"Сайт разработчика: https://statlex.github.io"),l.default.createElement("p",{className:"country__description"},"E-mail: statlex.team@gmail.com")))}}]),t}(c.Component);t.default=s},3017:function(e,t){}});