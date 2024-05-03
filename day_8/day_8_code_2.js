import { INPUT, DIRECTIONS } from "./day_8_input.js";

function getSteps(current) {
  let counter = 0;

  while (current[2] !== "Z") {
    const idx = DIRECTIONS[counter % DIRECTIONS.length] === "L" ? 0 : 1;
    current = INPUT[current][idx];
    counter += 1;
  }

  return counter;
}

function LCM(arr) {
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    res = (res * arr[i]) / gcd(res, arr[i]);
  }

  return res;
}

function getAnswer() {
  const results = [];

  Object.keys(INPUT)
    .filter((i) => i[2] === "A")
    .forEach((key) => results.push(getSteps(key)));

  return LCM(results);
}

console.log(getAnswer()); // 14299763833181
