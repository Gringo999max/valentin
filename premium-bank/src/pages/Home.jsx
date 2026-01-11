import { motion } from 'framer-motion';
import { ArrowRight, Scale, Users, Globe } from 'lucide-react';
import { Hero, ServiceCard, FeaturedTransaction } from '../components/sections';
import { Container, SectionTitle, StatCard, Button } from '../components/ui';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../i18n/translations';
import { company } from '../data/company';
import { servicesOverview, whyChooseUs } from '../data/services';
import { featuredTransaction } from '../data/transactions';

export default function Home() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Udacha Capital"
        subtitle={t(translations.home.tagline)}
        primaryCTA={{ label: t(translations.home.ourServices), href: '/services' }}
        secondaryCTA={{ label: t(translations.common.contactUs), href: '/contact' }}
        showScrollIndicator={true}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* About Section (Brief) */}
      <section className={`py-24 theme-bg-white ${isDark ? 'bg-white' : 'bg-navy-light'}`}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                {t(translations.home.aboutUs)}
              </span>
              <h2 className={`font-serif text-3xl md:text-4xl font-medium mb-6 ${isDark ? 'text-navy' : 'text-white'}`}>
                {t(translations.home.aboutTitle)}
              </h2>
              <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                <p>{t(translations.home.aboutText1)}</p>
                <p>{t(translations.home.aboutText2)}</p>
                <p>{t(translations.home.aboutText3)}</p>
              </div>
              <Button to="/about" variant="outline" className="mt-8">
                {t(translations.common.learnMore)}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              {company.stats.map((stat, index) => (
                <StatCard
                  key={stat.label.en}
                  value={stat.value}
                  label={t(stat.label)}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className={`py-24 theme-bg-cream ${isDark ? 'bg-cream' : 'bg-navy-dark'}`}>
        <Container>
          <SectionTitle
            title={t(translations.home.servicesTitle)}
            subtitle={t(translations.home.servicesSubtitle)}
            className="mb-16"
            light={!isDark}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesOverview.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className={`py-24 ${isDark ? 'bg-navy' : 'bg-cream'}`}>
        <Container>
          <SectionTitle
            title={t(translations.home.whyUsTitle)}
            subtitle={t(translations.home.whyUsSubtitle)}
            light={isDark}
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const icons = { Scale, Users, Globe };
              const Icon = icons[item.icon] || item.icon;

              return (
                <motion.div
                  key={item.title.en}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-navy/10'}`}>
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className={`font-serif text-xl font-medium mb-3 ${isDark ? 'text-white' : 'text-navy'}`}>
                    {t(item.title)}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t(item.description)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured Transaction */}
      <section className={`py-24 theme-bg-white ${isDark ? 'bg-white' : 'bg-navy-light'}`}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title={t(translations.home.provenResults)}
                subtitle={t(translations.home.provenResultsSubtitle)}
                align="left"
                className="mb-8"
                light={!isDark}
              />
              <Button to="/track-record" variant="outline">
                {t(translations.home.viewTrackRecord)}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <FeaturedTransaction transaction={featuredTransaction} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={`py-24 theme-bg-cream ${isDark ? 'bg-cream' : 'bg-navy-dark'}`}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className={`font-serif text-3xl md:text-4xl font-medium mb-6 ${isDark ? 'text-navy' : 'text-white'}`}>
              {t(translations.home.ctaTitle)}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
              {t(translations.home.ctaText)}
            </p>
            <Button to="/contact" size="lg">
              {t(translations.common.contactUs)}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
