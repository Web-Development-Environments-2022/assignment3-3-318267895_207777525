(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf6407c"],{1065:function(e,t,r){"use strict";var n=r("381a"),i=r.n(n);i.a},3511:function(e,t){var r=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw r("Maximum allowed index exceeded");return e}},"381a":function(e,t,r){},"498a2":function(e,t,r){"use strict";var n=r("23e7"),i=r("58a8").trim,s=r("c8d2");n({target:"String",proto:!0,forced:s("trim")},{trim:function(){return i(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("e330"),i=r("1d80"),s=r("577e"),o=r("5899"),a=n("".replace),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),m=function(e){return function(t){var r=s(i(t));return 1&e&&(r=a(r,c,"")),2&e&&(r=a(r,u,"")),r}};e.exports={start:m(1),end:m(2),trim:m(3)}},"9b7f":function(e,t,r){"use strict";var n=r("f53e"),i=r.n(n);i.a},a434:function(e,t,r){"use strict";var n=r("23e7"),i=r("7b0b"),s=r("23cb"),o=r("5926"),a=r("07fa"),l=r("3511"),c=r("65f0"),u=r("8418"),m=r("083a"),f=r("1dde"),d=f("splice"),g=Math.max,b=Math.min;n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var r,n,f,d,p,v,h=i(this),x=a(h),y=s(e,x),k=arguments.length;for(0===k?r=n=0:1===k?(r=0,n=x-y):(r=k-2,n=b(g(o(t),0),x-y)),l(x+r-n),f=c(h,n),d=0;d<n;d++)p=y+d,p in h&&u(f,d,h[p]);if(f.length=n,r<n){for(d=y;d<x-n;d++)p=d+n,v=d+r,p in h?h[v]=h[p]:m(h,v);for(d=x;d>x-n+r;d--)m(h,d-1)}else if(r>n)for(d=x-n;d>y;d--)p=d+n-1,v=d+r-1,p in h?h[v]=h[p]:m(h,v);for(d=0;d<r;d++)h[d+y]=arguments[d+2];return h.length=x-n+r,f}})},a62a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("RecipeCreator"),r("div",{attrs:{id:"div-added"}},[r("RecipePreviewList",{attrs:{title:"Added Recipes"}})],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrapper"}},[r("div",{attrs:{id:"openModalDiv"}},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-id",modifiers:{"modal-id":!0}}],attrs:{id:"openModal"}},[e._v(" + Add New Recipe")])],1),r("b-container",{staticClass:"container"},[r("b-modal",{attrs:{id:"modal-id",title:"Create New Recipe",size:"xl","ok-only":""}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{attrs:{id:"input-group-title","label-cols-sm":"4",label:"Title:","label-for":"title"}},[r("b-form-input",{attrs:{id:"title",type:"text"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),r("b-col",{attrs:{cols:"6"}},[r("b-row",[r("b-col",{attrs:{cols:"3"}},[r("label",[e._v("Diet:")])]),r("b-col",{attrs:{cols:"3"}},[r("b-form-group",{attrs:{id:"input-group-vegan ","label-for":"vegan"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vegan,expression:"form.vegan"}],attrs:{id:"vegan",type:"checkbox"},domProps:{checked:Array.isArray(e.form.vegan)?e._i(e.form.vegan,null)>-1:e.form.vegan},on:{change:function(t){var r=e.form.vegan,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(e.form,"vegan",r.concat([s])):o>-1&&e.$set(e.form,"vegan",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"vegan",i)}}}),r("label",{staticClass:"checkboxes-diet-label",attrs:{for:"vegan"}},[e._v("Vegan")])])],1),r("b-col",{attrs:{cols:"3"}},[r("b-form-group",{attrs:{id:"input-group-vegetarian ","label-for":"vegetarian"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vegetarian,expression:"form.vegetarian"}],attrs:{id:"vegetarian",type:"checkbox"},domProps:{checked:Array.isArray(e.form.vegetarian)?e._i(e.form.vegetarian,null)>-1:e.form.vegetarian},on:{change:function(t){var r=e.form.vegetarian,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(e.form,"vegetarian",r.concat([s])):o>-1&&e.$set(e.form,"vegetarian",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"vegetarian",i)}}}),r("label",{staticClass:"checkboxes-diet-label",attrs:{for:"vegetarian"}},[e._v("Vegetarian")])])],1),r("b-col",{attrs:{cols:"3"}},[r("b-form-group",{attrs:{id:"input-group-glutenFree ","label-for":"glutenFree"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.glutenFree,expression:"form.glutenFree"}],attrs:{id:"glutenFree",type:"checkbox"},domProps:{checked:Array.isArray(e.form.glutenFree)?e._i(e.form.glutenFree,null)>-1:e.form.glutenFree},on:{change:function(t){var r=e.form.glutenFree,n=t.target,i=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(e.form,"glutenFree",r.concat([s])):o>-1&&e.$set(e.form,"glutenFree",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.form,"glutenFree",i)}}}),r("label",{staticClass:"checkboxes-diet-label",attrs:{for:"glutenFree"}},[e._v("Gluten Free")])])],1)],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{attrs:{id:"input-group-readyInMinutes","label-cols-sm":"4",label:"Ready In Minutes:","label-for":"readyInMinutes"}},[r("b-form-input",{attrs:{id:"readyInMinutes",type:"number"},model:{value:e.form.readyInMinutes,callback:function(t){e.$set(e.form,"readyInMinutes",t)},expression:"form.readyInMinutes"}})],1)],1),r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{attrs:{id:"input-group-servings","label-cols-sm":"4",label:"Servings:","label-for":"servings"}},[r("b-form-input",{attrs:{id:"servings",type:"number"},model:{value:e.form.servings,callback:function(t){e.$set(e.form,"servings",t)},expression:"form.servings"}})],1)],1)],1),r("b-form-group",{attrs:{id:"input-group-image","label-cols-sm":"2",label:"Image URL:","label-for":"image"}},[r("b-form-input",{attrs:{id:"image",type:"text"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("label",[e._v("Ingredients:")])]),r("b-col",{attrs:{cols:"8"}}),r("b-col",{staticClass:"btn-add",attrs:{cols:"2"}},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.onAddIngredient}},[e._v("+ Add Ingredient")])],1)],1),r("ol",e._l(e.numberOfIngredients,(function(t){return r("li",{key:t,staticClass:"copy-row"},[r("b-col",{attrs:{cols:"12"}},[r("b-row",[r("b-col",{attrs:{cols:"5"}},[r("b-form-group",{attrs:{id:"input-group-ingredientName","label-cols-sm":"6",label:"Ingredient Name:","label-for":"ingredientName"}},[r("b-form-input",{attrs:{id:"ingredientName",type:"text"},model:{value:e.form.ingredients[t-1].ingredientName,callback:function(r){e.$set(e.form.ingredients[t-1],"ingredientName",r)},expression:"form.ingredients[index-1].ingredientName"}})],1)],1),r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{id:"input-group-measuringTool","label-cols-sm":"6",label:"Measuring Tool:","label-for":"measuringTool"}},[r("b-form-input",{attrs:{id:"measuringTool",type:"text"},model:{value:e.form.ingredients[t-1].measuringTool,callback:function(r){e.$set(e.form.ingredients[t-1],"measuringTool",r)},expression:"form.ingredients[index-1].measuringTool"}})],1)],1),r("b-col",{attrs:{cols:"3"}},[r("b-form-group",{attrs:{id:"input-group-amount","label-cols-sm":"6",label:"Amount:","label-for":"amount"}},[r("b-form-input",{attrs:{id:"amount",type:"number"},model:{value:e.form.ingredients[t-1].amount,callback:function(r){e.$set(e.form.ingredients[t-1],"amount",r)},expression:"form.ingredients[index-1].amount"}})],1)],1)],1)],1)],1)})),0),r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("label",[e._v("Instructions:")])]),r("b-col",{attrs:{cols:"8"}}),r("b-col",{staticClass:"btn-add",attrs:{cols:"2"}},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:e.onAddInstruction}},[e._v("+ Add Step")])],1)],1),r("ol",e._l(e.numberOfInstructions,(function(t){return r("li",{key:t,staticClass:"copy-row"},[r("b-form-input",{staticClass:"instruction-class",attrs:{id:"instructions",type:"text"},model:{value:e.form.instructions[t-1],callback:function(r){e.$set(e.form.instructions,t-1,r)},expression:"form.instructions[index-1]"}})],1)})),0),r("label",{class:e.msgClass},[e._v(e._s(e.msg))]),r("b-button",{staticClass:"mx-auto w-100 btn-secondary",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Save Recipe ")])],1)],1)],1)],1)},o=[],a=r("2909"),l=r("c7eb"),c=r("1da1"),u=(r("498a2"),r("a434"),{data:function(){return{form:{title:"",readyInMinutes:"",ingredients:[],image:"",vegan:!1,vegetarian:!1,glutenFree:!1,servings:"",instructions:[]},msg:"",msgClass:"error-msg"}},computed:{numberOfIngredients:function(){return this.form.ingredients.length},numberOfInstructions:function(){return this.form.instructions.length}},methods:{onSave:function(){var e=this;return Object(c["a"])(Object(l["a"])().mark((function t(){var r,n,i,s;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.msg="",r=e.ValidateForm(),0!=r.length){t.next=21;break}return t.prev=3,t.next=6,e.axios.post(e.$root.store.server_domain+"/users/added",e.form);case 6:if(n=t.sent,201===n.status){t.next=11;break}throw"";case 11:e.msg="Recipe was saved successfully!",e.msgClass="success-msg";case 13:t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](3),e.msg="A problem accured while saving the recipe.",e.msgClass="error-msg";case 19:t.next=25;break;case 21:for(i="You must fill-in all info in: ",s=0;s<r.length;s++)i+=r[s],s+1!=r.length?i+=", ":i+=".";e.msgClass="error-msg",e.msg=i;case 25:case"end":return t.stop()}}),t,null,[[3,15]])})))()},ValidateForm:function(){var e=[];0===this.form.title.trim().length&&e.push("title"),0===this.form.readyInMinutes.trim().length&&e.push("ready in minutes"),0===this.form.servings.trim().length&&e.push("servings"),0===this.form.image.trim().length&&e.push("image url");var t=Object(a["a"])(this.form.ingredients),r=0;if(this.form.ingredients.length>0){for(var n=0;n<this.form.ingredients.length;n++)0!==this.form.ingredients[n].ingredientName.trim().length||0!==this.form.ingredients[n].measuringTool.trim().length||0!==this.form.ingredients[n].amount.trim().length?(0!==this.form.ingredients[n].ingredientName.trim().length&&0!==this.form.ingredients[n].measuringTool.trim().length&&0!==this.form.ingredients[n].amount.trim().length||e.push("ingredient "+(r+1)),r+=1):t.splice(n,1);this.form.ingredients=t,0===this.form.ingredients.length&&e.push("no ingredients were filled")}else e.push("no ingredients were filled");var i=Object(a["a"])(this.form.instructions);if(this.form.instructions.length>0){for(var s=0;s<this.form.instructions.length;s++)0!==this.form.instructions[s].trim().length||i.splice(s,1);this.form.instructions=i,0===this.form.instructions.length&&e.push("no instructions were filled")}else e.push("no instructions were filled");return e},onAddIngredient:function(){this.form.ingredients.push({ingredientName:"",measuringTool:"",amount:""})},onAddInstruction:function(){this.form.instructions.push("")}}}),m=u,f=(r("9b7f"),r("2877")),d=Object(f["a"])(m,s,o,!1,null,null,null),g=d.exports,b=r("99d8"),p={components:{RecipePreviewList:b["a"],RecipeCreator:g}},v=p,h=(r("1065"),Object(f["a"])(v,n,i,!1,null,null,null));t["default"]=h.exports},c8d2:function(e,t,r){var n=r("5e77").PROPER,i=r("d039"),s=r("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!s[e]()||o[e]()!==o||n&&s[e].name!==e}))}},f53e:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0bf6407c.8fb658a6.js.map