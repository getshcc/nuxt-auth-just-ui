// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  router: {
    options: {
      linkActiveClass: "font-bold",
      linkExactActiveClass: "font-bold",
    },
  },
});
