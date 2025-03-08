"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Platform = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background elements */}
      
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Main platform card */}
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-sm from-[#6c2986] to-[#0777bd]  px-8 sm:px-16 py-14 rounded-3xl border border-white/10 shadow-2xl grid grid-cols-12 items-center relative overflow-hidden"
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent  dark:from-white/5 dark:to-transparent pointer-events-none"></div>
            
            {/* Content area */}
            <div className="lg:col-span-8 col-span-12 relative z-10">
              <motion.div variants={itemVariants}>
                <h2 className="text-txt-light dark:text-txt-dark sm:text-4xl text-3xl font-bold mb-6">
                  Powered by the Chromo<span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-purple via-blue/80 to-tealGreen/90">sol</span>{" "}
                  Platform
                </h2>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-txt-light dark:text-txt-dark text-lg leading-relaxed max-w-xl">
                  Our products empower people to have safer and more
                  trustworthy experiences with cutting-edge security features.
                </p>
              </motion.div>

              {/* Feature badges */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-3 mt-8"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-blue text-sm">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  Advanced Security
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-tealGreen/10 border border-tealGreen/20 text-tealGreen text-sm">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  Intuitive Interface
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-sm">
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  99.9% Uptime
                </span>
              </motion.div>
            </div>

            {/* CTA area */}
            <div className="lg:col-span-4 col-span-12 relative z-10">
              <motion.div 
                variants={itemVariants} 
                className="flex lg:justify-end lg:mt-0 mt-10 justify-center"
              >
                <Link
                  href="#"
                  className="group relative inline-flex items-center justify-center"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-tealGreen rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative px-6 py-3.5 bg-black/50 backdrop-blur-sm rounded-lg text-white font-medium flex items-center gap-2 border border-white/10 shadow-xl">
                    <span className="text-lg">Get Started</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-gradient-to-br from-[#3B7C99] to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -right-32 -top-32 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            ></motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            variants={itemVariants}
            className="absolute -left-6 top-1/4 w-12 h-12"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-purple/20 rounded-xl rotate-45 blur-sm"></div>
              <div className="absolute inset-1 bg-black/80 backdrop-blur-sm rounded-xl rotate-45 border border-purple/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute -right-6 top-2/3 w-12 h-12"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-tealGreen/20 rounded-xl rotate-12 blur-sm"></div>
              <div className="absolute inset-1 bg-black/80 backdrop-blur-sm rounded-xl rotate-12 border border-tealGreen/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-tealGreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;