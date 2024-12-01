import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProcessCarousel from "../components/ProcessCarousel";
import TeamSection from "../components/TeamSection";
import Application from "../components/Application";

const HomePage = () => {
  return (
    <>
      <div className="bg-white mx-auto">
        <Header />
        <Hero />
        <About />
        <Products />
        <Application />
        <Features />
        <ProcessCarousel />
        <TeamSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
