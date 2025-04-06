import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import NewsCard from "./NewsCard";
import Image from "next/image";
import NewsCard2 from "./Card2";

const FeaturedStories = () => {
  return (
    <Container>
      <Title title="Featured Stories" />
      <div className="grid grid-cols-4 gap-6">
        <NewsCard src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard src="/assets/features/2.webp" alt="demo 1" />
        <NewsCard src="/assets/features/3.jpg" alt="demo 1" />
        <NewsCard src="/assets/features/1.jpg" alt="demo 1" />
      </div>

      <Image
        src="/assets/cover.webp"
        alt="demo"
        width={1920}
        height={200}
        className="py-4"
      />
      <div className="mt-6">
        <Title title="Letest Stories" />
      </div>
      <div className="grid grid-cols-5 gap-6">
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/2.webp" alt="demo 1" />
        <NewsCard2 src="/assets/features/3.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/2.webp" alt="demo 1" />
        <NewsCard2 src="/assets/features/3.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/2.webp" alt="demo 1" />
        <NewsCard2 src="/assets/features/3.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/2.webp" alt="demo 1" />
        <NewsCard2 src="/assets/features/3.jpg" alt="demo 1" />
        <NewsCard2 src="/assets/features/1.jpg" alt="demo 1" />
      </div>
    </Container>
  );
};

export default FeaturedStories;
