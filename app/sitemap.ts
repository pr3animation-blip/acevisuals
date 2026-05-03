import type { MetadataRoute } from "next"
import { WORK_IMAGES } from "@/lib/work-images"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://acevisuals.io"
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/work/tie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  const workImageEntries: MetadataRoute.Sitemap = WORK_IMAGES.map((img) => ({
    url: `${base}/work/image/${img.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticEntries, ...workImageEntries]
}
