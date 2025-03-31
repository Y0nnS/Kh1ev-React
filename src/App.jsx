import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Leaderboard from "./pages/Leaderboard"
import "./styles/global.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
