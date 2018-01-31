import calculateWinner from '../lib/calculateWinner';

describe('calculateWinner', () => {
  it('return object', () => {
    const squares = ['X', 'X', 'X', 'O', 'X', 'O', 'O', 7, 8];
    const actual = calculateWinner(squares);
    const expected = {
      winner: 'X',
      line: [0, 1, 2],
    };
    expect(actual).toEqual(expected);
  });
});

