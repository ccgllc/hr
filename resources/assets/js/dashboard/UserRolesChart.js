import { Bar } from 'vue-chartjs';
export default {
    extends: Bar,
    mounted() {
        this.chartData.labels = window.dashboardData.userRolesChart.labels;
        this.chartData.datasets[0].data = window.dashboardData.userRolesChart.datasets[0].data;
        this.renderChart(this.chartData, this.options);
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: ['#439BD1'],
                        data: []
                    }
                ]
            },
            options: {
                title: { display: true, text: 'System Users By Role'}, 
                legend: {display: false},
                responsive: true, 
                maintainAspectRatio: false,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }],
                  xAxes: [ {
                    gridLines: {
                      display: false
                    },
                    categoryPercentage: 0.5,
                    barPercentage: 0.2
                  }]
                }
            } 
        }
    }
}