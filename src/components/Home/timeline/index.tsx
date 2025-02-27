"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimeLine = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "0px 0px -200px 0px" // Trigger animation earlier
  });

  // Enhanced timeline data with additional properties
  const enhancedTimelineData = [
    {
      title: "Planning",
      text: "Map the project's scope and architecture",
      icon: "/images/timeline/icon-planning.svg",
      position: "lg:top-36 top-28 lg:left-0 -left-20",
      align: "text-right",
      color: "from-[#58a6ff]/20 to-[#58a6ff]/10"
    },
    {
      title: "Prototype",
      text: "Build a working prototype to test your product",
      icon: "/images/timeline/icon-prototype.svg",
      position: "lg:bottom-44 bottom-36 lg:left-0 -left-20",
      align: "text-right",
      color: "from-[#2ea043]/20 to-[#2ea043]/10"
    },
    {
      title: "Refinement",
      text: "Refine and improve your solution",
      icon: "/images/timeline/icon-refinement.svg",
      position: "lg:top-36 top-28 lg:right-0 -right-20",
      align: "text-left",
      color: "from-[#f7b955]/20 to-[#f7b955]/10"
    },
    {
      title: "Support",
      text: "Deploy the product and ensure full support by us",
      icon: "/images/timeline/icon-support.svg",
      position: "lg:bottom-44 bottom-36 lg:right-0 -right-20",
      align: "text-left",
      color: "from-[#bc8cff]/20 to-[#bc8cff]/10"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="development" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58a6ff]/5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2ea043]/5 rounded-full filter blur-[100px]" />
        <div className="absolute w-full h-full opacity-20 bg-[url('/images/grid-pattern.png')] bg-repeat" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#0d1117] border border-[#30363d] text-[#58a6ff] font-medium text-sm">
              Development Timeline
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#e6edf3] mb-6 leading-tight">
              Journey from concept to 
              <span className="block mt-2 bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#2ea043] bg-clip-text text-transparent">
                production-ready solution
              </span>
            </h2>
            
            <p className="text-lg text-[#848d97] max-w-2xl mx-auto">
              We can enter at any point or help you all the way through the development cycle,
              providing expertise exactly where you need it most.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="md:block hidden relative">
            <motion.div
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Central image with glow effect */}
              <div className="relative w-3/5 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/30 via-[#bc8cff]/20 to-[#2ea043]/30 rounded-full filter blur-[60px] opacity-70" />
                
                <div className="relative rounded-3xl overflow-hidden border border-[#30363d] bg-[#0d1117]/90 shadow-2xl p-3">
                  <Image
                    src="/images/timeline/img-timeline.png"
                    alt="Development Timeline"
                    width={740}
                    height={600}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  
                  {/* Central connector line */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-[#58a6ff]/10 to-transparent opacity-70"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Circular progress indicator */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-[#30363d] flex items-center justify-center bg-[#0d1117]"
                  animate={{
                    boxShadow: [
                      "0 0 10px 0px rgba(88, 166, 255, 0.3)",
                      "0 0 20px 5px rgba(88, 166, 255, 0.5)",
                      "0 0 10px 0px rgba(88, 166, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-[#e6edf3] font-bold text-lg">Dev Cycle</div>
                </motion.div>
              </div>

              {/* Timeline Items with Staggered Animations */}
              {enhancedTimelineData.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className={`absolute ${phase.position} w-80 flex items-center gap-6`}
                  initial={{ opacity: 0, x: phase.align === "text-right" ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                >
                  {phase.align === "text-right" && (
                    <div className={`${phase.align}`}>
                      <h5 className="text-[#e6edf3] text-2xl font-semibold mb-3">{phase.title}</h5>
                      <p className="text-[#848d97] text-base">{phase.text}</p>
                    </div>
                  )}
                  
                  <motion.div 
                    className={`relative flex-shrink-0 rounded-full p-1 overflow-hidden`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient background for icon */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-100`} />
                    
                    <div className="relative bg-[#0d1117] backdrop-blur-sm p-4 rounded-full border border-[#30363d]">
                      <Image
                        src={phase.icon}
                        alt={phase.title}
                        width={44}
                        height={44}
                        className="w-10 h-10"
                      />
                    </div>
                    
                    {/* Animated connection line to center */}
                    <motion.div 
                      className={`absolute ${phase.align === "text-right" ? "left-full" : "right-full"} top-1/2 h-0.5 bg-gradient-to-r from-[#30363d] to-[#58a6ff]/30 w-20`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
                      style={{ 
                        transformOrigin: phase.align === "text-right" ? "left" : "right",
                      }}
                    />
                  </motion.div>
                  
                  {phase.align === "text-left" && (
                    <div className={`${phase.align}`}>
                      <h5 className="text-[#e6edf3] text-2xl font-semibold mb-3">{phase.title}</h5>
                      <p className="text-[#848d97] text-base">{phase.text}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
            {enhancedTimelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] hover:border-[#58a6ff]/30 transition-all duration-300 shadow-lg"
              >
                <motion.div 
                  className={`relative mb-5 rounded-full p-1 overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background for icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-100`} />
                  
                  <div className="relative bg-[#0d1117] p-5 rounded-full border border-[#30363d]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                      className="w-10 h-10"
                    />
                  </div>
                </motion.div>
                
                <h4 className="text-xl font-semibold text-[#e6edf3] mb-2">{item.title}</h4>
                <p className="text-[#848d97] text-sm">{item.text}</p>
                
                {/* Phase indicator */}
                <div className="mt-4 text-xs font-medium text-[#58a6ff]">
                  Phase {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#58a6ff] to-[#2ea043] text-white font-medium hover:shadow-lg hover:shadow-[#58a6ff]/20 transition-all duration-300">
            Start your journey
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 3.33398L12.6667 8.00065L8 12.6673" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 5px 0px rgba(88, 166, 255, 0.3); }
          50% { box-shadow: 0 0 20px 5px rgba(88, 166, 255, 0.5); }
          100% { box-shadow: 0 0 5px 0px rgba(88, 166, 255, 0.3); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TimeLine;