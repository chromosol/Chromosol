"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { XIcon } from "@primer/octicons-react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine"; // Import Engine type
import { loadFull } from "tsparticles"; // Import loadFull
import CTAForm from "./cta-form";
import ServiceInquiryForm from "./service-form";
import CardSlider from "./slider";
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


  // Particles.js initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // Properly load the full engine
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0a0d12] -z-50" />

      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-[#1f6feb]/20 via-[#1f6feb]/10 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-radial from-[#2ea043]/20 via-[#2ea043]/10 to-transparent blur-3xl"
        />
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 -z-40">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#1f6feb", "#2ea043", "#58a6ff"],
              },
              links: {
                color: "#30363d",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mt-10 mx-auto my-32 px-4 max-w-6xl relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="lg:w-7/12 mt-16 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-[#e6edf3] mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Empowering <br />
              <span className="bg-gradient-to-r from-[#58a6ff] to-[#2ea043] bg-clip-text text-transparent">
                businesses, startups and creator's
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[#848d97] mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              to fuel growth and visibility in the digital space.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => setIsBuyingOpen(true)}
                className="px-8 py-4 bg-[#238636] hover:bg-[#2ea043] text-[#e6edf3] rounded-xl font-medium transition-all flex items-center gap-3"
              >
                <span>Start building</span>
                <span className="text-xl">→</span>
              </button>
              <button
                onClick={() => setIsSellingOpen(true)}
                className="px-8 py-4 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-[#e6edf3] rounded-xl transition-all"
              >
                Learn more
              </button>
            </motion.div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20 ">
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src="/images/hero/ssh.png"
                  alt="Play Store"
                  width={240}
                  height={70}
                />
              </Link>
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src="/images/hero/mst.png"
                  alt="App Store"
                  width={240}
                  height={70}
                />
              </Link>
            </div>

          </div>
          
          {/* Image Preview */}
          <motion.div
            className="lg:w-5/12 lg:-ml-14 relative w-full max-w-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#30363d] bg-[#161b2242] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f6feb]/10 to-[#2ea043]/10" />
              <Image 
                src="/images/hero/banner-image.png"
                alt="GitHub platform preview"
                width={1200}
                height={800}
                className="relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="container mx-auto lg:max-w-screen-xl px-4">
      <motion.div 
          initial= {{ opacity: 0}}
          animate= { {opacity: 1}}
          //transition: { duration: 0.8 }
           transition={{ delay: 0.4 }}>
          <CardSlider />
        </motion.div>
        </div>
      {/*Buying Modal */}
      <AnimatePresence>
        {isBuying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#010409]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-[#161b22] rounded-xl border border-[#30363d] shadow-2xl max-w-md w-full p-8 relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              ref={BuyRef}
            >
              <button
                onClick={() => setIsBuyingOpen(false)}
                className="absolute top-5 right-5 text-[#848d97] hover:text-[#58a6ff] transition-colors"
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
            className="fixed inset-0 bg-[#010409]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-[#161b22] rounded-xl border border-[#30363d] shadow-2xl max-w-md w-full p-8 relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              ref={SellRef}
            >
              <button
                onClick={() => setIsSellingOpen(false)}
                className="absolute top-5 right-5 text-[#848d97] hover:text-[#58a6ff] transition-colors"
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