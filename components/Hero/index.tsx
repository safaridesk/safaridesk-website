import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section relative z-10 overflow-hidden bg-white pb-16 pt-[9rem] dark:bg-black md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 animate-fade-down text-3xl font-bold leading-tight text-black animate-duration-[1500ms] dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  SafariDesk - Make Your Customers Happy
                </h1>
                <p className="mb-12 animate-fade-up text-base !leading-relaxed text-body-color animate-duration-[1700ms] dark:text-body-color-dark sm:text-lg md:text-xl">
                  Build better relationships with customers, stay on top of
                  customers&apos; inquiries, increase customer service
                  productivity, create online routine inquiries, and so much
                  more
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    className="animate-flip-down rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out animate-duration-[1600ms] hover:bg-primary/80"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block animate-flip-up rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out animate-duration-[1600ms] hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
          <Image
            alt="SafariDesk hero SVG image"
            src="/images/hero/wavy-svg-image.svg"
            width={100}
            height={50}
            className="fadeInRight hero-lsvg"
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
