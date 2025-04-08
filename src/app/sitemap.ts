import { moreFromUs } from "@/lib/constants/footerMenu";
import navMenu from "@/lib/constants/navMenu";
import getAllIds from "@/lib/getAllIds";
import { MetadataRoute } from "next";

interface IMenu {
  title: string;
  url: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tampabuzz360.com";

  const getAllMongodbId = await getAllIds();
  const mongoIds = getAllMongodbId.data;

  const generateSitemapEntries = (menu: IMenu[]) =>
    menu.map((item) => ({
      url: `${baseUrl}${item.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const dynamicNewsIds = mongoIds.map((id: string) => ({
    url: `${baseUrl}/tampa/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...generateSitemapEntries(navMenu), 
    ...generateSitemapEntries(moreFromUs),
    ...dynamicNewsIds,
  ];
}
