import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://astroprops.netlify.app/",
	integrations: [robotsTxt(), sitemap(), image()],
});
