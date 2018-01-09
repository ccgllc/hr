webpackJsonp([8],{

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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(225);


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Register_vue__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Register_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Register_vue__);


var register = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Register',
	el: '#register',
	components: {
		registrationForm: __WEBPACK_IMPORTED_MODULE_1__components_Register_vue___default.a
	}
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(227)
/* template */
var __vue_template__ = __webpack_require__(228)
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
Component.options.__file = "resources/assets/js/components/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f88ac34c", Component.options)
  } else {
    hotAPI.reload("data-v-f88ac34c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
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
	name: 'RegistrationForm',
	data: function data() {
		return {
			form: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				password_confirmation: ""
			}),
			successfulRegistration: false
		};
	},

	computed: {
		passwordsMatch: function passwordsMatch() {
			return this.form.password === this.form.password_confirmation ? true : false;
		}
	},
	methods: {
		submit: function submit() {
			var _this = this;

			return this.form.post('/register', false).then(function (response) {
				_this.successfulRegistration = true;
			}).catch(function (response) {
				console.log(response);
			});
		}
	}
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.successfulRegistration
      ? _c("div", { staticClass: "sign-in-title" }, [
          _c("h1", [_vm._v("You'll need to register to apply")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.successfulRegistration
      ? _c("div", { staticStyle: { position: "relative", top: "40px" } }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v("Welcome, " + _vm._s(_vm.form.firstName))
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v("Thanks for creating an account")
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "We've sent an email to the address you just signed up with. You'll need to verify your account by clicking the link proided in the email to continue your application for employment with CCG."
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.successfulRegistration
      ? _c(
          "form",
          {
            attrs: { method: "post", action: "/register" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.submit($event)
              },
              keydown: function($event) {
                _vm.form.errors.clear($event.target.name)
              }
            }
          },
          [
            _c("div", { staticClass: "field is-signin" }, [
              _c("div", { staticClass: "control has-icons-right" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.firstName,
                      expression: "form.firstName"
                    }
                  ],
                  staticClass: "input is-medium",
                  attrs: {
                    type: "text",
                    id: "firstName",
                    name: "firstName",
                    placeholder: "First Name"
                  },
                  domProps: { value: _vm.form.firstName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "firstName", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm.form.errors.has("firstName")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("firstName"))
                      }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field is-signin" }, [
              _c("div", { staticClass: "control has-icons-right" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.lastName,
                      expression: "form.lastName"
                    }
                  ],
                  staticClass: "input is-medium",
                  attrs: {
                    type: "text",
                    id: "lastName",
                    name: "lastName",
                    placeholder: "Last Name"
                  },
                  domProps: { value: _vm.form.lastName },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "lastName", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm.form.errors.has("lastName")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("lastName"))
                      }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "field is-signin",
                staticStyle: { margin: "20px 0 20px 0" }
              },
              [
                _c("div", { staticClass: "control has-icons-right" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "input is-medium",
                    attrs: {
                      type: "text",
                      id: "email",
                      name: "email",
                      placeholder: "Email Address"
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm.form.errors.has("email")
                    ? _c("span", {
                        staticClass: "help is-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.get("email"))
                        }
                      })
                    : _vm._e()
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "field is-signin" }, [
              _c("div", { staticClass: "control has-icons-right" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password"
                    }
                  ],
                  staticClass: "input is-medium",
                  class: {
                    "is-success": _vm.passwordsMatch,
                    "is-danger": !_vm.passwordsMatch
                  },
                  attrs: {
                    type: "password",
                    id: "password",
                    name: "password",
                    placeholder: "Password"
                  },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _vm.form.errors.has("password")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("password"))
                      }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field is-signin" }, [
              _c("div", { staticClass: "control has-icons-right" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password_confirmation,
                      expression: "form.password_confirmation"
                    }
                  ],
                  staticClass: "input is-medium",
                  class: {
                    "is-success": _vm.passwordsMatch,
                    "is-danger": !_vm.passwordsMatch
                  },
                  attrs: {
                    type: "password",
                    id: "passwordConfirmation",
                    name: "passwordConfirmation",
                    placeholder: "Confirm Password"
                  },
                  domProps: { value: _vm.form.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm.form.errors.has("password_confirmation")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.form.errors.get("password_confirmation")
                        )
                      }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7)
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "control", staticStyle: { "margin-top": "35px" } },
      [
        _c(
          "a",
          {
            staticClass: "button is-medium is-ccg is-full-width",
            attrs: { href: "/login" }
          },
          [
            _c("span", [_vm._v("Login")]),
            _vm._v(" "),
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", { staticClass: "fa fa-login" })
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-right" }, [
      _c("i", { staticClass: "fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-right" }, [
      _c("i", { staticClass: "fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-right" }, [
      _c("i", { staticClass: "fa fa-envelope" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-right" }, [
      _c("i", { staticClass: "fa fa-lock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-right" }, [
      _c("i", { staticClass: "fa fa-lock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control" }, [
      _c("button", { staticClass: "button is-medium is-ccg is-full-width" }, [
        _c("span", [_vm._v("Create Account")]),
        _vm._v(" "),
        _c("span", { staticClass: "icon is-small" }, [
          _c("i", { staticClass: "fa fa-chevron-circle-right" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control has-text-centered" }, [
      _c(
        "a",
        {
          staticClass: "button is-text is-small",
          staticStyle: { color: "rgb(177, 177, 177)" },
          attrs: { href: "/login" }
        },
        [_c("span", [_vm._v("Login")])]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f88ac34c", module.exports)
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

},[224]);