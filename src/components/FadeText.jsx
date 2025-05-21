import { motion } from "framer-motion";

const FadeText = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} // Ensures animation triggers when in view
        className="text-blue-800 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        FAVORITE ONLINE <br />
        <motion.span
          key="fade-text"
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text"
        >
          VIRTUAL GAMING PLATFORM
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default FadeText;
