import { next } from "@vercel/edge";

/**
 * Request-time release id for static Vercel sites.
 * Vercel applies committed vercel.json headers as-is (build-time stamps do not stick),
 * so Edge Middleware reads the deployment's VERCEL_GIT_COMMIT_SHA instead.
 */
export default function middleware() {
	const response = next();
	const sha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || "";
	const releaseId = sha ? sha.slice(0, 12) : "dev";
	response.headers.set("x-release-id", releaseId);
	return response;
}
