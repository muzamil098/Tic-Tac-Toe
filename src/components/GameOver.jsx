import React from "react";

function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      {winner && (
        <>
          <h2>Game Over</h2>
          <p>Player X wins!</p>
        </>
      )}
      {!winner && (
        <>
          <h2>Game Over</h2>
          <p>It's a draw!</p>
        </>
      )}
      <p>Thanks for playing!</p>
      <button onClick={onRematch}>Play Again</button>
    </div>
  );
}

export default GameOver;
