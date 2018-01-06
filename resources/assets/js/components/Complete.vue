<template>
	<div id="complete" class="level">
		<div class="level-item has-text-centered">
			<a href="/profile" class="button is-primary is-large has-text-centered" style="margin: 0 auto;">View your profile.</a>
		</div>
	</div>
</template>

<script>
	import appData from '../data/appData';
	export default {
		name: 'Complete',
		mounted() {
			this.setupView();
		},
		data() {
			return {
				appData
			}
		},
		methods: {
			setupView() {
				this.appData.text.title = 'Thank you for Applying!';
				this.appData.text.subtitle = 'You can edit and update your profile as you develop new skills or experience.'
				this.appData.progress = 4;
			}
		}
	}
</script>