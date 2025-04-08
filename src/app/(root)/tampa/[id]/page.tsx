/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container";
import getNewsById from "@/lib/getNewsById";
import generateSEO from "@/lib/seo";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = { params: { id: string } };

// !Seo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = await getNewsById(id);
  const { mainHeading, author, category, contents } = news.data;

  // Efficiently concatenate all content descriptions
  const description =
    contents?.reduce(
      (acc: string, content: any) => acc + " " + content.description,
      ""
    ) || "Read the latest news and insights from Tampa.";

  return generateSEO({
    title: `Tampa | ${mainHeading}`,
    description,
    author,
    keywords: `${mainHeading}, Tampa, news, Florida, ${category}`,
    url: `https://www.tampabuzz360.com/tampa/${id}`,
    images: contents?.map((content: any) => content.image) || [],
  });
}

// ! Main Page

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const news = await getNewsById(id);
  const { mainHeading, author, contents } = news.data;

  return (
    <Container>
      <h1 className="text-3xl font-bold">{mainHeading}</h1>
      <p className="text-xs text-red-500">Author: {author}</p>
      <div className="grid grid-cols-12 gap-6">
        {/* Left side main part of the news */}
        <div className="col-span-8">
          {contents.map((content: any, i: number) => {
            const { image, title, description } = content;
            return (
              <div key={i} className="space-y-4 mt-10">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                )}
                {title && <h1 className="text-2xl font-semibold">{title}</h1>}
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        {/* Right Side */}
        <div className="col-span-4">{/* Sidebar or related news */}</div>
      </div>
    </Container>
  );
};

export default NewsDetailsPage;
