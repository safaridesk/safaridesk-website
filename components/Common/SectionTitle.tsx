import Image from "next/image";

const SectionTitle = ({
  title,
  paragraph,
  width = "100%",
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
    <div>
        <Image
        alt="SafariDesk website mesh accent image"
        src="https://res.cloudinary.com/dpxpjd5fb/image/upload/v1741254292/mesh-1img_xye0ib.png"
        fill
        className="absolute opacity-50 -z-10"
        />
      </div>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ width: width, marginBottom: mb }}
      >
        
        <h2 className="animate-fade-up animate-duration-[1600ms] mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base animate-fade-down animate-duration-[1600ms] !leading-relaxed text-body-color dark:text-white md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
