import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills as a developer',
  
  // Head configuration for better SEO and social sharing
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Your Name' }],
    ['meta', { name: 'keywords', content: 'developer, portfolio, web development, javascript, vue' }],
    ['meta', { property: 'og:title', content: 'Your Name - Portfolio' }],
    ['meta', { property: 'og:description', content: 'Personal portfolio showcasing my projects and skills' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  theme: defaultTheme({
    // Navigation
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' },
      { 
        text: 'Links', 
        children: [
          { text: 'GitHub', link: 'https://github.com/yourusername' },
          { text: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile' },
        ]
      }
    ],

    // Sidebar for better navigation
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          children: ['/projects/']
        }
      ]
    },

    // Repository info (update with your actual GitHub repo)
    repo: 'yourusername/my-portfolio',
    repoLabel: 'GitHub',
    
    // Edit links
    editLink: false, // Set to true if you want edit links
    
    // Footer
    lastUpdated: true,
    contributors: false,

    // Theme colors
    colorMode: 'auto', // auto, light, dark
    colorModeSwitch: true,
  }),

  bundler: viteBundler(),
  
  // Base URL for GitHub Pages deployment
  base: '/my-portfolio/', // Change this to your repository name
})
