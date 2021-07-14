import React from 'react';

const formatUom = (uom) => {
  const [name, code] = uom.split('&#');
  if (code) {
    return name + String.fromCharCode(Number.parseInt(code));
  }
  return name;
};

export const Uom = ({ uom }) => {
  if (uom) {
    return (
      <span className="is-size-small has-text-grey pl-2">
        ({formatUom(uom)})
      </span>
    );
  }
  return null;
};
