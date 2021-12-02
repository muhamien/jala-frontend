<template>
  <div>
    <span>Lampung</span>
    <p>
      <span class="fw-bold text-sm">Rp.49.000 </span>
      <span class="badge badge-danger">-Rp.12.000</span>
    </p>
    <p>10 Okt - 17 Okt</p>
    <canvas class="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'MyChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementsByClassName('chart');
    new Chart(ctx, this.planetChartData);
  }
}
const planetChartData = {
    type: "line",
    data: {
      labels: ['','',''],
      datasets: [
        {
          data: [400,230,363],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 4
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            display:false,
          }
        ],
        xAxes: [
          {
            display:false,
          }
        ],
      }
    }
  };
  
</script>

<style scoped>
.card{
  padding: 0px;
  font-size: 12px;
}
.chart-card{
  padding: 12px;
}
.card-header{
  padding: 15px;
} 

</style>