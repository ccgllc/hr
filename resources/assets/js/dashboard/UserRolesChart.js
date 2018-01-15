import { Bar } from 'vue-chartjs';
export default {
    extends: Bar,
    mounted() {
        this.chartData.labels = window.chartData.labels;
        this.chartData.datasets[0].data = window.chartData.datasets.data;
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
                maintainAspectRatio: false
            } 
        }
    }
}