import React from "react";

const features = [
  {
    id: 1,
    icon: "♻️",
    title: "Recycled Materials",
    description:
      "We utilize innovative materials like recycled tyres, plastic bottles, fly ash, and steel slag, transforming waste into high-quality paver blocks. These materials not only reduce landfill waste but also promote sustainable resource usage.",
  },
  {
    id: 2,
    icon: "🛠️",
    title: "Superior Mechanical Properties",
    description:
      "Our paver blocks are engineered for strength and durability, offering exceptional compressive strength (80 MPa) and abrasion resistance. These features ensure long-lasting performance, even in high-traffic or industrial environments.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Environmental Benefits",
    description:
      "By diverting non-biodegradable waste from landfills and repurposing industrial by-products, we help reduce carbon emissions and conserve natural resources. Each block is a step toward a greener planet.",
  },
  {
    id: 4,
    icon: "💰",
    title: "Cost-Effectiveness",
    description:
      "Our production process lowers costs by approximately 15% compared to traditional methods. This makes eco-friendly construction accessible without compromising on quality or performance.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <section className="py-12  bg-">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className=" max-w-7xl">
            <h1 className="relative text-6xl sm:text-8xl xl:text-11xl text-black font-semibold font-heading">
              <span className="mr-3">Features: </span>
              <span className="relative inline-block">
                <span className="relative z-10">EcoPave in Action</span>
                <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-300 rounded-full"></span>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white max-w-xl p-6 rounded-lg shadow-lg hover:shadow-2xl transition hover:scale-105"
            >
              <div className="text-[250px]">{feature.icon}</div>
              <h3 className="text-5xl  font-semibold my-8 text-green-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-2xl text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
