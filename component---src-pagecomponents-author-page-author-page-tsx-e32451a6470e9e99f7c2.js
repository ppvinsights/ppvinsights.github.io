(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"10Je":function(t,e,r){"use strict";r.r(e),r.d(e,"AuthorPage",(function(){return l})),r.d(e,"pageQuery",(function(){return f}));r("3nLz"),r("zGcK");var o=r("q1tI"),a=r.n(o),n=r("XMMh"),s=r("Aq8R"),p=r("+rwk"),c=r("xFIP"),i=r("9uds"),u=r("Gpdm"),h=r("cCPr"),m=r("OKhy");var l=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.data.posts.edges.map((function(t){return t.node})).sort((function(t,e){return t.fields.timestamp>e.fields.timestamp?-1:1})),e=this.props.data.categories.edges.map((function(t){return t.node})),r={url:Object(m.h)("author",this.props.context.author.frontmatter.slug),description:"Posts von "+this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname,type:"object",title:this.props.context.author.frontmatter.firstname+" "+this.props.context.author.frontmatter.lastname+", Autor bei Powerpivot Insights | Durchblick durch Daten",tags:["author",this.props.context.author.frontmatter.firstname,this.props.context.author.frontmatter.lastname],image:this.props.data.avatar.childImageSharp.fixed.src};return a.a.createElement(s.b,{header:r,sidebar:a.a.createElement(p.a,{isFixed:!1},a.a.createElement(c.a,null),a.a.createElement(i.a,null))},a.a.createElement(u.a,{title:"Author"}),a.a.createElement(n.a,{author:this.props.context.author,avatar:this.props.data.avatar}),a.a.createElement("hr",null),a.a.createElement(h.a,{posts:t,categories:Object(m.f)(e),authors:[this.props.context.author]}))},o}(a.a.Component);e.default=function(t){var e=t.data,r=t.pageContext,o=t.location;return a.a.createElement(l,{data:e,context:r,location:o})};var f="1678653738"},cCPr:function(t,e,r){"use strict";var o=r("q1tI"),a=r.n(o),n=r("OKhy"),s=r("Wbzz"),p=(r("j3n2"),r("Kxvw")),c=r("VOVi");var i=function(t){var e,r;function o(e){return t.call(this,e)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.post;return a.a.createElement("div",{className:"post-preview"},a.a.createElement("div",null,a.a.createElement(p.a,{frontmatter:t.frontmatter,commentCnt:t.fields.commentCnt,author:this.props.author,categories:this.props.categories})),a.a.createElement("div",{className:"post-content"},a.a.createElement(s.Link,{to:t.frontmatter.slug},a.a.createElement(c.a,{content:this.props.post.fields.abstract?this.props.post.fields.abstract:this.props.post.excerpt}," "))))},o}(a.a.Component);r("ewL5");var u=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return a.a.createElement("div",{className:"empty-content-container"},"Hier gibt es noch keine Inhalte")},o}(a.a.Component);r.d(e,"a",(function(){return h}));var h=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this;return a.a.createElement("div",null,this.props.posts.map((function(e,r){return a.a.createElement("div",{key:r},a.a.createElement(i,{post:e,categories:e.frontmatter.categories.map((function(e){return Object(n.c)(e,t.props.categories)})),author:Object(n.b)(e.frontmatter.author,t.props.authors)}))})),0==this.props.posts.length?a.a.createElement(u,null):"")},o}(a.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-author-page-author-page-tsx-e32451a6470e9e99f7c2.js.map