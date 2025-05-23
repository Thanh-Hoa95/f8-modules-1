import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig(({ mode }) => {
    const isProd = mode === "production";
    return {
        base: isProd ? "/f8-modules-1/" : "/",
        root: "src",
        publicDir: "../public",

        build: {
            outDir: "../dist",
            emptyOutDir: true,

            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, "src/index.html"),
                    about: path.resolve(__dirname, "src/about.html"),
                    practice: path.resolve(__dirname, "src/practice.html"),
                    blog: path.resolve(__dirname, "src/blog.html"),
                },
            },
        },

         server: {
            open: true,
            port: 3001,
        },
        
        plugins: [ViteEjsPlugin()],
    };
});
