
import React from 'react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-quantum-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold">Quantum Learning</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Pioneiros em computação quântica e machine learning, transformando 
              o futuro da tecnologia através de algoritmos revolucionários.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-quantum-500 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-quantum-500 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-quantum-500 transition-colors">
                <span className="text-sm">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-quantum-500 transition-colors">
                <span className="text-sm">gh</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-quantum-400 transition-colors">Início</a></li>
              <li><a href="#what-we-do" className="text-gray-300 hover:text-quantum-400 transition-colors">Algoritmos</a></li>
              <li><a href="#why-choose-us" className="text-gray-300 hover:text-quantum-400 transition-colors">Diferenciais</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-quantum-400 transition-colors">Galeria</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 contato@quantumlearning.ai</li>
              <li>📱 +55 (11) 99999-9999</li>
              <li>📍 São Paulo, SP - Brasil</li>
              <li>🌐 quantumlearning.ai</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Receba atualizações sobre computação quântica</h3>
              <p className="text-gray-300">Insights exclusivos e novidades do mundo quântico direto no seu email.</p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-quantum-400"
              />
              <Button className="bg-quantum-gradient hover:opacity-90 px-6">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm mb-4 md:mb-0">
            <a href="#" className="hover:text-quantum-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-quantum-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-quantum-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-quantum-400 transition-colors">Segurança</a>
          </div>
          <div className="text-gray-300 text-sm">
            © 2024 Quantum Learning. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-quantum-gradient rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        ↑
      </button>
    </footer>
  );
};
