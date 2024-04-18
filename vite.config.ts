// https://vitejs.dev/config/
import { defineConfig, createLogger } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

const logger = createLogger();

export default defineConfig({
  plugins: [
    vue(),
    /*导入组件库，自动导入，但编程式组件不能自动导入*/
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver()
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    /*实现给组件定义name，在keep-alive里面需要使用*/
    VueSetupExtend(),
  ],
  //全局引入
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "@/style/globalVar.scss";',
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      ignoreTryCatch: false,
    },
  },
  server: {
    port: 12306,
    open: true,
    proxy: {},
  },
});