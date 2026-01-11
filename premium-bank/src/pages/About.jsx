import { motion } from 'framer-motion';
import { Shield, Award, Lock, Handshake, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import { company } from '../data/company';

const principleIcons = {
  Shield: Shield,
  Award: Award,
  Lock: Lock,
  Handshake: Handshake,
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Built on Trust. Driven by Results."
        subtitle="Independent advisory for your most important decisions"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Mission & Philosophy */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-8">
                A Different Kind of Investment Bank
              </h2>

              <div className="prose prose-lg text-gray-600 space-y-6">
                {company.about.mission.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-cream">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-8">
                Experience Meets Independence
              </h2>

              <div className="space-y-6 text-gray-600">
                {company.about.philosophy.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-navy/5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80"
                  alt="Premium office interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 -z-10" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-24 bg-navy">
        <Container>
          <SectionTitle
            title="Our Principles"
            subtitle="The values that guide every engagement"
            light
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.principles.map((principle, index) => {
              const Icon = principleIcons[principle.icon] || Shield;

              return (
                <motion.div
                  key={principle.title}
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
                    {principle.title}
                  </h3>
                  <p className="text-gray-400">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Founder Quote */}
      <section className="py-24 bg-white">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl text-navy leading-relaxed mb-8 italic">
              "{company.founder.quote}"
            </blockquote>
            <div>
              <p className="font-medium text-navy">{company.founder.name}</p>
              <p className="text-gray-500 text-sm">{company.founder.title}</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Approach / Process */}
      <section className="py-24 bg-cream">
        <Container>
          <SectionTitle
            title="Our Approach"
            subtitle="A disciplined process that delivers results"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < company.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 -translate-y-1/2 z-0">
                    <ArrowRight
                      size={16}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                )}

                <div className="relative z-10 bg-white p-6 border border-gray-200 h-full">
                  <div className="w-12 h-12 bg-gold text-navy font-serif text-xl font-medium flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Learn about the experienced professionals behind Udacha Capital.
            </p>
            <Button to="/team" variant="primary" size="lg">
              View Leadership Team
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
