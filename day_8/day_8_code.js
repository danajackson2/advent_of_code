import { INPUT, DIRECTIONS } from "./day_8_input.js";

function getAnswer() {
  let counter = 0;
  let current = "AAA";

  while (current !== "ZZZ") {
    const idx = DIRECTIONS[counter % DIRECTIONS.length] === "L" ? 0 : 1;
    current = INPUT[current][idx];
    counter += 1;
  }

  return counter;
}

console.log(getAnswer()); // 18157
