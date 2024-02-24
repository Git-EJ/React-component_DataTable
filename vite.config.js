import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/molecules/DataTable.jsx',
      name: 'DataTable',
      formats: ['es'],
      fileName: (format) => `react_datatable.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize dependencies that should not be included in your final bundle
      external: ['react', 'react-dom', 'sass', 'prop-types'],
      output: {
        name: 'DataTable',

        // Provides global names for external dependencies in UMD builds
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'sass': 'sass',
          'prop-types': 'prop-types',
        },
        exports: 'named',
      }
    }
  }
});
