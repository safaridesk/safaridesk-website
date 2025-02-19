import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SafariDesk | AI ticketing system for all industries",
  description: "Learn about SafariDesk and our mission to make ticketing easier for all industries",
  openGraph: {
    title: 'About SafariDesk - Ticketing system with AI done right',
    description: 'Read about our journey to sucess with our modern ticketing software.',
    url: 'https://safaridesk.io/about/',
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

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="SafariDesk is an entreprise level ticketing system suitable for all industries and companies of all sizes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
