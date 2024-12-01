import React from "react";

const Header = () => {
  return (
    <header className="bg-neutral-100 w-full text-black sticky top-0 z-50 shadow-md font-source ">
      <div className="max-w-[85%]  container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl text-[#55B76B] font-bold">
          <a href="#home">Eco Pave</a>
        </div>

        {/* Navigation */}
        <nav className="hidden text-xl md:flex space-x-20">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#product" className="hover:underline">
            Product{" "}
          </a>
          <a href="#application" className="hover:underline">
            Applications
          </a>
          <a href="#process" className="hover:underline">
            Process{" "}
          </a>
          <a href="#teams" className="hover:underline">
            Team
          </a>
        </nav>
        <div>Contact us</div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
