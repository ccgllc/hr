import Vue from 'vue'
import RequestPasswordReset from './components/RequestPasswordReset.vue'
let register = new Vue({
	name: 'RequestPasswordReset',
	el: '#reset',
	components: {
		requestPasswordResetForm: RequestPasswordReset
	}
});