
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";

const WebDesignSection = () => {
  const projects = [
    {
      id: 1,
      title: "Yamearchi Architecture",
      image: "/lovable-uploads/archi1.png",
      url: "https://yamearchi.com",
    },
    {
      id: 2,
      title: "Agastudio Design",
      image: "/lovable-uploads/archi2.png",
      url: "https://www.agastudio.ma/",
    },
    {
      id: 3,
      title: "Groupe Scolaire Alqos",
      image: "/lovable-uploads/alqods.png",
      url: "https://alqos-gs.vercel.app/index.html",
    },
    {
      id: 4,
      title: "Zest Juice Co",
      image: "/lovable-uploads/zest.png",
      url: "https://www.zestjuiceco.com/",
    },
    {
      id: 5,
      title: "China VIP",
      image: "/lovable-uploads/chinavip.png",
      url: "https://www.chinavip.ma/",
    },
  ];

  const features = [
    "Sites responsive adaptés à tous les appareils",
    "Optimisation SEO pour un meilleur classement",
    "Expérience utilisateur intuitive et immersive",
    "Temps de chargement rapides",
    "Solutions e-commerce complètes",
    "Intégration des systèmes de paiement sécurisés",
  ];

  return (
    <section id="web-design" className="py-20 relative overflow-hidden">
      <BackgroundGradient variant="purple" className="opacity-10" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="caption-text mb-3">CRÉATION DE SITES WEB</p>
            <h2 className="section-heading mb-6">
              Votre site web
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous concevons des sites web qui non seulement captivent visuellement,
              mais qui sont également optimisés pour convertir vos visiteurs en
              clients fidèles. Notre approche combine design élégant, fonctionnalités
              intuitives et performances techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-reach-purple/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-reach-purple" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-reach-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-reach-purple/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
              <img
                src="https://img.freepik.com/vecteurs-libre/modele-page-chargement_125964-1232.jpg"
                alt="Web Design"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-reach-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-reach-gold/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="subsection-heading mb-4">Notre portfolio web</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations en matière de conception 
              et développement de sites web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900">{project.title}</h4>
                  <div className="mt-2 flex items-center text-sm text-reach-purple font-medium">
                    <span>Voir le site</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WebDesignSection;
