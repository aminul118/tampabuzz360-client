import AboutFAQ from "@/components/About/AboutFAQ";
import AdvertisingDisclaimer from "@/components/About/AdvertisingDisclaimer";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";
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
