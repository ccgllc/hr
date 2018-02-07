webpackJsonp([3],{

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

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structur_src_form_FormWithFiles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__months__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experience__ = __webpack_require__(245);


// import personalData from './personalInfo';
// import workHistoryData from './workHistory';




/* harmony default export */ __webpack_exports__["a"] = ({
	text: {
		title: "",
		subtitle: ""
	},
	personalInfo: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form__["a" /* default */]({
		street: '',
		city: '',
		state: '',
		zip: '',
		phone: '',
		license_state: '',
		license_number: '',
		expiration_month: '',
		expiration_year: '',
		xactnet_address: ''
	}),
	workHistory: new __WEBPACK_IMPORTED_MODULE_0__structur_src_form_Form__["a" /* default */]({
		desk_experience: 0,
		residential_experience: 0,
		residential_claims: 0,
		residential_cat_experience: 0,
		residential_cat_claims: 0,
		commercial_experience: 0,
		commercial_claims: 0,
		commercial_cat_experience: 0,
		commercial_cat_claims: 0,
		large_loss_experience: 0,
		large_loss_claims: 0,
		large_loss_cat_experience: 0,
		large_loss_cat_claims: 0,
		auto_experience: 0,
		auto_claims: 0,
		inland_marine_experience: 0,
		inland_marine_claims: 0,
		casualty_experience: 0,
		casualty_claims: 0,
		environmental_experience: 0,
		environmental_claims: 0,
		flood_experience: 0,
		flood_claims: 0,
		earthquake_experience: 0,
		earthquake_claims: 0
	}),
	certifications: new __WEBPACK_IMPORTED_MODULE_1__structur_src_form_FormWithFiles__["a" /* default */]({
		certifications: [],
		software: [],
		resume: {}
	}),
	// resume: new FormData(),
	experience: __WEBPACK_IMPORTED_MODULE_4__experience__["a" /* default */].years,
	claims: __WEBPACK_IMPORTED_MODULE_4__experience__["a" /* default */].claims,
	progress: 0,
	states: __WEBPACK_IMPORTED_MODULE_2__states__["a" /* default */],
	months: __WEBPACK_IMPORTED_MODULE_3__months__["a" /* default */]
});

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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PersonalInformation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PersonalInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_PersonalInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WorkHistory__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WorkHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_WorkHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Certifications__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Certifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Certifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Complete__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ApplicationProgress__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ApplicationProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_ApplicationProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SectionTitle__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SectionTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_SectionTitle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_appData_js__ = __webpack_require__(11);



// import route view components...








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_PersonalInformation___default.a }, { path: '/work-history', component: __WEBPACK_IMPORTED_MODULE_3__components_WorkHistory___default.a }, { path: '/certifications', component: __WEBPACK_IMPORTED_MODULE_4__components_Certifications___default.a }, { path: '/complete', component: __WEBPACK_IMPORTED_MODULE_5__components_Complete___default.a }];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: routes
});

var application = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Application',
	router: router,
	components: {
		sectionTitle: __WEBPACK_IMPORTED_MODULE_7__components_SectionTitle___default.a,
		applicationProgress: __WEBPACK_IMPORTED_MODULE_6__components_ApplicationProgress___default.a
	},
	mounted: function mounted() {
		window.localStorage.token = window.userData.token;
	},
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_8__data_appData_js__["a" /* default */]
		};
	}
	// filters: {
	// 	phone(value) {
	// 		console.log(value);
	// 		if(!value) return '';
	// 		value = value.replace(/\b(\d{3})([-.\s]?)+(\d{3})([-.\s]?)+(\d{4})\b/g, '($1) $3-$5')
	// 		return value;
	// 	}
	// }

}).$mount('#apply');

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(244)
/* template */
var __vue_template__ = __webpack_require__(246)
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
Component.options.__file = "resources/assets/js/components/PersonalInformation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f323a936", Component.options)
  } else {
    hotAPI.reload("data-v-f323a936", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_appData_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'PersonalInformation',
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_0__data_appData_js__["a" /* default */],
			hasXactimate: false,
			currentYear: '',
			btnState: false
		};
	},
	mounted: function mounted() {
		this.setupView();
	},

	computed: {
		//
	},
	methods: {
		submit: function submit() {
			var _this = this;

			this.appData.personalInfo.post('/api/user/personal-information', false).then(function (response) {
				console.log(response.data);
				_this.$router.push({ path: '/work-history' });
			}).catch(function (error) {
				_this.btnState = false;
			});
		},
		setupView: function setupView() {
			this.appData.text.title = "Personal Information";
			this.appData.text.subtitle = "Step One - Tell Us About Yourself";
			this.appData.progress = 1;
			var today = new Date();
			this.currentYear = today.getFullYear();
		}
	}
});

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	years: [{ label: 'None', value: 'none' }, { label: 'A year or less', value: '0-1' }, { label: '2 - 5 years', value: '2-5' }, { label: '6 - 9 years', value: '6-9' }, { label: '10 - 14 years', value: '10-14' }, { label: '20 - 24 years', value: '20-24' }, { label: '25 - 30 years', value: '25-30' }, { label: '30+ years', value: '30+' }],
	claims: [{ label: 'None', value: 'none' }, { label: '1-50', value: '1-50' }, { label: '51-100', value: '51-100' }, { label: '101-200', value: '101-200' }, { label: '201-500', value: '201-500' }, { label: '501-1,000', value: '501-1000' }, { label: '1,001-2,500', value: '1001-2500' }, { label: '2,501-5,000', value: '2501-5000' }, { label: '5,001-10,000', value: '5001-10000' }, { label: '10,000+', value: '10000+' }]
});

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "personalInformation", method: "post" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.submit($event)
        },
        keydown: function($event) {
          _vm.appData.personalInfo.errors.clear($event.target.name)
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", { staticClass: "label" }, [_vm._v("Street:")]),
        _vm._v(" "),
        _c("div", { staticClass: "control control has-icons-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.appData.personalInfo.street,
                expression: "appData.personalInfo.street"
              }
            ],
            staticClass: "input",
            attrs: { type: "text" },
            domProps: { value: _vm.appData.personalInfo.street },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.appData.personalInfo,
                  "street",
                  $event.target.value
                )
              }
            }
          }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm.appData.personalInfo.errors.has("street")
            ? _c("span", {
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(
                    _vm.appData.personalInfo.errors.get("street")
                  )
                }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("City:")]),
            _vm._v(" "),
            _c("div", { staticClass: "control control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.appData.personalInfo.city,
                    expression: "appData.personalInfo.city"
                  }
                ],
                staticClass: "input",
                attrs: { type: "text" },
                domProps: { value: _vm.appData.personalInfo.city },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.appData.personalInfo,
                      "city",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm.appData.personalInfo.errors.has("city")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.personalInfo.errors.get("city")
                      )
                    }
                  })
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("label", { staticClass: "label" }, [_vm._v("State")]),
          _vm._v(" "),
          _c("div", { staticClass: "select" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.appData.personalInfo.state,
                    expression: "appData.personalInfo.state"
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
                      _vm.appData.personalInfo,
                      "state",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select State")
                ]),
                _vm._v(" "),
                _vm._l(_vm.appData.states, function(state) {
                  return _c("option", { domProps: { value: state.abbr } }, [
                    _vm._v(_vm._s(state.name))
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _vm.appData.personalInfo.errors.has("state")
            ? _c("span", {
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(
                    _vm.appData.personalInfo.errors.get("state")
                  )
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("Zip:")]),
            _vm._v(" "),
            _c("div", { staticClass: "control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.appData.personalInfo.zip,
                    expression: "appData.personalInfo.zip"
                  }
                ],
                staticClass: "input",
                attrs: { type: "text" },
                domProps: { value: _vm.appData.personalInfo.zip },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.appData.personalInfo,
                      "zip",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm.appData.personalInfo.errors.has("zip")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.personalInfo.errors.get("zip")
                      )
                    }
                  })
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", { staticClass: "label" }, [_vm._v("Phone:")]),
        _vm._v(" "),
        _c("div", { staticClass: "control has-icons-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.appData.personalInfo.phone,
                expression: "appData.personalInfo.phone"
              }
            ],
            staticClass: "input",
            attrs: { type: "text" },
            domProps: { value: _vm.appData.personalInfo.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.appData.personalInfo, "phone", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _vm.appData.personalInfo.errors.has("phone")
            ? _c("span", {
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(
                    _vm.appData.personalInfo.errors.get("phone")
                  )
                }
              })
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("License State:")]),
            _vm._v(" "),
            _c("div", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.appData.personalInfo.license_state,
                      expression: "appData.personalInfo.license_state"
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
                        _vm.appData.personalInfo,
                        "license_state",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Select State")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.appData.states, function(state) {
                    return _c("option", { domProps: { value: state.abbr } }, [
                      _vm._v(_vm._s(state.name))
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm.appData.personalInfo.errors.has("license_state")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(
                      _vm.appData.personalInfo.errors.get("license_state")
                    )
                  }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("License #:")]),
            _vm._v(" "),
            _c("div", { staticClass: "control control has-icons-left" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.appData.personalInfo.license_number,
                    expression: "appData.personalInfo.license_number"
                  }
                ],
                staticClass: "input",
                attrs: { type: "text" },
                domProps: { value: _vm.appData.personalInfo.license_number },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.appData.personalInfo,
                      "license_number",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm.appData.personalInfo.errors.has("license_number")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.personalInfo.errors.get("license_number")
                      )
                    }
                  })
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column is-2" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("Exp. Mo:")]),
            _vm._v(" "),
            _c("div", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.appData.personalInfo.expiration_month,
                      expression: "appData.personalInfo.expiration_month"
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
                        _vm.appData.personalInfo,
                        "expiration_month",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("mo.")]),
                  _vm._v(" "),
                  _vm._l(_vm.appData.months, function(month) {
                    return _c("option", { domProps: { value: month.abbr } }, [
                      _vm._v(_vm._s(month.abbr))
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.appData.personalInfo.errors.has("license_expiration_month")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.personalInfo.errors.get(
                          "license_expiration_month"
                        )
                      )
                    }
                  })
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column is-2" }, [
          _c("div", { staticClass: "field" }, [
            _c("label", { staticClass: "label" }, [_vm._v("Exp. Year:")]),
            _vm._v(" "),
            _c("div", { staticClass: "select" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.appData.personalInfo.expiration_year,
                      expression: "appData.personalInfo.expiration_year"
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
                        _vm.appData.personalInfo,
                        "expiration_year",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("yr.")]),
                  _vm._v(" "),
                  _vm._l(10, function(n) {
                    return _c(
                      "option",
                      { domProps: { value: _vm.currentYear + n - 1 } },
                      [_vm._v(_vm._s(_vm.currentYear + n - 1))]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.appData.personalInfo.errors.has("license_expiration_year")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.personalInfo.errors.get(
                          "license_expiration_year"
                        )
                      )
                    }
                  })
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hasXactimate,
                  expression: "hasXactimate"
                }
              ],
              staticClass: "switch is-rounded",
              attrs: {
                id: "switchRoundedDefault",
                type: "checkbox",
                name: "switchRoundedDefault"
              },
              domProps: {
                checked: Array.isArray(_vm.hasXactimate)
                  ? _vm._i(_vm.hasXactimate, null) > -1
                  : _vm.hasXactimate
              },
              on: {
                change: function($event) {
                  var $$a = _vm.hasXactimate,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.hasXactimate = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.hasXactimate = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.hasXactimate = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "switchRoundedDefault" } }, [
              _vm._v("Do you have Xactimate credentials?")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.hasXactimate
        ? _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [
                  _vm._v("Xactnet Address")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.appData.personalInfo.xactnet_address,
                        expression: "appData.personalInfo.xactnet_address"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text" },
                    domProps: {
                      value: _vm.appData.personalInfo.xactnet_address
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.appData.personalInfo,
                          "xactnet_address",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column has-text-right" }, [
          _c(
            "button",
            {
              staticClass: "button is-primary",
              class: { "is-loading": _vm.btnState },
              on: {
                click: function($event) {
                  _vm.btnState = !_vm.btnState
                }
              }
            },
            [_c("span", [_vm._v("save & continue")]), _vm._v(" "), _vm._m(8)]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Your Contact Info")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-map-marker" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-location-arrow" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-mobile" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Adjuster License")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-hashtag" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Xactimate")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-chevron-circle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f323a936", module.exports)
  }
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(248)
/* template */
var __vue_template__ = __webpack_require__(255)
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
Component.options.__file = "resources/assets/js/components/WorkHistory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26aa6a5c", Component.options)
  } else {
    hotAPI.reload("data-v-26aa6a5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Experience_vue__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Experience_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Experience_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ClaimCount_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ClaimCount_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ClaimCount_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_appData_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import states from '../data/states.js';
/* harmony default export */ __webpack_exports__["default"] = ({
	name: "WorkHistory",
	components: {
		experience: __WEBPACK_IMPORTED_MODULE_0__Experience_vue___default.a,
		claimCount: __WEBPACK_IMPORTED_MODULE_1__ClaimCount_vue___default.a
	},
	mounted: function mounted() {
		this.setupView();
	},
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_2__data_appData_js__["a" /* default */],
			btnState: false,
			commercialCat: false,
			residentialCat: false,
			largeLossCat: false
		};
	},

	methods: {
		submit: function submit() {
			var _this = this;

			this.appData.workHistory.post('/api/user/work-history', false).then(function (response) {
				console.log(response.data);
				_this.$router.push({ path: '/certifications' });
			});
		},
		updateTotal: function updateTotal(data) {
			this.btnState ? this.btnState = false : null;
			return __WEBPACK_IMPORTED_MODULE_2__data_appData_js__["a" /* default */][data.propRef][data.modelRef] = data.total;
		},
		setupView: function setupView() {
			this.appData.text.title = "Work History / Experience";
			this.appData.text.subtitle = "Step Two - Tell us what you've worked on.";
			this.appData.progress = 2;
		}
	}
});

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(250)
/* template */
var __vue_template__ = __webpack_require__(251)
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
Component.options.__file = "resources/assets/js/components/Experience.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41863c3e", Component.options)
  } else {
    hotAPI.reload("data-v-41863c3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
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
//
//
//
//
//
//
//
//
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
	name: 'Experience',
	props: ['model', 'property'],
	data: function data() {
		return {
			years: 0,
			months: 0,
			results: {
				total: 0,
				modelRef: this.model,
				propRef: this.property
			}
		};
	},

	methods: {
		add: function add() {
			this.results.total = +(this.years * 12) + +this.months;
			return this.$emit('experience-updated', this.results);
		}
	}
});

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns" }, [
    _c("div", { staticClass: "column is-half" }, [
      _c("div", { staticClass: "field is-horizontal" }, [
        _c("div", { staticClass: "field-body" }, [
          _c("div", { staticClass: "field is-expanded" }, [
            _c("div", { staticClass: "field has-addons" }, [
              _c("p", { staticClass: "control is-expanded" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.years,
                      expression: "years"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "number",
                    maxlength: "2",
                    min: "0",
                    max: "99",
                    placeholder: "0",
                    number: ""
                  },
                  domProps: { value: _vm.years },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.years = $event.target.value
                      },
                      _vm.add
                    ]
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column is-half" }, [
      _c("div", { staticClass: "field is-horizontal" }, [
        _c("div", { staticClass: "field-body" }, [
          _c("div", { staticClass: "field is-expanded" }, [
            _c("div", { staticClass: "field has-addons" }, [
              _c("p", { staticClass: "control is-expanded" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.months,
                      expression: "months"
                    }
                  ],
                  staticClass: "input",
                  attrs: {
                    type: "number",
                    maxlength: "2",
                    min: "0",
                    max: "11",
                    placeholder: "0",
                    number: ""
                  },
                  domProps: { value: _vm.months },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.months = $event.target.value
                      },
                      _vm.add
                    ]
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "control" }, [
      _c("a", { staticClass: "button is-static" }, [_vm._v("years")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "control" }, [
      _c("a", { staticClass: "button is-primary is-static" }, [
        _vm._v("months")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41863c3e", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(254)
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
Component.options.__file = "resources/assets/js/components/ClaimCount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cac10bac", Component.options)
  } else {
    hotAPI.reload("data-v-cac10bac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 253:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'ClaimCount',
	props: ['model', 'property'],
	data: function data() {
		return {
			results: {
				total: 0,
				modelRef: this.model,
				propRef: this.property
			}
		};
	},

	methods: {
		add: function add() {
			this.results.total = +this.results.total;
			return this.$emit('claim-count-updated', this.results);
		}
	}
});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field is-horizontal" }, [
    _c("div", { staticClass: "field-body" }, [
      _c("div", { staticClass: "field is-expanded" }, [
        _c("div", { staticClass: "field has-addons" }, [
          _c("p", { staticClass: "control is-expanded" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.results.total,
                  expression: "results.total"
                }
              ],
              staticClass: "input",
              attrs: {
                type: "number",
                maxlength: "6",
                min: "0",
                max: "40000",
                placeholder: "0",
                number: ""
              },
              domProps: { value: _vm.results.total },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.results, "total", $event.target.value)
                  },
                  _vm.add
                ]
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "control" }, [
      _c("a", { staticClass: "button is-static" }, [_vm._v("claims")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cac10bac", module.exports)
  }
}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "workHistory", method: "post", action: "/login" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.submit($event)
        },
        keydown: function($event) {
          _vm.appData.workHistory.errors.clear($event.target.name)
        }
      }
    },
    [
      _vm._m(0),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-half" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Desk Experience:")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: { property: "workHistory", model: "desk_experience" },
                on: { "experience-updated": _vm.updateTotal }
              }),
              _vm._v(" "),
              _vm.appData.workHistory.errors.has("desk_experience")
                ? _c("span", {
                    staticClass: "help is-danger",
                    domProps: {
                      textContent: _vm._s(
                        _vm.appData.workHistory.errors.get("desk_experience")
                      )
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm._m(1),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Residential Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "residential_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Residential Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "residential_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.residentialCat,
                  expression: "residentialCat"
                }
              ],
              staticClass: "switch is-rounded",
              attrs: {
                id: "residentialCat",
                type: "checkbox",
                name: "residentialCat"
              },
              domProps: {
                checked: Array.isArray(_vm.residentialCat)
                  ? _vm._i(_vm.residentialCat, null) > -1
                  : _vm.residentialCat
              },
              on: {
                change: function($event) {
                  var $$a = _vm.residentialCat,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.residentialCat = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.residentialCat = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.residentialCat = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "residentialCat" } }, [
              _vm._v("Have residential property catastrophe experience too?")
            ])
          ])
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm.residentialCat
        ? _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Residential Catastrophe Experience")
                  ]),
                  _vm._v(" "),
                  _c("experience", {
                    attrs: {
                      property: "workHistory",
                      model: "residential_cat_experience"
                    },
                    on: { "experience-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Residential Catastrophe Claims")
                  ]),
                  _vm._v(" "),
                  _c("claim-count", {
                    attrs: {
                      property: "workHistory",
                      model: "residential_cat_claims"
                    },
                    on: { "claim-count-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _c("br"),
      _vm._v(" "),
      _vm._m(2),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Commercial Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "commercial_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Commercial Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "commercial_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.commercialCat,
                  expression: "commercialCat"
                }
              ],
              staticClass: "switch is-rounded",
              attrs: {
                id: "commercialCat",
                type: "checkbox",
                name: "commercialCat"
              },
              domProps: {
                checked: Array.isArray(_vm.commercialCat)
                  ? _vm._i(_vm.commercialCat, null) > -1
                  : _vm.commercialCat
              },
              on: {
                change: function($event) {
                  var $$a = _vm.commercialCat,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.commercialCat = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.commercialCat = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.commercialCat = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "commercialCat" } }, [
              _vm._v("Have commercial property catastrophe experience too?")
            ])
          ])
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm.commercialCat
        ? _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Commercial Catastrophe Experience")
                  ]),
                  _vm._v(" "),
                  _c("experience", {
                    attrs: {
                      property: "workHistory",
                      model: "commercial_cat_experience"
                    },
                    on: { "experience-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Commercial Catastrophe Claims")
                  ]),
                  _vm._v(" "),
                  _c("claim-count", {
                    attrs: {
                      property: "workHistory",
                      model: "commercial_cat_claims"
                    },
                    on: { "claim-count-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _c("br"),
      _vm._v(" "),
      _vm._m(3),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Large Loss Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "large_loss_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Large Loss Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "large_loss_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.largeLossCat,
                  expression: "largeLossCat"
                }
              ],
              staticClass: "switch is-rounded",
              attrs: {
                id: "largeLossCat",
                type: "checkbox",
                name: "largeLossCat"
              },
              domProps: {
                checked: Array.isArray(_vm.largeLossCat)
                  ? _vm._i(_vm.largeLossCat, null) > -1
                  : _vm.largeLossCat
              },
              on: {
                change: function($event) {
                  var $$a = _vm.largeLossCat,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.largeLossCat = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.largeLossCat = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.largeLossCat = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "largeLossCat" } }, [
              _vm._v("Have large loss catastrophe experience too?")
            ])
          ])
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm.largeLossCat
        ? _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Large Loss Catastrophe Experience")
                  ]),
                  _vm._v(" "),
                  _c("experience", {
                    attrs: {
                      property: "workHistory",
                      model: "large_loss_cat_experience"
                    },
                    on: { "experience-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", { staticClass: "label" }, [
                    _vm._v("Large Loss Catastrophe Claims")
                  ]),
                  _vm._v(" "),
                  _c("claim-count", {
                    attrs: {
                      property: "workHistory",
                      model: "large_loss_cat_claims"
                    },
                    on: { "claim-count-updated": _vm.updateTotal }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _c("br"),
      _vm._v(" "),
      _vm._m(4),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Flood Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: { property: "workHistory", model: "flood_experience" },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Flood Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "flood_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm._m(5),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Auto Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: { property: "workHistory", model: "auto_experience" },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Auto Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "auto_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm._m(6),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Inland Marine Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "inland_marine_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Inland Marine Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: {
                  property: "workHistory",
                  model: "inland_marine_claims"
                },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm._m(7),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Casualty Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "casualty_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Casualty Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "casualty_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _vm._m(8),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Years Of Earthquake Experience")
              ]),
              _vm._v(" "),
              _c("experience", {
                attrs: {
                  property: "workHistory",
                  model: "earthquake_experience"
                },
                on: { "experience-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "label" }, [
                _vm._v("Earthquake Claims Worked")
              ]),
              _vm._v(" "),
              _c("claim-count", {
                attrs: { property: "workHistory", model: "earthquake_claims" },
                on: { "claim-count-updated": _vm.updateTotal }
              })
            ],
            1
          )
        ])
      ]),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column has-text-right" }, [
          _c(
            "button",
            {
              staticClass: "button is-primary",
              class: { "is-loading": _vm.btnState },
              on: {
                click: function($event) {
                  _vm.btnState = !_vm.btnState
                }
              }
            },
            [_c("span", [_vm._v("save & continue")]), _vm._v(" "), _vm._m(9)]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Desk Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Residential Property")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Commercial Property")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Large Loss Adjusting (In Excess of $100,000)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Flood Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Auto Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Inland Marine Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Casualty Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Earthquake Adjusting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-chevron-circle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26aa6a5c", module.exports)
  }
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
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
Component.options.__file = "resources/assets/js/components/Certifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0917e470", Component.options)
  } else {
    hotAPI.reload("data-v-0917e470", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_appData_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		this.setupView();
	},
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_0__data_appData_js__["a" /* default */],
			btnState: false,
			filename: '',
			certificationTypes: [
			// { name: 'none', label: 'None' },
			{ name: 'AIC', label: 'AIC' }, { name: 'CPCU', label: 'CPCU' }, { name: 'TWIA/TFPA', label: 'TWIA / TFPA' }, { name: 'NFIP', label: 'NFIP' }, { name: 'HAAG', label: 'HAAG' }, { name: 'IIRC', label: 'IIRC' }, { name: 'rope/harness', label: 'Rope & Harness' }, { name: 'Earthquake', label: 'Earthquake' }, { name: 'Umpire', label: 'Umpire' }, { name: 'Appraiser', label: 'Appraiser' }],
			softwares: [{ name: 'xactimate', label: 'Xactimate' }, { name: 'symbility', label: 'Symbility' }, { name: 'simsol', label: 'Simsol' }, { name: 'guidewire', label: 'Guidewire' }, { name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' }, { name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' }]
		};
	},

	computed: {
		//
	},
	methods: {
		submit: function submit() {
			var _this = this;

			this.appData.certifications.post('/api/user/certifications', false).then(function (response) {
				_this.$router.push({ path: '/complete' });
			}).catch(function (error) {
				_this.btnState = false;
			});
		},
		processFile: function processFile(files) {
			if (files.length > 0) {
				this.filename = files[0].name;
				this.appData.certifications.resume = files[0];
			}
		},
		setupView: function setupView() {
			this.appData.text.title = "Industry Certifications";
			this.appData.text.subtitle = "Step Three - Tell us what you're certified to do";
			this.appData.progress = 3;
		}
	}
});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: {
        id: "certifications",
        method: "post",
        action: "/login",
        enctype: "multipart/form-data"
      },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.submit($event)
        },
        click: function($event) {
          _vm.appData.certifications.errors.clear($event.target.name)
        }
      }
    },
    [
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          { staticClass: "column" },
          [
            _vm._m(0),
            _c("hr"),
            _vm._v(" "),
            _vm.appData.certifications.errors.has("certifications")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(
                      _vm.appData.certifications.errors.get("certifications")
                    )
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.certificationTypes, function(cert) {
              return _c("div", { staticClass: "field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.appData.certifications.certifications,
                      expression: "appData.certifications.certifications"
                    }
                  ],
                  staticClass: "is-checkbox is-circle",
                  attrs: { type: "checkbox", id: cert.name, name: cert.name },
                  domProps: {
                    value: cert.name,
                    checked: Array.isArray(
                      _vm.appData.certifications.certifications
                    )
                      ? _vm._i(
                          _vm.appData.certifications.certifications,
                          cert.name
                        ) > -1
                      : _vm.appData.certifications.certifications
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.appData.certifications.certifications,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = cert.name,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.appData.certifications.certifications = $$a.concat(
                              [$$v]
                            ))
                        } else {
                          $$i > -1 &&
                            (_vm.appData.certifications.certifications = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.$set(
                          _vm.appData.certifications,
                          "certifications",
                          $$c
                        )
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", {
                  attrs: { for: cert.name },
                  domProps: { textContent: _vm._s(cert.label) }
                })
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "column" },
          [
            _vm._m(1),
            _c("hr"),
            _vm._v(" "),
            _vm.appData.certifications.errors.has("software")
              ? _c("span", {
                  staticClass: "help is-danger",
                  domProps: {
                    textContent: _vm._s(
                      _vm.appData.certifications.errors.get("software")
                    )
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.softwares, function(software) {
              return _c("div", { staticClass: "field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.appData.certifications.software,
                      expression: "appData.certifications.software"
                    }
                  ],
                  staticClass: "is-checkbox is-circle",
                  attrs: {
                    type: "checkbox",
                    id: software.name,
                    name: software.name
                  },
                  domProps: {
                    value: software.name,
                    checked: Array.isArray(_vm.appData.certifications.software)
                      ? _vm._i(
                          _vm.appData.certifications.software,
                          software.name
                        ) > -1
                      : _vm.appData.certifications.software
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.appData.certifications.software,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = software.name,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            (_vm.appData.certifications.software = $$a.concat([
                              $$v
                            ]))
                        } else {
                          $$i > -1 &&
                            (_vm.appData.certifications.software = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.$set(_vm.appData.certifications, "software", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", {
                  attrs: { for: software.name },
                  domProps: { textContent: _vm._s(software.label) }
                })
              ])
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm._m(2),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
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
              _vm._m(3),
              _vm._v(" "),
              _vm.filename != ""
                ? _c("span", {
                    staticClass: "file-name",
                    domProps: { textContent: _vm._s(_vm.filename) }
                  })
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _vm.appData.certifications.errors.has("resume")
            ? _c("span", {
                staticClass: "help is-danger",
                domProps: {
                  textContent: _vm._s(
                    _vm.appData.certifications.errors.get("resume")
                  )
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._m(4)
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c(
            "button",
            {
              staticClass: "button is-primary has-text-right",
              class: { "is-loading": _vm.btnState },
              on: {
                click: function($event) {
                  _vm.btnState = !_vm.btnState
                }
              }
            },
            [_c("span", [_vm._v("Save & Continue")]), _vm._v(" "), _vm._m(5)]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Certifications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Estimating Software Experience")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "subtitle has-text-primary" }, [
      _c("strong", [_vm._v("Upload Your Resume")])
    ])
  },
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
        _vm._v("\n\t\t\t        Upload your resume…\n\t\t\t      ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "help" }, [
      _vm._v("Accepted file types: "),
      _c("strong", [_vm._v(".pdf .doc .docx .rtf")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-chevron-circle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0917e470", module.exports)
  }
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(260)
/* template */
var __vue_template__ = __webpack_require__(261)
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
Component.options.__file = "resources/assets/js/components/Complete.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dd73420", Component.options)
  } else {
    hotAPI.reload("data-v-5dd73420", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_appData__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Complete',
	mounted: function mounted() {
		this.setupView();
	},

	computed: {
		needsInput: function needsInput() {
			return this.referral === 'Conference' || this.referral === 'CCG Employee' || this.referral === 'Other' ? true : false;
		},
		getLabel: function getLabel() {
			switch (this.referral) {
				case 'Conference':
					return 'Which Conference';
					break;
				case 'CCG Employee':
					return 'Employee\'s Name';
					break;
				case 'Other':
					return 'How did you hear about us';
					break;
				default:
					return 'Label';

			}
			// this.referral === 'Conference' ? this.label = 'Which Conference' :
		}
	},
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_0__data_appData__["a" /* default */],
			referral: '',
			label: '',
			userInput: '',
			userId: '',
			referrals: ['Conference', 'Facebook', 'LinkedIn', 'CCG Employee', 'Other']
		};
	},

	methods: {
		setupView: function setupView() {
			this.appData.text.title = 'Thank you for Applying!';
			this.appData.text.subtitle = 'You can edit and update your profile as you develop new skills or experience.';
			this.appData.progress = 4;
			this.userId = window.userData.id;
		},
		goToProfile: function goToProfile() {
			// console.log(this.getData());
			window.axios.patch('/api/user/' + this.userId + '/referral', this.getData()).then(function (response) {
				return window.location = '/profile';
			}).catch(function (error) {
				console.error(error);
			});
		},
		getData: function getData() {
			return this.needsInput ? { referral: this.userInput } : { referral: this.referral };
		}
	}
});

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "level", attrs: { id: "complete" } }, [
    _c("div", { staticClass: "level-item has-text-centered" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column" }, [
          _c("h3", { staticClass: "title" }, [
            _vm._v("How Did You Hear About Us?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Please take 5 seconds to tell us where you heard about us. We'd really apriciate it."
            )
          ]),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "select" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.referral,
                    expression: "referral"
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
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.referral = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.userInput = ""
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select an option")
                ]),
                _vm._v(" "),
                _vm._l(_vm.referrals, function(refer) {
                  return _c("option", { domProps: { value: refer } }, [
                    _vm._v(_vm._s(refer))
                  ])
                })
              ],
              2
            )
          ]),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _vm.needsInput
            ? _c("div", { staticClass: "field is-signin" }, [
                _c(
                  "label",
                  { staticClass: "label", attrs: { for: "userInput" } },
                  [_vm._v(_vm._s(_vm.getLabel) + "?")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.userInput,
                      expression: "userInput"
                    }
                  ],
                  staticClass: "input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.userInput },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.userInput = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _c("br")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button is-primary has-text-centered",
              attrs: {
                disabled:
                  _vm.referral == "" || (_vm.needsInput && _vm.userInput == "")
              },
              on: {
                click: function($event) {
                  _vm.goToProfile()
                }
              }
            },
            [_vm._v("\n\t\t\t\t\t\tContinue to your profile\n\t\t\t\t")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5dd73420", module.exports)
  }
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(263)
/* template */
var __vue_template__ = __webpack_require__(264)
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
Component.options.__file = "resources/assets/js/components/ApplicationProgress.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9082b094", Component.options)
  } else {
    hotAPI.reload("data-v-9082b094", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_appData_js__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import applicationProgressTemplate from './templates/application-progress.template.html';

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'ApplicationProgress',
	data: function data() {
		return {
			appData: __WEBPACK_IMPORTED_MODULE_0__data_appData_js__["a" /* default */]
		};
	}
});

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      staticClass: "steps is-narrow is-medium is-centered has-content-centered",
      attrs: { id: "applicationProgress" }
    },
    [
      _c(
        "li",
        {
          staticClass: "steps-segment",
          class: { "is-active": _vm.appData.progress == 1 }
        },
        [
          _c(
            "router-link",
            { staticClass: "has-text-dark", attrs: { to: "/" } },
            [
              _c("span", { staticClass: "steps-marker" }, [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fa fa-vcard" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "steps-content" }, [
                _c("p", { staticClass: "heading" }, [_vm._v("Personal Info")])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "steps-segment",
          class: { "is-active": _vm.appData.progress == 2 }
        },
        [
          _c(
            "router-link",
            { staticClass: "has-text-dark", attrs: { to: "/work-history" } },
            [
              _c("span", { staticClass: "steps-marker" }, [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fa fa-briefcase" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "steps-content" }, [
                _c("p", { staticClass: "heading" }, [_vm._v("Work History")])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "steps-segment",
          class: { "is-active": _vm.appData.progress == 3 }
        },
        [
          _c(
            "router-link",
            { staticClass: "has-text-dark", attrs: { to: "/certifications" } },
            [
              _c("span", { staticClass: "steps-marker" }, [
                _c("span", { staticClass: "icon" }, [
                  _c("i", { staticClass: "fa fa-certificate" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "steps-content" }, [
                _c("p", { staticClass: "heading" }, [_vm._v("Certifications")])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "steps-segment",
          class: { "is-active": _vm.appData.progress == 4 }
        },
        [
          _c(
            "router-link",
            { staticClass: "has-text-dark", attrs: { to: "/complete" } },
            [
              _c(
                "span",
                {
                  staticClass: "steps-marker",
                  class: { "is-success": _vm.appData.progress == 4 }
                },
                [
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { staticClass: "fa fa-check" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "steps-content" }, [
                _c("p", { staticClass: "heading" }, [_vm._v("Complete")])
              ])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9082b094", module.exports)
  }
}

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(266)
/* template */
var __vue_template__ = __webpack_require__(270)
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
Component.options.__file = "resources/assets/js/components/SectionTitle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e304aac", Component.options)
  } else {
    hotAPI.reload("data-v-3e304aac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_appData_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SignOutForm_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SignOutForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SignOutForm_vue__);
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
	name: 'SectionTitle',
	components: {
		signOutForm: __WEBPACK_IMPORTED_MODULE_1__SignOutForm_vue___default.a
	},
	mounted: function mounted() {
		this.logoutForm = document.getElementById('logout-form');
	},
	data: function data() {
		return {
			logoutForm: {},
			appData: __WEBPACK_IMPORTED_MODULE_0__data_appData_js__["a" /* default */]
		};
	},

	methods: {
		signout: function signout() {
			this.logoutForm.submit();
		}
	}
});

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(268)
/* template */
var __vue_template__ = __webpack_require__(269)
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
Component.options.__file = "resources/assets/js/components/SignOutForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b55b464", Component.options)
  } else {
    hotAPI.reload("data-v-8b55b464", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'SignOutForm',
	data: function data() {
		return {};
	},

	methods: {
		signout: function signout() {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/logout').then(function (response) {
				console.log(response);
				window.location = '/login';
			});
		}
	}
});

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticStyle: {
        position: "absolute",
        top: "20px",
        right: "0",
        "font-size": "1rem"
      }
    },
    [
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.signout($event)
            }
          }
        },
        [_vm._v("signout")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8b55b464", module.exports)
  }
}

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "title" }, [
    _c("h1", {
      staticClass: "title",
      domProps: { textContent: _vm._s(_vm.appData.text.title) }
    }),
    _vm._v(" "),
    _c("h2", {
      staticClass: "subtitle",
      domProps: { textContent: _vm._s(_vm.appData.text.subtitle) }
    }),
    _vm._v(" "),
    _c("hr")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e304aac", module.exports)
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

},[241]);