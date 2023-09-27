import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Board from './components/Board'

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [hist, setHist] = useState([Array(9).fill(null)]); // history
  const [idx, setIdx] = useState(0); /// currentMove
  const currentSquares = hist[idx];

  function handleClick(newSquares, idx) {
    const newHist = [...hist.slice(0, idx + 1), newSquares];
    setHist(newHist);
    setIdx(newHist.length - 1);
    newSquares[idx] = xIsNext ? 'X' : 'O';
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onClick={handleClick} />
      </div>
      <div className="game-info">
        game info
      </div>
    </div>
  );
}

export default App;
