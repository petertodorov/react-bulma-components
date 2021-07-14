import React, { useRef, useState } from 'react';
import { PanelBlockSignal } from './Components/PanelBlockSignal';
import { PanelBlockExpander } from './Components/PanelBlockExpander.tsx';
import { PanelBlockSelectAll } from './Components/PanelBlockSelectAll.tsx';

import { Panel, Tabs } from '../..';

import { signalGroups } from './mockups';
import { isAllChecked } from './utils/isAllChecked.js';
interface QuickviewProps {
  quickviewId: string;
  isVisible?: boolean;
}
export const QuickviewPlant: React.FC<QuickviewProps> = ({
  quickviewId,
  isVisible,
}): JSX.Element => {
  const [visible] = useState(isVisible ? 'is-active' : '');
  const [checked, setChecked] = useState(false);
  const [selectAllLabel, setSelectAllLabel] = useState('Select all');

  const panelRef = useRef(null);

  return (
    <div
      id={quickviewId}
      className={`flex-column is-hidden-mobile quickview is-fixed is-top ${visible}`}
    >
      <Panel className="panel--styleless" renderAs="article">
        <Tabs className="is-sticky is-top has-z-index-1  mb-0">
          <li className="tab has-text-weight-medium is-active">
            <span className=" is-clickable is-size-small">Signals</span>
          </li>
          <li className="tab has-text-weight-medium">
            <span className=" is-clickable is-size-small">Parameters</span>
          </li>
        </Tabs>
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
      </Panel>
    </div>
  );
};
