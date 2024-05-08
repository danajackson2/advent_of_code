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
  let lastMove;

  if (["L", "|", "J"].includes(INPUT[startRow + 1][startCol])) {
    row = startRow + 1;
    lastMove = "down";
  } else if (["F", "|", "7"].includes(INPUT[startRow - 1][startCol])) {
    row = startRow - 1;
    lastMove = "up";
  } else if (["-", "F", "L"].includes(INPUT[startRow][startCol - 1])) {
    col = startCol - 1;
    lastMove = "left";
  } else if (["-", "7", "J"].includes(INPUT[startRow][startCol + 1])) {
    col = startCol + 1;
    lastMove = "right";
  }

  let steps = 1;

  function moveUp() {
    row = row - 1;
    lastMove = "up";
  }

  function moveDown() {
    row = row + 1;
    lastMove = "down";
  }

  function moveLeft() {
    col = col - 1;
    lastMove = "left";
  }

  function moveRight() {
    col = col + 1;
    lastMove = "right";
  }

  while (row !== startRow || col !== startCol) {
    const current = INPUT[row][col];

    switch (lastMove) {
      case "up":
        current === "|" ? moveUp() : current === "F" ? moveRight() : moveLeft();
        break;
      case "down":
        current === "|"
          ? moveDown()
          : current === "J"
          ? moveLeft()
          : moveRight();
        break;
      case "right":
        current === "-" ? moveRight() : current === "7" ? moveDown() : moveUp();
        break;
      case "left":
        current === "-" ? moveLeft() : current === "F" ? moveDown() : moveUp();
        break;
    }

    steps++;
  }

  return steps / 2;
}

console.log(getAnswer()); // 6733
