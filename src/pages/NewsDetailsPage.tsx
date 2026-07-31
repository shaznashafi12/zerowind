import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu } from 'lucide-react';
import { newsArticles } from '../data/newsData';
import { PageTransition } from '../pages/PageTransition';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = newsArticles.find((a) => a.slug === slug || a.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#1c1c1c] text-white flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/news" className="text-[#cbf200] underline">Back to News</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#1e1e1e] text-white font-sans selection:bg-[#cbf200] selection:text-black">
        {/* Header Bar */}
        
        <main className="pt-28 pb-20 px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm  font-bold tracking-wider  hover:text-[#cbf200] transition-colors"
            >
              <ArrowLeft size={16} /> all news
            </Link>
          </div>

          {/* Hero Banner Image with Tint */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden mb-12 group bg-black"
>
  <span className="absolute top-4 left-4 z-20 bg-black/80 text-white text-xs px-3 py-1 rounded-full font-medium">
    {article.category}
  </span>

  <img
    src={article.image}
    alt={article.title}
    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
  />

  <div className="absolute inset-0 z-10 bg-[#cbf200] mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
</motion.div>

          {/* Article Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold text-neutral-400 tracking-widest">{article.date}</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mt-3 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
              {article.summary}
            </p>

            {/* Paragraphs */}
            <div className="space-y-6 text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Second Image Showcase */}
            
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
};