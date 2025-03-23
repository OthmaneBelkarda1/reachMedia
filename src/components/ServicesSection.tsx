
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Monitor, Brush, BarChart3 } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Création de Sites Web",
      description:
        "Des sites web professionnels, optimisés pour tous les appareils et conçus pour convertir vos visiteurs en clients.",
      icon: <Monitor className="h-10 w-10" />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      link: "#web-design",
    },
    {
      id: 2,
      title: "Design & Création de Contenu",
      description:
        "Conception graphique, branding, marketing de contenu et stratégies visuelles pour renforcer votre identité de marque.",
      icon: <Brush className="h-10 w-10" />,
      color: "bg-purple-50",
      textColor: "text-purple-600",
      link: "#content-design",
    },
    {
      id: 3,
      title: "Media Buying",
      description:
        "Stratégies publicitaires ciblées qui maximisent votre ROI et génèrent un flux constant de leads qualifiés.",
      icon: <BarChart3 className="h-10 w-10" />,
      color: "bg-amber-50",
      textColor: "text-amber-600",
      link: "#media-buying",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <BackgroundGradient variant="subtle" className="opacity-70" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="caption-text mb-3">NOS SERVICES</p>
            <h2 className="section-heading mb-6">
              Solutions digitales complètes pour votre entreprise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous proposons une gamme de services intégrés pour créer une présence en ligne cohérente
              et performante qui aide votre entreprise à se démarquer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={service.link}
                className="block h-full p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 ${service.color} ${service.textColor}`}
                >
                  {service.icon}
                </div>
                <h3 className="subsection-heading mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
