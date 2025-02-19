const SectionTitle = ({
  title,
  paragraph,
  width = "90vw",
  center,
  mb = "100px"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ width: width, marginBottom: mb }}
      >
        <h2 className="animate-fade-up animate-duration-[1600ms] mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base animate-fade-down animate-duration-[1600ms] !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
