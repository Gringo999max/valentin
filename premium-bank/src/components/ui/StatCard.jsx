import { motion } from 'framer-motion';

export default function StatCard({ value, label, index = 0, light = false }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`font-serif text-4xl md:text-5xl font-medium mb-2 ${
          light ? 'text-white' : 'text-gold'
        }`}
      >
        {value}
      </div>
      <div
        className={`text-sm uppercase tracking-wider ${
          light ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}
