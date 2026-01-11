import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { PageHero, ArticleCard } from '../components/sections';
import { Container, SectionTitle, Button } from '../components/ui';
import { articles, categories } from '../data/articles';

export default function Insights() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticles = useMemo(() => {
    return articles.filter((a) => a.featured);
  }, []);

  const filteredArticles = useMemo(() => {
    if (categoryFilter === 'All') {
      return articles.filter((a) => !a.featured);
    }
    return articles.filter(
      (a) => a.category === categoryFilter && !a.featured
    );
  }, [categoryFilter]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Insights & Perspectives"
        subtitle="Our views on markets, transactions, and opportunities"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Featured Articles */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            title="Featured Insights"
            subtitle="Our latest thinking on markets and transactions"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </Container>
      </section>

      {/* All Articles */}
      <section className="py-24 bg-cream">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              title="All Insights"
              align="left"
              className="mb-6 md:mb-0"
            />

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-2 text-sm transition-all duration-200 ${
                    categoryFilter === category
                      ? 'bg-navy text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">
                No articles in this category yet.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-navy">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-white/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-gold" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to our quarterly insights and market commentary.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/20 border border-gold/30 p-6"
              >
                <p className="text-white">
                  Thank you for subscribing. You will receive our next insight
                  directly to your inbox.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-gray-500 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
