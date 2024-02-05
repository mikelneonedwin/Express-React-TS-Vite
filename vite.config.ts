import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import DevApiServer from './server/dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        rewrite: (path:string) => {
          return DevApiServer(path.replace('api', ''));
        }
      }
    }
  }
})
