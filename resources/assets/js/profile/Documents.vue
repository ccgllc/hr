<template>
	<div id="documents">
		<h1 class="profile-title">My Documents</h1><br>

		<file 
			v-for="doc in documents" 
			:key="doc.id"
			:user-id="userId"
			:file="doc"
			v-on:file-deleted="remove"
		>	
		</file>
		

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
					
						<div class="column is-3">
							<div class="field">
								<label class="label">Type:</label>
								<div class="select is-fullwidth">
								  <select v-model="newFile.type">
								    <option value="">select</option>
								    <option v-for="type in types" :value="type">{{ type }}</option>
								  </select>
								</div>
								  <span class="help is-danger" v-if="newFile.errors.has('type')" v-text="newFile.errors.get('type')"></span>
							</div>
						</div>

						<div class="column is-9">
							<div class="field">
								<label class="label">Filename:</label>
								<input type="text" v-model="newFile.filename" class="input" placeholder="My File">
								<span class="help is-danger" v-if="newFile.errors.has('filename')" v-text="newFile.errors.get('filename')"></span>
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
	import file from './components/File.vue';
	export default {
		name: 'Documents',
		components: {
			file
		},
		mounted() {
			this.userId = window.userData.id;
			this.name = window.userData.name;
			this.documents = window.userData.documents;
		},
		data() {
			return {
				name: '',
				userId: '',
				toggleDelete: false,
				documents: [],
				types: [
					'resume',
				],
				filename: '',
				creatingNewFile: false,
				newFile: new FormWithFiles({
					type: '',
					filename: '',
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
			remove(file) {
				console.log('deleting');
				let index = this.documents.indexOf(file);
				return this.documents.splice(index, 1);
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