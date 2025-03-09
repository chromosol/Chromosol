import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Upgrade = () => {
  return (
    <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark" id="upgrade">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header with centered title */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-background-light text-gray-700 dark:text-txt-light text-sm font-medium rounded-full mb-3">
            Next-Gen Cloud Storage
          </span>
          <h2 className="text-gray-900 dark:text-txt-dark text-3xl md:text-5xl font-bold mb-4">
            Upgrade Your Storage Layer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get faster, safer, more affordable cloud object storage with no central point of failure.
          </p>
        </div>

        {/* Main content with image and features in cards */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          </div>

          {/* Image section - centered above cards on mobile, on the side on desktop */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple/10 to-blue-600/10 rounded-3xl blur-lg"></div>
                <div className="relative bg-gray-50 dark:bg-gray-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/upgrade/img-upgrade.png"
                    alt="Cloud Storage Solutions"
                    width={480}
                    height={420}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Stats badges */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-dark px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                  <p className="text-gray-900 dark:text-txt-dark font-bold text-md">99.9%</p>
                  <p className="text-gray-600 dark:text-txt-dark text-sm">Uptime</p>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-dark px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                  <p className="text-gray-900 dark:text-txt-dark font-bold text-md">50%</p>
                  <p className="text-gray-600 dark:text-txt-dark text-sm">Cost Savings</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="lg:w-3/5">
              <div className="grid md:grid-cols-2 gap-6">
                {upgradeData.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 dark:bg-gray-dark bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple/50 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Icon
                          icon={"heroicons:check-circle"}
                          width="24"
                          height="24"
                          className="text-gray-700 dark:text-txt-dark"
                        />
                      </div>
                      <h3 className="text-gray-900 dark:text-txt-dark text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced cloud storage feature providing enhanced performance and reliability.
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10 text-center lg:text-left">
                <button className="px-8 py-4 bg-gradient-to-r from-[#6a4dff] to-[#4a90e2] dark:from-[#8a70ff] dark:to-[#58a6ff] text-white dark:text-txt-dark font-medium rounded-lg transition-all shadow-lg hover:shadow-xl shadow-[#6a4dff]/30 dark:shadow-[#8a70ff]/20">
                  Start Your Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;