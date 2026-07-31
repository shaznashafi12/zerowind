
import  { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import motionlogo  from "../icons/fit1.svg"

// --- ASSET IMPORTS ---
const heroBgVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513902/blackcloth_ea0iy2.mp4'
const popupVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785515906/video_docekl.mp4'

import vaporimg from "../images/vaporaim.webp";
import motionTechImg from "../images/fit.webp";
import vaporasideimg from "../icons/vapora1.svg"; // FIT vertical writing image asset


import bulkicon from "../icons/bulk.svg";
import thermo from "../icons/thermore.svg";
import highbreath from "../icons/breath.svg";
import insulation from "../icons/insulation.svg";

// --- TYPES & DATA ---

const SPEC_BADGES = [
  { icon: highbreath, label: "High breathability" },
  { icon: thermo, label: "Thermoregulation" },
  { icon: bulkicon, label: "Minimum bulk and maximum lightness" },
  { icon: insulation, label: "Insulation" },

];

 
 

export default function Vapora() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  // Sideways "FIT" label scroll behavior
  const heroRef = useRef<HTMLDivElement>(null);
  const motionSectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [pastHero, setPastHero] = useState(false);
  const [reachedMotionSection, setReachedMotionSection] = useState(false);

  const showBraveLabel = pastHero && !reachedMotionSection;

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
        {showBraveLabel && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed -left-[90px] top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none"
          >
            <img
              src={vaporasideimg}
              alt="VAPORA"
              className="h-10 w-auto  object-contain -rotate-90 origin-center opacity-20 block"
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
  src={vaporasideimg}
  alt="VAPORA"
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
    Designed for those who live the outdoors without limits,
    Vapora is the new technical fabric in the ZeroWind range
    that meets the needs of every adventure, from trail running
    to trekking, from cycling to everyday exploration.
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
        <div className="pl-5 max-w-4xl mx-auto space-y-10 text-left text-[#f5f5f5] text-xl md:text-2xl leading-relaxed font-light tracking-wide">

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Its structure combines extreme lightness and 
    advanced thermoregulation, offering constant
     insulation even in the most variable conditions.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    Thanks to optimal moisture management,
     Vapora reduces sweat and maintains a dry
      and comfortable internal microclimate, 
    making physical activity extremely enjoyable.  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[700px]"

  >
    With Vapora, every layer becomes
     an invisible ally: dynamic, technical, essential.
  </motion.p>
   <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="w-[600px]"
  >
   The perfect balance between 
   protection, comfort, and
    performance.
  </motion.p>

</div>
      </section>

      {/* ================= WATERPROOF & WEIGHT SECTION ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Video Demo Card */}
         <div className="md:col-span-7 relative rounded-3xl overflow-hidden border border-neutral-800 group">
  <img
    src={vaporimg}
    alt="Vapor"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8" />
</div>
          {/* Right Grams Info Side */}
          <div className="md:col-span-5 flex flex-col md:pl-40 justify-center items-center text-center p-8 rounded-3xl h-[320px] md:h-[400px]">
            <span className="text-xs uppercase text-[#DFDB00] tracking-widest font-bold mb-2">
              GRAMS
            </span>
            <div className="text-3xl md:text-5xl font-black text-[#DFDB00] my-2 tracking-tight">
              75 a 80
            </div>
            <span className="text-xs font-mono text-[#DFDB00] font-semibold mt-2">
              gr/m2
            </span>
          </div>
        </div>
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
  </Link>  </motion.button>
</section>
      {/* ================= DISCOVER NEXT TECH BANNER ================= */}
    <section
  ref={motionSectionRef}
  onMouseEnter={() => setIsHoveringCard(true)}
  onMouseLeave={() => setIsHoveringCard(false)}
  onClick={() => navigate("/fit")}
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
    alt="Vapora"
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
    alt="Vapora"
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