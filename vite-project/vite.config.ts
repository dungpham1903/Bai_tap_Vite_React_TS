import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Cho phép truy cập từ các địa chỉ khác
  //   port: 5173,      // Cổng mặc định (hoặc đổi cổng khác nếu muốn)
  // },
})
