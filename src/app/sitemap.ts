import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

const BASE_URL = "https://espressive.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

		const posts = allPosts.map((post) => ({
			url: `${BASE_URL}${post.url}`,
			lastModified: new Date(post.updatedAt).toISOString().split("T")[0],
			priority: 0.7,
		}));
	
		return [
			{
				url: BASE_URL,
				lastModified: new Date().toISOString().split("T")[0],
				priority: 1,
			},
			...posts,
		];
	}