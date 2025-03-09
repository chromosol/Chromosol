"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TimeLine = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    margin: "0px 0px -200px 0px" // Trigger animation earlier
  });

  // State to track which step is being hovered/active
  const [activeStep, setActiveStep] = useState(null);

  // Enhanced timeline data with additional properties
  const enhancedTimelineData = [
    {
      title: "Planning",
      text: "Map the project's scope and architecture",
      icon: "/images/timeline/icon-planning.svg",
      position: "lg:top-16 top-12 lg:left-0 -left-20",
      align: "text-right",
      color: "from-[#8a70ff]/30 to-[#58a6ff]/20",
      borderColor: "border-[#8a70ff]",
      children: [
        { title: "Build Check", description: "Verify infrastructure" },
        { title: "Build newFX", description: "Add visual effects" },
        { title: "Build Wireframe", description: "Create structure" }
      ]
    },
    {
      title: "Prototype",
      text: "Build a working prototype to test your product",
      icon: "/images/timeline/icon-prototype.svg",
      position: "lg:top-48 top-40 lg:left-0 -left-20",
      align: "text-right",
      color: "from-[#2ea043]/30 to-[#2ea043]/10",
      borderColor: "border-[#2ea043]",
      children: [
        { title: "Publish Local", description: "Testing on localhost" },
        { title: "Publish newUI", description: "Refine user interfaces" },
        { title: "Publish WebView", description: "Browser compatibility" }
      ]
    },
    {
      title: "Refinement",
      text: "Refine and improve your solution",
      icon: "/images/timeline/icon-refinement.svg",
      position: "lg:top-16 top-12 lg:right-0 -right-20",
      align: "text-left",
      color: "from-[#f7b955]/30 to-[#f7b955]/10",
      borderColor: "border-[#f7b955]",
      children: []
    },
    {
      title: "Support",
      text: "Deploy the product and ensure full support by us",
      icon: "/images/timeline/icon-support.svg",
      position: "lg:top-48 top-40 lg:right-0 -right-20",
      align: "text-left",
      color: "from-[#bc8cff]/30 to-[#bc8cff]/10",
      borderColor: "border-[#bc8cff]",
      children: []
    }
  ];

  // Component for popup/dropdown menu
  // const PopupMenu = ({ item, isVisible, position }) => (
  //   <motion.div
  //     initial={{ opacity: 0, y: -10 }}
  //     animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
  //     transition={{ duration: 0.3 }}
  //     className={`absolute ${position} z-10 w-64 bg-[#1a1f25] border border-[#30363d] rounded-lg shadow-xl overflow-hidden`}
  //   >
  //     <div className="px-3 py-2 bg-[#161b22] text-[#e6edf3] border-b border-[#30363d]">
  //       {item.title}
  //     </div>
  //     <div className="py-1">
  //       {item.children.map((child, idx) => (
  //         <div key={idx} className="px-4 py-3 hover:bg-[#161b22] text-[#e6edf3] transition-colors cursor-pointer">
  //           <div className="flex items-center">
  //             <div className="mr-3">
  //               <div className={`h-5 w-5 rounded-full bg-[#1a1f25] border ${item.borderColor} flex items-center justify-center`}>
  //                 <div className={`h-2 w-2 rounded-full bg-${item.borderColor.split('-')[1]}`}></div>
  //               </div>
  //             </div>
  //             <div>
  //               <p className="text-sm font-medium">{child.title}</p>
  //               <p className="text-xs text-[#848d97]">{child.description}</p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </motion.div>
  // );

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background-light dark:bg-background-dark" id="development" ref={sectionRef}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f1046] via-[#1a1f25] to-[#0d2337] -z-10"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8a70ff]/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full filter blur-[100px]" />
        <div className="absolute w-full h-full opacity-5 bg-[url('/images/grid-pattern.png')] bg-repeat" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Accelerate <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a70ff] to-[#58a6ff]">workflow</span> performance
            </h2>
            
            <p className="text-lg text-[#848d97] max-w-2xl mx-auto">
              With our AI-powered tools embedded throughout the platform, you can simplify your 
              toolchain, automate tasks, and improve the developer experience.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Main Timeline Visualization */}
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Central image with glow effect */}
              <div className="relative w-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8a70ff]/20 via-[#bc8cff]/20 to-[#58a6ff]/20 rounded-3xl filter blur-[40px] opacity-70" />
                
                <div className="relative rounded-3xl overflow-hidden border border-[#8a70ff]/30 bg-[#161b22]/80 backdrop-blur-sm shadow-2xl p-3">
                  {/* Content window */}
                  <div className="bg-[#0d1117]/90 rounded-2xl overflow-hidden">
                    {/* Header bar */}
                    <div className="px-4 py-3 flex items-center border-b border-[#30363d]">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-[#2e2727]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2e2727]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2e2727]"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#1a1f25] text-[#848d97]">
                          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                          mobile-build-deploy.yml
                        </div>
                      </div>
                    </div>

                    {/* Main Workflow Visualization */}
                    <div className="p-6 relative min-h-[300px]">
                      {/* Central Timeline Diagram */}
                      <motion.div 
                        className="flex justify-center items-center relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {/* Central Node */}
                        <div className="relative">
                          <div className="w-64 h-32 rounded-lg border border-[#30363d] bg-[#161b22] p-3 shadow-lg">
                            <div className="text-[#e6edf3] text-sm font-semibold mb-1">mobile-build-deploy.yml</div>
                            <div className="text-[#848d97] text-xs">on: push</div>
                            
                            <div className="absolute -left-32 top-12">
                              <motion.div 
                                className="rounded-lg bg-[#161b22] border border-[#30363d] p-2 shadow-lg cursor-pointer hover:border-[#8a70ff]/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                // onClick={() => setActiveStep(activeStep === 0 ? null : 0)}
                              >
                                <div className="flex items-center">
                                  <div className="h-6 w-6 rounded-full bg-[#1a1f25] border border-[#8a70ff] flex items-center justify-center mr-2">
                                    <div className="h-2 w-2 rounded-full bg-[#8a70ff]"></div>
                                  </div>
                                  <span className="text-[#e6edf3] text-xs">Build</span>
                                </div>
                              </motion.div>
                              
                              {/* Show popup for Build */}
                              {/* <PopupMenu 
                                item={enhancedTimelineData[0]} 
                                isVisible={activeStep === 0} 
                                position="top-8 left-0" 
                              /> */}
                            </div>
                            
                            <div className="absolute -right-32 top-12">
                              <motion.div 
                                className="rounded-lg bg-[#161b22] border border-[#30363d] p-2 shadow-lg cursor-pointer hover:border-[#f7b955]/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                // onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
                              >
                                <div className="flex items-center">
                                  <div className="h-6 w-6 rounded-full bg-[#1a1f25] border border-[#2ea043] flex items-center justify-center mr-2">
                                    <div className="h-2 w-2 rounded-full bg-[#2ea043]"></div>
                                  </div>
                                  <span className="text-[#e6edf3] text-xs">Publish</span>
                                </div>
                              </motion.div>
                              
                              {/* Show popup for Publish */}
                              
                              {/* <PopupMenu 
                                item={enhancedTimelineData[1]} 
                                isVisible={activeStep === 1} 
                                position="top-8 right-0" 
                              /> */}
                            </div>
                          </div>
                          
                          {/* Connection Lines */}
                          <svg className="absolute -left-24 top-16 w-24 h-0.5" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="1" x2="100" y2="1" stroke="#30363d" strokeWidth="2" strokeDasharray="4 4" />
                          </svg>
                          
                          <svg className="absolute -right-24 top-16 w-24 h-0.5" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="1" x2="100" y2="1" stroke="#30363d" strokeWidth="2" strokeDasharray="4 4" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Glowing effect overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8a70ff]/5 to-transparent opacity-70 pointer-events-none"
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
              </div>
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="hidden lg:block">
            {enhancedTimelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} max-w-xs ${item.align}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center mb-3"
                  whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                >
                  {index % 2 === 1 && (
                    <motion.div 
                      className={`relative mr-4 rounded-full p-1 overflow-hidden flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient background for icon */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-100`} />
                      <div className="bg-tealGreen bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                      <div className="relative bg-[#0d1117] p-3 rounded-full border border-[#30363d]">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={28}
                          height={28}
                          className="w-7 h-7"
                        />
                      </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="bg-tealGreen justify-items-center bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                    <h4 className="text-lg font-semibold text-[#e6edf3] mb-1">{item.title}</h4>
                    <p className="text-[#848d97] text-center text-sm">{item.text}</p>
                  </div>
                  
                  {index % 2 === 0 && (
                    <motion.div 
                      className={`relative ml-4 rounded-full p-1 overflow-hidden flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient background for icon */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-100`} />
                      <div className="bg-tealGreen bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                      <div className="relative bg-[#0d1117] p-3 rounded-full border border-[#30363d]">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={28}
                          height={28}
                          className="w-7 h-7"
                        />
                      </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline - Stack the elements vertically */}
          <div className="lg:hidden grid grid-cols-1 gap-6 mt-12">
            {enhancedTimelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#8a70ff]/30 transition-all duration-300"
              >
                <motion.div 
                  className={`relative mr-4 rounded-full p-1 overflow-hidden flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background for icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-100`} />
                  
                  <div className="relative bg-[#0d1117] p-3 rounded-full border border-[#30363d]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#e6edf3] mb-1">{item.title}</h4>
                  <p className="text-[#848d97] text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#58a6ff] text-white font-medium hover:shadow-lg hover:shadow-[#8a70ff]/20 transition-all duration-300">
            Start accelerating
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 3.33398L12.6667 8.00065L8 12.6673" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeLine;