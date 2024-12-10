import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from './common/Tooltip';
import { GlassCard } from './effects/GlassCard';

const CTA: React.FC = () => {
  return (
    <section className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <GlassCard className="relative p-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative lg:col-span-1">
              <motion.h2 
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to get started?
                <Tooltip content="Join thousands of happy customers!">
                  <Sparkles className="inline-block ml-2 h-6 w-6 text-accent-300" />
                </Tooltip>
              </motion.h2>
              <p className="mt-4 text-lg text-blue-100">
                Join thousands of satisfied customers who are already transforming their business with our platform.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-1">
              <form className="sm:flex">
                <input
                  type="email"
                  placeholder="Enter your email for something magical ✨"
                  className="w-full px-5 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <Tooltip content="Start your journey today!">
                  <button
                    type="submit"
                    className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Tooltip>
              </form>
              <p className="mt-3 text-sm text-blue-100">
                ⚡️ Try it free for 14 days • No credit card required • Instant setup
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CTA;