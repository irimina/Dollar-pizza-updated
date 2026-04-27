import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000, // Matches your original project port
        open: true,
    },
    build: {
        outDir: 'build', // Matches CRA's output folder name
    },
});