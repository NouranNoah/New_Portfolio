import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ اسم الريبو لازم يكون بالظبط
export default defineConfig({
  plugins: [react()],
  base: '/New_Portfolio/',
})
