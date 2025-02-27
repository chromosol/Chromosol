"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XIcon } from "@primer/octicons-react";
import CTAForm from "./cta-form";
import ServiceInquiryForm from "./service-form";
import Link from "next/link";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#161b22] pt-60 md:pt-62" id="Hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#238636] opacity-10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#58a6ff] opacity-10 rounded-full filter blur-[120px]"></div>
        
        {/* Animated Dots */}
        {/* <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#58a6ff] rounded-full opacity-30"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div> */}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:max-w-screen-xl">
        <motion.div
          className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="lg:w-6/12 text-center lg:text-left">
            <motion.div
              className="inline-block mb-3 rounded-full bg-gradient-to-r from-[#0d1117] to-[#161b22] px-4 py-1 border border-[#30363d]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[#58a6ff] to-[#2ea043] bg-clip-text text-transparent font-medium">
                Next-gen Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e6edf3] mb-6 leading-tight tracking-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Empowering{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#58a6ff] to-[#2ea043] bg-clip-text text-transparent">
                  businesses,
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#58a6ff] to-[#2ea043] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>{" "}
              startups and{" "}
              <span className="bg-gradient-to-r from-[#58a6ff] to-[#2ea043] bg-clip-text text-transparent">
                creators
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-[#8b949e] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              to fuel growth and visibility in the ever-evolving digital landscape with cutting-edge solutions designed for tomorrow's challenges.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setIsBuyingOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-[#238636] to-[#2ea043] text-[#e6edf3] rounded-xl font-medium transition-all flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#238636]/20"
              >
                <span>Start building</span>
                <span className="transform group-hover:translate-x-1 transition-transform text-xl">→</span>
              </button>
              <button
                onClick={() => setIsSellingOpen(true)}
                className="px-8 py-4 bg-[#161b22] border border-[#30363d] text-[#e6edf3] rounded-xl transition-all hover:bg-[#21262d] hover:border-[#58a6ff] flex items-center justify-center"
              >
                Learn more
              </button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 md:gap-12 mt-4 mb-16 lg:mb-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[#8b949e] text-sm">Trusted by industry leaders:</p>
              <div className="flex items-center flex-wrap justify-center lg:justify-start gap-10">
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/hero/ssh.png"
                    alt="Partner logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/hero/mst.png"
                    alt="Partner logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Preview */}
          <motion.div
            className="lg:w-6/12 relative w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#30363d] bg-[#0d1117] shadow-2xl">
              {/* Code-like elements in the background */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
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
              
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#161b22] border-b border-[#30363d] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-2 text-[#8b949e] text-xs font-mono">platform-dashboard.tsx</div>
              </div>
              
              {/* Glow effect behind the image */}
              <div className="absolute inset-8 bg-gradient-to-br from-[#1f6feb]/20 to-[#2ea043]/20 filter blur-xl rounded-lg"></div>
              
              <Image
                src="/images/hero/banner-image.png"
                alt="Platform preview"
                width={1200}
                height={800}
                className="relative z-10 pt-10"
              />
              
              {/* Interactive elements overlaid on image */}
              <motion.div 
                className="absolute bottom-5 right-5 bg-[#238636] bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-md text-white text-sm font-medium"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Live Demo
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -top-5 -right-5 bg-[#0d1117] border border-[#30363d] rounded-xl p-3 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#238636] flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#e6edf3] font-medium">99.9% Uptime</p>
                  <p className="text-[#8b949e] text-xs">Enterprise-grade reliability</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/*Buying Modal */}
      <AnimatePresence>
        {isBuying && (
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
              ref={BuyRef}
            >
              <button
                onClick={() => setIsBuyingOpen(false)}
                className="absolute top-5 right-5 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <XIcon size={24} />
              </button>
              <ServiceInquiryForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selling Modal */}
      <AnimatePresence>
        {isSelling && (
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
              ref={SellRef}
            >
              <button
                onClick={() => setIsSellingOpen(false)}
                className="absolute top-5 right-5 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <XIcon size={24} />
              </button>
              <CTAForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;