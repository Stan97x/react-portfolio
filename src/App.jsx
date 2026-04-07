import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import About from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import Timeline from "./assets/Components/Timeline";

const App = () => {
  const [darkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-br from-gray-700 via-[(#000 ] to-gray-600 min-h-screen"
          : "bg-linear-to-br from-gray-50 to-gray-50 min-h-screen"
      }
    >
      <NavBar darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
