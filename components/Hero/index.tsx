import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-section dark:bg-black relative z-10 overflow-hidden bg-white pb-16 pt-[9rem] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="animate-fade-down animate-duration-[1500ms] mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  SafariDesk - Make Your Customers Happy
                </h1>
                <p className="animate-fade-up animate-duration-[1700ms] dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Build better relationships with customers, 
                  stay on top of customers&apos; inquiries, 
                  increase customer service productivity, 
                  create online routine inquiries, and so much more
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    className="animate-flip-down animate-duration-[1600ms] rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="animate-flip-up animate-duration-[1600ms] inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
