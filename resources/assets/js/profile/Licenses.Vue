<template>
	<div id="Licenses">
		<div class="columns">
		<div class="column is-6" v-for="license in adjusterLicenses" :key="license.id">
		<div class="card" style="margin-top: 1rem;">
			<header class="card-header">
			    <p class="card-header-title">
			     {{license.license_state}} Adjusting License
			    </p>
			    <a @click="remove(license)" class="card-header-icon is-danger" aria-label="Delete">
			      <span class="icon">
			        <i class="fa fa-close" aria-hidden="true"></i>
			      </span>
			    </a>
		 	</header>
		 	<div class="card-content">
		 		<div class="content">
		 			<div class="columns">
						<div class="column is-3">
							<p><strong>License #</strong>:</p>
						</div>

						<div class="column is-3">
							<p>{{ license.license_number }}</p>
						</div>

						<div class="column is-3">
							<p><strong>Expiration</strong>:</p>
						</div>

						<div class="column is-3">
							<p>{{ license.expiration_month }} / {{license.expiration_year}}</p>
						</div>
					</div><!-- end columns -->
				</div><!-- end content -->
	 		</div><!-- end card content --> 
	 	</div><!-- end card -->
	 	</div>
	 	</div>
		<br>
		<button @click="creatingNewLicense = !creatingNewLicense;" class="button is-info">{{ buttonText}}</button>
		

		<div class="modal" v-bind:class="{ 'is-active': creatingNewLicense }">
			<div class="modal-background"></div>
			<div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">Add a new Adjuster License</p>
			      <button class="delete" aria-label="close" @click="creatingNewLicense = false"></button>
			    </header>
			    <section class="modal-card-body">
			      <form @submit.prevent="submit" @keydown="newLicense.errors.clear($event.target.name)">
					<div class="columns">
					
						<div class="column is-2">
							<div class="field">
								<label class="label">State:</label>
								<div class="select">
								  <select v-model="newLicense.license_state">
								    <option value=""></option>
								    <option v-for="state in states" :value="state.abbr">{{ state.abbr }}</option>
								  </select>
								</div>
								  <span class="help is-danger" v-if="newLicense.errors.has('license_state')" v-text="newLicense.errors.get('license_state')"></span>
							</div>
						</div>

						<div class="column is-4">
							<div class="field">
								<label class="label">License #:</label>
								<div class="control control has-icons-left">
							    	<input v-model="newLicense.license_number" class="input" type="text">
							    	<span class="icon is-small is-left">
								      <i class="fa fa-hashtag"></i>
								    </span>
								    <span class="help is-danger" v-if="newLicense.errors.has('license_number')" v-text="newLicense.errors.get('license_number')"></span>
						  		</div>
							</div>
						</div>

						<div class="column is-2">
							<div class="field">
								<label class="label">Exp. Mo:</label>
								<div class="select">
								  <select v-model="newLicense.expiration_month">
								  	<option value="">mo.</option>
								    <option v-for="month in months" :value="month.abbr">{{ month.abbr }}</option>
								  </select>
								  <span class="help is-danger" v-if="newLicense.errors.has('expiration_month')" v-text="newLicense.errors.get('expiration_month')"></span>
								</div>  
							</div>
						</div>

						<div class="column is-4">
							<div class="field">
								<label class="label">Exp. Year:</label>
								<div class="select">
								  <select v-model="newLicense.expiration_year">
								  	<option value="">yr.</option>
								    <option v-for="n in 10" :value="(currentYear + n) - 1">{{ (currentYear + n) - 1 }}</option>
								  </select>
								  <span class="help is-danger" v-if="newLicense.errors.has('expiration_year')" v-text="newLicense.errors.get('expiration_year')"></span>
								</div>  
							</div>
						</div>

						</div><!-- end columns -->
					</form>
			    </section>
			    <footer class="modal-card-foot">
			      <button class="button is-primary" @click="submit">Save</button>
			      <button class="button" @click="creatingNewLicense = false">Cancel</button>
			    </footer>
			  </div>
			  <!-- <button class="modal-close is-large" aria-label="close"></button> -->
			</div>


	</div>
</template>

<script>
	import license from './components/license.vue';
	import Form from '../structur/src/form/Form.js';
	import states from '../data/states.js';
	import months from '../data/months.js';
	export default {
		name: 'Licenses',
		components: {
			license,
		},
		mounted() {
			this.adjusterLicenses = window.userData.adjuster_licenses;
			this.userId = window.userData.id;
			let today = new Date;
			this.currentYear = today.getFullYear();
		},
		computed: {
			buttonText() {
				return this.creatingNewLicense ? 'cancel' : 'Add License';
			}
		},
		data() {
			return {
				creatingNewLicense: false,
				adjusterLicenses: [],
				userId: '',
				newLicense: new Form({
					license_number: '',
					license_state: '',
					expiration_month: '',
					expiration_year: '',
				}),
				currentYear: '',
				states,
				months
			}
		},
		methods: {
			submit() {
				this.newLicense.post('/api/user/' + this.userId + '/license/')
					.then(response => {
						console.log(response)
						this.adjusterLicenses.push(response);
						return this.creatingNewLicense = false;
					})
					.catch(error => {
						console.log(error);
					})
			},
			remove(license) {
				if (confirm('Are you sure? This action cannot be undone..')) {
				window.axios.delete('/api/user/' + this.userId + '/license/' + license.id)
					.then(response => {
						console.log(response);
						let index = this.adjusterLicenses.indexOf(license);
						return this.adjusterLicenses.splice(index, 1);
					})
					.catch(error => {
						console.log(error);
					})
				}
			}
		}
	}
</script>