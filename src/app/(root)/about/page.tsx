import AboutFAQ from "@/components/About/AboutFAQ";
import AdvertisingDisclaimer from "@/components/About/AdvertisingDisclaimer";
import Vision from "@/components/About/Vision";
import Container from "@/components/ui/Container";
import React from "react";
import Team from "../team/page";

const AboutPage = () => {
  return (
    <Container>
      <div className="space-y-8">
        <Team />
        <Vision />
        <AboutFAQ />
        <AdvertisingDisclaimer />
      </div>
    </Container>
  );
};

export default AboutPage;
