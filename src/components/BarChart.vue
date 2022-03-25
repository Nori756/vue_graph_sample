<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
     this.axios.get('http://127.0.0.1:8000/barchart/')
              .then(response => 
                    this.renderChart(
                      {labels: response.data.labels,
                       datasets: [{label: response.data.datasets[0].label,
                                   borderWidth:1,
                                   backgroundColor: "#121554",
                                   borderColor: "#121554",
                                   data: response.data.datasets[0].data},
                                  {label: response.data.datasets[1].label,
                                   borderWidth:1,
                                   backgroundColor: "#1d3681",
                                   borderColor: "#1d3681",
                                   data: response.data.datasets[1].data},
                                  {label: response.data.datasets[2].label,
                                   borderWidth:1,
                                   backgroundColor: "#2e70a7",
                                   borderColor: "#2e70a7",
                                   data: response.data.datasets[2].data},
                                  {label: response.data.datasets[3].label,
                                   borderWidth:1,
                                   backgroundColor: "#4eadc7",
                                   borderColor: "#4eadc7",
                                   data: response.data.datasets[3].data},
                                  {label: response.data.datasets[4].label,
                                   borderWidth:1,
                                   backgroundColor: "#a7d8bf",
                                   borderColor: "#a7d8bf",
                                   data: response.data.datasets[4].data}
                                   ]},
                                  {responsive: true,
                                   maintainAspectRatio: false,
                                   title: {display: true,
                                           text: "Bar graph"},
                                   scales: {
                                   xAxes: [{stacked: true, //積み上げ棒グラフにする設定
                                            categoryPercentage:0.4 //棒グラフの太さ
                                            }],
                                   yAxes: [{stacked: true //積み上げ棒グラフにする設定 
                                   }]
                                   },
                                  }
                                    )
              
                    )
              .catch(error => console.log(error))
            }
};
</script>
