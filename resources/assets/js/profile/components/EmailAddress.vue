<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Email</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="emailAddress.errors.clear($event.target.name)">
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="email-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="emailAddress.value" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="emailAddress.errors.has('value')" v-text="emailAddress.errors.get('value')"></span>
				</div>
			</form>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ emailAddress.value }}
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
		name: 'EmailAddress',
		mounted() {
			this.input = document.getElementById('phone-input')
			this.emailAddress.value = window.userData.email;
			this.emailAddress.api_token = window.userData.api_token;
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
				currentValue: '',
				emailAddress: new Form({
					value: '',
					api_token: ''
				})
			}
		},
		computed: {
			submitable() {
				return this.emailAddress.value === ''
					? false 
					: true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.emailAddress.put('/api/user/personal-information/email', false)
						.then(response => {
							console.log(response);
							this.emailAddress.value = response;
							// this.emailAddress.api_token = window.userData.api_token;
						}).catch(error => {
							console.log(error)
						});
				}else{
					this.edit = false;
					return this.emailAddress.value = window.userData.profile.emailAddress;
				}
			},
			close() {
				console.log('close');
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
			  	textArea.value = this.emailAddress.value;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
	}
</script>