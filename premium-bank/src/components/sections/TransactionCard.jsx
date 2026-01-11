import { motion } from 'framer-motion';
import { Badge } from '../ui';

export default function TransactionCard({ transaction, index = 0 }) {
  const typeColors = {
    'M&A': 'gold',
    'Capital Raising': 'navy',
    'Restructuring': 'outline',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <Badge variant={typeColors[transaction.type] || 'default'}>
          {transaction.type}
        </Badge>
        <span className="text-sm text-gray-500">{transaction.year}</span>
      </div>

      <p className="text-navy font-medium mb-4 leading-relaxed">
        {transaction.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-gold font-serif text-xl font-medium">
          {transaction.amount}
        </span>
        <div className="flex items-center space-x-4">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {transaction.industry}
          </span>
        </div>
      </div>

      <div className="mt-3">
        <span className="text-xs text-gray-400">{transaction.role}</span>
      </div>
    </motion.div>
  );
}

export function FeaturedTransaction({ transaction }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-navy text-white p-8 md:p-12"
    >
      <Badge variant="outline" className="mb-6">
        Featured Transaction
      </Badge>

      <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
        {transaction.headline}
      </h3>

      <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
        {transaction.description}
      </p>

      <div className="flex items-center space-x-8">
        <div>
          <span className="text-gold font-serif text-3xl font-medium">
            {transaction.amount}
          </span>
          <span className="block text-xs text-gray-400 uppercase tracking-wider mt-1">
            Transaction Value
          </span>
        </div>
        <div>
          <span className="text-white font-medium">{transaction.year}</span>
          <span className="block text-xs text-gray-400 uppercase tracking-wider mt-1">
            Year
          </span>
        </div>
      </div>
    </motion.div>
  );
}
