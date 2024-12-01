import React from "react";

const Application = () => {
  return (
    <section id="application" className="py-12  md:py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 md:mb-28 max-w-7xl">
          <h1 className="relative text-6xl sm:text-8xl xl:text-11xl text-white font-semibold font-heading">
            <span className="mr-3">Versatile Applications: </span>
            <span className="relative inline-block">
              <span className="relative z-10">EcoPave in Action</span>
              <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span>
            </span>
          </h1>
        </div>

        {/* Image Cards */}
        <div className=" flex flex-wrap -m-3 mb-16">
          {/* First Card */}
          <div className="w-full md:w-1/2 p-3 ">
            <div className="relative overflow-hidden">
              <img
                className="rounded-4xl w-full bg-black object-cover"
                style={{ height: "666px" }}
                src=""
                alt=""
              />
              <div className="absolute top-0 left-0 px-14 py-16 flex flex-col justify-between h-full">
                <h3 className="mb-8 text-5xl text-white font-semibold tracking-tight max-w-xs font-heading">
                  High-Traffic Roads
                </h3>
                <p className="text-xl text-white font-semibold tracking-tight">
                  Durable and resilient, perfect for heavy traffic areas.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full md:w-1/2 p-3">
            <div className="relative overflow-hidden">
              <img
                className="rounded-4xl bg-black w-full object-cover"
                style={{ height: "666px" }}
                src=""
                alt="Woman"
              />
              <div className="absolute top-0 left-0 px-14 py-16 flex flex-col justify-between h-full">
                <h3 className="mb-8 text-5xl text-white font-semibold tracking-tight max-w-xs font-heading">
                  Industrial Spaces
                </h3>
                <p className="text-xl text-white font-semibold tracking-tight">
                  Engineered for tough environments and heavy machinery.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-full md:w-1/2 p-3">
            <div className="relative overflow-hidden">
              <img
                className="rounded-4xl w-full bg-black object-cover"
                style={{ height: "666px" }}
                src=""
                alt=""
              />
              <div className="absolute top-0 left-0 px-14 py-16 flex flex-col justify-between h-full">
                <h3 className="mb-8 text-5xl text-white font-semibold tracking-tight max-w-xs font-heading">
                  Residential Driveways
                </h3>
                <p className="text-xl text-white font-semibold tracking-tight">
                  Stylish and strong, ideal for enhancing home exteriors.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="w-full md:w-1/2 p-3">
            <div className="relative overflow-hidden">
              <img
                className="rounded-4xl bg-black w-full object-cover"
                style={{ height: "666px" }}
                src=""
                alt="Woman"
              />
              <div className="absolute top-0 left-0 px-14 py-16 flex flex-col justify-between h-full">
                <h3 className="mb-8 text-5xl text-white font-semibold tracking-tight max-w-xs font-heading">
                  Public Walkways & Parks
                </h3>
                <p className="text-xl text-white font-semibold tracking-tight">
                  Sustainable solutions for community spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap justify-center">
          <div className="w-auto">
            <a
              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
              href="#"
            >
              Get consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
