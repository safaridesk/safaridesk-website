import Link from "next/link";

const PricingBox = (props: {
  price: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp shadow-three dark:bg-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white px-8 py-10 hover:shadow-one"
        data-wow-delay=".1s"
      >
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-3xl font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            {/* <span className="self-or-hosted time text-body-color text-xl">/mo/agent</span> */}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <Link href="https://app.safaridesk.io/">
          <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Start Free Trial
          </button>
          </Link>
        </div>
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
