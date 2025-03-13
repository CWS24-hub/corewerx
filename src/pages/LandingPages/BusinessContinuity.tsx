import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Cloud, Clock, CheckCircle, ArrowRight, AlertTriangle, FileCheck, HardDrive, Zap } from 'lucide-react';

const BusinessContinuity = () => {
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80" 
            alt="Business Continuity" 
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
                <span className="text-bright-cyan font-semibold">Business Continuity & Disaster Recovery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Keep Your Business <span className="text-bright-cyan">Always Running</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Protect your business with enterprise-grade backup and disaster recovery solutions. Ensure business continuity with instant recovery and ransomware protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 button-glow"
                >
                  Get Protected Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#features" 
                  className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 bg-navy/50 backdrop-blur-sm"
                >
                  Learn More
                </a>
              </div>
              
              <div className="mt-8 bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                <div className="flex items-center gap-4 text-white">
                  <Shield className="w-6 h-6 text-bright-cyan" />
                  <span className="font-medium">Datto SIRIS Certified Partner</span>
                  <span className="text-gray-400">|</span>
                  <span className="font-medium">24/7 Recovery Support</span>
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
                <HardDrive className="w-16 h-16 text-bright-cyan mb-6" />
                <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our Solution?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Instant recovery with verified backups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Advanced ransomware protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Cloud-first disaster recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Rapid local and cloud recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">24/7/365 support and monitoring</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-bright-cyan/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-bright-cyan font-bold mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Did You Know?</span>
                </div>
                <p className="text-white text-sm">
                  60% of businesses that lose their data will shut down within 6 months. Don't become a statistic - protect your business today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Enterprise-Grade <span className="text-bright-cyan">Protection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Powered by Datto SIRIS technology, our solution provides comprehensive protection for your business data and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Backup Protection",
                description: "Immutable backups with ransomware detection and instant verification for guaranteed recovery."
              },
              {
                icon: Zap,
                title: "Instant Recovery",
                description: "Boot backup images instantly in the cloud or locally, ensuring minimal downtime."
              },
              {
                icon: Cloud,
                title: "Cloud-First Recovery",
                description: "Secure cloud recovery options with multiple data centers for geographic redundancy."
              },
              {
                icon: Server,
                title: "Hybrid Protection",
                description: "Both local and cloud backup copies for maximum protection and fastest recovery."
              },
              {
                icon: Clock,
                title: "Rapid Recovery Time",
                description: "Recovery time objectives (RTO) measured in minutes, not hours or days."
              },
              {
                icon: FileCheck,
                title: "Backup Verification",
                description: "Automated backup verification ensures your backups are always recoverable."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg transition duration-300 card-glow border border-bright-cyan/20 shadow-lg shadow-bright-cyan/5"
              >
                <div className="mb-6 relative">
                  <feature.icon className="w-12 h-12 text-bright-cyan" />
                  <div className="absolute -inset-1 bg-bright-cyan/5 rounded-full blur-md -z-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Protect Your Business <span className="text-bright-cyan">Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Don't wait for a disaster to think about recovery. Contact us now to learn how we can protect your business with enterprise-grade backup and recovery solutions.
              </p>
              
              <div className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">What You'll Get:</h3>
                <ul className="space-y-3">
                  {[
                    'Free business continuity assessment',
                    'Custom recovery time objective analysis',
                    'Backup and recovery cost analysis',
                    'Ransomware protection evaluation',
                    'Clear implementation roadmap'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Assessment</h3>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 text-white p-6 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Thank You!</h4>
                    <p>Your request has been submitted successfully. One of our business continuity experts will contact you within 24 hours.</p>
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
                      Tell us about your backup needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="What are your main concerns about data protection and business continuity?"
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
                        <span>Get Your Free Assessment</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessContinuity;