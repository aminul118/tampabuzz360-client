/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import getNewsById from "@/lib/getNewsById";

// ✅ Main News Details Page with types
const NewsDetailsPage = async ({ params }: any) => {
  const { id } = params;
  const news = await getNewsById(id);
  const { mainHeading, author, contents } = news.data;

  return (
    <Container>
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
