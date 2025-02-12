"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // New animations
  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { scale: 1, opacity: 1, rotate: 0 }
  };

  const contentAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const itemAnimation = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1 }
  };

  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="portfolio" ref={ref}>
      <div className="container mx-auto lg:max-w-screen-lg px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          {/* Image Container */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageAnimation}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:-ml-14"
          >
            <Image
              src="/images/portfolio/img-portfolio.png"
              alt="Crypto Portfolio"
              width={740}
              height={600}
              className="w-100% mx-100%"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentAnimation}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="sm:text-28 text-18 text-muted mb-4">
                Seamless customer <span className="text-primary">Portfolio</span>
              </p>
              <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
                Create a smart portfolio to simplify your journey with{" "}
                <span className="text-primary">us</span>!
              </h2>
              <p className="text-muted text-opacity-60 text-18">
                This system empowers you to track our services,
                <br className="md:block hidden" /> because your satisfaction is our
                priority.
              </p>
            </motion.div>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <motion.tr
                    key={index}
                    variants={itemAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-5">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-primary p-4 rounded-full bg-opacity-20 w-fit"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={30}
                          height={30}
                        />
                      </motion.div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-22 text-18 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;