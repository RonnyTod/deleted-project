(function(e){function t(t){for(var r,u,s=t[0],i=t[1],c=t[2],p=0,l=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/deleted-project/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),c=i.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("label",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],attrs:{cols:"48",id:"input",name:"input",rows:"16"},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}})]),n("label",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.outputText,expression:"outputText"}],attrs:{cols:"48",id:"output",name:"output",rows:"16"},domProps:{value:e.outputText},on:{input:function(t){t.target.composing||(e.outputText=t.target.value)}}})])])},l=[];n("d81d"),n("4d63"),n("ac1f"),n("25f0"),n("5319");function f(e,t){return Math.round(e-.5+Math.random()*(t-e+1))}var m={name:"home",components:{},data:function(){return{inputText:""}},computed:{outputText:function(){return this.deleteSwearwords(this.inputText)}},created:function(){this.$store.dispatch("getSwearwords")},methods:{deleteSwearwords:function(e){var t=this;return this.$store.state.swearwords.map((function(n){e=e.replace(new RegExp("".concat(n),"g"),(function(){return t.$store.state.deletedWords[f(0,1)]}))})),e}}},w=m,v=(n("21bb"),Object(u["a"])(w,p,l,!1,null,null,null)),h=v.exports;r["a"].use(d["a"]);var b=[{path:"/",name:"home",component:h}],x=new d["a"]({mode:"history",base:"/deleted-project/",routes:b}),g=x,y=(n("d3b7"),n("2f62"));r["a"].use(y["a"]);var j=new y["a"].Store({state:{swearwords:[],deletedWords:["[УДАЛЕНО]","[ДАННЫЕ УДАЛЕНЫ]"]},mutations:{setSwearwords:function(e,t){e.swearwords=t}},actions:{getSwearwords:function(e){var t=e.commit;fetch("https://raw.githubusercontent.com/RonnyTod/deleted-project-data/master/swearwords.json").then((function(e){return e.json()})).then((function(e){t("setSwearwords",e)}))}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:g,store:j,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.f264a2d4.js.map