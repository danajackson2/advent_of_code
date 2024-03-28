import { INPUT } from "./day_2_input.js";

function getPower(string) {
  let maxRed = 1;
  let maxGreen = 1;
  let maxBlue = 1;

  const arr = string.split(/,|;/);

  arr.forEach((item) => {
    if (item.includes("red") && Number(item.replace("red", "") > maxRed)) {
      maxRed = Number(item.replace("red", ""));
    } else if (
      item.includes("green") &&
      Number(item.replace("green", "") > maxGreen)
    ) {
      maxGreen = Number(item.replace("green", ""));
    } else if (
      item.includes("blue") &&
      Number(item.replace("blue", "") > maxBlue)
    ) {
      maxBlue = Number(item.replace("blue", ""));
    }
  });

  return maxRed * maxGreen * maxBlue;
}

function getAnswer() {
  let total = 0;

  for (const id in INPUT) {
    total += getPower(INPUT[id]);
  }

  return total;
}

console.log(getAnswer()); // 78669
