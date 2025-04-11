/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Container from "@/components/ui/Container";
import getNewsById from "@/lib/getNewsById";
import generateSEO from "@/lib/seo/seo";
import generateJsonLd from "@/lib/seo/generateJsonLd";



export async function generateMetadata({ params }: any) {
  const { id } = params;
  const news = await getNewsById(id);
  const { mainHeading, author, category, contents, createdAt, updatedAt } =
    news.data;

  const rawDescription =
    contents?.reduce(
      (acc: string, content: any) => acc + " " + content.description,
      ""
    ) || "Read the latest news and insights from Tampa.";

  const description = rawDescription.slice(0, 160);

  return generateSEO({
    title: `${mainHeading} | Tampabuzz360`,
    description,
    author,
    type: "article",
    publishedAt: createdAt,
    updatedAt: updatedAt,
    keywords: `${mainHeading}, ${category}`,
    url: `https://tampabuzz360.com/tampa/${id}`,
    images: contents?.map((content: any) => content.image) || [],
  });
}

// ✅ Main News Details Page with types
const NewsDetailsPage = async ({ params }: any) => {
  const { id } = params;
  const news = await getNewsById(id);
  const { mainHeading, author, contents, createdAt, updatedAt } = news.data;

  const jsonLd = generateJsonLd({
    type: "NewsArticle",
    headline: mainHeading,
    contents,
    author,
    datePublished: createdAt,
    dateModified: updatedAt,
  });

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold">{mainHeading}</h1>
      <p className="text-xs text-red-500 mb-4">Author: {author}</p>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          {contents.map((content: any, i: number) => {
            const { image, title, description } = content;
            return (
              <div key={i} className="space-y-4 mt-10">
                {image && (
                  <Image
                    src={image}
                    alt={title || "News image"}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                {title && <h2 className="text-2xl font-semibold">{title}</h2>}
                <p>{description}</p>
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="col-span-4">
          {/* Related news, author info, etc. */}
        </div>
      </div>
    </Container>
  );
};

export default NewsDetailsPage;
