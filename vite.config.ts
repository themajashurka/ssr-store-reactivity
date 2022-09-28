import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
		  $cmp: path.resolve('./src/cmp'),
		  $lib: path.resolve('./src/lib'),
		  $src: path.resolve('./src')
		}
	  }
};

export default config;
