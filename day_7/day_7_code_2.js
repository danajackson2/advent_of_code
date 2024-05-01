import { INPUT, CARD_VALUE_J } from "./day_7_input.js";

function getHandRank(hand) {
  const handMap = {};
  let jokerCount = 0;

  hand.split("").forEach((card) => {
    if (card === "J") {
      jokerCount += 1;
    } else {
      handMap[card] ? (handMap[card] += 1) : (handMap[card] = 1);
    }
  });

  const vals = Object.values(handMap);

  if (vals.includes(5 - jokerCount) || jokerCount === 5) {
    return 7; // 5 kind
  } else if (vals.includes(4 - jokerCount)) {
    return 6; // 4 kind
  } else if (
    (jokerCount === 1 && vals.every((x) => x === 2)) ||
    (vals.includes(3) && vals.includes(2))
  ) {
    return 5; // full house
  } else if (vals.includes(3 - jokerCount)) {
    return 4; // 3 kind
  } else if (jokerCount === 0 && vals.filter((x) => x === 2).length === 2) {
    return 3; // 2 pair
  } else if (
    (jokerCount === 1 && vals.every((x) => x === 1)) ||
    (jokerCount === 0 && vals.includes(2))
  ) {
    return 2; // pair
  } else {
    return 1;
  }
}

export function getAnswer() {
  let result = 0;

  INPUT.sort((a, b) => {
    const aRank = getHandRank(a[0]);
    const bRank = getHandRank(b[0]);

    if (aRank === bRank) {
      let idx = 0;

      while (a[0][idx] === b[0][idx]) {
        idx++;
      }

      return CARD_VALUE_J[a[0][idx]] - CARD_VALUE_J[b[0][idx]];
    } else {
      return aRank - bRank;
    }
  });

  INPUT.forEach((item, idx) => {
    result += item[1] * (idx + 1);
  });

  return result;
}

console.log(getAnswer()); // 251003917
