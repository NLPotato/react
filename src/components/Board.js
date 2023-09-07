import React from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({ squares, xIsNext, handleClick }) => {
  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={handleClick} />
  }

  const haveWinner = (squares) => {
    const lines = [
      [0, 1, 2], // row 1
      [3, 4, 5], // row 2
      [6, 7, 8], // row 3
      [0, 3, 6], // col 1
      [1, 4, 7], // col 2
      [2, 5, 8], // col 3
      [0, 4, 8], // diagonal 1
      [2, 4, 6], // diagonal 2
    ]
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }
  const winner = haveWinner(squares);
  let status;
  winner ? status = `Winner: ${ winner }` : status = `Next Player: ${ xIsNext ? 'X' : 'O' }`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;