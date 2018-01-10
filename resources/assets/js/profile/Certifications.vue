<template>
	<div id="certifications">
		<h1 class="profile-title">My Certifications</h1><br>
		<div class="columns" id="certifications">
			<div class="certification column"  v-for="cert in certifications">
				<div class="card">
					<div class="card-content">
						<div class="content">
							{{ cert.type }}
						</div>	
					</div>
				</div>
			</div>
		</div>
		<h1 class="profile-title">Software Experience</h1><br>
		<div class="columns" id="certifications">
			<div class="certification column"  v-for="exp in softwareExperiences">
				<div class="card">
					<div class="card-content">
						<div class="content">
							{{ exp.type }}
						</div>	
					</div>
				</div>
			</div>
		</div>


		<!-- =====================BUTTON===================== -->
		<button class="button is-info" @click="creatingNew = !creatingNew">Add new</button>
		<!-- =====================BUTTON===================== -->


		<div class="modal" v-bind:class="{ 'is-active': creatingNew }">
			<div class="modal-background"></div>
			<div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">New certification or software experience</p>
			      <button class="delete" aria-label="close" @click="creatingNew = false"></button>
			    </header>
			    <section class="modal-card-body">
			      <form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
					<div class="columns is-multiline">
					
						<div class="column is-12">
							<div class="field">
								<label class="label">Type:</label>
								<div class="select is-fullwidth">
								  <select v-model="type" @change="clearForm">
								    <option value="">Select</option>
								   	<option value="software-experiences">Software Experience</option>
								   	<option value="certifications">Certification</option>
								  </select>
								</div>
							</div>
						</div>

						<div class="column is-12" v-if="type == 'software-experiences'">
							<div class="field">
								<label class="label">Software Experience:</label>
								<div class="select is-fullwidth">
								  <select v-model="form.type">
								    <option value="">Select</option>
								   <option v-for="exp in experienceTypes" :value="exp.name">{{ exp.label }}</option>
								  </select>
								</div>
								  <span class="help is-danger" v-if="form.errors.has('type')" v-text="form.errors.get('type')"></span>
							</div>
						</div>

						<div class="column is-12" v-if="type == 'certifications'">
							<div class="field">
								<label class="label">Certification:</label>
								<div class="select is-fullwidth">
								  <select v-model="form.type">
								    <option value="">Select</option>
								   <option v-for="cert in certificationTypes" :value="cert.name">{{ cert.label }}</option>
								  </select>
								</div>
								  <span class="help is-danger" v-if="form.errors.has('type')" v-text="form.errors.get('type')"></span>
							</div>
						</div>

						</div><!-- end columns -->
					</form>
			    </section>
			    <footer class="modal-card-foot">
			      <button class="button is-primary" @click="submit">Save</button>
			      <button class="button" @click="creatingNew = false">Cancel</button>
			    </footer>
			  </div>
			  <!-- <button class="modal-close is-large" aria-label="close"></button> -->
			</div>		

	</div>
</template>

<script>
	import Form from '../structur/src/form/Form';
	export default {
		name: 'Certifications',
		mounted(){
			this.certifications = window.userData.certifications;
			this.softwareExperiences = window.userData.software_experiences;
			this.userId = window.userData.id;
		},
		data() {
			return {
				type: '',
				form: new Form({
					type: '',
				}),
				userId: '',
				creatingNew: false,
				certifications: [],
				softwareExperiences: [],
				certificationTypes: [
					{ name: 'AIC', label: 'AIC' },
					{ name: 'CPCU', label: 'CPCU' },
					{ name: 'TWIA/TFPA', label: 'TWIA / TFPA' },
					{ name: 'NFIP', label: 'NFIP' },
					{ name: 'HAAG', label: 'HAAG' },
					{ name: 'IIRC', label: 'IIRC' },
					{ name: 'rope/harness', label: 'Rope & Harness' },
					{ name: 'Earthquake', label: 'Earthquake' },
					{ name: 'Umpire', label: 'Umpire' },
					{ name: 'Appraiser', label: 'Appraiser' },
				],
				experienceTypes: [
					{ name: 'xactimate', label: 'Xactimate' },
					{ name: 'symbility', label: 'Symbility' },
					{ name: 'simsol', label: 'Simsol' },
					{ name: 'guidewire', label: 'Guidewire' },
					{ name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' },
					{ name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' },
				],
			}
		},
		methods: {
			submit() {
				console.log('submitting');
				this.form.post('/api/user/' + this.userId + '/' + this.type)
							.then(response => {
								console.log(response);
								this.certifications.push(response);
								this.creatingNew = false;
							}).catch(error => {
								console.error(error);
							})
			},
			clearForm() {
				return this.form.type = '';
			}
		}
	}
</script>