import BrekingNews from "@/components/Home/BrekingNews";
import FeaturedStories from "@/components/Home/FeaturedStories";
import LetestStories from "@/components/Home/LetestStories";
import Promotion from "@/components/Home/Promotion";



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
