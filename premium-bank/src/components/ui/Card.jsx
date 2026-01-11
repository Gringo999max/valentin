import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white',
  dark: 'bg-navy text-white',
  cream: 'bg-cream',
  transparent: 'bg-white/5 backdrop-blur-sm',
};

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  ...props
}) {
  const baseStyles = `
    rounded-sm
    border border-gray-200
    overflow-hidden
    transition-all duration-300
  `;

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1 hover:border-gold/20'
    : '';

  const variantStyles = variant === 'dark'
    ? 'border-white/10'
    : variant === 'transparent'
    ? 'border-white/10'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${variantStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}
