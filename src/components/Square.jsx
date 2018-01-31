import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  return (
    <button className="square" disabled={!props.hasStarted} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O']),
  onClick: PropTypes.func.isRequired,
  hasStarted: PropTypes.bool.isRequired,
};
Square.defaultProps = {
  value: null,
};

export default Square;
