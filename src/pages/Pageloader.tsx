import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.1,
        delay: 1.15,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[#E5E400]"
        initial={{
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        }}
        animate={{
          clipPath: "polygon(0 100%,100% 100%,100% 100%,0 65%)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </motion.div>
  );
};

export default PageLoader;