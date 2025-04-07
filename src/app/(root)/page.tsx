import BrekingNews from "@/components/Home/BrekingNews";
import FeaturedStories from "@/components/Home/FeaturedStories";
import LetestStories from "@/components/Home/LetestStories";
import Promotion from "@/components/Home/Promotion";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <BrekingNews />
      <FeaturedStories />
      <Promotion />
      <LetestStories />
    </div>
  );
};

export default HomePage;
