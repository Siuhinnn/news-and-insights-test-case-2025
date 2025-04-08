import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="/images/aad.png"
        alt="Hero Background"
        className="object-cover"
        priority
        fill
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
        <h1 className="text-white">
          <span className="block text-2xl md:text-3xl font-light">
            latest news
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold mt-1">
            & INSIGHTS
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroImage;
