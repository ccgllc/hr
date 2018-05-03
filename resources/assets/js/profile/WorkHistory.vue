<template>
	<div id="workHistory">
		<h1 class="profile-title">My Work History</h1> 
		<br>
		<div class="columns is-multiline">
			<div class="column is-3" v-for="(value, key) in workHistory" v-if="value != 0">
				<div class="card">
					<header class="card-header" :class="{'is-dark': key.includes('claims'), 'is-info': key.includes('experience')}"> 
						<p class="card-header-title is-pulled-left">
							{{ key | capitalize }}
						</p>
						 <a href="#" class="card-header-icon" aria-label="more options">
					      <span class="icon">
					        <i class="fa fa-edit" @click="edit(value, key)" style="color: #fff;" aria-hidden="true"></i>
					      </span>
					    </a>
					</header>
					<div class="card-content">
						<div class="content">
							<p>{{ value }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
			<a class="button is-primary" @click="showForm = !showForm">Add Work History</a>
			<div class="modal" :class="{ 'is-active': showForm }">
			  <div class="modal-background"></div>
			  <div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">Add Work History</p>
			      <button class="delete" aria-label="close" @click="cancel"></button>
			    </header>
			    <section class="modal-card-body">
			    	<div class="columns">
			    		<div class="column is-6">
			    			<label for="types" class="label">Type:</label>
			    			<div class="select">
				    			<select name="types" id="types" v-model="newWorkHistory.type" :disabled="this.editing">
					      			<option value="">Select</option>
					      			<option v-for="type in types" :value="type">{{ type | format | capitalize}}</option>
				      			</select>
			    			</div>
						</div>

			    		<div class="column is-6">
			    			<div class="field" v-if="newWorkHistory.type.includes('claims')">
			    				<label for="value" class="label">{{ newWorkHistory.type | format | capitalize }}</label>
			    				<input 
			    					class="input"
			    					type="number" 		
						          	maxlength="6" 
						          	min="0" 
						          	max="65535"
						          	placeholder="0" 
						          	v-model="newWorkHistory.value"
						          	number
			    				>
			    			</div>

			    			<div class="field" v-if="newWorkHistory.type.includes('experience')">
			    				<label for="value" class="label">Years</label>
			    				<input 
						          	class="input" 
						          	type="number" 
						          	maxlength="2" min="0" max="99" 
						          	placeholder="0"
						          	v-model="years"
						          	@input="calculateMonths"
						          	number
					          	>
					          </div>
				          	<div class="field" v-if="newWorkHistory.type.includes('experience')">
				          		<label for="value" class="label">Months</label>
					          	<input 
						          	class="input" 
						          	type="number" 
						          	maxlength="2" min="0" max="11" 
						          	placeholder="0"
						          	v-model="months"
						          	@input="calculateMonths"
						          	number
					          	>
			    			</div>
			    		</div>
			    	</div>
			    </section>
			    <footer class="modal-card-foot">
			      <button class="button is-success" @click="save">Save</button>
			      <button class="button" @click="cancel">Cancel</button>
			    </footer>
			  </div>
			</div> <!-- end modal -->
	</div>
</template>

<script> 
	export default {
		name: 'WorkHistory',
		mounted() {
			console.log(window.userData.work_history);
			this.workHistory = this.setup(window.userData.work_history);
		},
		data() {
			return {
				workHistory: {},
				showForm: false,
				editing: false,
				years: 0,
				months: 0,
				newWorkHistory: {
					type: '',
					value: 0,
				},
				types: [
					'desk_experience',
					'residential_experience',
					'residential_claims',
					'residential_cat_experience',
					'residential_cat_claims',
					'commercial_experience',
					'commercial_claims',
					'commercial_cat_experience',
					'commercial_cat_claims',
					'large_loss_experience',
					'large_loss_claims',
					'large_loss_cat_experience',
					'large_loss_cat_claims',
					'auto_experience',
					'auto_claims',
					'inland_marine_experience',
					'inland_marine_claims',
					'casualty_experience',
					'casualty_claims',
					'environmental_experience',
					'environmental_claims',
					'flood_experience',
					'flood_claims',
					'earthquake_experience',
					'earthquake_claims',
				]
			}
		},
		methods: {
			save() {
				let endpoint = '/api/user/' + window.userData.id + '/work-history';
				window.axios.post(endpoint, this.newWorkHistory).then(response => {
					console.log(response);
					let type = this.newWorkHistory.type.replace(/(_)/g, " ");
					if (this.newWorkHistory.type.includes('experience'))
					{
						let value = this.newWorkHistory.value;
						this.workHistory[type] = this.getYears(value) + ' years ' + this.getMonths(value) + "  months";
					} else {
						this.workHistory[type] = this.newWorkHistory.value;
					}
					return this.cancel();
				}).catch(error => {
					console.log(error);
				});
			},
			setup(data) {
				let workHistory = {};
				for (let prop in data)
				{
					let newProp = prop.replace(/(_)/g, " ");
					workHistory[newProp] = data[prop];
					if (newProp == 'id' || newProp == 'created at' || newProp ==  'updated at' || newProp == 'user id') {
						delete workHistory[newProp];
					}
					if(newProp.includes('experience') && workHistory[newProp] != 0){
						let value = workHistory[newProp];
						workHistory[newProp] = this.getYears(value) + ' years ' + this.getMonths(value) + "  months";
					}
				}
				console.log(workHistory);
				return workHistory;
			},
			getMonths(value) {
				return +(Math.floor(+value%12));
			},
			getYears(value) {
				return +(Math.floor(+value/12));
			},
			calculateMonths() {
				if (this.years < 0) {
					this.years = 0;
				}
				if (this.months > 11) {
					return this.months = 11;
				};
				return this.newWorkHistory.value = +((this.years * 12) + +(this.months));
			},
			edit(value, key) {
				this.editing = true;
				this.showForm = true;
				if (key.includes('experience')){
					let v = value.match(/([0-9])+(?!=\s){1,2}/g);
					let sum = v.reduce((a, b) => (parseInt(a) * 12) + parseInt(b) );
					console.log(v);
					console.log(sum);
					this.months = this.getMonths(+sum);
					this.years = this.getYears(+sum);
					this.newWorkHistory.value = this.years + this.months;
				}
				else {
					this.newWorkHistory.value = value;
				}
				return this.newWorkHistory.type = key.replace(/(\s)/g, "_");
			},
			cancel() {
				this.newWorkHistory.type = '';
				this.newWorkHistory.value = 0;
				this.months = 0;
				this.years = 0;
				this.editing = false;
				return this.showForm = !this.showForm;
			}
		},
		filters: {
			capitalize(value) {
			    if (!value) return ''
			    value = value.toString()
			    return value.charAt(0).toUpperCase() + value.slice(1)
			},
			format(key) {
				return key.replace(/(_)/g, " ");
			}
		}
	}
</script>