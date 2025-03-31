import React, { useState } from "react";
import logo from "../assets/img/icon/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <img src={logo} className="w-24 sm:w-36 cursor-pointer" alt="smkn5kiev" />

        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Leaderboard", link: "#leaderboard" },
            { name: "Staff", link: "#organization" },
            { name: "Donate", link: "#donate" },
            { name: "Rules", link: "#rules" },
            { name: "Roles", link: "#roles" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-white hover:text-[#e7a77c] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#recruitment"
            className="bg-[#aa724d] hover:bg-[#6d4c35] border-none py-2 px-5 w-auto rounded-xl shadow-md text-white"
          >
            Recruitment
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none transition-transform duration-300 transform hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 w-64 bg-black/90 border border-[#aa724d] p-4 rounded-xl shadow-lg text-center backdrop-blur-lg transition-all duration-300">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Leaderboard", link: "#leaderboard" },
            { name: "Staff", link: "#organization" },
            { name: "Donate", link: "#donate" },
            { name: "Rules", link: "#rules" },
            { name: "Roles", link: "#roles" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block text-white text-sm px-6 py-3 rounded-lg hover:bg-zinc-800 hover:text-[#aa724d] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#recruitment"
            className="block text-white text-sm bg-[#aa724d] hover:bg-[#6d4c35] px-6 py-3 rounded-lg transition-all duration-300"
          >
            Recruitment
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
