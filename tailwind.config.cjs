const config = {
	darkMode: 'class',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'))
	],

	theme: {
		extend: {}
	},

	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
