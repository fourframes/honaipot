<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-indigo-600">Financial Dashboard</h1>
          </div>
          <div class="flex items-center">
            <span class="text-sm text-gray-500 mr-4">Last updated: {{ currentTime }}</span>
            <button @click="logout" 
              class="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out transform hover:scale-[1.02]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Stats Cards -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100">
          <div class="p-6">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">Annual Revenue</h3>
                <p class="mt-2 text-3xl font-bold text-indigo-600">$4.2M</p>
                <p class="text-sm text-gray-500 mt-1">+12.5% from last year</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100">
          <div class="p-6">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">Profit Margin</h3>
                <p class="mt-2 text-3xl font-bold text-green-600">28.6%</p>
                <p class="text-sm text-gray-500 mt-1">+3.2% from last quarter</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100">
          <div class="p-6">
            <div class="flex items-center">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900">Operating Costs</h3>
                <p class="mt-2 text-3xl font-bold text-yellow-600">$892K</p>
                <p class="text-sm text-gray-500 mt-1">-5.1% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart -->
      <div class="mt-8 bg-white shadow-lg rounded-xl border border-gray-100 p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Monthly Revenue</h2>
        <div class="h-[400px]">
          <LineChart />
        </div>
      </div>

      <!-- Downloads Section -->
      <div class="mt-8 bg-white shadow-lg rounded-xl border border-gray-100 p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Available Downloads</h2>
        <div class="space-y-4">
          <div v-for="(file, index) in files" :key="index" 
            class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out">
            <div>
              <span class="text-gray-900 font-medium">{{ file.name }}</span>
              <div class="flex space-x-4 mt-1 text-sm text-gray-500">
                <span>{{ file.size }}</span>
                <span>Updated {{ file.date }}</span>
                <span class="text-indigo-600">{{ file.type }}</span>
              </div>
            </div>
            <a :href="file.url" target="_blank" 
              class="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:scale-[1.02]">
              Download
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import LineChart from '../components/LineChart.vue'

const router = useRouter()
const authStore = useAuthStore()
const currentTime = ref(new Date().toLocaleString())

const files = [
  { 
    name: 'Financial Report 2024.pdf',
    url: 'https://canarytokens.org/generate',
    size: '2.8 MB',
    date: 'March 15, 2024',
    type: 'Quarterly Report'
  },
  {
    name: 'Revenue Projections 2024-2025.xlsx',
    url: 'https://canarytokens.org/generate',
    size: '1.2 MB',
    date: 'March 12, 2024',
    type: 'Financial Forecast'
  },
  {
    name: 'Board Meeting Minutes - March 2024.pdf',
    url: 'https://canarytokens.org/generate',
    size: '856 KB',
    date: 'March 10, 2024',
    type: 'Confidential'
  }
]

// Update time every minute
onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString()
  }, 60000)
})

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>