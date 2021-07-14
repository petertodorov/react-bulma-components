import React, { useState, useRef } from 'react';
import { PanelBlockSignal } from '../../PanelBlockSignal';
import { PanelBlockExpander } from '../../PanelBlockExpander.tsx';
import { PanelBlockSelectAll } from '../../PanelBlockSelectAll.tsx';
import { signalGroups } from '../../../mockups';
import { isAllChecked } from '../../../utils/isAllChecked';

export const TabSignals = () => {
  const [checked, setChecked] = useState(false);
  const [selectAllLabel, setSelectAllLabel] = useState('Select all');

  const panelRef = useRef(null);
  return (
    <>
      <PanelBlockSelectAll checked={checked} label={selectAllLabel} />
      <div ref={panelRef}>
        {signalGroups.map((group) => {
          const { name, signals } = group;
          return (
            <PanelBlockExpander
              key={name}
              className="px-4"
              name={name}
              expanded
            >
              <>
                {signals.map((signal) => {
                  return (
                    <PanelBlockSignal
                      key={signal.label}
                      label={signal.label}
                      uom={signal.uom}
                      uomValue={signal.uomValue}
                      onChange={() => {
                        isAllChecked(panelRef, setSelectAllLabel, setChecked);
                      }}
                    />
                  );
                })}
              </>
            </PanelBlockExpander>
          );
        })}
      </div>
    </>
  );
};
