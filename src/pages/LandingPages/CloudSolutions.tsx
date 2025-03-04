import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const CloudSolutions = () => {
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

  const benefits = [
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Instantly scale resources up or down based on demand, ensuring optimal performance during peak times.'
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with advanced threat protection, data encryption, and compliance controls.'
    },
    {
      icon: Server,
      title: 'Cost Optimization',
      description: 'Pay only for what you use with transparent pricing and tools to monitor and control cloud spending.'
    },
    {
      icon: Database,
      title: 'Business Continuity',
      description: 'Automatic backups, disaster recovery, and high availability to keep your business running.'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="Cloud Technology" 
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
                <span className="text-bright-cyan font-semibold">Enterprise Cloud Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Transform Your Business with <span className="text-bright-cyan">Cloud Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Scalable, secure, and cost-effective cloud solutions tailored for your enterprise. Reduce costs and improve performance with our expert cloud services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-bright-cyan hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 button-glow"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#benefits" 
                  className="border border-bright-cyan/30 hover:border-bright-cyan/60 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 bg-navy/50 backdrop-blur-sm"
                >
                  Explore Benefits
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
                  <span className="text-bright-cyan font-bold">500+</span> businesses trust our cloud solutions
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
                <Cloud className="w-16 h-16 text-bright-cyan mb-6" />
                <div className="absolute -inset-1 bg-bright-cyan/10 rounded-full blur-md -z-10"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our Cloud Solutions?</h3>
              
              <ul className="space-y-4">
                {[
                  'Reduce IT infrastructure costs by up to 30%',
                  'Improve system performance and reliability',
                  'Scale resources on-demand as your business grows',
                  'Enterprise-grade security and compliance',
                  '24/7 expert support and monitoring',
                  'Seamless migration with zero downtime'
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
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Benefits of Our <span className="text-bright-cyan">Cloud Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Our enterprise cloud solutions are designed to transform your business operations, reduce costs, and improve performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg transition duration-300 card-glow border border-bright-cyan/20 shadow-lg shadow-bright-cyan/5"
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
      
      {/* Case Studies Section */}
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
              Success <span className="text-bright-cyan">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              See how our cloud solutions have transformed businesses across industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'Financial Services Firm',
                result: '35% reduction in IT costs',
                description: 'Migrated legacy systems to Azure cloud, improving security and reducing operational costs.'
              },
              {
                company: 'Healthcare Provider',
                result: '99.99% uptime achieved',
                description: 'Implemented high-availability cloud infrastructure for critical patient systems.'
              },
              {
                company: 'E-commerce Platform',
                result: '3x faster application performance',
                description: 'Optimized cloud architecture to handle peak shopping seasons with zero downtime.'
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy/85 backdrop-blur-sm p-8 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5"
              >
                <div className="mb-4 text-bright-cyan font-bold text-lg">{study.company}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{study.result}</h3>
                <p className="text-gray-300 font-medium mb-6">{study.description}</p>
                <a href="#contact-form" className="text-bright-cyan hover:text-electric-blue transition-colors font-semibold flex items-center group">
                  Read Full Case Study 
                  <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
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
                Ready to Transform Your <span className="text-bright-cyan">IT Infrastructure?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Schedule a free consultation with our cloud experts to discuss your business needs and how our solutions can help you achieve your goals.
              </p>
              
              <div className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg shadow-bright-cyan/5 mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">What You'll Get:</h3>
                <ul className="space-y-3">
                  {[
                    'Personalized cloud strategy assessment',
                    'Cost-benefit analysis of cloud migration',
                    'Security and compliance evaluation',
                    'Custom implementation roadmap',
                    'Transparent pricing with no hidden fees'
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Cloud Expert" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-bright-cyan"
                />
                <div>
                  <p className="text-white font-bold">Michael Chen</p>
                  <p className="text-gray-300">Chief Cloud Architect</p>
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
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Consultation</h3>
              
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 text-white p-6 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Thank You!</h4>
                    <p>Your request has been submitted successfully. One of our cloud experts will contact you within 24 hours to schedule your free consultation.</p>
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
                      Tell us about your cloud needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bright-cyan"
                      placeholder="I'm interested in migrating our infrastructure to the cloud..."
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
                        <span>Schedule My Free Consultation</span>
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
                question: 'How long does cloud migration typically take?',
                answer: 'The timeline for cloud migration varies depending on the complexity of your infrastructure, but typically ranges from 2-12 weeks. Our phased approach ensures minimal disruption to your business operations during the transition.'
              },
              {
                question: 'Is cloud computing secure for sensitive business data?',
                answer: 'Yes, our cloud solutions implement enterprise-grade security measures including encryption, access controls, compliance frameworks, and continuous monitoring. Many businesses find that cloud security exceeds what they can implement on-premises.'
              },
              {
                question: 'How much can we expect to save by moving to the cloud?',
                answer: 'Most businesses see a 20-30% reduction in IT costs after migrating to the cloud. This comes from reduced hardware costs, lower maintenance requirements, optimized resource usage, and improved operational efficiency.'
              },
              {
                question: 'Can we keep some systems on-premises while moving others to the cloud?',
                answer: 'Absolutely. We specialize in hybrid cloud solutions that allow you to maintain certain systems on-premises while leveraging cloud benefits for others. This approach is ideal for businesses with specific compliance or legacy system requirements.'
              },
              {
                question: 'What kind of support do you provide after migration?',
                answer: 'We offer 24/7 monitoring and support for all our cloud solutions. Our team proactively manages your cloud infrastructure, optimizes performance, implements security updates, and provides technical support whenever you need it.'
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
              Still have questions about our cloud solutions?
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 px-8 rounded-lg transition duration-300 button-glow"
            >
              Contact Our Cloud Experts
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
              Ready to Transform Your Business with <span className="text-bright-cyan">Cloud Technology?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-medium max-w-3xl mx-auto">
              Join hundreds of businesses that have revolutionized their IT infrastructure with our cloud solutions.
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

export default CloudSolutions;