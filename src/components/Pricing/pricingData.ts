import { PricingTier } from './types';

export const pricingTiers: PricingTier[] = [
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