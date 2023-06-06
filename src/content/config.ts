import { defineCollection, z } from "astro:content";

export const collections = {
	authors: defineCollection({
		schema: z.object({
			image: z.string().optional(),
			name: z.string(),
			title: z.string().optional(),
			github: z.string().optional(),
			twitter: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			authors: z.array(z.string()),
			socialImage: z.string().optional(),
			coverImage: z.string().optional(),
			coverImageAlt: z.string().optional(),
			lang: z.enum(["en"]).default("en"),
			draft: z.boolean().optional(),
		}),
	}),
};
