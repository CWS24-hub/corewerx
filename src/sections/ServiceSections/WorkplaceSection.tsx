import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, FileText, Cloud, Monitor, Laptop, Briefcase, Zap } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const WorkplaceSection = () => {
  const services = [
    {
      icon: Users,
      title: 'Microsoft Teams',
      description: 'Comprehensive collaboration and communication platform',
      benefits: [
        'Enhanced team collaboration',
        'Streamlined communication',
        'Improved productivity',
        'Centralized workspace'
      ],
      features: [
        'Chat and messaging',
        'Video conferencing',
        'File sharing and collaboration',
        'App integration',
        'Meeting scheduling'
      ]
    },
    {
      icon: FileText,
      title: 'SharePoint',
      description: 'Document management and collaboration platform',
      benefits: [
        'Centralized document storage',
        'Enhanced collaboration',
        'Improved document security',
        'Streamlined workflows'
      ],
      features: [
        'Document libraries',
        'Team sites',
        'Version control',
        'Permission management',
        'Workflow automation'
      ]
    },
    {
      icon: Cloud,
      title: 'OneDrive',
      description: 'Secure cloud storage for business files',
      benefits: [
        'Access files from anywhere',
        'Secure file storage',
        'Easy file sharing',
        'Automatic backup'
      ],
      features: [
        'Cloud storage',
        'File synchronization',
        'Sharing capabilities',
        'Version history',
        'Mobile access'
      ]
    },
    {
      icon: Zap,
      title: 'Power Platform',
      description: 'Low-code development tools for business solutions',
      benefits: [
        'Rapid application development',
        'Process automation',
        'Data insights',
        'Custom business solutions'
      ],
      features: [
        'Power Apps',
        'Power Automate',
        'Power BI',
        'Power Virtual Agents',
        'AI Builder'
      ]
    }
  ];

  return (
    <section id="workplace" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Modern <span className="cyber-text">Workplace</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Transform your workplace with our comprehensive Microsoft 365 solutions. Enhance productivity, collaboration, and communication across your organization.
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
        
        {/* Additional Workplace Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Why Choose Our Modern Workplace Solutions?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Laptop className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Seamless Integration</h4>
              <p className="text-gray-300">All Microsoft 365 applications work together seamlessly for a unified experience</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Monitor className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Work From Anywhere</h4>
              <p className="text-gray-300">Access your work from any device, anywhere, with cloud-based solutions</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Briefcase className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Expert Implementation</h4>
              <p className="text-gray-300">Our team ensures smooth deployment and adoption of Microsoft 365 tools</p>
            </div>
          </div>
        </motion.div>
        
        {/* Workplace CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Transform Your Workplace Today</h3>
              <p className="text-gray-300">
                Contact us to learn how our Modern Workplace solutions can enhance productivity and collaboration in your organization.
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

export default WorkplaceSection;