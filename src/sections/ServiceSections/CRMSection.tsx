import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Users, BarChart, Settings, Database, Lock, FileCheck, Workflow } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const CRMSection = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Salesforce Implementation',
      description: 'End-to-end Salesforce setup and deployment',
      benefits: [
        'Streamlined sales processes',
        'Enhanced customer management',
        'Improved team collaboration',
        'Data-driven decision making'
      ],
      features: [
        'Custom implementation strategy',
        'System configuration',
        'Data migration',
        'Integration setup',
        'User training'
      ]
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'User setup, roles, and permission management',
      benefits: [
        'Secure access control',
        'Role-based permissions',
        'Simplified user administration',
        'Compliance management'
      ],
      features: [
        'User role definition',
        'Permission sets',
        'Security policies',
        'Access monitoring',
        'Audit trails'
      ]
    },
    {
      icon: BarChart,
      title: 'Reports & Analytics',
      description: 'Custom reports, dashboards, and analytics',
      benefits: [
        'Real-time insights',
        'Custom reporting',
        'Performance tracking',
        'Data visualization'
      ],
      features: [
        'Custom dashboards',
        'Report automation',
        'Analytics tools',
        'KPI tracking',
        'Data export'
      ]
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Custom apps and automation solutions',
      benefits: [
        'Tailored solutions',
        'Process automation',
        'Enhanced functionality',
        'Improved efficiency'
      ],
      features: [
        'Custom applications',
        'Workflow automation',
        'API integration',
        'Lightning components',
        'Mobile solutions'
      ]
    }
  ];

  return (
    <section id="crm" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            CRM <span className="cyber-text">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Maximize your Salesforce investment with our comprehensive implementation, customization, and support services.
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
        
        {/* Additional CRM Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Why Choose Our CRM Solutions?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Database className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Data Integration</h4>
              <p className="text-gray-300">Seamlessly connect your CRM with other business systems for a unified view of customer data</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Lock className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Data Security</h4>
              <p className="text-gray-300">Enterprise-grade security measures to protect your valuable customer information</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <FileCheck className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Ongoing Support</h4>
              <p className="text-gray-300">Continuous optimization and support to ensure your CRM evolves with your business needs</p>
            </div>
          </div>
        </motion.div>
        
        {/* CRM Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Transform Your Customer Relationships</h3>
              <p className="text-gray-300">
                Contact us today to learn how our CRM solutions can help you better manage customer relationships and drive business growth.
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

export default CRMSection;