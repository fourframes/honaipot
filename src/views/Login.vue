<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome Back</h2>
        <p class="mt-2 text-center text-sm text-gray-600">Please sign in to your account</p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input v-model="username" id="username" name="username" type="text" required
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your username">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" id="password" name="password" type="password" required
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your password">
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]">
            Sign in
          </button>
        </div>
      </form>

      <!-- Error Modal -->
      <div v-if="authStore.loginError" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div class="relative p-6 border w-96 shadow-2xl rounded-2xl bg-white">
          <div class="mt-3 text-center">
            <h3 class="text-lg font-semibold text-gray-900">Authentication Failed</h3>
            <div class="mt-4 px-7">
              <p class="text-sm text-gray-600">The username or password you entered is incorrect. Please try again.</p>
            </div>
            <div class="mt-6">
              <button @click="authStore.loginError = false"
                class="px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-150 ease-in-out">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  if (authStore.login(username.value, password.value)) {
    router.push('/dashboard')
  }
}
</script>