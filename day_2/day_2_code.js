import { INPUT } from "./day_2_input.js";

function isValid(string) {
  const arr = string.split(/,|;/);
  let valid = true;

  arr.forEach((item) => {
    if (
      (item.includes("red") && Number(item.replace("red", "")) > 12) ||
      (item.includes("green") && Number(item.replace("green", "")) > 13) ||
      (item.includes("blue") && Number(item.replace("blue", "")) > 14)
    ) {
      valid = false;
    }
  });

  return valid;
}

function getAnswer() {
  let total = 0;

  for (const id in INPUT) {
    if (isValid(INPUT[id])) total += Number(id);
  }

  return total;
}

console.log(getAnswer()); // 2283
