import React, { useState } from 'react';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
const footervideo ='https://res.cloudinary.com/dtzpx46v0/video/upload/v1785514507/newsletter_skpbwz.mp4'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      alert('Please accept the privacy policy.');
      return;
    }
    console.log('Submitted email:', email);
  };

  return (
    <footer className="w-full bg-[#E2DE00] text-black  pt-12 pb-8 px-6 md:px-16 flex flex-col justify-between min-h-[600px] relative">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .text-outline-light {
           -webkit-text-stroke: 1.2px rgba(0, 0, 0, 0.45); 
           -webkit-text-fill-color: transparent;
           color: transparent;
           letter-spacing: 0.01em; 
        }
      `}</style>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden select-none mt-6 sm:mt-12 mb-16 md:mb-52">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="text-outline-light text-[50px] sm:text-[130px] md:text-[160px] font-black uppercase leading-none inline-block transform scale-x-110 origin-left pr-10 md:pr-20">
      BETTER IN MOTION &nbsp;
    </span>
          <span className="text-outline-light text-[50px] sm:text-[130px] md:text-[160px] font-black uppercase leading-none inline-block transform scale-x-110 origin-left pr-10 md:pr-20">
      BETTER IN MOTION &nbsp;
    </span>

    <span className="text-outline-light text-[50px] sm:text-[130px] md:text-[160px] font-black uppercase leading-none inline-block transform scale-x-110 origin-left pr-10 md:pr-20">
      BETTER IN MOTION &nbsp;
    </span>
    <span className="text-outline-light text-[50px] sm:text-[130px] md:text-[160px] font-black uppercase leading-none inline-block transform scale-x-110 origin-left pr-10 md:pr-20">
      BETTER IN MOTION &nbsp;
    </span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 my-4 md:my-8 items-start">
        
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 pt-4">
          
          <div className="flex flex-col space-y-2 md:space-y-0 md:-ml-8">
            
            <h4 className=" text-lg tracking-wider md:text-black text-black/50 mb-4  md:mb-8">Technologies</h4>
            <a href="#fit" className="text-lg   tracking-wider hover:opacity-70 transition-opacity">FIT</a>
            <a href="#motion" className="text-lg  hover:opacity-70 transition-opacity">Motion</a>
            <a href="#power" className="text-lg  hover:opacity-70 transition-opacity">Power</a>
            <a href="#brave" className="text-lg  hover:opacity-70 transition-opacity">Brave</a>
            <a href="#vapora" className="text-lg  hover:opacity-70 transition-opacity">Vapora</a>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:-ml-8">
            <h4 className=" text-lg tracking-wider md:text-black text-black/50 mb-4  md:mb-8">Features</h4>
            <a href="#zwr" className="text-lg  hover:opacity-70 transition-opacity">ZWR</a>
            <a href="#relife" className="text-lg  hover:opacity-70 transition-opacity">Relife</a>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:-ml-8">
            <h4 className=" text-lg tracking-wider md:text-black text-black/50 mb-4  md:mb-8">Zerowind</h4>
            <a href="#contact" className="text-lg hover:opacity-70 transition-opacity">Contact</a>
            <a href="#news" className="text-lg hover:opacity-70 transition-opacity">News</a>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:-ml-8">
            <h4 className=" text-lg tracking-wider md:text-black text-black/50 mb-4  md:mb-8">Contacts</h4>
            <a href="#" className="text-lg  hover:opacity-70 transition-opacity">
              info@zerowind.it
            </a>
            <a href="#" className="text-[16px]  hover:opacity-70 transition-opacity">
              +39 045 92 16 888
            </a>
          </div>

        </div>

        <div className="hidden md:flex lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl p-6 text-white min-h-[320px]  flex flex-col justify-between">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={footervideo} type="video/mp4" />
          </video>


          <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
            <h3 className="font-medium text-lg tracking-wider mt-2 mt-6">Newsletter</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex items-center rounded-lg border border-white  overflow-hidden p-1 h-16">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent  text-xs text-white placeholder-white/60 placeholder:text-lg px-3 py-2 flex-grow focus:outline-none "
                />
                <button
                  type="submit"
                  className="bg-[#E2DE00] text-black text-[15px]  px-8 py-10 rounded-2xl  transition-colors whitespace-nowrap -mr-1 "
                >
                  Subscribe me
                </button>
              </div>

              <label className="flex items-start space-x-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-2 h-4 w-4 appearance-none  border border-[#E2DE00] bg-transparent focus:outline-none shrink-0 transition-none checked:bg-[#E2DE00] "
                  style={{
      boxShadow: isChecked ? "inset 0 0 0 4px black" : "none",
    }}
                />
                <span className="text-lg text-white/50 ">
                  Dichiaro di aver letto e di accettare il{' '}
                  <a href="#" className="underline hover:text-white">
                    trattamento dei dati personali
                  </a>
                  .
                </span>
              </label>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1 w-full lg:w-auto flex flex-row lg:flex-col items-center justify-between lg:justify-start lg:space-y-6 pt-4 lg:pt-20">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:opacity-60 transition-opacity"
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram" className="w-6 h-6 object-contain" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:opacity-60 transition-opacity"
            aria-label="Facebook"
          >
           <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:opacity-60 transition-opacity"
            aria-label="YouTube"
          >
            <img src={youtube} alt="YouTube" className="w-6 h-6 object-contain" />
          </a>
        </div>

      </div>

      <div className="w-full max-w-7xl mx-auto pt-12 md:pt-36  flex flex-col space-y-4 md:space-y-4   text-sm font-medium leading-relaxed  md:leading-tight   text-black/80 md:ml-15 mb-6 md:mb-14">
        
        <div className=" flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
          <a href="#privacy-policy" className="hover:opacity-70 transition-opacity uppercase">
            PRIVACY POLICY
          </a>
          <a href="#cookie-policy" className="hover:opacity-70 transition-opacity uppercase">
            COOKIE POLICY
          </a>
          <a href="#manage-cookies" className="hover:opacity-70 transition-opacity underline uppercase">
            MANAGE COOKIES
          </a>
          </div>
        <div className="text-left  md:text-right uppercase tracking-wider font-semibold text-black/70 max-w-md md:max-w-none pt-2 md:pt-0">
          ZEROWIND® REA VR69979 - P.IVA 00215260233 | VIA DELLA MECCANICA 29, 37139 VERONA
        </div>
</div>
          <div>
          <a href="#credits" className="hover:underline uppercase mt-4">
            CREDITS
          </a>
          </div>

        
      </div>

    </footer>
  );
};
export default Footer;