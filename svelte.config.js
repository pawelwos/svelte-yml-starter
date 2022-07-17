import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		}
	},
};

export default config;