import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
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
