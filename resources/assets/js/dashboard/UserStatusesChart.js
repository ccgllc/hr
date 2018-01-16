import { Doughnut } from 'vue-chartjs';
export default {
    extends: Doughnut,
    mounted() {
        this.chartData.datasets[0].data.push(window.dashboardData.applicantCount);
        // this.chartData.datasets[0].data.push(window.chartData.totalUsers);
        this.chartData.datasets[0].data.push(window.dashboardData.activeCount);
        this.chartData.datasets[0].data.push(window.dashboardData.candidateCount);
        this.chartData.datasets[0].data.push(window.dashboardData.newHireCount);
        this.chartData.datasets[0].data.push(window.dashboardData.noHireCount);
        this.renderChart(this.chartData, this.options);
        let chart = this.$data._chart;
        this.$refs.canvas.onclick = function(evt) {
            var metric = chart.getElementsAtEvent(evt);
            if (metric[0]) {
                var chartData = metric[0]['_chart'].config.data;
                var idx = metric[0]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[0].data[idx];

                var url = "/users/" + label;
                // console.log(url);
                // alert(url);
                window.location = url
            }
        }
    },
    data() {
        return {
            chartData: {
                labels: ['applicant', 'active', 'candidate', 'new-Hire', 'no-hire'],
                datasets: [
                    {
                        backgroundColor: ['#439BD1', '#30A987', '#343b4d', '#FEDD62', '#FC3C63'],
                        data: []
                    }
                ]
            },
            options: {
                title: { display: true, text: 'Total Users'},
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                    },
                },
                responsive: true, 
                maintainAspectRatio: false
            } 
        }
    }
}