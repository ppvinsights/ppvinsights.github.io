(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5tzQ":function(e,t,a){},TkXe:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return p})),a.d(t,"pageQuery",(function(){return E}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),s=(a("5tzQ"),a("ma3e")),o=a("1wtQ"),i=a("Aq8R"),c=(a("vejA"),a("9eSz")),m=a.n(c),u=a("JuBv"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"home-customerstory"},this.props.stories.map((function(e,t){return l.a.createElement("div",{key:t,className:"customerstory-container "+(t%2==0?"story-1":"story-2")},l.a.createElement("div",{className:"customerstory-icon"},l.a.createElement(u.a,{isOutbound:!0,eventLabel:"outbound",to:e.fields.story.url,className:"customerstory-company"},l.a.createElement(m.a,{title:e.fields.story.url,alt:"Firmenlogo von "+e.fields.story.company,fixed:e.childImageSharp.fixed,className:e.fields.story.className}))),l.a.createElement("div",{className:"customerstory-text"},l.a.createElement("span",null,l.a.createElement("h3",null,l.a.createElement(u.a,{isOutbound:!0,to:e.fields.story.url,className:"customerstory-company"},e.fields.story.company)),l.a.createElement("p",null,e.fields.story.text)),l.a.createElement("span",null,l.a.createElement("span",{className:"customerstory-author"},e.fields.story.author),l.a.createElement("span",{className:"customerstory-position"}," (",e.fields.story.position),null!=e.fields.story.country?l.a.createElement("span",{className:"customerstory-country"},", ",e.fields.story.country):"",l.a.createElement("span",{className:"customerstory-author"},")"))))}))),l.a.createElement("div",{className:"home-customerstory-button-container"},l.a.createElement(u.a,{to:"/kundenmeinungen"},l.a.createElement(s.n,null),"mehr Kundenmeinungen")))},t}(l.a.Component),p=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.stories,t={description:"Artikel, Tipps&Tricks, Online Kurse zu Excel Power Pivot, Power BI und Power Query | Trainings, Workshops und Implementierungsunterstützung durch Macher",title:"Home | "+o.a.site.title,type:"website",url:"/"},a={hypo:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("hypo")>=0})),endress:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("endress")>=0})),flexsec:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("flex")>=0})),ruebezahl:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("rübezahl")>=0}))};return l.a.createElement(i.a,{header:t},l.a.createElement("div",{className:"container-nosidebar"},l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"Durchblick durch Daten – der BI-Blog für Datenanalysen"),l.a.createElement("p",null,"Hier teilen wir unsere Leidenschaft für Datenauswertungen in vielen Artikeln zu Power BI, Excel Power Pivot und Power Query.")),l.a.createElement("div",{className:"section"},l.a.createElement(d,{stories:[a.endress,{childImageSharp:{fixed:a.hypo.childImageSharp.fixed},fields:{story:Object.assign({},a.hypo.fields.story,{text:"Excel Power Pivot ist für uns ein wichtiges Werkzeug in der Risikosteuerung, da wir große Datenmengen effizient analysieren müssen. In der kompetenten Schulung von Herrn Gubbels bekamen wir einen umfassenden Einblick [...]."})}}]})),l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"Artikel für Neueinsteiger"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.a,{to:"/quickstart-eine-erste-auswertung-mit-power-pivot"},"Das Quickstart Tutorial")),l.a.createElement("li",null,l.a.createElement(u.a,{to:"/was-ist-power-pivot"},"Was ist Power Pivot?")),l.a.createElement("li",null,l.a.createElement(u.a,{to:"/was-ist-power-bi"},"Was ist Power BI?")),l.a.createElement("li",null,l.a.createElement(u.a,{to:"/was-ist-power-query"},"Was ist Power Query?")),l.a.createElement("li",null,l.a.createElement(u.a,{to:"/power-pivot-power-bi-oder-power-query"},"Power Pivot, Power BI oder Power Query?"))),l.a.createElement("p",null,"Viele weitere Artikel sind in unseren Blogposts zu den Themen",l.a.createElement("span",null," "),l.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-bi"},"Power BI"),l.a.createElement("span",null,", "),l.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-pivot"},"Power Pivot"),l.a.createElement("span",null,", "),l.a.createElement(u.a,{noPrefetch:!0,to:"/category/power-query"},"Power Query"),".")),l.a.createElement("div",{className:"section"},l.a.createElement(d,{stories:[a.flexsec,a.ruebezahl]})),l.a.createElement("div",{className:"section"},l.a.createElement("h1",null,"Unsere Angebote"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column homepage-offer"},l.a.createElement(u.a,{to:"/trainings"},l.a.createElement("div",null,l.a.createElement(s.c,null)),l.a.createElement("div",null,"Trainings"))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"column homepage-offer"},l.a.createElement(u.a,{to:"/trainings"},l.a.createElement("div",null,l.a.createElement(s.d,null)),l.a.createElement("div",null,"Umsetzung")))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"column homepage-offer"},l.a.createElement(u.a,{to:"/trainings"}," ",l.a.createElement("div",null,l.a.createElement(s.s,null)),l.a.createElement("div",null,"Schnelle Unterstützung")))))),l.a.createElement("div",{className:"section"},l.a.createElement("div",{style:{textAlign:"center",fontSize:"32pt"}},l.a.createElement("a",{href:"tel:+49(0)711/2172878-0"},l.a.createElement("span",{className:"text-primary"},l.a.createElement(s.o,null)),l.a.createElement("span",{className:"text-black",style:{fontWeight:"bold"}}," +49 (0) 711/2172878-0 "))))))},t}(l.a.Component),E=(t.default=function(e){var t=e.data,a=(e.pageContext,e.location);return l.a.createElement(p,{stories:t.stories.edges.map((function(e){return e.node})),location:a})},"2805278427")}}]);
//# sourceMappingURL=component---src-pagecomponents-home-home-tsx-02cf7c7a0a58f83e75bd.js.map