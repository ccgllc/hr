<template>
	<div id="complete" class="level">
		<div class="level-item has-text-centered">
			<div class="columns">
				<div class="column">
					<h3 class="title">How Did You Hear About Us?</h3>
					<p>Please take 5 seconds to tell us where you heard about us. We'd really apriciate it.</p><br>

					<div class="select">
					  <select v-model="referral">
					    <option value="">Select an option</option>
					    <option v-for="refer in referrals" :value="refer">{{ refer }}</option>
					  </select>
					</div><br><br>

					<button 
						@click="goToProfile()"
						class="button is-primary has-text-centered" 
						:disabled="referral == ''"
						>
							Continue to your profile
					</button>
				</div>
			</div>
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
				appData,
				referral: '',
				referrals: ['Conference', 'Facebook', 'LinkedIn', 'CCG Employee']
			}
		},
		methods: {
			setupView() {
				this.appData.text.title = 'Thank you for Applying!';
				this.appData.text.subtitle = 'You can edit and update your profile as you develop new skills or experience.'
				this.appData.progress = 4;
			},
			goToProfile(){
				return window.location = '/profile';
			}
		}
	}
</script>