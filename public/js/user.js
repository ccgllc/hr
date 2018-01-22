webpackJsonp([10],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
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

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	users: []
});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(272);


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structur_src_services_Resource_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_userData_js__ = __webpack_require__(21);



// import search from './components/Search.vue';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('search', search);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	name: 'User Administration',
	propsData: ['token'],
	el: '#user',
	data: {
		userData: __WEBPACK_IMPORTED_MODULE_2__data_userData_js__["a" /* default */],
		userService: new __WEBPACK_IMPORTED_MODULE_1__structur_src_services_Resource_js__["a" /* default */]({
			uri: {
				prefix: 'api',
				resource: 'users'
			},
			api_token: this.token,
			current_page: 0
		})
	},
	computed: {
		resetUsers: function resetUsers() {
			return this.userData.users.length == 0 ? this.userData.users = window.users.data : 'Users in list';
		}
	},
	mounted: function mounted() {
		//
		this.current_page = window.users.current_page;
		this.userData.users = window.users.data;
	},

	methods: {
		toggleMenu: function toggleMenu(id) {
			var menu = document.getElementById(id);
			menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
		},
		getUsers: function getUsers() {
			var _this = this;

			this.userService.get('all').then(function (response) {
				_this.userData.users = response;
			}).catch(function (error) {
				console.log(error);
			});
		},
		select: function select(user) {
			console.log(user.name);
		},
		selectAll: function selectAll() {
			console.log('selecting All');
		}
	}
});

/***/ })

},[271]);