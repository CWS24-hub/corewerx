import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bell, UserCheck, Mail, FileText, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react';
import StaticBackground from '../../components/StaticBackground';
import ServiceCard from '../../components/ServiceCard';

const CyberSecuritySection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cyber Security Protection',
      description: 'Comprehensive protection against cyber threats',
      benefits: [
        'Early threat detection and prevention',
        'Reduced security incident impact',
        'Continuous security monitoring',
        'Rapid incident response'
      ],
      features: [
        '24/7 security monitoring',
        'Advanced threat detection',
        'Automated response protocols',
        'Security incident reporting',
        'Threat intelligence integration'
      ]
    },
    {
      icon: Bell,
      title: 'Cyber Awareness Training',
      description: 'Employee security awareness programs',
      benefits: [
        'Enhanced security awareness',
        'Reduced human error risk',
        'Compliance with security policies',
        'Improved security culture'
      ],
      features: [
        'Interactive training modules',
        'Phishing simulations',
        'Security best practices',
        'Compliance training',
        'Progress tracking'
      ]
    },
    {
      icon: UserCheck,
      title: 'Security Operations Centre (SOC)',
      description: '24/7 security monitoring and alerts',
      benefits: [
        'Continuous security oversight',
        'Immediate threat notification',
        'Reduced response time',
        'Proactive threat hunting'
      ],
      features: [
        'Real-time alert system',
        'Security dashboard',
        'Incident tracking',
        'Performance monitoring',
        'Automated reporting'
      ]
    },
    {
      icon: Lock,
      title: 'Next-gen AV, XDR, EDR',
      description: 'Advanced endpoint protection solutions',
      benefits: [
        'Protected sensitive data',
        'Regulatory compliance',
        'Reduced data breach risk',
        'Secure data sharing'
      ],
      features: [
        'Endpoint detection and response',
        'Extended detection and response',
        'Behavioral analysis',
        'Threat intelligence',
        'Automated remediation'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Mail,
      title: 'Email Security',
      description: 'Advanced protection against phishing and email-based threats'
    },
    {
      icon: FileText,
      title: 'Vulnerability Scanning',
      description: 'Regular scanning to identify and remediate security vulnerabilities'
    },
    {
      icon: CheckCircle,
      title: 'Essential Eight',
      description: 'Implementation of the Essential Eight mitigation strategies'
    },
    {
      icon: AlertTriangle,
      title: 'SMB1001',
      description: 'Small business security framework implementation'
    },
    {
      icon: Mail,
      title: 'Business Email Compromise Response',
      description: 'Rapid response to email compromise incidents'
    },
    {
      icon: FileCheck,
      title: 'Compliance & Risk Management',
      description: 'Ensure adherence to industry regulations and security standards'
    },
    {
      icon: Shield,
      title: 'PenTesting',
      description: 'Identify security weaknesses through simulated cyber attacks'
    },
    {
      icon: Lock,
      title: 'Application Whitelisting',
      description: 'Control which applications can run on your systems'
    }
  ];

  return (
    <section id="cyber-security" className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Cyber Security <span className="cyber-text">(MSSP)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Protect your business with our comprehensive security solutions. From network security to data protection, we ensure your business stays safe from cyber threats.
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
        
        {/* Additional Security Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Additional Security Services</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-bright-cyan/10 p-3 rounded-full mb-3">
                  <service.icon className="w-8 h-8 text-bright-cyan" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Security Assessment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-navy/90 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Get a Free Security Assessment</h3>
              <p className="text-gray-300">
                Discover vulnerabilities in your systems before hackers do. Our comprehensive security assessment identifies risks and provides actionable recommendations.
              </p>
            </div>
            <a 
              href="/landing/security"
              className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Schedule Assessment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;