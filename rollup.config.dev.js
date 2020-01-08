import vue from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import buble from 'rollup-plugin-buble'
import eslint from 'rollup-plugin-eslint'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
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
      file: 'demo/vue-skip-to.js',
      format: 'umd'
    }
  ]
}
