'use client';

import Footer from "../components/Footer";
import ServiceProblems from "../components/ServiceProblem";
import ServicesHero from "../components/ServicesHero";
import ServiceSolutions from "../components/ServiceSolutions";

export default function Services() {
    return (
        <>
         <ServicesHero />
         <ServiceProblems />
         <ServiceSolutions />
         <Footer />
        </>
    )
}