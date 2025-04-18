import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@achieve4sure/ui-mui': path.resolve(__dirname, '../../packages/ui-mui/dist'),
    },
  },
});
