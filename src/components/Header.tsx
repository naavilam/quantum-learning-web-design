
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-quantum-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Quantum Learning
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium"
            >
              O que fazemos
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium"
            >
              Por que nós
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium"
            >
              Galeria
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-quantum-gradient hover:opacity-90 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('what-we-do')}
                className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium text-left"
              >
                O que fazemos
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium text-left"
              >
                Por que nós
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-quantum-600 transition-colors duration-200 font-medium text-left"
              >
                Galeria
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-quantum-gradient hover:opacity-90 text-white px-6 py-2 rounded-lg w-full transition-all duration-200"
              >
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
