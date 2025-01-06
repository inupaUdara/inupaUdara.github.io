import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://inupaudara.github.io/inupa-udara.github.io";
    return [{
        url: baseUrl,
        lastModified: new Date(),
    },];
}