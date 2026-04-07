import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ darkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "home", link: "#home" },
    { name: "sur moi", link: "#about" },
    { name: "parcours", link: "#skills" },
    { name: "projets", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  const LightColor = {
    navBg: "bg-gradient-to-br from-blue-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    textHover: "hover:text-blue-600",
    textActive: "text-blue-600",
    indicator: "from-blue-500 to-blue-500",
  };

  const DarkColor = {
    navBg: "bg-gradient-to-br from-gray-800 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "hover:text-blue-400",
    textActive: "text-blue-400",
    indicator: "from-blue-500 to-blue-500",
  };

  const colors = darkMode ? DarkColor : LightColor;

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4 px-4 ">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-9xl flex items-center justify-between ${colors.navBg} backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg`}
      >
        {/* LOGO */}
        <a href="#home">
          <span className={`text-xl font-bold ${colors.textPrimary}`}>
            PortFolioStan<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={`relative transition-all duration-300
                ${colors.textSecondary} 
                ${colors.textHover}
                ${
                  activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : ""
                }
              `}
            >
              {item.name}

              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r ${colors.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        {/* BURGER (MOBILE ONLY) */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-blue-500"></span>
              <span className="block w-6 h-0.5 bg-blue-500"></span>
              <span className="block w-6 h-0.5 bg-blue-500"></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 w-[90%] max-w-sm ${colors.navBg} backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4 lg:hidden`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={`text-lg
                  ${colors.textSecondary}
                  ${colors.textHover}
                  ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : ""
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
