// .frontend/vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sass from 'vite-plugin-sass';
import handlebars from 'vite-plugin-handlebars';
export default defineConfig({
    root: './',
    base: '/',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
    },
    plugins: [
        svelte({
            /* plugin options */
        }),
        sass(),
        handlebars(),
    ],
});
