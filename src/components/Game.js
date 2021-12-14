import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const deepCopy = (arr) => {
  let copy = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copy.push(deepCopy(elem));
    } else {
      copy.push(elem);
    }
  });
  return copy;
};

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  let [history, setHistory] = useState([
    [null, null, null, null, null, null, null, null, null],
  ]);
  let [boardVals, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  let [stepNumber, setStepNumber] = useState(0);
  let [xIsNext, setXIsNext] = useState(true);
  let currentWinner = calculateWinner(history[stepNumber]);
  let boardSymb;
  if (stepNumber % 2 === 0) {
    boardSymb = "X";
  } else {
    boardSymb = "O";
  }

  let handleClick = (index) => {
    if (
      currentWinner === "X" ||
      currentWinner === "O" ||
      history[stepNumber][index] != null ||
      !(stepNumber < 9)
    ) {
      return;
    }
    stepNumber += 1;
    if (stepNumber < history.length) {
      history = deepCopy(history.slice(0, stepNumber));
    }
    history.push(history[stepNumber - 1].map((x) => x));
    history[stepNumber][index] = boardSymb;
    setStepNumber(stepNumber);
    setHistory(history);
  };

  let jumpTo = (step) => {
    setStepNumber(step);
  };

  let result = () => {
    if (currentWinner) {
      return "Winner: " + currentWinner;
    } else if (stepNumber < 9) {
      return "Next Player: " + boardSymb;
    } else {
      return "Tie Game";
    }
  };

  let renderMoves = () => {
    let out = [<button onClick={() => jumpTo(0)}>Go to Start</button>];
    for (let i = 1; i < history.length; i++) {
      out.push(<button onClick={() => jumpTo(i)}>Go to Move #{i}</button>);
    }
    return out;
  };

  return (
    <>
      <div className="title">Tic Tac Toe</div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <ul className="container">
        <div className="flex-item2">
          <div className="history">History</div>
          {renderMoves()}
        </div>
        <div className="flex-item">
          <div className="result">{result()}</div>
        </div>
      </ul>
    </>
  );
};

export default Game;
