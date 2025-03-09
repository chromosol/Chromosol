"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedata } from "@/app/api/data";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Info, 
  ArrowUpRight,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import type { Settings } from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

type SpeedOption = {
  label: string;
  value: number;
};

const CardSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplaySpeed, setAutoplaySpeed] = useState(8000);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(4); // Default for SSR
  const [volumeData, setVolumeData] = useState<Record<number, number>>({});
  const [sliderSettings, setSliderSettings] = useState<Settings>({
    autoplay: true,
    dots: true,
    dotsClass: "slick-dots custom-light-dots",
    arrows: false,
    infinite: true,
    autoplaySpeed: 8000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => {
      setActiveSlide(next);
      setShouldAnimate(true);
    },
  });

  // Speed options
  const speeds: SpeedOption[] = [
    { label: "Slow", value: 4000 },
    { label: "Normal", value: 2000 },
    { label: "Fast", value: 1500 },
  ];

  // Calculate visible slides based on viewport
  const calculateVisibleSlides = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    return 4;
  }, []);

  // Initialize client-side data after mount
  useEffect(() => {
    // Calculate visible slides
    setVisibleSlides(calculateVisibleSlides());
    
    // Generate random volume data
    const volumes: Record<number, number> = {};
    pricedata.forEach((_, index) => {
      volumes[index] = Math.floor(Math.random() * 1000000) + 500000;
    });
    setVolumeData(volumes);
    
    // Enable animations after mount
    setShouldAnimate(true);
  }, [calculateVisibleSlides]);

  // Update slider settings after state changes
  useEffect(() => {
    setSliderSettings({
      autoplay: !isPaused,
      dots: true,
      dotsClass: "slick-dots custom-light-dots",
      arrows: false,
      infinite: true,
      autoplaySpeed,
      speed: 800,
      slidesToShow: visibleSlides,
      slidesToScroll: 1,
      cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
      pauseOnHover: true,
      beforeChange: (_current: number, next: number) => {
        setActiveSlide(next);
        setShouldAnimate(true);
      },
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, [isPaused, autoplaySpeed, visibleSlides]);

  // Handle resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(calculateVisibleSlides());
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateVisibleSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === ' ') togglePause();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Reset animation flag after delay
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => setShouldAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  // Handlers
  const handlePrevious = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setShouldAnimate(true);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setShouldAnimate(true);
    }
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const changeSpeed = useCallback((speed: number) => {
    setAutoplaySpeed(speed);
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      sliderRef.current.slickPlay();
    }
  }, []);

  const toggleInfo = useCallback(() => {
    setIsInfoVisible(prev => !prev);
  }, []);

  return (
    <div className="py-12 relative bg-background-light dark:bg-background-dark">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Header with controls - Light mode styling */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Market Prices</h2>
            <button 
              onClick={toggleInfo}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark_grey dark:hover:bg-[#21262d] transition-colors"
              aria-label="Information"
            >
              <Info size={16} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Speed controls - Light mode styling */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm">Speed:</span>
              <div className="flex gap-1">
                {speeds.map((speed) => (
                  <button
                    key={speed.value}
                    onClick={() => changeSpeed(speed.value)}
                    className={`px-3 py-1 text-xs rounded-md transition-all ${
                      autoplaySpeed === speed.value
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark_grey dark:text-gray-300 dark:hover:bg-[#21262d]"
                    }`}
                  >
                    {speed.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Navigation controls - Light mode styling */}
            <div className="flex items-center gap-2">
              <button
                onClick={togglePause}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark_grey dark:hover:bg-[#21262d] transition-colors"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play size={18} className="text-gray-800 dark:text-white" />
                ) : (
                  <Pause size={18} className="text-gray-800 dark:text-white" />
                )}
              </button>
              
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark_grey dark:hover:bg-[#21262d] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} className="text-gray-800 dark:text-white" />
              </button>
              
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark_grey dark:hover:bg-[#21262d] transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} className="text-gray-800 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Info panel - Light mode styling */}
        <AnimatePresence>
          {isInfoVisible && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 bg-gray-50 dark:bg-[#161b22] rounded-lg border border-gray-200 dark:border-[#30363d] p-4 text-gray-700 dark:text-gray-300 text-sm"
            >
              <p>Market prices are updated every 5 minutes. Data shown represents the latest available information from our provider.</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <div className="bg-green-600/20 text-green-700 px-2 py-0.5 rounded text-xs font-medium">+2.4%</div>
                  <span className="text-xs">Positive change</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-red-600/20 text-red-700 px-2 py-0.5 rounded text-xs font-medium">-1.3%</div>
                  <span className="text-xs">Negative change</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Progress bar - Light mode styling */}
        <div className="h-1 w-full bg-gray-200 dark:bg-[#21262d] rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-600 transition-all duration-300 ease-out"
          ></div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {pricedata.map((item, index) => (
            <div key={index} className="px-3 py-2">
              <div 
                className="relative group overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card content */}
                <div className="relative z-20 p-6 rounded-xl transform transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${item.background} rounded-full flex items-center justify-center ${item.padding || 'p-3'} transform transition-all duration-300 ${shouldAnimate && activeSlide === index ? 'scale-110' : ''}`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={item.width || 24}
                        height={item.height || 24}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-0.5">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.short}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mt-auto pt-4 border-t border-gray-200 dark:border-[#30363d]">
                    <div className="transform transition-all duration-300">
                      <p className="text-xl font-bold text-gray-900 dark:text-white mb-0">
                        {item.price}
                      </p>
                      
                      {/* Additional data that appears on hover - fixed with pre-generated values */}
                      <AnimatePresence>
                        {hoveredCard === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-gray-500 dark:text-gray-400 mt-1"
                          >
                            24h Vol: {volumeData[index] || "Loading..."}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="min-w-fit">
                      <span className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${
                        item.mark.includes('+') 
                          ? 'bg-green-600/20 text-green-700' 
                          : 'bg-red-600/20 text-red-700'
                      }`}>
                        {item.mark.includes('+') 
                          ? <TrendingUp size={14} /> 
                          : <TrendingDown size={14} />
                        }
                        {item.mark}
                      </span>
                    </div>
                  </div>
                  
                  {/* View details button that appears on hover */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 flex items-center justify-center gap-1 text-xs text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View details <ArrowUpRight size={12} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Mobile speed controls */}
        <div className="flex md:hidden justify-center mt-6 gap-2">
          <span className="text-gray-600 dark:text-gray-400 text-sm">Speed:</span>
          <div className="flex gap-1">
            {speeds.map((speed) => (
              <button
                key={speed.value}
                onClick={() => changeSpeed(speed.value)}
                className={`px-3 py-1 text-xs rounded-md transition-all ${
                  autoplaySpeed === speed.value
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark_grey dark:text-gray-300 dark:hover:bg-[#21262d]"
                }`}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Keyboard shortcuts hint */}
        <div className="text-center mt-6 text-xs text-gray-500">
          Use keyboard shortcuts: ←→ to navigate, space to pause/play
        </div>
      </div>
    </div>
  );
};

export default CardSlider;