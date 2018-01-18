<template>
	<div id="complete" class="level">
		<div class="level-item has-text-centered">
			<div class="columns">
				<div class="column">
					<h3 class="title">How Did You Hear About Us?</h3>
					<p>Please take 5 seconds to tell us where you heard about us. We'd really apriciate it.</p><br>

					<div class="select">
					  <select v-model="referral" @change="userInput = ''">
					    <option value="">Select an option</option>
					    <option v-for="refer in referrals" :value="refer">{{ refer }}</option>
					  </select>
					</div><br><br>

					<div class="field is-signin" v-if="needsInput">
						<label class="label" for="userInput">{{ getLabel }}?</label>
						<input type="text" class="input" v-model="userInput">
						<br><br>
					</div>

					<button 
						@click="goToProfile()"
						class="button is-primary has-text-centered" 
						:disabled="referral == '' || userInput == ''"
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
		computed: {
			needsInput() {
				return this.referral === 'Conference' || this.referral === 'CCG Employee' || this.referral === 'Other'
								? true
								: false;
			},
			getLabel() {
				switch(this.referral) {
					case 'Conference' :
						return 'Which Conference';
						break;
					case 'CCG Employee' :
						return 'Employee\'s Name';
						break;
					case 'Other' :
						return 'How did you hear about us';
						break;
					default:
						return 'Label';

				}
				// this.referral === 'Conference' ? this.label = 'Which Conference' :
			}
		},
		data() {
			return {
				appData,
				referral: '',
				label: '',
				userInput: '',
				userId: '',
				referrals: ['Conference', 'Facebook', 'LinkedIn', 'CCG Employee', 'Other']
			}
		},
		methods: {
			setupView() {
				this.appData.text.title = 'Thank you for Applying!';
				this.appData.text.subtitle = 'You can edit and update your profile as you develop new skills or experience.'
				this.appData.progress = 4;
				this.userId = window.userData.id;
			},
			goToProfile(){
				// console.log(this.getData());
				window.axios.patch('/api/user/' + this.userId + '/referral', this.getData())
								.then(response => {
									return window.location = '/profile';
								}).catch(error => {
									console.error(error);
								});
			},
			getData() {
				return this.needsInput 
					? {referral: this.userInput} 
					: {referral: this.referral};
			}
		}
	}
</script>