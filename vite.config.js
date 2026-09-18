import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, loadEnv  } from "vite";

// https://vite.dev/config/
export default defineConfig((mode) => {
	const env = loadEnv(mode, process.cwd(), "")
	return{
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	server: {
		proxy: {
			'/steam_api': {
				target: 'https://api.steampowered.com/',
				changeOrigin: true,
				rewrite: (path) => {
					const API_KEY = env.STEAM_API_KEY;
					path = path.replace(/^\/steam_api/, '')
					if (path.includes('?')) {
						path = path.concat(`&key=${API_KEY}`);
					} else {
						path = path.concat(`?key=${API_KEY}`);
					}
					console.log(path);
					return path;
				},
				cors: false,
			},
		},
	},
}});
