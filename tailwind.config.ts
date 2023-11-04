import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      animation: {
        'loading': 'spin 1s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
export default config
