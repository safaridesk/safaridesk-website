"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import "./pricing.css";

const Pricing = () => {
  const [isCloudHosted, setIsCloudHosted] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Whether you can host it yourself or need hosting, we got your back. All prices exclude the legal value-added tax."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsCloudHosted(true)}
              className={`${
                isCloudHosted
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Cloud hosted
            </span>
            <div
              onClick={() => setIsCloudHosted(!isCloudHosted)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#3C3C3C] shadow-inner"></div>
                <div
                  className={`${
                    isCloudHosted ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsCloudHosted(false)}
              className={`${
                isCloudHosted
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Self hosted
            </span>
          </div>
        </div>

        <div className="pricing-boxes grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(1)]:animate-fade-down [&>*:nth-child(1)]:animate-duration-[1600ms] lg:[&>*:nth-child(1)]:animate-fade-left lg:[&>*:nth-child(1)]:animate-duration-[1600ms] [&>*:nth-child(2)]:animate-fade-down [&>*:nth-child(2)]:animate-duration-[1600ms] lg:[&>*:nth-child(2)]:animate-fade-down lg:[&>*:nth-child(2)]:animate-duration-[1250ms] [&>*:nth-child(3)]:animate-fade-down [&>*:nth-child(3)]:animate-duration-[1600ms] lg:[&>*:nth-child(3)]:animate-fade-right lg:[&>*:nth-child(3)]:animate-duration-[1600ms]">
          {isCloudHosted ? (
            <>
              <PricingBox
                packageName="Business"
                price={<>5<span className="text-sm font-normal">/mo/agent</span></>}
                subtitle="For businesses."
              >
                <OfferList text="Service: Mon-Fri (9.00 - 17.00 CET)" status="active" />
                <OfferList text="Email support" status="active" />
                <OfferList text="3 hours max. response time" status="active" />
                <OfferList text="15 service requests" status="active" />
                <OfferList text="Bug escalations" status="active" />
                <OfferList text="Security advisories" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Enterprise"
                price={<>12<span className="text-sm font-normal">/mo/agent</span></>}
                subtitle="For enterprises"
              >
                <OfferList text="Initial assessment" status="active" />
                <OfferList text="Service: Mon-Fri (8.00 - 18.00 CET)" status="active" />
                <OfferList text="Email and phone support" status="active" />
                <OfferList text="4 hours max. response time" status="active" />
                <OfferList text="45 service requests" status="active" />
                <OfferList text="Bug escalations" status="active" />
                <OfferList text="Security advisories" status="active" />
                <OfferList text="5% discount on additional services" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Corporation"
                price={<>20<span className="text-sm font-normal">/mo/agent</span></>}
                subtitle="For corporations"
              >
                <OfferList text="Initial assessment" status="active" />
                <OfferList text="Service: Mon-Fri (8.00 - 20.00 CET)" status="active" />
                <OfferList text="Email and phone support" status="active" />
                <OfferList text="2 hours max. response time" status="active" />
                <OfferList text="95 service requests" status="active" />
                <OfferList text="Bug escalations" status="active" />
                <OfferList text="Patch level, minor release, and security patch updates" status="active" />
                <OfferList text="Security advisories" status="active" />
                <OfferList text="10% discount on additional services" status="active" />
                <OfferList text="Contact sales" status="active" />
              </PricingBox>
            </>
          ) : (
            <PricingBox
              packageName="Self Hosted"
              price="499"
              subtitle="Enterprise Solution"
            >
              <OfferList text="Initial assessment" status="active" />
              <OfferList text="Service: Mon-Fri (8.00 - 20.00 CET)" status="active" />
              <OfferList text="Email and phone support" status="active" />
              <OfferList text="6 hours max. response time" status="active" />
              <OfferList text="95 service requests" status="active" />
              <OfferList text="Bug escalations" status="active" />
              <OfferList text="Security advisories" status="active" />
              <OfferList text="10% discount on additional services" status="active" />
              <OfferList text="Contact sales" status="active" />
            </PricingBox>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]"></div>
    </section>
  );
};

export default Pricing;
