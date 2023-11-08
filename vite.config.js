import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            publicDirectory: "public_html",
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "resources/src/assets/img",
                    dest: "../assets",
                },
            ],
            publicDirectory: "public_html",
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
        }
    },
});
