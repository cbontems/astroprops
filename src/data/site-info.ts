export type SocialLink = {
	platform: string;
	href: string;
	me?: string;
	text: string;
	icon: string;
	footerOnly?: boolean;
};

export type SiteInfo = {
	name: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	twitterHandle?: string;
	socialLinks: SocialLink[];
	fathomSiteId?: string;
	fathom404GoalId?: string;
	brandColor?: string;
};

const siteInfo: SiteInfo = {
	name: "AstroProps",
	title: "Beautiful Astro blog theme styled with Open Props",
	description:
		"AstroProps is an accessible, performant and responsive Astro blog theme.",
	image: {
		src: "/og/social.jpg",
		alt: "Beautiful Astro blog theme styled with Open Props",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/cbontems/astroprops",
			me: "https://github.com/cbontems/",
			text: "Go to AstroProps' GitHub repo",
			icon: "mdi:github",
		},
	],
	twitterHandle: "cbontems",
	fathomSiteId: "MXLWXIIW",
	fathom404GoalId: "HCBWLVGO",
	brandColor: "#ff4500",
};

export default siteInfo;
