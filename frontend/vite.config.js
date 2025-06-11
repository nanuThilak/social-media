import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:4000" : "";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
      },
    },
  },
});
