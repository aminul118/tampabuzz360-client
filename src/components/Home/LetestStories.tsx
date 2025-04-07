/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import Title from "../ui/Title";

const LetestStories = async () => {
  const res = await fetch("https://server.tampabuzz360.com/api/v1/news");
  const news = await res.json();
  console.log(news);

  // Date Format
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container>
      <Title title="Letest Stories" />

      <div className="grid grid-cols-5 gap-6">
        {news?.data?.map((singleNews: any) => {
          const { _id, mainHeading, contents, updatedAt } = singleNews;
          const imageUrl = contents?.[0]?.image;
          console.log(singleNews);
          const formatted = formatDate(updatedAt);

          return (
            <Link href={`/news/${_id}`} key={_id}>
              <Card className="w-full max-w-md overflow-hidden">
                <div className="relative w-full h-40">
                  <Image
                    src={imageUrl}
                    alt={mainHeading}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent>
                  <h2 className="text-lg font-bold">{mainHeading}</h2>
                  <p className="text-xs text-red-500 font-semibold">
                    {formatted}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default LetestStories;
