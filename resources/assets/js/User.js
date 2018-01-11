import Vue from 'vue';
import UserService from './structur/src/services/Resource.js';
import userData from './data/userData.js';
// import search from './components/Search.vue';

Vue.component('search', search);

let app = new Vue({
	name: 'User Administration',
	propsData: ['token'],
	el: '#user',
	data: {
		userData,
		userService: new UserService({
		uri: {
			prefix: 'api',
			resource: 'users',
		},
		api_token: this.token,
		current_page: 0
	}),
	},
	computed: {
		resetUsers() {
			return this.userData.users.length == 0 
				? this.userData.users = window.users.data
				: 'Users in list'
		}
	},
	mounted() {
		//
		this.current_page = window.users.current_page;
		this.userData.users = window.users.data;
	},
	methods: {
		toggleMenu(id) {
			let menu = document.getElementById(id);
			menu.style.display == 'none' 
				? menu.style.display = 'block' 
				: menu.style.display = 'none';
		},
		getUsers(){
			this.userService.get('all').then(response => { 
				this.userData.users = response
			}).catch(error => {
				console.log(error)
			});
		},
		select(user) {
			console.log(user.name);
		},
		selectAll() {
			console.log('selecting All');
		}
	}
});