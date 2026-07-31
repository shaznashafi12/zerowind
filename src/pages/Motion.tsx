import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import motionlogo  from "../icons/power1.svg"

// --- ASSET IMPORTS ---
const heroBgVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513902/blackcloth_ea0iy2.mp4'
const popupVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785515906/video_docekl.mp4'

const waterproofVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513684/waterproof_uxqaac.mp4'
import motionTechImg from "../images/power.webp";
import motionsideimg from "../icons/motion1.svg"; // FIT vertical writing image asset

import bradsoftshell from "../images/bradsoftsh.webp";
import elaprintimg from "../images/elaprint.webp";

import waterproofIcon from "../icons/waterproof.svg";
import windproofIcon from "../icons/windprotection.svg";
import breathabilityIcon from "../icons/breath.svg";
import thermoregulationIcon from "../icons/thermore.svg";

// --- TYPES & DATA ---
interface ProductCardProps {
  id: string;
  title: string;
  tech: string;
  feature: string;
  description: string;
  image: string;
  path: string;
}

const SPEC_BADGES = [
  { icon: waterproofIcon, label: "Waterproofness" },
  { icon: windproofIcon, label: "Total wind protection" },
  { icon: breathabilityIcon, label: "High breathability" },
  { icon: thermoregulationIcon, label: "Thermoregulation" },
];

const PRODUCTS: ProductCardProps[] = [
  {
    id: "bradsoftshell",
    title: "Bradsoftshell",
    tech: "motion",
    feature: "ZWVR",
    description:
      "Softshell invernale con membrana altamente traspirante e totale protezione dal vento.Alta resistenza all’abrasione.Molto elastico, perfetto per la realizzazione di capi slim fit.Trattamento idrorepellente ecologico (PFAS free).Photo: Heavy Primapelle winter jacket by Pissei (pissei.com)",
    image: bradsoftshell,
    path: "/brad",
  },
  {
    id: "elaprint",
    title: "Elaprint",
    tech: "Motion",
    feature: "ZWVR",
    description:
"Winter will no longer stand in the way of your outings with Elaprint ZWR.Windproof, breathable, rainproof, insulating and elastic.For temperatures from -1° to 8°C"  ,
  image: elaprintimg,
    path: "/elaprint",
  },
 
];

export default function Motion() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Sideways "FIT" label scroll behavior
  const heroRef = useRef<HTMLDivElement>(null);
  const motionSectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [pastHero, setPastHero] = useState(false);
  const [reachedMotionSection, setReachedMotionSection] = useState(false);

  const showMotionLabel = pastHero && !reachedMotionSection;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;

      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setPastHero(heroBottom <= 0);
      }

      if (motionSectionRef.current) {
        const motionTop = motionSectionRef.current.getBoundingClientRect().top;
        setReachedMotionSection(motionTop <= window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div className="relative w-full bg-[#272727] text-white font-sans overflow-x-hidden selection:bg-[#d4ff00] selection:text-black">
      {/* FIXED SIDE LABELS (Left FIT indicator & Bottom-Right Video Trigger) */}
      <AnimatePresence>
        {showMotionLabel && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed -left-[130px] top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none"
          >
            <img
              src={motionsideimg}
              alt="MOTION"
              className="h-10 w-auto object-contain -rotate-90 origin-center opacity-20 block"
            />
          </motion.div>
        )}
      </AnimatePresence>      {/* Custom Styles for Icons & Utilities */}
      <style>{`
       .spec-icon-yellow{
  filter:
    brightness(0)
    saturate(100%)
    invert(88%)
    sepia(99%)
    saturate(3172%)
    hue-rotate(9deg)
    brightness(103%)
    contrast(104%);
}
      `}</style>

      {/* FLOATING CURSOR PLUS BADGE */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center w-10 h-10 bg-[#d4ff00] text-black rounded-lg shadow-2xl"
        animate={{
          x: cursorPos.x - 20,
          y: cursorPos.y - 20,
          scale: isHoveringCard ? 1 : 0,
          opacity: isHoveringCard ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <Plus className="w-6 h-6 stroke-[3]" />
      </motion.div>

      {/* FIXED SIDE FIT WATERMARK IMAGE */}


      {/* BOTTOM RIGHT VIDEO BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVideoModalOpen(true)}
          className="bg-[#d4ff00] text-black text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#c2eb00] transition-colors"
        >
          Watch Zerowind's video
        </motion.button>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-neutral-300 mb-2"
          >
            TECHNOLOGY
          </motion.p>

         <motion.img
  src={motionsideimg}
  alt="MOTION"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
className="h-[70px] sm:h-[130px] md:h-[120px] w-auto object-contain"/>
</div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-400 rounded-full"
          />
        </div>
      </section>

      {/* ================= INTRO & FEATURES SECTION ================= */}
         <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="
          max-w-[1000px]
          text-left
          text-[2.1rem]
          sm:text-[3.0rem]
          md:text-[3.5rem]
          font-extrabold
          leading-[0.94]
          tracking-[-0.034em]
          text-white
          mb-20
          pl-28
          font-sans
        "
      >
    
  Motion is ZeroWind's line of 3-layer softshell fabrics,
  perfect for making outdoor sportswear for cold weather
  and in-between seasons.
</motion.p>

        {/* Spec Cards Grid with Yellow Tinted Icons */}
        <div className="pl-36 grid w-[1000px] grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 mb-24">
          {SPEC_BADGES.map((badge, idx) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className=" border border-[#DFDB00] rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#FFF200] transition-colors"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={badge.icon}
                  alt={badge.label}
                  className="w-12 h-12 text-[#DFDB00] object-contain spec-icon-yellow"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-white">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technical Description */}
        <div className="pl-5 max-w-4xl mx-auto space-y-4 text-left text-[#f5f5f5] text-xl md:text-2xl leading-relaxed font-light tracking-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            High performance breathability, wind protection and
             waterproofness are guaranteed by a totally 
             PFAS-free hydrophilic membrane, enclosed between
              two fabrics to create an ideal shell for even the toughest of the outdoor activities.
As confirmed by laboratory tests, this technology promotes 
the passage of moisture to the outside through osmosis, and breathability increases
 dynamically as the exertion intensifies, keeping the inside of the garment dry.
          </motion.p>
         
        </div>
      </section>

      {/* ================= WATERPROOF & WEIGHT SECTION ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Video Demo Card */}
          <div className="md:col-span-7 relative rounded-3xl overflow-hidden border border-neutral-800 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={waterproofVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8" />
          </div>

          {/* Right Grams Info Side */}
          <div className="md:col-span-5 flex flex-col md:pl-40 justify-center items-center text-center p-8 rounded-3xl h-[320px] md:h-[400px]">
            <span className="text-xs uppercase text-[#DFDB00] tracking-widest font-bold mb-2">
              GRAMS
            </span>
            <div className="text-3xl md:text-5xl font-black text-[#DFDB00] my-2 tracking-tight">
              80 a 350
            </div>
            <span className="text-xs font-mono text-[#DFDB00] font-semibold mt-2">
              gr/m2
            </span>
          </div>
        </div>
      </section>

      {/* ================= HEADER TICKER ================= */}
      <div className="mt-28 flex flex-col items-center w-full">
        <div className="relative z-10 flex justify-center max-w-7xl mx-auto mb-6 md:mb-8 w-full">
          <div className="w-[280px] sm:w-[360px] md:w-[200px] overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex w-max"
            >
              <div className="flex gap-6 pr-6 shrink-0 items-center">
<span className="text-[15px] font-medium tracking-[-0.02em] text-[#A3A3A3] uppercase">                  DISCOVER OUR PRODUCTS .
                </span>
<span className="text-[15px] font-medium tracking-[-0.02em] text-[#A3A3A3] uppercase">                  DISCOVER OUR PRODUCTS .
                </span>
              </div>
              <div className="flex gap-6 pr-6 shrink-0 items-center">
<span className="text-[15px] font-medium tracking-[-0.02em] text-[#A3A3A3] uppercase">                  DISCOVER OUR PRODUCTS .
                </span>
<span className="text-[15px] font-medium tracking-[-0.02em] text-[#A3A3A3] uppercase">                  DISCOVER OUR PRODUCTS .
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS CAROUSEL / CARDS WITH HOVER OVERLAY ================= */}
      <section className="max-w-6xl mx-auto  py-10 space-y-20">
        {PRODUCTS.map((prod) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => {
              setIsHoveringCard(true);
              setHoveredProductId(prod.id);
            }}
            onMouseLeave={() => {
              setIsHoveringCard(false);
              setHoveredProductId(null);
            }}
            onClick={() => navigate(prod.path)}
            className="group relative   rounded-3xl p-8 md:p-12 min-h-[520px] flex items-center justify-center cursor-none overflow-hidden transition-colors hover:border-neutral-700"
          >
            {/* Center Product Image (Visible by default) */}
<div className="relative w-full max-w-xl h-[500px] flex items-center justify-center z-10">              <img
                src={prod.image}
                alt={prod.title}
className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"              />
            </div>

            {/* Hover Floating Details Overlay Box */}
            <AnimatePresence>
              {hoveredProductId === prod.id && (
                <motion.div
                  initial={{ opacity: 0, x: -60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 w-[300px] sm:w-[370px] bg-black backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl pointer-events-none"
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-wide uppercase">
                    {prod.title}
                  </h3>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">
                        TECHNOLOGY
                      </span>
                      <span className="text-lg font-extrabold text-white tracking-widest uppercase">
                        {prod.tech}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">
                        FEATURE
                      </span>
                      <span className="text-lg font-extrabold text-white tracking-widest uppercase">
                        {prod.feature}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed tracking-tight">
                    {prod.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* ================= CALL TO ACTION / CONTACT ================= */}
     <section className="max-w-5xl mx-auto  py-24 text-center">
       <h2
         className="
           mx-auto
           max-w-[900px]
           text-white
           text-[2.3rem]
           sm:text-[2.8rem]
           md:text-[1.8rem]
           font-light
           leading-[1.15]
           tracking-[0.02em]
           mb-8
         "
       >
         Request expert advice on our
         <br />
         products and technologies.
       </h2>

       <motion.button
         whileHover={{ scale: 1.04 }}
         whileTap={{ scale: 0.98 }}
         className="
           border
           border-[#D7FF00]
           text-[#D7FF00]
           rounded-full
           px-10
           py-4
           text-sm
           font-medium
           tracking-[0.04em]
           hover:bg-[#D7FF00]
           hover:text-black
           transition-all
           duration-300
         "
       >
 <Link
    to="/contact"
  >
    Contact us
  </Link>
         </motion.button>
     </section>

      {/* ================= DISCOVER NEXT TECH BANNER ================= */}
     <section
  ref={motionSectionRef}
  onMouseEnter={() => setIsHoveringCard(true)}
  onMouseLeave={() => setIsHoveringCard(false)}
  onClick={() => navigate("/power")}
  className="group relative max-w-[96%] mx-auto h-[72vh] rounded-3xl overflow-hidden cursor-none bg-[#1f1f1f] cursor-pointer"
><img
  src={motionTechImg}
  alt="Motion Technology"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
/>

<div className="absolute inset-0 bg-black/35"></div>
<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
  <span className="mb-4 text-sm uppercase tracking-[0.25em] font-semibold text-white">
    DISCOVER THE
  </span>

  <img
    src={motionlogo}
    alt="Power"
    className="w-[380px] md:w-[520px] lg:w-[620px] object-contain"
  />

  <span className="mt-4 text-sm uppercase tracking-[0.25em] font-semibold text-white">
    TECHNOLOGY
  </span>
</div><div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
  <span className="mb-4 text-sm uppercase tracking-[0.25em] font-semibold text-white">
    DISCOVER THE
  </span>

  <img
    src={motionlogo}
    alt="Power"
    className="w-[380px] md:w-[520px] lg:w-[620px] object-contain"
  />

  <span className="mt-4 text-sm uppercase tracking-[0.25em] font-semibold text-white">
    TECHNOLOGY
  </span>
</div>
</section>
      {/* ================= GAP SPACING AFTER MOTION SECTION ================= */}
      <div className="w-full my-24 md:my-32" />

      {/* ================= VIDEO MODAL POPUP ================= */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
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

              <video controls autoPlay className="w-full h-full object-cover">
                <source src={popupVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}