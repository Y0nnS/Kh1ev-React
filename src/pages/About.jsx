import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import aboutImage from "../assets/img/about.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="h-auto text-white flex justify-center items-center p-5 py-36 shadow-4xl bg-gradient-to-b from-[#d49163] to-black/90"
    >
      <div
        className="bg-black/25 flex flex-col justify-center items-center p-7 rounded-lg shadow-lg max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-[#2e2e2e] to-black/70"
        data-aos="fade-up"
      >
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-sm sm:text-2xl md:text-3xl font-bold">
            📸 ABOUT <span className="text-[#d49163]">KH1EV</span>
          </h1>
        </div>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Image Section */}
          <div className="w-52 md:w-1/2">
            <img src={aboutImage} alt="About Image" className="w-full rounded-lg shadow-lg" />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left md:text-left space-y-6 md:space-y-8">
            {/* About Us */}
            <div className="space-y-4">
              <h4 className="text-[12px] sm:text-xl lg:text-2xl font-semibold">ABOUT US</h4>
              <p className="text-gray-400 text-[10px] sm:text-base leading-relaxed">
                Welcome to our server named KH1EV. For those who don't know yet, this server is a
                community aimed at having fun and making friends. The server was created on January 19,
                2023, at 6:00 AM.
              </p>
            </div>
            {/* History */}
            <div className="space-y-4">
              <h4 className="text-[12px] sm:text-xl lg:text-2xl font-semibold">HISTORY</h4>
              <p className="text-gray-400 text-[10px] sm:text-base leading-relaxed">
                This server was initially created for a Minecraft server community called Voxnet.work. Many
                players joined this Discord server. However, as time passed, the number of participants
                decreased. We transformed this server into a place for casual chatting.
              </p>
            </div>
            {/* Founder */}
            <div className="space-y-4">
              <h4 className="text-[12px] sm:text-xl lg:text-2xl font-semibold">FOUNDER</h4>
              <p className="text-gray-400 text-[10px] sm:text-base leading-relaxed">
                I am Phy0n the creator of this server. Initially, I created this server for playing Minecraft with
                friends. Over time, I decided to turn this server into a Minecraft community. Later, it evolved
                into a regular community server for casual chatting.
              </p>
            </div>
            {/* Join Us Button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="https://discord.gg/MwNE7Vfb6t"
                target="_blank"
                className="bg-[#aa724d] hover:bg-[#6d4c35] border-none py-1 px-3 sm:py-2 sm:px-6 text-[12px] sm:text-base w-auto rounded-md text-lightcoral shadow-[0_0.4rem_0_0_#dfd9d9] cursor-pointer hover:bg-lightcoral hover:text-white active:shadow-[0_0.2rem_0_0_#dfd9d9] active:translate-y-1 disabled:cursor-auto disabled:text-gray-500 text-center"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;