import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import img1 from "../images/arsenal.webp";
import waterproofIcon from "../icons/waterproof.svg";
import windprotectionIcon from "../icons/windprotection.svg";
import breathIcon from "../icons/breath.svg";
import thermoreIcon from "../icons/thermore.svg";

const container: Variants = {  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word: Variants = {  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export default function ArsenalContent() {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="w-full bg-[#272727] text-white font-sans overflow-hidden">
      {/* Custom CSS for outline text stroke */}
      <style>{`
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1.8px #A9B300;
  text-stroke: 1.8px #d4ff00;
}     .spec-icon-tint {
          filter: invert(67%) sepia(83%) saturate(534%) hue-rotate(40deg) brightness(161%) contrast(82%);
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-16 pb-12 px-4 overflow-hidden">
        {/* Background Big Outline Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
<h1 className="text-[17vw] md:text-[14vw] font-extrabold uppercase tracking-[0.04em] leading-none outline-text">
  ARSENAL
</h1>
        </motion.div>

        {/* Product Jacket Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-center my-auto"
        >
          <img
            src={img1}
            alt="Arsenal Jacket"
            className="w-full h-[500px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
          />
        </motion.div>
      </section>

      {/* ================= PRODUCT DETAILS SECTION ================= */}
      <section className="relative z-20 max-w-5xl pt-20 mx-auto px-4 sm:px-6 -mt-12 md:-mt-24 pb-20">
        {/* Rounded Dark Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="bg-[#0c0c0c] border border-neutral-800/80 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl text-center backdrop-blur-sm"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mb-8">
            Arsenal
          </h2>

          {/* Description Bullet List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2.5 text-neutral-300 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            <motion.p variants={fadeInUp}>Custom product exclusively for customer.</motion.p>
            <motion.p variants={fadeInUp}>Light shield fabric for mid-season.</motion.p>
            <motion.p variants={fadeInUp}>Very breathable and with absolute wind protection.</motion.p>
            <motion.p variants={fadeInUp}>Resistant to abrasion.</motion.p>
            <motion.p variants={fadeInUp}>Extremely stretchy, perfect for making slim fit garments.</motion.p>
          </motion.div>

          {/* Subtext */}
          <p className="text-xs text-neutral-500 mb-12">
            Photo: Selkie jacket by Gobik (
            <a
              href="https://gobik.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white transition-colors"
            >
              gobik.com
            </a>
            )
          </p>

          {/* Feature Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <FeatureBadge
              icon={<img src={waterproofIcon} alt="Waterproofness" className="w-9 h-9 object-contain spec-icon-tint" />}
              label="Waterproofness"
            />
            <FeatureBadge
              icon={<img src={windprotectionIcon} alt="Total wind protection" className="w-9 h-9 object-contain spec-icon-tint" />}
              label="Total wind protection"
            />
            <FeatureBadge
              icon={<img src={breathIcon} alt="High breathability" className="w-9 h-9 object-contain spec-icon-tint" />}
              label="High breathability"
            />
            <FeatureBadge
              icon={<img src={thermoreIcon} alt="Thermoregulation" className="w-9 h-9 object-contain spec-icon-tint" />}
              label="Thermoregulation"
            />
          </div>

          {/* Bottom Interactive Tech Cards */}
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Tech Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#121212] border border-neutral-600 rounded-2xl p-5 flex flex-col items-center justify-center transition-colors hover:border-[#d4ff00]/40 group cursor-pointer"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 mb-1">Technology</span>
              <span className="text-2xl sm:text-3xl font-black italic tracking-wider group-hover:text-[#d4ff00] transition-colors">FIT</span>
            </motion.div>

            {/* Feature Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#151515] border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center transition-colors hover:border-[#d4ff00]/40 group cursor-pointer"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 mb-1">Feature</span>
              <span className="text-2xl sm:text-3xl font-black italic tracking-wider group-hover:text-[#d4ff00] transition-colors">ZWR</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
<section 
className="max-w-7xl mx-auto px-10 lg:px-16 pb-32">
       <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
<motion.h2
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-[68px] lg:text-[76px] font-black leading-[0.92] tracking-[-0.04em] mb-24"
>
  <div className="flex gap-4 flex-nowrap">
    {["Contact", "us", "for", "information", "on", "this"].map((text) => (
      <motion.span
        key={text}
        variants={word}
        className="inline-block whitespace-nowrap"
      >
        {text}
      </motion.span>
    ))}
  </div>

  <div className="mt-2">
    <motion.span
      variants={word}
      className="inline-block"
    >
      product
    </motion.span>
  </div>
</motion.h2>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form flex flex-col-reverse gap-8">

            <div className="contact-form__footer">
              <button
  type="submit"
  className="group relative h-[48px] w-[96px] overflow-hidden rounded-full border border-[#d4ff00] text-[#d4ff00] transition-all duration-500 hover:text-black"
>
  <span className="absolute inset-0 translate-y-full rounded-full bg-[#d4ff00] transition-transform duration-500 group-hover:translate-y-0"></span>

  <span className="relative z-10 text-[17px] font-semibold">
    Send
  </span>
</button>
            </div>

            <div 
className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
              <div className="input text required input--1">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name *"
                  required
                  id="fullname"
                  aria-required="true"
className="w-full bg-transparent border-0 border-b border-[#6f6f6f] rounded-none px-0 pb-4 pt-1 text-[18px] text-white placeholder:text-[#8f8f8f] focus:border-[#d4ff00] focus:outline-none transition-all duration-300"                />
                <label htmlFor="fullname" className="sr-only">Full name</label>
              </div>

              <div className="input email required input--2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  id="email"
                  aria-required="true"
className="w-full bg-transparent border-0 border-b border-[#6f6f6f] rounded-none px-0 pb-4 pt-1 text-[18px] text-white placeholder:text-[#8f8f8f] focus:border-[#d4ff00] focus:outline-none transition-all duration-300"                />
                <label htmlFor="email" className="sr-only">Email</label>
              </div>

              <div className="input tel input--3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  id="phone"
className="w-full bg-transparent border-0 border-b border-[#6f6f6f] rounded-none px-0 pb-4 pt-1 text-[18px] text-white placeholder:text-[#8f8f8f] focus:border-[#d4ff00] focus:outline-none transition-all duration-300"                />
                <label htmlFor="phone" className="sr-only">Phone</label>
              </div>

              <div className="input text input--13">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  id="company"
className="w-full bg-transparent border-0 border-b border-[#6f6f6f] rounded-none px-0 pb-4 pt-1 text-[18px] text-white placeholder:text-[#8f8f8f] focus:border-[#d4ff00] focus:outline-none transition-all duration-300"                />
                <label htmlFor="company" className="sr-only">Company</label>
              </div>

              <div className="input textarea required input--4 md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  id="message"
                  aria-required="true"
                  rows={7}
className="w-full bg-transparent border-0 border-b border-[#6f6f6f] rounded-none px-0 pb-4 pt-1 text-[18px] text-white placeholder:text-[#8f8f8f] focus:border-[#d4ff00] focus:outline-none transition-all duration-300"                ></textarea>
                <label htmlFor="message" className="sr-only">Message</label>
              </div>

              <div className="input checkbox required input--5 md:col-span-2 mt-6">
                <input type="hidden" name="privacy" value="0" />
                <label htmlFor="privacy" className="flex items-start gap-2.5 text-xs text-neutral-400 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    value="1"
                    required
                    id="privacy"
                    aria-required="true"
className="mt-1 h-[15px] w-[15px] rounded-none border border-[#d4ff00] bg-transparent appearance-none checked:bg-[#d4ff00] cursor-pointer"                  />
                  <span>
                    <span>
                      <span>
I have read and agree to the
<a
  href="/privacy-policy"
  className="underline hover:text-white transition-colors"
>
  Privacy Policy
</a>
  and consent to the processing of my personal data.                        <a href="/informative/privacy-policy" className="underline hover:text-white transition-colors">il trattamento dei miei dati personali</a>
                        .
                      </span>
                    </span>
                  </span>
                </label>
              </div>

            </div>

          </form>
        </motion.div>
      </section>
    </main>
  );
}

/* Reusable Feature Badge Sub-Component */
type FeatureBadgeProps = {
  icon: ReactNode;
  label: string;
};

function FeatureBadge({ icon, label }: FeatureBadgeProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl  ">
      <div className="mb-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
}