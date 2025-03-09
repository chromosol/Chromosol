"use client";

import { useState } from "react";
import { perksData } from "@/app/api/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Perks = () => {
  const [hoveredPerk, setHoveredPerk] = useState<number | null>(null);

  return (
    <section className="py-12 relative overflow-hidden  bg-background-light dark:bg-background-dark">
      {/* Background gradients matching CardSlider style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-[#238636] opacity-5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#58a6ff] opacity-5 blur-3xl" />
      </div>
      
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-txt-light dark:text-txt-dark mb-2">Perks</h2>
            <p className="text-gray-400 text-sm">
              Always By <span className="text-[#58a6ff]">your side</span>
            </p>
          </div>
        </div>
        
        {/* Progress bar to match CardSlider */}
        <div className="h-1 w-full bg-[#21262d] rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#58a6ff] to-[#2ea043] w-80%" />
        </div>
        
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {perksData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setHoveredPerk(index)}
              onMouseLeave={() => setHoveredPerk(null)}
            >
              {/* Card background with gradient overlay - matching CardSlider style */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
              
              <div className="relative z-20 p-6  bg-background-light dark:bg-background-dark border border-[#30363d] rounded-xl h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="  bg-gray-light dark:bg-gray-dark rounded-full flex items-center justify-center p-3 mb-4 transition-transform duration-300 hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                      className="transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-txt-light dark:text-txt-dark text-xl font-bold mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  
                  {/* Hover effect - matching CardSlider */}
                  {hoveredPerk === index && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 flex items-center justify-center gap-1 text-xs text-[#58a6ff] hover:text-[#79b8ff] transition-colors"
                    >
                      Learn more <ArrowUpRight size={12} />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;