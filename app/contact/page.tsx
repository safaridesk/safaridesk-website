import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SafariDesk",
  description: "Contact our support team if you need help",
  openGraph: {
    title: 'Contact SafariDesk',
    description: 'Contact our support team through this page',
    url: 'https://safaridesk.io/contact/',
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

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact SafariDesk"
        description="Contact us through the methods listed below and our support team will be with you ASAP!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
