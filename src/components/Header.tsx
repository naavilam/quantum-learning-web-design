
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "O que fazemos", id: "o-que-fazemos" },
    { label: "Por que nós", id: "por-que-nos" },
    { label: "Galeria", id: "galeria" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Quantum Learning
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
