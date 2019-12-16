(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{851:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a.n(n),l=a(50),c=a(0),o=a.n(c),u=a(43),m=a(205),i=a(213),s=a(785),d=a(207),p=a(9),E=a(40),f=a(103),O=a(145),I=a(6),b=a(17),T=a(10),y=Object(m.a)({wrapper:{padding:"0 9%"},table:{width:"100%",backgroundColor:"#f7f7f7",boxShadow:"0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",borderRadius:4},headerColumn:{color:"rgba(0, 0, 0, 0.54)"},footerColumn:{borderTop:"1px solid rgb(224, 224, 224)"},placeholder:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"35px 0"}}),h={},C=function(e){var t=y(),a=e.items,n=e.history;return null===a?o.a.createElement(O.a,null):o.a.createElement("div",null,o.a.createElement(f.a,{title:"Shopping Cart",classes:{}}),o.a.createElement("div",{className:t.wrapper},o.a.createElement("table",{className:t.table},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.IMAGE})),o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.PRODUCT})),o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.PRICE})),o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.QUANTITY})),o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.TOTAL})),o.a.createElement("td",{className:t.headerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.REMOVE})))),o.a.createElement("tbody",null,a.length>0?a.map(function(a,n){return o.a.createElement("tr",{key:n},o.a.createElement("td",null,o.a.createElement("img",{src:Object(p.d)(a.media[0]),className:t.img,height:"65"})),o.a.createElement("td",null,o.a.createElement("div",null,a.name),o.a.createElement("div",null,a.variant)),o.a.createElement("td",null,o.a.createElement(s.a,{value:a.price,thousandSeparator:!0,prefix:"HK$",displayType:"text"})),o.a.createElement("td",null,o.a.createElement("input",{type:"number",name:a.id,value:a.qty,onChange:function(t){return e.updateItemQty(t.target.name,t.target.value)}})),o.a.createElement("td",null,o.a.createElement(s.a,{value:a.qty*a.price,thousandSeparator:!0,prefix:"HK$",displayType:"text"})),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:t.binIcon+" icon-bin",onClick:function(t){return e.deleteItem(a.id)}})))}):o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6"},o.a.createElement("div",{className:t.placeholder},o.a.createElement("div",null,o.a.createElement(b.a,{keyOfI18n:T.a.CHECKOUT_YOU_HAVE_NOT_PUT_ANY_ITEMS_IN_CART})),o.a.createElement("div",null,o.a.createElement(b.a,{keyOfI18n:T.a.GOTO}),"\xa0",o.a.createElement("button",{type:"button",onClick:function(t){return e.history.push("/products")}},o.a.createElement(b.a,{keyOfI18n:T.a.PRODUCTS}))))))),a.length>0&&o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"4",className:t.footerColumn},o.a.createElement(b.a,{keyOfI18n:T.a.TOTAL})),o.a.createElement("td",{className:t.footerColumn},o.a.createElement(s.a,{value:a.reduce(function(e,t){return e+t.price*t.qty},0),thousandSeparator:!0,prefix:"HK$",displayType:"text"})),o.a.createElement("td",{className:t.footerColumn},o.a.createElement("button",{type:"button",onClick:function(e){return n.push("/checkout")}},o.a.createElement(b.a,{keyOfI18n:T.a.CHECKOUT}))))))))};C.defaultProps={},t.default=Object(i.a)(Object(u.b)(function(e){return{items:e.cart.items}},function(e,t){return{deleteItem:function(){var a=Object(l.a)(r.a.mark(function a(n){var l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=t.cookies.get("cart"),a.next=3,e({type:I.e,payload:{id:n}});case 3:l&&E.a.Checkout.deleteItem(l,n).then(function(e){e.data.result?(d.b.success("Item deleted.",{position:d.b.POSITION.TOP_RIGHT}),h[n]&&(clearTimeout(h[n]),delete h[n])):d.b.error((e.data.messages||[]).join("\n"),{position:d.b.POSITION.TOP_RIGHT})}).catch(function(e){d.b.error(e.message,{position:d.b.POSITION.TOP_RIGHT})});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),updateItemQty:function(){var a=Object(l.a)(r.a.mark(function a(n,l){var c;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=t.cookies.get("cart"),a.next=3,e({type:I.g,payload:{id:n,qty:l}});case 3:h[n]&&(h[n]=clearTimeout(h[n])),h[n]=setTimeout(function(){h[n]=clearTimeout(h[n]),c&&E.a.Checkout.saveItem(c,n,l).then(function(e){e.data.result?d.b.success("Item updated.",{position:d.b.POSITION.TOP_RIGHT}):d.b.error((e.data.messages||[]).join("\n"),{position:d.b.POSITION.TOP_RIGHT})}).catch(function(e){d.b.error(e.message,{position:d.b.POSITION.TOP_RIGHT})})},550);case 5:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()}})(C))}}]);
//# sourceMappingURL=10.b6668cd7.chunk.js.map