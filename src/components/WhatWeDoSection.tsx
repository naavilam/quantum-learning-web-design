
import { useState, useEffect, useRef } from "react";
import { Brain, Cpu, Network, Shuffle, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhatWeDoSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Brain,
      title: "Redes Neurais Quânticas",
      description: "Implementamos redes neurais que aproveitam propriedades quânticas para processamento paralelo massivo e aprendizado exponencialmente mais rápido.",
      features: ["Superposição quântica", "Processamento paralelo", "Aprendizado acelerado"]
    },
    {
      icon: Target,
      title: "Classificação Quantum KNN",
      description: "Algoritmos de classificação que utilizam distâncias quânticas para identificar padrões em espaços de alta dimensionalidade com precisão superior.",
      features: ["Espaços quânticos", "Alta precisão", "Dimensionalidade elevada"]
    },
    {
      icon: Shuffle,
      title: "Agrupamento QMeans",
      description: "Clustering quântico que explora emaranhamento para descobrir estruturas ocultas em dados complexos e multidimensionais.",
      features: ["Emaranhamento quântico", "Estruturas ocultas", "Dados complexos"]
    },
    {
      icon: Network,
      title: "Modelos Generativos Quânticos",
      description: "Criação de conteúdo através de GANs quânticas que geram dados sintéticos com fidelidade e diversidade inéditas.",
      features: ["GANs quânticas", "Alta fidelidade", "Diversidade máxima"]
    },
    {
      icon: Zap,
      title: "Reinforcement Learning Quântico",
      description: "Agentes inteligentes que aprendem através de recompensas quânticas, otimizando estratégias em ambientes complexos.",
      features: ["Recompensas quânticas", "Otimização avançada", "Ambientes complexos"]
    },
    {
      icon: Cpu,
      title: "Otimização Combinatória",
      description: "Soluções para problemas NP-difíceis usando algoritmos quânticos que encontram soluções ótimas em tempo exponencialmente reduzido.",
      features: ["Problemas NP-difíceis", "Soluções ótimas", "Tempo reduzido"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-que-fazemos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            O que Fazemos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos soluções de IA quântica que revolucionam a forma como processamos, 
            analisamos e compreendemos dados complexos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm transform hover:-translate-y-2 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-purple-600 bg-purple-50 rounded-full px-3 py-1 inline-block mr-2">
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
