import React from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "fa6-brands:facebook-f", href: "#" },
    { icon: "fa6-brands:instagram", href: "#" },
    { icon: "fa6-brands:x-twitter", href: "#" },
    { icon: "fa6-brands:linkedin-in", href: "#" }
  ];

  return (
    <footer className="pt-16 bg-gradient-to-b  bg-background-light dark:bg-background-dark">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-16">
          {/* Logo and Social Media Section */}
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-6">
            <Logo />
            <p className="text-txt-light dark:text-txt-dark mt-4 max-w-sm">
              Transforming ideas into exceptional digital experiences, one pixel at a time.
            </p>
            <div className="flex gap-4 items-center mt-6">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="bg-dark-800 hover:bg-primary transition-colors duration-300 p-3 rounded-full group"
                >
                  <Icon
                    icon={link.icon}
                    width="20"
                    height="20"
                    className="text-txt-light dark:text-txt-dark group-hover:text-gray-700"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-6">
          <h4 className="text-lg text-txt-light dark:text-txt-dark font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-txt-light dark:text-txt-dark hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div className="lg:col-span-2 md:col-span-3 sm:col-span-6">
          <h4 className="text-lg text-txt-light dark:text-txt-dark font-semibold mb-4">
              Information
            </h4>
            <ul className="space-y-3">
              {footerlabels.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.herf}
                    className="text-txt-light dark:text-txt-dark hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-6">
            <h3 className="text-lg text-txt-light dark:text-txt-dark font-semibold mb-4">Subscribe</h3>
              <p className="text-txt-light dark:text-txt-dark mb-4">
                Subscribe to our newsletter to get updates on our latest offers.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2  bg-white dark:bg-dark text-txt-light dark:text-txt-dark rounded-md focus:outline-none focus:ring-2 focus:ring-dark"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-background-dark text-txt-dark rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 text-txt-light/50 dark:text-txt-dark/50 text-sm">
          <p>© {currentYear} Chromosol. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;