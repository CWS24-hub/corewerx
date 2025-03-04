import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Shield } from 'lucide-react';
import StaticBackground from '../components/StaticBackground';

const ContactSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      <StaticBackground src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="cyber-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to transform your IT infrastructure? Contact us for expert consultation and solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy/85 p-8 rounded-lg backdrop-blur-sm border border-bright-cyan/20"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                  placeholder="+971 50 000 0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-navy/30 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-bright-cyan"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 rounded-lg transition duration-300 button-glow"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-navy/85 p-8 rounded-lg backdrop-blur-sm border border-bright-cyan/20">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-white">Email</h3>
                    <a href="mailto:info@corewerx.ae" className="text-gray-200 hover:text-bright-cyan transition-colors">
                      info@corewerx.ae
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-white">Phone</h3>
                    <a href="tel:+971500000000" className="text-gray-200 hover:text-bright-cyan transition-colors">
                      +971 50 000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-white">Address</h3>
                    <p className="text-gray-200">
                      Dubai Silicon Oasis<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-bright-cyan flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-white">Business Hours</h3>
                    <p className="text-gray-200">
                      Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div> </div>
              </div>
            </div>

            <div className="bg-navy/85 p-8 rounded-lg backdrop-blur-sm border border-bright-cyan/20">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-bright-cyan" />
                <h2 className="text-2xl font-bold text-white">Security Consultation</h2>
              </div>
              <p className="text-gray-200 mb-6">
                Schedule a free security consultation with our cybersecurity experts to assess your current security posture and identify potential vulnerabilities.
              </p>
              <button className="w-full bg-bright-cyan hover:bg-electric-blue text-white font-bold py-3 rounded-lg transition duration-300 button-glow">
                Schedule Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;