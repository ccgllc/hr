webpackJsonp([1],{

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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' }, { abbr: 'AZ', name: 'Arizona' }, { abbr: 'AR', name: 'Arkansas' }, { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' }, { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' }, { abbr: 'DC', name: 'District of Columbia' }, { abbr: 'FL', name: 'Florida' }, { abbr: 'GA', name: 'Georgia' }, { abbr: 'HI', name: 'Hawaii' }, { abbr: 'ID', name: 'Idaho' }, { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' }, { abbr: 'IA', name: 'Iowa' }, { abbr: 'KS', name: 'Kansas' }, { abbr: 'KY', name: 'Kentucky' }, { abbr: 'LA', name: 'Louisiana' }, { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' }, { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MI', name: 'Michigan' }, { abbr: 'MN', name: 'Minnesota' }, { abbr: 'MS', name: 'Mississippi' }, { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' }, { abbr: 'NE', name: 'Nebraska' }, { abbr: 'NV', name: 'Nevada' }, { abbr: 'NH', name: 'New Hampshire' }, { abbr: 'NJ', name: 'New Jersey' }, { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' }, { abbr: 'NC', name: 'North Carolina' }, { abbr: 'ND', name: 'North Dakota' }, { abbr: 'OH', name: 'Ohio' }, { abbr: 'OK', name: 'Oklahoma' }, { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'RI', name: 'Rhode Island' }, { abbr: 'SC', name: 'South Carolina' }, { abbr: 'SD', name: 'South Dakota' }, { abbr: 'TN', name: 'Tennessee' }, { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' }, { abbr: 'VT', name: 'Vermont' }, { abbr: 'VA', name: 'Virginia' }, { abbr: 'WA', name: 'Washington' }, { abbr: 'WV', name: 'West Virginia' }, { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' }]);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ name: 'January', abbr: '01' }, { name: 'February', abbr: '02' }, { name: 'March', abbr: '03' }, { name: 'April', abbr: '04' }, { name: 'May', abbr: '05' }, { name: 'June', abbr: '06' }, { name: 'July', abbr: '07' }, { name: 'August', abbr: '08' }, { name: 'September', abbr: '09' }, { name: 'October', abbr: '10' }, { name: 'November', abbr: '11' }, { name: 'December', abbr: '12' }]);

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonalInformation__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonalInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PersonalInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Licenses__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Licenses___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Licenses__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Documents__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Documents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Documents__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Certifications__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Certifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Certifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkHistory__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WorkHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__WorkHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProfileNavigation__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProfileNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ProfileNavigation__);










__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var routes = [{ path: '/', name: "home", component: __WEBPACK_IMPORTED_MODULE_2__PersonalInformation___default.a }, { path: '/licenses', name: "licenses", component: __WEBPACK_IMPORTED_MODULE_3__Licenses___default.a }, { path: '/documents', name: 'documents', component: __WEBPACK_IMPORTED_MODULE_4__Documents___default.a }, { path: '/work-history', name: "workHistory", component: __WEBPACK_IMPORTED_MODULE_6__WorkHistory___default.a }, { path: '/certifications', name: 'certifications', component: __WEBPACK_IMPORTED_MODULE_5__Certifications___default.a }];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: routes,
	linkActiveClass: 'is-active'
});

// router.beforeEach((to, from, next) => {

// })

var Profile = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Profile',
	router: router,
	components: {
		profileNavigation: __WEBPACK_IMPORTED_MODULE_7__ProfileNavigation___default.a
	},
	data: function data() {
		return {
			//Profile Data.
		};
	}
}).$mount('#profile');

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(305)
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
Component.options.__file = "resources/assets/js/profile/PersonalInformation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-188f7704", Component.options)
  } else {
    hotAPI.reload("data-v-188f7704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Address_vue__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Address_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Address_vue__);
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





// import EditableText from './EditableText.vue';
/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'PersonalInformation',
	components: {
		xactnetAddress: __WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue___default.a,
		phoneNumber: __WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue___default.a,
		emailAddress: __WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue___default.a,
		mailingAddress: __WEBPACK_IMPORTED_MODULE_3__components_Address_vue___default.a
	},
	data: function data() {
		return {
			//
		};
	}
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
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
Component.options.__file = "resources/assets/js/profile/components/XactnetAddress.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f930cc7c", Component.options)
  } else {
    hotAPI.reload("data-v-f930cc7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 294:
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


// import profileData from '../data/profileData.js';
/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'XactnetAddress',
	// props: ['personalData'],
	mounted: function mounted() {
		//find our input field
		this.input = document.getElementById('xactnet-address-input');
		//set our current values off $userData variable 
		//@see Blade View 'Profile/show.blade.php'
		//mutations will be returned from api and set in data.xactnet_address...
		//window object will be stored until page refreshes.
		this.xactnet_address.value = window.userData.profile.xactnet_address;
		this.xactnet_address.api_token = window.userData.api_token;
	},
	data: function data() {
		return {
			xactnet_address: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				value: '',
				api_token: ''
			}),
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {}
		};
	},

	computed: {
		submitable: function submitable() {
			return this.xactnet_address.value === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.xactnet_address.put('/api/user/personal-information/xactnet_address', false).then(function (response) {
					console.log(response);
					_this.xactnet_address.value = response;
					// this.xactnet_address.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				return this.xactnet_address.value = window.userData.profile.xactnet_address;
			}
		},
		toggleEditing: function toggleEditing() {
			this.editing = !this.editing;
			this.input.focus();
		},
		copyToClipboard: function copyToClipboard() {
			this.createEmptyTextArea();
			var successful = document.execCommand('copy');
			return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
		},
		createEmptyTextArea: function createEmptyTextArea() {
			var textArea = document.createElement("textarea");
			textArea.style.position = 'fixed';
			textArea.style.top = -1000;
			textArea.style.left = -1000;
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			textArea.style.padding = 0;
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			textArea.style.background = 'transparent';
			textArea.value = this.xactnet_address.value;
			document.body.appendChild(textArea);
			textArea.select();
		}
	}
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.submit($event)
              },
              keydown: function($event) {
                _vm.xactnet_address.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.xactnet_address.value,
                        expression: "xactnet_address.value"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "xactnet-address-input", type: "text" },
                    domProps: { value: _vm.xactnet_address.value },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.xactnet_address,
                          "value",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.xactnet_address.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.xactnet_address.errors.get("value")
                        )
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing && _vm.xactnet_address.value === null
          ? _c(
              "span",
              {
                staticClass: "button is-text",
                staticStyle: { cursor: "pointer" },
                on: { click: _vm.toggleEditing }
              },
              [_vm._v("add")]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.xactnet_address.value) +
                    " \n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Xactnet Address")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "icon is-small is-left",
        staticStyle: { cursor: "pointer" }
      },
      [_c("i", { staticClass: "fa fa-times" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f930cc7c", module.exports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(298)
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
Component.options.__file = "resources/assets/js/profile/components/PhoneNumber.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-80638ed4", Component.options)
  } else {
    hotAPI.reload("data-v-80638ed4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 297:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'PhoneNumber',
	mounted: function mounted() {
		this.input = document.getElementById('phone-input');
		this.phoneNumber.value = window.userData.profile.phone;
		this.phoneNumber.api_token = window.userData.api_token;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			currentValue: '',
			phoneNumber: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				value: '',
				api_token: ''
			})
		};
	},

	computed: {
		submitable: function submitable() {
			return this.phoneNumber.value === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.phoneNumber.put('/api/user/personal-information/phone', false).then(function (response) {
					console.log(response);
					_this.phoneNumber.value = response;
					// this.phoneNumber.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				return this.phoneNumber.value = window.userData.profile.phoneNumber;
			}
		},
		toggleEditing: function toggleEditing() {
			this.editing = !this.editing;
			this.input.focus();
		},
		copyToClipboard: function copyToClipboard() {
			this.createEmptyTextArea();
			var successful = document.execCommand('copy');
			return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
		},
		createEmptyTextArea: function createEmptyTextArea() {
			var textArea = document.createElement("textarea");
			textArea.style.position = 'fixed';
			textArea.style.top = -1000;
			textArea.style.left = -1000;
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			textArea.style.padding = 0;
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			textArea.style.background = 'transparent';
			textArea.value = this.phoneNumber.value;
			document.body.appendChild(textArea);
			textArea.select();
		}
	},
	filters: {
		phoneNumber: function phoneNumber(value) {
			if (!value) return '';
			value = value.toString();
			// return value.charAt(0).toUpperCase() + value.slice(1)
			return value.replace(/\b(\d{3})([-.\s]?)+(\d{3})([-.\s]?)+(\d{4})\b/g, '($1) $3-$5');
		}
	}
});

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.submit($event)
              },
              keydown: function($event) {
                _vm.phoneNumber.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.phoneNumber.value,
                        expression: "phoneNumber.value"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "phone-input", type: "text" },
                    domProps: { value: _vm.phoneNumber.value },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.phoneNumber, "value", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.phoneNumber.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.phoneNumber.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm._f("phoneNumber")(_vm.phoneNumber.value)) +
                    "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Phone Number")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "icon is-small is-left",
        staticStyle: { cursor: "pointer" }
      },
      [_c("i", { staticClass: "fa fa-times" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-80638ed4", module.exports)
  }
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(301)
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
Component.options.__file = "resources/assets/js/profile/components/EmailAddress.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01b68d09", Component.options)
  } else {
    hotAPI.reload("data-v-01b68d09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'EmailAddress',
	mounted: function mounted() {
		this.input = document.getElementById('phone-input');
		this.emailAddress.value = window.userData.email;
		this.emailAddress.api_token = window.userData.api_token;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			currentValue: '',
			emailAddress: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				value: '',
				api_token: ''
			})
		};
	},

	computed: {
		submitable: function submitable() {
			return this.emailAddress.value === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.emailAddress.put('/api/user/personal-information/email', false).then(function (response) {
					console.log(response);
					_this.emailAddress.value = response;
					// this.emailAddress.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				return this.emailAddress.value = window.userData.profile.emailAddress;
			}
		},
		close: function close() {
			console.log('close');
		},
		toggleEditing: function toggleEditing() {
			this.editing = !this.editing;
			this.input.focus();
		},
		copyToClipboard: function copyToClipboard() {
			this.createEmptyTextArea();
			var successful = document.execCommand('copy');
			return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
		},
		createEmptyTextArea: function createEmptyTextArea() {
			var textArea = document.createElement("textarea");
			textArea.style.position = 'fixed';
			textArea.style.top = -1000;
			textArea.style.left = -1000;
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			textArea.style.padding = 0;
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			textArea.style.background = 'transparent';
			textArea.value = this.emailAddress.value;
			document.body.appendChild(textArea);
			textArea.select();
		}
	}
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.submit($event)
              },
              keydown: function($event) {
                _vm.emailAddress.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.emailAddress.value,
                        expression: "emailAddress.value"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "email-input", type: "text" },
                    domProps: { value: _vm.emailAddress.value },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.emailAddress, "value", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.emailAddress.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.emailAddress.errors.get("value")
                        )
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.emailAddress.value) +
                    "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Email")]), _vm._v(":")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01b68d09", module.exports)
  }
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(303)
/* template */
var __vue_template__ = __webpack_require__(304)
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
Component.options.__file = "resources/assets/js/profile/components/Address.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-962ea19a", Component.options)
  } else {
    hotAPI.reload("data-v-962ea19a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 303:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Address',
	mounted: function mounted() {
		this.input = document.getElementById('street-input');
		this.address.street = window.userData.profile.street;
		this.address.city = window.userData.profile.city;
		this.address.state = window.userData.profile.state;
		this.address.zip = window.userData.profile.zip;
		this.address.api_token = window.userData.api_token;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			currentValue: '',
			address: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				street: '',
				city: '',
				state: '',
				zip: '',
				api_token: ''
			})
		};
	},

	computed: {
		submitable: function submitable() {
			return this.address.street === "" || this.address.city === '' || this.address.state === '' || this.address.zip === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.address.put('/api/user/personal-information/address', false).then(function (response) {
					console.log(response);
					_this.address.street = response['street'];
					_this.address.city = response['city'];
					_this.address.state = response['state'];
					_this.address.zip = response['zip'];
					// this.address.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				this.address.street = window.userData.profile.street;
				this.address.city = window.userData.profile.city;
				this.address.state = window.userData.profile.state;
				this.address.zip = window.userData.profile.zip;
			}
		},
		close: function close() {
			console.log('close');
		},
		toggleEditing: function toggleEditing() {
			this.editing = !this.editing;
			return this.editing === false ? this.submit() : null;
			// this.input.focus();
		},
		copyToClipboard: function copyToClipboard() {
			this.createEmptyTextArea();
			var successful = document.execCommand('copy');
			return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
		},
		createEmptyTextArea: function createEmptyTextArea() {
			var textArea = document.createElement("textarea");
			textArea.style.position = 'fixed';
			textArea.style.top = -1000;
			textArea.style.left = -1000;
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			textArea.style.padding = 0;
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			textArea.style.background = 'transparent';
			textArea.value = this.address.street + " " + this.address.city + " " + this.address.state + ", " + this.address.zip;
			document.body.appendChild(textArea);
			textArea.select();
		}
	}
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { "margin-top": "1rem" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "column is-10" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.submit($event)
              },
              keydown: function($event) {
                _vm.address.errors.clear($event.target.name)
              }
            }
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.address.street,
                        expression: "address.street"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "sreet-input", type: "text" },
                    domProps: { value: _vm.address.street },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.address, "street", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.address.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.address.city,
                        expression: "address.city"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "city-input", type: "text" },
                    domProps: { value: _vm.address.city },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.address, "city", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.address.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.address.state,
                        expression: "address.state"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "city-input", type: "text" },
                    domProps: { value: _vm.address.state },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.address, "state", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.address.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editing,
                    expression: "editing"
                  }
                ],
                staticClass: "field",
                staticStyle: { "margin-top": "-5px" }
              },
              [
                _c("div", { staticClass: "control has-icons-left" }, [
                  _c("span", { staticClass: "icon is-small is-left" }, [
                    _c("i", {
                      staticClass: "fa fa-times",
                      staticStyle: { cursor: "pointer" },
                      on: { click: _vm.close }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.address.zip,
                        expression: "address.zip"
                      }
                    ],
                    staticClass: "input",
                    staticStyle: {
                      border: "none",
                      "border-bottom": "1px solid #ccc",
                      background: "transparent",
                      "box-shadow": "none"
                    },
                    attrs: { id: "city-input", type: "text" },
                    domProps: { value: _vm.address.zip },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.toggleEditing($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.address, "zip", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.address.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              {
                staticStyle: { cursor: "pointer" },
                on: {
                  dblclick: function($event) {
                    $event.preventDefault()
                    _vm.toggleEditing($event)
                  },
                  mouseover: function($event) {
                    _vm.showEdit = true
                  },
                  mouseleave: function($event) {
                    _vm.showEdit = false
                    _vm.copyText = "copy"
                  }
                }
              },
              [
                _vm._v("\n\t\t\t" + _vm._s(_vm.address.street) + " "),
                _c("br"),
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.address.city) +
                    " " +
                    _vm._s(_vm.address.state) +
                    ", " +
                    _vm._s(_vm.address.zip) +
                    "\n\t\t\t \n\t\t\t"
                ),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showEdit,
                        expression: "showEdit"
                      }
                    ]
                  },
                  [
                    !_vm.editing
                      ? _c("a", {
                          domProps: { textContent: _vm._s(_vm.copyText) },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.copyToClipboard($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v("\n\t\t\t |  \n\t\t\t"),
                    !_vm.editing
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.toggleEditing($event)
                              }
                            }
                          },
                          [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-2" }, [
      _c("p", [_c("strong", [_vm._v("Address")]), _vm._v(":")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-962ea19a", module.exports)
  }
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "personal-information" } },
    [
      _c("h1", { staticClass: "profile-title" }, [
        _vm._v("Personal Information")
      ]),
      _vm._v(" "),
      _c("xactnet-address"),
      _vm._v(" "),
      _c("phone-number"),
      _vm._v(" "),
      _c("email-address"),
      _vm._v(" "),
      _c("mailing-address")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-188f7704", module.exports)
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(307)
/* template */
var __vue_template__ = __webpack_require__(311)
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
Component.options.__file = "resources/assets/js/profile/Licenses.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cf0736c", Component.options)
  } else {
    hotAPI.reload("data-v-3cf0736c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_license_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structur_src_form_Form_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_states_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_months_js__ = __webpack_require__(23);
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
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Licenses',
	components: {
		license: __WEBPACK_IMPORTED_MODULE_0__components_license_vue___default.a
	},
	mounted: function mounted() {
		this.adjusterLicenses = window.userData.adjuster_licenses;
		this.newLicense.api_token = window.axios.defaults.headers.common['Authorization'];
		var today = new Date();
		this.currentYear = today.getFullYear();
	},

	computed: {
		buttonText: function buttonText() {
			return this.creatingNewLicense ? 'cancel' : 'Add License';
		}
	},
	data: function data() {
		return {
			creatingNewLicense: false,
			adjusterLicenses: [],
			newLicense: new __WEBPACK_IMPORTED_MODULE_1__structur_src_form_Form_js__["a" /* default */]({
				license_number: '',
				license_state: '',
				expiration_month: '',
				expiration_year: '',
				api_token: ''
			}),
			currentYear: '',
			states: __WEBPACK_IMPORTED_MODULE_2__data_states_js__["a" /* default */],
			months: __WEBPACK_IMPORTED_MODULE_3__data_months_js__["a" /* default */]
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			this.newLicense.post('/api/user/personal-information/license').then(function (response) {
				console.log(response);
				_this.adjusterLicenses.push(response);
				_this.newLicense.api_token = window.axios.defaults.headers.common['Authorization'];
				return _this.creatingNewLicense = false;
			}).catch(function (error) {
				console.log(error);
			});
		},
		remove: function remove(license) {
			var _this2 = this;

			if (confirm('Are you sure? This action cannot be undone..')) {
				var api_token = window.axios.defaults.headers.common['Authorization'];
				window.axios.delete('/api/user/personal-information/license/' + license.id + '?api_token=' + api_token).then(function (response) {
					console.log(response);
					var index = _this2.adjusterLicenses.indexOf(license);
					console.log(index);
					return _this2.adjusterLicenses.splice(index, 1);
				}).catch(function (error) {
					console.log(error);
				});
			}
		}
	}
});

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(309)
/* template */
var __vue_template__ = __webpack_require__(310)
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
Component.options.__file = "resources/assets/js/profile/components/license.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d610120", Component.options)
  } else {
    hotAPI.reload("data-v-7d610120", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'License',
	mounted: function mounted() {}
});

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d610120", module.exports)
  }
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "Licenses" } },
    [
      _vm._l(_vm.adjusterLicenses, function(license) {
        return _c(
          "div",
          {
            key: license.id,
            staticClass: "card",
            staticStyle: { "margin-top": "1rem" }
          },
          [
            _c("header", { staticClass: "card-header" }, [
              _c("p", { staticClass: "card-header-title" }, [
                _vm._v(
                  "\n\t\t     " +
                    _vm._s(license.license_state) +
                    " Adjusting License\n\t\t    "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "card-header-icon is-danger",
                  attrs: { "aria-label": "Delete" },
                  on: {
                    click: function($event) {
                      _vm.remove(license)
                    }
                  }
                },
                [_vm._m(0, true)]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _c("div", { staticClass: "columns" }, [
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-2" }, [
                    _c("p", [_vm._v(_vm._s(license.license_number))])
                  ]),
                  _vm._v(" "),
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-8" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(license.expiration_month) +
                          " / " +
                          _vm._s(license.expiration_year)
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          class: { "is-active": _vm.creatingNewLicense }
        },
        [
          _c("div", { staticClass: "modal-background" }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-card" }, [
            _c("header", { staticClass: "modal-card-head" }, [
              _c("p", { staticClass: "modal-card-title" }, [
                _vm._v("Add a new Adjuster License")
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "delete",
                attrs: { "aria-label": "close" },
                on: {
                  click: function($event) {
                    _vm.creatingNewLicense = false
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "modal-card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.submit($event)
                    },
                    keydown: function($event) {
                      _vm.newLicense.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c("div", { staticClass: "column is-2" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("State:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.license_state,
                                  expression: "newLicense.license_state"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "license_state",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }),
                              _vm._v(" "),
                              _vm._l(_vm.states, function(state) {
                                return _c(
                                  "option",
                                  { domProps: { value: state.abbr } },
                                  [_vm._v(_vm._s(state.abbr))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm.newLicense.errors.has("license_state")
                          ? _c("span", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.newLicense.errors.get("license_state")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-4" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("License #:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "control control has-icons-left" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.license_number,
                                  expression: "newLicense.license_number"
                                }
                              ],
                              staticClass: "input",
                              attrs: { type: "text" },
                              domProps: {
                                value: _vm.newLicense.license_number
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newLicense,
                                    "license_number",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _vm.newLicense.errors.has("license_number")
                              ? _c("span", {
                                  staticClass: "help is-danger",
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.newLicense.errors.get(
                                        "license_number"
                                      )
                                    )
                                  }
                                })
                              : _vm._e()
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-2" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Exp. Mo:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.expiration_month,
                                  expression: "newLicense.expiration_month"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "expiration_month",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("mo.")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.months, function(month) {
                                return _c(
                                  "option",
                                  { domProps: { value: month.abbr } },
                                  [_vm._v(_vm._s(month.abbr))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.newLicense.errors.has("expiration_month")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newLicense.errors.get(
                                      "expiration_month"
                                    )
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-4" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Exp. Year:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newLicense.expiration_year,
                                  expression: "newLicense.expiration_year"
                                }
                              ],
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.newLicense,
                                    "expiration_year",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("yr.")
                              ]),
                              _vm._v(" "),
                              _vm._l(10, function(n) {
                                return _c(
                                  "option",
                                  {
                                    domProps: { value: _vm.currentYear + n - 1 }
                                  },
                                  [_vm._v(_vm._s(_vm.currentYear + n - 1))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.newLicense.errors.has("expiration_year")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.newLicense.errors.get("expiration_year")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("footer", { staticClass: "modal-card-foot" }, [
              _c(
                "button",
                { staticClass: "button is-primary", on: { click: _vm.submit } },
                [_vm._v("Save")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button",
                  on: {
                    click: function($event) {
                      _vm.creatingNewLicense = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "button is-primary",
          on: {
            click: function($event) {
              _vm.creatingNewLicense = !_vm.creatingNewLicense
            }
          }
        },
        [_vm._v(_vm._s(_vm.buttonText))]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-close", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-1" }, [
      _c("p", [_c("strong", [_vm._v("License #")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-1" }, [
      _c("p", [_c("strong", [_vm._v("Expiration")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-hashtag" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cf0736c", module.exports)
  }
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(313)
/* template */
var __vue_template__ = __webpack_require__(314)
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
Component.options.__file = "resources/assets/js/profile/Documents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26052620", Component.options)
  } else {
    hotAPI.reload("data-v-26052620", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	name: 'Documents',
	mounted: function mounted() {
		this.userId = window.userData.id;
		this.name = window.userData.name;
		this.documents = window.userData.documents;
	},
	data: function data() {
		return {
			name: '',
			userId: '',
			documents: []
		};
	}
});

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "documents" } },
    [
      _c("h1", { staticClass: "profile-title" }, [_vm._v("My Documents")]),
      _c("br"),
      _vm._v(" "),
      _vm._l(_vm.documents, function(doc) {
        return _c("div", { staticClass: "document" }, [
          _vm._m(0, true),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "/users/" + _vm.userId + "/documents/" + doc.id }
            },
            [_vm._v(_vm._s(_vm.name) + "'s " + _vm._s(doc.type))]
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-file-o" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26052620", module.exports)
  }
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(316)
/* template */
var __vue_template__ = __webpack_require__(317)
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
Component.options.__file = "resources/assets/js/profile/Certifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6520dd1e", Component.options)
  } else {
    hotAPI.reload("data-v-6520dd1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	name: 'Certifications',
	mounted: function mounted() {
		this.certifications = window.userData.certifications;
		this.softwareExperiences = window.userData.software_experiences;
	},
	data: function data() {
		return {
			certifications: [],
			softwareExperiences: []
		};
	}
});

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "certifications" } }, [
    _c("h1", { staticClass: "profile-title" }, [_vm._v("My Certifications")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns", attrs: { id: "certifications" } },
      _vm._l(_vm.certifications, function(cert) {
        return _c("div", { staticClass: "certification column" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(cert.type) + "\n\t\t\t\t\t")
              ])
            ])
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("h1", { staticClass: "profile-title" }, [_vm._v("Software Experience")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns", attrs: { id: "certifications" } },
      _vm._l(_vm.softwareExperiences, function(exp) {
        return _c("div", { staticClass: "certification column" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(exp.type) + "\n\t\t\t\t\t")
              ])
            ])
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6520dd1e", module.exports)
  }
}

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(319)
/* template */
var __vue_template__ = __webpack_require__(320)
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
Component.options.__file = "resources/assets/js/profile/WorkHistory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6576760a", Component.options)
  } else {
    hotAPI.reload("data-v-6576760a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	name: 'WorkHistory',
	mounted: function mounted() {
		this.workHistory = this.setup(window.userData.work_history);
	},
	data: function data() {
		return {
			workHistory: {}
		};
	},

	methods: {
		setup: function setup(data) {
			var workHistory = {};
			for (var prop in data) {
				var newProp = prop.replace(/(_)/g, " ");
				workHistory[newProp] = data[prop];
				if (newProp == 'id' || newProp == 'created at' || newProp == 'updated at' || newProp == 'user id') {
					delete workHistory[newProp];
				}
				if (newProp.includes('experience') && workHistory[newProp] != 0) {
					var value = workHistory[newProp];
					workHistory[newProp] = Math.floor(+value / 12) + ' years ' + value % 12 + "  months";
				}
			}
			console.log(workHistory);
			return workHistory;
		}
	},
	filters: {
		capitalize: function capitalize(value) {
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		category: function category(key, _category, workHistory) {
			if (workHistory[key].includes(_category)) {
				return workHistory[key];
			}
		}
	}
});

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "workHistory" } }, [
    _c("h1", { staticClass: "profile-title" }, [_vm._v("My Work History")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.workHistory, function(value, key) {
        return value != 0
          ? _c("div", { staticClass: "column is-3" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "header",
                  {
                    staticClass: "card-header",
                    class: {
                      "is-dark": key.includes("claims"),
                      "is-info": key.includes("experience")
                    }
                  },
                  [
                    _c("p", { staticClass: "card-header-title" }, [
                      _vm._v(_vm._s(_vm._f("capitalize")(key)))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "content" }, [
                    _c("p", [_vm._v(_vm._s(value))])
                  ])
                ])
              ])
            ])
          : _vm._e()
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6576760a", module.exports)
  }
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(322)
/* template */
var __vue_template__ = __webpack_require__(323)
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
Component.options.__file = "resources/assets/js/profile/ProfileNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-557f9f56", Component.options)
  } else {
    hotAPI.reload("data-v-557f9f56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
	name: 'ProfileNavigation',
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tabs" }, [
    _c(
      "ul",
      [
        _c(
          "router-link",
          { attrs: { to: { name: "home" }, tag: "li", exact: "" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-user-circle-o" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Personal Info")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "licenses" }, tag: "li" } }, [
          _c("a", [
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", { staticClass: "fa fa-address-card-o" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Licenses")])
          ])
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: { name: "documents" }, tag: "li" } }, [
          _c("a", [
            _c("span", { staticClass: "icon is-small" }, [
              _c("i", { staticClass: "fa fa-file-text-o" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Documents")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { name: "certifications" }, tag: "li" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-certificate" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Certifications")])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: { name: "workHistory" }, tag: "li" } },
          [
            _c("a", [
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { staticClass: "fa fa-briefcase" })
              ]),
              _vm._v(" "),
              _c("span", [_vm._v("Work History")])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-557f9f56", module.exports)
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

},[289]);