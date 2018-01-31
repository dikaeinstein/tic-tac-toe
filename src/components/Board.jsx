import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

class Board extends React.Component {
  boardItems() {
    const items = [];
    let colStart = 0;
    let colEnd = 3;
    for (let i = 0; i < 3; i += 1) {
      const squares = [];
      for (let col = colStart; col < colEnd; col += 1) {
        const square = this.renderSquare(i, col);
        squares.push(square);
      }
      const row = <div key={i} className="board-row">{squares}</div>;
      items.push(row);
      colStart += 3;
      colEnd += 3;
    }
    return items;
  }

  renderSquare(row, col) {
    return (
      <Square
        key={col}
        value={this.props.squares[col]}
        hasStarted={this.props.hasStarted}
        onClick={() => this.props.onClick(row, col)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.boardItems()}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
  hasStarted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
