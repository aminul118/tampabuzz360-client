import AboutFAQ from "@/components/About/AboutFAQ";
import AdvertisingDisclaimer from "@/components/About/AdvertisingDisclaimer";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";
import Container from "@/components/ui/Container";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="space-y-20">
      <Team />
      <Vision />
      <AboutFAQ />
      <AdvertisingDisclaimer />
    </Container>
  );
};

export default AboutPage;
