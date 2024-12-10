import React from 'react';
import { motion } from 'framer-motion';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';

const Footer: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <footer className="bg-gradient-to-b from-white to-primary-50 border-t border-primary-100">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="space-y-8 xl:col-span-1"
          >
            <Heading level={4} gradient animate={false}>
              CompanyName
            </Heading>
            <Text animate={false} className="max-w-sm">
              Making the world a better place through constructing elegant hierarchies.
            </Text>
            <FooterSocial />
          </motion.div>
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <FooterLinks />
          </div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-12 border-t border-primary-100 pt-8"
        >
          <Text size="sm" className="text-center" animate={false}>
            &copy; {new Date().getFullYear()} CompanyName, Inc. All rights reserved.
          </Text>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;