import counts from './counts.js';
export default {
	userRolesChart: {},
	userStatusesChart: {
	  chartData: {
            labels: ['Applicants', 'Active', 'Candidates', 'New Hires', 'No Hire'],
            datasets: [
                {
                    backgroundColor: ['#439BD1', '#30A987', '#343b4d', '#FEDD62', '#FC3C63'],
                    data: []
                }
            ]
        },
	},
	counts,
	newHires: [],
	candidates: [],
	applicants: [],
}