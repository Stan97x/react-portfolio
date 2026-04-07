import React, { useState } from "react";

// IMAGES
import Me from "../images/icone.jpg";
import ParcoursImg from "../images/ParcoursImg.jpg";
import SkillsImg from "../images/skills.jpg";
import ObjectifsImg from "../images/objectif.jpg";
import Loisirs from "../images/Loisirs.jpg";

const About = () => {
  const [active, setActive] = useState("Présentation");

  const menu = [
    "Présentation",
    "Parcours",
    "Compétences",
    "Objectifs",
    "Loisirs",
  ];

  const content = {
    Présentation: {
      title: "À propos de moi",
      text: `Avant toute chose, je me présente. J'ai 24 ans et je suis actuellement étudiant à l'école Cloud Campus. Je vous présente mon portfolio qui retrace mon parcours professionnel.

Au fil de mes formations et de mes expériences, je me suis spécialisé dans le domaine du développement web.
Je vous invite à consulter le panel non exhaustif de mes compétences ci-dessous.`,
      image: Me,
    },

    Parcours: {
      title: "Mon parcours",
      text: `Je suis en formation développeur full stack et je développe mes compétences à travers des projets concrets.`,
      image: ParcoursImg,
    },

    Compétences: {
      title: "Mes compétences",
      text: `React, JavaScript, HTML, CSS, Tailwind CSS, Git, PHP, Symfony, MYSQL, Figma. Je suis constamment en train d’apprendre et de m’améliorer.`,
      image: SkillsImg,
    },

    Objectifs: {
      title: "Mes objectifs",
      text: `Devenir ingénieur développeur full stack confirmé et travailler sur des projets innovants.`,
      image: ObjectifsImg,
    },

    Loisirs: {
      title: "Mes Loisirs",
      text: `En dehors du développement, je suis passionné par les mangas, les jeux vidéo et le sport. Ces activités me permettent de me détendre tout en stimulant ma créativité et mon esprit de compétition.`,
      image: Loisirs,
    },
  };

  return (
    <div className="bg-black text-white py-20" id="about">
      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-widest text-gray-400 mb-2">À PROPOS</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500">
          En savoir plus sur moi
        </h2>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* MENU */}
        <div className="lg:w-1/3 relative">
          {/* Ligne verticale */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500"></div>

          <div className="pl-6 space-y-3">
            {menu.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    active === item
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-2/3 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* TEXT */}
          <div className="max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              {content[active].title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {content[active].text}
            </p>

            {/* 🎯 IMAGES LOISIRS (bonus) */}
            {active === "Loisirs" && (
              <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                {[].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="loisir"
                    className="w-40 h-20 object-cover rounded-xl border border-blue-500/30 hover:scale-110 hover:border-blue-500 transition duration-300"
                  />
                ))}
              </div>
            )}
          </div>

          {/* IMAGE DYNAMIQUE */}
          <div className="flex justify-center">
            <img
              src={content[active].image}
              alt="About"
              className="w-40 sm:w-52 md:w-60 object-cover rounded-2xl shadow-2xl border border-blue-500/20 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
