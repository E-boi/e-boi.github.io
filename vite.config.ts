import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
	assetsInclude: ['./assets/profile.png'],
	plugins: [preact()],
	server: {
		fs: {
			strict: true,
		},
	},
	build: {
		minify: 'terser',
	},
});
