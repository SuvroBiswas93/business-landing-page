import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Heading, Text } from './Typography';
import { Blob } from './effects/Blob';
import { GlassCard } from './effects/GlassCard';

const Hero: React.FC = () => {
  return (
<div 
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundAttachment: 'fixed',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }}  
className="relative  h-screen justify-center items-center flex w-full bg-gradient-to-b
from-[#6366f1]
via-[#a5b4fc]
to-[#e0e7ff] overflow-hidden bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      {/* <Blob /> */}
      <div className="relative flex items-center justify-center">
        <div className="flex mx-auto justify-center items-center lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto px-4 max-w-xl sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <GlassCard className="p-8 flex items-center justify-center flex-col mx-auto">
              <Heading level={1} className="text-white">
                Transform Your
                <span className="block text-accent-400">Digital Presence</span>
              </Heading>
              <Text 
                size="xl" 
                className="mt-6 text-accent-700  font-bold  text-lg"
              >
                Empower your business with our cutting-edge solutions. 
                We help you build, grow, and scale your digital footprint.
              </Text>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-md shadow-lg bg-gradient-to-r from-accent-300/90 to-accent-400/90 backdrop-blur-sm text-primary-900 hover:from-accent-400/90 hover:to-accent-500/90 transition-all duration-300"
                >
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-md shadow-lg bg-white backdrop-blur-sm border border-accent-300/30 text-accent-500 hover:text-white hover:bg-accent-300/20 transition-all duration-300"
                >
                  Learn more
                </motion.button>
              </motion.div>
            </GlassCard>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 sm:mt-16 lg:mt-0"
          > */}
            {/* <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <GlassCard className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="Workspace"
                />
              </GlassCard>
            </div> */}
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;