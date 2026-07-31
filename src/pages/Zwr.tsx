import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';// --- Local Assets ---
import waterdroplets from '../images/wtrdroplets.svg';
import recycle from '../images/recycle.svg';
const zwrVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513529/fit_qhu4rb.mp4'
const relifeVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513565/releif_cum0jm.mp4'
const popupVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785515906/video_docekl.mp4'
// Logo / Title Images
import zwrLogo from '../images/zwr.svg';
import relifeLogo from '../images/rekeif.svg';
import { Link } from 'react-router-dom';

// --- Reusable Hero Section with Background Video, Marquee Label & Icons ---
interface HeroSectionProps {
  id?: string;
  videoSrc: string;
  logoSrc: string;
  logoAlt: string;
  iconSrc: string;
  iconAnimation: 'bounce' | 'rotate';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  videoSrc,
  logoSrc,
  logoAlt,
  iconSrc,
  iconAnimation,
}) => {
  return (
    <div id={id} className="px-4 md:px-6 pt-36 pb-4">
      <section className="relative h-[70vh] md:h-[75vh] w-full rounded-[10px] overflow-hidden flex items-center justify-center p-8 md:p-12 shadow-2xl">
        {/* Full-Screen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Dark Overlay (rgba(0,0,0,0.35)) */}
        <div className="absolute inset-0 bg-black/35 z-10" />

        {/* Center Container: Marquee + Logo + Icon tightly stacked */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center justify-center gap-3 md:gap-4"
        >
          {/* MOVING FEATURE MARQUEE LABEL */}
          <div className="feature-preview__label w-28 overflow-hidden relative select-none">
            <motion.div
              className="feature-preview__label-inner flex whitespace-nowrap text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <span>Feature</span>
              <span>Feature</span>
              <span>Feature</span>
              <span>Feature</span>
              <span>Feature</span>
              <span>Feature</span>
            </motion.div>
          </div>

          {/* Title Image */}
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-[280px] sm:w-[340px] md:w-[420px] object-contain drop-shadow-2xl"
          />

          {/* Animated SVG Icon under Logo */}
          <motion.img
            src={iconSrc}
            alt={`${logoAlt} Icon`}
            className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-0 invert mt-1"
            animate={
              iconAnimation === 'bounce'
                ? { y: [0, 5, 0] }
                : { rotate: 360 }
            }
            transition={
              iconAnimation === 'bounce'
                ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 3, repeat: Infinity, ease: 'linear' }
            }
          />
        </motion.div>
      </section>
    </div>
  );
};

// --- Word Component for Subtle Scroll Reveal Effect ---
interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const blurValue = useTransform(progress, range, ["2.5px", "0px"]);

  return (
    <motion.span
      style={{
        opacity,
        filter: useTransform(blurValue, (b) => `blur(${b})`),
      }}
      className="inline-block mr-[0.25em] transition-all duration-100"
    >
      {children}
    </motion.span>
  );
};

// --- Reusable Content Description Block ---
interface ContentSectionProps {
  sideLabel: string;
  headingText: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ sideLabel, headingText }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = headingText.split(" ");

  return (
    <section ref={containerRef} className="relative py-28 md:py-36 px-8 md:px-24 max-w-7xl mx-auto">
      <div className="text-[11px] tracking-widest text-zinc-400 font-mono uppercase mb-8">
        {sideLabel}
      </div>

      <h2 className="text-xl text-left sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-normal leading-[1.3] text-zinc-100 flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </h2>

      <div className="mt-14">
       <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
>
  <Link
    to="/contact"
    className="inline-block text-[#DFFF00] border border-[#DFFF00] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full"
  >
    Contact us
  </Link>
</motion.div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function ZeroWindLanding() {
const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Scroll on initial mount if hash is present
    handleHashScroll();

    // Scroll whenever hash changes dynamically
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="bg-[#272727] text-zinc-100 font-sans selection:bg-[#DFFF00] selection:text-black min-h-screen relative overflow-x-hidden">
      {/* Persistent Floating Bottom-Right Video Button */}
      <div className="fixed bottom-6 right-6 z-40">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setIsVideoModalOpen(true)}
    className="bg-[#DFFF00] text-black text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full shadow-2xl flex items-center space-x-2"
  >
    <span>Watch Zerowind's video</span>
  </motion.button>
</div>

      {/* HERO SECTION 1: ZWR */}
      <HeroSection
        id="zwr"
        videoSrc={zwrVideo}
        logoSrc={zwrLogo}
        logoAlt="ZWR"
        iconSrc={waterdroplets}
        iconAnimation="bounce"
      />

      {/* CONTENT SECTION 1: ZWR TEXT */}
      <ContentSection
        sideLabel="WATER REPELLENT TREATMENT"
        headingText="Our way of proposing Water Repellent treatment, in full compliance with the environment and international regulations. The water repellent component applied to the fabric is totally PFAS-free and ensures the garment's breathability and quick drying."
      />

      {/* HERO SECTION 2: RELIFE */}
      <HeroSection
        id="relife"
        videoSrc={relifeVideo}
        logoSrc={relifeLogo}
        logoAlt="RELIFE"
        iconSrc={recycle}
        iconAnimation="rotate"
      />

      {/* CONTENT SECTION 2: RELIFE TEXT */}
      <ContentSection
        sideLabel="ECO-FRIENDLY SOLUTIONS"
        headingText="We care about performance but also about the well-being of the environment and people, which is why we study increasingly eco-friendly and planet-friendly solutions. ZeroWind fabric lines can be produced with polyester yarns derived from recycled post-consumer materials, and are themselves recyclable at the end of their lives."
      />
<AnimatePresence>
  {isVideoModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
      >
        <button
          onClick={() => setIsVideoModalOpen(false)}
          className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <video
          controls
          autoPlay
          className="w-full h-full object-cover"
        >
          <source src={popupVideo} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* SECTION 5: INFINITE RUNNING MARQUEE BANNER */}

    </div>
  );
}
  