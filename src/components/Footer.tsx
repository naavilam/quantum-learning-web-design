
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Learning
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneiros em computação quântica e inteligência artificial, 
              transformando o futuro através da tecnologia mais avançada do planeta.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Sobre Nós", "Serviços", "Pesquisa", "Blog", "Carreiras"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-purple-400" />
                <span className="text-gray-300">contact@quantumlearning.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-purple-400" />
                <span className="text-gray-300">+55 (11) 9999-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Quantum Learning. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
