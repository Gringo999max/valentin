import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Users, Globe } from 'lucide-react';
import { Hero, ServiceCard, FeaturedTransaction } from '../components/sections';
import { Container, SectionTitle, StatCard, Button } from '../components/ui';
import { company } from '../data/company';
import { servicesOverview, whyChooseUs } from '../data/services';
import { featuredTransaction } from '../data/transactions';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={company.name}
        subtitle={company.tagline}
        primaryCTA={{ label: 'Our Services', href: '/services' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
        showScrollIndicator={true}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* About Section (Brief) */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                Independent Advisory for Discerning Clients
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Udacha Capital is a boutique investment bank providing independent
                  advisory services to companies, shareholders, and investors across
                  a range of industries and transaction types.
                </p>
                <p>
                  Founded by experienced professionals from leading global investment
                  banks, we combine institutional-quality capabilities with the
                  personalized attention of a focused advisory firm.
                </p>
                <p>
                  Our clients trust us with their most important financial decisions
                  because we deliver thoughtful advice, rigorous analysis, and
                  exceptional execution.
                </p>
              </div>
              <Button to="/about" variant="outline" className="mt-8">
                Learn More About Us
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
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <Container>
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive advisory solutions tailored to your strategic objectives"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesOverview.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy">
        <Container>
          <SectionTitle
            title="Why Udacha Capital"
            subtitle="What distinguishes our approach"
            light
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const icons = { Scale, Users, Globe };
              const Icon = icons[item.icon] || item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured Transaction */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Proven Results"
                subtitle="Selected transactions demonstrating our expertise across sectors and deal types"
                align="left"
                className="mb-8"
              />
              <Button to="/track-record" variant="outline">
                View Track Record
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <FeaturedTransaction transaction={featuredTransaction} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We welcome confidential inquiries from companies, shareholders,
              and investors seeking independent advisory services.
            </p>
            <Button to="/contact" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
