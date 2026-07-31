import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsArticles } from '../data/newsData';
import { PageTransition } from '../pages/PageTransition';
const newsvideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785514507/newsletter_skpbwz.mp4'

export const News: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Read category from URL (?category=Events) if present, else default to 'All'
  const categoryFromUrl = searchParams.get('category') as
    | 'All' | 'Products' | 'Events' | 'Sponsorships' | null;
  const validCategories = ['All', 'Products', 'Events', 'Sponsorships'];
  const initialCategory =
    categoryFromUrl && validCategories.includes(categoryFromUrl)
      ? categoryFromUrl
      : 'All';

  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Products' | 'Events' | 'Sponsorships'>(initialCategory);

  // Sync state if the URL param changes
  React.useEffect(() => {
    if (categoryFromUrl && validCategories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
  };

  const isSponsorships = selectedCategory === 'Sponsorships';
  const isProducts = selectedCategory === 'Products';

  // For Sponsorships, use "ZeroWind x Gobik - We Ride Flanders 2026" as hero
  const featuredArticle = isSponsorships
    ? newsArticles.find((art) => art.category === 'Sponsorships') || newsArticles[1]
    : newsArticles[0];

  // Derive grid articles
  const gridArticles = isSponsorships
    ? newsArticles.filter((art) => art.category === 'Sponsorships' && art.id !== featuredArticle.id)
    : newsArticles.slice(1).filter((article) => {
        if (selectedCategory === 'All') return true;
        return article.category === selectedCategory;
      });

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#272727] text-white font-sans relative selection:bg-[#cbf200] selection:text-black">

        {/* Categories Bar & Top Section */}
        <section className="pt-8 lg:pt-36 pb-8 pl-6 lg:pl-10 pr-8 lg:pr-16 max-w-[1600px]">
          <div className="flex items-center gap-2 text-sm font-semibold mb-8 text-neutral-400">
            <span className="text-neutral-400">Categories:</span>
            {(['All', 'Products', 'Events', 'Sponsorships'] as const).map((cat, idx, arr) => (
              <React.Fragment key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`transition-colors font-medium cursor-pointer ${
                    selectedCategory === cat
                      ? 'text-[#cbf200] font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
                {idx < arr.length - 1 && <span className="text-neutral-600 mx-0.5">/</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Featured Main Hero Card (Hidden when Products category is selected) */}
          {!isProducts && (
            <motion.div
              key={featuredArticle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-8"
            >
              {/* Featured Image */}
              <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden bg-black aspect-[4/3] w-full">
                <span className="absolute top-5 left-5 z-20 px-4 py-1 rounded-full border border-white/60 bg-black/20 text-white text-xs font-medium tracking-wide">
                  {featuredArticle.category}
                </span>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 z-10 bg-[#cbf200] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out pointer-events-none" />
              </div>

              {/* Featured Content Details */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <span className="text-xs font-bold text-neutral-400 tracking-wider block mb-3">
                    {featuredArticle.date}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black uppercase tracking-tight text-white mb-5 leading-[1.08]">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-xl">
                    {featuredArticle.summary}
                  </p>
                </div>
                <div>
                  <Link
                    to={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-[#cbf200] text-[#cbf200] font-semibold text-xs lowercase tracking-wider hover:bg-[#cbf200] hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    read news
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </section>

        {/* Grid Section: News Articles (Hidden when Products category is selected) */}
        {!isProducts && (
          <section className="pb-24 px-6 lg:px-10 max-w-[1600px] mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {gridArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link to={`/news/${article.slug}`} className="group block flex flex-col h-full cursor-pointer">
                    {/* Card Image Wrapper */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-4">
                      <span className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full border border-white/60 bg-black/20 text-white text-xs font-medium tracking-wide">
                        {article.category}
                      </span>

                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      />

                      <div className="absolute inset-0 z-10 bg-[#cbf200] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out pointer-events-none" />
                    </div>

                    {/* Card Info Container */}
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <span className="text-xs font-bold text-neutral-400 tracking-wider block mb-2">
                          {article.date}
                        </span>
                        <h2
                          style={{
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                          }}
                          className="text-xl sm:text-2xl uppercase text-white leading-snug"
                        >
                          {article.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Footer Newsletter Banner */}
        <section className="relative w-full h-[660px] overflow-hidden rounded-2xl mx-auto max-w-[1550px] my-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={newsvideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex flex-col justify-end px-8 lg:px-16 pb-16 max-w-3xl">
            <span className="text-white text-sm font-medium mb-4">
              Subscribe to Newsletter
            </span>

            <h2 className="text-white text-[32px] lg:text-[46px] font-black uppercase leading-[1.05] mb-8">
              Don't miss our events and the latest news about our products and successes.
            </h2>

            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch border border-[#cbf200] rounded-md overflow-hidden max-w-2xl"
            >
              <input
                type="email"
                required
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-neutral-300 px-4 py-3.5 outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-[#cbf200] text-black text-sm font-semibold px-8 hover:bg-[#b8dd00] transition-colors whitespace-nowrap"
              >
                Subscribe me
              </button>
            </form>

            <label className="flex items-center gap-2 mt-4 text-white text-xs cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-4 h-4 accent-[#cbf200] cursor-pointer"
              />
              <span>
                Dichiaro di aver letto e di accettare il{' '}
                <a href="/privacy" className="underline hover:text-[#cbf200] transition-colors">
                  trattamento dei dati personali
                </a>.
              </span>
            </label>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};