import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafariDesk",
  description: "A simple ticketing system that clicks with everyone, elevating your customer experience",
  openGraph: {
    title: 'SafariDesk',
    description: 'A simple ticketing system that clicks with everyone, elevating your customer experience',
    url: 'https://safaridesk.io/',
    siteName: 'SafariDesk',
    images: [
      {
        url: 'https://res.cloudinary.com/dpxpjd5fb/image/upload/v1739961248/SafariDesk_main_logo_py6jcr.png',
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
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
