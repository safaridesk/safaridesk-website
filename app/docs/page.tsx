import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | SafariDesk",
  description: "Learn how to use SafariDesk",
  openGraph: {
    title: 'SafariDesk Docs',
    description: 'Learn how to use SafariDesk',
    url: 'https://safaridesk.io/docs/',
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

const DocsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Docs for SafariDesk"
        description="Learn how to use SafariDesk"
      />
    </>
  );
};

export default DocsPage;
