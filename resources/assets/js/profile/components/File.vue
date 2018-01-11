<template>
	<div
		class="file"
		@mouseover="showDelete = true"
		@mouseleave="showDelete = false"
	>
		<span class="icon"><i class="fa fa-file-o"></i></span>
		<a :href="'/users/' + userId + '/documents/' + file.id">{{ file.name }}'s {{ file.type }}</a>&nbsp;
		<span v-show="showDelete">
			<span @click="remove(file)" class="delete is-small" style="margin-top: 5px;"></span>
		</span>
		<br>
	</div>
</template>

<script>
	export default {
		name: 'File',
		props: ['userId', 'file'],
		data() {
			return {
				showDelete: false,
			}
		},
		methods: {
			remove(file){
				if (confirm("Are you sure? This cannot be undone.")) {
					window.axios.delete('/api/user/documents/' + file.id)
						.then(response => {
							console.log(response);
							this.$emit('file-deleted', file);
						}).catch(error => {
							console.error(error);
					})
				}
			}
		}
	}
</script>