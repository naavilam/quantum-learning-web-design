
import React from 'react';

const benefits = [
  {
    title: "Performance Quântica",
    description: "Nossos algoritmos oferecem performance exponencialmente superior aos métodos clássicos, resolvendo problemas complexos em segundos.",
    icon: "🚀",
    stats: "1000x mais rápido",
    gradient: "from-quantum-400 to-quantum-600"
  },
  {
    title: "Inovação Científica",
    description: "Lideramos a pesquisa em computação quântica aplicada, com publicações em revistas científicas de impacto mundial.",
    icon: "🔬",
    stats: "50+ publicações",
    gradient: "from-neural-400 to-neural-600"
  },
  {
    title: "Suporte Especializado",
    description: "Nossa equipe de PhDs em física quântica e machine learning oferece suporte técnico de nível mundial 24/7.",
    icon: "🎓",
    stats: "24/7 disponível",
    gradient: "from-blue-400 to-purple-600"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a <span className="text-gradient">Quantum Learning</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos pioneiros na convergência entre computação quântica e inteligência artificial, 
            oferecendo soluções que definem o futuro da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="scroll-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                {/* Background Gradient Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-10 group-hover:opacity-20`}></div>
                
                {/* Content Card */}
                <div className="relative p-8 h-full glassmorphism rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/50 to-white/30 border border-white/30">
                    <span className="text-sm font-semibold text-gray-800">
                      {benefit.stats}
                    </span>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-quantum-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-neural-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16 scroll-fade-in">
          <div className="max-w-4xl mx-auto p-8 glassmorphism rounded-3xl border border-quantum-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para revolucionar seus dados?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se a mais de 100 empresas que já confiam na nossa tecnologia quântica
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center text-sm text-gray-500">
              <span>✓ Setup em 24h</span>
              <span>✓ ROI em 30 dias</span>
              <span>✓ Suporte especializado</span>
              <span>✓ Escalabilidade quântica</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
