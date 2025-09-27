import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Ibrahim Qadr - Software Engineer',
  description: 'Backend Developer and Software Engineer specializing in Laravel, PHP, and API development',

  // Head configuration for better SEO and social sharing
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Ibrahim Qadr' }],
    ['meta', { name: 'keywords', content: 'software engineer, backend developer, laravel, php, api development, mysql, javascript' }],
    ['meta', { property: 'og:title', content: 'Ibrahim Qadr - Software Engineer' }],
    ['meta', { property: 'og:description', content: 'Backend Developer and Software Engineer specializing in Laravel, PHP, and API development' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  theme: defaultTheme({
    // Clean navigation - Home only
    navbar: [
      { text: 'Home', link: '/' },
      { 
        text: 'Links', 
        children: [
          { text: 'GitHub Profile', link: 'https://github.com/ibrahimsoftware1' },
          { text: 'Email Me', link: 'mailto:ibrahimqadr23@gmail.com' },
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
      ],
      '/skills/': [
        {
          text: 'Skills',
          children: ['/skills/']
        }
      ]
    },

    // Repository info (update with your actual GitHub repo)
    repo: 'ibrahimqadr/my-portfolio',
    repoLabel: 'GitHub',
    
    // Edit links
    editLink: false,
    
    // Footer
    lastUpdated: true,
    contributors: false,

    // Theme colors
    colorMode: 'auto',
    colorModeSwitch: true,
  }),

  bundler: viteBundler(),
  
  // Base URL for GitHub Pages deployment
  base: '/my-portfolio/', // Change this to your repository name
});
