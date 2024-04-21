import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // https://ja.vitejs.dev/config/build-options.html#build-lib
      entry: resolve(__dirname, 'src/leaflet_vite.js'), // エントリポイント
      fileName: 'bundle', // 生成するファイルのファイル名を指定
      formats: ['es'], // 生成するモジュール形式を指定。デフォルト['es', 'umd'] (umdの場合、グローバル変数として公開する名前の設定(build.lib.name)が必要)
    },
  },
});
