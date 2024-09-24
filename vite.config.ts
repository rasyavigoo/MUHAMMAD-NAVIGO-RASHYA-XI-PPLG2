import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MUHAMMAD-NAVIGO-RASHYA-XI-PPLG2",
  server: {
    port: 3000,
  }
})
