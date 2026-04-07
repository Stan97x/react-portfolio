import React, { useState } from "react";

import img1 from "../Project/Lourse.png";
import img2 from "../Project/PeacklyBurger.png";
import img3 from "../images/Snake.jpg";
import img4 from "../images/MoveBody.jpg";
import img5 from "../images/Movie.jpg";

const Link = [
  {
    name: "Projects",
    link: "##Projects",
  },
];
const projectsData = [
  {
    id: 3,
    title: "Projet Snake",
    images: [img3],
    description:
      "J’ai réalisé une version du jeu Snake en JavaScript, en utilisant HTML et CSS pour l’interface. Le joueur contrôle un serpent qui grandit en mangeant de la nourriture générée aléatoirement, tout en évitant les collisions avec les murs et lui-même. Ce projet m’a permis de travailler sur la gestion des événements clavier, la logique de jeu, les collisions ainsi que la mise à jour dynamique de l’affichage. Il illustre ma capacité à concevoir une application interactive et à structurer du code de manière claire et efficace.",
    link: "https://stan97x.github.io/Projet_Snake-Stan/",
  },
  {
    id: 1,
    title: "L'ourse",
    images: [img1],
    description:
      "Le site internet de l’ourse avait besoin d’un nouveau site internet plus sécurisé et beaucoup plus attractif, car l’ancien comportait un grand manque de sécurité.Re-design général du site en épurant et définissant moins de couleurs pour la cohérence.Ajustement des couleurs pour ajouter du contraste et avoir une meilleur accessibilité. Ajustement de la hiérarchie du site. \n D'abord j'ai fait une charte graphique du site puis ensuite j'ai refait une maquette pour l'amélioration du site après j'ai refait le site. \n----Technologie utilisé: HTML,CSS,PHP.",
    link: "https://github.com/Stan97x/Lourse",
  },
  {
    id: 2,
    title: "Peackly's Burger",
    images: [img2],
    description:
      "Le Projet etait un site qui devait rivalisé au différent site de Mcdonald's, Burger King. Ce site a été crée a 2, on a du faire l'analyse du marché, des wireframes, un maquettage et puis la création et le deploiement du site. \n ---Technologie utilisé: HTML, CSS,PHP",
    link: "https://github.com/Stan97x/Peackly-Burger-s",
  },

  {
    id: 4,
    title: "Move Body",
    images: [img4],
    description:
      "J’ai réalisé le maquettage d’une application nommée MoveBody sur Figma dans le cadre d’un projet en cours. L’objectif était de concevoir une interface moderne et intuitive autour du bien-être et de l’activité physique.Ce projet m’a permis de travailler sur la création de wireframes, le design d’interfaces (UI), ainsi que l’expérience utilisateur (UX). J’ai porté une attention particulière à l’ergonomie, à la hiérarchie visuelle et à la cohérence graphique afin de proposer une navigation fluide et agréable. Cette réalisation illustre ma capacité à concevoir des maquettes fonctionnelles et esthétiques, tout en répondant à des besoins utilisateurs définis.",
    link: "https://github.com/Stan97x/MoveBody",
  },
  {
    id: 5,
    title: "Carrousel Movie",
    images: [img5],
    description:
      "J’ai réalisé un projet de type catalogue de films, permettant de présenter une sélection de contenus cinématographiques à travers une interface simple et structurée. Les films sont affichés sous forme de fiches avec leurs informations principales (titre, image, description), organisées de manière claire pour faciliter la lecture et la navigation. Ce projet met l’accent sur la mise en page, la hiérarchie visuelle et la cohérence graphique.Il m’a permis de développer mes compétences en HTML et CSS, notamment dans la création d’interfaces propres, lisibles et responsive, tout en appliquant des principes de design pour améliorer l’expérience utilisateur.",
    link: "https://stan97x.github.io/CarrouselMovie/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="bg-black text-white py-24 px-6" id="projects">
      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="text-gray-400 tracking-widest text-sm mb-2">PROJECTS</p>
        <h2 className="text-4xl font-bold text-blue-500">Mes projets</h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
            }}
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <div className="w-full max-w-7xl h-[90vh] flex flex-col lg:flex-row gap-10 px-6">
            {/* IMAGE SLIDER */}
            <div className="lg:w-1/2 w-full flex items-center justify-center relative">
              <img
                src={selectedProject.images[currentImage]}
                alt="project"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />

              {/* LEFT ARROW */}
              <button
                onClick={prevImage}
                className="absolute left-4 bg-black/50 p-3 rounded-full hover:bg-black"
              >
                ←
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextImage}
                className="absolute right-4 bg-black/50 p-3 rounded-full hover:bg-black"
              >
                →
              </button>
            </div>

            {/* TEXT */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-8">
                {selectedProject.description}
              </p>

              <a href={selectedProject.link} target="_blank">
                <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition">
                  Voir le projet
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
