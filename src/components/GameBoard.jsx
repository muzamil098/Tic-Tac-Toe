import React, { useState } from "react";

export default function GameBoard({
  onSelectSquare,
  playerSymbol,
  turns,
  board,
}) {
  // let gameBoard = initialGameBoard;

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   //  Best approach to edit objects or arrays
  //   setGameBoard((prevState) => {
  //     const updatedGameBoard = [
  //       ...prevState.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = playerSymbol;
  //     return updatedGameBoard;
  //   });
  //   // we can mutate the previours arrays and objects directly, but best method is to edit an array's or object's copy rather than orignal one
  //   // setGameBoard((prevState) => {
  //   //   prevState[rowIndex][colIndex] = "X";
  //   //   return prevState;
  //   // });
  //   onSelectSquare();
  // };
  console.log("GameBoard: " + board);
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={!!playerSymbol}
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
