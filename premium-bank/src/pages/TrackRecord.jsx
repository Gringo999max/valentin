import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageHero, TransactionCard } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import { transactions, transactionFilters } from '../data/transactions';

export default function TrackRecord() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [industryFilter, setIndustryFilter] = useState('All');

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesType = typeFilter === 'All' || transaction.type === typeFilter;
      const matchesIndustry =
        industryFilter === 'All' || transaction.industry === industryFilter;
      return matchesType && matchesIndustry;
    });
  }, [typeFilter, industryFilter]);

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Proven Track Record"
        subtitle="Selected transactions across industries and geographies"
        backgroundImage="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Filters & Transactions */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Our Transactions"
            subtitle="A selection of completed transactions demonstrating our expertise"
            className="mb-12"
          />

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-4 mb-12 justify-center"
          >
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 self-center mr-2">Type:</span>
              {transactionFilters.types.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-2 text-sm transition-all duration-200 ${
                    typeFilter === type
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 self-center mr-2">Industry:</span>
              {transactionFilters.industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setIndustryFilter(industry)}
                  className={`px-4 py-2 text-sm transition-all duration-200 ${
                    industryFilter === industry
                      ? 'bg-gold text-navy'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Transaction count */}
          <p className="text-center text-gray-500 mb-8">
            Showing {filteredTransactions.length} transaction
            {filteredTransactions.length !== 1 ? 's' : ''}
          </p>

          {/* Transactions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTransactions.map((transaction, index) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                index={index}
              />
            ))}
          </div>

          {/* No results */}
          {filteredTransactions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">
                No transactions match the selected filters.
              </p>
              <button
                onClick={() => {
                  setTypeFilter('All');
                  setIndustryFilter('All');
                }}
                className="mt-4 text-gold hover:text-gold-dark transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Confidentiality Note */}
      <section className="py-16 bg-cream">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              Due to confidentiality obligations, we are unable to disclose the
              names of our clients or full transaction details in most cases.
              The transactions shown above represent a selection of our completed
              engagements. Additional references are available upon request under
              appropriate confidentiality arrangements.
            </p>
          </motion.div>
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
              We welcome the opportunity to discuss how our experience can
              benefit your situation.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
