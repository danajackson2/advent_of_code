import { INPUT } from "./day_4_input.js";

function getAnswer() {
  let sum = 0;

  INPUT.forEach((i) => {
    const matchCount = i.mine.filter((num) => i.winners.includes(num)).length;
    const val = matchCount === 0 ? 0 : 1 * Math.pow(2, matchCount - 1);
    sum += val;
  });

  return sum;
}

console.log(getAnswer()); // 19135
