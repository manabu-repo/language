// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Triple L'
export const SITE_DESCRIPTION
  = 'Welcome to my language learning log! I write about beginner language learners.'
export const TWITTER_HANDLE = '@akashisai022'
export const MY_NAME = 'Akashi'

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE)
export const SITE_URL = BASE_URL.origin
