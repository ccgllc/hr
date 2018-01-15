webpackJsonp([9],{

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Resource = function () {
	function Resource(config) {
		_classCallCheck(this, Resource);

		this.config = config;
	}

	_createClass(Resource, [{
		key: 'get',
		value: function get(endpoint) {
			return this.request('get', endpoint);
		}
	}, {
		key: 'put',
		value: function put(endpoint, data) {
			this.config.data = data;
			return this.request('put', endpoint);
		}
	}, {
		key: 'delete',
		value: function _delete(endpoint) {
			return this.request('delete', endpoint);
		}
	}, {
		key: 'getData',
		value: function getData() {
			if (this.config.data != undefined) {
				return this.config.data;
			}
		}
	}, {
		key: 'request',
		value: function request(method, endpoint) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				__WEBPACK_IMPORTED_MODULE_0_axios___default.a[method](_this.getFullUri() + endpoint, _this.getData()).then(function (response) {
					// this.onSuccess(response.data);
					resolve(response.data);
				}).catch(function (error) {
					reject(error.response.data.errors);
				});
			});
		}
	}, {
		key: 'getFullUri',
		value: function getFullUri() {
			return this.getPrefix() + this.getResource() + this.getParams();
		}
	}, {
		key: 'getPrefix',
		value: function getPrefix() {
			return this.config.uri.prefix != '' ? '/' + this.config.uri.prefix + '/' : '';
		}
	}, {
		key: 'getResource',
		value: function getResource() {
			return this.config.uri.resource != '' ? this.config.uri.resource + '/' : ''; //throw 'you must provide a resource.';
		}
	}, {
		key: 'getParams',
		value: function getParams() {
			return this.config.uri.params.length > 0 ? this.config.uri.params[0].id + '/' : '';
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			return data;
		}
	}]);

	return Resource;
}();

/* harmony default export */ __webpack_exports__["a"] = (Resource);

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(284);


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UserRoles_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UserRoles_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_UserRoles_vue__);

// import Resource from './structur/src/services/Resource.js';

// import roles from './data/roles.js';
// import search from './components/Search.vue';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('userRoles', __WEBPACK_IMPORTED_MODULE_1__components_UserRoles_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('capitalize', function (value) {
	return value[0].toUpperCase() + value.slice(1);
});

var userRoles = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'ManageUserRoles',
	el: '#userRoles'
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(286)
/* template */
var __vue_template__ = __webpack_require__(287)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/UserRoles.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59961eea", Component.options)
  } else {
    hotAPI.reload("data-v-59961eea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_services_Resource_js__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'UserRoles',
	data: function data() {
		return {
			userRoles: [],
			roles: [],
			selected: [],
			user: new __WEBPACK_IMPORTED_MODULE_0__structur_src_services_Resource_js__["a" /* default */]({
				uri: {
					prefix: 'api',
					resource: 'user',
					params: [{ id: window.userId }]
				},
				api_token: this.token
			})
		};
	},
	mounted: function mounted() {
		var userRoles = window.userRoles;
		console.log(userRoles);
		var roleIds = [];
		userRoles.forEach(function (role) {
			roleIds.push(role['id']);
		});
		this.userRoles = roleIds;
		this.roles = window.roles;
	},

	methods: {
		sync: function sync() {
			var _this = this;

			this.$nextTick(function () {
				_this.user.put('roles', _this.userRoles).then(function (response) {
					// this.userRoles = response;
					console.log(response);
				}).catch(function (error) {
					console.log(error);
				});
			});
		},
		get: function get() {
			var _this2 = this;

			this.user.get('roles').then(function (response) {
				_this2.userRoles = response.roles;
			}).catch(function (error) {
				console.log(error);
			});
		}
	}
});

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "table",
      {
        staticClass: "table is-hoverable is-full-width",
        staticStyle: { background: "transparent" }
      },
      [
        _c(
          "tbody",
          _vm._l(_vm.roles, function(role) {
            return _c("tr", [
              _c("td", { staticStyle: { width: "5%" } }, [
                _c("div", { staticClass: "field" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userRoles,
                        expression: "userRoles"
                      }
                    ],
                    staticClass: "is-checkbox is-circle",
                    attrs: { type: "checkbox", name: role.name, id: role.name },
                    domProps: {
                      value: role.id,
                      checked: Array.isArray(_vm.userRoles)
                        ? _vm._i(_vm.userRoles, role.id) > -1
                        : _vm.userRoles
                    },
                    on: {
                      click: function($event) {
                        _vm.sync()
                      },
                      change: function($event) {
                        var $$a = _vm.userRoles,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = role.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.userRoles = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.userRoles = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.userRoles = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: role.name } }, [
                    _vm._v(_vm._s(_vm._f("capitalize")(role.name)))
                  ])
                ])
              ])
            ])
          })
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59961eea", module.exports)
  }
}

/***/ })

},[283]);