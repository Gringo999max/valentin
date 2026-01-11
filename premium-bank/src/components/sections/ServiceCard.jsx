import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../i18n/translations';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={service.link}
        className={`block h-full border p-8 transition-all duration-300 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 ${
          isDark ? 'bg-white border-gray-200' : 'bg-navy-light border-gray-700'
        }`}
      >
        <div className={`w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 ${
          isDark ? 'bg-navy/5' : 'bg-white/10'
        }`}>
          <Icon className="w-7 h-7 text-gold" />
        </div>

        <h3 className={`font-serif text-xl font-medium mb-3 ${isDark ? 'text-navy' : 'text-white'}`}>
          {t(service.title)}
        </h3>

        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
          {t(service.shortDescription)}
        </p>

        <span className="inline-flex items-center text-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
          {t(translations.common.learnMore)}
          <ArrowRight size={16} className="ml-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export function ServiceDetailCard({ subService, index = 0 }) {
  const Icon = subService.icon;
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex items-start space-x-4 p-4 transition-colors duration-200 ${
        isDark ? 'bg-gray-50 hover:bg-gold/5' : 'bg-navy-light hover:bg-gold/10'
      }`}
    >
      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
        isDark ? 'bg-white' : 'bg-navy'
      }`}>
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <h4 className={`font-medium mb-1 ${isDark ? 'text-navy' : 'text-white'}`}>
          {t(subService.title)}
        </h4>
        <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
          {t(subService.description)}
        </p>
      </div>
    </motion.div>
  );
}
