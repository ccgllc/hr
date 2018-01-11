webpackJsonp([4],{"05cj":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("button",{staticClass:"button",on:{click:function(t){e.showForm=!e.showForm}}},[e._m(0),e._v(" "),n("span",[e._v("New Role")])]),e._v(" "),n("form",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{action:"/role",method:"post"},on:{submit:function(t){t.preventDefault(),e.submit()}}},[n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Role Name")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.role.name,expression:"role.name"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. Manager"},domProps:{value:e.role.name},on:{input:function(t){t.target.composing||e.$set(e.role,"name",t.target.value)}}})]),e._v(" "),e.role.errors.has("name")?n("span",{staticClass:"help is-danger",domProps:{textContent:e._s(e.role.errors.get("name"))}}):e._e()]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Role Label")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.role.label,expression:"role.label"}],staticClass:"input",attrs:{type:"text",placeholder:"e.g. Department Manager"},domProps:{value:e.role.label},on:{input:function(t){t.target.composing||e.$set(e.role,"label",t.target.value)}}})]),e._v(" "),e.role.errors.has("label")?n("span",{staticClass:"help is-danger",domProps:{textContent:e._s(e.role.errors.get("label"))}}):e._e()]),e._v(" "),e._m(1)])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-plus"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"control",staticStyle:{"margin-top":"32px"}},[t("button",{staticClass:"button is-success"},[this._v("Save")])])}]}},"3TKQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Lczc");t.default={name:"NewRole",props:["roles"],data:function(){return{showForm:!1,role:new r.a({name:"",label:""})}},methods:{submit:function(){var e=this;this.role.post("api/role").then(function(t){console.log(t),e.$emit("addRole",t),e.showForm=!1}).catch(function(e){console.log(e)})}}}},6:function(e,t,n){e.exports=n("JhSq")},I35j:function(e,t,n){var r=n("VU/8")(n("3TKQ"),n("05cj"),!1,null,null,null);e.exports=r.exports},JhSq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("I3G/"),o=n.n(r),i=n("dnT+"),s=n.n(i);o.a.component("roles",s.a),o.a.filter("capitalize",function(e){return e[0].toUpperCase()+e.slice(1)});new o.a({name:"ManageRoles",el:"#roles"})},Lczc:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}return r(e,[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}]),e}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.originalData=t;for(var n in t)this[n]=t[n];this.errors=new o}return i(e,[{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"get",value:function(e){return this.errors[e][0]}},{key:"post",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("post",e,t)}},{key:"put",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.submit("put",e,t)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new Promise(function(o,i){axios[e](t,n.data()).then(function(e){n.onSuccess(e.data,r),o(e.data)}).catch(function(e){n.onFail(e.response.data.errors),i(e.response.data.errors)})})}},{key:"onSuccess",value:function(e,t){1==t&&this.reset()}},{key:"onFail",value:function(e){this.errors.record(e)}}]),e}();t.a=s},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,a=e.default);var u,c="function"==typeof a?a.options:a;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):r&&(u=r),u){var f=c.functional,h=f?c.render:c.beforeCreate;f?(c._injectStyles=u,c.render=function(e,t){return u.call(t),h(e,t)}):c.beforeCreate=h?[].concat(h,u):[u]}return{esModule:s,exports:a,options:c}}},"c+1i":function(e,t,n){"use strict";var r=n("mtWM"),o=n.n(r),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t}return i(e,[{key:"get",value:function(e){return this.request("get",e)}},{key:"put",value:function(e,t){return this.config.data=t,this.request("put",e)}},{key:"delete",value:function(e){return this.request("delete",e)}},{key:"getData",value:function(){if(void 0!=this.config.data)return this.config.data}},{key:"request",value:function(e,t){var n=this;return new Promise(function(r,i){o.a[e](n.getFullUri()+t,n.getData()).then(function(e){r(e.data)}).catch(function(e){i(e.response.data.errors)})})}},{key:"getFullUri",value:function(){return this.getPrefix()+this.getResource()+this.getParams()}},{key:"getPrefix",value:function(){return""!=this.config.uri.prefix?"/"+this.config.uri.prefix+"/":""}},{key:"getResource",value:function(){return""!=this.config.uri.resource?this.config.uri.resource+"/":""}},{key:"getParams",value:function(){return this.config.uri.params.length>0?this.config.uri.params[0].id+"/":""}},{key:"onSuccess",value:function(e){return e}}]),e}();t.a=s},"dnT+":function(e,t,n){var r=n("VU/8")(n("h0Ee"),n("i5+u"),!1,null,null,null);e.exports=r.exports},h0Ee:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("I35j"),o=n.n(r),i=[],s=n("c+1i");t.default={name:"Roles",components:{newRole:o.a},data:function(){return{roles:i,roleService:new s.a({uri:{prefix:"api",resource:"role",params:[]}})}},mounted:function(){this.roles=window.roles},methods:{appendRole:function(e){return this.roles.push(e)},removeRole:function(e){return this.roles.splice(e,1)},deleteRole:function(e){var t=this;if(confirm("Are you sure? This will delete the role and remove all of its user relations, and cannot be undone.")){var n=this.roles.indexOf(e);this.roleService.delete(e.id).then(function(e){t.removeRole(n)}).catch(function(e){console.log(e)})}}}}},"i5+u":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("new-role",{on:{addRole:e.appendRole}}),e._v(" "),n("br"),e._v(" "),n("table",{staticClass:"table is-full-width"},[e._m(0),e._v(" "),n("tbody",e._l(e.roles,function(t){return n("tr",[n("td",[n("a",{attrs:{href:"/role/"+t.id}},[e._v(e._s(t.name))])]),e._v(" "),n("td",{staticStyle:{width:"5%"}},[n("a",{staticClass:"button is-small is-danger",on:{click:function(n){e.deleteRole(t)}}},[e._m(1,!0)])])])}))])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Role")]),this._v(" "),t("th",[this._v("Actions")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-trash"})])}]}}},[6]);