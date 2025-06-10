
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const algorithms = [
  {
    title: "Redes Neurais Quânticas",
    description: "Combinamos computação quântica com deep learning para criar redes neurais exponencialmente mais poderosas.",
    icon: "🧠",
    features: ["Processamento paralelo quântico", "Convergência ultra-rápida", "Capacidade de superposição"]
  },
  {
    title: "Algoritmos Genéticos Quânticos",
    description: "Otimização evolutiva aprimorada com princípios quânticos para resolver problemas complexos.",
    icon: "🧬",
    features: ["Seleção quântica", "Mutação probabilística", "Convergência global"]
  },
  {
    title: "Support Vector Machines Quânticas",
    description: "Classificação e regressão em espaços de features quânticos de alta dimensionalidade.",
    icon: "⚡",
    features: ["Kernel quântico", "Separação não-linear", "Eficiência exponencial"]
  },
  {
    title: "Clustering Quântico",
    description: "Agrupamento de dados usando algoritmos como Quantum K-means e QAOA clustering.",
    icon: "🔍",
    features: ["Superposição de estados", "Agrupamento simultâneo", "Detecção de padrões complexos"]
  },
  {
    title: "Reinforcement Learning Quântico",
    description: "Aprendizado por reforço acelerado através de exploração quântica do espaço de ações.",
    icon: "🎯",
    features: ["Exploração quântica", "Q-learning otimizado", "Convergência acelerada"]
  },
    {
    title: "Processamento de Linguagem Natural Quântica",
    description: "Análise semântica e compreensão de linguagem usando embeddings quânticos.",
    icon: "💬",
    features: ["Embeddings quânticos", "Análise contextual", "Compreensão semântica avançada"]
  }
];

export const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-quantum-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que <span className="text-gradient">Fazemos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementamos os algoritmos de machine learning mais avançados, 
            potencializados pela computação quântica para revolucionar sua abordagem aos dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {algorithms.map((algorithm, index) => (
            <Card 
              key={algorithm.title}
              className="scroll-fade-in hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 glassmorphism hover:quantum-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {algorithm.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {algorithm.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {algorithm.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {algorithm.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-quantum-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 scroll-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glassmorphism border border-quantum-200">
            <span className="text-quantum-600 font-semibold mr-2">+20</span>
            <span className="text-gray-700">algoritmos adicionais em desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  );
};
