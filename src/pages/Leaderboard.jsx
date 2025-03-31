import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import aboutImage from "../assets/img/about.jpeg";

const About = () => {
  const [chatLeaderboard, setChatLeaderboard] = useState([]);
  const [voiceLeaderboard, setVoiceLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const chatResponse = await fetch("../assets/data/leaderboard.json"); // ✅ Ambil dari public/assets/data/
        const chatData = await chatResponse.json();
        setChatLeaderboard(chatData);

        const voiceResponse = await fetch("../assets/data/leaderboard-voice.json"); // ✅ Ambil dari public/assets/data/
        const voiceData = await voiceResponse.json();
        setVoiceLeaderboard(voiceData);
      } catch (error) {
        console.error("Gagal mengambil data leaderboard:", error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <>
      <section id="leaderboard" className="bg-black/90 flex flex-col justify-center text-white py-36 gap-10">
        {[{ type: "CHAT", data: chatLeaderboard }, { type: "VOICE", data: voiceLeaderboard }].map(({ type, data }) => (
          <div key={type} className="container mx-auto px-4" data-aos="fade-up">
            <div className="bg-black/25 rounded-lg shadow-lg p-7">
              <div className="text-center mb-6">
                <h1 className="text-sm sm:text-2xl md:text-3xl font-bold">
                  🏆 MONTHLY {type} <span className="text-[#d49163]">LEADERBOARD</span>
                </h1>
                <p className="text-gray-400 text-[12px] sm:text-sm mt-2">Top Monthly Season KH1EV</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {data.map((player, index) => (
                  <div key={index} className="flex items-center gap-4 bg-zinc-800 bg-gradient-to-b from-[#2e2e2e] to-black/70 bg-opacity-90 rounded-xl p-2 sm:p-4 w-64 sm:w-auto shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#ffcc99] group cursor-pointer relative">
                    <div className="absolute inset-0 rounded-xl bg-[#e7a77c]/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                    <div className="w-8 h-8 sm:w-14 sm:h-14 flex-shrink-0">
                      <img src={player.image.startsWith("http") ? player.image : `/assets/${player.image}`} alt={player.season} className="w-full h-full object-cover rounded-full border border-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-base font-light sm:font-semibold text-white whitespace-nowrap truncate">
                        {player.rank} {player.season} | {player.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
