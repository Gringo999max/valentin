import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gold hover:bg-gold-dark text-navy',
  secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy',
  outline: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy',
  ghost: 'bg-transparent text-gold hover:text-gold-light',
  dark: 'bg-navy hover:bg-navy-light text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium tracking-wide
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
