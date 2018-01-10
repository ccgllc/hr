<template>
	<form id="certifications" method="post" action="/login" enctype="multipart/form-data" @submit.prevent="submit" @click="appData.certifications.errors.clear($event.target.name)">
		<div class="columns">
			<div class="column">
				<h2 class="subtitle has-text-primary"><strong>Certifications</strong></h2><hr>
				<span class="help is-danger" v-if="appData.certifications.errors.has('certifications')" v-text="appData.certifications.errors.get('certifications')"></span>
				<div class="field" v-for="cert in certificationTypes">
				  <input type="checkbox" class="is-checkbox is-circle" :value="cert.name" :id="cert.name" :name="cert.name" v-model="appData.certifications.certifications">
				  <label :for="cert.name" v-text="cert.label"></label>
				</div>
			</div>

			<div class="column">
				<h2 class="subtitle has-text-primary"><strong>Estimating Software Experience</strong></h2><hr>
				<span class="help is-danger" v-if="appData.certifications.errors.has('software')" v-text="appData.certifications.errors.get('software')"></span>
				<div class="field" v-for="software in softwares">
				  <input type="checkbox" class="is-checkbox is-circle" :value="software.name" :id="software.name" :name="software.name" v-model="appData.certifications.software">
				  <label :for="software.name" v-text="software.label"></label>
				</div>
			</div>
		</div><!-- end columns -->

		<br>
		
		<h2 class="subtitle has-text-primary"><strong>Upload Your Resume</strong></h2><hr>

		<div class="columns">
			<div class="column">
				<div class="file has-name is-primary">
				  <label class="file-label">
				    <input class="file-input" type="file" name="resume" @change="processFile($event.target.files)">
				    <span class="file-cta">
				      <span class="file-icon">
				        <i class="fa fa-cloud-upload"></i>
				      </span>
				      <span class="file-label">
				        Upload your resume…
				      </span>
				    </span>
				    <span class="file-name" v-text="filename" v-if="filename != ''"></span>
				  </label>
				</div>
				<span class="help is-danger" v-if="appData.certifications.errors.has('resume')" v-text="appData.certifications.errors.get('resume')"></span>
				<span class="help">Accepted file types: <strong>.pdf .doc .docx .rtf</strong></span>
			</div>
		</div>

		<br>

		<div class="columns">		
			<div class="column">

				<button class="button is-primary has-text-right" v-bind:class="{ 'is-loading': btnState }" @click="btnState = !btnState">
					<span>Save &amp; Continue</span>
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
		name: 'Certifications',
		mounted() {
			this.setupView();
		},
		data() {
			return {
				appData,
				btnState: false,
				filename: '',
				certificationTypes: [
					// { name: 'none', label: 'None' },
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
				softwares: [
					{ name: 'xactimate', label: 'Xactimate' },
					{ name: 'symbility', label: 'Symbility' },
					{ name: 'simsol', label: 'Simsol' },
					{ name: 'guidewire', label: 'Guidewire' },
					{ name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' },
					{ name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' },
				],
			}
		},
		computed: {
			//
		},
		methods: {
			submit() {
				this.appData.certifications.post('/api/user/certifications', false)
					.then(response => {
						this.$router.push({ path: '/complete' });
					}).catch(error => {
						this.btnState = false;
					});
			},
			processFile(files) {
				if (files.length > 0) {
					this.filename = files[0].name;
					this.appData.certifications.resume = files[0];
				}
			},
			setupView() {
				this.appData.text.title = "Industry Certifications";
				this.appData.text.subtitle = "Step Three - Tell us what you're certified to do";
				this.appData.progress = 3;
			}
		}
	}
</script>