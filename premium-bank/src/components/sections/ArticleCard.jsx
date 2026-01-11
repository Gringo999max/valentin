import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '../ui';

export default function ArticleCard({ article, index = 0, featured = false }) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <Link
          to={`/insights/${article.slug}`}
          className="block bg-navy text-white p-8 md:p-12 hover:bg-navy-light transition-colors duration-300"
        >
          <Badge variant="outline" className="mb-4">
            {article.category}
          </Badge>

          <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 group-hover:text-gold transition-colors duration-200">
            {article.title}
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            {article.preview}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{article.date}</span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {article.readTime}
              </span>
            </div>

            <span className="inline-flex items-center text-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
              Read article
              <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/insights/${article.slug}`}
        className="block bg-white border border-gray-200 p-6 h-full hover:shadow-lg hover:border-gold/20 transition-all duration-300"
      >
        <Badge variant="gold" className="mb-4">
          {article.category}
        </Badge>

        <h3 className="font-serif text-xl font-medium text-navy mb-3 group-hover:text-gold transition-colors duration-200">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.preview}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>{article.date}</span>
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {article.readTime}
            </span>
          </div>

          <span className="inline-flex items-center text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
