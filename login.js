!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"event",function(){return i}),n.d(t,"signOut",function(){return r}),n.d(t,"default",function(){return o});const i=(e,t)=>new CustomEvent(e,{detail:t,bubbles:!0}),r=()=>{return gapi.auth2.getAuthInstance().signOut()};class o extends HTMLElement{connectedCallback(){const e=this.getAttribute("client-id")||"";this.innerHTML='\n      <div id="signin2"></div>\n    ',this._addScript(e)}_addScript(e){const t=Object.assign(document.createElement("script"),{src:"https://apis.google.com/js/platform.js",onload:()=>this._renderButton(e)});document.head.appendChild(t)}_renderButton(e){const t=new Promise(e=>gapi.load("auth2",()=>e()));t.then(()=>gapi.auth2.init({client_id:e})),t.then(()=>gapi.signin2.render("signin2",{client_id:e,scope:"profile email",width:240,height:50,longtitle:!0,onsuccess:this._onSuccess.bind(this),onfailure:this._onFailure.bind(this),ux_mode:"popup"}))}_onFailure(e){new Promise(e=>e()).then(()=>({error:e})).then(e=>i("signin-error",e)).then(e=>this.dispatchEvent(e))}_approve(e){new Promise(e=>e()).then(()=>e.getBasicProfile()).then(e=>({profile:e})).then(t=>Object.assign(t,{token:e.getAuthResponse().id_token})).then(e=>i("signin-success",e)).then(e=>this.dispatchEvent(e))}_reject(){gapi.auth2.getAuthInstance().signOut().then(()=>"Not a valid domain").then(e=>({message:e,domain:!1})).then(e=>i("signin-error",e)).then(e=>this.dispatchEvent(e))}_onSuccess(e){const t=e.getHostedDomain();["bitrock.it","databiz.it","radicalbit.io"].filter(e=>t===e).length?this._approve(e):this._reject()}}customElements.define("databiz-login",o)}]);
//# sourceMappingURL=login.js.map