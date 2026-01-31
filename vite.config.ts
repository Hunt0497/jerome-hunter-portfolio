import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jerome-hunter-portfolio/",
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.jpeg", "**/*.webp"],
});