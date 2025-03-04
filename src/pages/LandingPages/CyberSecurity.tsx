import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bell, UserCheck, CheckCircle, ArrowRight, AlertTriangle, FileCheck } from 'lucide-react';
import { Link } from 'react-scroll';

const CyberSecurity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const securityServices = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Proactive monitoring and rapid response to security threats before they impact your business.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive encryption and access controls to safeguard your sensitive business data.'
    },
    {
      icon: Bell,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock surveillance of your systems with real-time alerts and incident response.'
    },
    {
      icon: UserCheck,
      title: 'Security Awareness Training',
      description: 'Educate your team to recognize and prevent social engineering and phishing attacks.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            alt="Cybersecurity" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 via-dark-navy/90 to-dark-navy"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-bright-cyan/20 px-4 py-2 rounded-full mb-6">
                <span className="text-bright-cyan font-semibold">Enterprise Cybersecurity</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Protect Your Business from <span className="text-bright-cyan">Cyber Threats</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Comprehensive cybersecurity solutions to defend your enterprise against evolving threats. Secure your data, systems, and reputation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#security-assessment" 
                  className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 button-glow"
                >
                  Get a Free Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services" 
                  className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 bg-navy/50 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>
              
              <div className="mt-8 bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">Cyber Attacks Are Increasing</h3>
                  <p className="text-gray-300">
                    60% of small businesses close within 6 months of a cyber attack. Don't become a statistic.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy/80 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 hidden lg:block"
            >
              <div className="relative">
                <Shield className="w-16 h-16 text-bright-cyan mb-6" />
                <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">The Cost of Cyber Attacks</h3>
              
              <div className="space-y-6">
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">$4.35 Million</h4>
                  <p className="text-gray-300">Average cost of a data breach in 2023</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">287 Days</h4>
                  <p className="text-gray-300">Average time to identify and contain a breach</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">60%</h4>
                  <p className="text-gray-300">Of small businesses close within 6 months of an attack</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">43%</h4>
                  <p className="text-gray-300">Of cyber attacks target small businesses</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-bright-cyan">Security Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg transition duration-300 card-glow border border-bright-cyan/20 shadow-lg shadow-bright-cyan/5"
              >
                <div className="mb-6 relative">
                  <service.icon className="w-12 h-12 text-bright-cyan" />
                  <div className="absolute -inset-1 bg-bright-cyan/5 rounded-full blur-md -z-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Threat Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The <span className="text-bright-cyan">Threat Landscape</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Understanding the evolving cyber threats facing businesses today.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Ransomware Attacks',
                stat: '+150%',
                description: 'Increase in ransomware attacks targeting businesses in the last year.'
              },
              {
                title: 'Phishing Attempts',
                stat: '3.4 Billion',
                description: 'Phishing emails sent daily, with increasingly sophisticated tactics.'
              },
              {
                title: 'Zero-Day Exploits',
                stat: '12,000+',
                description: 'New vulnerabilities discovered annually that can be exploited before patches.'
              },
              {
                title: 'Supply Chain Attacks',
                stat: '+300%',
                description: 'Increase in attacks targeting vulnerable points in the supply chain.'
              },
              {
                title: 'Insider Threats',
                stat: '34%',
                description: 'Of data breaches involve internal actors, either malicious or negligent.'
              },
              {
                title: 'Cloud Security Incidents',
                stat: '95%',
                description: 'Of cloud security failures are the result of human error, not provider issues.'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{stat.title}</h3>
                <div className="text-3xl font-bold text-bright-cyan mb-3">{stat.stat}</div>
                <p className="text-gray-300 font-medium">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Security Assessment Form Section */}
      <section id="security-assessment" className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Get Your Free <span className="text-bright-cyan">Security Assessment</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Discover vulnerabilities in your systems before hackers do. Our comprehensive security assessment identifies risks and provides actionable recommendations.
              </p>
              
              <div className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    'Vulnerability scanning and assessment',
                    'Security policy review',
                    'Network security analysis',
                    'Phishing simulation test',
                    'Executive summary with risk scores',
                    'Prioritized remediation recommendations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Security Expert" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-bright-cyan"
                />
                <div>
                  <p className="text-white font-bold">David Thompson</p>
                  <p className="text-gray-300">Chief Security Officer</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-bright-cyan">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Request Your Assessment</h3>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 text-white p-6 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Thank You!</h4>
                    <p>Your security assessment request has been submitted successfully. One of our security experts will contact you within 24 hours to schedule your assessment.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                        placeholder="Company Inc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Tell us about your security concerns
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-navy/30 border border -gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="I'm concerned about our vulnerability to ransomware..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 rounded-lg transition duration-300 button-glow flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Security Assessment</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-400 text-center">
                    By submitting this form, you agree to our <a href="#" className="text-bright-cyan hover:underline">Privacy Policy</a> and <a href="#" className="text-bright-cyan hover:underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Compliance & <span className="text-bright-cyan">Regulations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              We help businesses meet industry-specific compliance requirements and regulations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'GDPR', description: 'General Data Protection Regulation' },
              { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
              { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
              { name: 'SOC 2', description: 'Service Organization Control 2' },
              { name: 'ISO 27001', description: 'Information Security Management' },
              { name: 'CCPA', description: 'California Consumer Privacy Act' }
            ].map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 flex flex-col items-center text-center"
              >
                <div className="bg-bright-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="w-8 h-8 text-bright-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{compliance.name}</h3>
                <p className="text-gray-300 text-sm">{compliance.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Why Compliance Matters</h3>
            <p className="text-gray-300 font-medium mb-6">
              Beyond avoiding penalties, compliance frameworks provide a structured approach to security that protects your business and builds customer trust. Our security solutions are designed to help you meet and maintain compliance with relevant regulations.
            </p>
            <a 
              href="#security-assessment" 
              className="inline-block text-bright-cyan hover:text-electric-blue transition-colors font-semibold flex items-center group"
            >
              Learn how we can help with your compliance needs
              <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What Our <span className="text-bright-cyan">Clients Say</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "After experiencing a ransomware attack that cost us nearly $200,000, we implemented CoreWerx's security solutions. Their proactive approach has prevented multiple potential breaches since then.",
                name: "Sarah Johnson",
                title: "CTO, Financial Services Firm",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "The security assessment revealed vulnerabilities we had no idea existed. The team provided clear, actionable recommendations that significantly improved our security posture.",
                name: "Michael Chen",
                title: "IT Director, Healthcare Provider",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "Their security awareness training transformed our company culture. Our employees now recognize phishing attempts and follow security best practices as second nature.",
                name: "Lisa Rodriguez",
                title: "COO, E-commerce Platform",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bright-cyan">★</span>
                  ))}
                </div>
                <p className="text-white font-medium mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gray-300 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Frequently Asked <span className="text-bright-cyan">Questions</span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you respond to a security incident?',
                answer: 'Our incident response team is available 24/7/365. We typically begin responding to critical security incidents within 15 minutes of detection, with a comprehensive response plan activated within the first hour.'
              },
              {
                question: 'Do you offer employee security awareness training?',
                answer: 'Yes, we provide comprehensive security awareness training programs customized to your organization. These include phishing simulations, interactive modules, and regular assessments to ensure your team becomes your strongest security asset.'
              },
              {
                question: 'How do you stay current with evolving cyber threats?',
                answer: 'Our security team continuously monitors global threat intelligence feeds, participates in industry information sharing groups, and conducts regular research on emerging threats. We update our security tools and methodologies accordingly to protect against the latest attack vectors.'
              },
              {
                question: 'Can you help with regulatory compliance requirements?',
                answer: 'Absolutely. We specialize in helping businesses meet compliance requirements including GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, and CCPA. Our solutions are designed to align with these frameworks while providing robust security.'
              },
              {
                question: 'What makes your security solutions different from others?',
                answer: 'Our approach combines advanced technology with human expertise. While we leverage AI and automation for threat detection, our experienced security analysts provide context, reduce false positives, and develop customized security strategies tailored to your specific business needs.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 font-medium">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6 font-medium">
              Have more questions about our cybersecurity solutions?
            </p>
            <a 
              href="#security-assessment" 
              className="inline-block bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 button-glow"
            >
              Contact Our Security Experts
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Don't Wait for a Breach to <span className="text-bright-cyan">Take Action</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium max-w-3xl mx-auto">
              Protect your business, data, and reputation with our comprehensive cybersecurity solutions.
            </p>
            
            <a 
              href="#security-assessment" 
              className="inline-block bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-10 rounded-lg transition duration-300 button-glow text-lg"
            >
              Get Your Free Security Assessment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;