import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				taxi: '#FFCE2F',
				'dark-chocolate': '#2B1705',
				chocolate: '#541600',
			},
		},
	},
	plugins: [],
};
export default config;
