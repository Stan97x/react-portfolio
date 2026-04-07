const timelineData = [
  {
    title: "Baccalauréat Technologique",
    date: "2019",
    description: "Obtention de mon baccalauréat STMG option gestion finance.",
  },
  {
    title: "Premier projet",
    date: "2020",
    description:
      "Création d'un site Web lors de mon BTS comptabilité qui m'a permis de me reorienter en BTS SIO option SLAM",
  },
  {
    title: "BTS SIO option  Slam",
    date: "2023",
    description:
      "Obtention de mon BTS SIO option SLAM qui m'a permis de découvrir HTML, PHP, CSS, JAVASCRIPT, C#",
  },
  {
    title: "Inscription Cloud Campus",
    date: "2026",
    description:
      "Réeinscription à l'école pour poursuivre mes études en informatiques. ",
  },
];

const Timeline = () => {
  return (
    <div className="bg-black text-white py-20 px-6" id="skills">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
        Mon parcours
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* LIGNE CENTRALE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* CARD */}
            <div className="w-full md:w-1/2 relative">
              {/* BULLE */}
              <div
                className="absolute top-5 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 
                md:-right-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-black z-10"
              ></div>

              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
