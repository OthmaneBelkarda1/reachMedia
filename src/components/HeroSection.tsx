
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer, Code, Brush, BarChart3 } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <BackgroundGradient
        variant="mixed"
        animate={true}
        className="opacity-20"
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="caption-text mb-3">REACH MEDIA AGENCY</p>
              <h1 className="hero-heading text-balance mb-6">
                Transformez votre présence numérique avec excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Spécialistes en création de sites web, design, contenu et media buying
                pour propulser votre marque vers de nouveaux sommets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-reach-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-reach-purple/25 hover:-translate-y-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-reach-purple font-medium rounded-lg border border-reach-purple/20 hover:border-reach-purple transition-all shadow hover:shadow-lg hover:-translate-y-1"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Nos services
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <MousePointer className="h-5 w-5 text-reach-purple" />
                </div>
                <p className="font-medium">Sites Web</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <Code className="h-5 w-5 text-reach-purple" />
                </div>
                <p className="font-medium">Développement</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <Brush className="h-5 w-5 text-reach-purple" />
                </div>
                <p className="font-medium">Design</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <BarChart3 className="h-5 w-5 text-reach-purple" />
                </div>
                <p className="font-medium">Media Buying</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <img
                src="https://www.designferia.com/sites/default/files/styles/article_images__s640_/public/field/image/bureau-design-office-ameublement.jpg?itok=h6ZDJx_v"
                alt="Reach Media Agency"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md rounded-full bg-reach-purple/30 blur-[100px] -z-10"></div>
            
            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl p-3 border border-gray-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <img
                src="https://www.designferia.com/sites/default/files/styles/article_images__s640_/public/field/image/bureau-design-office-ameublement.jpg?itok=h6ZDJx_v"
                alt="Logo design"
                className="w-16 h-16 rounded object-cover"
              />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-xl p-3 border border-gray-100"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <img
                src="https://www.designferia.com/sites/default/files/styles/article_images__s640_/public/field/image/bureau-design-office-ameublement.jpg?itok=h6ZDJx_v"
                alt="Web design"
                className="w-16 h-16 rounded object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
