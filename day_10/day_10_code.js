import { INPUT } from "./day_10_input.js";

function getAnswer() {
  let startRow = -1;
  let startCol = -1;

  for (let i = 0; startCol === -1; i++) {
    startCol = INPUT[i].indexOf("S");
    if (startCol !== -1) startRow = i;
  }

  let row = startRow;
  let col = startCol;

  if (["L", "|", "J"].includes(INPUT[startRow + 1][startCol])) {
    row = startRow + 1;
  } else if (["F", "|", "7"].includes(INPUT[startRow - 1][startCol])) {
    row = startRow - 1;
  } else if (["-", "7", "J"].includes(INPUT[startRow][startCol + 1])) {
    col = startCol + 1;
  } else if (["-", "F", "L"].includes(INPUT[startRow][startCol - 1])) {
    col = startCol - 1;
  }

  let steps = 1;
  let prevRow = startRow;
  let prevCol = startCol;

  function setPrev() {
    prevRow = row;
    prevCol = col;
  }

  while (row !== startRow || col !== startCol) {
    switch (INPUT[row][col]) {
      case "L":
        if (prevRow === row - 1) {
          setPrev();
          col = col + 1;
        } else {
          setPrev();
          row = row - 1;
        }
        break;
      case "|":
        if (prevRow === row - 1) {
          setPrev();
          row = row + 1;
        } else {
          setPrev();
          row = row - 1;
        }
        break;
      case "J":
        if (prevRow === row - 1) {
          setPrev();
          col = col - 1;
        } else {
          setPrev();
          row = row - 1;
        }
        break;
      case "F":
        if (prevCol === col + 1) {
          setPrev();
          row = row + 1;
        } else {
          setPrev();
          col = col + 1;
        }
        break;
      case "7":
        if (prevCol === col - 1) {
          setPrev();
          row = row + 1;
        } else {
          setPrev();
          col = col - 1;
        }
        break;
      case "-":
        if (prevCol === col - 1) {
          setPrev();
          col = col + 1;
        } else {
          setPrev();
          col = col - 1;
        }
        break;
    }

    steps++;
  }

  return steps / 2;
}

console.log(getAnswer()); // 6733
