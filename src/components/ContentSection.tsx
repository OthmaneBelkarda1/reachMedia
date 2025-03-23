
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";

const ContentSection = () => {
  const contentSamples = [
    {
      id: 1,
      image: "/lovable-uploads/ced80e88-6059-44d9-9f56-a01badbe7002.png",
      category: "Études à l'étranger",
    },
    {
      id: 2, 
      image: "/lovable-uploads/e5a59d54-b515-4cd7-b322-7c39ac14ecab.png",
      category: "Publicité éducative",
    },
    {
      id: 3,
      image: "/lovable-uploads/b2f77904-d0dc-4f7c-9723-0988438c543c.png",
      category: "Marketing digital",
    },
    {
      id: 4,
      image: "/lovable-uploads/53466504-3763-40d9-87e2-1b95368cee4d.png",
      category: "Architecture",
    },
  ];

  const services = [
    "Identité de marque et logos",
    "Design graphique et illustrations",
    "Contenu pour médias sociaux",
    "Photographie professionnelle",
    "Vidéos promotionnelles",
    "Copywriting et storytelling",
  ];

  return (
    <section id="content-design" className="py-20 relative overflow-hidden">
      <BackgroundGradient variant="gold" className="opacity-10" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {contentSamples.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="caption-text mb-3">DESIGN & CRÉATION DE CONTENU</p>
            <h2 className="section-heading mb-6">
              Du contenu qui captive et convertit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous créons des designs percutants et des contenus engageants qui communiquent 
              efficacement votre message et renforcent l'identité de votre marque. Notre équipe
              d'experts combine créativité et stratégie pour des résultats optimaux.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-reach-gold/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-reach-gold" />
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-reach-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-reach-gold/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="subsection-heading mb-4">
                Du concept à la création
              </h3>
              <p className="text-gray-600 mb-6">
                Notre processus créatif associe stratégie marketing, design innovant et messages impactants pour créer des contenus qui résonnent avec votre audience cible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-reach-purple"></div>
                  <span className="text-gray-700">Recherche et analyse</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-reach-purple"></div>
                  <span className="text-gray-700">Conception créative</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-reach-purple"></div>
                  <span className="text-gray-700">Production de qualité</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-reach-purple"></div>
                  <span className="text-gray-700">Analyse des performances</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <img
                src="https://darmawanaji.com/wp-content/uploads/2018/01/mengenal-design-thinking.jpg"
                alt="Contenu créatif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContentSection;
