import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  benefits,
  features,
  index
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-navy/85 backdrop-blur-sm p-6 rounded-lg transition duration-300 card-glow border border-bright-cyan/20 shadow-lg shadow-bright-cyan/5"
      >
        <div className="mb-4 relative">
          <Icon className="w-12 h-12 text-bright-cyan" />
          <div className="absolute -inset-1 bg-bright-cyan/5 rounded-full blur-md -z-10"></div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4 font-medium">{description}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-bright-cyan hover:text-electric-blue transition-colors font-semibold flex items-center group"
        >
          Learn More 
          <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        benefits={benefits}
        features={features}
        icon={Icon}
      />
    </>
  );
};

export default ServiceCard;