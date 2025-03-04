import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Shield, Cloud, Monitor, Users, Database, Server, Laptop, Network, BarChart, Briefcase, Wifi } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [servicesOpen, setServicesOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Add resize listener to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const serviceCategories = [
    {
      title: "Cyber Security (MSSP)",
      icon: Shield,
      link: "cyber-security",
      services: [
        "Cyber Security Protection",
        "Cyber Awareness Training",
        "Security Operations Centre (SOC)",
        "Next-gen AV, XDR, EDR",
        "Email Security",
        "Vulnerability Scanning",
        "Essential Eight",
        "SMB1001",
        "Business Email Compromise Response",
        "Compliance & Risk Management",
        "PenTesting",
        "Application Whitelisting"
      ]
    },
    {
      title: "Technology (MSP)",
      icon: Laptop,
      link: "technology",
      services: [
        "IT Support",
        "Virtual CIO/CTO",
        "Disaster Recovery",
        "Procurement"
      ]
    },
    {
      title: "Cloud (CSP)",
      icon: Cloud,
      link: "cloud",
      services: [
        "Microsoft 365",
        "Microsoft Copilot for 365",
        "Microsoft 365 Security Reporting",
        "Microsoft Azure",
        "Azure Local",
        "Cloud & Process Improvement"
      ]
    },
    {
      title: "Networking & Communications",
      icon: Network,
      link: "networking",
      services: [
        "Network Security",
        "WiFi Networks",
        "Managed Internet",
        "Microsoft Teams Phone"
      ]
    },
    {
      title: "Modern Workplace",
      icon: Briefcase,
      link: "workplace",
      services: [
        "Microsoft Teams",
        "SharePoint",
        "OneDrive",
        "Power Platform",
        "Microsoft 365 Apps",
        "Windows 365"
      ]
    },
    {
      title: "CRM Solutions",
      icon: BarChart,
      link: "crm",
      services: [
        "Salesforce Implementation",
        "User Management",
        "Reports & Analytics",
        "Custom Development",
        "CRM Integration",
        "Data Migration"
      ]
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 navbar ${
        isScrolled 
          ? 'bg-[#B08D57]/90 backdrop-blur-sm shadow-md' 
          : 'bg-gradient-to-b from-[#CD9B4A]/80 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Subtle light effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] bg-gradient-radial from-white/20 via-transparent to-transparent opacity-40 blur-xl"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-100/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
              <img 
                src="/images/noBgWhite.svg" 
                alt="CoreWerx Solutions Logo" 
                className="navbar-logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Home link */}
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-white/80 px-3 py-2 rounded-md text-lg font-medium cursor-pointer transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* About Us link */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-white/80 px-3 py-2 rounded-md text-lg font-medium cursor-pointer transition-colors relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="text-white hover:text-white/80 px-3 py-2 rounded-md text-lg font-medium cursor-pointer transition-colors flex items-center gap-1 relative group"
                >
                  Our Services
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Mega Menu Dropdown - positioned to the right */}
                {servicesOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-screen max-w-6xl bg-white/95 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-amber-200/20 z-50 grid grid-cols-6 gap-4 p-6"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <Link
                          to={category.link}
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 border-b border-amber-200/30 pb-2 cursor-pointer hover:text-amber-600 transition-colors"
                        >
                          <category.icon className="w-5 h-5 text-amber-600" />
                          <h3 className="font-bold text-amber-800">{category.title}</h3>
                        </Link>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={category.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setServicesOpen(false)}
                                className="text-gray-700 hover:text-amber-600 transition-colors text-sm flex items-center gap-1 cursor-pointer"
                              >
                                <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                                {service}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Contact Us link */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-white/80 px-3 py-2 rounded-md text-lg font-medium cursor-pointer transition-colors relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 hover:bg-[#D4AF6A] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#B08D57] shadow-lg relative"
        >
          {/* Subtle light effect for mobile menu */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -inset-[100%] bg-gradient-radial from-white/10 via-transparent to-transparent opacity-40 blur-xl"></div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/40 to-transparent"></div>
          </div>

          <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Home and About Us links */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-white/80 w-full text-left px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors flex items-center justify-between"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="mb-3">
                      <Link
                        to={category.link}
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => {
                          setServicesOpen(false);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 text-white font-medium cursor-pointer"
                      >
                        <category.icon className="w-4 h-4" />
                        {category.title}
                      </Link>
                      <ul className="pl-6 mt-1 space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex}>
                            <Link
                              to={category.link}
                              spy={true}
                              smooth={true}
                              duration={500}
                              onClick={() => {
                                setServicesOpen(false);
                                setIsOpen(false);
                              }}
                              className="text-white/80 hover:text-white text-sm block py-1 cursor-pointer"
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contact Us link */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;