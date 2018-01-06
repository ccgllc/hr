<template>
	<div class="columns">
	  <div class="column is-half">
	  	<div class="field is-horizontal">
		  <div class="field-body">
		    <div class="field is-expanded">
		      <div class="field has-addons">
		       	<p class="control is-expanded">
		          <input 
		          	class="input" 
		          	type="number" 
		          	maxlength="2" min="0" max="99" 
		          	placeholder="0" 
		          	v-model="years"
		          	@input="add"
		          	number
	          	>
		        </p>
		        <p class="control">
		          <a class="button is-static">years</a>
		        </p>
		      </div>
		      <!-- <p class="help">Do not enter the first zero</p> -->
		    </div>
		  </div>
		</div>
		</div>
		<div class="column is-half">
			<div class="field is-horizontal">
				<div class="field-body">
			    	<div class="field is-expanded">
			      		<div class="field has-addons">
					        <p class="control is-expanded">
					          <input 
					          	class="input" 
					          	type="number" 
					          	maxlength="2" min="0" max="11" 
					          	placeholder="0" 
					          	v-model="months"
					          	@input="add"
					          	number
				          	>
					        </p>
					        <p class="control">
					          <a class="button is-primary is-static">months</a>
					        </p>
			       		</div>
			      <!-- <p class="help">Do not enter the first zero</p> -->
			    	</div>
			  	</div>
			</div>
		</div><!--end column -->
	</div><!--end columns -->
</template>
<script>
	export default {
		name: 'Experience',
		props: ['model', 'property'],
		data () {
			return {
				years: 0,
				months: 0,
				results: {
					total: 0,
					modelRef: this.model,
					propRef: this.property,
				},
			}
		},
		methods: {
			add() {
				this.results.total = +(this.years * 12) + +(this.months);
				return this.$emit('experience-updated', this.results);
			}
		}
	}
</script>