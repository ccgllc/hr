<template>
	  	<div class="field is-horizontal">
		  <div class="field-body">
		    <div class="field is-expanded">
		      <div class="field has-addons">
		       	<p class="control is-expanded">
		          <input 
		          	class="input" 
		          	type="number" 
		          	maxlength="6" min="0" max="40000"
		          	placeholder="0" 
		          	v-model="results.total"
		          	@input="add"
		          	number
	          	>
		        </p>
		        <p class="control">
		          <a class="button is-static">claims</a>
		        </p>
		      </div>
		      <!-- <p class="help">Do not enter the first zero</p> -->
		    </div>
		  </div>
		</div>
</template>
<script>
	export default {
		name: 'ClaimCount',
		props: ['model', 'property'],
		data () {
			return {
				results: {
					total: 0,
					modelRef: this.model,
					propRef: this.property,
				},
			}
		},
		methods: {
			add() {
				this.results.total = +this.results.total;
				return this.$emit('claim-count-updated', this.results);
			}
		}	
	}
</script>