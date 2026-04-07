import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import CV from "../images/CV.pdf";
import MeHero from "../images/icons.jpg";
import BackVid from "../images/BackVid.mp4";

const Hero = () => {
  const socialMedia = [{ icon: FaGithub, link: "https://github.com/Stan97x" }];

  return (
    <div
      className="relative min-h-auto flex items-start pt-8 sm:pt-20 overflow-hidden"
      id="home"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BackVid} type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* CONTENT */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* SOCIAL */}
          <div className="flex gap-4 mb-5">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white hover:scale-110 transition" />
                </a>
              );
            })}
          </div>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Salut, moi c’est Stanley 👋
          </h1>

          {/* TEXT */}
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-md">
            Développeur web passionné, je crée des interfaces modernes, rapides
            et intuitives. J’aime transformer des idées en expériences digitales
            concrètes avec React, JavaScript et Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                <CiMail id="contacts" />
                Contact
              </button>
            </a>

            <a href={CV} download className="w-full sm:w-auto">
              <button className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                <LiaDownloadSolid />
                CV
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={MeHero}
            alt="Hero"
            className="w-36 h-56 sm:w-44 sm:h-64 md:w-52 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
