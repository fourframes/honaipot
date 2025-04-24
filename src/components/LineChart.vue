<template>
  <div class="h-full">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [
        325000, // January (post-holiday decline)
        428000, // February (recovery)
        380000, // March
        492000, // April (spring growth)
        465000, // May
        555000, // June (mid-year peak)
        542000, // July
        568000, // August (summer peak)
        489000, // September
        512000, // October
        678000, // November (holiday season)
        892000  // December (year-end peak)
      ],
      fill: false,
      borderColor: 'rgb(79, 70, 229)',
      tension: 0.4,
      pointBackgroundColor: 'rgb(79, 70, 229)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        callback: function(value: any) {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 3
          }).format(value);
        }
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
}
</script>