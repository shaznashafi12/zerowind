import React, { useState } from 'react';
import zerowindlogo from '../images/logo.svg';
import zw from '../images/logo2.svg';
import { IoMenuOutline } from "react-icons/io5";
import fitimg from '../images/fit.webp';
import motionimg from '../images/motion.webp';
import powerimg from '../images/power.webp';
import braveimg from '../images/brave.webp';
import vaporaimg from '../images/vapor.webp';

import fittext from '../icons/fit1.svg';
import motiontext from '../icons/motion1.svg';
import powertext from '../icons/power1.svg';
import bravetext from '../icons/brave1.svg';
import vaporatext from '../icons/vapora1.svg';

import zwr from '../images/zwr.svg';
import relife from '../images/rekeif.svg';

import zwrlogo from '../images/wtrdroplets.svg';
import relifelogo from '../images/recycle.svg';

export const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'tech' | 'features' | 'menu' | null>(null);
  const [selectedLang, setSelectedLang] = useState<'IT' | 'EN'>('EN');

  const techItems = [
    { title: fittext, image: fitimg, href: '/fit', alt: 'FIT' },
    { title: motiontext, image: motionimg, href: '/motion', alt: 'MOTION' },
    { title: powertext, image: powerimg, href: '/power', alt: 'POWER' },
    { title: bravetext, image: braveimg, href: '/brave', alt: 'BRAVE' },
  ];

  const featureItems = [
    {
      logo: zwr,
      icon: zwrlogo,
      subtitle: 'WATER REPELLENT TREATMENT',
      href: '/zwr',
      alt: 'ZWR',
    },
    {
      logo: relife,
      icon: relifelogo,
      subtitle: 'ECO-FRIENDLY SOLUTIONS',
      href: '/zwr',
      alt: 'RELIFE',
    },
  ];

  const handleNavClick = (href: string) => {
    setActiveDropdown(null);
    window.location.hash = href;
    // Force App.tsx router to detect change even if hash was already set
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  const toggleMenu = () => {
    setActiveDropdown((prev) => (prev === 'menu' ? null : 'menu'));
  };

  const isMenuOpen = activeDropdown === 'menu';

  return (
<header className="fixed top-0 left-0 w-full z-50 pointer-events-none">      <div className="w-full px-0 flex md:items-start justify-between relative z-50">
        
        {/* Left Logo Container */}
        <a
          href="/"
          onClick={() => handleNavClick('/')}
          className={`pointer-events-auto bg-[#272727] px-4 py-6 md:pl-8 md:pr-10 md:py-11 md:rounded-br-[60px] flex items-center group transition-all duration-500 ease-in-out z-30 ${
            isMenuOpen 
              ? '-translate-y-full opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto' 
              : 'translate-y-0 opacity-100'
          }`}          
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Zerowind Home"
        >
          <div
            className={`hidden h-12 md:flex items-center justify-start overflow-hidden transition-all duration-500 ease-in-out px-4 ${
              isHovered ? 'w-[530px]' : 'w-[200px]'
            }`}
          >
            <img
              src={isHovered ? zerowindlogo : zw}
              alt="Zerowind Logo"
              className="h-full w-auto max-w-none object-contain pointer-events-none"
            />
          </div>
          <div className="flex md:hidden h-5 w-auto items-center justify-start px-1">
            <img
              src={zerowindlogo} 
              alt="Zerowind Logo"
              className="h-full w-auto max-w-none object-contain pointer-events-none"
            />
          </div>
        </a>

        {/* Right Navigation & Dropdowns */}
        <div 
          className={`pointer-events-auto bg-[#272727] px-4 py-6 md:pl-10 md:pr-12 md:py-11 flex items-center space-x-6 md:space-x-10 z-20 relative transition-all duration-300 ${
            activeDropdown ? 'md:rounded-bl-none' : 'md:rounded-bl-[60px]'
          }`}
          onMouseLeave={() => {
            if (activeDropdown !== 'menu') setActiveDropdown(null);
          }}
        >
          <nav className="hidden md:flex items-center space-x-10 text-lg font-bold tracking-[0.15em] uppercase">
            <div 
              className="py-1 cursor-pointer"
              onMouseEnter={() => setActiveDropdown('tech')}
            >
              <button
                type="button"
                className={`transition-colors duration-200 flex items-center gap-1.5 group py-1 ${
                  activeDropdown === 'tech' ? 'text-white' : 'text-[#E2DE00] hover:text-white'
                }`}
              >
                TECHNOLOGIES
                <span className={`text-lg transition-transform duration-300 ${
                  activeDropdown === 'tech' ? 'rotate-180 text-white' : 'text-[#E2DE00] group-hover:rotate-90'
                }`}>
                  +
                </span>
              </button>
            </div>

            <div 
              className="py-1 cursor-pointer"
              onMouseEnter={() => setActiveDropdown('features')}
            >
              <button
                type="button"
                className={`transition-colors duration-200 flex items-center gap-1.5 group py-1 ${
                  activeDropdown === 'features' ? 'text-white' : 'text-[#E2DE00] hover:text-white'
                }`}
              >
                FEATURES
                <span className={`text-lg transition-transform duration-300 ${
                  activeDropdown === 'features' ? 'rotate-180 text-white' : 'text-[#E2DE00] group-hover:rotate-90'
                }`}>
                  +
                </span>
              </button>
            </div>
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            className="text-[#E2DE00] hover:text-white transition-all duration-300 focus:outline-none p-1 cursor-pointer flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <IoMenuOutline 
              className={`md:text-4xl text-3xl transition-transform duration-500 ease-in-out ${
                activeDropdown === 'menu' ? 'rotate-90 text-white' : 'rotate-0'
              }`} 
            />
          </button>

          {/* Desktop Tech Dropdown */}
          <div className="hidden md:block absolute -right-4 md:-right-12 top-full overflow-hidden z-10 pointer-events-none w-[100vw] md:w-[576px]">
            <div 
              className={`bg-[#272727] p-8 md:rounded-b-[60px] transition-transform duration-500 ease-in-out transform ${
                activeDropdown === 'tech' ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'          
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                {techItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative h-40 rounded-2xl overflow-hidden group/card block shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={`${item.alt} background`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#E2DE00] opacity-0 group-hover/card:opacity-75 mix-blend-multiply transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <img
                        src={item.title}
                        alt={item.alt}
                        className="h-5 w-auto object-contain pointer-events-none drop-shadow-lg"
                      />
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="/vapora"
                onClick={() => handleNavClick('#vapora')}
                className="relative h-40 rounded-2xl overflow-hidden group/card block mt-4 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={vaporaimg}
                  alt="VAPORA"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#E2DE00] opacity-0 group-hover/card:opacity-75 mix-blend-multiply transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img
                    src={vaporatext}
                    alt="VAPORA"
                    className="h-5 w-auto object-contain pointer-events-none drop-shadow-lg"
                  />
                </div>
              </a>

              <p className="text-center text-neutral-400 text-xs tracking-widest font-semibold uppercase mt-6 px-4 leading-relaxed">
                Select one of our outdoor fabrics and discover its technical characteristics.
              </p>
            </div>
          </div>

          <style>{`
            @keyframes slowBounceDroplet {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-12px);
              }
            }
            .animate-slow-bounce {
              animation: slowBounceDroplet 0.8s ease-in-out infinite;
            }
          `}</style>

          {/* Desktop Features Dropdown */}
          <div className="hidden md:block absolute -right-4 md:-right-12 top-full overflow-hidden z-10 pointer-events-none w-[100vw] md:w-[576px]">
            <div 
              className={`bg-[#272727] p-8 md:rounded-b-[60px] transition-transform duration-500 ease-in-out transform ${
                activeDropdown === 'features' ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
              }`}
            >
              <div className="flex flex-col gap-4">
                {featureItems.map((item, index) => {
                  const isZwr = item.alt === 'ZWR';
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="group/feature flex items-center px-8 py-12 rounded-2xl border border-white bg-[#272727] shadow-md hover:shadow-xl"
                    >
                      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center mr-8">
                        <img
                          src={item.icon}
                          alt=""
                          className={`w-full h-full object-contain brightness-0 invert transition-transform ${
                            isZwr
                              ? 'group-hover/feature:animate-[slowBounceDroplet_6.2s_ease-in-out_infinite]'
                              : 'group-hover/feature:animate-[spin_7s_linear_infinite]'
                          }`}
                        />
                      </div>

                      <div className="flex flex-col items-start justify-center">
                        <img
                          src={item.logo}
                          alt={item.alt}
                          className="h-14 w-auto object-contain mb-2"
                        />
                        <span className="text-[12px] font-bold tracking-[0.2em] text-neutral-300 uppercase">
                          {item.subtitle}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              <p className="text-center text-neutral-400 text-xs tracking-widest font-semibold uppercase mt-6 px-4 leading-relaxed">
                Select one of our features and discover its technical characteristics.
              </p>
            </div>
          </div>

          {/* Desktop Main Menu Dropdown */}
          <div className="hidden md:block absolute -right-4 md:-right-2 top-full overflow-hidden z-10 pointer-events-none w-[100vw] md:w-[576px]">
            <div 
              className={`bg-[#272727] pt-12 pb-16 pr-26 pl-12 md:rounded-b-[60px] transition-transform duration-500 ease-in-out transform flex flex-col items-end justify-between min-h-[380px] ${
                activeDropdown === 'menu' ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
              }`}
            >
              <div className="flex flex-col items-end space-y-6 mt-4">
                <a 
                  href="/" 
                  onClick={() => handleNavClick('/')}
                  className="text-white text-5xl md:text-5xl font-black tracking-tight hover:text-[#E2DE00] transition-colors uppercase"
                >
                  HOME
                </a>
                <a 
                  href="/news" 
                  onClick={() => handleNavClick('#news')}
                  className="text-white text-5xl md:text-5xl font-black tracking-tight hover:text-[#E2DE00] transition-colors uppercase"
                >
                  NEWS
                </a>
                <a 
                  href="/contact" 
                  onClick={() => handleNavClick('#contacts')}
                  className="text-white text-5xl md:text-5xl font-black tracking-tight hover:text-[#E2DE00] transition-colors uppercase"
                >
                  CONTACTS
                </a>
              </div>

              <div className="flex items-center space-x-2 text-lg font-bold tracking-widest mt-12 pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedLang('IT')}
                  className={`transition-colors ${
                    selectedLang === 'IT' ? 'text-[#E2DE00]' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  IT
                </button>
                <span className="text-neutral-500 font-normal">.</span>
                <button
                  type="button"
                  onClick={() => setSelectedLang('EN')}
                  className={`transition-colors ${
                    selectedLang === 'EN' ? 'text-[#E2DE00]' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#272727] text-white z-20 overflow-y-auto transition-transform duration-500 ease-in-out pt-24 pb-12 px-6 flex flex-col pointer-events-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
      >
        <div className="mb-10">
          <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-neutral-300 uppercase mb-6">
            TECHNOLOGY
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {techItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative h-28 rounded-xl overflow-hidden block shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-2 bg-black/20">
                  <img src={item.title} alt={item.alt} className="h-4 w-auto object-contain" />
                </div>
              </a>
            ))}
          </div>

          <a
            href="#vapora"
            onClick={() => handleNavClick('#vapora')}
            className="relative h-28 rounded-xl overflow-hidden block shadow-md"
          >
            <img src={vaporaimg} alt="VAPORA" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center p-2 bg-black/20">
              <img src={vaporatext} alt="VAPORA" className="h-4 w-auto object-contain" />
            </div>
          </a>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-neutral-300 uppercase mb-6">
            FEATURES
          </h3>
          <div className="flex flex-col gap-4">
            {featureItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl border border-neutral-700 bg-[#272727] text-center"
              >
                <img src={item.logo} alt={item.alt} className="h-8 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  {item.subtitle}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 my-6">
          <a
            href="/"
            onClick={() => handleNavClick('/')}
            className="text-white text-3xl font-black tracking-wider uppercase hover:text-[#E2DE00] transition-colors"
          >
            HOME
          </a>
          <a
            href="#news"
            onClick={() => handleNavClick('#news')}
            className="text-white text-3xl font-black tracking-wider uppercase hover:text-[#E2DE00] transition-colors"
          >
            NEWS
          </a>
          <a
            href="#contacts"
            onClick={() => handleNavClick('#contacts')}
            className="text-white text-3xl font-black tracking-wider uppercase hover:text-[#E2DE00] transition-colors"
          >
            CONTACTS
          </a>
        </div>

        <div className="flex items-center justify-center space-x-2 text-base font-bold tracking-widest mt-8 pb-6">
          <button
            type="button"
            onClick={() => setSelectedLang('IT')}
            className={`transition-colors ${
              selectedLang === 'IT' ? 'text-[#E2DE00]' : 'text-neutral-400'
            }`}
          >
            IT
          </button>
          <span className="text-neutral-500 font-normal">.</span>
          <button
            type="button"
            onClick={() => setSelectedLang('EN')}
            className={`transition-colors ${
              selectedLang === 'EN' ? 'text-[#E2DE00]' : 'text-neutral-400'
            }`}
          >
            EN
          </button>
        </div>
      </div>

    </header>
  );
};