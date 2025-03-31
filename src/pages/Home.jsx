import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import heroImage from "../assets/img/hero.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Layers */}
      <div
        id="home-bg"
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div id="home-bg-next" className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 mx-5 sm:mx-10 lg:mx-40 text-white">
        <div className="mb-5">
          <h3 className="text-sm sm:text-2xl font-semibold tracking-wide" data-aos="fade-right">
            Welcome To
          </h3>
          <h1
            className="text-md sm:text-5xl lg:text-7xl font-bold tracking-wider mb-4"
            data-aos="fade-right"
          >
            <span className="text-[#d49163]">KH1EV</span> DISCORD SERVER
          </h1>
          <p className="text-[10px] sm:text-lg lg:text-xl leading-relaxed lg:w-3/5" data-aos="fade-right">
            KH1EV Discord server is the best in Indonesia! It's a vibrant community where everyone can
            connect, chat, and have fun together. Join us and see what makes us stand out!
          </p>
        </div>
        <div className="flex md:justify-start" data-aos="fade-right">
          <a
            href="#about"
            className="bg-[#aa724d] hover:bg-[#6d4c35] border-none py-1 px-3 sm:py-3 sm:px-7 text-[12px] sm:text-base w-auto rounded-md text-lightcoral shadow-[0_0.4rem_0_0_#dfd9d9] cursor-pointer hover:bg-lightcoral hover:text-white active:shadow-[0_0.2rem_0_0_#dfd9d9] active:translate-y-1 disabled:cursor-auto disabled:text-gray-500 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;