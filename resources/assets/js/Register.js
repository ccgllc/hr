import Vue from 'vue'
import RegistrationForm from './components/Register.vue'
let register = new Vue({
	name: 'Register',
	el: '#register',
	components: {
		registrationForm: RegistrationForm
	}
});

