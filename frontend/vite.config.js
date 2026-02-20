import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    preview: {
        allowedHosts: ["frontend-71r5.onrender.com"],
    },
});
