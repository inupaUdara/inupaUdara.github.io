import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://inupaudara.github.io/inupa-udara.github.io";

    return {
        rules: {
            userAgent: "*",
            allow: ["/"],
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}