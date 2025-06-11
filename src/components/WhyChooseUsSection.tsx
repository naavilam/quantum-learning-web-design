
import { useState, useEffect, useRef } from "react";
import { Heart, Shield, Sparkles, Users, Zap, Target } from "lucide-react";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const reasons = [
    {
      icon: Heart,
      title: "Tecnologia com Alma",
      description: "Acreditamos que a tecnologia deve servir à humanidade. Cada algoritmo é desenvolvido pensando no impacto positivo na sociedade.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Transparência Científica",
      description: "Nossos métodos são baseados em pesquisas peer-reviewed. Compartilhamos conhecimento e mantemos padrões éticos rigorosos.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Integração com IA Real",
      description: "Não vendemos promessas vazias. Nossa IA quântica já está em produção, resolvendo problemas reais para empresas reais.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { icon: Zap, number: "10x", label: "Mais Rápido", description: "que algoritmos clássicos" },
    { icon: Target, number: "99.7%", label: "Precisão", description: "em classificação quântica" },
    { icon: Users, number: "500+", label: "Empresas", description: "já transformadas" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="por-que-nós" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Por que Escolher a Quantum Learning?
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Somos pioneiros em combinar paixão humana com poder computacional quântico
          </p>
        </div>

        {/* Manifesto em destaque */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-200/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              "Estamos construindo a próxima era da inteligência"
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Onde a computação quântica não é apenas uma ferramenta, mas uma extensão da criatividade humana, 
              capaz de resolver os desafios mais complexos da nossa época.
            </p>
          </div>
        </div>

        {/* Razões principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${700 + index * 200}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200/30 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${1300 + index * 150}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
