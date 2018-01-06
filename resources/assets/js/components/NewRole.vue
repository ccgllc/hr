<template>
	<section>
		<button class="button" @click="showForm = !showForm">
			<span class="icon">
		      <i class="fa fa-plus"></i>
		    </span>
			<span>New Role</span>
		</button>

		<form action="/role" method="post" style="margin-top: 20px; margin-bottom: 20px;" v-show="showForm" @submit.prevent="submit()">
			<div class="field is-horizontal">
			<div class="field-body">
				<div class="field">
					<label class="label">Role Name</label>
					<div class="control">
				   		<input class="input" type="text" placeholder="e.g. Manager" v-model="role.name">
				  </div>
				   <span class="help is-danger" v-if="role.errors.has('name')" v-text="role.errors.get('name')"></span>
				</div>
			 
				<div class="field">
				  <label class="label">Role Label</label>
				  <div class="control">
				    <input class="input" type="text" placeholder="e.g. Department Manager" v-model="role.label">
				  </div>
				   <span class="help is-danger" v-if="role.errors.has('label')" v-text="role.errors.get('label')"></span>
				</div>

			<div class="control" style="margin-top: 32px;">
			    <button class="button is-success">Save</button>
		  </div>
		  </div>
		</div>
		</form>

	</section>
</template>

<script>
	import Form from '../structur/src/form/Form.js';
	export default {
		name: 'NewRole',
		props: ['roles'],
		data() {
			return {
				showForm: false,
				role: new Form({
					name: '',
					label: ''
				}),
			}
		},
		methods: {
			submit() {
				this.role.post('api/role').then( response => {
					console.log(response);
					// TODO: Update Roles list in parent component.
					this.$emit('addRole', response);
					this.showForm = false;
				}).catch(error => {
					// present relevant error to user. 
					console.log(error);
				})
			}
		}
	}
</script>