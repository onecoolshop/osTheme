(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{512:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n(0),r=n.n(a),c=n(1),o=n(92),s=n(7),l=n(8),u=n(10),d=n(9),m=n(11),g=n(4),b=n(515),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.title,o=t.backgroundImg,s=t.link;return r.a.createElement("div",{className:n.iAmDiv},r.a.createElement(c.i,{container:!0,alignItems:"center",justify:"center",className:n.root,style:{backgroundImage:"url("+o+")"},onClick:function(){return Object(i.i)(s,e.props.history)}},r.a.createElement(c.r,{variant:"h4",className:n.title},a)))}}]),t}(r.a.Component),h=Object(b.a)(Object(g.withStyles)(function(e){return{root:{height:"400px",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#d3dbe2",cursor:"pointer",marginBottom:35},title:{color:"white",fontWeight:"900",textAlign:"center"},iAmDiv:{}}})(p)),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.left,o=t.right,s=t.link;return r.a.createElement(c.i,{container:!0,alignItems:"center",className:n.root,onClick:function(){return Object(i.i)(s,e.props.history)}},r.a.createElement(c.i,{item:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"center",sm:5},a),r.a.createElement(c.i,{item:!0,sm:7,container:!0,direction:"column",justify:"flex-end",alignItems:"center"},o))}}]),t}(r.a.Component),k=Object(b.a)(Object(g.withStyles)(function(e){return{root:{backgroundColor:"#F6F6F6",cursor:"pointer",marginBottom:35}}})(f)),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.data;return n.length?r.a.createElement(c.i,{container:!0,alignItems:"stretch",className:t.root},r.a.createElement(c.i,{item:!0,md:6,className:t.left},r.a.createElement(h,{link:"/feeds/"+n[0].id,backgroundImg:n[0].sections[0].medias[0].url,title:Object(i.l)(n[0].sections[0].title)}),n[1]&&r.a.createElement(k,{link:"/feeds/"+n[1].id,left:r.a.createElement("div",{style:{height:"300px",backgroundSize:"cover",backgroundImage:"url("+n[1].sections[0].medias[0].url+")",width:"100%",backgroundPosition:"center"}}),right:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(c.r,{style:{padding:"0 20px"},variant:"subtitle1"},n[1].sections[0].title,"      "),r.a.createElement("br",null),r.a.createElement(c.r,{style:{padding:"0 20px",color:"rgb(159, 159, 159)"}},n[1].sections[0].description))})),r.a.createElement(c.i,{item:!0,md:6,className:t.right},n[2]&&r.a.createElement(k,{link:"/feeds/"+n[2].id,right:r.a.createElement("div",{style:{height:"300px",backgroundSize:"cover",backgroundImage:"url("+n[2].sections[0].medias[0].url+")",width:"100%",backgroundPosition:"center"}}),left:r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(c.r,{style:{padding:"0 20px"},variant:"subtitle1"},n[2].sections[0].title),r.a.createElement("br",null),r.a.createElement(c.r,{style:{padding:"0 20px",color:"rgb(159, 159, 159)"}},n[2].sections[0].description))}),n[3]&&r.a.createElement(h,{link:"/feeds/"+n[3].id,title:Object(i.l)(n[3].sections[0].title),backgroundImg:n[3].sections[0].medias[0].url}))):null}}]),t}(r.a.Component),E=Object(g.withStyles)(function(e){return{root:{},smallDiv:{height:"200px",backgroundPosition:"center",backgroundRepeat:"no-repeat"},bigDiv:{height:"400px",backgroundPosition:"center",backgroundRepeat:"no-repeat"},left:{paddingRight:20,paddingLeft:30},right:{paddingLeft:20,paddingRight:30}}})(j);t.default=function(e){var t=e.hasFeedsToShow,n=e.latestArticle,s=e.feeds,l=e.history;return t&&r.a.createElement(a.Fragment,null,r.a.createElement(c.i,{item:!0,xs:12},r.a.createElement(o.a,{data:n.map(function(e){return e.sections[0].medias[0]}),title:n.map(function(e){return e.sections[0].title})||"",onClick:function(){return Object(i.i)("/feeds/".concat(n.id),l)}})),r.a.createElement(c.i,{item:!0,xs:12,style:{marginTop:80}},r.a.createElement(E,{data:s.filter(function(e,t){return Object(i.g)(e.sections)})})))}}}]);
//# sourceMappingURL=1.2a09699d.chunk.js.map