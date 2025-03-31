import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import logoKh1ev from "../assets/img/icon/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Footer Section */}
      <footer id="footer" className="bg-zinc-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Logo & Description */}
            <div className="text-center md:text-left" data-aos="fade-out" data-aos-anchor-placement="top-bottom">
              <img src={logoKh1ev} className="w-36 sm:w-52 mx-auto md:mx-0" alt="Logo" />
              <p className="text-[12px] sm:text-base leading-relaxed mt-4 max-w-md mx-auto md:mx-0">
                We created this server to have fun and build a friendly community. We'd be thrilled if you
                joined us, and we're here to welcome you with open arms! Let's make some great memories
                together!
              </p>
            </div>
            {/* Social Media */}
            <div className="flex flex-col items-center md:items-end space-y-4" data-aos="fade-out" data-aos-anchor-placement="top-bottom">
              <h2 className="text-sm sm:text-xl font-semibold">Follow Us</h2>
              <div className="flex gap-6">
                <a href="https://discord.gg/MwNE7Vfb6t" className="text-[#d49163] hover:text-[#6d4c35] transition transform hover:scale-110">
                  <FontAwesomeIcon icon={faDiscord} className="text-md sm:text-2xl" />
                </a>
                <a href="https://www.tiktok.com/@smkn5kiev.id" className="text-[#d49163] hover:text-[#6d4c35] transition transform hover:scale-110">
                  <FontAwesomeIcon icon={faTiktok} className="text-md sm:text-2xl" />
                </a>
                <a href="https://www.instagram.com/smkn5kiev.id/" className="text-[#d49163] hover:text-[#6d4c35] transition transform hover:scale-110">
                  <FontAwesomeIcon icon={faInstagram} className="text-md sm:text-2xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Separator Line */}
          <div className="border-t border-[#d49163] mt-8 pt-4 text-center text-[12px] sm:text-md text-[#fffff]">
            © 2025 KH1EV. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
