<template>
	<div class="columns is-gapless">
		<div class="column is-1">
			
		</div>
		<div class="column is-10">
			<h1 class="title hr-title">HR Dashboard</h1>

			<dashboard-navigation></dashboard-navigation>
			
			<div class="columns">

				<div class="column is-4">
					<user-statuses-chart></user-statuses-chart>
				</div>

				<div class="column is-8">
					<user-roles-chart></user-roles-chart>
				</div>
				
			</div>
			<!-- <hr> -->
			
			<user-counts></user-counts>

			<div class="columns">	
				
				<new-hires></new-hires>

				<candidates></candidates>

				<applicants></applicants>

			</div><!-- end bottom columns -->
		</div><!-- end main column is-10 -->
	</div><!--end columns -->
</template>

<script>
	import dashboardData from '../data/dashboardData.js';
	import dashboardNavigation from './DashboardNavigation.vue';
	import userRolesChart from '../UserRolesChart.js';
	import userStatusesChart from '../UserStatusesChart.js';
	import userCounts from './UserCounts.vue';
	import newHires from './NewHires.vue';
	import candidates from './Candidates.vue';
	import applicants from './Applicants.vue';
	export default {
		name: 'Home',
		components: {
			dashboardNavigation,
			userRolesChart,
			userStatusesChart,
			userCounts,
			newHires,
			candidates,
			applicants
		},
		mounted() {
			//
		},
		data() {
			return dashboardData;
		},
		methods: {
			//
		}
	}
</script>