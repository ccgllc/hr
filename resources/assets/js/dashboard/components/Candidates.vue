<template>
	<div class="column">
		<div class="card">
			<header class="card-header is-dark">
			    <p class="card-header-title">
			      <span class="tag is-secondary">{{ candidateCount }}</span> Candidates
			    </p>
		  	</header>
		  	<div class="card-content">
			    <div class="content">
			      <div class="card is-stacked" v-for="candidate in candidates">
			    		<div class="card-content">
			    			<div class="content">
		    					<span @click="removeCandidate(candidate)" class="is-pulled-right is-tooltip-warning tooltip is-tooltip-left" data-tooltip="Remove from candidates"><a class="delete is-small"></a></span>
			    				<h3><a :href="'/profile/' + candidate.id">{{ candidate.name }}</a></h3>
			    				<!-- <p><strong>10 years 3 months</strong> total experience, <strong>4,300</strong> Total Claims</p> -->
			    			</div>
			    		</div>
			    		<footer class="card-footer">
			    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> {{ candidate.created_at }}</span>
						   	<a class="card-footer-item">Hire</a>
			    		</footer>
			    	</div>
		    	</div>
		    	 <a class="button">All Candidates</a>
		    </div><!-- end card content -->
		</div><!--end Card -->	
	</div><!-- end second Column -->
</template>

<script>
	import dashboardData from '../data/dashboardData.js';
	export default {
		name: 'Candidates',
		mounted() {
			this.candidateCount = window.dashboardData.candidateCount;
			this.candidates = window.dashboardData.candidates;
		},
		data(){
			return dashboardData;
		},
		methods: {
			removeCandidate(user){
				window.axios.patch('/api/user/' + user.id + '/status/', {status: 'applicant'})
							.then(response => {
								let idx = this.candidates.indexOf(user);
								this.candidates.splice(idx, 1);
								this.applicants.unshift(response.data);
							})
			}
		}
	}
</script>