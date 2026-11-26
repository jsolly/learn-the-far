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
				{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
				{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
				// Start with quiet report-only directives. Keep Astro hydration and
				// Speed Insights outside script/connect restrictions until tested.
				{
					key: "Content-Security-Policy-Report-Only",
					value: "object-src 'none'; base-uri 'self'; form-action 'none'",
				},
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
