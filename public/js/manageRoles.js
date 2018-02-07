webpackJsonp([4],{

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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Roles_vue__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Roles_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Roles_vue__);

// import Resource from './structur/src/services/Resource.js';


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('roles', __WEBPACK_IMPORTED_MODULE_1__components_Roles_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('capitalize', function (value) {
	return value[0].toUpperCase() + value.slice(1);
});

var manageRoles = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'ManageRoles',
	el: '#roles'
});

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(276)
/* template */
var __vue_template__ = __webpack_require__(281)
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
Component.options.__file = "resources/assets/js/components/Roles.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c777096", Component.options)
  } else {
    hotAPI.reload("data-v-5c777096", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NewRole_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NewRole_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NewRole_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_roles_js__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structur_src_services_Resource_js__ = __webpack_require__(16);
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
	name: 'Roles',
	components: {
		newRole: __WEBPACK_IMPORTED_MODULE_0__NewRole_vue___default.a
	},
	data: function data() {
		return {
			roles: __WEBPACK_IMPORTED_MODULE_1__data_roles_js__["a" /* default */],
			roleService: new __WEBPACK_IMPORTED_MODULE_2__structur_src_services_Resource_js__["a" /* default */]({
				uri: {
					prefix: 'api',
					resource: 'role',
					params: []
				}
			})
		};
	},
	mounted: function mounted() {
		this.roles = window.roles;
	},

	methods: {
		appendRole: function appendRole(role) {
			return this.roles.push(role);
		},
		removeRole: function removeRole(idx) {
			return this.roles.splice(idx, 1);
		},
		deleteRole: function deleteRole(role) {
			var _this = this;

			//confirmation temporary....
			if (confirm('Are you sure? This will delete the role and remove all of its user relations, and cannot be undone.')) {
				var idx = this.roles.indexOf(role);
				this.roleService.delete(role.id).then(function (response) {
					_this.removeRole(idx);
				}).catch(function (error) {
					console.log(error);
				});
			}
		}
	}
});

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(279)
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
Component.options.__file = "resources/assets/js/components/NewRole.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c4adf4f", Component.options)
  } else {
    hotAPI.reload("data-v-7c4adf4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__ = __webpack_require__(4);
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'NewRole',
	props: ['roles'],
	data: function data() {
		return {
			showForm: false,
			role: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				name: '',
				label: ''
			})
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			this.role.post('api/role').then(function (response) {
				console.log(response);
				// TODO: Update Roles list in parent component.
				_this.$emit('addRole', response);
				_this.showForm = false;
			}).catch(function (error) {
				// present relevant error to user. 
				console.log(error);
			});
		}
	}
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "button",
      {
        staticClass: "button",
        on: {
          click: function($event) {
            _vm.showForm = !_vm.showForm
          }
        }
      },
      [_vm._m(0), _vm._v(" "), _c("span", [_vm._v("New Role")])]
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showForm,
            expression: "showForm"
          }
        ],
        staticStyle: { "margin-top": "20px", "margin-bottom": "20px" },
        attrs: { action: "/role", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submit()
          }
        }
      },
      [
        _c("div", { staticClass: "field is-horizontal" }, [
          _c("div", { staticClass: "field-body" }, [
            _c("div", { staticClass: "field" }, [
              _c("label", { staticClass: "label" }, [_vm._v("Role Name")]),
              _vm._v(" "),
              _c("div", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.role.name,
                      expression: "role.name"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "text", placeholder: "e.g. Manager" },
                  domProps: { value: _vm.role.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.role, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.role.errors.has("name")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.role.errors.get("name"))
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c("label", { staticClass: "label" }, [_vm._v("Role Label")]),
              _vm._v(" "),
              _c("div", { staticClass: "control" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.role.label,
                      expression: "role.label"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: "e.g. Department Manager"
                  },
                  domProps: { value: _vm.role.label },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.role, "label", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.role.errors.has("label")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(_vm.role.errors.get("label"))
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "control", staticStyle: { "margin-top": "32px" } },
      [_c("button", { staticClass: "button is-success" }, [_vm._v("Save")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c4adf4f", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([]);

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("new-role", { on: { addRole: _vm.appendRole } }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("table", { staticClass: "table is-full-width" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.roles, function(role) {
            return _c("tr", [
              _c("td", [
                _c("a", { attrs: { href: "/roles/" + role.id } }, [
                  _vm._v(_vm._s(role.name))
                ])
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "5%" } }, [
                _c(
                  "a",
                  {
                    staticClass: "button is-small is-danger",
                    on: {
                      click: function($event) {
                        _vm.deleteRole(role)
                      }
                    }
                  },
                  [_vm._m(1, true)]
                )
              ])
            ])
          })
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-trash" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c777096", module.exports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors_js__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors_js__["a" /* default */]();
    }

    /**
       * set data for form to post.
       */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};
            for (var property in this.originalData) {
                data[property] = this[property];
            }
            return data;
        }

        /**
           * Reset the form fields and clear any errors.
           */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.errors[field][0];
        }

        /**
            * send a post request to a given url.
            */

    }, {
        key: 'post',
        value: function post(url) {
            var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.submit('post', url, reset);
        }

        /**
            * send a put request to a given url.
            */

    }, {
        key: 'put',
        value: function put(url) {
            var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.submit('put', url, reset);
        }

        /**
            * send a patch request to a given url.
            */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
            * send a put request to a given url.
            */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
            * Submit the form.
            *
            * @param {string} requestType
            * @param {string} url
            */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data, reset);
                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
            });
        }

        /**
           * Handle a successful form submission.
           *
           * @param {object, var} data, reset
           */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data, reset) {
            if (reset == true) {
                this.reset();
            }
            return;
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {

    /**
       * Create a new Errors instance.
       */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
       * Determine if an errors exists for the given field.
       *
       * @param {string} field
       */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
            * Determine if we have any errors.
            */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
            * Retrieve the error message for a field.
            *
            * @param {string} field
            */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
        * Record the new errors.
        *
        * @param {object} errors
        */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ })

},[273]);