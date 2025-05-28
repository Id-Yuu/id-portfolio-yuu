import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      webp: {
        quality: 80,
        autoFilter: true,
        resize: {
          width: 200,
          height: 200,
          fit: 'inside',
          position: 'center',
        },
        lossless: false,
      },
      variants: [
        {
          dest: 'thumbnail',
          resize: {
            width: 200,
            height: 200,
            fit: 'inside'
          }
        }
      ],
      svgo: {
        multipass: true
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // Split chunks for better caching
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
          'styles': [
            './src/assets/styles/style.scss', 
            './src/assets/styles/responsive.scss',
            './src/components/Footer/style.scss',
            './src/components/Header/style.scss',
            './src/components/Navbar/style.scss',
            './src/layouts/style.scss',
            './src/pages/404/style.scss',
            './src/pages/About/style.scss',
            './src/pages/Certificate/style.scss',
            './src/pages/Home/style.scss',
            './src/pages/Portfolio/style.scss',
            './src/pages/Resume/style.scss',
            './src/pages/Skill/style.scss'
          ],
        },
        // Organize output files with WebP conversion
        assetFileNames: (assetInfo) => {
          const extensions = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extensions)) {
            // Add size suffix for thumbnails
            const size = assetInfo.source?.width <= 200 ? '-thumb' : '';
            return `assets/images/[name]${size}-[hash].webp`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    // Build optimization
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    sourcemap: false,
    target: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari14']
  },
  // Development server settings
  server: {
    host: true,
    open: true,
    compress: true
  }
});