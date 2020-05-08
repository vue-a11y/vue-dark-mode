import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import chokidar from 'chokidar'
import { eslint } from 'rollup-plugin-eslint'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    resolve(),
    eslint({
      include: './src/**'
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    serve({
      verbose: true,
      contentBase: 'demo',
      historyApiFallback: true
    }),
    livereload({
      watch: 'demo'
    })
  ],
  output: [
    {
      name: 'VueDarkMode',
      file: 'demo/vue-dark-mode.js',
      format: 'umd',
      exports: 'named'
    }
  ]
}
