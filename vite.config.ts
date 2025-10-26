
  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          // UI components chunk
          if (id.includes('src/components/ui/')) {
            return 'ui-components';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500,
    target: 'esnext',
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@radix-ui/react-accordion': '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar': '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox': '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible': '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu': '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog': '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card': '@radix-ui/react-hover-card',
      '@radix-ui/react-label': '@radix-ui/react-label',
      '@radix-ui/react-menubar': '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover': '@radix-ui/react-popover',
      '@radix-ui/react-progress': '@radix-ui/react-progress',
      '@radix-ui/react-radio-group': '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area': '@radix-ui/react-scroll-area',
      '@radix-ui/react-select': '@radix-ui/react-select',
      '@radix-ui/react-separator': '@radix-ui/react-separator',
      '@radix-ui/react-slider': '@radix-ui/react-slider',
      '@radix-ui/react-slot': '@radix-ui/react-slot',
      '@radix-ui/react-switch': '@radix-ui/react-switch',
      '@radix-ui/react-tabs': '@radix-ui/react-tabs',
      '@radix-ui/react-toggle': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip': '@radix-ui/react-tooltip',
      'class-variance-authority': 'class-variance-authority',
      'cmdk': 'cmdk',
      'embla-carousel-react': 'embla-carousel-react',
      'input-otp': 'input-otp',
      'lucide-react': 'lucide-react',
      'next-themes': 'next-themes',
      'react-day-picker': 'react-day-picker',
      'react-hook-form': 'react-hook-form',
      'react-resizable-panels': 'react-resizable-panels',
      'recharts': 'recharts',
      'sonner': 'sonner',
      'vaul': 'vaul'
    }
  },
  server: {
    port: 3000,
    // Don't auto-open the browser when starting the dev server
    open: false
  }
});