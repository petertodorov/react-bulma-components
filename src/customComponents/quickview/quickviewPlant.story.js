/* eslint-disable react/prop-types */
import React from 'react';
import { QuickviewPlant } from './QuickviewPlant';

export const Default = () => {
  const quickviewId = 'quickviewPlant';
  return <QuickviewPlant quickviewId={quickviewId} isVisible />;
};
