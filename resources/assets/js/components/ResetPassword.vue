<template>
	
       <form method="post" action="/login" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
		
		<input type="hidden" :value="form.token">
			
        <div class="field is-signin">
            <!-- <label class="label">Email</label> -->
            <div class="control has-icons-left">
                <input type="text" id="email" name="email" class="input is-medium" v-model="form.email" placeholder="Email Address">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                 <span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
            </div>
        </div>

        <div class="field is-signin">
            <!-- <label class="label">Password</label> -->
            <div class="control has-icons-left">
                <input type="password" id="password" name="password" class="input is-medium" v-model="form.password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
            </div>
        </div>

        <div class="field is-signin">
            <!-- <label class="label">Password</label> -->
            <div class="control has-icons-left">
                <input type="password" id="password_confirmation" name="password_confirmation" class="input is-medium" v-model="form.password_confirmation" placeholder="Confirm Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span class="help is-danger" v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></span>
            </div>
        </div>

        <br />

            <div class="control">
                <button class="button is-medium is-ccg is-full-width">
                    <!-- <span>Go</span> -->
                    <span class="icon is-small">
                        <i class="fa fa-check"></i>
                    </span>
                </button>
            </div>

        </form>
</template>

<script>
	import Form from '../structur/src/form/Form.js'
	export default {
		name: 'ResetPassword',
		data() {
			return {
				form: new Form({
					token: '',
					email: '',
					password: '',
					password_confirmation: ''
				})
			}
		},
		mounted() {
			let segments = window.location.href.split( '/' );
			return this.validToken(segments[5]) 
				?  this.form.token = segments[5]
				:  window.location = '/password/reset'
		},
		methods: {
			submit() {
				this.form.post('/password/reset')
					.then(response => {
						console.log(response);
					}).catch(error => {
						console.log(error);
						this.message = 'Your reset has expired, you\'ll need to requet another password reset here';
					})
			},
			validToken(token) {
				return true;
			}
		}
	}
</script>