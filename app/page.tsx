import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafariDesk - Ticketing system with AI done right",
  description: "Ticketing system with AI done right",
  openGraph: {
    title: 'SafariDesk - Ticketing system with AI done right',
    description: 'Ticketing system with AI done right',
    url: 'https://safaridesk.io/',
    siteName: 'SafariDesk',
    images: [
      {
        url: 'https://res.cloudinary.com/dpxpjd5fb/image/upload/v1739888916/safari-desk-logo_wki4y9.png',
        width: 500,
        height: 500,
      },
    ],
  }
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video />
      <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
