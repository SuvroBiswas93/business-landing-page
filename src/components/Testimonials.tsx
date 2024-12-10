import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    content: "This platform has transformed how we do business. The results have been nothing short of amazing.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The best investment we've made in our digital infrastructure. The ROI has been incredible.",
    author: "Michael Chen",
    position: "CTO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Outstanding support and fantastic features. It's helped us scale our operations efficiently.",
    author: "Emily Rodriguez",
    position: "COO, GrowthStack",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
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

const Testimonials: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-primary-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-primary-100"
            >
              <Quote className="h-8 w-8 text-accent-500 mb-4" />
              <p className="text-primary-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full ring-2 ring-accent-300"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-primary-900">{testimonial.author}</h4>
                  <p className="text-primary-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;