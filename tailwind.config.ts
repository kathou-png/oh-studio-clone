import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				roboto: ["'Roboto'", 'sans-serif']
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				fadeIn: 'fade-in 2s ease-in-out 0.25s 1'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
