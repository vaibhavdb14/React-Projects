import { useState } from "react";
import Board from "./Board";
import Status from "./Status";
import "../styles/game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleSquareClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>

      <Status winner={winner} isXTurn={isXTurn} board={board} />

      <Board board={board} onSquareClick={handleSquareClick} />

      <button className="reset-btn" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
};

export default Game;

/* Winner Logic */
function calculateWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
