/*! For license information please see bc02151692fd5c793865404dd315a4d2578bb74d-93cbd052e14334cf1c79.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+rwk":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(e){var t=window.scrollY,a=document.getElementById("content-container");n.setState({fixed:t>a.offsetTop})},n.state={fixed:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){1==this.props.isFixed&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){1==this.props.isFixed&&window.removeEventListener("scroll",this.onScroll)},n.render=function(){return s.a.createElement("div",{className:1==this.state.fixed?"sidebar-fixed":"sidebar-not-fixed"},this.props.children)},t}(s.a.Component)},ANhw:function(e,t){var n,a;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e[n]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],a=0;a<e.length;a+=3)for(var r=e[a]<<16|e[a+1]<<8|e[a+2],s=0;s<4;s++)8*a+6*s<=8*e.length?t.push(n.charAt(r>>>6*(3-s)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],a=0,r=0;a<e.length;r=++a%4)0!=r&&t.push((n.indexOf(e.charAt(a-1))&Math.pow(2,-2*r+8)-1)<<2*r|n.indexOf(e.charAt(a))>>>6-2*r);return t}},e.exports=a},BEtg:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},Kxvw:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),i=n("JuBv"),c=(n("j3n2"),n("ma3e")),o=n("wd/R"),l=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=o(this.props.frontmatter.date),t=null;return null!=this.props.frontmatter.updatedate&&""!=this.props.frontmatter.updatedate&&(t=o(this.props.frontmatter.updatedate),(Math.abs(e.diff(t))>=864e5||1==t.isAfter(e))&&(t=o(this.props.frontmatter.updatedate))),s.a.createElement("div",{className:"post-header"},s.a.createElement("div",{className:"post-meta"},s.a.createElement("div",{title:"Author"},s.a.createElement(i.a,{noPrefetch:!0,className:"action-link post-meta-data post-meta-content",to:"/author/"+this.props.author.frontmatter.slug},s.a.createElement(c.u,null),s.a.createElement("span",null,null!=this.props.author?this.props.author.frontmatter.firstname+" "+this.props.author.frontmatter.lastname:""))),null!=t?s.a.createElement("div",{title:"Bearbeitet",className:"post-meta-data post-meta-time"},s.a.createElement(c.h,null),s.a.createElement("span",{className:"post-meta-content"},t.format("DD. MMM YYYY"))):"",s.a.createElement("div",{title:"Angelegt",className:" post-meta-data post-meta-time"},s.a.createElement(c.e,null),s.a.createElement("span",{className:"post-meta-content"},e.format("DD. MMM YYYY")))),s.a.createElement("div",{className:"post-subtitle"},null!=this.props.frontmatter.subtitle?s.a.createElement(i.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.subtitle):""),s.a.createElement("div",null,s.a.createElement("h1",null,s.a.createElement(i.a,{to:"/"+this.props.frontmatter.slug},this.props.frontmatter.title))))},t}(s.a.Component)},PeiE:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("o0o1"),r=n.n(a),s=(n("ls82"),n("HaE+")),i=n("dI71"),c=n("q1tI"),o=n.n(c),l=n("ruFX"),u=n("VOVi"),m=n("ma3e"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"subscriber-content-container"},o.a.createElement(u.a,{content:this.props.content}))},t}(o.a.Component),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e){n.setState({subscribed:e})},n.onClick=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.openForm("subscriber-section");case 2:case"end":return e.stop()}}),e)}))),n.state={subscribed:!1},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){l.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){l.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return o.a.createElement("div",{className:"subscribe-component-container"},o.a.createElement("div",{id:"sub"},o.a.createElement("a",{onClick:this.onClick},"Bitte melden Sie sich für den Newsletter an, um die Downloads zu sehen.")))},t}(o.a.Component),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e,t){n.setState({subscribed:e}),t&&document.getElementById(t).focus()},n.state={subscribed:l.a.subscribed},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){l.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){l.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return o.a.createElement("div",{id:"subscriber-section",className:"subscriber-footer-container"},o.a.createElement("h2",null,o.a.createElement(m.g,null)," Downloads "),o.a.createElement("div",null,1==this.state.subscribed?o.a.createElement(p,{content:this.props.content}):o.a.createElement(h,null)))},t}(o.a.Component)},aCH8:function(e,t,n){var a,r,s,i,c;a=n("ANhw"),r=n("mmNF").utf8,s=n("BEtg"),i=n("mmNF").bin,(c=function e(t,n){t.constructor==String?t=n&&"binary"===n.encoding?i.stringToBytes(t):r.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var c=a.bytesToWords(t),o=8*t.length,l=1732584193,u=-271733879,m=-1732584194,p=271733878,h=0;h<c.length;h++)c[h]=16711935&(c[h]<<8|c[h]>>>24)|4278255360&(c[h]<<24|c[h]>>>8);c[o>>>5]|=128<<o%32,c[14+(o+64>>>9<<4)]=o;var d=e._ff,f=e._gg,b=e._hh,g=e._ii;for(h=0;h<c.length;h+=16){var E=l,v=u,y=m,N=p;l=d(l,u,m,p,c[h+0],7,-680876936),p=d(p,l,u,m,c[h+1],12,-389564586),m=d(m,p,l,u,c[h+2],17,606105819),u=d(u,m,p,l,c[h+3],22,-1044525330),l=d(l,u,m,p,c[h+4],7,-176418897),p=d(p,l,u,m,c[h+5],12,1200080426),m=d(m,p,l,u,c[h+6],17,-1473231341),u=d(u,m,p,l,c[h+7],22,-45705983),l=d(l,u,m,p,c[h+8],7,1770035416),p=d(p,l,u,m,c[h+9],12,-1958414417),m=d(m,p,l,u,c[h+10],17,-42063),u=d(u,m,p,l,c[h+11],22,-1990404162),l=d(l,u,m,p,c[h+12],7,1804603682),p=d(p,l,u,m,c[h+13],12,-40341101),m=d(m,p,l,u,c[h+14],17,-1502002290),l=f(l,u=d(u,m,p,l,c[h+15],22,1236535329),m,p,c[h+1],5,-165796510),p=f(p,l,u,m,c[h+6],9,-1069501632),m=f(m,p,l,u,c[h+11],14,643717713),u=f(u,m,p,l,c[h+0],20,-373897302),l=f(l,u,m,p,c[h+5],5,-701558691),p=f(p,l,u,m,c[h+10],9,38016083),m=f(m,p,l,u,c[h+15],14,-660478335),u=f(u,m,p,l,c[h+4],20,-405537848),l=f(l,u,m,p,c[h+9],5,568446438),p=f(p,l,u,m,c[h+14],9,-1019803690),m=f(m,p,l,u,c[h+3],14,-187363961),u=f(u,m,p,l,c[h+8],20,1163531501),l=f(l,u,m,p,c[h+13],5,-1444681467),p=f(p,l,u,m,c[h+2],9,-51403784),m=f(m,p,l,u,c[h+7],14,1735328473),l=b(l,u=f(u,m,p,l,c[h+12],20,-1926607734),m,p,c[h+5],4,-378558),p=b(p,l,u,m,c[h+8],11,-2022574463),m=b(m,p,l,u,c[h+11],16,1839030562),u=b(u,m,p,l,c[h+14],23,-35309556),l=b(l,u,m,p,c[h+1],4,-1530992060),p=b(p,l,u,m,c[h+4],11,1272893353),m=b(m,p,l,u,c[h+7],16,-155497632),u=b(u,m,p,l,c[h+10],23,-1094730640),l=b(l,u,m,p,c[h+13],4,681279174),p=b(p,l,u,m,c[h+0],11,-358537222),m=b(m,p,l,u,c[h+3],16,-722521979),u=b(u,m,p,l,c[h+6],23,76029189),l=b(l,u,m,p,c[h+9],4,-640364487),p=b(p,l,u,m,c[h+12],11,-421815835),m=b(m,p,l,u,c[h+15],16,530742520),l=g(l,u=b(u,m,p,l,c[h+2],23,-995338651),m,p,c[h+0],6,-198630844),p=g(p,l,u,m,c[h+7],10,1126891415),m=g(m,p,l,u,c[h+14],15,-1416354905),u=g(u,m,p,l,c[h+5],21,-57434055),l=g(l,u,m,p,c[h+12],6,1700485571),p=g(p,l,u,m,c[h+3],10,-1894986606),m=g(m,p,l,u,c[h+10],15,-1051523),u=g(u,m,p,l,c[h+1],21,-2054922799),l=g(l,u,m,p,c[h+8],6,1873313359),p=g(p,l,u,m,c[h+15],10,-30611744),m=g(m,p,l,u,c[h+6],15,-1560198380),u=g(u,m,p,l,c[h+13],21,1309151649),l=g(l,u,m,p,c[h+4],6,-145523070),p=g(p,l,u,m,c[h+11],10,-1120210379),m=g(m,p,l,u,c[h+2],15,718787259),u=g(u,m,p,l,c[h+9],21,-343485551),l=l+E>>>0,u=u+v>>>0,m=m+y>>>0,p=p+N>>>0}return a.endian([l,u,m,p])})._ff=function(e,t,n,a,r,s,i){var c=e+(t&n|~t&a)+(r>>>0)+i;return(c<<s|c>>>32-s)+t},c._gg=function(e,t,n,a,r,s,i){var c=e+(t&a|n&~a)+(r>>>0)+i;return(c<<s|c>>>32-s)+t},c._hh=function(e,t,n,a,r,s,i){var c=e+(t^n^a)+(r>>>0)+i;return(c<<s|c>>>32-s)+t},c._ii=function(e,t,n,a,r,s,i){var c=e+(n^(t|~a))+(r>>>0)+i;return(c<<s|c>>>32-s)+t},c._blocksize=16,c._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=a.wordsToBytes(c(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):a.bytesToHex(n)}},bafB:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("dI71"),r=n("q1tI"),s=n.n(r),i=n("ma3e"),c=(n("JFhn"),new(function(){function e(){"undefined"!=typeof window&&(this.obj=window.captcha)}return e.prototype.captcha=function(e){1==this.obj.captchaLoaded?e():this.obj.captchaHandlers.push(e)},e}())),o=n("wd/R"),l=n("aCH8"),u=n("VOVi"),m="6Lej97IUAAAAAHjKV4e2jG_WDj-l8_HyO67I4YVY",p=function(e){function t(t){var n;return(n=e.call(this,t)||this).id=n.createGuid(),n.recaptchaId="recaptcha-"+n.id,n.grecaptchaId=null,n.inputId="input-"+n.id,n.captchaRef=s.a.createRef(),n.updateCb=null,n.captchaCallback=function(e){n.setState({captchaChecked:!0,captchaResponse:e})},n.expiredCallback=function(){n.setState({captchaChecked:!1}),grecaptcha.reset(n.grecaptchaId)},n.onReset=function(){n.reset()},n.errorCallback=function(){n.setState({success:!1})},n.onSubmit=function(e){if(e.preventDefault(),n.setState({triggered:!0}),n.state.email&&n.state.content&&n.state.name&&1==n.state.captchaChecked){n.setState({submitting:!0});var t,a,r={fields:{website:n.state.website,name:n.state.name,guid:n.createGuid(),email:n.state.email,content:n.state.content,parent:n.props.parent,postSlug:n.props.slug},options:{slug:n.props.slug,reCaptcha:{siteKey:m,secret:"i7uGSSt2Df0i6FocOCCmVl5VIbc3FUexNa/CTmZbVGCbLdZpoib1CZVRWIzVIO0MkNeTwn2sp2z5zlI8V7tsN91gKS+JlIX4XNXampUXde0iKusb1H1LA2TGCsUJf5UqbLMlIqPk/tcwXjSvHONFUXf6tcercDnteylYsqGcJ5NxmG4FuR4Nscj7lrpvOpFmQitKH8PRbYAtxotmzu3NbxJsYF7N0Qusxq7VynuLGvn3VI8vdpImpoROxnWbBycRuHygEd/9IAelCWPIHuwcwVuq6hwGQxRueWN/4x2mvOrlak6dLeiLyZ/fuVrEPzfucL7BET+J0MstmQddRfpSPA=="}},"g-recaptcha-response":n.state.captchaResponse};(t="https://ppv-staticman-fn.azurewebsites.net/api/HttpTrigger",a=r,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-functions-key":"hDpQcHz5YTGbcTkzmLAUTJnwu8GS0Tr7VaMHCFnIGkn4Qy6f5lYsTw=="},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(a)}).then((function(e){return e.json()}))).then((function(e){n.setState({success:e.success,submitting:!1})}),(function(){n.setState({submitting:!1,success:!1})}))}},n.handleChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.state={email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1,captchaResponse:null},n}Object(a.a)(t,e);var n=t.prototype;return n.reset=function(){var e=this;this.setState({email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1}),document.getElementsByName(this.inputId).forEach((function(e){e.value=""})),this.updateCb=function(){e.renderCaptcha()}},n.componentDidUpdate=function(){this.updateCb&&(this.updateCb(),this.updateCb=null)},n.renderCaptcha=function(){var e=this;c.captcha((function(){e.grecaptchaId=grecaptcha.render(e.captchaRef.current,{sitekey:m,callback:e.captchaCallback,"expired-callback":e.expiredCallback,"error-callback":e.errorCallback})}))},n.componentDidMount=function(){this.setState({submitting:!1}),this.renderCaptcha()},n.createGuid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},n.render=function(){return s.a.createElement("div",{id:"comments",className:"comment-input-container"},s.a.createElement("div",null,s.a.createElement("h3",null,"Kommentar hinterlassen")),0==this.state.success||null==this.state.success?s.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},s.a.createElement("div",{className:"comment-input-label"},s.a.createElement("label",null,"Kommentar",1!=this.state.triggered||this.state.content?"":s.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Kommentar ein"),s.a.createElement("textarea",{id:this.inputId,onChange:this.handleChange,name:"content",className:"textarea",rows:3}))),s.a.createElement("div",{className:"meta-input-container"},s.a.createElement("div",{className:"comment-input-label"},s.a.createElement("label",null,"Name *",1!=this.state.triggered||this.state.name?"":s.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Namen an"),s.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"name",className:"input",type:"text"}))),s.a.createElement("div",{className:"comment-input-label"},s.a.createElement("label",null,"E-Mail (nicht öffentlich) *",1!=this.state.triggered||this.state.email?"":s.a.createElement("span",{className:"error-string"},"Bitte geben Sie eine E-Mail Adresse an"),s.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"email",className:"input",type:"text"}))),s.a.createElement("div",{className:"comment-input-label"},s.a.createElement("label",null,"Website",s.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"website",className:"input",type:"text"})))),s.a.createElement("div",null,s.a.createElement("span",{className:"comment-input-label"},s.a.createElement("label",null,"Captcha *",1==this.state.triggered&&0==this.state.captchaChecked?s.a.createElement("span",{className:"error-string"},"Bitte lösen Sie das Captcha"):"",s.a.createElement("div",{ref:this.captchaRef,style:{marginBottom:"5px"},id:this.recaptchaId,className:"g-recaptcha","data-sitekey":m})),s.a.createElement("button",{type:"submit",className:"button is-small "+(1==this.state.submitting?" is-loading":"")},"Absenden"))),null==this.state.success?"":s.a.createElement("div",{style:{marginTop:"5px"}},0==this.state.success?s.a.createElement("span",{className:"error-string"},s.a.createElement(i.s,{style:{position:"relative",top:"1px",marginRight:"10px"}}),s.a.createElement("span",null,"Oops, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut!")):"")):s.a.createElement("div",null,s.a.createElement("span",{className:"success-string"},s.a.createElement(i.d,{style:{position:"relative",top:"1px",marginRight:"10px"}}),"Vielen Dank! Wir bitten Sie um Verständnis, dass wir Ihren Beitrag erst überprüfen, bevor wir ihn live stellen."),s.a.createElement("div",null,s.a.createElement("button",{className:"button is-small",onClick:this.onReset},"Neuen Kommentar erstellen"))))},t}(s.a.Component),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleInputMask=function(){n.setState({displayForm:!n.state.displayForm})},n.state={displayForm:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this,n="number"==typeof this.props.comment.timestamp?o.unix(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm"):o(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm");return s.a.createElement(s.a.Fragment,null,s.a.createElement("hr",{className:"comment-hr"}),s.a.createElement("div",{className:"columns comment-element-container",id:"comment-"+this.props.comment.guid},s.a.createElement("div",{className:"column is-1"},s.a.createElement("div",null,s.a.createElement("img",{className:"comment-avatar",src:"https://www.gravatar.com/avatar/"+l(this.props.comment.email)+"?s=60&d=mp"}))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"comment-header"},s.a.createElement("span",null,this.props.comment.name),s.a.createElement("span",null,s.a.createElement(i.e,null),n)),s.a.createElement("div",null,s.a.createElement(u.b,{html:this.props.comment.ast})),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.toggleInputMask.bind(this),className:"button comment-answer-button"},"Antworten")))),s.a.createElement("div",null,1==this.state.displayForm?s.a.createElement(p,{parent:this.props.comment.guid,slug:this.props.slug}):""),s.a.createElement("div",{className:"comment-children-container"},null!=this.props.comment.children?this.props.comment.children.map((function(n,a){return s.a.createElement("div",{key:a},s.a.createElement(t,{slug:e.props.slug,comment:n}))})):""))},t}(s.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return this.props.comments.forEach((function(e){(function e(t){var n=1;return null!=t.children&&t.children.forEach((function(t){n+=e(t)})),n})(e)})),s.a.createElement("div",{className:"comment-container"},s.a.createElement("div",{className:"comment-headline"}),s.a.createElement("div",null,s.a.createElement(p,{slug:this.props.slug,parent:null})),s.a.createElement("div",null,this.props.comments.map((function(t,n){return s.a.createElement("div",{key:n},s.a.createElement(h,{slug:e.props.slug,comment:t}))}))))},t}(s.a.Component)},j3n2:function(e,t,n){},mmNF:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n}}]);
//# sourceMappingURL=bc02151692fd5c793865404dd315a4d2578bb74d-93cbd052e14334cf1c79.js.map