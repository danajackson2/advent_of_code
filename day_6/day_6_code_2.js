import { TIME } from "./day_6_input.js";
import { DISTANCE } from "./day_6_input.js";

// Alternate version from part one makes this 40% faster
function getAnswer() {
  const time = Number(TIME.join(""));
  const distance = Number(DISTANCE.join(""));

  let lowestWin;
  let highestWin;

  let i = 0;
  while (i !== -1) {
    if ((time - i) * i > distance) {
      lowestWin = i;
      i = -1;
    } else {
      i++;
    }
  }

  let j = time;
  while (j !== -1) {
    if ((time - j) * j > distance) {
      highestWin = j;
      j = -1;
    } else {
      j = j - 1;
    }
  }

  return highestWin - lowestWin + 1;
}

console.log(getAnswer()); // 35349468
