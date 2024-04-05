import { INPUT } from "./day_3_input.js";

let SYMBOL_LOCATIONS = {};

function getSymbolIndices(str, symbol) {
  const indices = [];
  let index = str.indexOf(symbol);

  while (index !== -1) {
    indices.push(index);
    index = str.indexOf(symbol, index + 1);
  }

  return indices;
}

function isValid(indices, inputIndex) {
  const idxBefore = Math.min(...indices) - 1;
  const idxAfter = Math.max(...indices) + 1;

  const valid =
    SYMBOL_LOCATIONS[inputIndex - 1]?.some((item) =>
      [...indices, idxBefore, idxAfter].includes(item)
    ) ||
    SYMBOL_LOCATIONS[inputIndex]?.some((item) =>
      [idxBefore, idxAfter].includes(item)
    ) ||
    SYMBOL_LOCATIONS[inputIndex + 1]?.some((item) =>
      [...indices, idxBefore, idxAfter].includes(item)
    );

  return valid;
}

export function clearString(str, indices) {
  const arr = str.split("");
  indices.forEach((idx) => {
    arr[idx] = ".";
  });
  return arr.join("");
}

function getAnswer() {
  let sum = 0;

  INPUT.forEach((str, idx) => {
    const symbols = str.match(/[^0-9\.]/g);

    if (!symbols) return;

    SYMBOL_LOCATIONS[idx] = [];
    const uniqSymbols = Array.from(new Set(symbols));

    uniqSymbols.forEach((symbol) => {
      const indices = getSymbolIndices(str, symbol);
      SYMBOL_LOCATIONS[idx].push(...indices);
    });
  });

  INPUT.forEach((str, inputIndex) => {
    const nums = str.match(/\d+/g);

    nums.forEach((num) => {
      const digitIndices = [];
      const startingIdx = str.indexOf(num);
      let idx = startingIdx;

      while (idx - startingIdx < num.length) {
        digitIndices.push(idx);
        idx += 1;
      }

      if (isValid(digitIndices, inputIndex)) {
        sum += Number(num);
      }

      str = clearString(str, digitIndices);
    });
  });

  return sum;
}

console.log(getAnswer()); // 540212
