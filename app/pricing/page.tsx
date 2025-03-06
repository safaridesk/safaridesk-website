import Pricing from "@/components/Pricing";
import "./pricing.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafariDesk Pricing",
  description: "This is the pricing information for SafariDesk",
  openGraph: {
    title: 'SafariDesk Pricing',
    description: 'This is the pricing information for SafariDesk',
    url: 'https://safaridesk.io/pricing/',
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

const PricingPage = () => {
  return (
    <main>
        <Pricing />
    </main>
  );
};

export default PricingPage;
