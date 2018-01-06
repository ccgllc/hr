<template>
	<section>
		<table class="table is-hoverable is-full-width" style="background: transparent;">
			<tbody>
				<tr v-for="role in roles">
					<td style="width: 5%">
						<div class="field">
							<input type="checkbox" class="is-checkbox is-circle" @click="sync()" v-model="userRoles" :name="role.name" :id="role.name" :value="role.id">
							<label :for="role.name">{{role.name | capitalize}}</label>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	import Resource from '../structur/src/services/Resource.js'; 
	export default {
		name: 'UserRoles',
		data() {
			return {
				userRoles: [],
				roles: [],
				selected: [],
				user: new Resource({
					uri: {
						prefix: 'api',
						resource: 'user',
						params: [
							{ id: window.userId }
						]
					},
					api_token: this.token,
				})
			}
		},
		mounted() {
			let userRoles = window.userRoles;
			console.log(userRoles);
			let roleIds = [];
			userRoles.forEach(function(role){
				roleIds.push(role['id']);
			});
			this.userRoles = roleIds;
			this.roles = window.roles;
		},
		methods: {
			sync() {
				this.$nextTick(() => {
					this.user.put('roles', this.userRoles).then(response => {
					// this.userRoles = response;
					console.log(response);
					}).catch(error => {
						console.log(error)
					});
				})
				
			},
			get() {
				this.user.get('roles').then(response => { 
					this.userRoles = response.roles;
				}).catch(error => {
					console.log(error);
				});
			}
		}
	}
</script>
