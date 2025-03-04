import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, HeadphonesIcon, Network, Settings, Laptop, Server, Cloud, Clock } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const TechnologySection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'IT Support',
      description: 'Comprehensive technical support for your team',
      benefits: [
        'Fast issue resolution',
        'Reduced downtime',
        'Improved productivity',
        'Expert technical assistance'
      ],
      features: [
        '24/7 support availability',
        'Multi-channel support',
        'Ticket tracking system',
        'Knowledge base access',
        'Remote assistance'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Virtual CIO/CTO',
      description: 'Strategic technology leadership and guidance',
      benefits: [
        'Expert technology guidance',
        'Strategic IT planning',
        'Budget optimization',
        'Technology roadmapping'
      ],
      features: [
        'IT strategy development',
        'Technology assessment',
        'Budget planning',
        'Vendor management',
        'Regular business reviews'
      ]
    },
    {
      icon: Network,
      title: 'Disaster Recovery',
      description: 'Comprehensive business continuity solutions',
      benefits: [
        'Minimized downtime',
        'Data protection',
        'Business continuity',
        'Risk mitigation'
      ],
      features: [
        'Recovery planning',
        'Backup systems',
        'Failover testing',
        'Emergency response',
        'System restoration'
      ]
    },
    {
      icon: Settings,
      title: 'Procurement',
      description: 'Strategic hardware and software acquisition',
      benefits: [
        'Cost-effective purchasing',
        'Vendor management',
        'Quality assurance',
        'Streamlined procurement'
      ],
      features: [
        'Needs assessment',
        'Vendor selection',
        'Price negotiation',
        'Order management',
        'Asset tracking'
      ]
    }
  ];

  return (
    <section id="technology" className="relative min-h-screen flex items-center py-20">
      {/* Add a darker overlay to improve text readability */}
      <div className="absolute inset-0 bg-dark-navy/80 z-0"></div>
      
      <StaticBackground src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Technology <span className="cyber-text">(MSP)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Comprehensive IT management and support to keep your business running smoothly. Our team monitors and maintains your systems around the clock.
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
        
        {/* Add additional information section for better mobile experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our Managed IT Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-bright-cyan/10 p-2 rounded-full">
                <Clock className="w-6 h-6 text-bright-cyan" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">24/7 Availability</h4>
                <p className="text-white font-medium">Our support team is available around the clock to address any IT issues that may arise.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-bright-cyan/10 p-2 rounded-full">
                <Server className="w-6 h-6 text-bright-cyan" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Proactive Monitoring</h4>
                <p className="text-white font-medium">We identify and resolve issues before they impact your business operations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-bright-cyan/10 p-2 rounded-full">
                <Cloud className="w-6 h-6 text-bright-cyan" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Cloud Integration</h4>
                <p className="text-white font-medium">Seamless integration with cloud services for enhanced flexibility and scalability.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-bright-cyan/10 p-2 rounded-full">
                <Laptop className="w-6 h-6 text-bright-cyan" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Remote Support</h4>
                <p className="text-white font-medium">Quick resolution of issues through secure remote access to your systems.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Technology MSP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ready for Hassle-Free IT?</h3>
              <p className="text-gray-300">
                Schedule a free IT assessment with our experts to identify opportunities for improvement and cost savings.
              </p>
            </div>
            <a 
              href="/landing/managed-it"
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Get Free Assessment
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Add subtle animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(10)].map((_, i) => (
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

export default TechnologySection;