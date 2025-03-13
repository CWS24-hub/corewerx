import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Shield, Cloud, Monitor, Users, Database, ArrowRight, Briefcase } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import StaticBackground from '../components/StaticBackground';

const Hero = () => {
  const { t } = useTranslation();
  const [splineLoaded, setSplineLoaded] = useState(false);

  const services = [
    { icon: Cloud, label: 'Cloud', link: 'cloud' },
    { icon: Shield, label: 'Security', link: 'cyber-security' },
    { icon: Monitor, label: 'Managed IT', link: 'technology' },
    { icon: Briefcase, label: 'Modern Workplace', link: 'workplace' },
    { icon: Database, label: 'CRM', link: 'crm' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-navy/10">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        {!splineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-navy/80">
            <div className="w-12 h-12 border-4 border-bright-cyan border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <Spline 
          scene="https://prod.spline.design/PEG1P-Zw80VayvEe/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
          className="w-full h-full"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[1]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-1 bg-bright-cyan mb-6"
          />
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-dark-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business with <br />
            <span className="text-bright-cyan bg-gradient-to-r from-bright-cyan to-electric-blue bg-clip-text text-transparent">Enterprise-Grade IT</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-dark-navy/80 mb-8 font-medium max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join 500+ businesses that trust our solutions for their critical IT infrastructure. Experience enterprise-level service with personalized attention.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center gap-3 text-black hover:text-bright-cyan transition-colors duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <service.icon className="w-8 h-8 text-bright-cyan" />
                  <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-bold text-lg">{service.label}</span>
                {index < services.length - 1 && <span className="text-gray-600 ml-2 text-xl">|</span>}
              </Link>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 cursor-pointer flex items-center gap-2 button-glow w-full sm:w-auto justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="border-2 border-bright-cyan hover:border-electric-blue text-dark-navy font-bold py-4 px-8 rounded-lg transition duration-300 cursor-pointer bg-white/50 backdrop-blur-sm w-full sm:w-auto justify-center flex items-center"
            >
              Why Choose Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-bright-cyan/20">
              <div className="text-bright-cyan font-bold text-3xl mb-1">98%</div>
              <div className="text-dark-navy font-medium">Client Retention Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-bright-cyan/20">
              <div className="text-bright-cyan font-bold text-3xl mb-1">24/7</div>
              <div className="text-dark-navy font-medium">Expert IT Support</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-bright-cyan/20">
              <div className="text-bright-cyan font-bold text-3xl mb-1">35%</div>
              <div className="text-dark-navy font-medium">Cost Reduction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link
          to="cloud"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-bright-cyan/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-bright-cyan rounded-full mt-2"
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;