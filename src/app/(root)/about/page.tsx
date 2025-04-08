import AboutFAQ from "@/components/about/AboutFAQ";
import AdvertisingDisclaimer from "@/components/about/AdvertisingDisclaimer";
import Team from "@/components/about/Team";
import Vision from "@/components/about/Vision";
import Container from "@/components/ui/Container";

const AboutPage = () => {
  return (
    <Container>
      <div className="space-y-20">
        <Team />
        <Vision />
        <AboutFAQ />
        <AdvertisingDisclaimer />
      </div>
    </Container>
  );
};

export default AboutPage;
