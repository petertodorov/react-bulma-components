import React from 'react';
import { Form } from '../../..';

export const Checkbox = ({ className, label, checked, inputId }) => {
  const classStr = ['checkbox m-0', className]
    .filter(Boolean)
    .join(' ')
    .trimEnd();
  return (
    <Form.Label className={classStr}>
      {checked ? (
        <Form.Input type="checkbox" checked id={inputId} />
      ) : (
        <Form.Input type="checkbox" id={inputId} />
      )}
      <span className="checkbox__input" />
      <span className="checkbox__label">{label}</span>
    </Form.Label>
  );
};
