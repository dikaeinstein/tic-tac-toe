const calculateWinner = (squares) => {
  // All possible win lines
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const winner = lines.filter((line) => {
    const [a, b, c] = line;
    return (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  });
  const line = winner[0]; // winner is always of length = 1
  return line ? {
    winner: squares[line[0]],
    line,
  } : null;
};

export default calculateWinner;
