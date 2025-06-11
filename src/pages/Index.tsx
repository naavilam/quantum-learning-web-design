
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AlgorithmGallery from "@/components/AlgorithmGallery";
import Footer from "@/components/Footer";

const Index = () => {
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
