
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    title: "Quantum Neural Network",
    category: "Deep Learning",
    description: "Rede neural quântica processando dados em superposição",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    tech: ["Qiskit", "TensorFlow Quantum", "Cirq"]
  },
  {
    id: 2,
    title: "Quantum SVM Visualization",
    category: "Classification",
    description: "Visualização do kernel quântico em ação",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    tech: ["PennyLane", "Sklearn", "Quantum ML"]
  },
  {
    id: 3,
    title: "Genetic Algorithm Evolution",
    category: "Optimization",
    description: "Evolução quântica de soluções otimizadas",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    tech: ["QAOA", "Qiskit Optimization", "IBM Quantum"]
  },
  {
    id: 4,
    title: "Quantum Clustering",
    category: "Unsupervised Learning",
    description: "Agrupamento quântico de dados complexos",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    tech: ["Quantum K-means", "VQE", "Quantum Annealing"]
  },
  {
    id: 5,
    title: "Reinforcement Learning Agent",
    category: "RL",
    description: "Agente quântico aprendendo estratégias ótimas",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    tech: ["Quantum Q-Learning", "VQC", "Parameterized Circuits"]
  },
  {
    id: 6,
    title: "Quantum NLP Processing",
    category: "Natural Language",
    description: "Processamento quântico de linguagem natural",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    tech: ["Quantum Embeddings", "BERT Quantum", "Language Models"]
  }
];

const categories = ["Todos", "Deep Learning", "Classification", "Optimization", "Unsupervised Learning", "RL", "Natural Language"];

export const AlgorithmGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<null | typeof galleryItems[0]>(null);

  const filteredItems = selectedCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-neural-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galeria de <span className="text-gradient">Algoritmos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore visualizações interativas dos nossos algoritmos quânticos em ação, 
            demonstrando a convergência entre arte computacional e ciência avançada.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-quantum-gradient text-white hover:opacity-90'
                  : 'border-quantum-200 text-quantum-600 hover:bg-quantum-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="scroll-fade-in group cursor-pointer overflow-hidden border-0 glassmorphism hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-quantum-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-quantum-600">
                  {item.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-quantum-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tech.slice(0, 2).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-quantum-100 text-quantum-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.tech.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{item.tech.length - 2}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-quantum-100 text-quantum-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glassmorphism border border-neural-200">
            <span className="text-neural-600 font-semibold mr-2">🔬</span>
            <span className="text-gray-700">Quer ver seus dados sendo processados assim? Entre em contato!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
