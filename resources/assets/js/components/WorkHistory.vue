<template>
	<form id="workHistory" method="post" action="/login" @submit.prevent="submit" @keydown="appData.workHistory.errors.clear($event.target.name)">
		<h2 class="subtitle has-text-primary"><strong>Desk Adjusting</strong></h2><hr>

		<div class="columns">
			
			<div class="column is-half">
				<div class="field">
					<label class="label">Years Of Desk Experience:</label>
					<experience property="workHistory" model="desk_experience" @experience-updated="updateTotal"></experience>
					<span class="help is-danger" v-if="appData.workHistory.errors.has('desk_experience')" v-text="appData.workHistory.errors.get('desk_experience')"></span>
				</div>
			</div>

		</div><br>
			
		<h2 class="subtitle has-text-primary"><strong>Residential Property</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Residential Experience</label>
					<experience property="workHistory" model="residential_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Residential Claims Worked</label>
					<claim-count property="workHistory" model="residential_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<div class="columns">
			<div class="column">
				<div class="field">
				  <input id="residentialCat" v-model="residentialCat" type="checkbox" name="residentialCat" class="switch is-rounded">
				  <label for="residentialCat">Have residential property catastrophe experience too?</label>
				</div>
			</div>
		</div><br>

		<div class="columns" v-if="residentialCat">
			<div class="column">
				<div class="field">
					<label class="label">Residential Catastrophe Experience</label>
					<experience property="workHistory" model="residential_cat_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Residential Catastrophe Claims</label>
					<claim-count property="workHistory" model="residential_cat_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
			<hr>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Commercial Property</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Commercial Experience</label>
					<experience property="workHistory" model="commercial_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">Commercial Claims Worked</label>
					<claim-count property="workHistory" model="commercial_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>

		</div><br>

		<div class="columns">
			<div class="column">
				<div class="field">
				  <input id="commercialCat" v-model="commercialCat" type="checkbox" name="commercialCat" class="switch is-rounded">
				  <label for="commercialCat">Have commercial property catastrophe experience too?</label>
				</div>
			</div>
		</div><br>

		<div class="columns" v-if="commercialCat">
			<div class="column">
				<div class="field">
					<label class="label">Commercial Catastrophe Experience</label>
					<experience property="workHistory" model="commercial_cat_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Commercial Catastrophe Claims</label>
					<claim-count property="workHistory" model="commercial_cat_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
			<hr>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Large Loss Adjusting (In Excess of $100,000)</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Large Loss Experience</label>
					<experience property="workHistory" model="large_loss_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">Large Loss Claims Worked</label>
					<claim-count property="workHistory" model="large_loss_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<div class="columns">
			<div class="column">
				<div class="field">
				  <input id="largeLossCat" v-model="largeLossCat" type="checkbox" name="largeLossCat" class="switch is-rounded">
				  <label for="largeLossCat">Have large loss catastrophe experience too?</label>
				</div>
			</div>
		</div><br>

		<div class="columns" v-if="largeLossCat">
			<div class="column">
				<div class="field">
					<label class="label">Large Loss Catastrophe Experience</label>
					<experience property="workHistory" model="large_loss_cat_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Large Loss Catastrophe Claims</label>
					<claim-count property="workHistory" model="large_loss_cat_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
			<hr>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Flood Adjusting</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Flood Experience</label>
					<experience property="workHistory" model="flood_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Flood Claims Worked</label>
					<claim-count property="workHistory" model="flood_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Auto Adjusting</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Auto Experience</label>
					<experience property="workHistory" model="auto_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">Auto Claims Worked</label>
					<claim-count property="workHistory" model="auto_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Inland Marine Adjusting</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Inland Marine Experience</label>
					<experience property="workHistory" model="inland_marine_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">Inland Marine Claims Worked</label>
					<claim-count property="workHistory" model="inland_marine_claims" @claim-count-updated="updateTotal"></claim-count>	
				</div>
			</div>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Casualty Adjusting</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Casualty Experience</label>
					<experience property="workHistory" model="casualty_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>

			<div class="column">
				<div class="field">
					<label class="label">Casualty Claims Worked</label>
					<claim-count property="workHistory" model="casualty_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<h2 class="subtitle has-text-primary"><strong>Earthquake Adjusting</strong></h2><hr>	

		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label">Years Of Earthquake Experience</label>
					<experience property="workHistory" model="earthquake_experience" @experience-updated="updateTotal"></experience>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label">Earthquake Claims Worked</label>
					<claim-count property="workHistory" model="earthquake_claims" @claim-count-updated="updateTotal"></claim-count>
				</div>
			</div>
		</div><br>

		<br />

		<div class="columns">
			<div class="column has-text-right">
				<button class="button is-primary" v-bind:class="{ 'is-loading': btnState }" @click="btnState = !btnState">
					<span>save &amp; continue</span>
					<span class="icon is-small">
			     	 	<i class="fa fa-chevron-circle-right"></i>
			   		</span>
				</button> 
			</div>
		</div>

	</form>
</template>

<script>
	import experience from './Experience.vue';
	import claimCount from './ClaimCount.vue';
	import appData from '../data/appData.js';
	// import states from '../data/states.js';
	export default {
		name: "WorkHistory",
		components: {
			experience,
			claimCount
		},
		mounted() {
			this.setupView()
		},
		data() {
			return {
				appData,
				btnState: false,
				commercialCat: false,
				residentialCat: false,
				largeLossCat: false,
			}
		},
		methods: {
			submit () {
				this.appData.workHistory.post('/api/user/work-history', false)
					.then((response) => {
						console.log(response.data)
						this.$router.push({ path: '/certifications' });
				});
			},
			updateTotal(data) {
				this.btnState ? this.btnState = false : null;
				return appData[data.propRef][data.modelRef] = data.total;
			},
			setupView() {
				this.appData.text.title = "Work History / Experience";
				this.appData.text.subtitle = "Step Two - Tell us what you've worked on.";
				this.appData.progress = 2;
			}
		}
	}
</script>