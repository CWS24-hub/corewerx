import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Key, Lock, CheckCircle, ArrowRight, Server, AlertTriangle, Settings } from 'lucide-react';

const EmailLicensing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        employees: '',
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
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80" 
            alt="Email Security" 
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
                <span className="text-bright-cyan font-semibold">Microsoft 365 & Email Security</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Secure Email & <span className="text-bright-cyan">Microsoft 365</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Complete email security and Microsoft 365 licensing solutions. Protect your business communications and enhance productivity with our expert services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 button-glow"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#pricing" 
                  className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 bg-navy/50 backdrop-blur-sm"
                >
                  View Pricing
                </a>
              </div>
              
              <div className="mt-8 bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                <div className="flex items-center gap-4 text-white">
                  <Shield className="w-6 h-6 text-bright-cyan" />
                  <span className="font-medium">Microsoft Solutions Partner</span>
                  <span className="text-gray-400">|</span>
                  <span className="font-medium">24/7 Support</span>
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
                <Mail className="w-16 h-16 text-bright-cyan mb-6" />
                <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Complete Email Solution</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Microsoft 365 licensing and setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Advanced email security and filtering</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Anti-spam and anti-phishing protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Email backup and archiving</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Mobile device email setup</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-bright-cyan/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-bright-cyan font-bold mb-2">
                  <Shield className="w-5 h-5" />
                  <span>Security Stats</span>
                </div>
                <p className="text-white text-sm">
                  Our email security solutions block over 99.9% of malicious emails and protect against advanced threats.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-bright-cyan">Email Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Comprehensive email and Microsoft 365 solutions designed to enhance productivity and security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <Mail className="w-12 h-12 text-bright-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Microsoft 365 Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Complete email migration</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>User account configuration</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Mobile device setup</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Training and support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <Shield className="w-12 h-12 text-bright-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Email Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Advanced threat protection</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Anti-phishing measures</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Spam filtering</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Data loss prevention</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <Settings className="w-12 h-12 text-bright-cyan mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Ongoing Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>24/7 monitoring</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>License management</span>
                </li>
                <li className="flex items-start gap-2 text-white">
                  <div className="w-1.5 h-1.5 bg-bright-cyan rounded-full mt-2 flex-shrink-0" />
                  <span>Technical support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready for <span className="text-bright-cyan">Hassle-Free IT?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Schedule a free IT assessment with our experts to identify opportunities for improvement and cost savings.
              </p>
              
              <div className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">What You'll Get:</h3>
                <ul className="space-y-3">
                  {[
                    'Comprehensive IT infrastructure assessment',
                    'Security vulnerability analysis',
                    'Cost-saving opportunities report',
                    'Custom IT management plan',
                    'Clear pricing with no hidden fees'
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="IT Expert" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-bright-cyan"
                />
                <div>
                  <p className="text-white font-bold">Robert Johnson</p>
                  <p className="text-gray-300">Senior IT Consultant</p>
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
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free IT Assessment</h3>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 text-white p-6 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Thank You!</h4>
                    <p>Your request has been submitted successfully. One of our IT consultants will contact you within 24 hours to schedule your free assessment.</p>
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
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-200 mb-2">
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-250">101-250</option>
                      <option value="251+">251+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Tell us about your IT needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="I'm interested in managed IT services for my business..."
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
                        <span>Schedule My Free IT Assessment</span>
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
    </div>
  );
};

export default EmailLicensing;