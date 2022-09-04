import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '200.html'
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/tech-blog-client-svelte-kit'
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
