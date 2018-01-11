<template>
	<div id="search">
		<form @submit.prevent> <!-- @keydown="search.errors.clear($event.target.name) -->
			<div class="field">
			    <input v-model="search.query" class="input is-search" type="text" @keydown="dynamicSearch($event)" placeholder="Search users" style="position: relative;">
			</div>
		</form>
		<div class="menu" v-if="results.length > 0">
			<ul class="menu-list">
				<li v-for="result in results" style="list-style: none;" v-bind:class="{selected: isSelected == result.id }">
					<a :href="'/profile/' + result.id" v-text="result.name"></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Form from '../structur/src/form/Form.js';
	import userData from '../data/userData.js';
	import _ from '../../../../node_modules/lodash/lodash.min.js';
	export default {
		name: 'search',
		data() {
			return {
				userData,
				search: new Form({
					query: '',
					api_token: ''
				}),
				results: [],
				complete: true,
				selectedResult: 0,
			}
		},
		computed: {
			isSelected() {
				return this.results[this.selectedResult]['id'];
			}
		},
		methods: {
			dynamicSearch: _.debounce(function(event) {
				var vm = this;
				let action = vm.detectKeyboardAction(event);
				// console.log(action);
				if (!action && vm.search.query != '')  vm.submit();
				if (vm.search.query == '') vm.results = [];
				// if (vm.search.query == '') vm.userData.users = window.users;
			}, 100),
			detectKeyboardAction(event) {
				console.log(event.code)
				switch (event.key) {
					case 'Escape':
					this.search.query = '';
					this.results = [];
					return true;
					break;

					case 'Enter':
					window.location = '/profile/' + this.isSelected;
					return true;
					break;

					case 'ArrowDown':
					if (this.selectedResult + 1 < this.results.length) this.selectedResult += 1;
					return true;
					break;

					case 'ArrowUp':
					if (this.selectedResult > 0) this.selectedResult -= 1;
					return true;
					break;

					default:
					return false;
				}
			},
			submit() {
				this.search.post('/api/user/search', false)
					.then(response => {
						console.log(response);
						// this.userData.users = response;
						this.results = response;
					}).catch(error => {
						console.log('has an error');
				});
			}
		}
	}
</script>

