import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <section className="flex-grow bg-white dark:bg-dark pt-12 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Image Column */}
            <div className="w-full md:w-5/12 lg:w-6/12">
              <div className="relative mx-auto aspect-square max-w-[400px] text-center">
                <Image
                  src="/images/404.svg"
                  alt="404 illustration"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 text-center md:text-left">
              <div>
                <h1 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
                  404
                </h1>
                <h2 className="mb-5 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  We Can&#39;t Find The Page You&#39;re Looking For
                </h2>
                <p className="mb-8 text-base text-gray-600 dark:text-gray-300 max-w-md">
                  Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md px-7 py-3 text-base font-medium text-white transition-all bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};


export default NotFound;