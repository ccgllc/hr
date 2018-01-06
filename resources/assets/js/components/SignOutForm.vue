<template>
	<span style="position: absolute; top: 20px; right:0; font-size: 1rem;" >
		<a @click.prevent="signout">signout</a>
	</span>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'SignOutForm',
		data() {
			return {

			}
		},
		methods: {
			signout() {
				axios.post('/logout').then(response => {
					console.log(response);
					window.location = '/login';
				})
			}
		}
	}
</script>