import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '5 Projects',
      '10GB Storage',
      'Basic Analytics',
      'Email Support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'Custom Domains',
      'Team Collaboration',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Unlimited Everything',
      'Dedicated Support',
      'Custom Integration',
      'SLA Guarantee',
      'Advanced Security',
      'API Access',
    ],
    featured: false,
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

const Pricing: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="pricing" className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-primary-600">
            Choose the perfect plan for your business
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm ${
                tier.featured ? 'border-2 border-accent-400' : 'border border-primary-100'
              }`}
            >
              {tier.featured && (
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-0 right-0 left-0 bg-gradient-to-r from-accent-400 to-accent-500 px-4 py-1"
                >
                  <p className="text-xs font-medium text-white text-center">
                    Most Popular
                  </p>
                </motion.div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-primary-900">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-primary-500">
                    /month
                  </span>
                </p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="h-5 w-5 text-accent-500 mr-3" />
                      <span className="text-primary-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    tier.featured
                      ? 'bg-gradient-to-r from-accent-400 to-accent-500 text-white hover:from-accent-500 hover:to-accent-600'
                      : 'bg-primary-50 text-primary-900 hover:bg-primary-100'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;