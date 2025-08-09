import React from "react";

const stats = [
  {
    value: "100%",
    title1: "Satisfaction",
    title2: "Clients",
  },
  {
    value: "5+",
    title1: "Years",
    title2: "Experience",
  },
  {
    value: "25+",
    title1: "Projects ",
    title2: "Completed",
  },
];

const About = () => (
  <section id="about" className="min-h-screen w-11/12 max-w-7xl mx-auto py-20">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Text Content */}
      <div className="space-y-6 max-w-xl">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
          ABOUT US
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-2 leading-tight">
          We help to bring your <br /> dream home to reality
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris
          posuere auctor justo. Habitant proin aliquet volutpat leo ultricies.
          Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio
          bibendum lobortis diam.
        </p>
      </div>

      {/* Awards */}
      <div className="flex gap-6 w-full lg:w-1/2">
        <figure className="w-1/2 rounded-xl overflow-hidden shadow-lg lg:-translate-y-6">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&auto=format&fit=crop&q=60"
            alt="Modern interior design award"
          />
        </figure>
        <figure className="w-1/2 rounded-xl overflow-hidden shadow-lg lg:translate-y-6">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60"
            alt="Award-winning interior design"
          />
        </figure>
      </div>
    </div>

    {/* Stats */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      {stats.map(({ value, title1, title2 }) => (
        <div
          key={value}
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6"
        >
          <p className="text-4xl font-bold ">{value}</p>
          <div className="mt-2 text-sm text-gray-600 font-medium tracking-wide">
            <p>{title1.toUpperCase()}</p>
            <p>{title2.toUpperCase()}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
