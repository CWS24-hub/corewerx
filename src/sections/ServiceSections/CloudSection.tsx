import React from 'react';
import { motion } from 'framer-motion';
import { Cloud as CloudIcon, Server, Database, Lock } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const CloudSection = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Microsoft 365',
      description: 'Complete productivity and collaboration suite',
      benefits: [
        'Enhanced team collaboration',
        'Improved productivity',
        'Secure communication',
        'Access from anywhere'
      ],
      features: [
        'Email and calendar',
        'Teams for communication',
        'SharePoint for document management',
        'OneDrive for file storage',
        'Security and compliance tools'
      ]
    },
    {
      icon: Server,
      title: 'Microsoft Azure',
      description: 'Scalable and secure cloud infrastructure',
      benefits: [
        'Reduced IT infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Automatic updates and maintenance'
      ],
      features: [
        'Virtual machines and containers',
        'Cloud storage solutions',
        'Database services',
        'Backup and disaster recovery',
        'Security and compliance tools'
      ]
    },
    {
      icon: Database,
      title: 'Microsoft Copilot for 365',
      description: 'AI-powered productivity assistant',
      benefits: [
        'Increased productivity',
        'Streamlined workflows',
        'Enhanced content creation',
        'Improved data insights'
      ],
      features: [
        'AI-powered writing assistance',
        'Smart meeting summaries',
        'Automated data analysis',
        'Intelligent search capabilities',
        'Contextual recommendations'
      ]
    },
    {
      icon: Lock,
      title: 'Cloud & Process Improvement',
      description: 'Optimize your cloud infrastructure and workflows',
      benefits: [
        'Enhanced operational efficiency',
        'Cost optimization',
        'Improved performance',
        'Streamlined processes'
      ],
      features: [
        'Cloud architecture assessment',
        'Process automation',
        'Workflow optimization',
        'Cost management',
        'Performance monitoring'
      ]
    }
  ];

  return (
    <section id="cloud" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Cloud Solutions <span className="cyber-text">(CSP)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Transform your business with our comprehensive cloud solutions. From Microsoft 365 to Azure, we provide everything your business needs to thrive in the cloud.
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
        
        {/* Additional Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Why Choose Our Cloud Solutions?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Server className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Microsoft Partner</h4>
              <p className="text-gray-300">As a certified Microsoft partner, we provide expert guidance and support for all Microsoft cloud services</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Lock className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security-First Approach</h4>
              <p className="text-gray-300">We implement robust security measures to protect your data and applications in the cloud</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <CloudIcon className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Seamless Migration</h4>
              <p className="text-gray-300">Our proven migration methodology ensures a smooth transition to the cloud with minimal disruption</p>
            </div>
          </div>
        </motion.div>
        
        {/* Cloud Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ready to Transform Your IT Infrastructure?</h3>
              <p className="text-gray-300">
                Schedule a free consultation with our cloud experts to discuss how our solutions can help you achieve your goals.
              </p>
            </div>
            <a 
              href="/landing/cloud"
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSection;