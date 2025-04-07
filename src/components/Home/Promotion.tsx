import Image from "next/image";
import React from "react";
import Container from "../ui/Container";

const Promotion = () => {
  return (
    <Container>
      <Image
        src="/assets/cover.webp"
        alt="demo"
        width={1920}
        height={200}
        className="py-4"
      />
    </Container>
  );
};

export default Promotion;
