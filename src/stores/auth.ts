import { defineStore } from 'pinia'

const VALID_USERNAME = 'admin'
const VALID_PASSWORD = 'password123'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    loginError: false
  }),
  
  actions: {
    login(username: string, password: string) {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        this.isAuthenticated = true
        this.loginError = false
        return true
      }
      this.loginError = true
      return false
    },
    
    logout() {
      this.isAuthenticated = false
    }
  }
})