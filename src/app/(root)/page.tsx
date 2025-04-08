import BrekingNews from "@/components/home/BrekingNews";
import FeaturedStories from "@/components/home/FeaturedStories";
import LetestStories from "@/components/home/LetestStories";
import Promotion from "@/components/home/Promotion";

const HomePage = () => {
  return (
    <>
      <BrekingNews />
      <FeaturedStories />
      <Promotion />
      <LetestStories />
    </>
  );
};

export default HomePage;
