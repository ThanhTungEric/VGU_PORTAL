import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '/var/www/html/', // Chỉ định thư mục build trực tiếp vào Apache
    emptyOutDir: true, // Xóa các file cũ trước khi build lại
  },
})