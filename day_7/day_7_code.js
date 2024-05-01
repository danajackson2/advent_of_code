import { INPUT, CARD_VALUE } from "./day_7_input.js";

function getHandRank(hand) {
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

function compareHands(a, b) {
  const aRank = getHandRank(a);
  const bRank = getHandRank(b);

  if (aRank === bRank) {
    let idx = 0;

    while (a[idx] === b[idx]) {
      idx++;
    }

    return CARD_VALUE[a[idx]] - CARD_VALUE[b[idx]];
  } else {
    return aRank - bRank;
  }
}

function getAnswer() {
  let result = 0;

  INPUT.sort((a, b) => compareHands(a[0], b[0]));

  INPUT.forEach((item, idx) => {
    result += item[1] * (idx + 1);
  });

  return result;
}

console.log(getAnswer()); // 251029473
