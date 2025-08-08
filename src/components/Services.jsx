import React from "react";
import * as Icons from "lucide-react";

const features = [
  {
    icon: "PencilRuler",
    heading: "Architectural & Interior Design",
    text: "We craft functional spaces with a perfect blend of architecture and interior aesthetics to elevate your lifestyle.",
  },
  {
    icon: "Hammer",
    heading: "Building Renovation",
    text: "Expert renovation solutions that restore and enhance your space with modern materials and craftsmanship.",
  },
  {
    icon: "HardHat",
    heading: "Construction Management",
    text: "Efficient planning, coordination, and execution to ensure successful delivery of your construction projects.",
  },
];

const Services = () => (
  <section id="services" className="w-11/12 max-w-7xl mx-auto py-24">
    {/* Header */}
    <div className="mb-16 ">
      <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
        Our Services
      </p>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkText leading-tight">
        We provide the best solutions <br /> for your dream home
      </h2>
    </div>

    {/* Features Grid */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {features.map((item, index) => {
        const LucideIcon = Icons[item.icon] || Icons.Circle;

        return (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-6"
          >
            <div className="shrink-0">
              <LucideIcon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold text-darkText leading-snug">
                {item.heading}
              </h3>
              <p className="text-base text-lightText leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Services;
