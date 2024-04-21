import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '960px',
        lg: '1280px',
      },
      colors: {
        primary: '#65B741',
      },
      fontFamily: {
        primary: ['var(--roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
