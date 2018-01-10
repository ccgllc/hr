<template>
	<form id="personalInformation" method="post" @submit.prevent="submit" @keydown="appData.personalInfo.errors.clear($event.target.name)">

		<h2 class="subtitle has-text-primary"><strong>Your Contact Info</strong></h2>
		<hr>

		<div class="field">
			<label class="label">Street:</label>
			<div class="control control has-icons-left">
		    	<input v-model="appData.personalInfo.street" class="input" type="text">
		    	<span class="icon is-small is-left">
			      <i class="fa fa-home"></i>
			    </span>
			    <span class="help is-danger" v-if="appData.personalInfo.errors.has('street')" v-text="appData.personalInfo.errors.get('street')"></span>
	  		</div>
		</div>

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">City:</label>
					<div class="control control has-icons-left">
				    	<input v-model="appData.personalInfo.city" class="input" type="text">
				    	<span class="icon is-small is-left">
					      <i class="fa fa-map-marker"></i>
					    </span>
					    <span class="help is-danger" v-if="appData.personalInfo.errors.has('city')" v-text="appData.personalInfo.errors.get('city')"></span>
			  		</div>
				</div>
			</div>

			<div class="column">
				<label class="label">State</label>
				<div class="select">
				  <select v-model="appData.personalInfo.state">
				    <option value="">Select State</option>
				    <option v-for="state in appData.states" :value="state.abbr">{{ state.name }}</option>
				  </select>
				</div>		
				<span class="help is-danger" v-if="appData.personalInfo.errors.has('state')" v-text="appData.personalInfo.errors.get('state')"></span>
			</div>
			
			<div class="column">
				<div class="field">
					<label class="label">Zip:</label>
					<div class="control has-icons-left">
				    	<input v-model="appData.personalInfo.zip" class="input" type="text">
				    	<span class="icon is-small is-left">
					      <i class="fa fa-location-arrow"></i>
					    </span>
					    <span class="help is-danger" v-if="appData.personalInfo.errors.has('zip')" v-text="appData.personalInfo.errors.get('zip')"></span>
			  		</div>
				</div>
			</div>
		</div>


		<div class="field">
			<label class="label">Phone:</label>
			<div class="control has-icons-left">
		    	<input v-model="appData.personalInfo.phone" class="input" type="text">
		    	<span class="icon is-small is-left">
			      <i class="fa fa-mobile"></i>
			    </span>
			    <span class="help is-danger" v-if="appData.personalInfo.errors.has('phone')" v-text="appData.personalInfo.errors.get('phone')"></span>
	  		</div>
		</div>

		<br />

		<h2 class="subtitle has-text-primary"><strong>Adjuster License</strong></h2>
		<hr>

		<div class="columns">
			
			<div class="column">
				<div class="field">
					<label class="label">License State:</label>
					<div class="select">
					  <select v-model="appData.personalInfo.license_state">
					    <option value="">Select State</option>
					    <option v-for="state in appData.states" :value="state.abbr">{{ state.name }}</option>
					  </select>
					</div>
					  <span class="help is-danger" v-if="appData.personalInfo.errors.has('license_state')" v-text="appData.personalInfo.errors.get('license_state')"></span>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">License #:</label>
					<div class="control control has-icons-left">
				    	<input v-model="appData.personalInfo.license_number" class="input" type="text">
				    	<span class="icon is-small is-left">
					      <i class="fa fa-hashtag"></i>
					    </span>
					    <span class="help is-danger" v-if="appData.personalInfo.errors.has('license_number')" v-text="appData.personalInfo.errors.get('license_number')"></span>
			  		</div>
				</div>
			</div>

			<div class="column is-2">
				<div class="field">
					<label class="label">Exp. Mo:</label>
					<div class="select">
					  <select v-model="appData.personalInfo.expiration_month">
					  	<option value="">mo.</option>
					    <option v-for="month in appData.months" :value="month.abbr">{{ month.abbr }}</option>
					  </select>
					  <span class="help is-danger" v-if="appData.personalInfo.errors.has('license_expiration_month')" v-text="appData.personalInfo.errors.get('license_expiration_month')"></span>
					</div>  
				</div>
			</div>

			<div class="column is-2">
				<div class="field">
					<label class="label">Exp. Year:</label>
					<div class="select">
					  <select v-model="appData.personalInfo.expiration_year">
					  	<option value="">yr.</option>
					    <option v-for="n in 10" :value="(currentYear + n) - 1">{{ (currentYear + n) - 1 }}</option>
					  </select>
					  <span class="help is-danger" v-if="appData.personalInfo.errors.has('license_expiration_year')" v-text="appData.personalInfo.errors.get('license_expiration_year')"></span>
					</div>  
				</div>
			</div>

		</div>

		<h2 class="subtitle has-text-primary"><strong>Xactimate</strong></h2>
		<hr>

		<div class="columns">
			<div class="column">
				<div class="field">
				  <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" class="switch is-rounded" v-model="hasXactimate">
				  <label for="switchRoundedDefault">Do you have Xactimate credentials?</label>
				</div>
			</div>
		</div>		

		<div class="columns" v-if="hasXactimate">
			<div class="column">
				<div class="field">
					<label class="label">Xactnet Address</label>
					<div class="control">
				    	<input v-model="appData.personalInfo.xactnet_address" class="input" type="text">
			  		</div>
				</div>
			</div>
		</div>		

		<div class="columns">

			<div class="column has-text-right">
				<button class="button is-primary" v-bind:class="{ 'is-loading': btnState }" @click="btnState = !btnState">
					<span>save &amp; continue</span>
					<span class="icon is-small">
			     	 	<i class="fa fa-chevron-circle-right"></i>
			   		</span>
				</button> 
			</div>

		</div>

	</form>
</template>

<script>
	import appData from '../data/appData.js';
	export default {
		name: 'PersonalInformation',
		data () {
			return {
				appData,
				hasXactimate: false,
				currentYear: '',
				btnState: false,
			}
		},
		mounted() {
			this.setupView();
		},
		computed: {
			//
		},
		methods: {
			submit () {
				this.appData.personalInfo.post('/api/user/personal-information', false)
					.then(response => {
						console.log(response.data)
						this.$router.push({ path: '/work-history' })
					}).catch(error => {
						this.btnState = false;
					});
			},
			setupView() {
				this.appData.text.title = "Personal Information";
				this.appData.text.subtitle = "Step One - Tell Us About Yourself";
				this.appData.progress = 1;
				let today = new Date;
				this.currentYear = today.getFullYear();
			}
		}
	}
</script>