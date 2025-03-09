import { motion } from "framer-motion";

const gradientBackground = () => {
  const colors = [
    "#1f6feb",
    "#2ea043",
    "#58a6ff",
    "#2ea043",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-[${colors[0]}]/20 via-[${colors[0]}]/10 to-transparent blur-3xl`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-radial from-[${colors[1]}]/20 via-[${colors[1]}]/10 to-transparent blur-3xl`}
      />
    </div>
  );
};

export default gradientBackground;