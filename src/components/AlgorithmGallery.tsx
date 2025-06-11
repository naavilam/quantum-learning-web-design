
import { useState, useEffect, useRef } from "react";
import { Filter, X, ZoomIn } from "lucide-react";

const AlgorithmGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const filters = [
    { id: "todos", label: "Todos" },
    { id: "clustering", label: "Clustering" },
    { id: "qnn", label: "QNN" },
    { id: "classificacao", label: "Classificação" },
    { id: "geracao", label: "Geração" },
    { id: "otimizacao", label: "Otimização" }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Rede Neural Quântica Deep",
      category: "qnn",
      description: "Arquitetura multicamadas com gates quânticos variacionais",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      tags: ["QNN", "Deep Learning", "Variational"]
    },
    {
      id: 2,
      title: "Clustering Quântico K-Means",
      category: "clustering",
      description: "Agrupamento de dados usando superposição quântica",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      tags: ["Clustering", "K-Means", "Superposição"]
    },
    {
      id: 3,
      title: "Classificador SVM Quântico",
      category: "classificacao",
      description: "Support Vector Machine com kernel quântico",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
      tags: ["SVM", "Classificação", "Kernel Quântico"]
    },
    {
      id: 4,
      title: "GAN Quântica Generativa",
      category: "geracao",
      description: "Geração de dados sintéticos com circuitos quânticos",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      tags: ["GAN", "Geração", "Dados Sintéticos"]
    },
    {
      id: 5,
      title: "Otimização Combinatória QAOA",
      category: "otimizacao",
      description: "Quantum Approximate Optimization Algorithm",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop",
      tags: ["QAOA", "Otimização", "Combinatória"]
    },
    {
      id: 6,
      title: "Ensemble Quântico Híbrido",
      category: "clustering",
      description: "Combinação de algoritmos clássicos e quânticos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      tags: ["Ensemble", "Híbrido", "Machine Learning"]
    }
  ];

  const filteredItems = selectedFilter === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, itemIndex])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <section id="galeria" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Galeria de Algoritmos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa coleção de algoritmos quânticos em ação, cada um representando uma fronteira 
            na computação inteligente
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid da galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              className={`group cursor-pointer transition-all duration-500 ${
                visibleItems.includes(index)
                  ? 'animate-fade-in opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn size={32} className="text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de imagem expandida */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                {(() => {
                  const item = galleryItems.find(item => item.id === selectedImage);
                  return item ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-96 object-cover"
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4 text-gray-800">{item.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlgorithmGallery;
