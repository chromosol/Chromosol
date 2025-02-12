"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimeLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="md:pt-40 pt-9" id="development" ref={ref}>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          {/* Header Section */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Development <span className="text-primary">timeline</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              We can enter at any point or help you all the way through the
              development cycle.
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Desktop Timeline */}
            <div className="md:block hidden relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/images/timeline/img-timeline.png"
                  alt="image"
                  width={740}
                  height={600}
                  className="w-54% mx-auto"
                />
              </motion.div>

              {/* Timeline Items with Staggered Animations */}
              {[
                {
                  position: "lg:top-40 top-36 lg:left-0 -left-20",
                  title: "Planning",
                  text: "Map the project's scope and architecture",
                  icon: "/images/timeline/icon-planning.svg",
                  align: "text-right",
                },
                {
                  position: "lg:top-40 top-36 lg:right-0 -right-20",
                  title: "Refinement",
                  text: "Refine and improve your solution",
                  icon: "/images/timeline/icon-refinement.svg",
                  align: "text-left",
                },
                {
                  position: "lg:bottom-48 bottom-36 lg:left-0 -left-20",
                  title: "Prototype",
                  text: "Build a working prototype to test your product",
                  icon: "/images/timeline/icon-prototype.svg",
                  align: "text-right",
                },
                {
                  position: "lg:bottom-48 bottom-36 lg:right-0 -right-20",
                  title: "Support",
                  text: "Deploy the product and ensure full support by us",
                  icon: "/images/timeline/icon-support.svg",
                  align: "text-left",
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className={`absolute ${phase.position} w-72 flex items-center gap-6`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {phase.align === "text-right" && (
                    <div className={`${phase.align}`}>
                      <h5 className="text-muted text-28 mb-3">{phase.title}</h5>
                      <p className="text-18 text-muted text-opacity-60">
                        {phase.text}
                      </p>
                    </div>
                  )}
                  <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                    <Image
                      src={phase.icon}
                      alt={phase.title}
                      width={44}
                      height={44}
                      className="w-16 h-16"
                    />
                  </div>
                  {phase.align === "text-left" && (
                    <div className={`${phase.align}`}>
                      <h5 className="text-muted text-28 mb-3">{phase.title}</h5>
                      <p className="text-18 text-muted text-opacity-60">
                        {phase.text}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="bg-light_grey bg-opacity-45 p-6 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted text-opacity-60 text-18">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;