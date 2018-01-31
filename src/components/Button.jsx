import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    className="btn btn-default"
    onClick={props.onClick}
  >
    {!props.hasStarted ? 'Start Game' : 'Restart Game'}
  </button>
);

Button.propTypes = {
  hasStarted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
