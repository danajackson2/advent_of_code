import { INPUT } from "./day_1_input.js";

export function decodeInput(input) {
  const nums = input.map((str) => {
    const arr = str.match(/\d+/g).join("").split("");
    const length = arr.length;

    if (length === 0) {
      return 0;
    } else {
      const newNum = `${Number(arr[0])}${Number(arr[length - 1])}`;
      return Number(newNum);
    }
  });
  return nums.reduce((a, b) => a + b, 0);
}

console.log(decodeInput(INPUT)); // 54561
