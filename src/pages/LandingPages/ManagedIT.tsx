import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, HeadphonesIcon, Network, Settings, CheckCircle, ArrowRight, Server, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

const ManagedIT = () => {
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
        employees: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const services = [
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your IT infrastructure to detect and resolve issues before they impact your business.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Help Desk Support',
      description: 'Responsive technical support for your team whenever they need assistance with IT issues.'
    },
    {
      icon: Network,
      title: 'Network Management',
      description: 'Comprehensive management of your network infrastructure to ensure optimal performance and security.'
    },
    {
      icon: Settings,
      title: 'Proactive Maintenance',
      description: 'Regular updates, patches, and optimization to prevent issues and keep your systems running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
            alt="Managed IT Services" 
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
                <span className="text-bright-cyan font-semibold">Managed IT Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Focus on Your Business, <span className="text-bright-cyan">Not IT Problems</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Comprehensive IT management and support to keep your business running smoothly. Let us handle your technology so you can focus on growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 button-glow"
                >
                  Get a Free IT Assessment
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services" 
                  className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 bg-navy/50 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-navy bg-gray-300 flex items-center justify-center text-navy font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">
                  <span className="text-bright-cyan font-bold">98%</span> client retention rate
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy/80 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 hidden lg:block"
            >
              <div className="relative">
                <Monitor className="w-16 h-16 text-bright-cyan mb-6" />
                <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Why Businesses Choose Us</h3>
              
              <ul className="space-y-4">
                {[
                  'Reduce IT costs by up to 40%',
                  '24/7 monitoring and support',
                  'Proactive maintenance and updates',
                  'Enhanced security and compliance',
                  'Predictable monthly IT expenses',
                  'Strategic technology planning'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
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
              Our <span className="text-bright-cyan">Managed IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Comprehensive IT solutions designed to keep your business running smoothly and securely.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
      
      {/* Benefits Section */}
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
              Benefits of <span className="text-bright-cyan">Managed IT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              See how our managed IT services can transform your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reduced IT Costs',
                description: 'Save up to 40% on IT expenses with predictable monthly costs and no surprise fees.',
                icon: Server
              },
              {
                title: 'Increased Productivity',
                description: 'Minimize downtime and keep your team working efficiently with proactive IT management.',
                icon: Clock
              },
              {
                title: 'Enhanced Security',
                description: 'Protect your business with enterprise-grade security solutions and continuous monitoring.',
                icon: Settings
              },
              {
                title: 'Expert Support',
                description: 'Access to a team of certified IT professionals for all your technology needs.',
                icon: HeadphonesIcon
              },
              {
                title: 'Strategic Planning',
                description: 'Long-term technology roadmapping aligned with your business goals and budget.',
                icon: Network
              },
              {
                title: 'Scalable Solutions',
                description: 'IT services that grow with your business, from startup to enterprise.',
                icon: Monitor
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
              >
                <div className="mb-6 relative">
                  <benefit.icon className="w-12 h-12 text-bright-cyan" />
                  <div className="absolute -inset-1 bg-bright-cyan/5 rounded-full blur-md -z-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ROI Calculator Section */}
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
              The <span className="text-bright-cyan">Cost of Downtime</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              See how much IT issues could be costing your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Downtime Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Number of Employees
                  </label>
                  <select
                    className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                  >
                    <option value="10">1-10</option>
                    <option value="25">11-25</option>
                    <option value="50">26-50</option>
                    <option value="100">51-100</option>
                    <option value="250">101-250</option>
                    <option value="500">251-500</option>
                    <option value="1000">501+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Average Employee Hourly Cost (Salary + Benefits)
                  </label>
                  <select
                    className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                  >
                    <option value="25">$25/hour</option>
                    <option value="50">$50/hour</option>
                    <option value="75">$75/hour</option>
                    <option value="100">$100/hour</option>
                    <option value="150">$150/hour</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Hours of IT Downtime Per Month
                  </label>
                  <select
                    className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="4">4 hours</option>
                    <option value="8">8 hours</option>
                    <option value="16">16+ hours</option>
                  </select>
                </div>
                
                <button
                  className="w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 rounded-lg transition duration-300 button-glow"
                >
                  Calculate Cost
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">The Real Cost of IT Issues</h3>
              
              <div className="space-y-6">
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">$5,000 - $8,000</h4>
                  <p className="text-gray-300">Average monthly cost of IT downtime for small businesses (10-25 employees)</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">$12,000 - $20,000</h4>
                  <p className="text-gray-300">Average monthly cost of IT downtime for medium businesses (26-100 employees)</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">$25,000 - $50,000+</h4>
                  <p className="text-gray-300">Average monthly cost of IT downtime for larger businesses (101+ employees)</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-bright-cyan/10">
                  <h4 className="font-bold text-white mb-2">40-60%</h4>
                  <p className="text-gray-300">Average reduction in downtime with managed IT services</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#contact-form" 
                  className="inline-block text-bright-cyan hover:text-electric-blue transition-colors font-semibold flex items-center group"
                >
                  See how much you could save with our managed IT services
                  <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
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
                quote: "Switching to CoreWerx's managed IT services was one of the best business decisions we've made. Our systems are more reliable, our team is more productive, and our IT costs are down by 35%.",
                name: "Jennifer Williams",
                title: "CEO, Marketing Agency",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "Their 24/7 monitoring has prevented several potential system failures before they impacted our business. The peace of mind knowing our IT is in expert hands is invaluable.",
                name: "David Chen",
                title: "Operations Director, Manufacturing",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                quote: "The response time is incredible. When we have an IT issue, it's usually resolved before most of our team even notices there was a problem. That's the kind of proactive support every business needs.",
                name: "Sarah Johnson",
                title: "CFO, Financial Services",
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
                question: 'What is included in your managed IT services?',
                answer: 'Our managed IT services include 24/7 monitoring and support, proactive maintenance, security management, help desk support, network administration, cloud services management, backup and disaster recovery, and strategic IT planning. We customize our services to meet your specific business needs.'
              },
              {
                question: 'How much do managed IT services cost?',
                answer: 'Our managed IT services are priced on a per-user basis, typically ranging from $75-$150 per user per month depending on the level of service and specific needs of your business. We offer transparent, predictable pricing with no hidden fees.'
              },
              {
                question: 'How quickly do you respond to IT issues?',
                answer: 'We categorize issues by severity. Critical issues affecting multiple users or core business functions receive immediate attention with a 15-minute response time. High-priority issues are addressed within 1 hour, and standard requests within 4 hours. Our average resolution time is under 2 hours.'
              },
              {
                question: 'Can we keep our existing IT person and still use your services?',
                answer: 'Absolutely. Many of our clients maintain internal IT staff who work collaboratively with our team. We can complement your existing IT resources, providing specialized expertise, 24/7 coverage, and additional support during busy periods or for complex projects.'
              },
              {
                question: 'Do you require long-term contracts?',
                answer: 'While we offer month-to-month options, our standard agreements are 12 months, which allows us to properly implement proactive measures and demonstrate the full value of our services. We offer a 30-day satisfaction guarantee for new clients.'
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
              Have more questions about our managed IT services?
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 button-glow"
            >
              Contact Our IT Experts
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
              Ready to <span className="text-bright-cyan">Transform Your IT?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium max-w-3xl mx-auto">
              Join hundreds of businesses that have simplified their IT management and reduced costs with our managed services.
            </p>
            
            <a 
              href="#contact-form" 
              className="inline-block bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-10 rounded-lg transition duration-300 button-glow text-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManagedIT;