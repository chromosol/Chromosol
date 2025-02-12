"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine"; // Import Engine type
import { useCallback } from "react";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
   const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine); // Properly load the full engine
    }, []);

  const services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Digital Marketing Consulting",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Website Solutions",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "UX /UI Design",
    },
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Custom Design",
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Custom Development",
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "CI /CD Integration",
    },
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Project Deployment",
    },
  ];

  return (
    <section className="relative py-12 md:py-18 overflow-hidden" id="work">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] to-[#161b22] -z-50" />
      
      <div className="absolute inset-0 -z-40">
        <Particles
          id="work-particles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            particles: {
              color: { value: ["#1f6feb", "#2ea043"] },
              links: {
                color: "#30363d",
                distance: 150,
                enable: true,
                opacity: 0.3,
              },
              move: { enable: true, speed: 1 },
              number: { value: 60 },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } }
            }
          }}
        />
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center gap-8">
          {/* Text Section */}
          <motion.div
            className="lg:col-span-7 col-span-12"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-[#848d97] mb-4">
              Collaborate with <span className="text-[#58a6ff]">our team</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#e6edf3] mb-8">
              Transform your vision into<br />
              <span className="bg-gradient-to-r from-[#58a6ff] to-[#2ea043] bg-clip-text text-transparent">
                production-ready reality
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b2231] hover:bg-[#324c7042] transition-colors border border-[#30363d]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="p-3 rounded-full bg-[#238636]/20">
                    <Image
                      src={service.icon}
                      alt={service.text}
                      width={32}
                      height={32}
                      className="text-[#58a6ff]"
                    />
                  </div>
                  <span className="text-[#e6edf3] text-lg">{service.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-5 col-span-12 relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative group">
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#58a6ff]/20 to-[#2ea043]/20 blur-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#30363d] bg-[#161b22b9] shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1f6feb]/10 to-[#2ea043]/10" />
                <Image
                  src="/images/work/img-work-with-us.png"
                  alt="Collaboration Preview"
                  width={710}
                  height={625}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;