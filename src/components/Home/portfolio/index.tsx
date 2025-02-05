"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-lg px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
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

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              Seamless customer <span className="text-primary">Portfolio</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Create a smart portfolio to simplify your journey with  
              <span className="text-primary"> us</span>!
            </h2>
            <p className="text-muted text-opacity-60 text-18">
            This system empowers you to track our services,
              <br className="md:block hidden" /> because your satisfaction is our priority.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-5">
                      <div className="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={30}
                          height={30}
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-22 text-18 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
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
