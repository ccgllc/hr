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
	</div>
</template>

<script>
	export default {
		name: 'Certifications',
		mounted(){
			this.certifications = window.userData.certifications;
		},
		data() {
			return {
				certifications: [],
			}
		}
	}
</script>