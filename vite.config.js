import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Binds to your local network IP
    port: 5173, // Optional: Default port is 5173
  },
});
