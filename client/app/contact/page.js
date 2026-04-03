'use client';

import ContactFAQ from "../components/ContactFAQ";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/contactHero";
import Footer from "../components/Footer";
import ServiceMap from "../components/ServiceMap";

export default function Contact() {
    return (
        <>
         <ContactHero />
         <ContactForm />
         <ServiceMap />
         <ContactFAQ />
         <Footer />
        </>
    )
}