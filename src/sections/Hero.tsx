import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Shield, Cloud, Monitor, Users, Database, ArrowRight, Briefcase } from 'lucide-react';
import StaticBackground from '../components/StaticBackground';

const Hero = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Cloud, label: 'Cloud', link: 'cloud' },
    { icon: Shield, label: 'Security', link: 'cyber-security' },
    { icon: Monitor, label: 'Managed IT', link: 'technology' },
    { icon: Briefcase, label: 'Modern Workplace', link: 'workplace' },
    { icon: Database, label: 'CRM', link: 'crm' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-navy/10">
      <StaticBackground 
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
        overlay={false}
      />
      
      {/* Lighter overlay to make the section brighter */}
      <div className="absolute inset-0 bg-white/60 z-[1]"></div>
      
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-dark-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Smarter IT. <br />
            <span className="text-bright-cyan">Stronger Business.</span>
          </motion.h1>

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
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer flex items-center gap-2 button-glow"
            >
              Who We Are
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="cloud"
              spy={true}
              smooth={true}
              duration={500}
              className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-dark-navy font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer bg-white/50 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated data streams in background - made lighter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="data-stream absolute"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 30 + 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              opacity: '0.1' // Reduced opacity
            }}
          />
        ))}
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