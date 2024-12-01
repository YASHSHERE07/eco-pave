import React from "react";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

// Array for applications
const applications = [
  {
    title: "High-Traffic Roads",
    description: "Durable and resilient, perfect for heavy traffic areas.",
  },
  {
    title: "Industrial Spaces",
    description: "Engineered for tough environments and heavy machinery.",
  },
  {
    title: "Residential Driveways",
    description: "Stylish and strong, ideal for enhancing home exteriors.",
  },
  {
    title: "Public Walkways & Parks",
    description: "Sustainable solutions for community spaces.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-16 bg-gray-100">
      <section id="team" className="bg-neutral-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-14">
            <div className="w-full lg:w-1/2 p-4">
              <h1 className="text-6xl sm:text-9xl xl:text-11xl font-semibold mb-16 font-heading">
                Our Product
              </h1>
              <p className="text-neutral-600 text-2xl font-semibold tracking-tight max-w-md">
                EcoPave Blocks: Strength in Sustainability, Built for a Greener
                Tomorrow.{" "}
              </p>
            </div>
            <div className="text-4xl mx-5 sm:mx-0 max-w-3xl mt-16">
              "EcoPave Blocks are more than just pavers—they’re a commitment to
              sustainable innovation"
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={img3}
            alt="Eco-friendly Paver Block 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img4}
            alt="Eco-friendly Paver Block 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="my-16 bg-green-100 border-2 border-green-950 rounded-2xl p-10">
          <p className="text-xl sm:text-4xl text-justify text-neutral-950 mb-8">
            Our eco-friendly paver blocks are crafted with innovation and
            sustainability in mind. Using recycled materials such as tyres,
            plastic bottles, and fly ash, we ensure that each block contributes
            to reducing waste and conserving resources. Durable, stylish, and
            versatile, these blocks are perfect for a variety of applications.
          </p>
        </div>
      </div>

      {/* Applications Section */}

   
    </section>
  );
};

export default Product;
