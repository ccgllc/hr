<template>
	<section>

	<new-role @addRole="appendRole"></new-role>	<br>

	<table class="table is-full-width">
		<thead>
			<tr>
				<th>Role</th> 
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="role in roles">
				<td><a :href="'/roles/' + role.id ">{{ role.name }}</a></td>
				<td style="width: 5%">
					<a @click="deleteRole(role)" class="button is-small is-danger">
						<span class="icon"><i class="fa fa-trash"></i></span>
					</a>
				</td>
			</tr>
		</tbody>
	</table>
	</section>
</template>

<script>
	import newRole from './NewRole.vue';
	import roles from '../data/roles.js';
	import Resource from '../structur/src/services/Resource.js';
	export default {
		name: 'Roles',
		components: {
			newRole
		},
		data() {
			return {
				roles,
				roleService: new Resource({
					uri: {
						prefix: 'api',
						resource: 'role',
						params: []
					}
				})
			}
		},
		mounted() {
			this.roles = window.roles;
		},
		methods: {
			appendRole(role){
				return this.roles.push(role);
			},
			removeRole(idx){
				return this.roles.splice(idx, 1);
			},
			deleteRole(role) {
				//confirmation temporary....
				if (confirm('Are you sure? This will delete the role and remove all of its user relations, and cannot be undone.')) {
					let idx = this.roles.indexOf(role);
					this.roleService.delete(role.id).then( response => {
						this.removeRole(idx);
					}).catch( error => {
						console.log(error);
					})
				}
			}
		}
	}
</script>