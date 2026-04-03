'use client';

import AboutPreview from "./components/AboutPreview";
import CtaSection from "./components/CTASection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceAreas from "./components/ServiceAreas";
import ServiceMap from "./components/ServiceMap";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
      <AboutPreview />
      <ServiceAreas />
      <ServiceMap />
      <Footer />
    </>
  )
}