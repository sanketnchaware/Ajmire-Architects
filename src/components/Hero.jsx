import Image from "next/image";
import React from "react";

const awards = [
  {
    image: "/icons/award1.svg",
    title: "German Design Award",
    year: 2021,
  },
  {
    image: "/icons/award2.svg",
    title: "Gold A’ Design Award",
    year: 2021,
  },
  {
    image: "/icons/award3.svg",
    title: "IF Design Award",
    year: 2020,
  },
  {
    image: "/icons/award4.svg",
    title: "Good Design Award",
    year: 2019,
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className=" lg:mt-0 pt-20 w-full pt-10 lg:pt-36 bg-white"
    >
      {/* Text Section */}
      <div className="flex pb-16 items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-2 leading-tight">
            Make <span className="italic">your home</span> an ode to joy
          </h1>
          <p className="text-base  text-gray-600 leading-relaxed">
            We turn your empty house into a lovely home, making compact spaces
            shine with space-saving furniture.{" "}
            <br className="hidden sm:block" />
            Turning your unique taste into beautiful reality!
          </p>
        </div>
      </div>

      {/* Hero Image with CTA Button */}
      <div className="w-full  relative">
        <Image
          height={100}
          width={100}
          src="/images/CTA Button.webp"
          className="lg:block hidden absolute left-[10%] top-[-10%] z-10"
          alt="CTA Button"
        />
        <Image
          height={400}
          width={1000}
          className="w-full h-full object-cover"
          src="/images/hero-image.webp"
          alt="hero-image"
        />
      </div>

      {/* Awards Section */}
      {/* <div className="bg-darkGray flex flex-wrap justify-center gap-10 px-6 py-12">

        <div className="flex items-center">
          <p className="text-white text-xl font-medium tracking-widest lg:rotate-180 lg:writing-vertical">
            AWARDS
          </p>
        </div>

     
        <div className="flex flex-wrap lg:justify-center gap-10">
          {awards.map(({ image, title, year }) => (
            <div
              key={title}
              className="flex items-center gap-4 text-white max-w-xs"
            >
              <img
                src={image}
                alt={title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm text-gray-400">{year}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
