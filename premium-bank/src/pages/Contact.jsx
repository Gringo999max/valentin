import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Calendar, Linkedin } from 'lucide-react';
import { PageHero } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import Input, { Textarea, Select, Checkbox } from '../components/ui/Input';
import { company, inquiryTypes } from '../data/company';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Let's Start a Conversation"
        subtitle="Confidential inquiries welcome"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Send Us a Message"
                subtitle="We typically respond within one business day"
                align="left"
                className="mb-8"
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-8 text-center"
                >
                  <h3 className="font-serif text-xl font-medium text-navy mb-2">
                    Thank You
                  </h3>
                  <p className="text-gray-600">
                    Your message has been received. A member of our team will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-gold hover:text-gold-dark transition-colors text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="Your name"
                      error={errors.name?.message}
                      {...register('name', { required: 'Name is required' })}
                    />
                    <Input
                      label="Company"
                      placeholder="Your company"
                      error={errors.company?.message}
                      {...register('company')}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    <Input
                      label="Phone (optional)"
                      type="tel"
                      placeholder="+7 (___) ___-____"
                      {...register('phone')}
                    />
                  </div>

                  <Select
                    label="Nature of Inquiry"
                    options={inquiryTypes}
                    error={errors.inquiryType?.message}
                    {...register('inquiryType', {
                      required: 'Please select an inquiry type',
                    })}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Please describe how we can assist you..."
                    rows={6}
                    error={errors.message?.message}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message must be at least 20 characters',
                      },
                    })}
                  />

                  <Checkbox
                    label="I consent to the processing of my personal data in accordance with the Privacy Policy"
                    error={errors.consent?.message}
                    {...register('consent', {
                      required: 'Please accept the privacy policy',
                    })}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-navy text-white p-8 md:p-10 h-full">
                <h3 className="font-serif text-2xl font-medium mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office</h4>
                      <p className="text-gray-400 text-sm">
                        {company.contact.address.line1}
                        <br />
                        {company.contact.address.line2}
                        <br />
                        {company.contact.address.city},{' '}
                        {company.contact.address.country}{' '}
                        {company.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="text-gray-400 text-sm hover:text-gold transition-colors"
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="text-gray-400 text-sm hover:text-gold transition-colors"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office Hours</h4>
                      <p className="text-gray-400 text-sm">
                        {company.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-8" />

                {/* Alternative Contact */}
                <div className="space-y-4">
                  <h4 className="font-medium">Alternative Ways to Connect</h4>

                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Schedule a call</span>
                  </a>

                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 grayscale">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2621726576745!2d37.5384!3d55.7494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ0JzU3LjgiTiAzN8KwMzInMTguMiJF!5e0!3m2!1sen!2sru!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
        {/* Overlay with address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-8 bg-white p-6 shadow-xl max-w-sm"
        >
          <h4 className="font-serif text-lg font-medium text-navy mb-2">
            {company.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {company.contact.address.line1}, {company.contact.address.line2}
            <br />
            {company.contact.address.city}, {company.contact.address.country}
          </p>
        </motion.div>
      </section>
    </>
  );
}
