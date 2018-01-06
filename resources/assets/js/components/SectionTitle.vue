<template>
	<div class="title">
		<h1 class="title" v-text="appData.text.title"></h1>
		<h2 class="subtitle" v-text="appData.text.subtitle"></h2>
		<!-- <sign-out-form></sign-out-form> -->
		<hr />
	</div>
</template>

<script>
	import appData from '../data/appData.js';
	import signOutForm from './SignOutForm.vue';
	export default {
		name: 'SectionTitle',
		components: {
			signOutForm
		},
		mounted() {
			this.logoutForm = document.getElementById('logout-form');
		},
		data() {
			return {
				logoutForm: {},
				appData
			}
		},
		methods: {
			signout() {
				this.logoutForm.submit();
			}
		}
	}
</script>