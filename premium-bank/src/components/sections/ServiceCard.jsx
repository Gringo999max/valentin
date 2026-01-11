import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

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
        className="block h-full bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1"
      >
        <div className="w-14 h-14 bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
          <Icon className="w-7 h-7 text-gold" />
        </div>

        <h3 className="font-serif text-xl font-medium text-navy mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        <span className="inline-flex items-center text-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
          Learn more
          <ArrowRight size={16} className="ml-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export function ServiceDetailCard({ subService, index = 0 }) {
  const Icon = subService.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-start space-x-4 p-4 bg-gray-50 hover:bg-gold/5 transition-colors duration-200"
    >
      <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <h4 className="font-medium text-navy mb-1">{subService.title}</h4>
        <p className="text-sm text-gray-600">{subService.description}</p>
      </div>
    </motion.div>
  );
}
