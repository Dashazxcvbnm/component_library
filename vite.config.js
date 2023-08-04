import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
          @import "@/assets/variables.scss";
          @import "@/assets/mixins.scss";
          @import "@/assets/fonts/oswald/oswald.scss";
          @import "@/assets/fonts/roboto/roboto.scss";
        `,
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@GUI': fileURLToPath(new URL('./src/components/GUI', import.meta.url))
    }
  }
})
