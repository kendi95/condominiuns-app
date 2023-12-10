import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
    './src/layouts/**/*.tsx',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'loading': 'spin 1s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin.cjs')
  ],
}
export default config
