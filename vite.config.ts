import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Configura un alias para la carpeta de "src" o cualquier otra ruta que uses
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true, // Permite el uso de `describe`, `it`, etc. sin importar
    environment: 'jsdom', // Configura un entorno DOM para pruebas de componentes
    setupFiles: './src/setup.ts', // Archivo de configuración para el entorno de prueba
    css: true, // Habilita el procesamiento de CSS en las pruebas si es necesario
    exclude: [...configDefaults.exclude], // Opcional, para excluir ciertas rutas
  },
})
