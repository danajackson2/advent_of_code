import { INPUT } from "./day_1_input.js";
import { decodeInput } from "./day_1_code.js";

const NUM_MAP = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function getAnswer() {
  const translatedInput = INPUT.map((str) =>
    str.replace(/one|two|three|four|five|six|seven|eight|nine/g, (match) => {
      return NUM_MAP[match];
    })
  );

  return decodeInput(translatedInput);
}

console.log(getAnswer()); // 54076
