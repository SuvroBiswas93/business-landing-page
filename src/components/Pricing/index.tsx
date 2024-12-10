import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { pricingTiers } from './pricingData';
import PricingCard from './PricingCard';
import { Heading } from '../Typography';
import { Text } from '../Typography';

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
        <div className="text-center">
          <Heading level={2} gradient>
            Simple, Transparent Pricing
          </Heading>
          <Text size="xl" className="mt-4">
            Choose the perfect plan for your business
          </Text>
        </div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {pricingTiers.map((tier) => (
            <motion.div key={tier.name} variants={item}>
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;