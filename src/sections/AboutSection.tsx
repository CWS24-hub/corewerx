import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, TrendingUp, Users, CheckCircle, BarChart } from 'lucide-react';
import StaticBackground from '../components/StaticBackground';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients Served',
      description: 'Across various industries'
    },
    {
      icon: CheckCircle,
      value: '98%',
      label: 'Client Retention',
      description: 'Long-term partnerships'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
      description: 'For technical excellence'
    },
    {
      icon: BarChart,
      value: '35%',
      label: 'Average ROI',
      description: 'For our enterprise clients'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-dark-navy via-navy to-dark-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/90 via-navy/90 to-dark-navy/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-bright-cyan">Journey</span>
            </h2>
            <div className="h-1 w-24 bg-bright-cyan mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy/40 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15"
          >
            <div className="relative inline-block mb-6">
              <h3 className="text-2xl font-bold mb-2 text-bright-cyan">From Australia to the UAE</h3>
              <div className="h-1 w-20 bg-bright-cyan/50 rounded"></div>
            </div>
            
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                Founded in 2015 in Melbourne, Australia, CoreWerx quickly established itself as a premier IT solutions provider. Our innovative approach to cloud solutions and cybersecurity earned us recognition from industry leaders and a rapidly growing client base of mid to large enterprises.
              </p>
              
              <p className="text-lg leading-relaxed">
                After achieving remarkable success and building a portfolio of over 300 satisfied clients in Australia, we recognized an opportunity to bring our cutting-edge expertise to the dynamic UAE market. Our UAE division was established as a sister company, bringing with us the same commitment to excellence and innovation.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we are proud to offer UAE businesses the same state-of-the-art technology solutions that have transformed our Australian clients' operations. Our unique blend of technical expertise, strategic insight, and client-focused approach continues to deliver exceptional value and measurable results.
              </p>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-bright-cyan/10">
              <div className="flex items-center gap-2 text-bright-cyan">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Global Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-bright-cyan">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Proven Results</span>
              </div>
            </div>
          </motion.div>

          {/* Stats/Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bright-cyan/10 mb-4">
                    <item.icon className="w-6 h-6 text-bright-cyan" />
                  </div>
                  <h4 className="text-3xl font-bold text-bright-cyan mb-1">{item.value}</h4>
                  <p className="font-medium text-white mb-1">{item.label}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-navy/40 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Leadership Vision</h3>
              <div className="relative">
                <blockquote className="text-lg text-gray-200 italic mb-6">
                  "Our mission is to empower businesses with technology solutions that drive growth, enhance security, and optimize operations. We don't just provide IT services; we deliver business transformation."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                    alt="Michael Chen" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-bright-cyan"
                  />
                  <div>
                    <p className="font-bold text-white">Michael Chen</p>
                    <p className="text-bright-cyan">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Client Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-bright-cyan">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-6 font-medium">
                "The team transformed our IT infrastructure, reducing costs by 30% while improving performance. Their cloud migration strategy was flawless and their ongoing support is exceptional."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">Sarah Johnson</p>
                  <p className="text-bright-cyan text-sm">CTO, Technology Company</p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-bright-cyan">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-6 font-medium">
                "Their cybersecurity solutions have given us peace of mind. Their proactive approach to threat detection has already prevented several potential breaches."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="David Thompson" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">David Thompson</p>
                  <p className="text-bright-cyan text-sm">IT Director, Financial Services</p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy/40 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-bright-cyan">★</span>
                ))}
              </div>
              <p className="text-gray-200 mb-6 font-medium">
                "Working with CoreWerx on our Microsoft 365 implementation was seamless. Their expertise and attention to detail made the transition smooth for our entire organization."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Lisa Chen" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">Lisa Chen</p>
                  <p className="text-bright-cyan text-sm">COO, Financial Group</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;