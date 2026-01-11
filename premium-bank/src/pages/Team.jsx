import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { PageHero, TeamCard } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import { teamMembers, networkRegions, partnerTypes } from '../data/team';

export default function Team() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Leadership Team"
        subtitle="Decades of experience from leading global institutions"
        backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Team Members */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Our Professionals"
            subtitle="Senior bankers with deep expertise across sectors and transaction types"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Network */}
      <section className="py-24 bg-cream">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Global Network"
                subtitle="Relationships that extend our reach"
                align="left"
                className="mb-8"
              />

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  While we are a boutique firm, our network extends globally
                  through long-standing relationships with partner organizations
                  and individuals across major financial centers.
                </p>
                <p>
                  These relationships allow us to access opportunities, buyers,
                  and capital sources worldwide while maintaining the personalized
                  service that defines our approach.
                </p>
                <p>
                  Our network includes relationships with global investment banks,
                  private equity firms, law firms, accounting firms, and family
                  offices across multiple jurisdictions.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Partner Types
                </h4>
                <div className="flex flex-wrap gap-2">
                  {partnerTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Regions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                Regional Presence
              </h4>

              <div className="space-y-6">
                {networkRegions.map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 border border-gray-200"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-gold" />
                      <h3 className="font-serif text-lg font-medium text-navy">
                        {region.region}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city) => (
                        <span
                          key={city}
                          className="text-sm text-gray-600"
                        >
                          {city}
                          {region.cities.indexOf(city) < region.cities.length - 1 && (
                            <span className="mx-2 text-gray-300">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Careers hint */}
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
              Join Our Team
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We are always interested in hearing from talented professionals
              who share our commitment to excellence and client service.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
