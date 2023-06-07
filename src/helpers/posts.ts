import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image.js";
import type { CollectionEntry } from "astro:content";
import siteInfo from "~/data/site-info";

export const sortPosts = (posts: CollectionEntry<"blog">[]) =>
	posts
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.publishDate).getTime() / 1000) -
				Math.floor(new Date(a.data.publishDate).getTime() / 1000),
		);

export const getPagination = (postsCount: number) => {
	const pagesCount = postsCount / Number(siteInfo.postPerPage);

	let pages: number[] = [];
	for (let i = 1; i <= Math.ceil(pagesCount); i++) {
		pages = [...pages, i];
	}

	return pages;
};

const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/blog/_images/**/*.{png,jpg,jpeg,webp}",
);

export const resolveCoverImage = async (entry: CollectionEntry<"blog">) => {
	if (!entry.data.coverImage) {
		return undefined;
	}

	if (!(entry.data.coverImage in allImages)) {
		throw new Error(
			`[blog] Cover image for "${entry.data.title}" not found! Provided: "${entry.data.coverImage}", is there a typo?`,
		);
	}

	const { default: image } = await allImages[entry.data.coverImage]();

	return image;
};

export const resolveSocialImage = async (entry: CollectionEntry<"blog">) => {
	if (!entry.data.socialImage) {
		return undefined;
	}

	if (!(entry.data.socialImage in allImages)) {
		throw new Error(
			`[blog] Social image for "${entry.data.title}" not found! Provided: "${entry.data.socialImage}", is there a typo?`,
		);
	}

	const { default: image } = await allImages[entry.data.socialImage]();

	return image;
};
