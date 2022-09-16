import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    image: {
        provider: "vercel",
        screens: {
            myImgS: 250,
            myImgL: 500,
            myImgL2x: 1000,
        }
    }
})
