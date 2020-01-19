import vue from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    butternut()
  ],
  output: {
    name: 'VueDarkMode',
    exports: 'named'
  }
}
