import Vue from 'vue';
import UserService from './structur/src/services/Resource.js';
import userData from './data/userData.js';
import states from './data/states.js';
// import search from './components/Search.vue';

Vue.component('search', search);

let app = new Vue({
	name: 'User Administration',
	el: '#user',
	data: {
		userData,
		states,
		selected: [],
		allSelected: false,
		userService: new UserService({
		uri: {
			prefix: 'api',
			resource: 'users',
		},
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
		if(window.users.data) {
			return this.userData.users = window.users.data;
		} else {
			return this.userData.users = window.users;
		}

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
		selectAll(evt) {
			let checkboxes = document.getElementsByClassName('has-user');
			if (this.allSelected) {
				for (let checkbox in checkboxes) {
					if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
						checkboxes[checkbox].checked = true;
						this.selected.push(checkboxes[checkbox].value);
					}
				}
			} else {
				for (let checkbox in checkboxes) {
					if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
						checkboxes[checkbox].checked = false;
						this.selected = [];
					}
				}
			}
		},
		deleteUser(user) {
			window.axios.delete('/api/users/' + user.id).then(response => {
				let idx = this.userData.users.indexOf(user);
				return this.userData.users.splice(idx, 1);
			}).catch(error => {
				console.error(error);
			})
		},
		deleteSelected(){
			window.axios.post('/api/users/', {users: this.selected}).then(response => {
				for (let idx in this.selected) {
					let userIdx = this.userData.users.indexOf(this.findUser(idx));
					this.userData.users.splice(userIdx, 1);
				}
			})
		},
		findUser(idx) {
			return this.userData.users.find(user => user.id == this.selected[idx])
		}
	}
});