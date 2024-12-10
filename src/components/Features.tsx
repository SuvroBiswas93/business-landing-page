import React from 'react';
import { Shield, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    name: 'Security First',
    description: 'Built-in security features to protect your data and privacy.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices.',
    icon: Zap,
  },
  {
    name: 'Premium Support',
    description: '24/7 support from our dedicated team of experts.',
    icon: Star,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Features: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <div id="features" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-primary-600 lg:mx-auto">
            Our platform provides all the tools and features you need to grow your business.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-primary-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-primary-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;