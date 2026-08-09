import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carbongurukulam.com";

  const routes = [
    "",
    "/about",
    "/courses",
    "/courses/neet-repeaters",
    "/courses/jee-repeaters",
    "/courses/integrated-batch-11-12",
    "/admissions",
    "/contact",
    "/gallery",
    "/news",
    "/faculty",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/courses") ? 0.9 : 0.8,
  }));
}
