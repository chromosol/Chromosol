"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-background-light dark:bg-background-dark pt-12 md:pt-24" id="portfolio" ref={ref}>
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left sidebar - similar to GitHub interface */}
          <div className="lg:col-span-4">
            <div className="mb-12">
              <h2 className="text-white text-xl font-medium mb-2">Keep track of your tasks</h2>
              <p className="text-gray-400 text-sm mb-4">Create issues and manage projects with tools that adapt to your needs.</p>
              <a href="#" className="text-blue-400 text-sm flex items-center group">
                Explore Portfolio Issues 
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="border-t border-[#21262d] py-5">
              <button className="flex items-center justify-between w-full text-white text-left">
                <span className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Share ideas and ask questions
                </span>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="border-t border-[#21262d] py-5">
              <button className="flex items-center justify-between w-full text-white text-left">
                <span className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                  </svg>
                  Review code changes together
                </span>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="border-t border-[#21262d] py-5">
              <button className="flex items-center justify-between w-full text-white text-left">
                <span className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Fund open source projects
                </span>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right content - card with purple glow effect */}
          <motion.div 
            className="lg:col-span-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardAnimation}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-[#161b22] rounded-lg p-6 shadow-xl overflow-hidden">
              {/* Purple glow effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">Portfolio rendering engine #920</h3>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center mt-3 space-x-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
                    Open
                  </span>
                  <span className="text-gray-400 text-sm">1 / 3 sub-issues</span>
                </div>
              </div>
              
              <div className="border-t border-[#21262d] py-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-8 w-8 bg-gray-700 rounded-full overflow-hidden">
                      <Image 
                        src="/images/portfolio/img-portfolio1.png" 
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="h-8 w-8 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-300">yourCompany</span>
                      <span className="text-gray-500 ml-2">commented 5 days ago</span>
                    </div>
                    
                    <div className="mt-3">
                      <h4 className="text-white text-lg font-semibold mb-2">Create a smart portfolio to simplify your journey with us!</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Now that we've decided to use our new rendering engine (see #824), we have some follow-up work to do. Let's use this issue for tracking. I've taken a first pass at condensing to-dos here.
                      </p>
                      
                      <div className="bg-[#0d1117] rounded-md p-3 mb-4">
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                          </svg>
                          Sub-issues 3 / 3
                        </div>
                        
                        <div className="space-y-3">
                          {portfolioData.map((item, index) => (
                            <motion.div
                              key={index}
                              variants={itemAnimation}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              transition={{ duration: 0.3, delay: 0.1 * index }}
                              className="flex items-center"
                            >
                              <div className="mr-2 flex-shrink-0">
                                <div className="bg-purple-900 bg-opacity-30 p-2 rounded-md">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={16}
                                    height={16}
                                  />
                                </div>
                              </div>
                              <div className="text-gray-300 text-sm">
                                {item.title} #{900 + index}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <button className="px-3 py-1 text-sm bg-[#238636] hover:bg-[#2ea043] text-white rounded-md transition">
                        Create sub-issue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;