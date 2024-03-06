import { fileURLToPath, URL } from 'node:url'
import path from 'node:path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n","pinia"],
      dts: "src/auto-imports.js",
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]",
    }),
    Pages(),
    Layouts(),


  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


