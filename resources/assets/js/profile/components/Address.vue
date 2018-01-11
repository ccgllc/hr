<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Address</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="address.errors.clear($event.target.name)">
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="sreet-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.street" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('street')" v-text="address.errors.get('street')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.city" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('city')" v-text="address.errors.get('city')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.state" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('state')" v-text="address.errors.get('state')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.zip" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('zip')" v-text="address.errors.get('zip')"></span>
				</div>
			</form>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ address.street }} <br>
				{{ address.city }} {{ address.state }}, {{ address.zip }}
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
	export default {
		name: 'Address',
		mounted() {
			this.input = document.getElementById('street-input')
			this.address.street = window.userData.profile.street;
			this.address.city = window.userData.profile.city;
			this.address.state = window.userData.profile.state;
			this.address.zip = window.userData.profile.zip;
			this.address.api_token = window.userData.api_token;
			this.userId = window.userData.id;
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
				currentValue: '',
				userId: '',
				address: new Form({
					street: '',
					city: '',
					state: '',
					zip: '',
				})
			}
		},
		computed: {
			submitable() {
				return this.address.street === "" ||
					this.address.city === '' ||
					this.address.state === '' ||
					this.address.zip === ''
					? false 
					: true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.address.put('/api/user/' + this.userId + '/address', false)
						.then(response => {
							console.log(response);
							this.address.street = response['street'];
							this.address.city = response['city'];
							this.address.state = response['state'];
							this.address.zip = response['zip'];
							// this.address.api_token = window.userData.api_token;
						}).catch(error => {
							console.log(error)
						});
				}else{
					this.edit = false;
					this.address.street = window.userData.profile.street;
					this.address.city = window.userData.profile.city;
					this.address.state = window.userData.profile.state;
					this.address.zip = window.userData.profile.zip;
				}
			},
			close() {
				console.log('close');
			},
			toggleEditing() {
				this.editing = !this.editing;
				return this.editing === false ? this.submit() : null;
				// this.input.focus();
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
			  	textArea.value = this.address.street + " " + this.address.city + " " + this.address.state + ", " + this.address.zip;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
	}
</script>