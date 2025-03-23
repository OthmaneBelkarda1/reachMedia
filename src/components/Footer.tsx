
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-reach-purple via-reach-gold to-reach-purple"></div>
      
      <Container>
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="caption-text mb-3">CONTACTEZ-NOUS</p>
            <h2 className="section-heading mb-6">
              Prêt à transformer votre présence digitale?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons
              vous aider à atteindre vos objectifs marketing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <Mail className="h-5 w-5 text-reach-purple" />
                </div>
                <a
                  href="mailto:contact@reachmediaagency.com"
                  className="text-gray-700 hover:text-reach-purple transition-colors"
                >
                  contact@reachmediaagency.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <Phone className="h-5 w-5 text-reach-purple" />
                </div>
                <a
                  href="tel:+212010091779"
                  className="text-gray-700 hover:text-reach-purple transition-colors"
                >
                  +212 01-091779
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-reach-purple/10">
                  <MapPin className="h-5 w-5 text-reach-purple" />
                </div>
                <span className="text-gray-700">Maroc</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reach-purple focus:border-reach-purple transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reach-purple focus:border-reach-purple transition-colors"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reach-purple focus:border-reach-purple transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reach-purple focus:border-reach-purple transition-colors"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-reach-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-reach-purple/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="/lovable-uploads/2777228a-5a3e-46b6-9516-bc706d6f24c4.png"
                alt="Reach Media Agency"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {currentYear} Reach Media Agency. Tous droits réservés.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-reach-purple hover:text-white transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

export default Footer;
