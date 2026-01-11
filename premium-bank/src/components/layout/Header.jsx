import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../i18n/translations';

const navigation = [
  { name: translations.nav.about, href: '/about' },
  { name: translations.nav.services, href: '/services' },
  { name: translations.nav.trackRecord, href: '/track-record' },
  { name: translations.nav.team, href: '/team' },
  { name: translations.nav.insights, href: '/insights' },
  { name: translations.nav.contact, href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage || isMobileMenuOpen
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide">
                Udacha Capital
              </span>
              <span className="text-[10px] sm:text-xs text-gold tracking-[0.2em] uppercase">
                {t(translations.footer.investmentBanking)}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {t(item.name)}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 text-white/80 hover:text-gold transition-colors duration-200 border border-white/20 hover:border-gold/50"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-gold transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile: Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/80 hover:text-gold transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-gold transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
