"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

// Components
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import ThemeToggler from "./ThemeToggler";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

// Data
import { headerData } from "../Header/Navigation/menuData";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme } = useTheme();

  // State management
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Refs for outside clicks
  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Check if we're on the homepage to determine transparency
  useEffect(() => {
    setIsTransparent(pathUrl === "/");
  }, [pathUrl]);

  // Handle scroll events
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Handle clicks outside modals and menus
  const handleClickOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      setIsSignInOpen(false);
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) {
      setIsSignUpOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && navbarOpen) {
      setNavbarOpen(false);
    }
  };

  // Set up event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  // Determine header background styles based on scroll and page
  const headerBackground = () => {
    if (!isTransparent) {
      // Non-homepage always has a background
      return "bg-background-light dark:bg-background-dark";
    }
    
    if (isScrolled) {
      // Scrolled state on homepage
      return "bg-background-light/65 dark:bg-background-dark/65 backdrop-blur-md";
    }
    
    // Initial state on homepage (transparent)
    return "bg-transparent";
  };

  // Handle closing the mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? "shadow-lg py-4" 
          : "shadow-none md:pt-8 py-6"
      } ${headerBackground()}`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Authentication */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="px-5 py-2 text-txt-light dark:text-txt-dark border border-primary rounded-lg transition-all hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignInOpen(true);
                }}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="px-5 py-2 bg-background-light dark:bg-background-dark text-txt-light dark:text-txt-dark border border-primary rounded-lg transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignUpOpen(true);
                }}
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={navbarOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <div className="w-6 flex flex-col gap-1.5 items-center">
                <span className={`block w-6 h-0.5 bg-white transition-transform ${navbarOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity ${navbarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform ${navbarOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modals backdrop */}
      {(isSignInOpen || isSignUpOpen || navbarOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40" />
      )}

      {/* Mobile Navigation Panel */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full md:w-96 bg-darkmode dark:bg-darkmode shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 rounded-full hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close mobile menu"
          >
            <Icon icon="tabler:x" className="text-white text-2xl" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-100px)]">
          <nav className="flex flex-col">
            {headerData.map((item, index) => (
              <MobileHeaderLink 
                key={index} 
                item={item} 
                onLinkClick={handleMobileLinkClick}
              />
            ))}
          </nav>
          
          <div className="mt-8 space-y-3">
            <button
              className="w-full px-5 py-2.5 text-secondary border border-primary rounded-lg transition-all hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:outline-none"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </button>
            <button
              className="w-full px-5 py-2.5 bg-primary text-white border border-primary rounded-lg transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:outline-none"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <ThemeToggler />
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={signInRef}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-16 pb-10 bg-dark_grey dark:bg-dark_grey bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md"
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-6 right-6 p-1 rounded-full hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close Sign In Modal"
            >
              <Icon
                icon="tabler:x"
                className="text-white hover:text-primary text-xl"
              />
            </button>
            <Signin />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={signUpRef}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey dark:bg-dark_grey bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md px-8 pt-16 pb-10"
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-6 right-6 p-1 rounded-full hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close Sign Up Modal"
            >
              <Icon
                icon="tabler:x"
                className="text-white hover:text-primary text-xl"
              />
            </button>
            <SignUp />
          </div>
        </div>
      )}

      {/* Global styles for animations - will be placed in your global CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { max-height: 0; opacity: 0; }
          to { max-height: 500px; opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Header;