import React from 'react';
import { motion } from 'framer-motion';
import { Cloud as CloudIcon, Server, Database, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const CloudSection = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Microsoft 365',
      description: 'Complete productivity suite with flexible licensing options',
      benefits: [
        'Flexible licensing plans',
        'Enterprise-grade security',
        'Seamless collaboration',
        'Expert deployment & support'
      ],
      features: [
        'Microsoft 365 Business Basic',
        'Microsoft 365 Business Standard',
        'Microsoft 365 Business Premium',
        'Enterprise E1/E3/E5 Plans',
        'License management portal',
        'Dedicated support'
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
            Transform your business with our comprehensive cloud solutions. As a Microsoft Partner, we provide flexible licensing options and expert support for all your cloud needs.
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
        
        {/* Microsoft 365 Licensing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Microsoft 365 Licensing Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
              <h4 className="text-xl font-bold text-white mb-4">Business Plans</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Business Basic</span>
                    <p className="text-sm text-gray-300">Web versions of Office apps, email, and Teams</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Business Standard</span>
                    <p className="text-sm text-gray-300">Desktop Office apps plus email and Teams</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Business Premium</span>
                    <p className="text-sm text-gray-300">Advanced security and device management</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
              <h4 className="text-xl font-bold text-white mb-4">Enterprise Plans</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Enterprise E1</span>
                    <p className="text-sm text-gray-300">Web apps with enterprise-grade services</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Enterprise E3</span>
                    <p className="text-sm text-gray-300">Full suite with compliance features</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Enterprise E5</span>
                    <p className="text-sm text-gray-300">Advanced security and analytics</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
              <h4 className="text-xl font-bold text-white mb-4">Add-On Services</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Microsoft Teams Phone</span>
                    <p className="text-sm text-gray-300">Cloud-based phone system</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Power Platform</span>
                    <p className="text-sm text-gray-300">Business process automation</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Microsoft Copilot</span>
                    <p className="text-sm text-gray-300">AI-powered assistance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-navy/50 p-6 rounded-lg border border-bright-cyan/10">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CloudIcon className="w-6 h-6 text-bright-cyan" />
              Our Microsoft Partner Advantage
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">1</span>
                </div>
                <h5 className="font-bold text-white mb-2">License Management</h5>
                <p className="text-gray-300 text-sm">Simplified license management through our partner portal</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">2</span>
                </div>
                <h5 className="font-bold text-white mb-2">Expert Support</h5>
                <p className="text-gray-300 text-sm">Direct access to Microsoft-certified professionals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bright-cyan/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-bright-cyan font-bold text-lg">3</span>
                </div>
                <h5 className="font-bold text-white mb-2">Flexible Billing</h5>
                <p className="text-gray-300 text-sm">Monthly billing with the ability to adjust licenses as needed</p>
              </div>
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