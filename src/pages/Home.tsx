import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
// --- IMPORT LOCAL WEBP IMAGES ---
import fitImg from "../images/fit.webp";
import motionImg from "../images/motion.webp";
import powerImg from "../images/power.webp";
import braveImg from "../images/brave.webp";
import vaporaImg from "../images/vapor.webp";
// --- IMPORT LOCAL ICON SVGS ---
import waterproofIcon from "../icons/waterproof.svg";
import windprotectionIcon from "../icons/windprotection.svg";
import breathIcon from "../icons/breath.svg";
import thermoreIcon from "../icons/thermore.svg";
import bulkIcon from "../icons/bulk.svg";
import insulationIcon from "../icons/insulation.svg";
import excelfitIcon from "../icons/excelfit.svg";
import strengthIcon from "../icons/strength.svg";
// --- IMPORT LOCAL TITLE LOGO SVGS ---
import fitTitle from "../icons/fit1.svg";
import motionTitle from "../icons/motion1.svg";
import powerTitle from "../icons/power1.svg";
import braveTitle from "../icons/brave1.svg";
import vaporaTitle from "../icons/vapora1.svg";
// --- IMPORT VIDEO & PAGE COMPONENTS ---
const zwVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785514708/zw_px79z7.mp4'
import PageLoader from '../pages/Pageloader.tsx';
// --- FEATURES SECTION ASSETS ---
const zwrVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513529/fit_qhu4rb.mp4'
const relifeVideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785513565/releif_cum0jm.mp4'
import zwrIcon from '../images/wtrdroplets.svg';
import relifeIcon from '../images/recycle.svg';
import zwrTitle from '../images/zwr.svg';
import relifeTitle from '../images/rekeif.svg';
// --- PRODUCTS SPOTLIGHT ASSETS ---
import arsenalImg from "../images/arsenal.webp";
import bergamoImg from "../images/bergamo.webp";
import bradImg from "../images/bradsoftsh.webp";
import grandprixImg from "../images/grandprix.webp";
import tempestImg from "../images/teampest.webp";
import elaprintImg from "../images/elaprint.webp";
import skinImg from "../images/skin.webp";
// --- NEWSLETTER SECTION ASSET ---
const newsvideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785514507/newsletter_skpbwz.mp4'
interface SpecificationItem {
  icon: string;
  title: string;
}
interface TechCardData {
  id: string;
  title: string;
  titleImage: string;
  description: string;
  image: string;
  specifications: SpecificationItem[];
  fullWidth?: boolean;
  link: string;
}
interface Product {
  id: string;
  title: string;
  link: string;
  image: string;
  description: string;
  temperatureRange?: string;
  technology?: string;
  feature?: string;
}

const TECHNOLOGIES_DATA: TechCardData[] = [
  {
    id: 'fit',
    title: 'FIT',
    titleImage: fitTitle,
    image: fitImg,
    link:'/fit',
    description: "FIT is ZeroWind's line of 2-layer fabrics, perfect for creating breathable, fully windproof and waterproof outdoor sportswear garments suitable for mid-seasons.",
    specifications: [
      { icon: waterproofIcon, title: 'Waterproofness' },
      { icon: windprotectionIcon, title: 'Total wind protection' },
      { icon: breathIcon, title: 'High breathability' },
      { icon: thermoreIcon, title: 'Thermoregulation' },
    ],
  },
  {
    id: 'motion',
    title: 'MOTION',
    titleImage: motionTitle,
    image: motionImg,
        link:'/motion',

    description: "Motion is ZeroWind's line of 3-layer softshell fabrics, perfect for making outdoor sportswear for cold weather and in-between seasons.",
    specifications: [
      { icon: waterproofIcon, title: 'Waterproofness' },
      { icon: windprotectionIcon, title: 'Total wind protection' },
      { icon: breathIcon, title: 'High breathability' },
      { icon: thermoreIcon, title: 'Thermoregulation' },
    ],
  },
  {
    id: 'power',
    title: 'POWER',
    titleImage: powerTitle,
    image: powerImg,
        link:'/power',

    description: "Wind protection is the goal behind ZeroWind's POWER fabric line, to which we have combined excellent breathability and comfortable fit.",
    specifications: [
      { icon: windprotectionIcon, title: 'Total wind protection' },
      { icon: breathIcon, title: 'High breathability' },
      { icon: thermoreIcon, title: 'Thermoregulation' },
      { icon: excelfitIcon, title: 'Excellent fit' },
    ],
  },
  {
    id: 'brave',
    title: 'BRAVE',
    titleImage: braveTitle,
    image: braveImg,
        link:'/brave',

    description: "With the BRAVE fabric line, ZeroWind redefines the concept of windproof protective shell.",
    specifications: [
      { icon: windprotectionIcon, title: 'Total wind protection' },
      { icon: bulkIcon, title: 'Minimum bulk and maximum lightness' },
      { icon: strengthIcon, title: 'Strength and durability' },
    ],
  },
  {
    id: 'vapora',
    title: 'VAPORA',
    titleImage: vaporaTitle,
    image: vaporaImg,
    link:'/vapora',
    description: "Designed for those who live the outdoors without limits, Vapora is the new technical fabric in the ZeroWind range that meets the needs of every adventure—from trail running to trekking, from cycling to everyday exploration.",
    fullWidth: true,
    specifications: [
      { icon: breathIcon, title: 'High breathability' },
      { icon: thermoreIcon, title: 'Thermoregulation' },
      { icon: bulkIcon, title: 'Minimum bulk and maximum lightness' },
      { icon: insulationIcon, title: 'Insulation' },
    ],
  },
];

const PRODUCTS_DATA: Product[] = [
  {
    id: 'arsenal',
    title: 'Arsenal',
    link: '/arsenal',
    image: arsenalImg,
    description: "Custom product exclusively for customer. Light shield fabric for mid-season. Very breathable and with absolute wind protection. Resistant to abrasion. Extremely stretchy, perfect for making slim fit garments.",
    technology: 'FIT',
    feature: 'ZWR',
  },
  {
    id: 'bergamo',
    title: 'Bergamo',
    link: '/bergamo',
    image: bergamoImg,
    description: "Fabric developed for mid season. Windproof, breathable, water-resistant and very elastic.",
    temperatureRange: "9° to 15°C",
    technology: 'FIT',
    feature: 'ZWR',
  },
  {
    id: 'brad',
    title: 'Brad Softshell',
    link: '/brad',
    image: bradImg,
    description: "Winter softshell with a highly breathable membrane and total wind protection. High abrasion resistance. Very elastic, perfect for slim fit garments. Eco-friendly water-repellent treatment (PFAS free).",
    technology: 'MOTION',
    feature: 'ZWR',
  },
  {
    id: 'grandprix',
    title: 'Grand Prix',
    link: '/grandprix',
    image: grandprixImg,
    description: "Light shield fabric for mid-season. Very breathable and with absolute wind protection. Resistant to abrasion. Extremely stretchy, environmentally friendly water repellent treatment (PFAS free).",
    technology: 'FIT',
    feature: 'ZWR',
  },
  {
    id: 'tempest',
    title: 'Tempest',
    link: '/teampest',
    image: tempestImg,
    description: "Double-sided fabric for cold season. Windproof, breathable, elastic, insulating.",
    temperatureRange: "8° to 15°C",
    technology: 'POWER',
    feature: 'ZWR',
  },
  {
    id: 'elaprint',
    title: 'Elaprint',
    link: '/elaprint',
    image: elaprintImg,
    description: "Winter will no longer stand in the way of your outings with Elaprint ZWR. Windproof, breathable, rainproof, insulating and elastic.",
    temperatureRange: "-1° to 8°C",
    technology: 'MOTION',
    feature: 'ZWR',
  },
  {
    id: 'skin',
    title: 'Skin',
    link: '/skin',
    image: skinImg,
    description: "Versatility between mid and warm season. Extremely light weight, protects against wind and light rain.",
    temperatureRange: "15° to 23°C",
    technology: 'BRAVE',
    feature: 'ZWR',
  },
];

// --- Brand SVG map for the Products spotlight (reuses already-imported title/feature SVGs) ---
const brandSvgMap: Record<string, string> = {
  FIT: fitTitle,
  MOTION: motionTitle,
  POWER: powerTitle,
  BRAVE: braveTitle,
  VAPORA: vaporaTitle,
  ZWR: zwrTitle,
  RELIFE: relifeTitle,
};

const ROTATING_WORDS = ['smart', 'unique', 'original'];

// --- Directional Animation Variants for Products Spotlight ---
const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100vw' : '-100vw',
    opacity: 1,
    scale: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100vw' : '100vw',
    opacity: 1,
    scale: 1,
  }),
};

const bgTextVariants = {
  enter: {
    y: '-100%',
    opacity: 0,
  },
  center: {
    y: '0%',
    opacity: 1,
  },
  exit: {
    y: '-100%',
    opacity: 0,
  },
};

const Home: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHoveringCard, setIsHoveringCard] = useState<boolean>(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [wordIndex, setWordIndex] = useState<number>(1);
const [email, setEmail] = useState("");
const [consent, setConsent] = useState(false);
  // --- Products Spotlight state ---
  const [[activeIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoverZone, setHoverZone] = useState<'left' | 'center' | 'right'>('center');
  const activeProduct = PRODUCTS_DATA[activeIndex];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.2 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.2 });

  // --- Newsletter form state ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // --- Products Spotlight navigation helpers ---
  const navigate = (newDirection: number): void => {
    const nextIndex = (activeIndex + newDirection + PRODUCTS_DATA.length) % PRODUCTS_DATA.length;
    setPage([nextIndex, newDirection]);
  };

  const navigateTo = (targetIndex: number): void => {
    if (targetIndex === activeIndex) return;
    const computedDirection = targetIndex > activeIndex ? 1 : -1;
    setPage([targetIndex, computedDirection]);
  };

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    const relativeX = e.clientX / window.innerWidth;
    if (relativeX < 0.35) {
      setHoverZone('left');
    } else if (relativeX > 0.65) {
      setHoverZone('right');
    } else {
      setHoverZone('center');
    }
  };

  const handleStageClick = (): void => {
    if (hoverZone === 'left') navigate(-1);
    else if (hoverZone === 'right') navigate(1);
  };

  const renderThumbnails = () => (
    <div className="relative z-20 max-w-6xl mx-auto flex items-center justify-between md:justify-center gap-1.5 sm:gap-10 md:gap-4 w-full py-2 md:py-4 px-1 select-none">
      {PRODUCTS_DATA.map((item, idx) => {
        const isSelected = idx === activeIndex;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(idx)}
            className={`relative shrink-0 w-11 sm:w-28 md:w-36 h-11 sm:h-24 md:h-28 rounded-lg md:rounded-xl p-0.5 md:p-0 overflow-hidden transition-all duration-300 flex items-center justify-center outline-none ${
              isSelected
                ? 'border-2 border-[#E2DE00] bg-white/5 scale-105 shadow-lg'
                : 'border border-transparent opacity-40 hover:opacity-80 hover:bg-white/5'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain pointer-events-none scale-95 md:scale-90 transition-transform duration-300"
            />
          </button>
        );
      })}
    </div>
  );

const handleSubscribe = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !consent) return;

  console.log(email);

  setEmail("");
  setConsent(false);
};

return (
    <div className="bg-[#272727] px-4 md:px-8 py-6 pt-[140px] relative min-h-screen cursor-none-wrapper">
      <PageLoader />
      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        @keyframes shimmerMove {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #9ca3af 0%, #9ca3af 35%, #E3DF00 50%, #9ca3af 65%, #9ca3af 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmerMove 3.5s linear infinite;
        }
      `}</style>
      {/* --- YELLOW SQUARE POINTER CURSOR WITH PLUS SIGN --- */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center bg-[#E3DF00] rounded-none text-black shadow-lg"
        animate={{
          x: cursorPos.x - (isHoveringCard ? 18 : 12),
          y: cursorPos.y - (isHoveringCard ? 18 : 12),
          width: isHoveringCard ? 36 : 24,
          height: isHoveringCard ? 36 : 24,
          opacity: isHoveringCard ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.15 }}
      >
        <Plus className="w-5 h-5 stroke-[3]" />
      </motion.div>
      {/* --- HERO VIDEO CARD --- */}
      <div className="relative w-full h-[85vh] overflow-hidden rounded-[10px] mb-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
        >
          <source src={zwVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 pointer-events-none select-none">
          <span
            className="relative inline-block font-black uppercase tracking-wide text-[60px] sm:text-[120px] md:text-[180px] leading-[0.90] text-transparent -mt-5 md:-mt-10"
            style={{
              WebkitTextStroke: '2px #e2de00',
              transformOrigin: '100% 20%',
              transform: 'translate(20px, 20px)',
            }}
          >
            BETTER
          </span>
          <span
            className="self-end font-black uppercase tracking-wide pr-8 md:pr-20 text-[60px] sm:text-[120px] md:text-[180px] leading-[0.85] text-transparent -mt-3 md:-mt-6"
            style={{ WebkitTextStroke: '2px #e2de00' }}
          >
            IN
          </span>
          <span
            className="font-black self-end uppercase mb-8 md:mb-16 tracking-wide text-[60px] sm:text-[120px] md:text-[180px] leading-[0.85] text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '2px #e2de00' }}
          >
            MOTION
          </span>
        </div>
      </div>
      {/* --- TECHNOLOGIES GRID CARDS --- */}
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {TECHNOLOGIES_DATA.slice(0, 4).map((card) => (
           <Link
  to={card.link}
  key={card.id}
              onMouseEnter={() => {
                setIsHoveringCard(true);
                setHoveredCardId(card.id);
              }}
              onMouseLeave={() => {
                setIsHoveringCard(false);
                setHoveredCardId(null);
              }}
              className="relative h-[620px] rounded-[20px] overflow-hidden group cursor-none border border-white/10"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-500 flex items-center justify-center ${
                  hoveredCardId === card.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <img
                  src={card.titleImage}
                  alt={card.title}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <AnimatePresence>
                {hoveredCardId === card.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-8 md:p-12 flex flex-col justify-center items-center text-center text-white"
                  >
                    <img
                      src={card.titleImage}
                      alt={card.title}
                      className="h-14 md:h-16 w-auto object-contain mb-6"
                    />
                    <p className="max-w-lg text-sm md:text-base font-normal tracking-wide text-gray-100 leading-relaxed mb-12">
                      {card.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-xl">
                      {card.specifications.map((spec, idx) => (
                        <div key={idx} className="specification flex flex-col items-center justify-center gap-3">
                          <div className="specification__icon w-12 h-12 flex items-center justify-center mx-auto">
                            <img
                              src={spec.icon}
                              alt={spec.title}
                              className="w-10 h-10 object-contain brightness-0 invert"
                            />
                          </div>
                          <div className="specification__title font-light text-[10px] tracking-widest uppercase text-white">
                            {spec.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
</Link>      
    ))}
        </div>
        {/* Full-width VAPORA Card */}
        {TECHNOLOGIES_DATA.slice(4).map((card) => (
          <Link
            key={card.id}
              to={card.link}

            onMouseEnter={() => {
              setIsHoveringCard(true);
              setHoveredCardId(card.id);
            }}
            onMouseLeave={() => {
              setIsHoveringCard(false);
              setHoveredCardId(null);
            }}
            className="relative h-[620px] rounded-[20px] overflow-hidden group cursor-none border border-white/10 w-full"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-black/20 transition-opacity duration-500 flex items-center justify-center ${
                hoveredCardId === card.id ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <img
                src={card.titleImage}
                alt={card.title}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <AnimatePresence>
              {hoveredCardId === card.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-8 md:p-12 flex flex-col justify-center items-center text-center text-white"
                >
                  <img
                    src={card.titleImage}
                    alt={card.title}
                    className="h-16 md:h-20 w-auto object-contain mb-6"
                  />
                  <p className="max-w-xl text-base font-normal tracking-wide text-gray-100 leading-relaxed mb-12">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-10 w-full max-w-3xl">
                    {card.specifications.map((spec, idx) => (
                      <div key={idx} className="specification flex flex-col items-center justify-center gap-3">
                        <div className="specification__icon flex items-center justify-center">
                          <img
                            src={spec.icon}
                            alt={spec.title}
                            className="w-10 h-10 object-contain brightness-0 invert"
                          />
                        </div>
                        <div className="specification__title text-[10px] tracking-widest uppercase text-white">
                          {spec.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
        {/* --- FEATURES SECTION --- */}
        <section className="relative w-full py-24 px-4 md:px-8 bg-[#272727] overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            {/* Dynamic Animated Heading */}
            <div className="mb-20">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-black tracking-tight leading-[0.92] text-white">
                ZeroWind creates{' '}
                <span className="inline-block relative text-[#E3DF00] whitespace-nowrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_WORDS[wordIndex]}
                      initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="inline-block"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                fabrics
              </h2>
              </div>

            {/* --- HOME ABOUT CONTENT CONTAINER --- */}
            <div className="home__about-content relative max-w-[1280px] mb-28">
              {/* home__about-bg (SVG background with WHITE fills scaled behind content) */}
              <div className="home__about-bg absolute -left-[15vw] -top-40 w-[150vw] max-w-[2000px] h-auto pointer-events-none select-none z-0 opacity-[0.14]">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 170 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <path
                    id="char_w"
                    d="M166.89 0C158.68 10.4039 150.693 20.819 142.606 31.1667C136.295 39.2536 127.37 43.8088 118.154 43.8088H100.405C102.751 32.7413 105.096 21.6513 107.442 10.5614C101.913 17.4335 96.5848 24.3282 91.2008 31.1779C84.8561 39.2423 75.9647 43.82 66.7493 43.82H49C50.508 36.5317 52.1835 29.2209 53.6915 21.9325C55.1994 14.6442 56.7074 7.32209 58.2154 0.0112474H73.2839C70.9381 11.2587 68.5924 22.4836 66.2467 33.7086C69.7653 33.6524 73.2839 31.8303 75.786 28.6585C81.9854 20.8078 88.0061 12.9233 94.3731 5.0726C96.8864 1.88957 100.237 0.0562372 103.912 0.0224949H124.678C122.332 11.2699 119.986 22.4949 117.64 33.7198C121.327 33.6636 124.7 31.864 127.191 28.6697C134.586 19.1431 142.092 9.57157 149.632 0.0224949H166.878L166.89 0Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M7.20474 10.1115C7.87494 6.73722 8.54515 3.37423 9.21536 0H58.6097L56.5991 10.0552C46.0545 17.9509 35.4987 25.8241 24.9541 33.6973H51.5837C50.9135 37.0716 50.0757 40.4346 49.4055 43.8088H0C0.670208 40.4571 1.50797 37.1053 2.17818 33.7536C12.7228 25.8804 23.2786 18.0072 33.8232 10.1115H7.20474Z"
                    fill="#FFFFFF"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M10.5556 5.20923c0 3.16915-2.34584 5.14277-5.13153 5.14277-2.79697 0-5.14282-1.97362-5.14282-5.14277C.28125 2.0288 2.6271.0664063 5.42407.0664063 8.19849.0664062 10.5556 2.0288 10.5556 5.20923Zm-.94736 0c0-2.68419-1.91727-4.3308-4.18417-4.3308-2.27818 0-4.20675 1.64661-4.20675 4.3308 0 2.67291 1.91729 4.33079 4.20675 4.33079 2.2669 0 4.18417-1.65788 4.18417-4.33079Zm-2.88719.4624 1.28568 2.31202H6.46164L5.34511 5.8408H4.7248v2.14285H3.31503V2.35586H5.7624c1.3421 0 2.08646.65413 2.08646 1.78195-.01128.71052-.41729 1.2857-1.12781 1.53382Zm-2.00751-.80075h.77819c.56391 0 .90224-.25939.90224-.73307 0-.49624-.30449-.74436-.90224-.74436h-.77819v1.47743Z"
                  />
                </svg>
              </div>
              {/* Foreground Content Stack */}
              <div className="relative z-10 flex flex-col gap-[72px]">
                {/* home__about-content__heading */}
                <div className="home__about-content__heading max-w-2xl text-left">
                  <p className="text-xl sm:text-2xl md:text-[32px] font-semibold text-white leading-[1.22] tracking-tight">
                    Passion for outdoor activities and pursuit of technicality make ZeroWind the ideal brand for creating performance fabrics for a wide range of uses.
                  </p>
                </div>
                {/* home__about-content__text */}
                <motion.div
                  className="home__about-content__text grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 text-xs md:text-[15px] text-gray-400 font-normal leading-[1.6] text-left"
                  data-text-trigger=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.25,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.1, ease: 'easeOut' },
                      },
                    }}
                  >
                    <p>
                      From the beginning, ZeroWind has developed much of the fabric range using dynamic breathability membranes: + Intensity = + Breathability.
                    </p>
                    <p className="mt-3">
                      The extraordinary technical performance of ZeroWind fabrics is guaranteed by the constant investment and research work on innovative
                    </p>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.1, ease: 'easeOut' },
                      },
                    }}
                  >
                    <p>
                      materials to create unique garments for cycling, outdoor, running and urban sectors.
                    </p>
                    <p className="mt-3">
                      Laboratory tests and practical trials ensure the best experience of use and usage by the end consumer.
                    </p>
                  </motion.div>
                </motion.div>
                <div className="text-left">
                  <Link to="/contact" className="inline-block border border-[#E3DF00] text-[#E3DF00] uppercase text-xs tracking-widest font-black px-8 py-3.5 rounded-full hover:bg-[#E3DF00] hover:text-black transition-all duration-300">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            {/* ZWR / RELIFE Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* ZWR Card */}
              <div className="relative h-[500px] rounded-[20px] overflow-hidden group border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={zwrVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-4 text-center text-white p-8">
                  {/* --- MOVING FEATURE MARQUEE LABEL --- */}
                  <div className="feature-preview__label w-28 overflow-hidden relative select-none">
                    <motion.div
                      className="feature-preview__label-inner flex whitespace-nowrap text-xs font-bold tracking-[0.3em] uppercase text-gray-200 gap-6"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                    </motion.div>
                  </div>
                  {/* Title Image */}
                  <img src={zwrTitle} alt="ZWR" className="h-16 md:h-20 w-auto object-contain my-2" />
                  <motion.img
                    src={zwrIcon}
                    alt="ZWR Icon"
                    className="w-8 h-8 object-contain brightness-0 invert mt-2"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
              {/* RELIFE Card */}
              <div className="relative h-[500px] rounded-[20px] overflow-hidden group border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={relifeVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-4 text-center text-white p-8">
                  {/* --- MOVING FEATURE MARQUEE LABEL --- */}
                  <div className="feature-preview__label w-28 overflow-hidden relative select-none">
                    <motion.div
                      className="feature-preview__label-inner flex whitespace-nowrap text-xs font-bold tracking-[0.3em] uppercase text-gray-200 gap-6"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                      <span>Feature</span>
                    </motion.div>
                  </div>
                  {/* Title Image */}
                  <img src={relifeTitle} alt="RELIFE" className="h-16 md:h-20 w-auto object-contain my-2" />
                  <motion.img
                    src={relifeIcon}
                    alt="RELIFE Icon"
                    className="w-8 h-8 object-contain brightness-0 invert mt-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
            {/* --- DISCOVER OUR PRODUCTS SPOTLIGHT --- */}
            <div className="mt-28 flex flex-col items-center w-full">
              {/* Header Ticker */}
              <div className="relative z-10 flex justify-center max-w-7xl mx-auto mb-6 md:mb-8 w-full">
                <div className="w-[280px] sm:w-[360px] md:w-[200px] overflow-hidden whitespace-nowrap">
                  <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                      duration: 8,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                    className="flex w-max"
                  >
                    <div className="flex gap-6 pr-6 shrink-0 items-center">
                      <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-400 uppercase">
                        DISCOVER OUR PRODUCTS .
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-400 uppercase">
                        DISCOVER OUR PRODUCTS .
                      </span>
                    </div>

                    <div className="flex gap-6 pr-6 shrink-0 items-center">
                      <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-400 uppercase">
                        DISCOVER OUR PRODUCTS .
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-gray-400 uppercase">
                        DISCOVER OUR PRODUCTS .
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* MOBILE ONLY THUMBNAILS */}
              <div className="block md:hidden mb-6 w-full">
                {renderThumbnails()}
              </div>

              {/* Main Showcase Stage Area */}
              <div
                onClick={handleStageClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                className="group relative z-10 max-w-7xl mx-auto h-[320px] sm:h-[400px] md:h-[580px] flex items-center justify-center cursor-none w-full"
              >
                {/* Giant Background Text Area */}
                <div className="absolute top-[25%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen pointer-events-none z-0 flex items-center justify-center overflow-hidden h-[120px] sm:h-[200px] md:h-[300px]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.h2
                      key={activeProduct.id}
                      variants={bgTextVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className={`whitespace-nowrap max-w-none w-max text-[50px] sm:text-[90px] md:text-[160px] lg:text-[175px] font-black uppercase tracking-wider text-center leading-none transition-colors duration-500 ease-out ${
                        isHovered ? 'md:text-[#E2DE00] text-transparent' : 'text-transparent'
                      }`}
                      style={{
                        WebkitTextStroke: '1.5px rgba(226, 222, 0, 0.25)',
                      }}
                    >
                      {activeProduct.title}
                    </motion.h2>
                  </AnimatePresence>
                </div>
                {/* DESKTOP Hover Information Card */}
                <AnimatePresence>
                  {isHovered && hoverZone === 'center' && (
                    <motion.div
                      initial={{ opacity: 0, x: -120, y: -40, scale: 0.85 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -120, y: -40, scale: 0.85 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="hidden md:block absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 w-[320px] sm:w-[400px] md:w-[360px] bg-[#111111]/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl pointer-events-none origin-top-left"
                    >
                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-10 tracking-wide">
                        {activeProduct.title}
                      </h3>

                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-1.5">
                            TECHNOLOGY
                          </span>
                          {activeProduct.technology && brandSvgMap[activeProduct.technology] ? (
                            <img
                              src={brandSvgMap[activeProduct.technology]}
                              alt={activeProduct.technology}
                              className="h-7 w-auto max-w-[110px] object-contain object-left brightness-0 invert"
                            />
                          ) : (
                            <span className="text-xl font-extrabold text-white tracking-widest uppercase">
                              {activeProduct.technology}
                            </span>
                          )}
                        </div>

                        {activeProduct.feature && (
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-1.5">
                              FEATURE
                            </span>
                            {brandSvgMap[activeProduct.feature] ? (
                              <img
                                src={brandSvgMap[activeProduct.feature]}
                                alt={activeProduct.feature}
                                className="h-7 w-auto max-w-[110px] object-contain object-left brightness-0 invert"
                              />
                            ) : (
                              <span className="text-xl font-extrabold text-white tracking-widest uppercase">
                                {activeProduct.feature}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-xs sm:text-lg text-gray-300 font-normal leading-relaxed tracking-tight mb-10 max-w-[280px] sm:max-w-[270px]">
                        {activeProduct.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Directional Center Product Image */}
<div className="relative z-20 h-full w-[400px] flex items-center justify-center overflow-hidden">                  <AnimatePresence custom={direction} initial={false}>
                    <motion.div
  key={activeProduct.id}
  custom={direction}
  variants={imageVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  className="absolute flex items-center justify-center h-[80%] md:h-[76%]"
>
  <Link
    to={activeProduct.link}
    className="pointer-events-auto"
  >
    <img
      src={activeProduct.image}
      alt={activeProduct.title}
      className={`h-full w-auto object-contain transition-all duration-500 ease-out ${
        isHovered && hoverZone === "center"
          ? "md:scale-125 brightness-100"
          : "scale-100 brightness-100 md:brightness-80"
      }`}
    />
  </Link>
</motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* MOBILE Black Box Feature Details */}
              <div className="block md:hidden w-full max-w-lg mx-auto mt-4 z-30 bg-[#111111] rounded-2xl p-6 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-medium text-white mb-6 tracking-wide text-center">
                  {activeProduct.title}
                </h3>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1.5">
                      TECHNOLOGY
                    </span>
                    {activeProduct.technology && brandSvgMap[activeProduct.technology] ? (
                      <img
                        src={brandSvgMap[activeProduct.technology]}
                        alt={activeProduct.technology}
                        className="h-6 w-auto max-w-[100px] object-contain brightness-0 invert"
                      />
                    ) : (
                      <span className="text-lg font-extrabold text-white tracking-widest uppercase">
                        {activeProduct.technology}
                      </span>
                    )}
                  </div>

                  {activeProduct.feature && (
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1.5">
                        FEATURE
                      </span>
                      {brandSvgMap[activeProduct.feature] ? (
                        <img
                          src={brandSvgMap[activeProduct.feature]}
                          alt={activeProduct.feature}
                          className="h-6 w-auto max-w-[100px] object-contain brightness-0 invert"
                        />
                      ) : (
                        <span className="text-lg font-extrabold text-white tracking-widest uppercase">
                          {activeProduct.feature}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-xs text-gray-300 font-normal leading-relaxed tracking-tight mb-6 text-center">
                  {activeProduct.description}
                </p>

                <div className="flex justify-center w-full">
                  <a
                    href={activeProduct.link || '#'}
                    className="w-full text-center inline-block border border-[#E2DE00] text-[#E2DE00] bg-transparent font-bold  tracking-wider text-lg px-6 py-3 rounded-full transition-transform active:scale-95 shadow-md hover:bg-[#E2DE00]/10"
                  >
                    Discover Products
                  </a>
                </div>
              </div>

              {/* DESKTOP ONLY THUMBNAILS */}
              <div className="hidden md:block mt-6 w-full">
                {renderThumbnails()}
              </div>

              {/* Dynamic Floating Cursor */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    style={{
                      x: smoothX,
                      y: smoothY,
                      translateX: '-50%',
                      translateY: '-50%',
                    }}
                    className="fixed left-0 top-0 z-50 pointer-events-none hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-[#E2DE00] p-2.5 shadow-xl"
                  >
                    <span className="text-black text-2xl font-bold leading-none select-none">
                      {hoverZone === 'left' ? '←' : hoverZone === 'right' ? '→' : '+'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
      Don't miss our events and the latest news about our products and
      successes.
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
        Dichiaro di aver letto e di accettare il{" "}
        <Link
          to="/informative/privacy-policy"
          className="underline hover:text-[#cbf200] transition-colors"
        >
          trattamento dei dati personali
        </Link>
        .
      </span>
    </label>
    </div>

    </section>

  </div>
  </section>
      </div>
    </div>
  );
};

export default Home;