import Pricing from "@/components/Pricing";
import "./pricing.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafariDesk Pricing | Best AI Ticketing System",
  description: "This is the pricing for SafariDesk; the best AI ticketing system",
};

const PricingPage = () => {
  return (
    <main>
        <Pricing />
    </main>
  );
};

export default PricingPage;
