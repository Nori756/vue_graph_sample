<template>
  <div id="app">
    <br>
    <br>
    <div>
    <BarChart/>
    </div>
    <br>
    <br>
    <LineChart/>
    <br>
    <br>
    <PieChart/>
    <br>
    <br>
    
  </div>
</template>

<script>

import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import PieChart from "../components/PieChart.vue";



export default {
  name: "App",
  components: {
   
    BarChart,
    PieChart,
    LineChart,
 

   
  
  },

  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>