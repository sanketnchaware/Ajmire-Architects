const projects = [
  {
    title: "Villa Furnishing & Interior",
    description:
      "High-end furnishing and interior layout with a focus on modern yet cozy aesthetics.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Luxury Hotel Renovation",
    description:
      "Revamping luxury hospitality spaces with elegance and thoughtful design.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Residence Swimming Pool",
    description:
      "Elegant backyard pool design that blends with the natural landscape.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default function Work() {
  return (
    <section id="work" className="w-11/12 max-w-7xl mx-auto py-20">
      {/* Heading */}
      <div className="mb-16 ">
        <p className=" text-sm font-medium tracking-widest text-primary uppercase mb-3">
          Recent Works
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-2 leading-tight">
          Some of our crafts <br /> made with love
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              
              group relative overflow-hidden rounded-xl shadow-md bg-white transition hover:shadow-xl
            `}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
