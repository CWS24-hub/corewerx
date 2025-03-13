import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Shield, Cloud, Monitor, Users, Database, Server, Laptop, Network, BarChart, Briefcase, Wifi, Lock, FileCheck, MessageSquare, Settings, HardDrive } from 'lucide-react';

// Memoize service categories to prevent unnecessary re-renders
const serviceCategories = [
  {
    title: "Security & Compliance",
    icon: Shield,
    link: "cyber-security",
    categories: [
      {
        name: "Cyber Security (MSSP)",
        link: "cyber-security",
        icon: Lock,
        services: [
          "Threat Detection & Response",
          "Security Operations Centre",
          "Email Security",
          "Compliance Management"
        ]
      },
      {
        name: "Risk Management",
        link: "cyber-security",
        icon: FileCheck,
        services: [
          "Security Assessments",
          "Vulnerability Testing",
          "Policy Development",
          "Security Training"
        ]
      }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    link: "cloud",
    categories: [
      {
        name: "Cloud Solutions",
        link: "cloud",
        icon: Server,
        services: [
          "Microsoft 365",
          "Azure Cloud",
          "Cloud Migration",
          "Cloud Storage"
        ]
      },
      {
        name: "Infrastructure",
        link: "cloud",
        icon: Network,
        services: [
          "Network Management",
          "Server Infrastructure",
          "Storage Solutions",
          "Infrastructure Support"
        ]
      }
    ]
  },
  {
    title: "Business Continuity",
    icon: HardDrive,
    link: "continuity",
    categories: [
      {
        name: "Data Protection",
        link: "continuity",
        icon: Lock,
        services: [
          "Data Backup",
          "File Recovery",
          "System Recovery",
          "Cloud Failover"
        ]
      },
      {
        name: "Backup & Recovery",
        link: "continuity",
        icon: Server,
        services: [
          "Backup Solutions",
          "Disaster Recovery",
          "Business Continuity",
          "Ransomware Protection"
        ]
      }
    ]
  },
  {
    title: "Workplace & Collaboration",
    icon: Briefcase,
    link: "workplace",
    categories: [
      {
        name: "Modern Workplace",
        link: "workplace",
        icon: Laptop,
        services: [
          "Microsoft Teams",
          "SharePoint",
          "OneDrive",
          "Power Platform"
        ]
      },
      {
        name: "Communication",
        link: "workplace",
        icon: MessageSquare,
        services: [
          "Teams Phone",
          "Email Solutions",
          "Video Conferencing",
          "Unified Communications"
        ]
      }
    ]
  },
  {
    title: "Managed Services",
    icon: Settings,
    link: "technology",
    categories: [
      {
        name: "Managed IT (MSP)",
        link: "technology",
        icon: Monitor,
        services: [
          "24/7 Support",
          "Proactive Monitoring",
          "Asset Management",
          "Help Desk"
        ]
      },
      {
        name: "Business Solutions",
        link: "crm",
        icon: BarChart,
        services: [
          "CRM Implementation",
          "Process Automation",
          "Reports & Analytics",
          "Custom Development"
        ]
      }
    ]
  }
] as const;

// Memoize the submenu component
const SubMenu = memo(({ category, onClose }: { category: typeof serviceCategories[0], onClose: () => void }) => (
  <div className="absolute right-full top-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 -mr-1 z-[60]">
    <div className="p-4">
      {category.categories.map((subCategory, subIndex) => (
        <div key={subIndex} className="mb-4 last:mb-0">
          <Link
            to={subCategory.link}
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClose}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold cursor-pointer group mb-2"
          >
            <subCategory.icon className="w-5 h-5" />
            <span className="border-b-2 border-transparent group-hover:border-amber-400">
              {subCategory.name}
            </span>
          </Link>
          <ul className="space-y-2 pl-7">
            {subCategory.services.map((service, serviceIndex) => (
              <li key={serviceIndex}>
                <Link
                  to={subCategory.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                  className="text-gray-600 hover:text-amber-700 transition-colors text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
));

SubMenu.displayName = 'SubMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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

  const handleCloseMenu = useCallback(() => {
    setServicesOpen(false);
    setActiveCategory(null);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 navbar ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
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
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-amber-300 px-3 py-2 text-lg font-medium cursor-pointer transition-colors"
              >
                Home
              </Link>
              
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-amber-300 px-3 py-2 text-lg font-medium cursor-pointer transition-colors"
              >
                About Us
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="text-white hover:text-amber-300 px-3 py-2 text-lg font-medium cursor-pointer transition-colors flex items-center gap-2"
                >
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-gray-50 shadow-xl rounded-lg overflow-visible border border-gray-200 z-50"
                    onMouseLeave={handleCloseMenu}
                  >
                    {serviceCategories.map((category, index) => (
                      <div 
                        key={index}
                        className="relative"
                        onMouseEnter={() => setActiveCategory(category.title)}
                      >
                        <div
                          className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer group ${
                            activeCategory === category.title ? 'bg-gray-100' : ''
                          }`}
                        >
                          <category.icon className="w-5 h-5 text-amber-600" />
                          <span className="text-gray-700 font-medium">{category.title}</span>
                          <ChevronDown className="w-4 h-4 ml-auto rotate-[-90deg] text-gray-400" />
                        </div>

                        {activeCategory === category.title && (
                          <SubMenu category={category} onClose={handleCloseMenu} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-amber-300 px-3 py-2 text-lg font-medium cursor-pointer transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-50 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-amber-700 w-full text-left px-3 py-2 text-base font-medium cursor-pointer flex items-center justify-between"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 space-y-2 bg-gray-100">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="py-2">
                      <button
                        onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                        className="flex items-center gap-2 text-amber-700 font-medium w-full px-3 py-2"
                      >
                        <category.icon className="w-5 h-5" />
                        <span>{category.title}</span>
                        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${
                          activeCategory === category.title ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeCategory === category.title && (
                        <div className="pl-4 pt-2 space-y-4">
                          {category.categories.map((subCategory, subIndex) => (
                            <div key={subIndex} className="space-y-2">
                              <Link
                                to={subCategory.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                  setServicesOpen(false);
                                  setActiveCategory(null);
                                  setIsOpen(false);
                                }}
                                className="flex items-center gap-2 text-gray-700 hover:text-amber-700 font-medium px-3 py-1"
                              >
                                <subCategory.icon className="w-4 h-4" />
                                {subCategory.name}
                              </Link>
                              <ul className="pl-6 space-y-1">
                                {subCategory.services.map((service, serviceIndex) => (
                                  <li key={serviceIndex}>
                                    <Link
                                      to={subCategory.link}
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                      onClick={() => {
                                        setServicesOpen(false);
                                        setActiveCategory(null);
                                        setIsOpen(false);
                                      }}
                                      className="text-gray-600 hover:text-amber-700 text-sm block py-1"
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
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium cursor-pointer"
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