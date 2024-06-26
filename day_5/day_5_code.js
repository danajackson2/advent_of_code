import { SEEDS } from "./day_5_input.js";
import { MAPS } from "./day_5_input.js";

export function getDestination(input, map) {
  const entry = map.find(
    (entry) => input >= entry[1] && input < entry[1] + entry[2]
  );

  return entry ? entry[0] + input - entry[1] : input;
}

function getAnswer() {
  let result = Infinity;

  SEEDS.forEach((seed) => {
    let currentResult = seed;

    MAPS.forEach((map) => {
      currentResult = getDestination(currentResult, map);
    });

    if (currentResult < result) result = currentResult;
  });

  return result;
}

// console.log(getAnswer()); // 177942185
