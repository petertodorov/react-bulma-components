import React, { useState } from 'react';

import { Panel, Tabs } from '../..';
import { TabSignals } from './Components/Tabs/content/TabSignals';
import { TabParameters } from './Components/Tabs/content/TabParameters';

interface QuickviewProps {
  quickviewId: string;
  isVisible?: boolean;
}
export const QuickviewPlant: React.FC<QuickviewProps> = ({
  quickviewId,
  isVisible,
}): JSX.Element => {
  const [visible] = useState(isVisible ? 'is-active' : '');

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
        <TabSignals />
        <TabParameters />
      </Panel>
    </div>
  );
};
