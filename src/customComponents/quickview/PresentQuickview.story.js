/* eslint-disable react/prop-types */
import React from 'react';
import { QuickviewPlant } from './QuickviewPlant';
import { QuickviewButton } from './Components/QuickviewButton.tsx';

export const Default = () => {
  const quickviewId = 'quickviewPlant';
  const visibility = true;
  return (
    <>
      <QuickviewButton
        dataTarget={quickviewId}
        dataShow="quickview"
        className="is-rounded"
        label="Signals"
        icon="fas fa-eye"
      />
      <QuickviewPlant quickviewId={quickviewId} isVisible={visibility} />
    </>
  );
};
