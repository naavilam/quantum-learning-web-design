
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { AlgorithmGallery } from '../components/AlgorithmGallery';
import { Footer } from '../components/Footer';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Intersection Observer para animações de scroll
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observar elementos com classe scroll-fade-in
    const elementsToObserve = document.querySelectorAll('.scroll-fade-in');
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <AlgorithmGallery />
      <Footer />
    </div>
  );
};

export default Index;
