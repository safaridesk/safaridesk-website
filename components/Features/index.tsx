import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import "./features.css";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 mt-[3rem] md:py-20 lg:py-28">
        <div className="container bg-subtleWhite dark:bg-[transparent]">
          <div className=" flex flex-col pt-6 features-section-title-container">
          <h6 className="text-center text-primary justify-center">SafariDesk</h6>
          <SectionTitle
            title="What we offer"
            paragraph="SafariDesk is a powerful, modern ticketing system built for growing businesses. Designed with both agents and customers in mind, it streamlines support operations while delivering an exceptional user experience. Built on Laravel 11, our system combines enterprise-grade features with intuitive design to help you provide world-class customer support."
            center
          />
          </div>
          

          <div className="grid features-grid-container dark:bg-dark grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Features;
