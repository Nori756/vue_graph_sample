<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.axios.get('http://127.0.0.1:8000/linechart/')
              .then(response => 

          
                   
              this.renderChart(
              {
                labels:  response.data.labels
                ,
                datasets: [
              {
                label:  response.data.datasets[0].label,
                data:   response.data.datasets[0].data,
                backgroundColor: "transparent",
                borderColor: "rgba(1, 116, 188, 0.50)",
                pointBackgroundColor: "rgba(171, 71, 188, 1)"
              }
                          ]
              },
              {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                display: true,
                text: "Line Chart"
                        }
              }
                             )
                )
              .catch(error => console.log(error))
            }
};
</script>