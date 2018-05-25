<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Email</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
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
							v-model="form.email" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
				</div>
			</form>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ form.email }}
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
			this.form.email = window.userData.email;
			this.userId = window.userData.id;
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
				userId: '',
				currentValue: '',
				form: new Form({
					email: '',
				})
			}
		},
		computed: {
			submitable() {
				return this.form.email === ''
					? false 
					: true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.form.put('/api/user/' + this.userId + '/email', false)
						.then(response => {
							console.log(response);
							this.form.email = response;
							// this.emailAddress.api_token = window.userData.api_token;
						}).catch(error => {
							console.log(error)
						});
				}else{
					this.edit = false;
					return this.form.email = window.userData.profile.email;
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
			  	textArea.value = this.form.email;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
	}
</script>