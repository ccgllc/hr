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

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' }, { abbr: 'AZ', name: 'Arizona' }, { abbr: 'AR', name: 'Arkansas' }, { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' }, { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' }, { abbr: 'DC', name: 'District of Columbia' }, { abbr: 'FL', name: 'Florida' }, { abbr: 'GA', name: 'Georgia' }, { abbr: 'HI', name: 'Hawaii' }, { abbr: 'ID', name: 'Idaho' }, { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' }, { abbr: 'IA', name: 'Iowa' }, { abbr: 'KS', name: 'Kansas' }, { abbr: 'KY', name: 'Kentucky' }, { abbr: 'LA', name: 'Louisiana' }, { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' }, { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MI', name: 'Michigan' }, { abbr: 'MN', name: 'Minnesota' }, { abbr: 'MS', name: 'Mississippi' }, { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' }, { abbr: 'NE', name: 'Nebraska' }, { abbr: 'NV', name: 'Nevada' }, { abbr: 'NH', name: 'New Hampshire' }, { abbr: 'NJ', name: 'New Jersey' }, { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' }, { abbr: 'NC', name: 'North Carolina' }, { abbr: 'ND', name: 'North Dakota' }, { abbr: 'OH', name: 'Ohio' }, { abbr: 'OK', name: 'Oklahoma' }, { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'RI', name: 'Rhode Island' }, { abbr: 'SC', name: 'South Carolina' }, { abbr: 'SD', name: 'South Dakota' }, { abbr: 'TN', name: 'Tennessee' }, { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' }, { abbr: 'VT', name: 'Vermont' }, { abbr: 'VA', name: 'Virginia' }, { abbr: 'WA', name: 'Washington' }, { abbr: 'WV', name: 'West Virginia' }, { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' }]);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormWithFiles = function (_Form) {
  _inherits(FormWithFiles, _Form);

  function FormWithFiles(data) {
    _classCallCheck(this, FormWithFiles);

    return _possibleConstructorReturn(this, (FormWithFiles.__proto__ || Object.getPrototypeOf(FormWithFiles)).call(this, data));
  }

  _createClass(FormWithFiles, [{
    key: 'data',
    value: function data() {
      var _this2 = this;

      var data = new FormData();

      var _loop = function _loop(property) {
        // if prop is file we need to append it,
        if (_this2[property] instanceof File) {
          data.append(property, _this2[property], _this2[property.name]);
        }
        // if prop is an array we need to filter and append it to data
        // otherwise just append copy of current string/object reference.
        else {
            _this2[property] instanceof Array ? _this2[property].filter(function (prop) {
              return data.append(property + '[]', prop);
            }) : data.append(property, _this2[property]);
          }
      };

      for (var property in this.originalData) {
        _loop(property);
      }
      return data;
    }
  }]);

  return FormWithFiles;
}(__WEBPACK_IMPORTED_MODULE_0__Form__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (FormWithFiles);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ name: 'January', abbr: '01' }, { name: 'February', abbr: '02' }, { name: 'March', abbr: '03' }, { name: 'April', abbr: '04' }, { name: 'May', abbr: '05' }, { name: 'June', abbr: '06' }, { name: 'July', abbr: '07' }, { name: 'August', abbr: '08' }, { name: 'September', abbr: '09' }, { name: 'October', abbr: '10' }, { name: 'November', abbr: '11' }, { name: 'December', abbr: '12' }]);

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_croppa__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_croppa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_croppa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersonalInformation__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersonalInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PersonalInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Licenses__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Licenses___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Licenses__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Documents__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Documents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Documents__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Certifications__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Certifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Certifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkHistory__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WorkHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__WorkHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProfileNavigation__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProfileNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ProfileNavigation__);











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_croppa___default.a, { componentName: 'avatar-cropper' });

var routes = [{ path: '/', name: "home", component: __WEBPACK_IMPORTED_MODULE_3__PersonalInformation___default.a }, { path: '/licenses', name: "licenses", component: __WEBPACK_IMPORTED_MODULE_4__Licenses___default.a }, { path: '/documents', name: 'documents', component: __WEBPACK_IMPORTED_MODULE_5__Documents___default.a }, { path: '/work-history', name: "workHistory", component: __WEBPACK_IMPORTED_MODULE_7__WorkHistory___default.a }, { path: '/certifications', name: 'certifications', component: __WEBPACK_IMPORTED_MODULE_6__Certifications___default.a }];

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
		profileNavigation: __WEBPACK_IMPORTED_MODULE_8__ProfileNavigation___default.a
	},
	data: function data() {
		return {
			avatarCropper: null,
			showAvatarButton: false,
			addingAvatar: false
		};
	},

	methods: {
		toggleAvatarButton: function toggleAvatarButton() {
			console.log('toggling..');
			return this.showAvatarButton = !this.showAvatarButton;
		}
	}
}).$mount('#profile');

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(290)
/* template */
var __vue_template__ = __webpack_require__(303)
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_XactnetAddress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PhoneNumber_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_EmailAddress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Address_vue__ = __webpack_require__(300);
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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
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

/***/ 292:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'XactnetAddress',
	mounted: function mounted() {
		//find our input field
		this.input = document.getElementById('xactnet-address-input');
		this.form.xactnet_address = window.userData.profile.xactnet_address;
		this.userId = window.userData.id;
	},
	data: function data() {
		return {
			userId: '',
			form: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				xactnet_address: ''
			}),
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {}
		};
	},

	computed: {
		submitable: function submitable() {
			return this.form.xactnet_address === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.form.put('/api/user/' + this.userId + '/xactnet_address', false).then(function (response) {
					console.log(response);
					_this.form.xactnet_address = response;
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

/***/ 293:
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
                _vm.form.errors.clear($event.target.name)
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
                        value: _vm.form.xactnet_address,
                        expression: "form.xactnet_address"
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
                    domProps: { value: _vm.form.xactnet_address },
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
                          _vm.form,
                          "xactnet_address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("value"))
                      }
                    })
                  : _vm._e()
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.editing && _vm.form.xactnet_address === null
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
                    _vm._s(_vm.form.xactnet_address) +
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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(295)
/* template */
var __vue_template__ = __webpack_require__(296)
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

/***/ 295:
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
		this.form.phone = window.userData.profile.phone;
		this.userId = window.userData.id;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			currentValue: '',
			userId: '',
			form: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				phone: ''
			})
		};
	},

	computed: {
		submitable: function submitable() {
			return this.form.phone === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.form.put('/api/user/' + this.userId + '/phone', false).then(function (response) {
					console.log(response);
					_this.form.phone = response;
					// this.phoneNumber.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				return this.form.phone = window.userData.profile.phone;
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

/***/ 296:
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
                _vm.form.errors.clear($event.target.name)
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
                        value: _vm.form.phone,
                        expression: "form.phone"
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
                    domProps: { value: _vm.form.phone },
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
                        _vm.$set(_vm.form, "phone", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("value")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("value"))
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
                    _vm._s(_vm._f("phoneNumber")(_vm.form.phone)) +
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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(299)
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

/***/ 298:
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
		this.form.email = window.userData.email;
		this.userId = window.userData.id;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			userId: '',
			currentValue: '',
			form: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				email: ''
			})
		};
	},

	computed: {
		submitable: function submitable() {
			return this.form.email === '' ? false : true;
		}
	},
	methods: {
		// submit newly edited 
		submit: function submit() {
			var _this = this;

			if (this.submitable) {
				this.form.put('/api/user/' + this.userId + '/email', false).then(function (response) {
					console.log(response);
					_this.form.email = response;
					// this.emailAddress.api_token = window.userData.api_token;
				}).catch(function (error) {
					console.log(error);
				});
			} else {
				this.edit = false;
				return this.form.email = window.userData.profile.email;
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

/***/ 299:
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
                _vm.form.errors.clear($event.target.name)
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
                        value: _vm.form.email,
                        expression: "form.email"
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
                    domProps: { value: _vm.form.email },
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
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.form.errors.has("email")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.form.errors.get("email"))
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
                  "\n\t\t\t" + _vm._s(_vm.form.email) + "\n\t\t\t \n\t\t\t"
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(301)
/* template */
var __vue_template__ = __webpack_require__(302)
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

/***/ 301:
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
		this.userId = window.userData.id;
	},
	data: function data() {
		return {
			editing: false,
			showEdit: false,
			copyText: 'copy',
			input: {},
			currentValue: '',
			userId: '',
			address: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form_js__["a" /* default */]({
				street: '',
				city: '',
				state: '',
				zip: ''
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
				this.address.put('/api/user/' + this.userId + '/address', false).then(function (response) {
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

/***/ 302:
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
                _vm.address.errors.has("street")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("street"))
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
                _vm.address.errors.has("city")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("city"))
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
                _vm.address.errors.has("state")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("state"))
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
                _vm.address.errors.has("zip")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.address.errors.get("zip"))
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

/***/ 303:
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

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(305)
/* template */
var __vue_template__ = __webpack_require__(309)
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_license_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_license_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structur_src_form_Form_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_states_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_months_js__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		this.userId = window.userData.id;
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
			userId: '',
			newLicense: new __WEBPACK_IMPORTED_MODULE_1__structur_src_form_Form_js__["a" /* default */]({
				license_number: '',
				license_state: '',
				expiration_month: '',
				expiration_year: ''
			}),
			currentYear: '',
			states: __WEBPACK_IMPORTED_MODULE_2__data_states_js__["a" /* default */],
			months: __WEBPACK_IMPORTED_MODULE_3__data_months_js__["a" /* default */]
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			this.newLicense.post('/api/user/' + this.userId + '/license/').then(function (response) {
				console.log(response);
				_this.adjusterLicenses.push(response);
				return _this.creatingNewLicense = false;
			}).catch(function (error) {
				console.log(error);
			});
		},
		remove: function remove(license) {
			var _this2 = this;

			if (confirm('Are you sure? This action cannot be undone..')) {
				window.axios.delete('/api/user/' + this.userId + '/license/' + license.id).then(function (response) {
					console.log(response);
					var index = _this2.adjusterLicenses.indexOf(license);
					return _this2.adjusterLicenses.splice(index, 1);
				}).catch(function (error) {
					console.log(error);
				});
			}
		}
	}
});

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(307)
/* template */
var __vue_template__ = __webpack_require__(308)
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

/***/ 307:
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

/***/ 308:
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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "Licenses" } }, [
    _c(
      "div",
      { staticClass: "columns is-multiline" },
      _vm._l(_vm.adjusterLicenses, function(license) {
        return _c("div", { key: license.id, staticClass: "column is-half" }, [
          _c("div", { staticClass: "card" }, [
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
                  _c("div", { staticClass: "column is-3" }, [
                    _c("p", [_vm._v(_vm._s(license.license_number))])
                  ]),
                  _vm._v(" "),
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-3" }, [
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
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-info",
        on: {
          click: function($event) {
            _vm.creatingNewLicense = !_vm.creatingNewLicense
          }
        }
      },
      [_vm._v(_vm._s(_vm.buttonText))]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal", class: { "is-active": _vm.creatingNewLicense } },
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
                      _c("label", { staticClass: "label" }, [_vm._v("State:")]),
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
                                    var val = "_value" in o ? o._value : o.value
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
                            domProps: { value: _vm.newLicense.license_number },
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
                                    _vm.newLicense.errors.get("license_number")
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
                                    var val = "_value" in o ? o._value : o.value
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
                                  _vm.newLicense.errors.get("expiration_month")
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
                                    var val = "_value" in o ? o._value : o.value
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
    )
  ])
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
    return _c("div", { staticClass: "column is-3" }, [
      _c("p", [_c("strong", [_vm._v("License #")]), _vm._v(":")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(311)
/* template */
var __vue_template__ = __webpack_require__(315)
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_form_FormWithFiles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_File_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_File_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_File_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		file: __WEBPACK_IMPORTED_MODULE_1__components_File_vue___default.a
	},
	mounted: function mounted() {
		this.userId = window.userData.id;
		this.name = window.userData.name;
		this.documents = window.userData.documents;
	},
	data: function data() {
		return {
			name: '',
			userId: '',
			toggleDelete: false,
			documents: [],
			types: ['resume'],
			filename: '',
			creatingNewFile: false,
			newFile: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_FormWithFiles__["a" /* default */]({
				type: '',
				filename: '',
				file: {}
			})
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			this.newFile.post('/api/user/' + this.userId + '/documents/').then(function (response) {
				console.log(response);
				_this.documents.push(response);
				_this.creatingNewFile = false;
			}).catch(function (error) {
				console.error(error);
			});
		},
		remove: function remove(file) {
			console.log('deleting');
			var index = this.documents.indexOf(file);
			return this.documents.splice(index, 1);
		},
		processFile: function processFile(files) {
			if (files.length > 0) {
				this.filename = files[0].name;
				this.newFile.file = files[0];
			}
		}
	}
});

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
Component.options.__file = "resources/assets/js/profile/components/File.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89b52e66", Component.options)
  } else {
    hotAPI.reload("data-v-89b52e66", Component.options)
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'File',
	props: ['userId', 'file'],
	data: function data() {
		return {
			showDelete: false
		};
	},

	methods: {
		remove: function remove(file) {
			var _this = this;

			if (confirm("Are you sure? This cannot be undone.")) {
				window.axios.delete('/api/user/documents/' + file.id).then(function (response) {
					console.log(response);
					_this.$emit('file-deleted', file);
				}).catch(function (error) {
					console.error(error);
				});
			}
		}
	}
});

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "p",
      {
        staticStyle: {
          "text-transform": "uppercase",
          color: "#8f8f8f",
          "font-size": ".75rem"
        }
      },
      [_c("small", [_vm._v(_vm._s(_vm.file.type))])]
    ),
    _vm._v(" "),
    _c(
      "p",
      {
        on: {
          mouseover: function($event) {
            _vm.showDelete = true
          },
          mouseleave: function($event) {
            _vm.showDelete = false
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: {
              href: "/users/" + _vm.userId + "/documents/" + _vm.file.id
            }
          },
          [_vm._v(_vm._s(_vm.file.name))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showDelete,
                expression: "showDelete"
              }
            ]
          },
          [
            _c("span", {
              staticClass: "delete is-small",
              staticStyle: { "margin-top": "5px" },
              on: {
                click: function($event) {
                  _vm.remove(_vm.file)
                }
              }
            })
          ]
        )
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
      _c("i", { staticClass: "fa fa-file-o" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-89b52e66", module.exports)
  }
}

/***/ }),

/***/ 315:
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
        return _c("file", {
          key: doc.id,
          attrs: { "user-id": _vm.userId, file: doc },
          on: { "file-deleted": _vm.remove }
        })
      }),
      _vm._v(" "),
      _c("br"),
      _c(
        "button",
        {
          staticClass: "button is-info",
          on: {
            click: function($event) {
              _vm.creatingNewFile = !_vm.creatingNewFile
            }
          }
        },
        [_vm._v("Upload File")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal", class: { "is-active": _vm.creatingNewFile } },
        [
          _c("div", { staticClass: "modal-background" }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-card" }, [
            _c("header", { staticClass: "modal-card-head" }, [
              _c("p", { staticClass: "modal-card-title" }, [
                _vm._v("Add a new file")
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "delete",
                attrs: { "aria-label": "close" },
                on: {
                  click: function($event) {
                    _vm.creatingNewFile = false
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
                      _vm.newFile.errors.clear($event.target.name)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "columns is-multiline" }, [
                    _c("div", { staticClass: "column is-3" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Type:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select is-fullwidth" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newFile.type,
                                  expression: "newFile.type"
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
                                    _vm.newFile,
                                    "type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("select")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.types, function(type) {
                                return _c(
                                  "option",
                                  { domProps: { value: type } },
                                  [_vm._v(_vm._s(type))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm.newFile.errors.has("type")
                          ? _c("span", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.newFile.errors.get("type")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-9" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v("Filename:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newFile.filename,
                              expression: "newFile.filename"
                            }
                          ],
                          staticClass: "input",
                          attrs: { type: "text", placeholder: "My File" },
                          domProps: { value: _vm.newFile.filename },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newFile,
                                "filename",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.newFile.errors.has("filename")
                          ? _c("span", {
                              staticClass: "help is-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.newFile.errors.get("filename")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column" }, [
                      _c("div", { staticClass: "field" }, [
                        _c("div", { staticClass: "file has-name is-primary" }, [
                          _c("label", { staticClass: "file-label" }, [
                            _c("input", {
                              staticClass: "file-input",
                              attrs: { type: "file", name: "resume" },
                              on: {
                                change: function($event) {
                                  _vm.processFile($event.target.files)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(0),
                            _vm._v(" "),
                            _vm.filename != ""
                              ? _c("span", {
                                  staticClass: "file-name",
                                  domProps: {
                                    textContent: _vm._s(_vm.filename)
                                  }
                                })
                              : _vm._e()
                          ])
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
                      _vm.creatingNewFile = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            ])
          ])
        ]
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
    return _c("span", { staticClass: "file-cta" }, [
      _c("span", { staticClass: "file-icon" }, [
        _c("i", { staticClass: "fa fa-cloud-upload" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "file-label" }, [
        _vm._v("\n\t\t\t\t\t\t\t        Upload a file…\n\t\t\t\t\t\t\t      ")
      ])
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(317)
/* template */
var __vue_template__ = __webpack_require__(318)
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		this.userId = window.userData.id;
	},
	data: function data() {
		return {
			type: '',
			form: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form__["a" /* default */]({
				type: ''
			}),
			userId: '',
			creatingNew: false,
			certifications: [],
			softwareExperiences: [],
			certificationTypes: [{ name: 'AIC', label: 'AIC' }, { name: 'CPCU', label: 'CPCU' }, { name: 'TWIA/TFPA', label: 'TWIA / TFPA' }, { name: 'NFIP', label: 'NFIP' }, { name: 'HAAG', label: 'HAAG' }, { name: 'IIRC', label: 'IIRC' }, { name: 'rope/harness', label: 'Rope & Harness' }, { name: 'Earthquake', label: 'Earthquake' }, { name: 'Umpire', label: 'Umpire' }, { name: 'Appraiser', label: 'Appraiser' }],
			experienceTypes: [{ name: 'xactimate', label: 'Xactimate' }, { name: 'symbility', label: 'Symbility' }, { name: 'simsol', label: 'Simsol' }, { name: 'guidewire', label: 'Guidewire' }, { name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' }, { name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' }]
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			console.log('submitting');
			this.form.post('/api/user/' + this.userId + '/' + this.type).then(function (response) {
				console.log(response);
				_this.type == 'certifications' ? _this.certifications.push(response) : _this.softwareExperiences.push(response);
				return _this.creatingNew = false;
			}).catch(function (error) {
				console.error(error);
			});
		},
		remove: function remove(obj, uri) {
			var _this2 = this;

			window.axios.delete('/api/user/' + uri + '/' + obj.id).then(function (response) {
				console.log(response);
				if (uri == 'software-experiences') {
					var index = _this2.softwareExperiences.indexOf(obj);
					return _this2.softwareExperiences.splice(index, 1);
				} else {
					var _index = _this2.certifications.indexOf(obj);
					return _this2.certifications.splice(_index, 1);
				}
			}).catch(function (error) {
				console.error(error);
			});
		},
		clearForm: function clearForm() {
			return this.form.type = '';
		}
	}
});

/***/ }),

/***/ 318:
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
      { staticClass: "columns is-multiline", attrs: { id: "certifications" } },
      _vm._l(_vm.certifications, function(cert) {
        return _c("div", { staticClass: "certification column is-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._m(0, true),
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(cert.type) + "\n\t\t\t\t\t\t"),
                _c(
                  "span",
                  {
                    staticClass:
                      "is-pulled-right is-tooltip-danger tooltip is-tooltip-left",
                    attrs: { "data-tooltip": "Delete " + cert.type }
                  },
                  [
                    _c("a", {
                      staticClass: "delete is-small is-danger",
                      on: {
                        click: function($event) {
                          _vm.remove(cert, "certifications")
                        }
                      }
                    })
                  ]
                )
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
      { staticClass: "columns is-multiline", attrs: { id: "certifications" } },
      _vm._l(_vm.softwareExperiences, function(exp) {
        return _c("div", { staticClass: "certification column is-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _vm._m(1, true),
                _vm._v("\n\t\t\t\t\t\t" + _vm._s(exp.type) + "\n\t\t\t\t\t\t"),
                _c(
                  "span",
                  {
                    staticClass:
                      "is-pulled-right is-tooltip-danger tooltip is-tooltip-left",
                    attrs: { "data-tooltip": "Delete " + exp.type }
                  },
                  [
                    _c("a", {
                      staticClass: "delete is-small is-danger",
                      on: {
                        click: function($event) {
                          _vm.remove(exp, "software-experiences")
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c("br"),
    _c(
      "button",
      {
        staticClass: "button is-info",
        on: {
          click: function($event) {
            _vm.creatingNew = !_vm.creatingNew
          }
        }
      },
      [_vm._v("Add new")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal", class: { "is-active": _vm.creatingNew } },
      [
        _c("div", { staticClass: "modal-background" }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-card" }, [
          _c("header", { staticClass: "modal-card-head" }, [
            _c("p", { staticClass: "modal-card-title" }, [
              _vm._v("New certification or software experience")
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "delete",
              attrs: { "aria-label": "close" },
              on: {
                click: function($event) {
                  _vm.creatingNew = false
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
                    _vm.form.errors.clear($event.target.name)
                  }
                }
              },
              [
                _c("div", { staticClass: "columns is-multiline" }, [
                  _c("div", { staticClass: "column is-12" }, [
                    _c("div", { staticClass: "field" }, [
                      _c("label", { staticClass: "label" }, [_vm._v("Type:")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "select is-fullwidth" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.type,
                                expression: "type"
                              }
                            ],
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.type = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.clearForm
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "software-experiences" } },
                              [_vm._v("Software Experience")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "certifications" } },
                              [_vm._v("Certification")]
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.type == "software-experiences"
                    ? _c("div", { staticClass: "column is-12" }, [
                        _c("div", { staticClass: "field" }, [
                          _c("label", { staticClass: "label" }, [
                            _vm._v("Software Experience:")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "select is-fullwidth" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.type,
                                    expression: "form.type"
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
                                      _vm.form,
                                      "type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.experienceTypes, function(exp) {
                                  return _c(
                                    "option",
                                    { domProps: { value: exp.name } },
                                    [_vm._v(_vm._s(exp.label))]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _vm.form.errors.has("type")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.form.errors.get("type")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.type == "certifications"
                    ? _c("div", { staticClass: "column is-12" }, [
                        _c("div", { staticClass: "field" }, [
                          _c("label", { staticClass: "label" }, [
                            _vm._v("Certification:")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "select is-fullwidth" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.type,
                                    expression: "form.type"
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
                                      _vm.form,
                                      "type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.certificationTypes, function(cert) {
                                  return _c(
                                    "option",
                                    { domProps: { value: cert.name } },
                                    [_vm._v(_vm._s(cert.label))]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _vm.form.errors.has("type")
                            ? _c("span", {
                                staticClass: "help is-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.form.errors.get("type")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    : _vm._e()
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
                    _vm.creatingNew = false
                  }
                }
              },
              [_vm._v("Cancel")]
            )
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
    return _c("span", { staticClass: "icon has-text-info" }, [
      _c("i", { staticClass: "fa fa-certificate" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon has-text-info" }, [
      _c("i", { staticClass: "fa fa-laptop" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6520dd1e", module.exports)
  }
}

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(320)
/* template */
var __vue_template__ = __webpack_require__(321)
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

/***/ 320:
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

/***/ 321:
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(323)
/* template */
var __vue_template__ = __webpack_require__(324)
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

/***/ 323:
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

/***/ 324:
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

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 * vue-croppa v1.2.0
 * https://github.com/zhanziyang/vue-croppa
 * 
 * Copyright (c) 2018 zhanziyang
 * Released under the ISC license
 */
  
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Croppa = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined([], factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {
  'use strict';

  function drawImage(img, orientation, x, y, width, height) {
    if (!/^[1-8]$/.test(orientation)) throw new Error('orientation should be [1-8]');

    if (x == null) x = 0;
    if (y == null) y = 0;
    if (width == null) width = img.width;
    if (height == null) height = img.height;

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    ctx.save();
    switch (+orientation) {
      // 1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
      case 1:
          break;

      // 2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
      case 2:
         ctx.translate(width, 0);
         ctx.scale(-1, 1);
         break;

      // 3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
      case 3:
          ctx.translate(width, height);
          ctx.rotate(180 / 180 * Math.PI);
          break;

      // 4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
      case 4:
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;

      // 5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
      case 5:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(90 / 180 * Math.PI);
          ctx.scale(1, -1);
          break;

      // 6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
      case 6:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(90 / 180 * Math.PI);
          ctx.translate(0, -height);
          break;

      // 7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
      case 7:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(270 / 180 * Math.PI);
          ctx.translate(-width, height);
          ctx.scale(1, -1);
          break;

      // 8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
      case 8:
          canvas.width = height;
          canvas.height = width;
          ctx.translate(0, width);
          ctx.rotate(270 / 180 * Math.PI);
          break;
    }

    ctx.drawImage(img, x, y, width, height);
    ctx.restore();

    return canvas;
  }

  return {
    drawImage: drawImage
  };
}));
});

var u = {
  onePointCoord: function onePointCoord(point, vm) {
    var canvas = vm.canvas,
        quality = vm.quality;

    var rect = canvas.getBoundingClientRect();
    var clientX = point.clientX;
    var clientY = point.clientY;
    return {
      x: (clientX - rect.left) * quality,
      y: (clientY - rect.top) * quality
    };
  },
  getPointerCoords: function getPointerCoords(evt, vm) {
    var pointer = void 0;
    if (evt.touches && evt.touches[0]) {
      pointer = evt.touches[0];
    } else if (evt.changedTouches && evt.changedTouches[0]) {
      pointer = evt.changedTouches[0];
    } else {
      pointer = evt;
    }
    return this.onePointCoord(pointer, vm);
  },
  getPinchDistance: function getPinchDistance(evt, vm) {
    var pointer1 = evt.touches[0];
    var pointer2 = evt.touches[1];
    var coord1 = this.onePointCoord(pointer1, vm);
    var coord2 = this.onePointCoord(pointer2, vm);

    return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2));
  },
  getPinchCenterCoord: function getPinchCenterCoord(evt, vm) {
    var pointer1 = evt.touches[0];
    var pointer2 = evt.touches[1];
    var coord1 = this.onePointCoord(pointer1, vm);
    var coord2 = this.onePointCoord(pointer2, vm);

    return {
      x: (coord1.x + coord2.x) / 2,
      y: (coord1.y + coord2.y) / 2
    };
  },
  imageLoaded: function imageLoaded(img) {
    return img.complete && img.naturalWidth !== 0;
  },
  rAFPolyfill: function rAFPolyfill() {
    // rAF polyfill
    if (typeof document == 'undefined' || typeof window == 'undefined') return;
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          var arg = currTime + timeToCall;
          callback(arg);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }

    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  },
  toBlobPolyfill: function toBlobPolyfill() {
    if (typeof document == 'undefined' || typeof window == 'undefined' || !HTMLCanvasElement) return;
    var binStr, len, arr;
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function value(callback, type, quality) {
          binStr = atob(this.toDataURL(type, quality).split(',')[1]);
          len = binStr.length;
          arr = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }

          callback(new Blob([arr], { type: type || 'image/png' }));
        }
      });
    }
  },
  eventHasFile: function eventHasFile(evt) {
    var dt = evt.dataTransfer || evt.originalEvent.dataTransfer;
    if (dt.types) {
      for (var i = 0, len = dt.types.length; i < len; i++) {
        if (dt.types[i] == 'Files') {
          return true;
        }
      }
    }

    return false;
  },
  getFileOrientation: function getFileOrientation(arrayBuffer) {
    var view = new DataView(arrayBuffer);
    if (view.getUint16(0, false) != 0xFFD8) return -2;
    var length = view.byteLength;
    var offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) == 0x0112) {
            return view.getUint16(offset + i * 12 + 8, little);
          }
        }
      } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
    }
    return -1;
  },
  base64ToArrayBuffer: function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  },
  getRotatedImage: function getRotatedImage(img, orientation) {
    var _canvas = index.drawImage(img, orientation);
    var _img = new Image();
    _img.src = _canvas.toDataURL();
    return _img;
  },
  flipX: function flipX(ori) {
    if (ori % 2 == 0) {
      return ori - 1;
    }

    return ori + 1;
  },
  flipY: function flipY(ori) {
    var map = {
      1: 4,
      4: 1,
      2: 3,
      3: 2,
      5: 8,
      8: 5,
      6: 7,
      7: 6
    };

    return map[ori];
  },
  rotate90: function rotate90(ori) {
    var map = {
      1: 6,
      2: 7,
      3: 8,
      4: 5,
      5: 2,
      6: 3,
      7: 4,
      8: 1
    };

    return map[ori];
  },
  numberValid: function numberValid(n) {
    return typeof n === 'number' && !isNaN(n);
  }
};

Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

var initialImageType = String;
if (typeof window !== 'undefined' && window.Image) {
  initialImageType = [String, Image];
}

var props = {
  value: Object,
  width: {
    type: Number,
    default: 200,
    validator: function validator(val) {
      return val > 0;
    }
  },
  height: {
    type: Number,
    default: 200,
    validator: function validator(val) {
      return val > 0;
    }
  },
  placeholder: {
    type: String,
    default: 'Choose an image'
  },
  placeholderColor: {
    default: '#606060'
  },
  placeholderFontSize: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0;
    }
  },
  canvasColor: {
    default: 'transparent'
  },
  quality: {
    type: Number,
    default: 2,
    validator: function validator(val) {
      return val > 0;
    }
  },
  zoomSpeed: {
    default: 3,
    type: Number,
    validator: function validator(val) {
      return val > 0;
    }
  },
  accept: String,
  fileSizeLimit: {
    type: Number,
    default: 0,
    validator: function validator(val) {
      return val >= 0;
    }
  },
  disabled: Boolean,
  disableDragAndDrop: Boolean,
  disableClickToChoose: Boolean,
  disableDragToMove: Boolean,
  disableScrollToZoom: Boolean,
  disablePinchToZoom: Boolean,
  disableRotation: Boolean,
  reverseScrollToZoom: Boolean,
  preventWhiteSpace: Boolean,
  showRemoveButton: {
    type: Boolean,
    default: true
  },
  removeButtonColor: {
    type: String,
    default: 'red'
  },
  removeButtonSize: {
    type: Number
  },
  initialImage: initialImageType,
  initialSize: {
    type: String,
    default: 'cover',
    validator: function validator(val) {
      return val === 'cover' || val === 'contain' || val === 'natural';
    }
  },
  initialPosition: {
    type: String,
    default: 'center',
    validator: function validator(val) {
      var valids = ['center', 'top', 'bottom', 'left', 'right'];
      return val.split(' ').every(function (word) {
        return valids.indexOf(word) >= 0;
      }) || /^-?\d+% -?\d+%$/.test(val);
    }
  },
  inputAttrs: Object,
  showLoading: Boolean,
  loadingSize: {
    type: Number,
    default: 20
  },
  loadingColor: {
    type: String,
    default: '#606060'
  },
  replaceDrop: Boolean,
  passive: Boolean,
  imageBorderRadius: {
    type: [Number, String],
    default: 0
  }
};

var events = {
  INIT_EVENT: 'init',
  FILE_CHOOSE_EVENT: 'file-choose',
  FILE_SIZE_EXCEED_EVENT: 'file-size-exceed',
  FILE_TYPE_MISMATCH_EVENT: 'file-type-mismatch',
  NEW_IMAGE: 'new-image',
  NEW_IMAGE_DRAWN: 'new-image-drawn',
  IMAGE_REMOVE_EVENT: 'image-remove',
  MOVE_EVENT: 'move',
  ZOOM_EVENT: 'zoom',
  DRAW: 'draw',
  INITIAL_IMAGE_LOADED_EVENT: 'initial-image-loaded',
  LOADING_START: 'loading-start',
  LOADING_END: 'loading-end'
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var PCT_PER_ZOOM = 1 / 100000; // The amount of zooming everytime it happens, in percentage of image width.
var MIN_MS_PER_CLICK = 500; // If touch duration is shorter than the value, then it is considered as a click.
var CLICK_MOVE_THRESHOLD = 100; // If touch move distance is greater than this value, then it will by no mean be considered as a click.
var MIN_WIDTH = 10; // The minimal width the user can zoom to.
var DEFAULT_PLACEHOLDER_TAKEUP = 2 / 3; // Placeholder text by default takes up this amount of times of canvas width.
var PINCH_ACCELERATION = 1; // The amount of times by which the pinching is more sensitive than the scolling

var syncData = ['imgData', 'img', 'imgSet', 'originalImage', 'naturalHeight', 'naturalWidth', 'orientation', 'scaleRatio'];
// const DEBUG = false

var component = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "wrapper", class: 'croppa-container ' + (_vm.img ? 'croppa--has-target' : '') + ' ' + (_vm.passive ? 'croppa--passive' : '') + ' ' + (_vm.disabled ? 'croppa--disabled' : '') + ' ' + (_vm.disableClickToChoose ? 'croppa--disabled-cc' : '') + ' ' + (_vm.disableDragToMove && _vm.disableScrollToZoom ? 'croppa--disabled-mz' : '') + ' ' + (_vm.fileDraggedOver ? 'croppa--dropzone' : ''), on: { "dragenter": function dragenter($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handleDragEnter($event);
        }, "dragleave": function dragleave($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handleDragLeave($event);
        }, "dragover": function dragover($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handleDragOver($event);
        }, "drop": function drop($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handleDrop($event);
        } } }, [_c('input', _vm._b({ ref: "fileInput", staticStyle: { "height": "1px", "width": "1px", "overflow": "hidden", "margin-left": "-99999px", "position": "absolute" }, attrs: { "type": "file", "accept": _vm.accept, "disabled": _vm.disabled }, on: { "change": _vm._handleInputChange } }, 'input', _vm.inputAttrs)), _c('div', { staticClass: "slots", staticStyle: { "width": "0", "height": "0", "visibility": "hidden" } }, [_vm._t("initial"), _vm._t("placeholder")], 2), _c('canvas', { ref: "canvas", on: { "click": function click($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handleClick($event);
        }, "touchstart": function touchstart($event) {
          $event.stopPropagation();_vm._handlePointerStart($event);
        }, "mousedown": function mousedown($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerStart($event);
        }, "pointerstart": function pointerstart($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerStart($event);
        }, "touchend": function touchend($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerEnd($event);
        }, "touchcancel": function touchcancel($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerEnd($event);
        }, "mouseup": function mouseup($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerEnd($event);
        }, "pointerend": function pointerend($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerEnd($event);
        }, "pointercancel": function pointercancel($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerEnd($event);
        }, "touchmove": function touchmove($event) {
          $event.stopPropagation();_vm._handlePointerMove($event);
        }, "mousemove": function mousemove($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerMove($event);
        }, "pointermove": function pointermove($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerMove($event);
        }, "pointerleave": function pointerleave($event) {
          $event.stopPropagation();$event.preventDefault();_vm._handlePointerLeave($event);
        }, "DOMMouseScroll": function DOMMouseScroll($event) {
          $event.stopPropagation();_vm._handleWheel($event);
        }, "wheel": function wheel($event) {
          $event.stopPropagation();_vm._handleWheel($event);
        }, "mousewheel": function mousewheel($event) {
          $event.stopPropagation();_vm._handleWheel($event);
        } } }), _vm.showRemoveButton && _vm.img && !_vm.passive ? _c('svg', { staticClass: "icon icon-remove", style: 'top: -' + _vm.height / 40 + 'px; right: -' + _vm.width / 40 + 'px', attrs: { "viewBox": "0 0 1024 1024", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "width": _vm.removeButtonSize || _vm.width / 10, "height": _vm.removeButtonSize || _vm.width / 10 }, on: { "click": _vm.remove } }, [_c('path', { attrs: { "d": "M511.921231 0C229.179077 0 0 229.257846 0 512 0 794.702769 229.179077 1024 511.921231 1024 794.781538 1024 1024 794.702769 1024 512 1024 229.257846 794.781538 0 511.921231 0ZM732.041846 650.633846 650.515692 732.081231C650.515692 732.081231 521.491692 593.683692 511.881846 593.683692 502.429538 593.683692 373.366154 732.081231 373.366154 732.081231L291.761231 650.633846C291.761231 650.633846 430.316308 523.500308 430.316308 512.196923 430.316308 500.696615 291.761231 373.523692 291.761231 373.523692L373.366154 291.918769C373.366154 291.918769 503.453538 430.395077 511.881846 430.395077 520.349538 430.395077 650.515692 291.918769 650.515692 291.918769L732.041846 373.523692C732.041846 373.523692 593.447385 502.547692 593.447385 512.196923 593.447385 521.412923 732.041846 650.633846 732.041846 650.633846Z", "fill": _vm.removeButtonColor } })]) : _vm._e(), _vm.showLoading && _vm.loading ? _c('div', { staticClass: "sk-fading-circle", style: _vm.loadingStyle }, _vm._l(12, function (i) {
      return _c('div', { key: i, class: 'sk-circle' + i + ' sk-circle' }, [_c('div', { staticClass: "sk-circle-indicator", style: { backgroundColor: _vm.loadingColor } })]);
    })) : _vm._e(), _vm._t("default")], 2);
  }, staticRenderFns: [],
  model: {
    prop: 'value',
    event: events.INIT_EVENT
  },

  props: props,

  data: function data() {
    return {
      canvas: null,
      ctx: null,
      originalImage: null,
      img: null,
      dragging: false,
      lastMovingCoord: null,
      imgData: {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0
      },
      fileDraggedOver: false,
      tabStart: 0,
      scrolling: false,
      pinching: false,
      rotating: false,
      pinchDistance: 0,
      supportTouch: false,
      pointerMoved: false,
      pointerStartCoord: null,
      naturalWidth: 0,
      naturalHeight: 0,
      scaleRatio: null,
      orientation: 1,
      userMetadata: null,
      imageSet: false,
      currentPointerCoord: null,
      currentIsInitial: false,
      loading: false
    };
  },


  computed: {
    outputWidth: function outputWidth() {
      return this.width * this.quality;
    },
    outputHeight: function outputHeight() {
      return this.height * this.quality;
    },
    computedPlaceholderFontSize: function computedPlaceholderFontSize() {
      return this.placeholderFontSize * this.quality;
    },
    aspectRatio: function aspectRatio() {
      return this.naturalWidth / this.naturalHeight;
    },
    loadingStyle: function loadingStyle() {
      return {
        width: this.loadingSize + 'px',
        height: this.loadingSize + 'px',
        right: '15px',
        bottom: '10px'
      };
    }
  },

  mounted: function mounted() {
    var _this = this;

    this._initialize();
    u.rAFPolyfill();
    u.toBlobPolyfill();

    var supports = this.supportDetection();
    if (!supports.basic) {
      console.warn('Your browser does not support vue-croppa functionality.');
    }

    if (this.passive) {
      this.$watch('value._data', function (data) {
        var set$$1 = false;
        if (!data) return;
        for (var key in data) {
          if (syncData.indexOf(key) >= 0) {
            var val = data[key];
            if (val !== _this[key]) {
              _this.$set(_this, key, val);
              set$$1 = true;
            }
          }
        }
        if (set$$1) {
          if (!_this.img) {
            _this.remove();
          } else {
            _this.$nextTick(function () {
              _this._draw();
            });
          }
        }
      }, {
        deep: true
      });
    }
  },


  watch: {
    outputWidth: function outputWidth() {
      this.onDimensionChange();
    },
    outputHeight: function outputHeight() {
      this.onDimensionChange();
    },
    canvasColor: function canvasColor() {
      if (!this.img) {
        this._setPlaceholders();
      } else {
        this._draw();
      }
    },
    imageBorderRadius: function imageBorderRadius() {
      if (this.img) {
        this._draw();
      }
    },
    placeholder: function placeholder() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    placeholderColor: function placeholderColor() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    computedPlaceholderFontSize: function computedPlaceholderFontSize() {
      if (!this.img) {
        this._setPlaceholders();
      }
    },
    preventWhiteSpace: function preventWhiteSpace(val) {
      if (val) {
        this.imageSet = false;
      }
      this._placeImage();
    },
    scaleRatio: function scaleRatio(val, oldVal) {
      if (this.passive) return;
      if (!this.img) return;
      if (!u.numberValid(val)) return;

      var x = 1;
      if (u.numberValid(oldVal) && oldVal !== 0) {
        x = val / oldVal;
      }
      var pos = this.currentPointerCoord || {
        x: this.imgData.startX + this.imgData.width / 2,
        y: this.imgData.startY + this.imgData.height / 2
      };
      this.imgData.width = this.naturalWidth * val;
      this.imgData.height = this.naturalHeight * val;

      if (!this.userMetadata && this.imageSet && !this.rotating) {
        var offsetX = (x - 1) * (pos.x - this.imgData.startX);
        var offsetY = (x - 1) * (pos.y - this.imgData.startY);
        this.imgData.startX = this.imgData.startX - offsetX;
        this.imgData.startY = this.imgData.startY - offsetY;
      }

      if (this.preventWhiteSpace) {
        this._preventZoomingToWhiteSpace();
        this._preventMovingToWhiteSpace();
      }
    },

    'imgData.width': function imgDataWidth(val, oldVal) {
      // if (this.passive) return
      if (!u.numberValid(val)) return;
      this.scaleRatio = val / this.naturalWidth;
      if (this.hasImage()) {
        if (Math.abs(val - oldVal) > val * (1 / 100000)) {
          this.$emit(events.ZOOM_EVENT);
          this._draw();
        }
      }
    },
    'imgData.height': function imgDataHeight(val) {
      // if (this.passive) return
      if (!u.numberValid(val)) return;
      this.scaleRatio = val / this.naturalHeight;
    },
    'imgData.startX': function imgDataStartX(val) {
      // if (this.passive) return
      if (this.hasImage()) {
        this.$nextTick(this._draw);
      }
    },
    'imgData.startY': function imgDataStartY(val) {
      // if (this.passive) return
      if (this.hasImage()) {
        this.$nextTick(this._draw);
      }
    },
    loading: function loading(val) {
      if (this.passive) return;
      if (val) {
        this.$emit(events.LOADING_START);
      } else {
        this.$emit(events.LOADING_END);
      }
    }
  },

  methods: {
    getCanvas: function getCanvas() {
      return this.canvas;
    },
    getContext: function getContext() {
      return this.ctx;
    },
    getChosenFile: function getChosenFile() {
      return this.$refs.fileInput.files[0];
    },
    move: function move(offset) {
      if (!offset || this.passive) return;
      var oldX = this.imgData.startX;
      var oldY = this.imgData.startY;
      this.imgData.startX += offset.x;
      this.imgData.startY += offset.y;
      if (this.preventWhiteSpace) {
        this._preventMovingToWhiteSpace();
      }
      if (this.imgData.startX !== oldX || this.imgData.startY !== oldY) {
        this.$emit(events.MOVE_EVENT);
        this._draw();
      }
    },
    moveUpwards: function moveUpwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: 0, y: -amount });
    },
    moveDownwards: function moveDownwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: 0, y: amount });
    },
    moveLeftwards: function moveLeftwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: -amount, y: 0 });
    },
    moveRightwards: function moveRightwards() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.move({ x: amount, y: 0 });
    },
    zoom: function zoom() {
      var zoomIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var acceleration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (this.passive) return;
      var realSpeed = this.zoomSpeed * acceleration;
      var speed = this.outputWidth * PCT_PER_ZOOM * realSpeed;
      var x = 1;
      if (zoomIn) {
        x = 1 + speed;
      } else if (this.imgData.width > MIN_WIDTH) {
        x = 1 - speed;
      }

      this.scaleRatio *= x;
    },
    zoomIn: function zoomIn() {
      this.zoom(true);
    },
    zoomOut: function zoomOut() {
      this.zoom(false);
    },
    rotate: function rotate() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.disableRotation || this.disabled || this.passive) return;
      step = parseInt(step);
      if (isNaN(step) || step > 3 || step < -3) {
        console.warn('Invalid argument for rotate() method. It should one of the integers from -3 to 3.');
        step = 1;
      }
      this._rotateByStep(step);
    },
    flipX: function flipX() {
      if (this.disableRotation || this.disabled || this.passive) return;
      this._setOrientation(2);
    },
    flipY: function flipY() {
      if (this.disableRotation || this.disabled || this.passive) return;
      this._setOrientation(4);
    },
    refresh: function refresh() {
      this.$nextTick(this._initialize);
    },
    hasImage: function hasImage() {
      return !!this.imageSet;
    },
    applyMetadata: function applyMetadata(metadata) {
      if (!metadata || this.passive) return;
      this.userMetadata = metadata;
      var ori = metadata.orientation || this.orientation || 1;
      this._setOrientation(ori, true);
    },
    generateDataUrl: function generateDataUrl(type, compressionRate) {
      if (!this.hasImage()) return '';
      return this.canvas.toDataURL(type, compressionRate);
    },
    generateBlob: function generateBlob(callback, mimeType, qualityArgument) {
      if (!this.hasImage()) {
        callback(null);
        return;
      }
      this.canvas.toBlob(callback, mimeType, qualityArgument);
    },
    promisedBlob: function promisedBlob() {
      var _this2 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof Promise == 'undefined') {
        console.warn('No Promise support. Please add Promise polyfill if you want to use this method.');
        return;
      }
      return new Promise(function (resolve, reject) {
        try {
          _this2.generateBlob.apply(_this2, [function (blob) {
            resolve(blob);
          }].concat(args));
        } catch (err) {
          reject(err);
        }
      });
    },
    getMetadata: function getMetadata() {
      if (!this.hasImage()) return {};
      var _imgData = this.imgData,
          startX = _imgData.startX,
          startY = _imgData.startY;


      return {
        startX: startX,
        startY: startY,
        scale: this.scaleRatio,
        orientation: this.orientation
      };
    },
    supportDetection: function supportDetection() {
      if (typeof window === 'undefined') return;
      var div = document.createElement('div');
      return {
        'basic': window.requestAnimationFrame && window.File && window.FileReader && window.FileList && window.Blob,
        'dnd': 'ondragstart' in div && 'ondrop' in div
      };
    },
    chooseFile: function chooseFile() {
      if (this.passive) return;
      this.$refs.fileInput.click();
    },
    remove: function remove() {
      this._setPlaceholders();

      var hadImage = this.img != null;
      this.originalImage = null;
      this.img = null;
      this.$refs.fileInput.value = '';
      this.imgData = {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0
      };
      this.orientation = 1;
      this.scaleRatio = null;
      this.userMetadata = null;
      this.imageSet = false;
      this.loading = false;

      if (hadImage) {
        this.$emit(events.IMAGE_REMOVE_EVENT);
      }
    },
    addClipPlugin: function addClipPlugin(plugin) {
      if (!this.clipPlugins) {
        this.clipPlugins = [];
      }
      if (typeof plugin === 'function' && this.clipPlugins.indexOf(plugin) < 0) {
        this.clipPlugins.push(plugin);
      } else {
        throw Error('Clip plugins should be functions');
      }
    },
    _initialize: function _initialize() {
      this.canvas = this.$refs.canvas;
      this._setSize();
      this.canvas.style.backgroundColor = !this.canvasColor || this.canvasColor == 'default' ? 'transparent' : typeof this.canvasColor === 'string' ? this.canvasColor : '';
      this.ctx = this.canvas.getContext('2d');
      this.originalImage = null;
      this.img = null;
      this.imageSet = false;
      this._setInitial();
      if (!this.passive) {
        this.$emit(events.INIT_EVENT, this);
      }
    },
    _setSize: function _setSize() {
      this.canvas.width = this.outputWidth;
      this.canvas.height = this.outputHeight;
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';
    },
    _rotateByStep: function _rotateByStep(step) {
      var orientation = 1;
      switch (step) {
        case 1:
          orientation = 6;
          break;
        case 2:
          orientation = 3;
          break;
        case 3:
          orientation = 8;
          break;
        case -1:
          orientation = 8;
          break;
        case -2:
          orientation = 3;
          break;
        case -3:
          orientation = 6;
          break;
      }
      this._setOrientation(orientation);
    },
    _setImagePlaceholder: function _setImagePlaceholder() {
      var _this3 = this;

      var img = void 0;
      if (this.$slots.placeholder && this.$slots.placeholder[0]) {
        var vNode = this.$slots.placeholder[0];
        var tag = vNode.tag,
            elm = vNode.elm;

        if (tag == 'img' && elm) {
          img = elm;
        }
      }

      if (!img) return;

      var onLoad = function onLoad() {
        _this3.ctx.drawImage(img, 0, 0, _this3.outputWidth, _this3.outputHeight);
      };

      if (u.imageLoaded(img)) {
        onLoad();
      } else {
        img.onload = onLoad;
      }
    },
    _setTextPlaceholder: function _setTextPlaceholder() {
      var ctx = this.ctx;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      var defaultFontSize = this.outputWidth * DEFAULT_PLACEHOLDER_TAKEUP / this.placeholder.length;
      var fontSize = !this.computedPlaceholderFontSize || this.computedPlaceholderFontSize == 0 ? defaultFontSize : this.computedPlaceholderFontSize;
      ctx.font = fontSize + 'px sans-serif';
      ctx.fillStyle = !this.placeholderColor || this.placeholderColor == 'default' ? '#606060' : this.placeholderColor;
      ctx.fillText(this.placeholder, this.outputWidth / 2, this.outputHeight / 2);
    },
    _setPlaceholders: function _setPlaceholders() {
      this._paintBackground();
      this._setImagePlaceholder();
      this._setTextPlaceholder();
    },
    _setInitial: function _setInitial() {
      var _this4 = this;

      var src = void 0,
          img = void 0;
      if (this.$slots.initial && this.$slots.initial[0]) {
        var vNode = this.$slots.initial[0];
        var tag = vNode.tag,
            elm = vNode.elm;

        if (tag == 'img' && elm) {
          img = elm;
        }
      }
      if (this.initialImage && typeof this.initialImage === 'string') {
        src = this.initialImage;
        img = new Image();
        if (!/^data:/.test(src) && !/^blob:/.test(src)) {
          img.setAttribute('crossOrigin', 'anonymous');
        }
        img.src = src;
      } else if (_typeof(this.initialImage) === 'object' && this.initialImage instanceof Image) {
        img = this.initialImage;
      }
      if (!src && !img) {
        this._setPlaceholders();
        return;
      }
      this.currentIsInitial = true;
      if (u.imageLoaded(img)) {
        // this.$emit(events.INITIAL_IMAGE_LOADED_EVENT)
        this._onload(img, +img.dataset['exifOrientation'], true);
      } else {
        this.loading = true;
        img.onload = function () {
          // this.$emit(events.INITIAL_IMAGE_LOADED_EVENT)
          _this4._onload(img, +img.dataset['exifOrientation'], true);
        };

        img.onerror = function () {
          _this4._setPlaceholders();
        };
      }
    },
    _onload: function _onload(img) {
      var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var initial = arguments[2];

      this.originalImage = img;
      this.img = img;

      if (isNaN(orientation)) {
        orientation = 1;
      }

      this._setOrientation(orientation);

      if (initial) {
        this.$emit(events.INITIAL_IMAGE_LOADED_EVENT);
      }
    },
    _handleClick: function _handleClick() {
      if (!this.hasImage() && !this.disableClickToChoose && !this.disabled && !this.supportTouch && !this.passive) {
        this.chooseFile();
      }
    },
    _handleInputChange: function _handleInputChange() {
      var input = this.$refs.fileInput;
      if (!input.files.length || this.passive) return;

      var file = input.files[0];
      this._onNewFileIn(file);
    },
    _onNewFileIn: function _onNewFileIn(file) {
      var _this5 = this;

      this.currentIsInitial = false;
      this.loading = true;
      this.$emit(events.FILE_CHOOSE_EVENT, file);
      if (!this._fileSizeIsValid(file)) {
        this.loading = false;
        this.$emit(events.FILE_SIZE_EXCEED_EVENT, file);
        throw new Error('File size exceeds limit which is ' + this.fileSizeLimit + ' bytes.');
      }
      if (!this._fileTypeIsValid(file)) {
        this.loading = false;
        this.$emit(events.FILE_TYPE_MISMATCH_EVENT, file);
        var type = file.type || file.name.toLowerCase().split('.').pop();
        throw new Error('File type (' + type + ') mimatches (' + this.accept + ').');
      }
      if (typeof window !== 'undefined' && typeof window.FileReader !== 'undefined') {
        var fr = new FileReader();
        fr.onload = function (e) {
          var fileData = e.target.result;
          var orientation = 1;
          try {
            orientation = u.getFileOrientation(u.base64ToArrayBuffer(fileData));
          } catch (err) {}
          if (orientation < 1) orientation = 1;
          var img = new Image();
          img.src = fileData;
          img.onload = function () {
            _this5._onload(img, orientation);
            _this5.$emit(events.NEW_IMAGE);
          };
        };
        fr.readAsDataURL(file);
      }
    },
    _fileSizeIsValid: function _fileSizeIsValid(file) {
      if (!file) return false;
      if (!this.fileSizeLimit || this.fileSizeLimit == 0) return true;

      return file.size < this.fileSizeLimit;
    },
    _fileTypeIsValid: function _fileTypeIsValid(file) {
      if (!this.accept) return true;
      var accept = this.accept;
      var baseMimetype = accept.replace(/\/.*$/, '');
      var types = accept.split(',');
      for (var i = 0, len = types.length; i < len; i++) {
        var type = types[i];
        var t = type.trim();
        if (t.charAt(0) == '.') {
          if (file.name.toLowerCase().split('.').pop() === t.toLowerCase().slice(1)) return true;
        } else if (/\/\*$/.test(t)) {
          var fileBaseType = file.type.replace(/\/.*$/, '');
          if (fileBaseType === baseMimetype) {
            return true;
          }
        } else if (file.type === type) {
          return true;
        }
      }

      return false;
    },
    _placeImage: function _placeImage(applyMetadata) {
      if (!this.img) return;
      var imgData = this.imgData;

      this.naturalWidth = this.img.naturalWidth;
      this.naturalHeight = this.img.naturalHeight;

      imgData.startX = u.numberValid(imgData.startX) ? imgData.startX : 0;
      imgData.startY = u.numberValid(imgData.startY) ? imgData.startY : 0;

      if (this.preventWhiteSpace) {
        this._aspectFill();
      } else if (!this.imageSet) {
        if (this.initialSize == 'contain') {
          this._aspectFit();
        } else if (this.initialSize == 'natural') {
          this._naturalSize();
        } else {
          this._aspectFill();
        }
      } else {
        this.imgData.width = this.naturalWidth * this.scaleRatio;
        this.imgData.height = this.naturalHeight * this.scaleRatio;
      }

      if (!this.imageSet) {
        if (/top/.test(this.initialPosition)) {
          imgData.startY = 0;
        } else if (/bottom/.test(this.initialPosition)) {
          imgData.startY = this.outputHeight - imgData.height;
        }

        if (/left/.test(this.initialPosition)) {
          imgData.startX = 0;
        } else if (/right/.test(this.initialPosition)) {
          imgData.startX = this.outputWidth - imgData.width;
        }

        if (/^-?\d+% -?\d+%$/.test(this.initialPosition)) {
          var result = /^(-?\d+)% (-?\d+)%$/.exec(this.initialPosition);
          var x = +result[1] / 100;
          var y = +result[2] / 100;
          imgData.startX = x * (this.outputWidth - imgData.width);
          imgData.startY = y * (this.outputHeight - imgData.height);
        }
      }

      applyMetadata && this._applyMetadata();

      if (applyMetadata && this.preventWhiteSpace) {
        this.zoom(false, 0);
      } else {
        this.move({ x: 0, y: 0 });
        this._draw();
      }
    },
    _aspectFill: function _aspectFill() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      var canvasRatio = this.outputWidth / this.outputHeight;
      var scaleRatio = void 0;

      if (this.aspectRatio > canvasRatio) {
        scaleRatio = imgHeight / this.outputHeight;
        this.imgData.width = imgWidth / scaleRatio;
        this.imgData.height = this.outputHeight;
        this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
        this.imgData.startY = 0;
      } else {
        scaleRatio = imgWidth / this.outputWidth;
        this.imgData.height = imgHeight / scaleRatio;
        this.imgData.width = this.outputWidth;
        this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
        this.imgData.startX = 0;
      }
    },
    _aspectFit: function _aspectFit() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      var canvasRatio = this.outputWidth / this.outputHeight;
      var scaleRatio = void 0;
      if (this.aspectRatio > canvasRatio) {
        scaleRatio = imgWidth / this.outputWidth;
        this.imgData.height = imgHeight / scaleRatio;
        this.imgData.width = this.outputWidth;
        this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
      } else {
        scaleRatio = imgHeight / this.outputHeight;
        this.imgData.width = imgWidth / scaleRatio;
        this.imgData.height = this.outputHeight;
        this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
      }
    },
    _naturalSize: function _naturalSize() {
      var imgWidth = this.naturalWidth;
      var imgHeight = this.naturalHeight;
      this.imgData.width = imgWidth;
      this.imgData.height = imgHeight;
      this.imgData.startX = -(this.imgData.width - this.outputWidth) / 2;
      this.imgData.startY = -(this.imgData.height - this.outputHeight) / 2;
    },
    _handlePointerStart: function _handlePointerStart(evt) {
      if (this.passive) return;
      this.supportTouch = true;
      this.pointerMoved = false;
      var pointerCoord = u.getPointerCoords(evt, this);
      this.pointerStartCoord = pointerCoord;

      if (this.disabled) return;
      // simulate click with touch on mobile devices
      if (!this.hasImage() && !this.disableClickToChoose) {
        this.tabStart = new Date().valueOf();
        return;
      }
      // ignore mouse right click and middle click
      if (evt.which && evt.which > 1) return;

      if (!evt.touches || evt.touches.length === 1) {
        this.dragging = true;
        this.pinching = false;
        var coord = u.getPointerCoords(evt, this);
        this.lastMovingCoord = coord;
      }

      if (evt.touches && evt.touches.length === 2 && !this.disablePinchToZoom) {
        this.dragging = false;
        this.pinching = true;
        this.pinchDistance = u.getPinchDistance(evt, this);
      }

      var cancelEvents = ['mouseup', 'touchend', 'touchcancel', 'pointerend', 'pointercancel'];
      for (var i = 0, len = cancelEvents.length; i < len; i++) {
        var e = cancelEvents[i];
        document.addEventListener(e, this._handlePointerEnd);
      }
    },
    _handlePointerEnd: function _handlePointerEnd(evt) {
      if (this.passive) return;
      var pointerMoveDistance = 0;
      if (this.pointerStartCoord) {
        var pointerCoord = u.getPointerCoords(evt, this);
        pointerMoveDistance = Math.sqrt(Math.pow(pointerCoord.x - this.pointerStartCoord.x, 2) + Math.pow(pointerCoord.y - this.pointerStartCoord.y, 2)) || 0;
      }
      if (this.disabled) return;
      if (!this.hasImage() && !this.disableClickToChoose) {
        var tabEnd = new Date().valueOf();
        if (pointerMoveDistance < CLICK_MOVE_THRESHOLD && tabEnd - this.tabStart < MIN_MS_PER_CLICK && this.supportTouch) {
          this.chooseFile();
        }
        this.tabStart = 0;
        return;
      }

      this.dragging = false;
      this.pinching = false;
      this.pinchDistance = 0;
      this.lastMovingCoord = null;
      this.pointerMoved = false;
      this.pointerStartCoord = null;
    },
    _handlePointerMove: function _handlePointerMove(evt) {
      if (this.passive) return;
      this.pointerMoved = true;
      if (!this.hasImage()) return;
      var coord = u.getPointerCoords(evt, this);
      this.currentPointerCoord = coord;

      if (this.disabled || this.disableDragToMove) return;

      evt.preventDefault();
      if (!evt.touches || evt.touches.length === 1) {
        if (!this.dragging) return;
        if (this.lastMovingCoord) {
          this.move({
            x: coord.x - this.lastMovingCoord.x,
            y: coord.y - this.lastMovingCoord.y
          });
        }
        this.lastMovingCoord = coord;
      }

      if (evt.touches && evt.touches.length === 2 && !this.disablePinchToZoom) {
        if (!this.pinching) return;
        var distance = u.getPinchDistance(evt, this);
        var delta = distance - this.pinchDistance;
        this.zoom(delta > 0, PINCH_ACCELERATION);
        this.pinchDistance = distance;
      }
    },
    _handlePointerLeave: function _handlePointerLeave() {
      if (this.passive) return;
      this.currentPointerCoord = null;
    },
    _handleWheel: function _handleWheel(evt) {
      var _this6 = this;

      if (this.passive) return;
      if (this.disabled || this.disableScrollToZoom || !this.hasImage()) return;
      evt.preventDefault();
      this.scrolling = true;
      if (evt.wheelDelta < 0 || evt.deltaY > 0 || evt.detail > 0) {
        this.zoom(this.reverseScrollToZoom);
      } else if (evt.wheelDelta > 0 || evt.deltaY < 0 || evt.detail < 0) {
        this.zoom(!this.reverseScrollToZoom);
      }
      this.$nextTick(function () {
        _this6.scrolling = false;
      });
    },
    _handleDragEnter: function _handleDragEnter(evt) {
      if (this.passive) return;
      if (this.disabled || this.disableDragAndDrop || !u.eventHasFile(evt)) return;
      if (this.hasImage() && !this.replaceDrop) return;
      this.fileDraggedOver = true;
    },
    _handleDragLeave: function _handleDragLeave(evt) {
      if (this.passive) return;
      if (!this.fileDraggedOver || !u.eventHasFile(evt)) return;
      this.fileDraggedOver = false;
    },
    _handleDragOver: function _handleDragOver(evt) {},
    _handleDrop: function _handleDrop(evt) {
      if (this.passive) return;
      if (!this.fileDraggedOver || !u.eventHasFile(evt)) return;
      if (this.hasImage() && this.replaceDrop) {
        this.remove();
      }
      this.fileDraggedOver = false;

      var file = void 0;
      var dt = evt.dataTransfer;
      if (!dt) return;
      if (dt.items) {
        for (var i = 0, len = dt.items.length; i < len; i++) {
          var item = dt.items[i];
          if (item.kind == 'file') {
            file = item.getAsFile();
            break;
          }
        }
      } else {
        file = dt.files[0];
      }

      if (file) {
        this._onNewFileIn(file);
      }
    },
    _preventMovingToWhiteSpace: function _preventMovingToWhiteSpace() {
      if (this.imgData.startX > 0) {
        this.imgData.startX = 0;
      }
      if (this.imgData.startY > 0) {
        this.imgData.startY = 0;
      }
      if (this.outputWidth - this.imgData.startX > this.imgData.width) {
        this.imgData.startX = -(this.imgData.width - this.outputWidth);
      }
      if (this.outputHeight - this.imgData.startY > this.imgData.height) {
        this.imgData.startY = -(this.imgData.height - this.outputHeight);
      }
    },
    _preventZoomingToWhiteSpace: function _preventZoomingToWhiteSpace() {
      if (this.imgData.width < this.outputWidth) {
        this.scaleRatio = this.outputWidth / this.naturalWidth;
      }

      if (this.imgData.height < this.outputHeight) {
        this.scaleRatio = this.outputHeight / this.naturalHeight;
      }
    },
    _setOrientation: function _setOrientation() {
      var _this7 = this;

      var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var applyMetadata = arguments[1];

      var useOriginal = applyMetadata;
      if (orientation > 1 || useOriginal) {
        if (!this.img) return;
        this.rotating = true;
        var _img = u.getRotatedImage(useOriginal ? this.originalImage : this.img, orientation);
        _img.onload = function () {
          _this7.img = _img;
          _this7._placeImage(applyMetadata);
        };
      } else {
        this._placeImage(applyMetadata);
      }

      if (orientation == 2) {
        // flip x
        this.orientation = u.flipX(this.orientation);
      } else if (orientation == 4) {
        // flip y
        this.orientation = u.flipY(this.orientation);
      } else if (orientation == 6) {
        // 90 deg
        this.orientation = u.rotate90(this.orientation);
      } else if (orientation == 3) {
        // 180 deg
        this.orientation = u.rotate90(u.rotate90(this.orientation));
      } else if (orientation == 8) {
        // 270 deg
        this.orientation = u.rotate90(u.rotate90(u.rotate90(this.orientation)));
      } else {
        this.orientation = orientation;
      }

      if (useOriginal) {
        this.orientation = orientation;
      }
    },
    _paintBackground: function _paintBackground() {
      var backgroundColor = !this.canvasColor || this.canvasColor == 'default' ? 'transparent' : this.canvasColor;
      this.ctx.fillStyle = backgroundColor;
      this.ctx.clearRect(0, 0, this.outputWidth, this.outputHeight);
      this.ctx.fillRect(0, 0, this.outputWidth, this.outputHeight);
    },
    _draw: function _draw() {
      var _this8 = this;

      this.$nextTick(function () {
        if (!_this8.img) return;
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
          requestAnimationFrame(_this8._drawFrame);
        } else {
          _this8._drawFrame();
        }
      });
    },
    _drawFrame: function _drawFrame() {
      this.loading = false;
      var ctx = this.ctx;
      var _imgData2 = this.imgData,
          startX = _imgData2.startX,
          startY = _imgData2.startY,
          width = _imgData2.width,
          height = _imgData2.height;


      this._paintBackground();
      ctx.drawImage(this.img, startX, startY, width, height);

      if (this.preventWhiteSpace) {
        this._clip(this._createContainerClipPath
        // this._clip(this._createImageClipPath)
        );
      }

      this.$emit(events.DRAW, ctx);
      if (!this.imageSet) {
        this.imageSet = true;
        this.$emit(events.NEW_IMAGE_DRAWN);
      }
      this.rotating = false;
    },
    _clipPathFactory: function _clipPathFactory(x, y, width, height) {
      var ctx = this.ctx;
      var radius = typeof this.imageBorderRadius === 'number' ? this.imageBorderRadius : !isNaN(Number(this.imageBorderRadius)) ? Number(this.imageBorderRadius) : 0;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    },
    _createContainerClipPath: function _createContainerClipPath() {
      var _this9 = this;

      this._clipPathFactory(0, 0, this.outputWidth, this.outputHeight);
      if (this.clipPlugins && this.clipPlugins.length) {
        this.clipPlugins.forEach(function (func) {
          func(_this9.ctx, 0, 0, _this9.outputWidth, _this9.outputHeight);
        });
      }
    },


    // _createImageClipPath () {
    //   let { startX, startY, width, height } = this.imgData
    //   let w = width
    //   let h = height
    //   let x = startX
    //   let y = startY
    //   if (w < h) {
    //     h = this.outputHeight * (width / this.outputWidth)
    //   }
    //   if (h < w) {
    //     w = this.outputWidth * (height / this.outputHeight)
    //     x = startX + (width - this.outputWidth) / 2
    //   }
    //   this._clipPathFactory(x, startY, w, h)
    // },

    _clip: function _clip(createPath) {
      var ctx = this.ctx;
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.globalCompositeOperation = 'destination-in';
      createPath();
      ctx.fill();
      ctx.restore();
    },
    _applyMetadata: function _applyMetadata() {
      var _this10 = this;

      if (!this.userMetadata) return;
      var _userMetadata = this.userMetadata,
          startX = _userMetadata.startX,
          startY = _userMetadata.startY,
          scale = _userMetadata.scale;


      if (u.numberValid(startX)) {
        this.imgData.startX = startX;
      }

      if (u.numberValid(startY)) {
        this.imgData.startY = startY;
      }

      if (u.numberValid(scale)) {
        this.scaleRatio = scale;
      }

      this.$nextTick(function () {
        _this10.userMetadata = null;
      });
    },
    onDimensionChange: function onDimensionChange() {
      if (!this.img) {
        this._initialize();
      } else {
        if (this.preventWhiteSpace) {
          this.imageSet = false;
        }
        this._setSize();
        this._placeImage();
      }
    }
  }
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$1 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var defaultOptions = {
  componentName: 'croppa'
};

var VueCroppa = {
  install: function install(Vue, options) {
    options = index$1({}, defaultOptions, options);
    var version = Number(Vue.version.split('.')[0]);
    if (version < 2) {
      throw new Error('vue-croppa supports vue version 2.0 and above. You are using Vue@' + version + '. Please upgrade to the latest version of Vue.');
    }
    var componentName = options.componentName || 'croppa';

    // registration
    Vue.component(componentName, component);
  },

  component: component
};

return VueCroppa;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

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

},[287]);