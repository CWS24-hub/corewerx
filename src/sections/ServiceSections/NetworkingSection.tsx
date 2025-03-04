import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, FileText, Cloud, Phone, Network, Wifi, Globe } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const NetworkingSection = () => {
  const services = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network protection solutions',
      benefits: [
        'Enhanced network security',
        'Threat prevention',
        'Data protection',
        'Compliance support'
      ],
      features: [
        'Firewall management',
        'Intrusion detection',
        'VPN solutions',
        'Network monitoring',
        'Security policies'
      ]
    },
    {
      icon: Wifi,
      title: 'WiFi Networks',
      description: 'From simple to complex unified WiFi solutions',
      benefits: [
        'Seamless connectivity',
        'Enhanced coverage',
        'Scalable solutions',
        'Centralized management'
      ],
      features: [
        'Site surveys & planning',
        'Mesh WiFi systems',
        'Enterprise access points',
        'Unified management',
        'Guest network setup'
      ]
    },
    {
      icon: Globe,
      title: 'Managed Internet',
      description: 'Reliable internet connectivity solutions',
      benefits: [
        'Reliable connectivity',
        'Optimized performance',
        'Proactive monitoring',
        'Expert support'
      ],
      features: [
        'Bandwidth management',
        'Performance optimization',
        'Redundancy options',
        '24/7 monitoring',
        'Issue resolution'
      ]
    },
    {
      icon: Phone,
      title: 'Microsoft Teams Phone',
      description: 'Cloud-based business phone system',
      benefits: [
        'Unified communications',
        'Cost savings',
        'Enhanced mobility',
        'Simplified management'
      ],
      features: [
        'Phone system setup',
        'Number porting',
        'Call routing',
        'Voicemail configuration',
        'Auto attendant setup'
      ]
    }
  ];

  return (
    <section id="networking" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Networking & <span className="cyber-text">Communications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Transform your workplace with our comprehensive networking and communications solutions. Enhance connectivity, collaboration, and productivity across your organization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>
        
        {/* WiFi Network Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">WiFi Network Solutions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Wifi className="w-6 h-6 text-bright-cyan mr-3" />
                Simple WiFi Networks
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Small office and home office (SOHO) solutions</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Mesh WiFi systems for seamless coverage</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Guest network setup with secure isolation</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Basic security features and parental controls</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Remote management and monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Network className="w-6 h-6 text-bright-cyan mr-3" />
                Unified Enterprise WiFi
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Centralized management with controller-based systems</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>High-density deployments for large offices</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Advanced security with 802.1X authentication</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>VLAN segmentation and QoS for traffic prioritization</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Seamless roaming across multiple access points</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 text-bright-cyan mr-3" />
              Our WiFi Network Implementation Process
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">1</span>
                </div>
                <h5 className="font-bold text-white mb-2">Site Survey & Planning</h5>
                <p className="text-gray-300 text-sm">Comprehensive assessment of your space to identify coverage requirements and potential interference sources</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">2</span>
                </div>
                <h5 className="font-bold text-white mb-2">Design & Configuration</h5>
                <p className="text-gray-300 text-sm">Custom network design with optimal access point placement, channel planning, and security configuration</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">3</span>
                </div>
                <h5 className="font-bold text-white mb-2">Implementation & Testing</h5>
                <p className="text-gray-300 text-sm">Professional installation followed by thorough testing to ensure optimal coverage, speed, and reliability</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Additional Network Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Comprehensive Communications Solutions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <MessageSquare className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Unified Communications</h4>
              <p className="text-gray-300">Integrate all your communication channels into a single, seamless platform for enhanced collaboration</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <FileText className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Document Collaboration</h4>
              <p className="text-gray-300">Enable real-time document collaboration with Microsoft SharePoint and OneDrive integration</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Team Collaboration</h4>
              <p className="text-gray-300">Foster teamwork with Microsoft Teams, enabling chat, meetings, and file sharing in one place</p>
            </div>
          </div>
        </motion.div>
        
        {/* Networking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Enhance Your Business Communications</h3>
              <p className="text-gray-300">
                Contact us today to learn how our networking and communications solutions can transform your workplace.
              </p>
            </div>
            <a 
              href="#contact"
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkingSection;