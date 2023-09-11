// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    "/view/*": { ssr: false },
    "/": { ssr: true },
  },
});
