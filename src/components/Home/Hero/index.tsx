"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { XIcon } from "@primer/octicons-react";
import CTAForm from "./cta-form";
import ServiceInquiryForm from "./service-form";

// Animation variants for reusability
const fadeInUpVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay }
  })
};

const floatingOrbitVariants = {
  orbit1: {
    y: [0, -15, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 6, repeat: Infinity, repeatType: "reverse" as const }
  },
  orbit2: {
    y: [0, 10, 0],
    x: [0, -5, 0],
    scale: [1, 0.9, 1],
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" as const, delay: 0.5 }
  },
  orbit3: {
    y: [0, 5, 0],
    x: [0, 15, 0],
    scale: [1, 1.2, 1],
    transition: { duration: 7, repeat: Infinity, repeatType: "reverse" as const, delay: 1 }
  }
};

// Modal component for reusability
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
}

const Modal = ({ isOpen, onClose, children, modalRef }: ModalProps) => {
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#010409]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        className="bg-[#0d1117] rounded-xl border border-[#30363d] shadow-2xl max-w-md w-full p-8 relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
          aria-label="Close modal"
        >
          <XIcon size={24} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

interface FloatingOrbitProps {
  className: string;
  variant: "orbit1" | "orbit2" | "orbit3";
}

const FloatingOrbit = ({ className, variant }: FloatingOrbitProps) => (
  <motion.div
    className={className}
    variants={floatingOrbitVariants}
    animate={variant}
  />
);

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const buyModalRef = useRef<HTMLDivElement>(null);
  const sellModalRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const value = scrollY.get();
      setIsHeaderVisible(value < 300); // Only show header when scrollY is less than 300
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (buyModalRef.current && buyModalRef.current.contains(event.target as Node)) {
      setIsBuyingOpen(false);
    }
    if (sellModalRef.current && sellModalRef.current.contains(event.target as Node)) {
      setIsSellingOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    // Prevent body scroll when modals are open
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBuying, isSelling]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 dark:from-[#1d3d69] dark:via-[#3B7C99] dark:to-[#275f56] pt-24 md:pt-32 lg:pt-40"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/banner-image.png')] opacity-5" aria-hidden="true"></div>
        
        {/* Decorative glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#8a70ff] opacity-20 rounded-full filter blur-[80px] md:blur-[120px]" aria-hidden="true"></div>
        <div className="absolute bottom-1/2 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#ff70d8] opacity-20 rounded-full filter blur-[80px] md:blur-[120px]" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-64 h-48 md:h-64 bg-[#ff9d3d] opacity-20 rounded-full filter blur-[60px] md:blur-[80px]" aria-hidden="true"></div>
      </div>

      {/* Sticky Header Section */}
      <div className="sticky top-auto z-10 w-full max-h-96 mb-12 md:mb-20 flex justify-center">
      {isHeaderVisible && (
        <motion.div
          className="container fixed mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl py-6 md:py-8 flex justify-center"
          style={{ opacity }}
          initial={{ opacity: 1 }}
        >
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Text Content */}
            <div className="w-full text-center mb-8 md:mb-16">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
              >
                Empowering businesses, startups and creators{" "}
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a70ff] to-[#ff70d8]">
                    ideas, into digital platform
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-md text-[#a8b3cf] mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed"
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
              >
                Join the best AI-powered development platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-10"
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
              >
                <button
                  onClick={() => setIsBuyingOpen(true)}
                  className="px-6 sm:px-8 py-2 bg-white text-[#070c3b] rounded-md font-medium transition-all hover:bg-gray-100 flex items-center justify-center"
                  aria-label="Contact us"
                >
                  Let's talk now
                </button>
                <button
                  onClick={() => setIsSellingOpen(true)}
                  className="px-6 sm:px-8 py-2 bg-[#28a745] text-white rounded-md transition-all hover:bg-[#218838] flex items-center justify-center"
                  aria-label="Schedule a meeting"
                >
                  Schedule →
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
       )}
        {/* Spacer for sticky positioning */}
        <div className="h-screen"></div>
      </div>

      {/* Main Content Section */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-2xl">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing effect behind the editor */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-60 md:h-80 bg-[#8a70ff]/20 rounded-full filter blur-[80px] md:blur-[100px]" 
            aria-hidden="true"
          />

          {/* Main Image Preview */}
          <motion.div
            className="w-full max-w-full mx-auto relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Floating orbits */}
            <FloatingOrbit 
              className="absolute -top-12 -left-6 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#8a70ff] z-20 opacity-80"
              variant="orbit1"
            />
            <FloatingOrbit 
              className="absolute -top-16 sm:-top-20 left-16 sm:left-20 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#ff70d8] z-20 opacity-80"
              variant="orbit2"
            />
            <FloatingOrbit 
              className="absolute -top-12 sm:-top-16 left-32 sm:left-40 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#ff9d3d] z-20 opacity-80"
              variant="orbit3"
            />
            
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/20 via-[#bc8cff]/20 to-[#58a6ff]/20 rounded-2xl md:rounded-3xl filter blur-[20px] md:blur-[40px] opacity-70" 
              aria-hidden="true"
            />

            {/* Image Preview Container */}
            <div className="relative w-full max-w-full md:max-h-96 mx-auto">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-transparent border-4 md:border-8 border-[#8a70ff] bg-[#8a70ff]">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[#30363d] bg-[#0d1117]">
                  {/* Code background */}
                  <div className="absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
                    <pre className="text-[#58a6ff] text-xs p-4">
                      {`function initPlatform() {
  const config = {
    mode: "production",
    features: ["analytics", "automation", "scaling"],
    performance: "optimized"
  };
  
  return new Platform(config).launch();
}`}
                    </pre>
                  </div>

                  {/* Header bar */}
                  <div className="absolute top-0 left-0 right-0 h-5 md:h-7 bg-[#161b22] border-b border-[#30363d] flex items-center px-2 md:px-4 gap-1 md:gap-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#2e2727]"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#2e2727]"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#2e2727]"></div>
                    <div className="ml-1 md:ml-2 text-[#8b949e] text-[10px] md:text-xs font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                      Transform Your Digital Presence with AI-Driven Solutions
                    </div>
                  </div>

                  {/* Glow effect behind the image */}
                  <div 
                    className="absolute inset-4 md:inset-8 bg-gradient-to-br from-[#1f6feb]/20 to-[#2ea043]/20 filter blur-md md:blur-xl rounded-lg" 
                    aria-hidden="true"
                  ></div>

                  <Image
                    src="/images/hero/banner-image.png"
                    alt="Platform preview"
                    width={740}
                    height={600}
                    className="relative z-10 pt-6 md:pt-10 w-full h-auto"
                    priority
                  />

                  {/* Live Demo Badge */}
                  <motion.div
                    className="absolute bottom-3 md:bottom-5 right-3 md:right-5 bg-[#238636] bg-opacity-90 backdrop-blur-sm px-2 md:px-3 py-1 rounded text-white text-xs md:text-sm font-medium"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    Live Demo
                  </motion.div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 md:-right-8 bg-[#0d1117] border border-[#30363d] rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#238636] flex items-center justify-center text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 md:w-5 md:h-5"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#e6edf3] text-sm md:text-base font-medium">99.9% Uptime</p>
                    <p className="text-[#8b949e] text-[10px] md:text-xs">
                      Enterprise-grade reliability
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        <Modal 
          isOpen={isBuying} 
          onClose={() => setIsBuyingOpen(false)} 
          modalRef={buyModalRef}
        >
          <ServiceInquiryForm />
        </Modal>
      </AnimatePresence>

      <AnimatePresence>
        <Modal 
          isOpen={isSelling} 
          onClose={() => setIsSellingOpen(false)} 
          modalRef={sellModalRef}
        >
          <CTAForm />
        </Modal>
      </AnimatePresence>
    </section>
  );
};

export default Hero;