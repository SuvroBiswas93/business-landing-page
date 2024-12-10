import React from 'react';
import { Users, Building2, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { name: 'Active Users', value: '50K+', icon: Users },
  { name: 'Enterprise Clients', value: '200+', icon: Building2 },
  { name: 'Awards Won', value: '25+', icon: Award },
  { name: 'Growth Rate', value: '300%', icon: TrendingUp },
];

const container = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0.6, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Stats: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700">
      <motion.div
        ref={ref}
        // variants={container}
        // initial="hidden"
        // animate={controls}
        className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-accent-300" />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-4xl font-extrabold text-white"
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-base font-medium text-primary-100">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;