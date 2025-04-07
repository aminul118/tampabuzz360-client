import React from "react";
import { ChildrenType } from "../layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-284px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
