import { INPUT } from "./day_9_input.js";

function getDifference(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i + 1] - arr[i]);
  }

  if (newArr.every((i) => i === 0)) {
    return arr[arr.length - 1];
  } else {
    return arr[arr.length - 1] + getDifference(newArr);
  }
}

function getAnswer() {
  return INPUT.reduce((acc, arr) => acc + getDifference(arr), 0);
}

console.log(getAnswer()); // 1581679977
