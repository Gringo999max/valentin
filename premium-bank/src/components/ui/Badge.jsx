const variants = {
  default: 'bg-gray-100 text-gray-800',
  gold: 'bg-gold/10 text-gold-dark',
  navy: 'bg-navy text-white',
  outline: 'border border-gold text-gold bg-transparent',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        text-xs font-medium uppercase tracking-wider
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
