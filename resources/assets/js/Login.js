import Vue from 'vue'
import LoginForm from './components/Login.vue'
let register = new Vue({
	name: 'Login',
	el: '#login',
	components: {
		loginForm: LoginForm
	}
});

