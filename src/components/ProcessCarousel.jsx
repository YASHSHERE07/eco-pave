import React, { useState } from "react";
import img1 from "../assets/img1.jpeg"; // Add your process images
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img1.jpeg";
import img6 from "../assets/img2.jpeg";

// Data for carousel items
const steps = [
  {
    id: 1,
    title: "Step 1 : Melting Plastic",
    description:
      "Recycled plastic is heated to 270°C, transforming it into a liquid state suitable for blending. This step ensures flexibility and binds the components together.",
    image: img1,
  },
  {
    id: 2,
    title: "Step 2 : Melting Rubber/Tires",
    description:
      "Recycled rubber, sourced from used tires, is melted at 200°C to achieve durability and elasticity, essential for the block's strength and shock absorption.",
    image: img2,
  },
  {
    id: 3,
    title: "Step 3 : Pre-heating Industrial By-products",
    description:
      "Iron slag and fly ash are pre-heated to remove moisture and enhance their compatibility with other materials. These by-products add compressive strength and reduce porosity.",
    image: img3,
  },
  {
    id: 4,
    title: "Step 4 : Mixing in Custom Moulds",
    description:
      "The molten plastic, rubber, pre-heated fly ash, and iron slag are blended together and poured into custom-designed moulds, ensuring uniform shape and size for every block.",
    image: img4,
  },
  {
    id: 5,
    title: "Step 5 : Compaction While Hot",
    description:
      "The mixture is compacted while still hot, ensuring a dense, strong structure that meets the required mechanical properties.",
    image: img5,
  },
  {
    id: 6,
    title: "Step 6 : Cooling and Setting",
    description:
      "Once compacted, the blocks are set aside to cool for 24 hours, solidifying into durable, weather-resistant paver blocks ready for use.",
    image: img6,
  },
  {
    id: 7,
    title: "Step 7 : Eco Paver",
    description: "Our Final Product",
    image: img6,
  },
];

const ProcessCarousel = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrev = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="process" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-28 max-w-7xl">
          <h1 className="relative text-6xl sm:text-8xl xl:text-11xl text-black font-semibold font-heading">
            <span className="mr-3">The EcoPave Journey: </span>
            <span className="relative inline-block">
              <span className="relative z-10"> From Waste to Wonder</span>
              <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-300 rounded-full"></span>
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="relative">
          {/* Carousel Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
            <img
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
          >
            ▶
          </button>
        </div>

        {/* Step Text */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-5xl font-semibold text-green-600 mb-4">
            {steps[currentStep].title}
          </h3>
          <p className="text-2xl text-gray-700">
            {steps[currentStep].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessCarousel;
