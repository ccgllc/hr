<template>
	<div class="columns" style="margin: 3rem 0 3rem 0;">
		<div class="column">
			<div class="card" @click="view('?page=1')" style="cursor: pointer">
				<div class="card-content has-text-centered">
					<span class="count is-total">{{ data.total }}</span><br>
					<span class="type">Total</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card" @click="view('/applicant')" style="cursor: pointer">
				<div class="card-content has-text-centered">
					<span class="count is-applicants">{{ data.applicants }}</span><br>
					<span class="type">Applicants</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card" @click="view('/active')" style="cursor: pointer">
				<div class="card-content has-text-centered">
					<span class="count is-active">{{ data.active }}</span><br>
					<span class="type">Active</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card" @click="view('/in-active')" style="cursor: pointer">
				<div class="card-content has-text-centered">
					<span class="count is-inactive">{{ data.inActive }}</span><br>
					<span class="type">In-Active</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card" @click="view('/no-hire')" style="cursor: pointer">
				<div class="card-content has-text-centered">
					<span class="count is-no-hires">{{ data.noHire }}</span><br>
					<span class="type">No Hire</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dashboardData from '../data/dashboardData.js';
	export default {
		name: 'UserCounts',
		mounted() {
			this.data.applicants = window.dashboardData.applicantCount;
			this.data.active = window.dashboardData.activeCount;
			this.data.inActive = window.dashboardData.inActiveCount;
			this.data.noHire = window.dashboardData.noHireCount;
			this.data.total = +window.dashboardData.candidateCount + +window.dashboardData.newHireCount + +this.data.applicants + +this.data.active + +this.data.inActive + +this.data.noHire;
		},
		data() {
			return {
				data: dashboardData.counts
			}
		},
		methods: {
			view(status) {
				return window.location = '/users' + status;
			}
		}
	}
</script>