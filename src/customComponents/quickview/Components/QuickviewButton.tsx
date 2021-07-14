import React, { DOMAttributes } from 'react';

import { Panel, Button, Icon } from '../../..';

export interface QuickviewButtonProps {
  dataTarget: string;
  dataShow: string;
  className?: string;
  label?: string;
  icon?: string;
}

const handleClick = (dataTarget: string) => {
  const quickview = document.querySelector(`#${dataTarget}`);
  if (quickview?.classList.contains('is-active')) {
    return quickview?.classList.remove('is-active');
  }
  return quickview?.classList.add('is-active');
};
export const QuickviewButton: React.FC<QuickviewButtonProps> &
  DOMAttributes<HTMLButtonElement> = ({
  dataTarget,
  dataShow,
  className,
  label,
  icon,
}): JSX.Element => {
  return (
    <Button
      className={className}
      data-target={dataTarget}
      data-show={dataShow}
      onClick={() => {
        handleClick(dataTarget);
      }}
    >
      {icon && (
        <Icon>
          <i className={icon} />
        </Icon>
      )}
      <span>{label}</span>
    </Button>
  );
};
