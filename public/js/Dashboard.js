webpackJsonp([2],{

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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VueCharts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseCharts_Bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseCharts_HorizontalBar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BaseCharts_Doughnut__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BaseCharts_Line__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BaseCharts_Pie__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BaseCharts_PolarArea__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BaseCharts_Radar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BaseCharts_Bubble__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BaseCharts_Scatter__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixins_index_js__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__package_json__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__package_json__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BaseCharts_Bar__["a"]; });
/* unused harmony reexport HorizontalBar */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__BaseCharts_Doughnut__["a"]; });
/* unused harmony reexport Line */
/* unused harmony reexport Pie */
/* unused harmony reexport PolarArea */
/* unused harmony reexport Radar */
/* unused harmony reexport Bubble */
/* unused harmony reexport Scatter */
/* unused harmony reexport mixins */











var VueCharts = {
  version: __WEBPACK_IMPORTED_MODULE_10__package_json___default.a.version,
  Bar: __WEBPACK_IMPORTED_MODULE_0__BaseCharts_Bar__["a" /* default */],
  HorizontalBar: __WEBPACK_IMPORTED_MODULE_1__BaseCharts_HorizontalBar__["a" /* default */],
  Doughnut: __WEBPACK_IMPORTED_MODULE_2__BaseCharts_Doughnut__["a" /* default */],
  Line: __WEBPACK_IMPORTED_MODULE_3__BaseCharts_Line__["a" /* default */],
  Pie: __WEBPACK_IMPORTED_MODULE_4__BaseCharts_Pie__["a" /* default */],
  PolarArea: __WEBPACK_IMPORTED_MODULE_5__BaseCharts_PolarArea__["a" /* default */],
  Radar: __WEBPACK_IMPORTED_MODULE_6__BaseCharts_Radar__["a" /* default */],
  Bubble: __WEBPACK_IMPORTED_MODULE_7__BaseCharts_Bubble__["a" /* default */],
  Scatter: __WEBPACK_IMPORTED_MODULE_8__BaseCharts_Scatter__["a" /* default */],
  mixins: __WEBPACK_IMPORTED_MODULE_9__mixins_index_js__["a" /* default */]
};
/* unused harmony default export */ var _unused_webpack_default_export = (VueCharts);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counts_js__ = __webpack_require__(329);

/* harmony default export */ __webpack_exports__["a"] = ({
	counts: __WEBPACK_IMPORTED_MODULE_0__counts_js__["a" /* default */],
	newHireCount: 0,
	newHires: [],
	candidateCount: 0,
	candidates: [],
	applicantCount: 0,
	applicants: []
});

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(326);


/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var routes = [{ path: '/', name: "home", component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default.a }];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: routes,
	linkActiveClass: 'is-active'
});

var Dashboard = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'Dashboard',
	router: router,
	components: {
		//root vue components here.
	},
	data: function data() {
		return {
			//Dashboard Data.
		};
	}
}).$mount('#dashboard');

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(328)
/* template */
var __vue_template__ = __webpack_require__(360)
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
Component.options.__file = "resources/assets/js/dashboard/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ba90a9b", Component.options)
  } else {
    hotAPI.reload("data-v-1ba90a9b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserRolesChart_js__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserStatusesChart_js__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__UserCounts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewHires_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewHires_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__NewHires_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Candidates_vue__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Candidates_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Candidates_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Applicants_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Applicants_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Applicants_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Home',
	components: {
		dashboardNavigation: __WEBPACK_IMPORTED_MODULE_1__DashboardNavigation_vue___default.a,
		userRolesChart: __WEBPACK_IMPORTED_MODULE_2__UserRolesChart_js__["a" /* default */],
		userStatusesChart: __WEBPACK_IMPORTED_MODULE_3__UserStatusesChart_js__["a" /* default */],
		userCounts: __WEBPACK_IMPORTED_MODULE_4__UserCounts_vue___default.a,
		newHires: __WEBPACK_IMPORTED_MODULE_5__NewHires_vue___default.a,
		candidates: __WEBPACK_IMPORTED_MODULE_6__Candidates_vue___default.a,
		applicants: __WEBPACK_IMPORTED_MODULE_7__Applicants_vue___default.a
	},
	mounted: function mounted() {
		this.newHires = window.dashboardData.newHires;
		this.newHireCount = window.dashboardData.newHireCount;
		this.candidates = window.dashboardData.candidates;
		this.candidateCount = window.dashboardData.candidateCount;
		this.applicants = window.dashboardData.applicants;
		this.applicantCount = window.dashboardData.applicantCount;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		//
	}
});

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	applicants: 0,
	active: 0,
	inActive: 0,
	noHire: 0,
	total: 0
});

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(331)
/* template */
var __vue_template__ = __webpack_require__(332)
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
Component.options.__file = "resources/assets/js/dashboard/components/DashboardNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37772f3c", Component.options)
  } else {
    hotAPI.reload("data-v-37772f3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 331:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "DasboardNavigation",
	data: function data() {
		return {};
	}
});

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tabs", staticStyle: { "margin-bottom": "5rem" } },
      [
        _c("ul", [
          _c("li", { staticClass: "is-active" }, [
            _c("a", { attrs: { href: "/dashboard" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-tachometer" })
              ]),
              _vm._v("Overview")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "/users" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-user-circle-o" })
              ]),
              _vm._v("Manage Users")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "/roles" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-users" })
              ]),
              _vm._v("Mange Roles")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("span", { staticClass: "icon" }, [
                _c("i", { staticClass: "fa fa-envelope" })
              ]),
              _vm._v("Engagement")
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37772f3c", module.exports)
  }
}

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(149);

/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["a" /* Bar */],
    mounted: function mounted() {
        this.chartData.labels = window.dashboardData.userRolesChart.labels;
        this.chartData.datasets[0].data = window.dashboardData.userRolesChart.datasets[0].data;
        this.renderChart(this.chartData, this.options);
    },
    data: function data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    backgroundColor: ['#439BD1'],
                    data: []
                }]
            },
            options: {
                title: { display: true, text: 'System Users By Role' },
                legend: { display: false },
                responsive: true,
                maintainAspectRatio: false
            }
        };
    }
});

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'bar-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'bar',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'horizontalbar-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'horizontalBar',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'doughnut-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'doughnut',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'line-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'line',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'pie-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'pie',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'polar-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'polarArea',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'radar-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'radar',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'bubble-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'bubble',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(createElement) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses
    }, [createElement('canvas', {
      attrs: {
        id: this.chartId,
        width: this.width,
        height: this.height
      },
      ref: 'canvas'
    })]);
  },
  props: {
    chartId: {
      default: 'scatter-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    },
    plugins: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      _chart: null,
      _plugins: this.plugins
    };
  },
  methods: {
    addPlugin: function addPlugin(plugin) {
      this.$data._plugins.push(plugin);
    },
    renderChart: function renderChart(data, options) {
      this.$data._chart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(this.$refs.canvas.getContext('2d'), {
        type: 'scatter',
        data: data,
        options: options,
        plugins: this.$data._plugins
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }
});

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reactiveData_js__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reactiveData_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reactiveData_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reactiveProp_js__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reactiveProp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reactiveProp_js__);


/* harmony default export */ __webpack_exports__["a"] = ({
  reactiveData: __WEBPACK_IMPORTED_MODULE_0__reactiveData_js___default.a,
  reactiveProp: __WEBPACK_IMPORTED_MODULE_1__reactiveProp_js___default.a
});

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': {
      handler: function handler(newData, oldData) {
        if (oldData) {
          var chart = this.$data._chart;
          var newDatasetLabels = newData.datasets.map(function (dataset) {
            return dataset.label;
          });
          var oldDatasetLabels = oldData.datasets.map(function (dataset) {
            return dataset.label;
          });
          var oldLabels = JSON.stringify(oldDatasetLabels);
          var newLabels = JSON.stringify(newDatasetLabels);

          if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
            newData.datasets.forEach(function (dataset, i) {
              var oldDatasetKeys = Object.keys(oldData.datasets[i]);
              var newDatasetKeys = Object.keys(dataset);
              var deletionKeys = oldDatasetKeys.filter(function (key) {
                return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
              });
              deletionKeys.forEach(function (deletionKey) {
                delete chart.data.datasets[i][deletionKey];
              });

              for (var attribute in dataset) {
                if (dataset.hasOwnProperty(attribute)) {
                  chart.data.datasets[i][attribute] = dataset[attribute];
                }
              }
            });

            if (newData.hasOwnProperty('labels')) {
              chart.data.labels = newData.labels;
            }

            if (newData.hasOwnProperty('xLabels')) {
              chart.data.xLabels = newData.xLabels;
            }

            if (newData.hasOwnProperty('yLabels')) {
              chart.data.yLabels = newData.yLabels;
            }

            chart.update();
          } else {
            chart.destroy();
            this.renderChart(this.chartData, this.options);
          }
        } else {
          if (this.$data._chart) {
            this.$data._chart.destroy();
          }

          this.renderChart(this.chartData, this.options);
        }
      }
    }
  }
};

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = {
  props: {
    chartData: {
      required: true
    }
  },
  watch: {
    'chartData': {
      handler: function handler(newData, oldData) {
        if (oldData) {
          var chart = this.$data._chart;
          var newDatasetLabels = newData.datasets.map(function (dataset) {
            return dataset.label;
          });
          var oldDatasetLabels = oldData.datasets.map(function (dataset) {
            return dataset.label;
          });
          var oldLabels = JSON.stringify(oldDatasetLabels);
          var newLabels = JSON.stringify(newDatasetLabels);

          if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
            newData.datasets.forEach(function (dataset, i) {
              var oldDatasetKeys = Object.keys(oldData.datasets[i]);
              var newDatasetKeys = Object.keys(dataset);
              var deletionKeys = oldDatasetKeys.filter(function (key) {
                return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
              });
              deletionKeys.forEach(function (deletionKey) {
                delete chart.data.datasets[i][deletionKey];
              });

              for (var attribute in dataset) {
                if (dataset.hasOwnProperty(attribute)) {
                  chart.data.datasets[i][attribute] = dataset[attribute];
                }
              }
            });

            if (newData.hasOwnProperty('labels')) {
              chart.data.labels = newData.labels;
            }

            if (newData.hasOwnProperty('xLabels')) {
              chart.data.xLabels = newData.xLabels;
            }

            if (newData.hasOwnProperty('yLabels')) {
              chart.data.yLabels = newData.yLabels;
            }

            chart.update();
          } else {
            chart.destroy();
            this.renderChart(this.chartData, this.options);
          }
        } else {
          if (this.$data._chart) {
            this.$data._chart.destroy();
          }

          this.renderChart(this.chartData, this.options);
        }
      }
    }
  }
};

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = {"name":"vue-chartjs","version":"3.1.0","description":"Vue.js wrapper for chart.js for creating beautiful charts.","author":"Jakub Juszczak <jakub@posteo.de>","homepage":"http://vue-chartjs.org","license":"MIT","contributors":[{"name":"Thorsten Lünborg","web":"https://github.com/LinusBorg"},{"name":"Juan Carlos Alonso","web":"https://github.com/jcalonso"}],"maintainers":[{"name":"Jakub Juszczak","email":"jakub@posteo.de","web":"http://www.jakubjuszczak.de"}],"repository":{"type":"git","url":"git+ssh://git@github.com:apertureless/vue-chartjs.git"},"bugs":{"url":"https://github.com/apertureless/vue-chartjs/issues"},"keywords":["ChartJs","Vue","Visualisation","Wrapper","Charts"],"main":"dist/vue-chartjs.js","unpkg":"dist/vue-chartjs.min.js","module":"es/index.js","jsnext:main":"es/index.js","files":["src","dist","es"],"scripts":{"dev":"node build/dev-server.js","build":"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es","unit":"karma start test/unit/karma.conf.js --single-run","e2e":"node test/e2e/runner.js","test":"npm run unit","lint":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","release":"webpack --progress --hide-modules --config  ./build/webpack.release.js && cross-env NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js","prepublishOnly":"yarn run lint && yarn run test && yarn run build"},"dependencies":{},"peerDependencies":{"chart.js":"2.7.x"},"devDependencies":{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0","chai":"^3.5.0","chart.js":"2.7.0","chromedriver":"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^5.1.1","cross-spawn":"^5.1.0","css-loader":"^0.28.0","eslint":"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6","express":"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta":"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4","karma":"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2","lolex":"^1.6.0","mocha":"^3.1.0","opn":"^5.1.0","ora":"^1.2.0","phantomjs-prebuilt":"^2.1.13","portfinder":"^1.0.13","selenium-server":"^3.3.1","shelljs":"^0.7.7","sinon":"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8","vue":"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2","webpack":"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},"engines":{"node":">=6.9.0","npm":">= 3.0.0"},"browserify":{"transform":["babelify"]},"greenkeeper":{"ignore":["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]}}

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__ = __webpack_require__(149);

/* harmony default export */ __webpack_exports__["a"] = ({
    extends: __WEBPACK_IMPORTED_MODULE_0_vue_chartjs__["b" /* Doughnut */],
    mounted: function mounted() {
        this.chartData.datasets[0].data.push(window.dashboardData.applicantCount);
        // this.chartData.datasets[0].data.push(window.chartData.totalUsers);
        this.chartData.datasets[0].data.push(window.dashboardData.activeCount);
        this.chartData.datasets[0].data.push(window.dashboardData.candidateCount);
        this.chartData.datasets[0].data.push(window.dashboardData.newHireCount);
        this.chartData.datasets[0].data.push(window.dashboardData.noHireCount);
        this.renderChart(this.chartData, this.options);
        var chart = this.$data._chart;
        this.$refs.canvas.onclick = function (evt) {
            var metric = chart.getElementsAtEvent(evt);
            if (metric[0]) {
                var chartData = metric[0]['_chart'].config.data;
                var idx = metric[0]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[0].data[idx];

                var url = "/users/" + label;
                // console.log(url);
                // alert(url);
                window.location = url;
            }
        };
    },
    data: function data() {
        return {
            chartData: {
                labels: ['applicant', 'active', 'candidate', 'new-Hire', 'no-hire'],
                datasets: [{
                    backgroundColor: ['#439BD1', '#30A987', '#343b4d', '#FEDD62', '#FC3C63'],
                    data: []
                }]
            },
            options: {
                title: { display: true, text: 'Total Users' },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 12
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };
    }
});

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(349)
/* template */
var __vue_template__ = __webpack_require__(350)
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
Component.options.__file = "resources/assets/js/dashboard/components/UserCounts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-279b67ab", Component.options)
  } else {
    hotAPI.reload("data-v-279b67ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'UserCounts',
	mounted: function mounted() {
		this.data.applicants = window.dashboardData.applicantCount;
		this.data.active = window.dashboardData.activeCount;
		this.data.inActive = window.dashboardData.inActiveCount;
		this.data.noHire = window.dashboardData.noHireCount;
		this.data.total = +window.dashboardData.candidateCount + +window.dashboardData.newHireCount + +this.data.applicants + +this.data.active + +this.data.inActive + +this.data.noHire;
	},
	data: function data() {
		return {
			data: __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */].counts
		};
	},

	methods: {
		view: function view(status) {
			return window.location = '/users' + status;
		}
	}
});

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns", staticStyle: { margin: "3rem 0 3rem 0" } },
    [
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("?page=1")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-total" }, [
                _vm._v(_vm._s(_vm.data.total))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Total")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/applicant")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-applicants" }, [
                _vm._v(_vm._s(_vm.data.applicants))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Applicants")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/active")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-active" }, [
                _vm._v(_vm._s(_vm.data.active))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("Active")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/in-active")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-inactive" }, [
                _vm._v(_vm._s(_vm.data.inActive))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("In-Active")])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { cursor: "pointer" },
            on: {
              click: function($event) {
                _vm.view("/no-hire")
              }
            }
          },
          [
            _c("div", { staticClass: "card-content has-text-centered" }, [
              _c("span", { staticClass: "count is-no-hires" }, [
                _vm._v(_vm._s(_vm.data.noHire))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "type" }, [_vm._v("No Hire")])
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-279b67ab", module.exports)
  }
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
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
Component.options.__file = "resources/assets/js/dashboard/components/NewHires.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5860440a", Component.options)
  } else {
    hotAPI.reload("data-v-5860440a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: "NewHire",
	mounted: function mounted() {
		this.newHireCount = window.dashboardData.newHireCount;
		this.newHires = window.dashboardData.newHires;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	}
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-warning" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-dark" }, [
            _vm._v(_vm._s(_vm.newHireCount))
          ]),
          _vm._v(" New Hires\n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.newHires, function(newHire) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "span",
                    { staticClass: "tag is-rounded is-small is-pulled-right" },
                    [_vm._v("Incomplete")]
                  ),
                  _vm._v(" "),
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + newHire.id } }, [
                      _vm._v(_vm._s(newHire.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "progress",
                    {
                      staticClass: "progress is-success is-small",
                      attrs: { value: "0", max: "100" }
                    },
                    [_vm._v("0%")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(" " + _vm._s(newHire.created_at))
                ]),
                _vm._v(" "),
                _vm._m(0, true)
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All New Hires")])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-footer-item dropdown is-hoverable" },
      [
        _c("div", { staticClass: "dropdown-trigger" }, [
          _c(
            "a",
            {
              attrs: {
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu"
              }
            },
            [
              _c("span", [_vm._v("Action")]),
              _vm._v(" "),
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", {
                  staticClass: "fa fa-angle-down",
                  attrs: { "aria-hidden": "true" }
                })
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: { id: "dropdown-menu", role: "menu" }
          },
          [
            _c("div", { staticClass: "dropdown-content" }, [
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v("\n\t\t\t\t\t\t        Notify\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item" }, [
                _vm._v("\n\t\t\t\t\t\t        Review\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item" }, [
                _vm._v("\n\t\t\t\t\t\t        Revoke offer\n\t\t\t\t\t\t      ")
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v(
                  "\n\t\t\t\t\t\t        Complete onboarding\n\t\t\t\t\t\t      "
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5860440a", module.exports)
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(355)
/* template */
var __vue_template__ = __webpack_require__(356)
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
Component.options.__file = "resources/assets/js/dashboard/components/Candidates.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e895f4e8", Component.options)
  } else {
    hotAPI.reload("data-v-e895f4e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Candidates',
	mounted: function mounted() {
		this.candidateCount = window.dashboardData.candidateCount;
		this.candidates = window.dashboardData.candidates;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		removeCandidate: function removeCandidate(user) {
			var _this = this;

			window.axios.patch('/api/user/' + user.id + '/status/', { status: 'applicant' }).then(function (response) {
				var idx = _this.candidates.indexOf(user);
				_this.candidates.splice(idx, 1);
				_this.applicants.unshift(response.data);
			});
		}
	}
});

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-dark" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-secondary" }, [
            _vm._v(_vm._s(_vm.candidateCount))
          ]),
          _vm._v(" Candidates\n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.candidates, function(candidate) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c(
                    "span",
                    {
                      staticClass:
                        "is-pulled-right is-tooltip-warning tooltip is-tooltip-left",
                      attrs: { "data-tooltip": "Remove from candidates" },
                      on: {
                        click: function($event) {
                          _vm.removeCandidate(candidate)
                        }
                      }
                    },
                    [_c("a", { staticClass: "delete is-small" })]
                  ),
                  _vm._v(" "),
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + candidate.id } }, [
                      _vm._v(_vm._s(candidate.name))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(" " + _vm._s(candidate.created_at))
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "card-footer-item" }, [_vm._v("Hire")])
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All Candidates")])
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
    require("vue-hot-reload-api")      .rerender("data-v-e895f4e8", module.exports)
  }
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(358)
/* template */
var __vue_template__ = __webpack_require__(359)
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
Component.options.__file = "resources/assets/js/dashboard/components/Applicants.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fc2d926", Component.options)
  } else {
    hotAPI.reload("data-v-7fc2d926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Applicants',
	mounted: function mounted() {
		this.applicants = window.dashboardData.applicants;
		this.applicantCount = window.dashboardData.applicantCount;
	},
	data: function data() {
		return __WEBPACK_IMPORTED_MODULE_0__data_dashboardData_js__["a" /* default */];
	},

	methods: {
		makeCandidate: function makeCandidate(user) {
			var _this = this;

			window.axios.patch('/api/user/' + user.id + '/status/', { status: 'candidate' }).then(function (response) {
				console.log('setting as candidate');
				var idx = _this.applicants.indexOf(user);
				_this.applicants.splice(idx, 1);
				_this.candidates.unshift(response.data);
			});
		}
	}
});

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column" }, [
    _c("div", { staticClass: "card" }, [
      _c("header", { staticClass: "card-header is-info" }, [
        _c("p", { staticClass: "card-header-title" }, [
          _c("span", { staticClass: "tag is-dark" }, [
            _vm._v(_vm._s(_vm.applicantCount))
          ]),
          _vm._v(" Recent Applicants \n\t\t    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          { staticClass: "content" },
          _vm._l(_vm.applicants, function(applicant) {
            return _c("div", { staticClass: "card is-stacked" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("h3", [
                    _c("a", { attrs: { href: "/profile/" + applicant.id } }, [
                      _vm._v(_vm._s(applicant.name))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c("span", { staticClass: "card-footer-item" }, [
                  _c("i", { staticClass: "fa fa-clock-o" }),
                  _vm._v(_vm._s(applicant.created_at))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer-item dropdown is-hoverable" },
                  [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown-menu",
                        attrs: { id: "dropdown-menu", role: "menu" }
                      },
                      [
                        _c("div", { staticClass: "dropdown-content" }, [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              on: {
                                click: function($event) {
                                  _vm.makeCandidate(applicant)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t        Make candidate\n\t\t\t\t\t\t      "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("a", { staticClass: "dropdown-item" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t        View applicant details\n\t\t\t\t\t\t      "
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("a", { staticClass: "button" }, [_vm._v("All Applicants")])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-trigger" }, [
      _c(
        "a",
        {
          attrs: { "aria-haspopup": "true", "aria-controls": "dropdown-menu" }
        },
        [
          _c("span", [_vm._v("Action")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon is-small" }, [
            _c("i", {
              staticClass: "fa fa-angle-down",
              attrs: { "aria-hidden": "true" }
            })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fc2d926", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-gapless" }, [
    _c("div", { staticClass: "column is-1" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "column is-10" },
      [
        _c("h1", { staticClass: "title hr-title" }, [_vm._v("HR Dashboard")]),
        _vm._v(" "),
        _c("dashboard-navigation"),
        _vm._v(" "),
        _c("div", { staticClass: "columns" }, [
          _c(
            "div",
            { staticClass: "column is-4" },
            [_c("user-statuses-chart")],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column is-8" }, [_c("user-roles-chart")], 1)
        ]),
        _vm._v(" "),
        _c("user-counts"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "columns" },
          [
            _c("new-hires"),
            _vm._v(" "),
            _c("candidates"),
            _vm._v(" "),
            _c("applicants")
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-1ba90a9b", module.exports)
  }
}

/***/ })

},[325]);