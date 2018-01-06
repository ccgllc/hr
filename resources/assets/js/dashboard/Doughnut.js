import { Doughnut } from 'vue-chartjs';
export default {
    extends: Doughnut,
    mounted() {
        this.chartData.labels = ['Applicants', 'Users'];
        this.chartData.datasets[0].data.push(window.chartData.applicantCount);
        this.chartData.datasets[0].data.push(window.chartData.totalUsers);
        this.renderChart(this.chartData, this.options);
        let chart = this.$data._chart;
        // console.log(this.$refs.canvas);
        this.$refs.canvas.onclick = function(evt) {
            // console.log(evt);
            var metric = chart.getElementsAtEvent(evt);
            if (metric[0]) {
                var chartData = metric[0]['_chart'].config.data;
                var idx = metric[0]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[0].data[idx];

                var url = "http://example.com/?label=" + label + "&value=" + value;
                console.log(url);
                alert(url);
            }
        }
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: ['#439BD1', '#343b4d'],
                        data: []
                    }
                ]
            },
            options: {
                title: { display: true, text: 'Total Users'},
                legend: {display: true},
                responsive: true, 
                maintainAspectRatio: false
            } 
        }
    }
}