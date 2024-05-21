// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  routeRules: {
    "/*": { cors: true },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
  ssr: true,
});
