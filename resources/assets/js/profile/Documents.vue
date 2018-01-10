<template>
	<div id="documents">
		<h1 class="profile-title">My Documents</h1><br>

		<div class="documents" v-for="doc in documents">
			<span class="icon"><i class="fa fa-file-o"></i></span>
			<!-- {{ doc.name }} --> 
			<a :href="'/users/' + userId + '/documents/' + doc.id">{{ name }}'s {{ doc.type }}</a>
		</div>
		

		<br>
		<button class="button is-info" @click="creatingNewFile = !creatingNewFile">Upload File</button>


		<div class="modal" v-bind:class="{ 'is-active': creatingNewFile }">
			<div class="modal-background"></div>
			<div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">Add a new file</p>
			      <button class="delete" aria-label="close" @click="creatingNewFile = false"></button>
			    </header>
			    <section class="modal-card-body">
			      <form @submit.prevent="submit" @keydown="newFile.errors.clear($event.target.name)">
					<div class="columns is-multiline">
					
						<div class="column is-11">
							<div class="field">
								<label class="label">Type:</label>
								<div class="select">
								  <select v-model="newFile.type">
								    <option value="">select</option>
								    <option v-for="type in types" :value="type">{{ type }}</option>
								  </select>
								</div>
								  <span class="help is-danger" v-if="newFile.errors.has('type')" v-text="newFile.errors.get('type')"></span>
							</div>
						</div>

						<div class="column">
							<div class="field">
								<!-- <label class="label">&nbsp;</label> -->
								<div class="file has-name is-primary">
								  <label class="file-label">
								    <input class="file-input" type="file" name="resume" @change="processFile($event.target.files)">
								    <span class="file-cta">
								      <span class="file-icon">
								        <i class="fa fa-cloud-upload"></i>
								      </span>
								      <span class="file-label">
								        Upload a file…
								      </span>
								    </span>
								    <span class="file-name" v-text="filename" v-if="filename != ''"></span>
								  </label>
								</div>
							</div>
						</div>

						</div><!-- end columns -->
					</form>
			    </section>
			    <footer class="modal-card-foot">
			      <button class="button is-primary" @click="submit">Save</button>
			      <button class="button" @click="creatingNewFile = false">Cancel</button>
			    </footer>
			  </div>
			  <!-- <button class="modal-close is-large" aria-label="close"></button> -->
			</div>

	</div>

</template>

<script>
	import FormWithFiles from '../structur/src/form/FormWithFiles';
	export default {
		name: 'Documents',
		mounted() {
			this.userId = window.userData.id;
			this.name = window.userData.name;
			this.documents = window.userData.documents;
			this.newFile.api_token = window.axios.defaults.headers.common['Authorization'];
			this.newFile.user_id = this.userId;
		},
		data() {
			return {
				name: '',
				userId: '',
				documents: [],
				filename: '',
				types: [
					'resume',
				],
				creatingNewFile: false,
				newFile: new FormWithFiles({
					user_id: '',
					api_token: '',
					type: '',
					file: {}
				}),
			}
		},
		methods: {
			submit() {
				this.newFile.post('/api/user/'+ this.userId + '/documents/').then(response => {
					console.log(response);
					this.documents.push(response);
					this.creatingNewFile = false;
				}).catch(error => {
					console.error(error);
				})
			},
			processFile(files) {
				if (files.length > 0) {
					this.filename = files[0].name;
					this.newFile.file = files[0];
				}
			},
		}
	}
</script>