(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"800c53e9"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"82942d73"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u=(r("034f"),r("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),l=c.exports,s=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._v(" home ")])},p=[],d={name:"Home"},m=d,g=Object(u["a"])(m,f,p,!1,null,null,null),h=g.exports;n["a"].use(s["a"]);var b=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}}],v=new s["a"]({routes:b});v.beforeEach((function(e,t,r){var n=localStorage.getItem("permission");n||"/login"===e.path?r():r("/login?redirect=".concat(e.path))}));var y=v,w=r("2f62"),j=(r("e9c4"),r("2ef0")),O={root:null,role:null,roles:[]},S={getRoot:function(e){return e.root},getCurrentRoleCode:function(e){return e.role.code},getRole:function(e){return e.role||{}},getRoles:function(e){return e.roles||[]}},_={initLocalStorage:function(e,t){console.log("%cstore usr permissions init localStorage:","color:yellow",t),e.root=t,localStorage.setItem("permission",JSON.stringify(t))},initRoles:function(e,t){console.log("%cstore usr permissions init roles:","color:yellow",t),e.roles=t,e.role=Object(j["get"])(t,"0",null)}},k={syncPermissions:function(e,t){return console.log("%cstore usr permissions:","color:yellow",e,t),e.commit("initLocalStorage",Object(j["pick"])(t,["token","name","deptId","deptName","deptType","userName"])),e.commit("initRoles",Object(j["omitBy"])(t.roles,(function(e){return"config_role"===e.code}))),e.state.role},syncRole:function(e,t){e.state.role=t}},P={state:O,getters:S,mutations:_,actions:k};n["a"].use(w["a"]);var E=new w["a"].Store({modules:{permissions:P}}),x=r("bc3a"),C=r.n(x);C.a.defaults.timeout=1e6,C.a.defaults.baseURL="https://api.airtable.com/v0/apprRF94p1l4Ob6kd",C.a.interceptors.request.use((function(e){e.headers["Authorization"]="Bearer keyRlYzAKj8CALFY6";var t=localStorage.getItem("token");return t&&(e.headers["userId"]=t),e}),(function(e){return console.error("error axios",e),Promise.reject(e)})),C.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var A=C.a;n["a"].config.productionTip=!1,n["a"].prototype.$axios=A,new n["a"]({router:y,store:E,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.e3dd2a30.js.map