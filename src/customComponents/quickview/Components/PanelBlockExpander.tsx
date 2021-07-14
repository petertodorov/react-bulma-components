import React, { ReactNode, ReactNodeArray, useState } from 'react';

import { Panel, Button, Icon } from '../../..';

interface PanelBlockExpanderProps {
  className?: string;
  name?: string | number;
  expanded?: boolean;
  children?: ReactNode | ReactNodeArray;
}

export const PanelBlockExpander: React.FC<PanelBlockExpanderProps> = ({
  className,
  name,
  expanded,
  children,
}): JSX.Element => {
  // const openedIcon = 'mi mi-remove-circle-outline';
  // const closeddIcon = 'mi mi-add-circle-outline';

  const openedIcon = 'fas fa-plus';
  const closeddIcon = 'fas fa-minus';
  const [isExpanded, setIsExpanded] = useState(expanded || false);
  const [icon, setIcon] = useState(isExpanded ? openedIcon : closeddIcon);

  const handleClick = () => {
    if (icon === openedIcon) {
      setIcon(closeddIcon);
      setIsExpanded(false);
    } else {
      setIcon(openedIcon);
      setIsExpanded(true);
    }
  };
  return (
    <>
      {name && (
        <Panel.Block className={className}>
          <h6 className="is-uppercase has-text-weight-semibold is-size-7">
            {name}
          </h6>
          <span className="divider is-left my-0" />
          <Button
            className="is-light is-text is-smallest ml-4 p-0"
            onClick={handleClick}
          >
            <Icon>
              <i className={icon} />
            </Icon>
          </Button>
        </Panel.Block>
      )}
      {isExpanded && children}
    </>
  );
};
