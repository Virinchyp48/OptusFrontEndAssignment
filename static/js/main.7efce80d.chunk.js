(this["webpackJsonpvrinchy-project"]=this["webpackJsonpvrinchy-project"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),s=c(15),i=c.n(s),o=(c(24),c(25),c(17)),b=c(18),l=c(4),j=c(16),u=c.n(j),d=function(e){var t=e.bar;return Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"progress-done",style:{opacity:1,width:"".concat(t.bar,"%"),background:t.background},children:Object(n.jsxs)("span",{style:{color:t.color},children:[t.bar,"%"]})})})},h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),i=Object(l.a)(s,2),j=i[0],h=i[1],O=Object(a.useState)(0),f=Object(l.a)(O,2),g=f[0],m=f[1],p=Object(a.useState)(100),v=Object(l.a)(p,2),x=v[0],N=v[1];Object(a.useEffect)((function(){k()}),[]);var k=function(){u.a.get("https://pb-api.herokuapp.com/bars").then((function(e){var t=[];e.data.bars.forEach((function(e){var c={bar:e,background:"lightblue",color:"black"};"number"===typeof e&&t.push(c)})),t&&r(t),e.data.buttons&&h(e.data.buttons),e.data.limit&&N(e.data.limit)})).catch((function(e){alert(e)}))};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{className:"text-center","data-testid":"heading",children:"Progress Bars Demo"}),Object(n.jsxs)("div",{className:"row bars",children:[Object(n.jsx)("div",{className:"col-sm"}),Object(n.jsxs)("div",{className:"col-sm",children:[c.length>0&&c.map((function(e,t){return Object(n.jsxs)("div",{className:"col",children:["number"===typeof e.bar&&Object(n.jsx)(d,{bar:e}),"number"!==typeof e.bar&&Object(n.jsx)("div",{children:"Error Loading Progressbar .. Please Refresh and try again"})]},t)})),0===c.length&&Object(n.jsx)("div",{children:"Loading...."}),Object(n.jsx)("div",{className:"row buttons",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:c.length>0&&Object(n.jsx)("select",{name:"bar",value:g,onChange:function(e){!function(e){m(e.target.value)}(e)},children:c.map((function(e,t){return Object(n.jsxs)("option",{value:t,className:"option",children:["Progress # ",t+1]},t)}))})}),j.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"buttn",onClick:function(){!function(e){var t=Object(b.a)({},c[g]);t.bar=t.bar+e,t.bar>=x?(t.background="red",t.color="white"):(t.bar<=0&&(t.bar=0),t.background="lightblue",t.color="black");var n=Object(o.a)(c);n[g]=t,r(n)}(e)},children:e})},t)}))]})})]}),Object(n.jsx)("div",{className:"col"})]})]})};var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.7efce80d.chunk.js.map