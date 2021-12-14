import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  // TODO: Populate the board with squares
  let newSquares = [];
  for (let i = 0; i < squares.length; i++) {
    newSquares.push(
      <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
    );
  }

  return <div className="board">{newSquares}</div>;
};

export default Board;
