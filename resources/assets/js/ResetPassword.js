import Vue from 'vue'
import ResetPassword from './components/ResetPassword.vue'
let register = new Vue({
	name: 'ResetPassword',
	el: '#reset',
	components: {
		passwordResetForm: ResetPassword
	}
});