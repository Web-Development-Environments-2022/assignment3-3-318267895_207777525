(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7060341c"],{"0cb2":function(e,t,r){var n=r("e330"),i=r("7b0b"),a=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,l,p){var v=r+e.length,f=n.length,g=d;return void 0!==l&&(l=i(l),g=u),c(p,g,(function(i,c){var u;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,r);case"'":return o(t,v);case"<":u=l[o(c,1,-1)];break;default:var d=+c;if(0===d)return i;if(d>f){var p=a(d/10);return 0===p?i:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):i}u=n[d-1]}return void 0===u?"":u}))}},"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),s=r("2d00"),c=r("605d"),o=a("reduce"),u=!c&&s>79&&s<83;n({target:"Array",proto:!0,forced:!o||u},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c65b"),i=r("825a"),a=r("1626"),s=r("c6b6"),c=r("9263"),o=TypeError;e.exports=function(e,t){var r=e.exec;if(a(r)){var u=n(r,e,t);return null!==u&&i(u),u}if("RegExp"===s(e))return n(c,e,t);throw o("RegExp#exec called on incompatible receiver")}},"23f6":function(e,t,r){"use strict";var n=r("999a"),i=r.n(n);i.a},3511:function(e,t){var r=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw r("Maximum allowed index exceeded");return e}},5319:function(e,t,r){"use strict";var n=r("2ba4"),i=r("c65b"),a=r("e330"),s=r("d784"),c=r("d039"),o=r("825a"),u=r("1626"),d=r("5926"),l=r("50c4"),p=r("577e"),v=r("1d80"),f=r("8aa5"),g=r("dc4a"),h=r("0cb2"),m=r("14c3"),b=r("b622"),x=b("replace"),k=Math.max,_=Math.min,$=a([].concat),w=a([].push),I=a("".indexOf),y=a("".slice),C=function(e){return void 0===e?e:String(e)},F=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),O=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var a=L?"$":"$0";return[function(e,r){var n=v(this),a=void 0==e?void 0:g(e,x);return a?i(a,e,n,r):i(t,p(n),e,r)},function(e,i){var s=o(this),c=p(e);if("string"==typeof i&&-1===I(i,a)&&-1===I(i,"$<")){var v=r(t,s,c,i);if(v.done)return v.value}var g=u(i);g||(i=p(i));var b=s.global;if(b){var x=s.unicode;s.lastIndex=0}var F=[];while(1){var L=m(s,c);if(null===L)break;if(w(F,L),!b)break;var O=p(L[0]);""===O&&(s.lastIndex=f(c,l(s.lastIndex),x))}for(var j="",T=0,M=0;M<F.length;M++){L=F[M];for(var E=p(L[0]),A=k(_(d(L.index),c.length),0),R=[],S=1;S<L.length;S++)w(R,C(L[S]));var W=L.groups;if(g){var z=$([E],R,A,c);void 0!==W&&w(z,W);var J=p(n(i,void 0,z))}else J=h(E,c,A,R,W,i);A>=T&&(j+=y(c,T,A)+J,T=A+E.length)}return j+y(c,T)}]}),!O||!F||L)},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center recipe-image",attrs:{src:e.recipe.image}}),e.recipe.hasWatched&&!this.$route.params.private?r("div",[r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.watched}}),r("label",[e._v("You already watched this recipe")])]):e._e()]),r("div",{staticClass:"recipe-body"},[r("b-row",{staticClass:"about-row"},[this.$route.params.private?e._e():r("b-col",[r("img",{staticClass:"icon-img like-icon more-icon",attrs:{src:this.likeIcon},on:{click:function(t){return e.addToFavorites()}}}),r("label",[e._v(e._s(e.likeText))])]),r("b-col",[r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.readyInMinutes}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" min ")]),r("b-col",[e._v(" "+e._s(e.recipe.servings)+" "),r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.dishes}})]),this.$route.params.private?e._e():r("b-col",[e._v(" "+e._s(e.recipe.aggregateLikes)+" "),r("img",{staticClass:"icon-img more-icon",attrs:{src:this.$root.store.iconsLinks.thumbs_up}})]),r("b-col",[e.recipe.vegan?r("img",{staticClass:"icon-img"}):e._e(),e.recipe.glutenFree?r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.glutenFree}}):r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.gluten}}),e.recipe.vegeterian?r("img",{staticClass:"icon-img",attrs:{src:this.$root.store.iconsLinks.vegeterian}}):e._e()])],1),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("h3",[e._v("Ingredients:")]),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[r("h3",[e._v("Instructions:")]),r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])],1)]):e._e()])},i=[],a=r("c7eb"),s=r("2909"),c=r("1da1"),o=(r("ac1f"),r("5319"),r("13d5"),r("d3b7"),r("d81d"),r("b0c0"),r("99af"),{data:function(){return{recipe:null,likeIcon:this.$root.store.iconsLinks.notFavorite,likeText:"Add to Favorites"}},created:function(){var e=this;return Object(c["a"])(Object(a["a"])().mark((function t(){var r,n,i,c,o,u,d,l,p,v,f,g,h,m,b,x,k,_,$,w;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,t.prev=1,!e.$route.params["private"]){t.next=9;break}return t.next=5,e.axios.get(e.$root.store.server_domain+"/users/"+e.$route.params.recipeId,{params:{recipe_id:e.$route.params.recipeId}});case 5:r=t.sent,console.log(r.data),t.next=12;break;case 9:return t.next=11,e.axios.get(e.$root.store.server_domain+"/recipes/"+e.$route.params.recipeId,{params:{recipe_id:e.$route.params.recipeId}});case 11:r=t.sent;case 12:console.log(r),200!==r.status&&e.$router.replace("/NotFound"),t.next=21;break;case 16:return t.prev=16,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 21:console.log(r.data),n=r.data,i=n.id,c=n.title,o=n.image,u=n.readyInMinutes,d=n.aggregateLikes,l=n.glutenFree,p=n.vegan,v=n.vegetarian,f=n.hasWatched,g=n.hasFavorited,h=n.servings,m=n.analyzedInstructions,b=n.instructions,x=n.extendedIngredients,k=n.recipeOwner,_=n.timePreparedInFamily,$=e.$route.params["private"]?b:m.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat(Object(s["a"])(e),Object(s["a"])(t))}),[]),w={instructions:b,_instructions:$,analyzedInstructions:m,extendedIngredients:x,aggregateLikes:d,readyInMinutes:u,image:o,title:c,servings:h,vegan:p,vegetarian:v,glutenFree:l,hasWatched:f,hasFavorited:g,recipeOwner:k,timePreparedInFamily:_,id:i},e.recipe=w,e.recipe.hasFavorited&&e.changeToLikeIcon(),t.next=32;break;case 29:t.prev=29,t.t1=t["catch"](0),console.log(t.t1);case 32:case"end":return t.stop()}}),t,null,[[0,29],[1,16]])})))()},beforeDestroy:function(){var e=this;return Object(c["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/users/watched",{recipe_id:e.recipe.id});case 3:response=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{changeToLikeIcon:function(){this.likeIcon=this.$root.store.iconsLinks.favorite,this.likeText="Favorited!"},addToFavorites:function(){var e=this;return Object(c["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipe_id:e.recipe.id});case 2:r=t.sent,201==r.status?(e.recipe.hasFavorited=!0,e.changeToLikeIcon()):console.log("error accured while favorite "+r.status);case 4:case"end":return t.stop()}}),t)})))()}}}),u=o,d=(r("23f6"),r("2877")),l=Object(d["a"])(u,n,i,!1,null,"4b30a731",null);t["default"]=l.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"999a":function(e,t,r){},"99af":function(e,t,r){"use strict";var n=r("23e7"),i=r("d039"),a=r("e8b5"),s=r("861d"),c=r("7b0b"),o=r("07fa"),u=r("3511"),d=r("8418"),l=r("65f0"),p=r("1dde"),v=r("b622"),f=r("2d00"),g=v("isConcatSpreadable"),h=f>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=p("concat"),b=function(e){if(!s(e))return!1;var t=e[g];return void 0!==t?!!t:a(e)},x=!h||!m;n({target:"Array",proto:!0,arity:1,forced:x},{concat:function(e){var t,r,n,i,a,s=c(this),p=l(s,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?s:arguments[t],b(a))for(i=o(a),u(v+i),r=0;r<i;r++,v++)r in a&&d(p,v,a[r]);else u(v+1),d(p,v++,a);return p.length=v,p}})},d58f:function(e,t,r){var n=r("59ed"),i=r("7b0b"),a=r("44ad"),s=r("07fa"),c=TypeError,o=function(e){return function(t,r,o,u){n(r);var d=i(t),l=a(d),p=s(d),v=e?p-1:0,f=e?-1:1;if(o<2)while(1){if(v in l){u=l[v],v+=f;break}if(v+=f,e?v<0:p<=v)throw c("Reduce of empty array with no initial value")}for(;e?v>=0:p>v;v+=f)v in l&&(u=r(u,l[v],v,d));return u}};e.exports={left:o(!1),right:o(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("e330"),i=r("cb2d"),a=r("9263"),s=r("d039"),c=r("b622"),o=r("9112"),u=c("species"),d=RegExp.prototype;e.exports=function(e,t,r,l){var p=c(e),v=!s((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=v&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!v||!f||r){var g=n(/./[p]),h=t(p,""[e],(function(e,t,r,i,s){var c=n(e),o=t.exec;return o===a||o===d.exec?v&&!s?{done:!0,value:g(t,r,i)}:{done:!0,value:c(r,t,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(d,p,h[1])}l&&o(d[p],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-7060341c.02e1487d.js.map