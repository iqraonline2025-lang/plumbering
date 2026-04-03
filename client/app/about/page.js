'use client';

import AboutHero from "../components/AboutHero";
import Certifications from "../components/Certifications";
import CompanyStory from "../components/CompanyStory";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import Values from "../components/Values";

export default function Page() {
    return (
        <>
          <AboutHero />
          <CompanyStory />
          <TeamSection />
          <Certifications />
          <Values />
          <Footer />
        </>
    )
}