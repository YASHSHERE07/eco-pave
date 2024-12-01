import React from "react";
import img1 from "../assets/img1.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto relative bg-white flex items-center justify-center px-4"
    >
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Text Content */}
        <div className="text-black text-center md:text-left mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-oswald font-bold leading-snug">
            Welcome to <span className="text-green-600">Eco Pave</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-center mb-5 text-green-600 font-oswald font-medium">
            Paving the Future, Sustainably
          </p>
          <div className="text-2xl sm:text-4xl md:text-7xl text-orange-900 font-oswald font-medium flex flex-col gap-5">
            <p>Recyclable</p>
            <p>Sustainable</p>
            <p>Eco-Friendly</p>
          </div>
          <div className="max-w-full md:max-w-2xl mt-5 px-4 md:px-0">
            <p className="text-base sm:text-lg md:text-2xl mt-5 font-medium font-source">
              Eco-friendly paver blocks crafted from recycled tyres, plastics,
              and industrial by-products – durable, cost-effective, and kind to
              the planet.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-10 ml-0 sm:ml-10 mt-10">
            <button className="h-12 items-center justify-center rounded-md bg-green-700 px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              Learn More
            </button>
            <button className="h-12 items-center justify-center rounded-md bg-green-700 px-4 sm:px-6 text-sm sm:text-xl font-bold text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 sm:mt-6 md:mt-0 flex justify-center">
          <img
            src={img1}
            alt="Eco Pave"
            className="w-60 sm:w-72 md:w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
