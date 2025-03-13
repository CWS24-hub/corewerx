import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Cloud, Clock, CheckCircle, ArrowRight, AlertTriangle, FileCheck, HardDrive, Zap } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const ContinuitySection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Disaster Recovery',
      description: 'Enterprise-grade disaster recovery solutions',
      benefits: [
        'Instant recovery capabilities',
        'Minimal downtime',
        'Data protection',
        'Business continuity'
      ],
      features: [
        'Instant virtualization',
        'Cloud recovery',
        'Automated testing',
        'Rapid restore',
        'Continuous monitoring'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure and scalable cloud storage solutions',
      benefits: [
        'Secure data storage',
        'Easy accessibility',
        'Automatic backups',
        'Cost optimization'
      ],
      features: [
        'File sync & share',
        'Team collaboration',
        'Version control',
        'Mobile access',
        'Data encryption'
      ]
    },
    {
      icon: Server,
      title: 'Business Continuity',
      description: 'Comprehensive business continuity planning',
      benefits: [
        'Minimal disruption',
        'Quick recovery',
        'Risk mitigation',
        'Operational resilience'
      ],
      features: [
        'Continuity planning',
        'Risk assessment',
        'Recovery procedures',
        'Staff training',
        'Regular testing'
      ]
    },
    {
      icon: Zap,
      title: 'Ransomware Protection',
      description: 'Advanced ransomware detection and prevention',
      benefits: [
        'Early threat detection',
        'Data protection',
        'Fast recovery',
        'Business protection'
      ],
      features: [
        'Threat monitoring',
        'Immutable backups',
        'Rapid recovery',
        'Security scanning',
        'Incident response'
      ]
    }
  ];

  return (
    <section id="continuity" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Business <span className="cyber-text">Continuity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Keep your business running with our comprehensive backup, recovery, and business continuity solutions powered by Datto SIRIS technology.
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
        
        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Why Choose Our Solution?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Instant Recovery</h4>
              <p className="text-gray-300">Boot backup images instantly in the cloud or locally, ensuring minimal downtime</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <FileCheck className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Verified Protection</h4>
              <p className="text-gray-300">Automated backup verification ensures your backups are always recoverable</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <HardDrive className="w-12 h-12 text-bright-cyan mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Hybrid Storage</h4>
              <p className="text-gray-300">Local and cloud backup copies for maximum protection and fastest recovery</p>
            </div>
          </div>
        </motion.div>
        
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 text-center">
            <div className="text-3xl font-bold text-bright-cyan mb-2">15 min</div>
            <p className="text-white font-medium">Average Recovery Time</p>
          </div>
          
          <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 text-center">
            <div className="text-3xl font-bold text-bright-cyan mb-2">99.99%</div>
            <p className="text-white font-medium">Backup Success Rate</p>
          </div>
          
          <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 text-center">
            <div className="text-3xl font-bold text-bright-cyan mb-2">24/7</div>
            <p className="text-white font-medium">Monitoring & Support</p>
          </div>
          
          <div className="bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 text-center">
            <div className="text-3xl font-bold text-bright-cyan mb-2">100%</div>
            <p className="text-white font-medium">Recovery Guarantee</p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ready to Protect Your Business?</h3>
              <p className="text-gray-300">
                Get a free business continuity assessment and discover how we can help protect your critical data and operations.
              </p>
            </div>
            <a 
              href="/landing/continuity"
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContinuitySection;