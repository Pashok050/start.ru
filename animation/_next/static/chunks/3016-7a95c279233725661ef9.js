(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3016],{93016:function(e,t,c){"use strict";var n=c(85893),i=c(74047),l=c(52700),s=c(4706),o=c(8127),r=c(44102),a=c(20775),u=c(26265),d=c(67294),_=c(53082),h=c(28261),m=c(27904),p=c(6831),v=c(96451),f=c(36941),g=c.n(f),y=c(7143);function b(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function S(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?b(Object(c),!0).forEach((function(t){(0,u.Z)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):b(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=(0,a.Z)(e);if(t){var i=(0,a.Z)(this).constructor;c=Reflect.construct(n,arguments,i)}else c=n.apply(this,arguments);return(0,r.Z)(this,c)}}var w={clickHouseShoot:p.F7},j={"\u041f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438":"popularity_by_descending","\u041f\u043e \u043d\u043e\u0432\u0438\u0437\u043d\u0435":"new_first"},x=function(e){(0,o.Z)(c,e);var t=k(c);function c(e){var l;(0,i.Z)(this,c),l=t.call(this,e),(0,u.Z)((0,s.Z)(l),"handleSelect",(function(e,t){var c=l.props.type;if("sort"===c){var n=S(S({},l.props.systemInformation.clickHouseData),{},{screen_attributes_id:m.Router.asPath,action_id:"click",block_type:"block",block_attributes_id:"sorting",element_type:"menu_item",element_attributes_id:j[e],element_attributes_text:e,event_time:(new Date).getTime()});l.props.clickHouseShoot(n)}t||l.setState({selected:"locale"===c?e.value:e,flag:"locale"===c?e.option:null,visible:!1},(function(){l.props.select(l.state.selected)}))})),(0,u.Z)((0,s.Z)(l),"handleMobileSelect",(function(e,t){var c=l.props.type;if("sort"===c){var n=S(S({},l.props.systemInformation.clickHouseData),{},{screen_attributes_id:m.Router.asPath,action_id:"click",block_type:"block",block_attributes_id:"sorting",element_type:"menu_item",element_attributes_id:j[e],element_attributes_text:e,event_time:(new Date).getTime()});l.props.clickHouseShoot(n)}t||l.setState({selected:"locale"===c?e.value:e,flag:"locale"===c?e.option:null,visibleMobileSelect:!1},(function(){l.props.select(l.state.selected)}))})),(0,u.Z)((0,s.Z)(l),"handleMobileChoice",(function(){l.setState({visibleMobileSelect:!0})})),(0,u.Z)((0,s.Z)(l),"closeMobileSelect",(function(){l.setState({visibleMobileSelect:!1})})),(0,u.Z)((0,s.Z)(l),"handleChoice",(function(){l.state.browserWidth<768?l.handleMobileChoice():l.setState({visible:!l.state.visible})})),(0,u.Z)((0,s.Z)(l),"handleTouchSlideStart",(function(e){l.props.profile.childProfile?(e.currentTarget.style.backgroundColor="#757D8A",e.currentTarget.style.color="white"):e.currentTarget.style.backgroundColor="#14161A"})),(0,u.Z)((0,s.Z)(l),"handleTouchSlideEnd",(function(e){l.props.profile.childProfile?(e.currentTarget.style.backgroundColor="white",e.currentTarget.style.color="#4c5970"):e.currentTarget.style.backgroundColor="#000000"})),(0,u.Z)((0,s.Z)(l),"renderMobileSelectList",(function(){var e,t,c,i,s,o,r=l.props.registration.authData,a=l.props.profile.childProfile,u=l.props,d=u.content,_=u.type,m=u.filters,p=u.t,v=l.state.selected,f="rs"===(null===r||void 0===r||null===(e=r.language)||void 0===e||null===(t=e.interface)||void 0===t?void 0:t.toLowerCase())?"sr":null===r||void 0===r||null===(c=r.language)||void 0===c||null===(i=c.interface)||void 0===i?void 0:i.toLowerCase(),y="rs"===(null===r||void 0===r||null===(s=r.current_country_code)||void 0===s?void 0:s.toLowerCase())?"sr":null===r||void 0===r||null===(o=r.current_country_code)||void 0===o?void 0:o.toLowerCase(),b=f||y;return(0,n.jsxs)("div",{className:"".concat(g()["select__popup-select"]," ").concat(a?g().child:""),children:[(0,n.jsxs)("div",{className:g()["select__popup-close"],children:[(0,n.jsx)("img",{src:"".concat(a?"/static/images/Catalog/arrow_left-child.svg":"/static/images/Catalog/arrow_left.svg"),onClick:l.closeMobileSelect}),(0,n.jsx)("span",{children:"locale"===_?p("language.title",{lng:b}):p("catalog.filters")})]}),(0,n.jsx)("div",{className:"".concat(g().select__wrap," ").concat(g()[_]),children:d.map((function(e,t){return"genre"===_&&m[(0,h.V9)(e,l.genresEngRus)]||"year"===_&&(m[e]||e.split("-").length>1&&Object.entries(m).filter((function(t){return Number(t[0])>=Number(e.split("-")[0])&&t[1]>0&&Number(t[0])<=Number(e.split("-")[1])})).length)||"sort"===_?(0,n.jsx)("div",{className:"".concat(g().select__item," ").concat(v==e?g()["select__item-selected"]:""),onClick:function(){return l.handleMobileSelect(e)},onTouchStart:function(e){return l.handleTouchSlideStart(e)},onTouchEnd:function(e){return l.handleTouchSlideEnd(e)},children:e},"select-".concat(e._id,"-").concat(t)):"locale"===_?(0,n.jsxs)("div",{className:"".concat(g().select__item," ").concat(g()["select__item-empty"]," ").concat(v==e?g()["select__item-selected"]:""),onClick:function(){return l.handleMobileSelect(e)},onTouchStart:function(e){return l.handleTouchSlideStart(e)},onTouchEnd:function(e){return l.handleTouchSlideEnd(e)},children:[(0,n.jsx)("div",{className:g()["select__item-img"],children:(0,n.jsx)("img",{src:"/static/images/flags/".concat(e.option,".svg?v=1")})}),(0,n.jsx)("div",{className:g()["select__item-text"],children:e.value})]},"select-".concat(e._id,"-").concat(t)):(0,n.jsx)("div",{className:"".concat(g().select__item," ").concat(g()["select__item-empty"]," ").concat(v==e?g()["select__item-selected"]:""),onClick:function(){return l.handleMobileSelect(e,!0)},onTouchStart:function(e){return l.handleTouchSlideStart(e)},onTouchEnd:function(e){return l.handleTouchSlideEnd(e)},children:e},"select-".concat(e._id,"-").concat(t))}))})]})})),(0,u.Z)((0,s.Z)(l),"handleClickOutside",(function(e){l.selectWrapper&&!l.selectWrapper.contains(e.target)&&l.setState({visible:!1})})),(0,u.Z)((0,s.Z)(l),"handleKeyDown",(function(e){27===e.keyCode&&l.setState({visible:!1})})),(0,u.Z)((0,s.Z)(l),"renderItemOfSelect",(function(){var e=l.props,t=e.content,c=e.type,i=e.filters,s=e.year,o=e.genre,r=e.category,a=e.mobile,u=r,d=null;if(r&&-1!==r.indexOf("?")){var _=r.split("?");u=_[0],d=_[1]}return a?t.map((function(e,t){return"genre"===c&&i[(0,h.V9)(e,l.genresEngRus)]||"year"===c&&(i[e]||e.split("-").length>1&&Object.entries(i).filter((function(t){return Number(t[0])>=Number(e.split("-")[0])&&t[1]>0&&Number(t[0])<=Number(e.split("-")[1])})).length)?(0,n.jsx)("div",{className:g().select__item,onClick:function(){return l.handleSelect(e)},children:e},"select-".concat(e._id,"-").concat(t)):(0,n.jsx)("div",{className:"".concat(g().select__item," ").concat(g()["select__item-empty"]),onClick:function(){return l.handleSelect(e,!0)},children:e},"select-".concat(e._id,"-").concat(t))})):t.map((function(e,t){return"genre"===c&&i[(0,h.V9)(e,l.genresEngRus)]?(0,n.jsx)(m.Link,{prefetch:!1,route:"".concat("ru"!==y.Z.language?"/".concat(y.Z.language):"","/").concat(u,"/").concat((0,h.V9)(e,l.genresEngRus)).concat(s?"/".concat(s):"").concat(d?"?".concat(d):""),children:(0,n.jsx)("a",{className:g().select__link,children:(0,n.jsx)("div",{className:g().select__item,onClick:function(){return l.handleSelect(e)},children:e},"select-".concat(e._id,"-").concat(t))})},"select-".concat(t,"-").concat(e._id)):"year"===c&&(i[e]||e.split("-").length>1&&Object.entries(i).filter((function(t){return Number(t[0])>=Number(e.split("-")[0])&&t[1]>0&&Number(t[0])<=Number(e.split("-")[1])})).length)?(0,n.jsx)(m.Link,{prefetch:!1,route:"".concat("ru"!==y.Z.language?"/".concat(y.Z.language):"","/").concat(u).concat(o?"/".concat(o):"","/").concat(e).concat(d?"?".concat(d):""),children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:g().select__item,onClick:function(){return l.handleSelect(e)},children:e},"select-".concat(e._id,"-").concat(t))})},"select-".concat(t,"-").concat(e._id)):"sort"===c?(0,n.jsx)("div",{className:g().select__item,onClick:function(){return l.handleSelect(e)},children:e},"select-".concat(t)):"locale"===c?(0,n.jsxs)("div",{className:"".concat(g().select__item," ").concat(g()["select__item-empty"]),onClick:function(){return l.handleSelect(e,!1)},children:[(0,n.jsx)("div",{className:g()["select__item-img"],children:(0,n.jsx)("img",{src:"/static/images/flags/".concat(e.option,".svg?v=2")})}),(0,n.jsx)("div",{className:g()["select__item-text"],children:e.value})]},"select-".concat(e.option,"-").concat(t)):(0,n.jsx)("div",{className:"".concat(g().select__item," ").concat(g()["select__item-empty"]),onClick:function(){return l.handleSelect(e,!0)},children:e},"select-".concat(e._id,"-").concat(t))}))})),(0,u.Z)((0,s.Z)(l),"handleMobileResetCurrentFilter",(function(e,t,c){"year"!=e&&(c=(0,h.V9)(c,l.genresEngRus));var n=S(S({},l.props.systemInformation.clickHouseData),{},{screen_attributes_id:m.Router.asPath,action_id:"click",block_type:"block",block_attributes_id:"".concat(e,"s"),element_type:"button",element_attributes_id:"cross",event_time:(new Date).getTime()});l.props.clickHouseShoot(n),t.stopPropagation(),l.props.select(""),"year"===e&&l.setState({selected:l.props.t("select.year")}),"genre"===e&&l.setState({selected:l.props.t("select.genre")})}));var o=e.initValue,r=e.seletedFirst,a=e.content,d=e.type,_=e.t;return l.default="genre"===d?_("select.genre"):"year"===d?_("select.year"):"sort"===d?a.filter((function(e){return e===o}))[0]:"--",l.state={visible:!1,browserWidth:0,visibleMobileSelect:!1,selected:"locale"===d?o.value:o?a&&a.filter((function(e){return e===o}))[0]:l.default?l.default:r?a[0]:l.default,flag:"locale"===d?o.option:null},l.genresEngRus={action:_("videounit.Blockbusters"),war:_("videounit.War"),detective:_("videounit.Detective"),documental:_("videounit.Documental"),drama:_("videounit.Drama"),history:_("videounit.Historical"),comedy:_("videounit.Comedies"),melodrama:_("videounit.Melodrama"),cartoon:_("videounit.Cartoons"),family:_("videounit.Family"),sport:_("videounit.Sport"),talkshow:_("videounit.Talk_Show"),thriller:_("videounit.Thriller"),fantasy:_("videounit.Fantasy"),adventure:_("videounit.Adventures"),bio:_("videounit.Biography"),criminal:_("videounit.Criminal"),horror:_("videounit.Horror"),humor:_("videounit.Humor"),kids:_("videounit.Kids"),musical:_("videounit.Music"),mystic:_("videounit.Mystic"),nurseryrhymes:_("videounit.Nurseryrhymes"),russian:_("videounit.Russian"),education:_("videounit.Kids-growth"),entertainment:_("videounit.Kids-entertainment"),scifi:_("videounit.Sci-Fi"),youth:_("videounit.Youth"),music:_("videounit.Music"),reality:_("videounit.Reality")},l}return(0,l.Z)(c,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keydown",this.handleKeyDown);var e=window.innerWidth;this.setState({browserWidth:e})}},{key:"componentDidUpdate",value:function(e){var t=this.props,c=t.selectReset,n=t.initValue,i=t.genre,l=t.year,s=t.type,o=t.def,r=e.selectReset,a=e.initValue,u=e.genre,d=e.year;c!==r&&this.setState({selected:"sort"===s?o:this.default}),"genre"!==s||i||i===u||this.setState({selected:this.default}),"year"!==s||l||l===d||this.setState({selected:this.default}),this.state.browserWidth!==window.innerWidth&&this.setState({browserWidth:window.innerWidth}),n&&n!==a&&this.setState({visible:!1,selected:"locale"===s?n.value:n})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.props,c=t.content,i=t.type,l=t.handleResetCurrentFilter,s=t.mobileSelect,o=t.t,r=this.state,a=r.visible,u=r.selected,_=r.visibleMobileSelect,h=r.flag,m=this.props.profile.childProfile;return(0,n.jsx)(d.Fragment,{children:_?this.renderMobileSelectList():(0,n.jsxs)("div",{className:"".concat(g().select," ").concat(a?g().open:""," ").concat(m?g().child:""," ").concat("sort"===i?g().sort:""," ").concat("locale"===i?" ".concat(g().locale):""),ref:function(t){e.selectWrapper=t},onMouseDown:this.handleClickOutside,onKeyDown:this.handleKeyDown,children:[(0,n.jsxs)("div",{className:"".concat(g().select__selected," ").concat(a?g().open:""," "),onClick:this.handleChoice,children:[u!==o("select.genre")&&u!==o("select.year")&&"sort"!==i?(0,n.jsx)("div",{className:g().select__hint,children:"genre"===i?o("select.genre"):"year"===i?o("select.year"):"--"}):null,(0,n.jsxs)("div",{className:"".concat(u!==o("select.genre")&&u!==o("select.year")?g().select__hasSelect:""),children:["locale"===i&&h?(0,n.jsx)("img",{src:"/static/images/flags/".concat(h,".svg?v=3"),className:g().selected_locale}):"",u]}),u===o("select.genre")||u===o("select.year")?(0,n.jsx)("img",{src:m?"/static/images/select/arrow-child.svg":"/static/images/select/arrow.svg",className:a?g().rotate:""}):"sort"===i?(0,n.jsx)("img",{src:m?"/static/images/select/sort-child.svg":"/static/images/select/sort.svg"}):"locale"===i?(0,n.jsx)("img",{src:"/static/images/select/arrow_down.svg",className:a?g().rotate:""}):(0,n.jsx)("img",{src:m?"/static/images/select/dismiss-child.svg":"/static/images/select/dismiss.svg",className:a?g().rotate:"",onClick:function(t){return s?e.handleMobileResetCurrentFilter(i,t,u):l(u,t,i)}})]}),a&&c&&c.length?(0,n.jsx)("div",{className:"".concat(g().select__wrap," ").concat("locale"===i?" ".concat(g().locale__wrap):""),children:this.renderItemOfSelect()}):null]})})}}]),c}(d.Component);t.Z=(0,_.$j)((function(e){return{systemInformation:e.systemInformation,profile:e.profile,registration:e.registration}}),w)((0,v.Z)()(x))},36941:function(e){e.exports={select:"Select_select__3HF3f",open:"Select_open__2VRRH",select__hint:"Select_select__hint__1SdIq",locale:"Select_locale__ASjU-",select__hasSelect:"Select_select__hasSelect__H5Old",selected_locale:"Select_selected_locale__1i0Y_",select__selected:"Select_select__selected__23WFI",rotate:"Select_rotate__H9KAj",select__wrap:"Select_select__wrap__1wy7S",locale__wrap:"Select_locale__wrap__3ikrV",select__item:"Select_select__item__2Ic9c","select__item-empty":"Select_select__item-empty__36J8r","select__item-img":"Select_select__item-img__Kaaj8",child:"Select_child__3twyP",sort:"Select_sort__1UoRU","select__popup-select":"Select_select__popup-select__LCvYO","select__popup-close":"Select_select__popup-close__3xcz6","select__item-selected":"Select_select__item-selected__2Nuai"}}}]);