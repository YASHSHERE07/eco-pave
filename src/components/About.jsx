import React from "react";
import img2 from "../assets/img2.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-neutral-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-14">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-6xl sm:text-9xl xl:text-11xl font-semibold mb-16 font-heading">
              About Us
            </h1>
            <p className="text-neutral-600 text-2xl font-semibold tracking-tight max-w-md">
              Building a sustainable future, one eco-friendly block at a time.
            </p>
          </div>
          <div className="text-4xl ml-5 sm:ml-0 max-w-3xl mt-16">
            EcoPave Innovations is committed to revolutionizing construction by
            turning recycled materials into high-performance paver blocks.
          </div>

          <div className="relative max-w-6xl mx-auto p-5 sm:p-10 md:p-20 rounded-xl mt-10">
            {/* Background for the <p> */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-opacity-80 rounded-xl"
              style={{
                backgroundImage: `url(${img2})`,
              }}
            ></div>

            {/* Text Container */}
            <div className="max-w-3xl mx-auto rounded-2xl relative backdrop-blur-sm bg-black/90 p-5 sm:p-10">
              <p className="z-10 font-sans text-white text-base sm:text-lg md:text-xl leading-relaxed">
                At Eco Pave, we are committed to revolutionizing the
                construction industry through innovation and sustainability. Our
                eco-friendly paver blocks are crafted from recycled materials
                such as tyres, plastic bottles, fly ash, and steel slag,
                offering a durable and cost-effective alternative to
                conventional options. Our mission is to address pressing
                environmental challenges, including waste accumulation and
                industrial by-product disposal, by creating solutions that
                conserve natural resources and reduce carbon emissions. With
                superior strength, weather resistance, and eco-conscious design,
                our paver blocks are engineered to meet the highest standards
                while promoting a greener future. Driven by a passion for
                sustainability, we blend innovation with responsibility,
                ensuring our products contribute to global sustainability goals
                and the circular economy. Join us in paving the way toward a
                more sustainable tomorrow, one block at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
