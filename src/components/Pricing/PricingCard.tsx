import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingTier } from './types';
import { GlassCard } from '../effects/GlassCard';
import { Tooltip } from '../common/Tooltip';

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { rotateY: 0 },
        hover: { rotateY: 10, scale: 1.02 }
      }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className={`relative ${
        tier.featured ? 'border-2 border-accent-400' : 'border border-primary-100'
      }`}>
        {tier.featured && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-0 right-0 left-0 bg-gradient-to-r from-accent-400/80 to-accent-500/80 backdrop-blur-sm px-4 py-1"
          >
            <p className="text-xs font-medium text-white text-center flex items-center justify-center">
              Most Popular <Sparkles className="ml-1 h-3 w-3" />
            </p>
          </motion.div>
        )}
        <motion.div 
          className="p-8"
          variants={{
            hover: {
              y: -5,
              transition: { duration: 0.2 }
            }
          }}
        >
          <Tooltip content={`Perfect for ${tier.name === 'Starter' ? 'small teams' : tier.name === 'Professional' ? 'growing businesses' : 'large organizations'}`}>
            <h3 className="text-2xl font-bold text-primary-900 inline-flex items-center">
              {tier.name}
              <Sparkles className="ml-2 h-5 w-5 text-accent-400" />
            </h3>
          </Tooltip>
          <motion.div 
            className="mt-4 flex items-baseline"
            variants={{
              hover: {
                scale: 1.05,
                transition: { duration: 0.2 }
              }
            }}
          >
            <span className="text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              ${tier.price}
            </span>
            <span className="ml-1 text-xl font-semibold text-primary-500">
              /month
            </span>
          </motion.div>
          <ul className="mt-8 space-y-4">
            {tier.features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-center"
                variants={{
                  hover: {
                    x: 10,
                    transition: { duration: 0.2 }
                  }
                }}
              >
                <Check className="h-5 w-5 text-accent-500 mr-3" />
                <span className="text-primary-600">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <Tooltip content="Start your journey today!">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                tier.featured
                  ? 'bg-gradient-to-r from-accent-400/90 to-accent-500/90 text-white hover:from-accent-500/90 hover:to-accent-600/90'
                  : 'bg-primary-50/50 text-primary-900 hover:bg-primary-100/50'
              }`}
            >
              Get Started
            </motion.button>
          </Tooltip>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

export default PricingCard;