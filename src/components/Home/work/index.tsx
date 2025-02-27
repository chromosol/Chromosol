"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import services from data
import { services } from "@/app/api/data";

const Work = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "0px 0px -200px 0px" // Trigger animation earlier
  });
  
  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#161b22] to-[#141a22] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2ea043]/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 items-center gap-x-8 gap-y-16">
          {/* Text Section */}
          <motion.div
            className="lg:col-span-7 col-span-12"
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-[#0d1117] border border-[#30363d] text-[#58a6ff] font-medium text-sm mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Collaborate with our team
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e6edf3] leading-tight mb-6">
                Transform your vision into
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-[#58a6ff] via-[#38a3f8] to-[#2ea043] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  production-ready reality
                </motion.span>
              </h2>
              
              <motion.p 
                className="text-lg md:text-xl text-[#848d97] mb-10 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                We partner with innovative companies to build exceptional digital products that make a meaningful impact.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] backdrop-blur-sm border border-[#30363d] hover:border-[#58a6ff]/40 transition-all duration-300 shadow-lg hover:shadow-[#58a6ff]/5"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#0d1117] to-[#161b22] shadow-inner border border-[#30363d] group-hover:border-[#58a6ff]/30 transition-colors">
                    <Image
                      src={service.icon}
                      alt={service.text}
                      width={30}
                      height={30}
                      className="text-[#58a6ff] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="block text-[#e6edf3] font-medium text-lg group-hover:text-[#58a6ff] transition-colors">{service.text}</span>
                    {/* <span className="text-sm text-[#848d97] opacity-0 group-hover:opacity-100 transition-opacity">{service.description || 'Learn more →'}</span> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-5 col-span-12 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#58a6ff]/30 to-[#2ea043]/30 blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
              
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#58a6ff]/10 rounded-full filter blur-2xl animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2ea043]/10 rounded-full filter blur-2xl animate-blob animation-delay-2000" />
              
              {/* Image Container with 3D Effect */}
              <div className="relative rounded-3xl overflow-hidden border border-[#30363d] bg-[#0d1117]/90 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f6feb]/20 via-transparent to-[#2ea043]/20 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative p-3">
                  <Image
                    src="/images/work/img-work-with-us.png"
                    alt="Collaboration Preview"
                    width={710}
                    height={625}
                    className="w-full h-auto object-contain rounded-2xl relative z-10"
                    style={{ 
                      filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.15))" 
                    }}
                  />
                  
                  {/* Reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#58a6ff]/10 to-transparent rounded-b-2xl backdrop-blur-md" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -right-5 -top-5 w-12 h-12 rounded-full bg-gradient-to-br from-[#58a6ff] to-[#2ea043] opacity-75"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -left-3 bottom-10 w-8 h-8 rounded-full bg-[#58a6ff] opacity-40"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Tech Stack Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#0d1117] border border-[#30363d] text-[#848d97] hover:text-[#58a6ff] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Work;