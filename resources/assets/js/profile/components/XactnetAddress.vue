<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Xactnet Address</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="xactnet_address.errors.clear($event.target.name)">
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
							v-model="xactnet_address.value"
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="xactnet_address.errors.has('value')" v-text="xactnet_address.errors.get('value')"></span>
				</div>
			</form>
			<span v-if="!editing && xactnet_address.value === null" class="button is-text" @click="toggleEditing" style="cursor:pointer">add</span>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ xactnet_address.value }} 
				&nbsp;
				<span v-show="showEdit">
				<a 
					@click.prevent="copyToClipboard"
					v-if="!editing"
					v-text="copyText"
				>
				</a>
				&nbsp;|&nbsp; 
				<a 
					@click.prevent="toggleEditing"
					v-if="!editing"
				>
					edit
				</a>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
	import Form from "../../structur/src/form/Form.js";
	// import profileData from '../data/profileData.js';
	export default {
		name: 'XactnetAddress',
		// props: ['personalData'],
		mounted() {
			//find our input field
			this.input = document.getElementById('xactnet-address-input')
			//set our current values off $userData variable 
			//@see Blade View 'Profile/show.blade.php'
			//mutations will be returned from api and set in data.xactnet_address...
			//window object will be stored until page refreshes.
			this.xactnet_address.value = window.userData.profile.xactnet_address;
			this.xactnet_address.api_token = window.userData.api_token;
		},
		data() {
			return {
				xactnet_address: new Form ({
					value: '',
					api_token: '',
				}),
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
			}
		},
		computed: {
			submitable() {
				return this.xactnet_address.value === '' ? false : true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.xactnet_address.put('/api/user/personal-information/xactnet_address', false)
						.then(response => {
							console.log(response);
							this.xactnet_address.value = response;
							// this.xactnet_address.api_token = window.userData.api_token;
						}).catch(error => {
							console.log(error)
						});
				}else{
					this.edit = false;
					return this.xactnet_address.value = window.userData.profile.xactnet_address;
				}
			},
			toggleEditing() {
				this.editing = !this.editing;
				this.input.focus();
			},
			copyToClipboard() {
				this.createEmptyTextArea();
				let successful = document.execCommand('copy');
				return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
			},
			createEmptyTextArea() {
				let textArea = document.createElement("textarea");
			 	textArea.style.position = 'fixed';
			  	textArea.style.top = -1000;
			  	textArea.style.left = -1000;
			  	textArea.style.width = '2em';
			  	textArea.style.height = '2em';
			  	textArea.style.padding = 0;
			  	textArea.style.border = 'none';
			  	textArea.style.outline = 'none';
			  	textArea.style.boxShadow = 'none';
			  	textArea.style.background = 'transparent';
			  	textArea.value = this.xactnet_address.value;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		}
	}
</script>