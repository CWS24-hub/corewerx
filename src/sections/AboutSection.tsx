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
    <section className="relative min-h-screen flex items-center py-20 bg-dark-navy/90">
      {/* Darker overlay for the background */}
      <div className="absolute inset-0 bg-dark-navy/90 z-0"></div>
      
      <StaticBackground src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Our <span className="cyber-text">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative inline-block mb-6">
              <h3 className="text-2xl font-bold mb-2 text-bright-cyan">From Australia to the UAE</h3>
              <div className="h-1 w-20 bg-bright-cyan/50 rounded"></div>
            </div>
            
            <p className="text-white text-lg leading-relaxed font-medium">
              Founded in 2015 in Melbourne, Australia, our company quickly established itself as a premier IT solutions provider in the Australian market. Our innovative approach to cloud solutions and cybersecurity earned us recognition from industry leaders and a rapidly growing client base of mid to large enterprises.
            </p>
            
            <p className="text-white text-lg leading-relaxed font-medium">
              After achieving remarkable success and building a portfolio of over 300 satisfied clients in Australia, we recognized an opportunity to bring our cutting-edge expertise to the dynamic UAE market. Our UAE division was established as a sister company to our Australian branch, bringing with us the same commitment to excellence and innovation that made us successful in Australia.
            </p>
            
            <p className="text-white text-lg leading-relaxed font-medium">
              Today, we are proud to offer UAE businesses the same state-of-the-art technology solutions and services that have transformed our Australian clients' operations. Our unique blend of technical expertise, strategic insight, and client-focused approach continues to deliver exceptional value and measurable results for businesses across both regions.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
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
          >
            <div className="bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Impact</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-center p-4 rounded-lg bg-dark-navy/80 border border-bright-cyan/10"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bright-cyan/10 mb-4 mx-auto">
                      <item.icon className="w-6 h-6 text-bright-cyan" />
                    </div>
                    <h4 className="text-3xl font-bold text-bright-cyan mb-1">{item.value}</h4>
                    <p className="font-medium text-white mb-1">{item.label}</p>
                    <p className="text-sm text-white">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-4 border border-bright-cyan/15 rounded-lg bg-bright-cyan/5">
                <p className="text-center text-white italic font-medium">
                  "Our mission is to empower businesses with technology solutions that drive growth, enhance security, and optimize operations. We don't just provide IT services; we deliver business transformation."
                </p>
                <p className="text-right text-bright-cyan font-medium mt-2">— Michael Chen, Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5">
              <p className="text-white mb-4 font-medium">
                "The team transformed our IT infrastructure, reducing costs by 30% while improving performance. Their cloud migration strategy was flawless and their ongoing support is exceptional."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">Sarah Johnson</p>
                  <p className="text-sm text-white">CTO, Technology Company</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bright-cyan">★</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5">
              <p className="text-white mb-4 font-medium">
                "The cybersecurity solutions implemented have given us peace of mind. Their proactive approach to threat detection has already prevented several potential breaches."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">David Thompson</p>
                  <p className="text-sm text-white">IT Director, Financial Services</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bright-cyan">★</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5">
              <p className="text-white mb-4 font-medium">
                "Working with the team on our Microsoft 365 implementation was seamless. Their expertise and attention to detail made the transition smooth for our entire organization."
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">Lisa Chen</p>
                  <p className="text-sm text-white">COO, Financial Group</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bright-cyan">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-bright-cyan/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;