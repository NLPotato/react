import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Board from './components/Board'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [hist, setHist] = useState([squares]);
  const [idx, setIdx] = useState(0);

  function handleClick() {
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? 'X' : 'O';
    console.log("click!")
    console.log(newSquares);
    setIdx(idx + 1);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setHist(hist.push(newSquares));
  }

  return (
    <div className="gaem">
      <div className="game-board">
        <Board squares={squares} xIsNext={xIsNext} onClick={handleClick} />
      </div>
      <div className="game-info">
        game info
      </div>
    </div>
  );
}

export default App;
