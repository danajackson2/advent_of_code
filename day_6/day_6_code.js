import { TIME } from "./day_6_input.js";
import { DISTANCE } from "./day_6_input.js";

function getAnswer() {
  let result = 1;

  TIME.forEach((time, idx) => {
    let winCount = 0;
    const record = DISTANCE[idx];

    for (let i = 0; i <= time; i++) {
      if ((time - i) * i > record) winCount++;
    }

    result *= winCount;
  });

  return result;
}

// Alternate version that finds the beginning and end of the winning numbers range and calculates the count of possibilities from there.
// Same speed, maybe slightly slower.
function getAnswerAlt() {
  let result = 1;

  TIME.forEach((time, idx) => {
    const record = DISTANCE[idx];

    let lowestWin;
    let highestWin;

    let i = 0;
    while (i !== -1) {
      if ((time - i) * i > record) {
        lowestWin = i;
        i = -1;
      } else {
        i++;
      }
    }

    let j = time;
    while (j !== -1) {
      if ((time - j) * j > record) {
        highestWin = j;
        j = -1;
      } else {
        j = j - 1;
      }
    }

    result *= highestWin - lowestWin + 1;
  });

  return result;
}

console.log(getAnswer()); // 1710720
