import React from 'react';
import { motion } from 'framer-motion';

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Community', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12">
      {footerSections.map((section) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            whileHover={{ x: 5 }}
            className="text-sm font-semibold text-primary-900 tracking-wider uppercase"
          >
            {section.title}
          </motion.h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={link.href}
                  className="text-base text-primary-500 hover:text-primary-900 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;