<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Phone Number</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="phoneNumber.errors.clear($event.target.name)">
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" style="cursor:pointer">
					      <i class="fa fa-times"></i>
					    </span>
						<input 
							id="xactnet-address-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="phoneNumber.value" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="phoneNumber.errors.has('value')" v-text="phoneNumber.errors.get('value')"></span>
				</div>
			</form>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ phoneNumber.value }}
				<button 
					@click.prevent="copyToClipboard"
					class="button is-small is-text" 
					v-show="showEdit" 
					v-if="!editing"
					v-text="copyText"
				>
					<i class="fa fa-clipboard"></i>
				</button>
				<button 
					@click.prevent="toggleEditing" 
					class="button is-small is-text" 
					v-show="showEdit" 
					v-if="!editing"
				>
					edit
				</button>
			</span>
		</div>
	</div>
</template>

<script>
	import Form from '../../structur/src/form/Form.js';
	export default {
		props: ['label', 'apiEndpoint']
		name: this.label,
		mounted() {
			//find our input field
			this.input = document.getElementById('xactnet-address-input')
			//set our current values off $userData variable 
			//@see Blade View 'Profile/show.blade.php'
			//mutations will be returned from api and set in data.phoneNumber...
			//window object will be stored until page refreshes.
			this.form.value = window.userData.profile[this.property];
			this.form.api_token = window.userData.api_token;
		},
		data() {
			phoneNumber: new Form ({
				value: '',
				api_token: ''
			})
		}
	}
</script>