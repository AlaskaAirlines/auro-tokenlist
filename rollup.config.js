import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

const getSharedPlugins = (isLegacy) => [
  resolve({
    // in case of multiple lit-element versions (e.g. importing another auro component)
    dedupe: ['lit-element', 'lit-html']
  }),
  commonjs(),
  minifyHTML(),
  terser()
];

const modernConfig = {
  input: {
    ['auro-tokenavatar__bundled']: './src/auro-tokenavatar.js',
    ['auro-tokenlist__bundled']: './src/auro-tokenlist.js',
    ['auro-tokendisplay__bundled']: './src/auro-tokendisplay.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    ...getSharedPlugins(false),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

export default [modernConfig];
