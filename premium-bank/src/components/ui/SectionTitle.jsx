import { motion } from 'framer-motion';

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      className={`max-w-3xl ${alignments[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-20 bg-gold ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </motion.div>
  );
}
