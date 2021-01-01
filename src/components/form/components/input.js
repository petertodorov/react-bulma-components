import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Input = ({
  className,
  size,
  color,
  readOnly,
  isStatic,
  hovered,
  rounded,
  focused,
  name,
  ...props
}) => (
  <Element
    {...props}
    renderAs="input"
    name={name}
    readOnly={readOnly || isStatic}
    className={classnames('input', className, {
      'is-static': isStatic,
      'is-hovered': hovered,
      'is-focused': focused,
      'is-rounded': rounded,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Input.propTypes = {
  ...modifiers.propTypes,
  /**
   * Adjusts the size of this input.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of this input.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Whether this input should be read-only.
   * Equivalent to the readonly attribute of the `<input>` element.
   */
  readOnly: PropTypes.bool,
  /**
   * Whether this input should be static.
   * If true, this input will be readonly, and all the input decorations
   * are removed.
   */
  isStatic: PropTypes.bool,
  /**
   * Whether this input is in a loading state.
   */
  loading: PropTypes.bool,
  /**
   * Whether this input is in a focused state.
   */
  focused: PropTypes.bool,
  /**
   * Whether this input is in a hovered state.
   */
  hovered: PropTypes.bool,
  /**
   * Whether this input is rounded. The input will have a 50% border-radius,
   * making the left and right side fully rounded.
   */
  rounded: PropTypes.bool,
  /**
   * The name of the input field.
   * Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string,
  /**
   * Additional CSS classes to be passed to `<Form.Input />`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  type: 'text',
  size: undefined,
  color: undefined,
  readOnly: false,
  isStatic: false,
  focused: false,
  hovered: false,
  rounded: false,
  name: undefined,
};

export default Input;
