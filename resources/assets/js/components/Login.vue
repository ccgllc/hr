<template>
    <!-- <div class="column is-one-third is-offset-one-third"> -->
       <form method="post" action="/login" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">

        <div class="field is-signin">
            <!-- <label class="label">Email</label> -->
            <div class="control has-icons-right">
                <input type="text" id="email" name="email" class="input is-medium" v-model="form.email" placeholder="Email Address">
                <span class="icon is-small is-right">
                  <i class="fa fa-envelope"></i>
                </span>
                 <span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
            </div>
        </div>


        <div class="field is-signin">
            <!-- <label class="label">Password</label> -->
            <div class="control has-icons-right">
                <input type="password" id="password" name="password" class="input is-medium" v-model="form.password" placeholder="Password">
                <span class="icon is-small is-right">
                  <i class="fa fa-lock"></i>
                </span>
                <span class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
            </div>
        </div>
        
         <br />

         <div class="field">
            <input type="checkbox" class="is-checkbox is-small is-info" name="remember" id="remember" v-model="form.remember">   
            <label for="remember">Remember me</label>
         </div>

        <br />

            <div class="control">
                <button class="button is-medium is-ccg is-full-width">
                    <!-- <span>Go</span> -->
                    <span class="icon is-small">
                        <i class="fa fa-check"></i>
                    </span>
                </button>
                <a href="/register" class="button is-text is-small is-pulled-left" style="color: #B1B1B1;">Register</a>
                <a href="/password/reset" class="button is-text is-small is-pulled-right" style="color: #B1B1B1;">Forgot Password?</a>
            </div>

        </form>
   <!--  </div> -->
</template>

<script>
	import Form from '../structur/src/form/Form.js'
	export default {
		name: 'LoginForm',
		data() {
			return {
				form: new Form({
					email: "",
					password: "",
                    remember: false
				})
			}
		},
		methods: {
			submit () {
				return this.form.post('/login')
					.then(response => {
						console.log(response);
                        let storage = window.localStorage;
                        storage.setItem('token', response.token);
						return window.location.href = response.destination;
				});
			}
		}
	}
</script>