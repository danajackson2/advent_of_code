import { INPUT } from "./day_7_input.js";
const CARD_VALUE = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
};

function handRank(hand) {
  const handMap = {};
  hand.split("").forEach((card) => {
    handMap[card] ? (handMap[card] += 1) : (handMap[card] = 1);
  });
  const vals = Object.values(handMap);

  if (vals.includes(5)) {
    return 7;
  } else if (vals.includes(4)) {
    return 6;
  } else if (vals.includes(3)) {
    if (vals.includes(2)) {
      return 5;
    } else {
      return 4;
    }
  } else if (vals.includes(2)) {
    if (vals.filter((x) => x === 2).length === 2) {
      return 3;
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}

function compareSameHands(a, b) {
  let idx = 0;

  while (a[idx] === b[idx]) {
    idx++;
  }

  return CARD_VALUE[a[idx]] - CARD_VALUE[b[idx]];
}

function getAnswer() {
  let result = 0;

  INPUT.sort((a, b) => {
    const rankDiff = handRank(a[0]) - handRank(b[0]);
    return rankDiff === 0 ? compareSameHands(a[0], b[0]) : rankDiff;
  });

  INPUT.forEach((item, idx) => {
    result += item[1] * (idx + 1);
  });

  return result;
}

console.log(getAnswer()); // 251029473
