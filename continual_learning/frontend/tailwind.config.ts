import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'sidebar': '#202123',
      'contentmain': '#343541',
      'active': '#3c3d4b',
      'borderlight':'#4D4D4F',
      'borderdark':'#2F2F31',
      'black': '#000000',
      'gray-800': '#202123',
      'gray-900': '#18191A',
      'dark-blue': '#0D1117',
      
    }
  },
  plugins: [],
}
export default config
