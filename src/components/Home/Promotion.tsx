import Image from "next/image";
import Container from "../ui/Container";

const Promotion = () => {
  return (
    <Container>
      <Image src="/images/cover.webp" alt="demo" width={1920} height={200} />
    </Container>
  );
};

export default Promotion;
