import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'

// Componentsz
import App from './App.vue' // Import your root component
import router from './router' // Import your router configuration

//google
import vue3GoogleLogin from 'vue3-google-login'

const pinia = createPinia() // Create Pinia store instance
const vuetify = createVuetify({ // Create Vuetify instance
  components // Register all Vuetify components
})

const app = createApp(App) // Create Vue app
app.use(pinia) // Install Pinia store
app.use(router) // Install router
app.use(vuetify) // Install Vuetify
app.use(vue3GoogleLogin, {  clientId: '274879969464-mfdt0j3t9qjf50cjh5dlhgf2skf5rslu.apps.googleusercontent.com'}) //google id client

app.mount('#app') // Mount the app to the DOM element with ID "app"