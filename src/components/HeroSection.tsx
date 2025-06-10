
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-quantum-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-neural-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-quantum-300 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-neural-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism mb-8 border border-quantum-200">
            <span className="w-2 h-2 bg-quantum-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              Liderando a Revolução Quântica
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Descubra o </span>
            <span className="text-gradient">Poder da</span>
            <br />
            <span className="text-gradient">Computação Quântica</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos dados complexos em insights revolucionários através de algoritmos quânticos 
            e machine learning de última geração, impulsionando o futuro da tecnologia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('what-we-do')}
              size="lg"
              className="bg-quantum-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 quantum-glow"
            >
              Explore Nossos Algoritmos
            </Button>
            <Button 
              onClick={() => scrollToSection('gallery')}
              variant="outline"
              size="lg"
              className="border-2 border-quantum-300 text-quantum-600 hover:bg-quantum-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Demonstrações
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-600 mb-2">50+</div>
              <div className="text-gray-600">Algoritmos Implementados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neural-600 mb-2">99.9%</div>
              <div className="text-gray-600">Precisão dos Modelos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-600 mb-2">1000x</div>
              <div className="text-gray-600">Mais Rápido</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-quantum-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-quantum-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
