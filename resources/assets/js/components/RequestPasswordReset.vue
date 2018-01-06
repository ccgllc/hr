<template>
	<div>
	<form class="form" method="POST" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
        <div class="field has-addons is-signin">
        	<div class="control is-expanded">
        		<input type="text" id="email" name="email" class="input is-medium" v-model="form.email" placeholder="Email Address">
        	</div>
        	<div class="control">
            	<button class="button is-medium is-ccg is-full-width">Send</button>
	        </div>
        </div>
         <span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
    </form>
     <article class="message is-success" v-if="message">
		  <div class="message-header">
		    <p>Thanks! {{ message }}</p>
		    <button class="delete" aria-label="delete" @click="message = ''"></button>
		  </div>
		  <!-- <div class="message-body">
		    
		  </div> -->
		</article>
	</div>
</template>

<script>
	import Form from '../structur/src/form/Form.js';
	export default {
		name: 'ResetPasswordForm',
		data() {
			return {
				form: new Form({
					email: ''
				}),
				message: ''
			}
		},
		methods: {
			submit() {
				return this.form.post('/password/email')
				.then(response => {
					console.log(response);
					this.message = response;
				}).catch(error => {
					console.log(error);
				});
			}
		}
	}
</script>