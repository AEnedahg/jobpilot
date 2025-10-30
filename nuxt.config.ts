// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()    
    ]
  },
  css: ['@/assets/css/main.css'],
  srcDir: './',
  alias: {
    '@': './',
    '~': './',
    'assets': './assets',
    'public': './public'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo-job-pilot.png' }
      ],
      title: 'Jobpilot',
      meta: [
        {
          name: 'keywords',
          content: 'jobpilot, jobs, career, hiring, recruitment, technology, design, development, remote work, job search, employment, HR, productivity'
        },
        {
          name: 'description',
          content: 'Jobpilot — your ultimate platform for job opportunities, career insights, and professional growth. Discover top openings, expert advice, and resources to advance your career journey.'
        },
        {
          name: 'author',
          content: 'Anthony Enedah'
        }
      ]
    }
  }
})
