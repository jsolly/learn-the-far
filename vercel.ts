import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
	buildCommand: "npm run build",
	outputDirectory: "dist",
	trailingSlash: true,
	git: {
		deploymentEnabled: {
			main: true,
			"preview/**": true,
			"*": false,
			"*/*": false,
			"*/*/*": false,
			"*/*/*/*": false,
			"**": false,
		},
	},
	redirects: [
		{
			source: "/:path(.*)",
			has: [{ type: "host", value: "www.learnthefar.com" }],
			destination: "https://learnthefar.com/:path",
			permanent: true,
		},
	],
	headers: [
		{
			source: "/(.*)",
			headers: [
				{ key: "X-Frame-Options", value: "DENY" },
				{ key: "X-Content-Type-Options", value: "nosniff" },
			],
		},
		{
			source: "/release.json",
			headers: [
				{ key: "Cache-Control", value: "no-store, max-age=0" },
				{ key: "CDN-Cache-Control", value: "no-store" },
				{ key: "Vercel-CDN-Cache-Control", value: "no-store" },
			],
		},
	],
};
