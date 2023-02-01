/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./components/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			'xsm': {'max': '640px'},
			// => @media (min-width: 400px and max-width: 640px) { ... }
	  
			'sm': {'min': '640px', 'max': '767px'},
			// => @media (min-width: 640px and max-width: 767px) { ... }
	  
			'md': {'min': '768px', 'max': '1023px'},
			// => @media (min-width: 768px and max-width: 1023px) { ... }
	  
			'lg': {'min': '1024px', 'max': '1279px'},
			// => @media (min-width: 1024px and max-width: 1279px) { ... }
	  
			'xl': {'min': '1280px', 'max': '1535px'},
			// => @media (min-width: 1280px and max-width: 1535px) { ... }
	  
			'2xl': {'min': '1536px'},
		},
		extend: {
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out 1',
			},
			keyframes: {
				wiggle: {
					'0%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(-22deg)' },
					'40%': { transform: 'rotate(22deg)' },
					'60%': { transform: 'rotate(-22deg)' },
					'80%': { transform: 'rotate(22deg)' },
					'100%': { transform: 'rotate(0deg)' },
				}
			},
			styles: {
			  '.link:hover ~ .sibling-element': {
					transform: 'translateY(6px)',
					opacity: 1,
				},
			},
			fontFamily: {
				fjalla: "'Fjalla One', sans-serif",
			},
			colors: {
				'pribg': '#18191A',
				'secbg': '#242526',
				'terbg': '#3A3B3C',
				'pritxt': '#E4E6E8',
				'sectxt': '#B0B3B8',
				'tertxt': '#CCDBDC'
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
