import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
			}
		],
		sitemap: "https://espressive.fr/sitemap.xml",
		host: "https://espressive.fr",
	}
}