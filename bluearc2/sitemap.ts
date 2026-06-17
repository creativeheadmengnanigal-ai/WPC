import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wpc-flax.vercel.app",
      lastModified: new Date(),
     
    },
  ];
}