// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_shared.scss" as *;',
        },
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 6547,
  },

  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: "2025-04-11",
});
