import { motion } from 'framer-motion';
import { PageHero, ServiceDetailCard } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import { servicesDetailed } from '../data/services';

export default function Services() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Comprehensive Advisory Solutions"
        subtitle="Expert guidance across the transaction lifecycle"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Our Advisory Services"
            subtitle="We provide comprehensive advisory services tailored to your strategic objectives, combining deep expertise with personalized attention."
            className="mb-16"
          />

          {/* Service Blocks */}
          <div className="space-y-24">
            {servicesDetailed.map((service, sectionIndex) => {
              const Icon = service.icon;
              const isEven = sectionIndex % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      isEven ? '' : 'lg:grid-flow-dense'
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-14 h-14 bg-gold/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-gold" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy">
                          {service.title}
                        </h2>
                      </div>

                      <div className="prose prose-lg text-gray-600 space-y-4 mb-8">
                        {service.description.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="bg-cream p-6 border-l-4 border-gold">
                        <h4 className="font-medium text-navy mb-2">Our Approach</h4>
                        <p className="text-gray-600 text-sm">{service.approach}</p>
                      </div>
                    </div>

                    {/* Sub-services */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                        Service Capabilities
                      </h3>
                      <div className="space-y-3">
                        {service.subServices.map((subService, index) => (
                          <ServiceDetailCard
                            key={subService.title}
                            subService={subService}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {sectionIndex < servicesDetailed.length - 1 && (
                    <div className="mt-24 h-px bg-gray-200" />
                  )}
                </motion.div>
              );
            })}
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
              Discuss Your Transaction
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Every engagement begins with a confidential conversation to
              understand your objectives and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button to="/track-record" variant="secondary" size="lg">
                View Track Record
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
