
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WebDesignSection from "@/components/WebDesignSection";
import ContentSection from "@/components/ContentSection";
import MediaBuyingSection from "@/components/MediaBuyingSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest("a")?.getAttribute("href");
      
      if (href?.startsWith("#") && href !== "#") {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-reach-purple z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WebDesignSection />
        <ContentSection />
        <MediaBuyingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
