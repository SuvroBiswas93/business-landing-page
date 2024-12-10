import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
  { name: 'Facebook', icon: Facebook, href: '#', color: '#4267B2' },
  { name: 'Instagram', icon: Instagram, href: '#', color: '#E1306C' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0077B5' },
  { name: 'GitHub', icon: Github, href: '#', color: '#333' },
];

const FooterSocial: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex space-x-6"
    >
      {socialLinks.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-primary-400 hover:text-primary-500 transition-colors"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon
            className="h-6 w-6"
            style={{ color: item.color }}
            aria-hidden="true"
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FooterSocial;