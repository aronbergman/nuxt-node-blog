<template>
  <h1>Аналитика по постам</h1>
</template>

<script>
  import {Bar} from 'vue-chartjs'


export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  extends: Bar,
  mounted() {
    const data = {
      labels: [],
      datasets: [{
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: []
      }]
    }
    this.renderChart()
  }
}
</script>
