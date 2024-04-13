// vite.config.ts
import { resolve } from "path";
import { loadEnv } from "file:///D:/webspace-demo/vue3ts/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/webspace-demo/vue3ts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import legacy from "file:///D:/webspace-demo/vue3ts/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import Components from "file:///D:/webspace-demo/vue3ts/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/webspace-demo/vue3ts/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/webspace-demo/vue3ts/node_modules/unplugin-auto-import/dist/vite.js";
import viteStylelint from "file:///D:/webspace-demo/vue3ts/node_modules/vite-plugin-stylelint/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\webspace-demo\\vue3ts";
var CWD = process.cwd();
var vite_config_default = ({ command, mode }) => {
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);
  console.log(command, "command");
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__vite_injected_original_dirname, "./src")
        }
      ]
    },
    server: {
      port: 8888
      // proxy: {
      //   '/api': {
      //     // 免费的在线REST API
      //     target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
    build: {
      minify: "terser",
      target: "es2015",
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4e3,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: Object.is(VITE_DROP_CONSOLE, "true")
        }
      }
    },
    optimizeDeps: {
      include: ["vant", "@vant/touch-emulator"],
      exclude: ["vue-demi"]
    },
    plugins: [
      vue(),
      legacy({
        targets: ["defaults", "not IE 11"]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
        dts: "src/types/auto-imports.d.ts",
        resolvers: [VantResolver()]
      }),
      viteStylelint({
        fix: true,
        // 启用自动修复功能
        exclude: [
          "/node_modules/",
          "/dist/"
        ]
      })
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJzcGFjZS1kZW1vXFxcXHZ1ZTN0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2Vic3BhY2UtZGVtb1xcXFx2dWUzdHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dlYnNwYWNlLWRlbW8vdnVlM3RzL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBcdTVGMjBcdTZDRkRcdTk2RThcbiAqIEBEYXRlOiAyMDI0LTAzLTI5IDEwOjQwOjM0XG4gKiBATGFzdEVkaXRvcnM6IFx1NUYyMFx1NkNGRFx1OTZFOFxuICogQExhc3RFZGl0VGltZTogMjAyNC0wNC0wMyAxNDoyMTowNFxuICogQEZpbGVQYXRoOiBcXHZ1ZTN0c1xcdml0ZS5jb25maWcudHNcbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFVzZXJDb25maWcsIENvbmZpZ0VudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHZpdGVTdHlsZWxpbnQgZnJvbSAndml0ZS1wbHVnaW4tc3R5bGVsaW50JztcblxuY29uc3QgQ1dEID0gcHJvY2Vzcy5jd2QoKTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kLCBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICAvLyBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcbiAgY29uc3QgeyBWSVRFX0JBU0VfVVJMLCBWSVRFX0RST1BfQ09OU09MRSB9ID0gbG9hZEVudihtb2RlLCBDV0QpO1xuICBjb25zb2xlLmxvZyhjb21tYW5kLCAnY29tbWFuZCcpO1xuICAvLyBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJztcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBWSVRFX0JBU0VfVVJMLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAnQCcsXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogODg4OCxcbiAgICAgIC8vIHByb3h5OiB7XG4gICAgICAvLyAgICcvYXBpJzoge1xuICAgICAgLy8gICAgIC8vIFx1NTE0RFx1OEQzOVx1NzY4NFx1NTcyOFx1N0VCRlJFU1QgQVBJXG4gICAgICAvLyAgICAgdGFyZ2V0OiAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nLFxuICAgICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgICAgdGFyZ2V0OiBcImVzMjAxNVwiLFxuICAgICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAgIC8vIFx1NkQ4OFx1OTY2NFx1NjI1M1x1NTMwNVx1NTkyN1x1NUMwRlx1OEQ4NVx1OEZDNzUwMGtiXHU4QjY2XHU1NDRBXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDQwMDAsXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAga2VlcF9pbmZpbml0eTogdHJ1ZSxcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IE9iamVjdC5pcyhWSVRFX0RST1BfQ09OU09MRSwgJ3RydWUnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFsndmFudCcsICdAdmFudC90b3VjaC1lbXVsYXRvciddLFxuICAgICAgZXhjbHVkZTogWyd2dWUtZGVtaSddLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBsZWdhY3koe1xuICAgICAgICB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddLFxuICAgICAgfSksXG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICAgICAgfSksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdAdnVldXNlL2NvcmUnLCAncGluaWEnXSxcbiAgICAgICAgZHRzOiAnc3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICAgICAgfSksXG4gICAgICB2aXRlU3R5bGVsaW50KHtcbiAgICAgICAgZml4OiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTgxRUFcdTUyQThcdTRGRUVcdTU5MERcdTUyOUZcdTgwRkRcbiAgICAgICAgZXhjbHVkZTogW1xuICAgICAgICAgICcvbm9kZV9tb2R1bGVzLycsXG4gICAgICAgICAgJy9kaXN0LydcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBVUEsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBakIxQixJQUFNLG1DQUFtQztBQW1CekMsSUFBTSxNQUFNLFFBQVEsSUFBSTtBQUV4QixJQUFPLHNCQUFRLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBNkI7QUFFM0QsUUFBTSxFQUFFLGVBQWUsa0JBQWtCLElBQUksUUFBUSxNQUFNLEdBQUc7QUFDOUQsVUFBUSxJQUFJLFNBQVMsU0FBUztBQUU5QixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUN6QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU1I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQTtBQUFBLE1BRVgsdUJBQXVCO0FBQUEsTUFDdkIsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsZUFBZTtBQUFBLFVBQ2YsY0FBYyxPQUFPLEdBQUcsbUJBQW1CLE1BQU07QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsUUFBUSxzQkFBc0I7QUFBQSxNQUN4QyxTQUFTLENBQUMsVUFBVTtBQUFBLElBQ3RCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsWUFBWSxXQUFXO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLE1BQzVCLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWMsZ0JBQWdCLE9BQU87QUFBQSxRQUN0RCxLQUFLO0FBQUEsUUFDTCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsTUFDNUIsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ1osS0FBSztBQUFBO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
