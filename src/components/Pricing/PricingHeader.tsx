import React from 'react';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';

const PricingHeader: React.FC = () => {
  return (
    <div className="text-center">
      <Heading level={2} gradient>
        Simple, Transparent Pricing
      </Heading>
      <Text size="xl" className="mt-4">
        Choose the perfect plan for your business
      </Text>
    </div>
  );
};

export default PricingHeader;