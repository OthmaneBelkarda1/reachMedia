
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart } from "lucide-react";
import { BackgroundGradient } from "./BackgroundGradient";
import { StatsCard } from "./StatsCard";

const MediaBuyingSection = () => {
  const stats = [
    {
      id: 1,
      value: "+9 000",
      label: "Leads générés",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: 2,
      value: "+550",
      label: "Inscriptions confirmées",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      id: 3,
      value: "+21M DH",
      label: "Chiffre d'affaires estimé",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      id: 4,
      value: "+700%",
      label: "ROI moyen",
      icon: <BarChart className="h-5 w-5" />,
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Université Islamique de Tanger",
      stats: "7 000 leads générés (coût par lead: 4-5 DH)",
      results: "200 inscriptions confirmées, 20M DH de CA",
      roi: "ROI: 13 233%",
    },
    {
      id: 2,
      title: "École El Qods",
      stats: "140 leads générés avec un coût par lead de $1.44",
      results: "Taux d'engagement élevé",
      roi: "ROI: 300%",
    },
    {
      id: 3,
      title: "Algorithmics Rabat",
      stats: "313 leads générés (coût par lead: $0.88)",
      results: "Portée: 200K+ personnes",
      roi: "ROI exceptionnel",
    },
  ];

  return (
    <section id="media-buying" className="py-20 relative overflow-hidden">
      <BackgroundGradient variant="mixed" className="opacity-10" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="caption-text mb-3">MEDIA BUYING</p>
            <h2 className="section-heading mb-6">
              Des campagnes publicitaires qui génèrent des résultats tangibles
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre approche data-driven du média buying maximise votre retour sur investissement
              en ciblant précisément votre audience idéale. Nous créons et optimisons
              des campagnes qui convertissent et augmentent votre chiffre d'affaires.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Plateformes publicitaires
                </h4>
                <p className="text-gray-600">
                  Facebook, Instagram, Google Ads, YouTube, TikTok, LinkedIn
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Types de campagnes
                </h4>
                <p className="text-gray-600">
                  Acquisition de clients, Génération de leads, Notoriété de marque, 
                  Retargeting, Conversion e-commerce
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Notre approche
                </h4>
                <p className="text-gray-600">
                  Stratégie personnalisée, ciblage précis, tests A/B, analyse continue et optimisation
                </p>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-reach-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-reach-purple/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Booster vos campagnes
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
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
              <img
                src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/8251604/cover_image/regular_1708x683/Untitled-b91bdf8e478c7dbafa86afd20f3b519a.png"
                alt="Media Buying"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Résultats qui font la différence
                </h3>
                <p className="text-white/80">
                  Nos campagnes publicitaires génèrent un ROI mesurable
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="subsection-heading mb-4">Nos performances</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les résultats obtenus pour nos clients grâce à nos stratégies
            de media buying optimisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatsCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-lg p-6"
            >
              <h4 className="card-heading mb-4">{study.title}</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 text-green-700 rounded-lg">
                  {study.stats}
                </div>
                <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                  {study.results}
                </div>
                <div className="p-3 bg-purple-50 text-purple-700 rounded-lg">
                  {study.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MediaBuyingSection;
