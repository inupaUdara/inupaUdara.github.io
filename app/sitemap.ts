import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://inupaudara.me";
    return [{
        url: baseUrl,
        lastModified: new Date(),
    },];
}