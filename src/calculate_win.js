let calculateTrioWinner = (...trio) => {
  if(trio[0] != null && trio[0] === trio[1] && trio[0] === trio[2]){
    return trio[0];
  }
  return "";
}

export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.
  let final = "";
  final += calculateTrioWinner(squares[0], squares[1], squares[2]);
  final += calculateTrioWinner(squares[0], squares[3], squares[6]);
  final += calculateTrioWinner(squares[0], squares[4], squares[8]);
  final += calculateTrioWinner(squares[3], squares[4], squares[5]);
  final += calculateTrioWinner(squares[6], squares[7], squares[8]);
  final += calculateTrioWinner(squares[6], squares[4], squares[2]);
  final += calculateTrioWinner(squares[1], squares[4], squares[7]);
  final += calculateTrioWinner(squares[2], squares[5], squares[8]);
  return final;
}
