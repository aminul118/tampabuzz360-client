import React from "react";
import { ChildrenType } from "../layout";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
