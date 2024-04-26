import { SEEDS } from "./day_5_input.js";
import { MAPS } from "./day_5_input.js";

function testRanges(ranges, map) {
  let translatedRanges = [];

  map.forEach((entry) => {
    // ranges that overlap with this entry
    let overlappingRanges = [];
    // and ones that don't
    let otherRanges = [];

    ranges.forEach((range) => {
      const rangeIsBelowEntry =
        range[0] < entry[1] && range[0] + range[1] < entry[1];
      const rangeIsAboveEntry =
        range[0] >= entry[1] + entry[2] &&
        range[0] + range[1] > entry[1] + entry[2];

      if (rangeIsBelowEntry || rangeIsAboveEntry) {
        otherRanges.push(range);
      } else {
        overlappingRanges.push(range);
      }
    });

    overlappingRanges.forEach((oRange) => {
      // if valid lower range, add to array
      if (oRange[0] < entry[1]) {
        otherRanges.push([oRange[0], entry[1] - oRange[0]]);
      }

      // if valid upper range, add to array
      if (oRange[0] + oRange[1] > entry[1] + entry[2]) {
        otherRanges.push([
          entry[1] + entry[2],
          oRange[0] + oRange[1] - (entry[1] + entry[2]),
        ]);
      }

      // get matching range
      const matchingRangeBeg = Math.max(entry[1], oRange[0]);
      const matchingRangeSpan = Math.min(
        entry[1] + entry[2] - matchingRangeBeg,
        oRange[0] + oRange[1] - matchingRangeBeg
      );

      // translate it
      const translation = entry[0] - entry[1];
      const translatedRange = [
        matchingRangeBeg + translation,
        matchingRangeSpan,
      ];

      // add to array
      translatedRanges.push(translatedRange);
    });

    ranges = otherRanges;
  });

  return [...ranges, ...translatedRanges];
}

function getAnswer() {
  let result = Infinity;

  SEEDS.forEach((seed, idx) => {
    if (idx % 2 === 1) return;

    let ranges = [[seed, SEEDS[idx + 1]]];

    MAPS.forEach((map) => {
      ranges = testRanges(ranges, map);
    });

    ranges.forEach((range) => {
      if (range[0] < result) result = range[0];
    });
  });

  return result;
}

console.log(getAnswer()); // 69841803
