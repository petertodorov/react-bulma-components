import React from 'react';
import { Checkbox } from './Checkbox';
import { Panel, Button, Icon } from '../../..';
import { Form } from '../../../..';
import { Uom } from './Uom/Uom';
import { UomValue } from './Uom/UomValue.tsx';

export const PanelBlockSignal = ({
  className,
  label,
  uom,
  uomValue,
  ...props
}) => {
  const classStr = ['is-hoverable--hard on-hover px-4 py-0', className]
    .filter(Boolean)
    .join(' ')
    .trimEnd();

  return (
    <Panel.Block className={classStr} {...props}>
      <Form.Field className="has-addons is-full-width is-align-items-center">
        <Checkbox className="is-small py-2" label={label} />

        <Uom uom={uom} />
        <div className="is-flex is-flex-grow-1 is-justify-content-flex-end">
          <UomValue uomValue={uomValue} />

          <Button className="icon is-smallest is-text is-primary on-hover--show-display p-0">
            <Icon>
              <i className="fas fa-chart-area is-size-6" />
            </Icon>
          </Button>
        </div>
      </Form.Field>
    </Panel.Block>
  );
};
