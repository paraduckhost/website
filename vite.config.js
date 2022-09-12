// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [svelte()],
	server: {
		fs: {
			allow: ['./static']
		}
	}
});

export default config;
