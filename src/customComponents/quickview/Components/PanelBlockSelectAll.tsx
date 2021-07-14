import React from 'react';
import { Checkbox } from './Checkbox';
import { Panel, Button } from '../../..';
import { Form } from '../../../..';

export interface PanelBlockSelectAllProps {
  checked?: boolean;
  label?: string;
}

export const PanelBlockSelectAll: React.FC<PanelBlockSelectAllProps> = ({
  checked,
  label,
}): JSX.Element => {
  return (
    <Panel.Block className="is-sticky is-top has-z-index-1 px-4 py-3">
      <Form.Field className="is-grouped is-full-width is-align-items-center">
        <Form.Control className="is-expanded">
          <Checkbox
            inputId="panelBlockSelectAll"
            label={`${label || ''}`}
            className="is-small"
            checked={checked}
          />
        </Form.Control>
        <Form.Control>
          <Button className="is-primary is-rounded is-small modal-button">
            Trend chart
          </Button>
        </Form.Control>
      </Form.Field>
    </Panel.Block>
  );
};
