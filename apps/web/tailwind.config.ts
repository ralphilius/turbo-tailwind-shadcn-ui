import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config";

const config: Omit<Config, "content"> = {
  ...sharedConfig,
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx,mdx}",
  ],
};

export default config;