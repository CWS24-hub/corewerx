import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Twitter, Shield, Share2, Lock, Wifi } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import ShareLink from './ShareLink';

const Footer = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 768;
  const [showShareModal, setShowShareModal] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);

  // Handle logo click for hidden admin access
  const handleLogoClick = () => {
    setAdminClickCount(prev => {
      const newCount = prev + 1;
      
      // After 5 clicks, show admin login
      if (newCount === 5) {
        // Add access key to URL
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('access', 'design2025');
        window.location.href = currentUrl.toString();
        return 0;
      }
      
      return newCount;
    });
  };

  const serviceCategories = [
    {
      title: "Cyber Security (MSSP)",
      link: "cyber-security",
      services: [
        "Cyber Security Protection",
        "Cyber Awareness Training",
        "Security Operations Centre (SOC)",
        "Next-gen AV, XDR, EDR"
      ]
    },
    {
      title: "Technology (MSP)",
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
      link: "cloud",
      services: [
        "Microsoft 365",
        "Microsoft Copilot for 365",
        "Microsoft Azure",
        "Cloud & Process Improvement"
      ]
    },
    {
      title: "Networking & Communications",
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
      link: "workplace",
      services: [
        "Microsoft Teams",
        "SharePoint",
        "OneDrive",
        "Power Platform"
      ]
    },
    {
      title: "CRM Solutions",
      link: "crm",
      services: [
        "Salesforce Implementation",
        "User Management",
        "Reports & Analytics",
        "Custom Development"
      ]
    }
  ];

  return (
    <footer className="bg-dark-navy/90 py-12 border-t border-bright-cyan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/images/noBgWhite.svg" 
                alt="CoreWerx Solutions Logo" 
                className="navbar-logo cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            <p className="text-gray-200 mb-4">
              Transforming businesses through innovative IT solutions
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-bright-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-bright-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setShowShareModal(true)}
                className="text-gray-300 hover:text-bright-cyan transition-colors"
                title="Share this website"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-200 hover:text-bright-cyan cursor-pointer transition-colors"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-200 hover:text-bright-cyan cursor-pointer transition-colors"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-200 hover:text-bright-cyan cursor-pointer transition-colors"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Services - Now split into two columns */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className="mb-3">
                    <ScrollLink
                      to={category.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-200 hover:text-bright-cyan cursor-pointer transition-colors font-medium"
                    >
                      {category.title}
                    </ScrollLink>
                  </div>
                ))}
              </div>
              <div>
                {serviceCategories.slice(3).map((category, index) => (
                  <div key={index} className="mb-3">
                    <ScrollLink
                      to={category.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-200 hover:text-bright-cyan cursor-pointer transition-colors font-medium"
                    >
                      {category.title}
                    </ScrollLink>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-200">
                <Mail className="w-5 h-5 mr-2 text-bright-cyan" />
                <a href="mailto:info@corewerx.ae" className="hover:text-bright-cyan transition-colors">
                  info@corewerx.ae
                </a>
              </li>
              <li className="flex items-center text-gray-200">
                <Phone className="w-5 h-5 mr-2 text-bright-cyan" />
                <a href="tel:+971500000000" className="hover:text-bright-cyan transition-colors">
                  +971 50 000 0000
                </a>
              </li>
              <li className="flex items-start text-gray-200">
                <MapPin className="w-5 h-5 mr-2 text-bright-cyan flex-shrink-0" />
                <span>Dubai Silicon Oasis, Dubai, UAE</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center gap-2 bg-bright-cyan/15 hover:bg-bright-cyan/20 text-white py-2 px-4 rounded-lg cursor-pointer transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Security Consultation</span>
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CoreWerx Solutions F.Z.E. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">
            <Lock className="w-3 h-3 inline-block mr-1" />
            Admin access restricted to authorized personnel only
          </p>
        </div>
      </div>
      
      {/* Share Modal */}
      {showShareModal && (
        <ShareLink 
          title="Share CoreWerx Solutions"
          message="Check out this IT solutions company that provides enterprise-grade services!"
        />
      )}
    </footer>
  );
};

export default Footer;