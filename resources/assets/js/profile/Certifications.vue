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
	</div>
</template>

<script>
	export default {
		name: 'Certifications',
		mounted(){
			this.certifications = window.userData.certifications;
			this.softwareExperiences = window.userData.software_experiences;
		},
		data() {
			return {
				certifications: [],
				softwareExperiences: [],
			}
		}
	}
</script>