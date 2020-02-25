import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    terser()
  ],
  output: {
    name: 'VueDarkMode',
    exports: 'named'
  }
}
