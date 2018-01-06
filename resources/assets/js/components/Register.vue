<template>
    <div>

        <div class="sign-in-title" v-if="!successfulRegistration">
            <h1>You'll need to register to apply</h1>
        </div>

        <div v-if="successfulRegistration" style="position: relative; top: 40px;">
            <h1 class="title">Welcome, {{ form.firstName }}</h1>
            <h2 class="subtitle">Thanks for creating an account</h2>
            <hr />
            <p>We've sent an email to the address you just signed up with. You'll need to verify your account by clicking the link proided in the email to continue your application for employment with CCG.</p>
            <div class="control" style="margin-top: 35px;">
                <a href="/login" class="button is-medium is-ccg is-full-width">
                    <span>Login</span>
                    <span class="icon is-small">
                        <i class="fa fa-login"></i>
                    </span>
                </a>
            </div>
        </div>
                <!-- <h1 class="title">Join The Team</h1>
                <h2 class="subtitle">Step One - Create An Account</h2>
                <hr /> -->

        <form method="post" action="/register" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)" v-if="!successfulRegistration">

            <!-- <div class="columns"> -->
                <!-- <div class="column"> -->
                    <div class="field is-signin">
                         <!-- <label class="label">First Name</label> -->
                        <div class="control has-icons-right">
                            <input type="text" id="firstName" name="firstName" class="input is-medium" v-model="form.firstName" placeholder="First Name">
                            <span class="icon is-small is-right">
                              <i class="fa fa-user"></i>
                            </span>
                            <span class="help is-danger" v-if="form.errors.has('firstName')" v-text="form.errors.get('firstName')"></span>
                        </div>
                    </div>
               <!-- </div> -->

                <!-- <div class="column"> -->
                    <div class="field is-signin">
                        <!-- <label class="label">Last Name</label> -->
                        <div class="control has-icons-right">
                            <input type="text" id="lastName" name="lastName" class="input is-medium" v-model="form.lastName" placeholder="Last Name">
                            <span class="icon is-small is-right">
                              <i class="fa fa-user"></i>
                            </span>
                            <span class="help is-danger" v-if="form.errors.has('lastName')" v-text="form.errors.get('lastName')"></span>
                        </div>
                    </div>
                <!-- </div> -->
            <!-- </div> -->

            <div class="field is-signin" style="margin: 20px 0 20px 0">
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
                    <input type="password" id="password" name="password" class="input is-medium" v-bind:class="{ 'is-success': passwordsMatch, 'is-danger': !passwordsMatch }" v-model="form.password" placeholder="Password">
                    <span class="icon is-small is-right">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
                </div>
            </div>

            <div class="field is-signin">
                <!-- <label class="label">Confirm Password</label> -->
                <div class="control has-icons-right">
                    <input type="password" id="passwordConfirmation" name="passwordConfirmation" class="input is-medium" v-bind:class="{ 'is-success': passwordsMatch, 'is-danger': !passwordsMatch }" v-model="form.password_confirmation" placeholder="Confirm Password">
                    <span class="icon is-small is-right">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span class="help is-danger" v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></span>
                </div>
            </div>

            <br />

            <div class="control">
                <button class="button is-medium is-ccg is-full-width">
                    <span>Create Account</span>
                    <span class="icon is-small">
                        <i class="fa fa-chevron-circle-right"></i>
                    </span>
                </button> 
            </div>
            <div class="control has-text-centered" >
                <a href="/login" class="button is-text is-small" style="color: rgb(177, 177, 177);">
                    <span>Login</span>
                   <!--  <span class="icon is-small">
                        <i class="fa fa-chevron-circle-right"></i>
                    </span> -->
                </a> 
            </div>
        </form>
    </div> <!-- end container div -->
</template>

<script>
	import Form from '../structur/src/form/Form.js'
	export default {
		name: 'RegistrationForm',
		data() {
			return {
				form: new Form({
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					password_confirmation: "",
				}),
				successfulRegistration: false
			}
		},
		computed: {
			passwordsMatch () {
				return this.form.password === this.form.password_confirmation ? true : false;
			}
		},
		methods: {
			submit () {
				return this.form.post('/register', false)
					.then((response) => {
						this.successfulRegistration = true;
					}).catch((response) => {
						console.log(response);
					});
			}
		}
	};
</script>