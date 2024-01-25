// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({

  modules: [
    '@vite-pwa/nuxt', '@ant-design-vue/nuxt'
  ],
  css:['@/assets/css/app.css'],
  
})

