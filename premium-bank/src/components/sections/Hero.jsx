import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button, Container } from '../ui';

export default function Hero({
  title,
  subtitle,
  tagline,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
  fullHeight = true,
  overlay = true,
  backgroundImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
}) {
  return (
    <section
      className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[70vh]'} flex items-center`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        )}
      </div>

      {/* Content */}
      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
            >
              {tagline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 font-light"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Button to={primaryCTA.href} variant="primary" size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button to={secondaryCTA.href} variant="secondary" size="lg">
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export function PageHero({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=2000&q=80',
}) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      fullHeight={false}
      backgroundImage={backgroundImage}
    />
  );
}
