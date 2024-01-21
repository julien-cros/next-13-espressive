import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

module.exports = {
	darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/button.js",
		'./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
		darkMode: false,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
	plugins: [
    require('@tailwindcss/typography'),
		nextui(),
	],
}

