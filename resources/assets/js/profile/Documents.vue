<template>
	<div id="documents">
		<h1 class="profile-title">My Documents</h1><br>

		<div class="document" v-for="doc in documents">
			<span class="icon"><i class="fa fa-file-o"></i></span>
			<!-- {{ doc.name }} --> 
			<a :href="'/users/' + userId + '/documents/' + doc.id">{{ name }}'s {{ doc.type }}</a>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Documents',
		mounted() {
			this.userId = window.userData.id;
			this.name = window.userData.name;
			this.documents = window.userData.documents;
		},
		data() {
			return {
				name: '',
				userId: '',
				documents: []
			}
		}
	}
</script>