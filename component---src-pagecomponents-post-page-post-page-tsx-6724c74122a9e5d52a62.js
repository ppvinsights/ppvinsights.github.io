(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"EFy+":function(t,e,n){"use strict";n.r(e),n.d(e,"PostPage",(function(){return y})),n.d(e,"pageQuery",(function(){return C}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),s=n("Aq8R"),i=n("+rwk"),l=n("K3K0"),c=n("9uds"),p=n("Gpdm"),u=n("Kxvw"),m=n("VOVi"),d=n("OKhy"),h=(n("JFhn"),function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"contentfooter-container"},o.a.createElement("hr",null),this.props.children))},e}(o.a.Component)),f=n("8O3f"),E=n("ma3e"),g=n("6hEK"),v=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"next-prev-container"},o.a.createElement("div",{style:{flexBasis:"content"},className:"prev"},null==this.props.previousPost?"":o.a.createElement(g.a,{to:"/"+this.props.previousPost.route,title:this.props.previousPost.title},o.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"10px"}},o.a.createElement(E.a,null)),o.a.createElement("span",null,this.props.previousPost.title.length<=28?this.props.previousPost.title:this.props.previousPost.title.substr(0,25)+"..."))),o.a.createElement("div",{style:{flexBasis:"content"},className:"next"},null==this.props.nextPost?"":o.a.createElement(g.a,{to:"/"+this.props.nextPost.route,title:this.props.nextPost.title},o.a.createElement("span",null,this.props.nextPost.title.length<=28?this.props.nextPost.title:this.props.nextPost.title.substr(0,25)+"..."),o.a.createElement("span",{className:"next-prev-icon"},o.a.createElement(E.b,null))))))},e}(o.a.Component),b=n("bafB"),x=n("PeiE"),P=n("z9ZU"),y=function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t,e,n,a=this.props.data.post,r=this.props.context,E=Object(d.h)(this.props.data.categories.edges.map((function(t){return t.node}))),g=a.frontmatter.categories.map((function(t){return Object(d.c)(t,E)})),y=this.props.data.tags.edges.map((function(t){return t.node})),C=this.props.data.post.frontmatter.tags.map((function(t){return y.find((function(e){return e.slug==t}))})),O={url:this.props.data.post.frontmatter.slug,description:a.frontmatter.description,type:"article",title:a.frontmatter.title,tags:C.map((function(t){return t.name})),image:null!=this.props.data.post.frontmatter.image?null===(t=this.props.data.image)||void 0===t||null===(e=t.childImageSharp)||void 0===e||null===(n=e.fluid)||void 0===n?void 0:n.src:null,updated_time:a.frontmatter.updatedate,publish_time:a.frontmatter.date};return o.a.createElement(s.b,{sidebar:o.a.createElement(i.a,{isFixed:!0},o.a.createElement(l.a,{tableOfContents:a.tableOfContents}),o.a.createElement(c.a,null)),categoryBar:o.a.createElement(p.a,{title:g.map((function(t){return t.friendlyname})).join(" - ")}),header:O},o.a.createElement(u.a,{frontmatter:a.frontmatter,commentCnt:a.fields.commentCnt,author:r.author,categories:g,isPreview:!1}),o.a.createElement("div",{className:"post-content"},o.a.createElement(m.b,{html:a.htmlAst}),null==a.fields.subscriberContent||0==a.fields.subscriberContent.length?"":o.a.createElement(x.a,{content:a.fields.subscriberContent})),o.a.createElement(h,null,o.a.createElement(f.a,{tags:C,categories:g}),o.a.createElement(v,{nextPost:r.next,previousPost:r.prev}),o.a.createElement(P.a,{author:this.props.context.author,authorBadge:this.props.data.authorBadge,avatar:this.props.data.avatar}),o.a.createElement(b.a,{slug:a.frontmatter.slug,comments:r.comments})))},e}(o.a.Component),C=(e.default=function(t){var e=t.data,n=t.pageContext,a=t.location;return o.a.createElement(y,{location:a,data:e,context:n})},"1059941305")},Gpdm:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),s=(n("VLio"),function(t){function e(e){return t.call(this,e)||this}return Object(a.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"category-bar"},this.props.title))},e}(o.a.Component))},VLio:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pagecomponents-post-page-post-page-tsx-6724c74122a9e5d52a62.js.map