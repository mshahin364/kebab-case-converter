(this["webpackJsonpkebab-case-converter"]=this["webpackJsonpkebab-case-converter"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(9),a(1));var i=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useRef)(null);return c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Kebab-Case-Converter"),c.a.createElement("small",null,"Converts spaces to hyphens (-) and remove all special characters"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Enter text",className:"input",value:a,onChange:function(e){return r(e.target.value)},id:"input"})),c.a.createElement("div",{className:"d-flex"},c.a.createElement("button",{onClick:function(){return function(e){if(u(""),e){var t=(e=(e=(e=(e=e.replace(/[!@#$%^&*(),.?"':{}|<>+]/g,"")).replace(/[!@#$%^&*(),.?"':{}|<>\s]+$/g,"")).replace(/[!@.*+?^${}()|[\]|(: )'"=\-\\:/]/g,"{#}")).replace(/({#})+/g,"-")).toLowerCase().replace(/ /g,"-"),a="".concat(t[0].toUpperCase()).concat(t.slice(1));u(a)}}(a)},className:"btn-size btn-primary"},"Convert")," ","\xa0",c.a.createElement("button",{onClick:function(){navigator.clipboard.readText().then((function(e){r(e)})).catch((function(e){console.error("Failed to read clipboard contents: ",e)}))},className:"btn-size btn-primary"},"Paste")," ","\xa0",c.a.createElement("button",{onClick:function(){r(""),u("")},className:"btn-size btn-primary"},"Clear")," ","\xa0"),c.a.createElement("div",{style:{paddingTop:"2em"}},"Converted Text:",c.a.createElement("input",{type:"text",id:"output",className:"output",value:s,ref:m,readOnly:!0})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){m.current.select(),document.execCommand("copy")},className:"btn-size btn-primary"},"COPY")))};a(10);var s=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(i,null),c.a.createElement("div",{className:"author-container"},c.a.createElement("span",{className:"author"},"by mshahin364")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b72f4292.chunk.js.map