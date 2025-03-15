import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    //  Best approach to edit objects or arrays
    setGameBoard((prevState) => {
      const updatedGameBoard = [...prevState.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
    });
    // we can mutate the previours arrays and objects directly, but best method is to edit an array's or object's copy rather than orignal one
    // setGameBoard((prevState) => {
    //   prevState[rowIndex][colIndex] = "X";
    //   return prevState;
    // });
    console.log(gameBoard);
  };
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
