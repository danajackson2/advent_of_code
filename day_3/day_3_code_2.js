import { INPUT } from "./day_3_input.js";
import { clearString } from "./day_3_code.js";

const NUMBER_LOCATIONS = {};

function getNumberIndices(str, num) {
  const indices = [];
  let index = str.indexOf(num);

  while (indices.length < num.length) {
    indices.push(index);
    index += 1;
  }

  return indices;
}

function testAndCompute(starIndex, inputIndex) {
  let adjacentNums = [];

  adjacentNums.push(
    ...NUMBER_LOCATIONS[inputIndex - 1]
      .filter((data) =>
        [
          Math.min(...data[1]) - 1,
          ...data[1],
          Math.max(...data[1]) + 1,
        ].includes(starIndex)
      )
      .map((res) => res[0])
  );

  adjacentNums.push(
    ...NUMBER_LOCATIONS[inputIndex]
      .filter((data) =>
        [Math.min(...data[1]) - 1, Math.max(...data[1]) + 1].includes(starIndex)
      )
      .map((res) => res[0])
  );

  adjacentNums.push(
    ...NUMBER_LOCATIONS[inputIndex + 1]
      .filter((data) =>
        [
          Math.min(...data[1]) - 1,
          ...data[1],
          Math.max(...data[1]) + 1,
        ].includes(starIndex)
      )
      .map((res) => res[0])
  );

  if (adjacentNums.length === 2) {
    return adjacentNums[0] * adjacentNums[1];
  } else return 0;
}

function getAnswer() {
  let sum = 0;

  INPUT.forEach((str, idx) => {
    const nums = str.match(/\d+/g);
    if (!nums) return;

    NUMBER_LOCATIONS[idx] = [];

    nums.forEach((num) => {
      const indices = getNumberIndices(str, num);
      str = clearString(str, indices);

      NUMBER_LOCATIONS[idx].push([num, indices]);
    });
  });

  INPUT.forEach((str, inputIndex) => {
    let starIndex = str.indexOf("*");

    while (starIndex !== -1) {
      sum += testAndCompute(starIndex, inputIndex);
      starIndex = str.indexOf("*", starIndex + 1);
    }
  });

  return sum;
}

console.log(getAnswer()); // 87605697
