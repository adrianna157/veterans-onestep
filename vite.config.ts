import {defineConfig, preprocessCSS} from 'vite'
import react from "@vitejs/plugin-react"
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  build: {
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [],
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [
      react,
    RubyPlugin(),
  ],
})
