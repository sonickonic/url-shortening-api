(this["webpackJsonpurl-shortening-api"]=this["webpackJsonpurl-shortening-api"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(12),a(6)),i=a(1);var s=function(e){var t=e.url,a=e.handleChange,n=e.handleClick,c=e.error;return r.a.createElement("div",{className:c?"form form--error":"form"},r.a.createElement("input",{className:c?"form__input form__input--error":"form__input",type:"text","aria-label":"URL",placeholder:"Sharten a link here...",value:t,onChange:a}),c&&r.a.createElement("p",{className:"form--error-message"},c),r.a.createElement("button",{onClick:n,className:"btn btn--rectangle"},"Shorten It!"))};var u=function(e){var t=e.card,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"form__card"},r.a.createElement("p",{className:"form__card-link"},t.url),r.a.createElement("div",{className:"form__card-line"}),r.a.createElement("p",{className:"form__card-url"},"https://rel.ink/".concat(t.hashId)),r.a.createElement("button",{onClick:function(){o(!0),navigator.clipboard.writeText("https://rel.ink/".concat(t.hashId))},className:"btn btn--rectangle btn--copy ".concat(l&&"btn--clicked"),type:"submit"},l?"copied":"copy"))},m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),h=m[0],d=m[1],p=Object(n.useState)((function(){var e=localStorage.getItem("cards");return e?JSON.parse(e):[]})),f=Object(i.a)(p,2),b=f[0],g=f[1];Object(n.useEffect)((function(){localStorage.setItem("cards",JSON.stringify(b))}),[b]);return r.a.createElement("div",null,r.a.createElement(s,{url:a,handleChange:function(e){c(e.target.value),e.target.value&&d("")},handleClick:function(){return function(e){return!!e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)}(a)?(fetch("https://rel.ink/api/links/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:a})}).then((function(e){return e.json()})).then((function(e){return g([].concat(Object(o.a)(b),[{url:a,hashId:e.hashid}]))})),c("")):d("Please add a link")},error:h}),b.map((function(e,t){return r.a.createElement(u,{key:t,card:e})})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.cc2c3d9f.chunk.js.map